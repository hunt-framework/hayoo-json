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
        "word": "threepenny-gui"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Coupon",
          "name": "Coupon",
          "package": "threepenny-gui",
          "source": "src/Foreign-Coupon.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foreign Coupon",
          "module": "Foreign.Coupon",
          "name": "Coupon",
          "package": "threepenny-gui",
          "partial": "Coupon",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoupons can be used as a proxy for \u003ccode\u003e\u003ca\u003eItem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe important point is that coupons can be serialized and sent\n over a remote connection.\n\u003c/p\u003e\u003cp\u003eCoupons are in bijection with items:\n Different coupons will yield different items while\n the same item will always be associated to the same coupon.\n\u003c/p\u003e",
          "module": "Foreign.Coupon",
          "name": "Coupon",
          "package": "threepenny-gui",
          "source": "src/Foreign-Coupon.html#Coupon",
          "type": "type"
        },
        "index": {
          "description": "Coupons can be used as proxy for Item The important point is that coupons can be serialized and sent over remote connection Coupons are in bijection with items Different coupons will yield different items while the same item will always be associated to the same coupon",
          "hierarchy": "Foreign Coupon",
          "module": "Foreign.Coupon",
          "name": "Coupon",
          "package": "threepenny-gui",
          "partial": "Coupon",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#t:Coupon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eItems represent foreign objects.\n The intended use case is that these objects do not live in RAM,\n but are only accessible via a remote connection.\n\u003c/p\u003e\u003cp\u003eThe foreign object can be accessed by means of the item data of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Coupon",
          "name": "Item",
          "package": "threepenny-gui",
          "source": "src/Foreign-Coupon.html#Item",
          "type": "type"
        },
        "index": {
          "description": "Items represent foreign objects The intended use case is that these objects do not live in RAM but are only accessible via remote connection The foreign object can be accessed by means of the item data of type",
          "hierarchy": "Foreign Coupon",
          "module": "Foreign.Coupon",
          "name": "Item",
          "package": "threepenny-gui",
          "partial": "Item",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#t:Item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemote boothes are a mapping from \u003ccode\u003e\u003ca\u003eCoupon\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eItem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePrize boothes are neutral concerning garbage collection,\n they do not keep items alive.\n Moreover, items will be deleted from the booth when they are garbage collected.\n\u003c/p\u003e",
          "module": "Foreign.Coupon",
          "name": "PrizeBooth",
          "package": "threepenny-gui",
          "source": "src/Foreign-Coupon.html#PrizeBooth",
          "type": "data"
        },
        "index": {
          "description": "Remote boothes are mapping from Coupon to Item Prize boothes are neutral concerning garbage collection they do not keep items alive Moreover items will be deleted from the booth when they are garbage collected",
          "hierarchy": "Foreign Coupon",
          "module": "Foreign.Coupon",
          "name": "PrizeBooth",
          "package": "threepenny-gui",
          "partial": "Prize Booth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#t:PrizeBooth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a finalizer that is run when the item is garbage collected.\n\u003c/p\u003e\u003cp\u003eThe coupon cannot be redeemed anymore while the finalizer runs.\n\u003c/p\u003e",
          "module": "Foreign.Coupon",
          "name": "addFinalizer",
          "package": "threepenny-gui",
          "signature": "Item a -\u003e IO () -\u003e IO ()",
          "source": "src/Foreign-Coupon.html#addFinalizer",
          "type": "function"
        },
        "index": {
          "description": "Add finalizer that is run when the item is garbage collected The coupon cannot be redeemed anymore while the finalizer runs",
          "hierarchy": "Foreign Coupon",
          "module": "Foreign.Coupon",
          "name": "addFinalizer",
          "normalized": "Item a-\u003eIO()-\u003eIO()",
          "package": "threepenny-gui",
          "partial": "Finalizer",
          "signature": "Item a-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#v:addFinalizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen dealing with several foreign objects,\n it is useful to model dependencies between them.\n\u003c/p\u003e\u003cp\u003eAfter this operation, the second \u003ccode\u003e\u003ca\u003eItem\u003c/a\u003e\u003c/code\u003e will be reachable\n whenever the first one is reachable.\n For instance, you should call this function when the second foreign object\n is actually a subobject of the first one.\n\u003c/p\u003e\u003cp\u003eNote: It is possible to model dependencies in the \u003ccode\u003eparent\u003c/code\u003e data,\n but the \u003ccode\u003e\u003ca\u003eaddReachable\u003c/a\u003e\u003c/code\u003e method is preferrable,\n as it allows all child object to be garbage collected at once.\n\u003c/p\u003e",
          "module": "Foreign.Coupon",
          "name": "addReachable",
          "package": "threepenny-gui",
          "signature": "Item a -\u003e Item a -\u003e IO ()",
          "source": "src/Foreign-Coupon.html#addReachable",
          "type": "function"
        },
        "index": {
          "description": "When dealing with several foreign objects it is useful to model dependencies between them After this operation the second Item will be reachable whenever the first one is reachable For instance you should call this function when the second foreign object is actually subobject of the first one Note It is possible to model dependencies in the parent data but the addReachable method is preferrable as it allows all child object to be garbage collected at once",
          "hierarchy": "Foreign Coupon",
          "module": "Foreign.Coupon",
          "name": "addReachable",
          "normalized": "Item a-\u003eItem a-\u003eIO()",
          "package": "threepenny-gui",
          "partial": "Reachable",
          "signature": "Item a-\u003eItem a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#v:addReachable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear all dependencies.\n\u003c/p\u003e\u003cp\u003eReachability of this \u003ccode\u003e\u003ca\u003eItem\u003c/a\u003e\u003c/code\u003e no longer implies reachability\n of other items, as formerly implied by calls to \u003ccode\u003e\u003ca\u003eaddReachable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Coupon",
          "name": "clearReachable",
          "package": "threepenny-gui",
          "signature": "Item a -\u003e IO ()",
          "source": "src/Foreign-Coupon.html#clearReachable",
          "type": "function"
        },
        "index": {
          "description": "Clear all dependencies Reachability of this Item no longer implies reachability of other items as formerly implied by calls to addReachable",
          "hierarchy": "Foreign Coupon",
          "module": "Foreign.Coupon",
          "name": "clearReachable",
          "normalized": "Item a-\u003eIO()",
          "package": "threepenny-gui",
          "partial": "Reachable",
          "signature": "Item a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#v:clearReachable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestroy an item and run all finalizers for it.\n Coupons for this item can no longer be redeemed.\n\u003c/p\u003e",
          "module": "Foreign.Coupon",
          "name": "destroy",
          "package": "threepenny-gui",
          "signature": "Item a -\u003e IO ()",
          "source": "src/Foreign-Coupon.html#destroy",
          "type": "function"
        },
        "index": {
          "description": "Destroy an item and run all finalizers for it Coupons for this item can no longer be redeemed",
          "hierarchy": "Foreign Coupon",
          "module": "Foreign.Coupon",
          "name": "destroy",
          "normalized": "Item a-\u003eIO()",
          "package": "threepenny-gui",
          "signature": "Item a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#v:destroy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a coupon to the prize booth and maybe you'll get an item for it.\n\u003c/p\u003e",
          "module": "Foreign.Coupon",
          "name": "lookup",
          "package": "threepenny-gui",
          "signature": "Coupon -\u003e PrizeBooth a -\u003e IO (Maybe (Item a))",
          "source": "src/Foreign-Coupon.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Take coupon to the prize booth and maybe you ll get an item for it",
          "hierarchy": "Foreign Coupon",
          "module": "Foreign.Coupon",
          "name": "lookup",
          "normalized": "Coupon-\u003ePrizeBooth a-\u003eIO(Maybe(Item a))",
          "package": "threepenny-gui",
          "signature": "Coupon-\u003ePrizeBooth a-\u003eIO(Maybe(Item a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new item, which can be exchanged for a coupon\n at an associated prize booth.\n\u003c/p\u003e\u003cp\u003eThe item can become unreachable,\n at which point it will be garbage collected,\n the finalizers will be run and its\n coupon ceases to be valid.\n\u003c/p\u003e",
          "module": "Foreign.Coupon",
          "name": "newItem",
          "package": "threepenny-gui",
          "signature": "PrizeBooth a -\u003e a -\u003e IO (Item a)",
          "source": "src/Foreign-Coupon.html#newItem",
          "type": "function"
        },
        "index": {
          "description": "Create new item which can be exchanged for coupon at an associated prize booth The item can become unreachable at which point it will be garbage collected the finalizers will be run and its coupon ceases to be valid",
          "hierarchy": "Foreign Coupon",
          "module": "Foreign.Coupon",
          "name": "newItem",
          "normalized": "PrizeBooth a-\u003ea-\u003eIO(Item a)",
          "package": "threepenny-gui",
          "partial": "Item",
          "signature": "PrizeBooth a-\u003ea-\u003eIO(Item a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#v:newItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new prize booth for creating items and trading coupons.\n\u003c/p\u003e",
          "module": "Foreign.Coupon",
          "name": "newPrizeBooth",
          "package": "threepenny-gui",
          "signature": "IO (PrizeBooth a)",
          "source": "src/Foreign-Coupon.html#newPrizeBooth",
          "type": "function"
        },
        "index": {
          "description": "Create new prize booth for creating items and trading coupons",
          "hierarchy": "Foreign Coupon",
          "module": "Foreign.Coupon",
          "name": "newPrizeBooth",
          "package": "threepenny-gui",
          "partial": "Prize Booth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#v:newPrizeBooth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an action with the item.\n\u003c/p\u003e\u003cp\u003eWhile the action is being performed, it is ensured that the item\n will not be garbage collected\n and its coupon can be succesfully redeemed at the prize booth.\n\u003c/p\u003e",
          "module": "Foreign.Coupon",
          "name": "withItem",
          "package": "threepenny-gui",
          "signature": "Item a -\u003e (Coupon -\u003e a -\u003e IO b) -\u003e IO b",
          "source": "src/Foreign-Coupon.html#withItem",
          "type": "function"
        },
        "index": {
          "description": "Perform an action with the item While the action is being performed it is ensured that the item will not be garbage collected and its coupon can be succesfully redeemed at the prize booth",
          "hierarchy": "Foreign Coupon",
          "module": "Foreign.Coupon",
          "name": "withItem",
          "normalized": "Item a-\u003e(Coupon-\u003ea-\u003eIO b)-\u003eIO b",
          "package": "threepenny-gui",
          "partial": "Item",
          "signature": "Item a-\u003e(Coupon-\u003ea-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Foreign-Coupon.html#v:withItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "Attributes",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Attributes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "Attributes",
          "package": "threepenny-gui",
          "partial": "Attributes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "action",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "action",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "align",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#align",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "align",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "alink",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#alink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "alink",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:alink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "alt",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#alt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "alt",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "altcode",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#altcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "altcode",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:altcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "archive",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#archive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "archive",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:archive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "background",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#background",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "background",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:background"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "base",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#base",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "base",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "bgcolor",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#bgcolor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "bgcolor",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:bgcolor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "border",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Int",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#border",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "border",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:border"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "bordercolor",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#bordercolor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "bordercolor",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:bordercolor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "cellpadding",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Int",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#cellpadding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "cellpadding",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:cellpadding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "cellspacing",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Int",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#cellspacing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "cellspacing",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:cellspacing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003echecked\u003c/code\u003e status of an input element of type checkbox.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "checked",
          "package": "threepenny-gui",
          "signature": "Attr Element Bool",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#checked",
          "type": "function"
        },
        "index": {
          "description": "The checked status of an input element of type checkbox",
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "checked",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:checked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "checked_",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Bool",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#checked_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "checked_",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:checked_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "class_",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#class_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "class_",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:class_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "clear_",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#clear_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "clear_",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:clear_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "code_",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#code_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "code_",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:code_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "codebase",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#codebase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "codebase",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:codebase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "color",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "color",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "cols",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#cols",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "cols",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:cols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "colspan",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Int",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#colspan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "colspan",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:colspan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "compact",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Bool",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#compact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "compact",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:compact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "content",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#content",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "content",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "coords",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#coords",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "coords",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:coords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eenabled\u003c/code\u003e status of an input element\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "enabled",
          "package": "threepenny-gui",
          "signature": "Attr Element Bool",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#enabled",
          "type": "function"
        },
        "index": {
          "description": "The enabled status of an input element",
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "enabled",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:enabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "enctype",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#enctype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "enctype",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:enctype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "face",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#face",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "face",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:face"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "frameborder",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Int",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#frameborder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "frameborder",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:frameborder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "height",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Int",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#height",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "height",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "href",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#href",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "href",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:href"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "hspace",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Int",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#hspace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "hspace",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:hspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "httpequiv",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#httpequiv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "httpequiv",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:httpequiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "id_",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#id_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "id_",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:id_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "ismap",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Bool",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#ismap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "ismap",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:ismap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "lang",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#lang",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "lang",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:lang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "marginheight",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Int",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#marginheight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "marginheight",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:marginheight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "marginwidth",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Int",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#marginwidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "marginwidth",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:marginwidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "maxlength",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Int",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#maxlength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "maxlength",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:maxlength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "method",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "method",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "multiple",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Bool",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#multiple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "multiple",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:multiple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "name",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "name",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "nohref",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Bool",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#nohref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "nohref",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:nohref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "noresize",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Bool",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#noresize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "noresize",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:noresize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "noshade",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Bool",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#noshade",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "noshade",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:noshade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "nowrap",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Bool",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#nowrap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "nowrap",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:nowrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "rel",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "rel",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "rev",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#rev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "rev",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:rev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "rows",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#rows",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "rows",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:rows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "rowspan",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Int",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#rowspan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "rowspan",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:rowspan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "rules",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#rules",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "rules",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:rules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "scrolling",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#scrolling",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "scrolling",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:scrolling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "selected",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Bool",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#selected",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "selected",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:selected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndex of the currently selected option of a \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e\u003cp\u003eThe index starts at \u003ccode\u003e0\u003c/code\u003e.\n If no option is selected, then the selection is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "selection",
          "package": "threepenny-gui",
          "signature": "Attr Element (Maybe Int)",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#selection",
          "type": "function"
        },
        "index": {
          "description": "Index of the currently selected option of select element The index starts at If no option is selected then the selection is Nothing",
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "selection",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:selection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "shape",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "shape",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "size",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "size",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "src",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#src",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "src",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:src"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "target",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#target",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "target",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "text_",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#text_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "text_",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:text_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "type_",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#type_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "type_",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:type_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "usemap",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#usemap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "usemap",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:usemap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "valign",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#valign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "valign",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:valign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "version",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "version",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "vlink",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#vlink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "vlink",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:vlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "vspace",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Int",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#vspace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "vspace",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:vspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "width",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Int",
          "source": "src/Graphics-UI-Threepenny-Attributes.html#width",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Attributes",
          "module": "Graphics.UI.Threepenny.Attributes",
          "name": "width",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Attributes.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Canvas",
          "name": "Canvas",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Canvas.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Canvas",
          "module": "Graphics.UI.Threepenny.Canvas",
          "name": "Canvas",
          "package": "threepenny-gui",
          "partial": "Canvas",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Canvas.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Canvas",
          "name": "Canvas",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Canvas.html#Canvas",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Canvas",
          "module": "Graphics.UI.Threepenny.Canvas",
          "name": "Canvas",
          "package": "threepenny-gui",
          "partial": "Canvas",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Canvas.html#t:Canvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Canvas",
          "name": "Vector",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Canvas.html#Vector",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Canvas",
          "module": "Graphics.UI.Threepenny.Canvas",
          "name": "Vector",
          "package": "threepenny-gui",
          "partial": "Vector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Canvas.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear the canvas\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Canvas",
          "name": "clearCanvas",
          "package": "threepenny-gui",
          "signature": "Canvas -\u003e UI ()",
          "source": "src/Graphics-UI-Threepenny-Canvas.html#clearCanvas",
          "type": "function"
        },
        "index": {
          "description": "Clear the canvas",
          "hierarchy": "Graphics UI Threepenny Canvas",
          "module": "Graphics.UI.Threepenny.Canvas",
          "name": "clearCanvas",
          "normalized": "Canvas-\u003eUI()",
          "package": "threepenny-gui",
          "partial": "Canvas",
          "signature": "Canvas-\u003eUI()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Canvas.html#v:clearCanvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw the image of an image element onto the canvas at a specified position.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Canvas",
          "name": "drawImage",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Vector -\u003e Canvas -\u003e UI ()",
          "source": "src/Graphics-UI-Threepenny-Canvas.html#drawImage",
          "type": "function"
        },
        "index": {
          "description": "Draw the image of an image element onto the canvas at specified position",
          "hierarchy": "Graphics UI Threepenny Canvas",
          "module": "Graphics.UI.Threepenny.Canvas",
          "name": "drawImage",
          "normalized": "Element-\u003eVector-\u003eCanvas-\u003eUI()",
          "package": "threepenny-gui",
          "partial": "Image",
          "signature": "Element-\u003eVector-\u003eCanvas-\u003eUI()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Canvas.html#v:drawImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Core",
          "name": "Core",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Core.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "Core",
          "package": "threepenny-gui",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttributes can be \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "Attr",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Core.html#Attr",
          "type": "type"
        },
        "index": {
          "description": "Attributes can be set and get",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "Attr",
          "package": "threepenny-gui",
          "partial": "Attr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecord for configuring the Threepenny GUI server.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "Config",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Internal-Types.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Record for configuring the Threepenny GUI server",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "Config",
          "package": "threepenny-gui",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Core",
          "name": "Element",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Core.html#Element",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "Element",
          "package": "threepenny-gui",
          "partial": "Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData from an event. At the moment it is empty.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "EventData",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Internal-Types.html#EventData",
          "type": "data"
        },
        "index": {
          "description": "Data from an event At the moment it is empty",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "EventData",
          "package": "threepenny-gui",
          "partial": "Event Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:EventData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper class for making \u003ccode\u003e\u003ca\u003effi\u003c/a\u003e\u003c/code\u003e a variable argument function.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "FFI",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Internal-FFI.html#FFI",
          "type": "class"
        },
        "index": {
          "description": "Helper class for making ffi variable argument function",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "FFI",
          "package": "threepenny-gui",
          "partial": "FFI",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:FFI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JavaScript function with a given output type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "JSFunction",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Internal-FFI.html#JSFunction",
          "type": "data"
        },
        "index": {
          "description": "JavaScript function with given output type",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "JSFunction",
          "package": "threepenny-gui",
          "partial": "JSFunction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:JSFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttribute that only supports the \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "ReadAttr",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Core.html#ReadAttr",
          "type": "type"
        },
        "index": {
          "description": "Attribute that only supports the get operation",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "ReadAttr",
          "package": "threepenny-gui",
          "partial": "Read Attr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:ReadAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized attribute with different types for getting and setting.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "ReadWriteAttr",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Core.html#ReadWriteAttr",
          "type": "data"
        },
        "index": {
          "description": "Generalized attribute with different types for getting and setting",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "ReadWriteAttr",
          "package": "threepenny-gui",
          "partial": "Read Write Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:ReadWriteAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper class for rendering Haskell values as JavaScript expressions.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "ToJS",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Internal-FFI.html#ToJS",
          "type": "class"
        },
        "index": {
          "description": "Helper class for rendering Haskell values as JavaScript expressions",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "ToJS",
          "package": "threepenny-gui",
          "partial": "To JS",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:ToJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser interface elements are created and manipulated in the \u003ccode\u003e\u003ca\u003eUI\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThis monad is essentially just a thin wrapper around the familiar \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\nUse the \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e function to access \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operations like reading\nand writing from files.\n\u003c/p\u003e\u003cp\u003eThere are several subtle reasons why Threepenny\nuses a custom \u003ccode\u003e\u003ca\u003eUI\u003c/a\u003e\u003c/code\u003e monad instead of the standard \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e More convenience when calling JavaScript.\nThe monad keeps track of a browser \u003ccode\u003e\u003ca\u003eWindow\u003c/a\u003e\u003c/code\u003e context\nin which JavaScript function calls are executed.\n\u003c/li\u003e\u003cli\u003e Recursion for functional reactive programming.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "UI",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Core.html#UI",
          "type": "data"
        },
        "index": {
          "description": "User interface elements are created and manipulated in the UI monad This monad is essentially just thin wrapper around the familiar IO monad Use the liftIO function to access IO operations like reading and writing from files There are several subtle reasons why Threepenny uses custom UI monad instead of the standard IO monad More convenience when calling JavaScript The monad keeps track of browser Window context in which JavaScript function calls are executed Recursion for functional reactive programming",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "UI",
          "package": "threepenny-gui",
          "partial": "UI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:UI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidgets are data types that have a visual representation.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "Widget",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Core.html#Widget",
          "type": "class"
        },
        "index": {
          "description": "Widgets are data types that have visual representation",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "Widget",
          "package": "threepenny-gui",
          "partial": "Widget",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:Widget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe client browser window.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "Window",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Internal-Types.html#Window",
          "type": "type"
        },
        "index": {
          "description": "The client browser window",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "Window",
          "package": "threepenny-gui",
          "partial": "Window",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:Window"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttribute that only supports the \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "WriteAttr",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Core.html#WriteAttr",
          "type": "type"
        },
        "index": {
          "description": "Attribute that only supports the set operation",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "WriteAttr",
          "package": "threepenny-gui",
          "partial": "Write Attr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#t:WriteAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse function application.\n Allows convenient notation for setting properties.\n\u003c/p\u003e\u003cp\u003eExample usage.\n\u003c/p\u003e\u003cpre\u003e mkElement \"div\"\n     # set style     [(\"color\",\"#CCAABB\")]\n     # set draggable True\n     # set children  otherElements\n\u003c/pre\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "(#)",
          "package": "threepenny-gui",
          "signature": "a -\u003e (a -\u003e b) -\u003e b",
          "source": "src/Graphics-UI-Threepenny-Core.html#%23",
          "type": "function"
        },
        "index": {
          "description": "Reverse function application Allows convenient notation for setting properties Example usage mkElement div set style color CCAABB set draggable True set children otherElements",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "(#) #",
          "normalized": "a-\u003e(a-\u003eb)-\u003eb",
          "package": "threepenny-gui",
          "signature": "a-\u003e(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend DOM elements as children to a given element.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "(#+)",
          "package": "threepenny-gui",
          "signature": "UI Element -\u003e [UI Element] -\u003e UI Element",
          "source": "src/Graphics-UI-Threepenny-Core.html#%23%2B",
          "type": "function"
        },
        "index": {
          "description": "Append DOM elements as children to given element",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "(#+) #+",
          "normalized": "UI Element-\u003e[UI Element]-\u003eUI Element",
          "package": "threepenny-gui",
          "signature": "UI Element-\u003e[UI Element]-\u003eUI Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:-35--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient combinator for setting the CSS class on element creation.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "(#.)",
          "package": "threepenny-gui",
          "signature": "UI Element -\u003e String -\u003e UI Element",
          "source": "src/Graphics-UI-Threepenny-Core.html#%23.",
          "type": "function"
        },
        "index": {
          "description": "Convenient combinator for setting the CSS class on element creation",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "(#.) #.",
          "normalized": "UI Element-\u003eString-\u003eUI Element",
          "package": "threepenny-gui",
          "signature": "UI Element-\u003eString-\u003eUI Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:-35-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Core",
          "name": "Config",
          "package": "threepenny-gui",
          "signature": "Config",
          "source": "src/Graphics-UI-Threepenny-Internal-Types.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "Config",
          "package": "threepenny-gui",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Core",
          "name": "EventData",
          "package": "threepenny-gui",
          "signature": "EventData [Maybe String]",
          "source": "src/Graphics-UI-Threepenny-Internal-Types.html#EventData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "EventData",
          "normalized": "EventData[Maybe String]",
          "package": "threepenny-gui",
          "partial": "Event Data",
          "signature": "EventData[Maybe String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:EventData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Core",
          "name": "ReadWriteAttr",
          "package": "threepenny-gui",
          "signature": "ReadWriteAttr",
          "source": "src/Graphics-UI-Threepenny-Core.html#ReadWriteAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "ReadWriteAttr",
          "package": "threepenny-gui",
          "partial": "Read Write Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:ReadWriteAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve current \u003ccode\u003e\u003ca\u003eWindow\u003c/a\u003e\u003c/code\u003e context in the \u003ccode\u003e\u003ca\u003eUI\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "askWindow",
          "package": "threepenny-gui",
          "signature": "UI Window",
          "source": "src/Graphics-UI-Threepenny-Core.html#askWindow",
          "type": "function"
        },
        "index": {
          "description": "Retrieve current Window context in the UI monad",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "askWindow",
          "package": "threepenny-gui",
          "partial": "Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:askWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomically execute the given computation in the context of a browser window\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "atomic",
          "package": "threepenny-gui",
          "signature": "Window -\u003e IO a -\u003e IO a",
          "source": "src/Graphics-UI-Threepenny-Internal-Driver.html#atomic",
          "type": "function"
        },
        "index": {
          "description": "Atomically execute the given computation in the context of browser window",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "atomic",
          "normalized": "Window-\u003eIO a-\u003eIO a",
          "package": "threepenny-gui",
          "signature": "Window-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:atomic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTML attributes of an element.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "attr",
          "package": "threepenny-gui",
          "signature": "String -\u003e WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Core.html#attr",
          "type": "function"
        },
        "index": {
          "description": "HTML attributes of an element",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "attr",
          "normalized": "String-\u003eWriteAttr Element String",
          "package": "threepenny-gui",
          "signature": "String-\u003eWriteAttr Element String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvoke the JavaScript expression \u003ccode\u003eaudioElement.play();\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "audioPlay",
          "package": "threepenny-gui",
          "signature": "Element -\u003e UI ()",
          "source": "src/Graphics-UI-Threepenny-Core.html#audioPlay",
          "type": "function"
        },
        "index": {
          "description": "Invoke the JavaScript expression audioElement.play",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "audioPlay",
          "normalized": "Element-\u003eUI()",
          "package": "threepenny-gui",
          "partial": "Play",
          "signature": "Element-\u003eUI()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:audioPlay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvoke the JavaScript expression \u003ccode\u003eaudioElement.stop();\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "audioStop",
          "package": "threepenny-gui",
          "signature": "Element -\u003e UI ()",
          "source": "src/Graphics-UI-Threepenny-Core.html#audioStop",
          "type": "function"
        },
        "index": {
          "description": "Invoke the JavaScript expression audioElement.stop",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "audioStop",
          "normalized": "Element-\u003eUI()",
          "package": "threepenny-gui",
          "partial": "Stop",
          "signature": "Element-\u003eUI()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:audioStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall the given function with the given continuation. Doesn't block.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "callDeferredFunction",
          "package": "threepenny-gui",
          "signature": "Window-\u003e String-\u003e [String]-\u003e ([Maybe String] -\u003e IO ())-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Call the given function with the given continuation Doesn block",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "callDeferredFunction",
          "normalized": "Window-\u003eString-\u003e[String]-\u003e([Maybe String]-\u003eIO())-\u003eIO()",
          "package": "threepenny-gui",
          "partial": "Deferred Function",
          "signature": "Window-\u003eString-\u003e[String]-\u003e([Maybe String]-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:callDeferredFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given JavaScript function and wait for results. Blocks.\n\u003c/p\u003e\u003cp\u003eThe client window uses JavaScript's \u003ccode\u003eeval()\u003c/code\u003e function to run the code.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "callFunction",
          "package": "threepenny-gui",
          "signature": "JSFunction a -\u003e UI a",
          "source": "src/Graphics-UI-Threepenny-Core.html#callFunction",
          "type": "function"
        },
        "index": {
          "description": "Run the given JavaScript function and wait for results Blocks The client window uses JavaScript eval function to run the code",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "callFunction",
          "normalized": "JSFunction a-\u003eUI a",
          "package": "threepenny-gui",
          "partial": "Function",
          "signature": "JSFunction a-\u003eUI a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:callFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChild elements of a given element.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "children",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element [Element]",
          "source": "src/Graphics-UI-Threepenny-Core.html#children",
          "type": "function"
        },
        "index": {
          "description": "Child elements of given element",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "children",
          "normalized": "WriteAttr Element[Element]",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlign given elements in a column. Special case of \u003ccode\u003e\u003ca\u003egrid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "column",
          "package": "threepenny-gui",
          "signature": "[UI Element] -\u003e UI Element",
          "source": "src/Graphics-UI-Threepenny-Core.html#column",
          "type": "function"
        },
        "index": {
          "description": "Align given elements in column Special case of grid",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "column",
          "normalized": "[UI Element]-\u003eUI Element",
          "package": "threepenny-gui",
          "signature": "[UI Element]-\u003eUI Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCookies on the client.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "cookies",
          "package": "threepenny-gui",
          "signature": "ReadAttr Window [(String, String)]",
          "source": "src/Graphics-UI-Threepenny-Core.html#cookies",
          "type": "function"
        },
        "index": {
          "description": "Cookies on the client",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "cookies",
          "normalized": "ReadAttr Window[(String,String)]",
          "package": "threepenny-gui",
          "signature": "ReadAttr Window[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:cookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a message on the client console if the client has debugging enabled.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "debug",
          "package": "threepenny-gui",
          "signature": "String -\u003e UI ()",
          "source": "src/Graphics-UI-Threepenny-Core.html#debug",
          "type": "function"
        },
        "index": {
          "description": "Print message on the client console if the client has debugging enabled",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "debug",
          "normalized": "String-\u003eUI()",
          "package": "threepenny-gui",
          "signature": "String-\u003eUI()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault configuration.\n\u003c/p\u003e\u003cp\u003ePort from environment variable or \u003ccode\u003e8023\u003c/code\u003e,\n no custom HTML, no static directory, logging to stderr.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "defaultConfig",
          "package": "threepenny-gui",
          "signature": "Config",
          "source": "src/Graphics-UI-Threepenny-Internal-Types.html#defaultConfig",
          "type": "function"
        },
        "index": {
          "description": "Default configuration Port from environment variable or no custom HTML no static directory logging to stderr",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "defaultConfig",
          "package": "threepenny-gui",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:defaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the given element.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "delete",
          "package": "threepenny-gui",
          "signature": "Element -\u003e UI ()",
          "source": "src/Graphics-UI-Threepenny-Core.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete the given element",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "delete",
          "normalized": "Element-\u003eUI()",
          "package": "threepenny-gui",
          "signature": "Element-\u003eUI()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent that occurs whenever the client has disconnected,\n be it by closing the browser window or by exception.\n\u003c/p\u003e\u003cp\u003eNote: DOM Elements in the browser window that has been closed\n can no longer be manipulated.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "disconnect",
          "package": "threepenny-gui",
          "signature": "Window -\u003e Event ()",
          "source": "src/Graphics-UI-Threepenny-Core.html#disconnect",
          "type": "function"
        },
        "index": {
          "description": "Event that occurs whenever the client has disconnected be it by closing the browser window or by exception Note DOM Elements in the browser window that has been closed can no longer be manipulated",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "disconnect",
          "normalized": "Window-\u003eEvent()",
          "package": "threepenny-gui",
          "signature": "Window-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain DOM event for a given element.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "domEvent",
          "package": "threepenny-gui",
          "signature": "String-\u003e Element-\u003e Event EventData",
          "type": "function"
        },
        "index": {
          "description": "Obtain DOM event for given element",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "domEvent",
          "normalized": "String-\u003eElement-\u003eEvent EventData",
          "package": "threepenny-gui",
          "partial": "Event",
          "signature": "String-\u003eElement-\u003eEvent EventData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:domEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvience synonym for \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e to make elements work well with \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e.\n Also works on \u003ccode\u003e\u003ca\u003eWidget\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eExample usage.\n\u003c/p\u003e\u003cpre\u003e e \u003c- mkElement \"button\"\n element e # set text \"Ok\"\n\u003c/pre\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "element",
          "package": "threepenny-gui",
          "signature": "w -\u003e m Element",
          "source": "src/Graphics-UI-Threepenny-Core.html#element",
          "type": "function"
        },
        "index": {
          "description": "Convience synonym for return to make elements work well with set Also works on Widget Example usage mkElement button element set text Ok",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "element",
          "normalized": "a-\u003eb Element",
          "package": "threepenny-gui",
          "signature": "w-\u003em Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple JavaScript FFI with string substitution.\n\u003c/p\u003e\u003cp\u003eInspired by the Fay language. \u003ca\u003ehttp://fay-lang.org/\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e example :: String -\u003e Int -\u003e JSFunction String\n example = ffi \"$(%1).prop('checked',%2)\"\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003effi\u003c/a\u003e\u003c/code\u003e function takes a string argument representing the JavaScript\n code to be executed on the client.\n Occurrences of the substrings \u003ccode\u003e%1\u003c/code\u003e to \u003ccode\u003e%9\u003c/code\u003e will be replaced by\n subequent arguments.\n\u003c/p\u003e\u003cp\u003eNote: Always specify a type signature! The types automate\n how values are marshalled between Haskell and JavaScript.\n The class instances for the \u003ccode\u003e\u003ca\u003eFFI\u003c/a\u003e\u003c/code\u003e class show which conversions are supported.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "ffi",
          "package": "threepenny-gui",
          "signature": "String -\u003e a",
          "source": "src/Graphics-UI-Threepenny-Internal-FFI.html#ffi",
          "type": "function"
        },
        "index": {
          "description": "Simple JavaScript FFI with string substitution Inspired by the Fay language http fay-lang.org example String Int JSFunction String example ffi prop checked The ffi function takes string argument representing the JavaScript code to be executed on the client Occurrences of the substrings to will be replaced by subequent arguments Note Always specify type signature The types automate how values are marshalled between Haskell and JavaScript The class instances for the FFI class show which conversions are supported",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "ffi",
          "normalized": "String-\u003ea",
          "package": "threepenny-gui",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:ffi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Core",
          "name": "fromProp",
          "package": "threepenny-gui",
          "signature": "String -\u003e (Value -\u003e a) -\u003e (a -\u003e Value) -\u003e Attr Element a",
          "source": "src/Graphics-UI-Threepenny-Core.html#fromProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "fromProp",
          "normalized": "String-\u003e(Value-\u003ea)-\u003e(a-\u003eValue)-\u003eAttr Element a",
          "package": "threepenny-gui",
          "partial": "Prop",
          "signature": "String-\u003e(Value-\u003ea)-\u003e(a-\u003eValue)-\u003eAttr Element a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:fromProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet attribute value.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "get",
          "package": "threepenny-gui",
          "signature": "ReadWriteAttr x i o -\u003e x -\u003e UI o",
          "source": "src/Graphics-UI-Threepenny-Core.html#get",
          "type": "function"
        },
        "index": {
          "description": "Get attribute value",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "get",
          "normalized": "ReadWriteAttr a b c-\u003ea-\u003eUI c",
          "package": "threepenny-gui",
          "signature": "ReadWriteAttr x i o-\u003ex-\u003eUI o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Core",
          "name": "get'",
          "package": "threepenny-gui",
          "signature": "x -\u003e UI o",
          "source": "src/Graphics-UI-Threepenny-Core.html#ReadWriteAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "get'",
          "normalized": "a-\u003eUI b",
          "package": "threepenny-gui",
          "signature": "x-\u003eUI o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:get-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the body of the page.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "getBody",
          "package": "threepenny-gui",
          "signature": "Window -\u003e UI Element",
          "source": "src/Graphics-UI-Threepenny-Core.html#getBody",
          "type": "function"
        },
        "index": {
          "description": "Get the body of the page",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "getBody",
          "normalized": "Window-\u003eUI Element",
          "package": "threepenny-gui",
          "partial": "Body",
          "signature": "Window-\u003eUI Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:getBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Core",
          "name": "getElement",
          "package": "threepenny-gui",
          "signature": "w -\u003e Element",
          "source": "src/Graphics-UI-Threepenny-Core.html#getElement",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "getElement",
          "normalized": "a-\u003eElement",
          "package": "threepenny-gui",
          "partial": "Element",
          "signature": "w-\u003eElement",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:getElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an element by a particular ID.  Blocks.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "getElementById",
          "package": "threepenny-gui",
          "signature": "Window-\u003e String-\u003e UI (Maybe Element)",
          "type": "function"
        },
        "index": {
          "description": "Get an element by particular ID Blocks",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "getElementById",
          "normalized": "Window-\u003eString-\u003eUI(Maybe Element)",
          "package": "threepenny-gui",
          "partial": "Element By Id",
          "signature": "Window-\u003eString-\u003eUI(Maybe Element)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:getElementById"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of elements by particular class.  Blocks.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "getElementsByClassName",
          "package": "threepenny-gui",
          "signature": "Window-\u003e String-\u003e UI [Element]",
          "type": "function"
        },
        "index": {
          "description": "Get list of elements by particular class Blocks",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "getElementsByClassName",
          "normalized": "Window-\u003eString-\u003eUI[Element]",
          "package": "threepenny-gui",
          "partial": "Elements By Class Name",
          "signature": "Window-\u003eString-\u003eUI[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:getElementsByClassName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all elements of the given tag name.  Blocks.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "getElementsByTagName",
          "package": "threepenny-gui",
          "signature": "Window-\u003e String-\u003e UI [Element]",
          "type": "function"
        },
        "index": {
          "description": "Get all elements of the given tag name Blocks",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "getElementsByTagName",
          "normalized": "Window-\u003eString-\u003eUI[Element]",
          "package": "threepenny-gui",
          "partial": "Elements By Tag Name",
          "signature": "Window-\u003eString-\u003eUI[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:getElementsByTagName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the head of the page.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "getHead",
          "package": "threepenny-gui",
          "signature": "Window -\u003e UI Element",
          "source": "src/Graphics-UI-Threepenny-Core.html#getHead",
          "type": "function"
        },
        "index": {
          "description": "Get the head of the page",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "getHead",
          "normalized": "Window-\u003eUI Element",
          "package": "threepenny-gui",
          "partial": "Head",
          "signature": "Window-\u003eUI Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:getHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the request location.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "getRequestLocation",
          "package": "threepenny-gui",
          "signature": "Window -\u003e IO URI",
          "source": "src/Graphics-UI-Threepenny-Internal-Driver.html#getRequestLocation",
          "type": "function"
        },
        "index": {
          "description": "Get the request location",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "getRequestLocation",
          "normalized": "Window-\u003eIO URI",
          "package": "threepenny-gui",
          "partial": "Request Location",
          "signature": "Window-\u003eIO URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:getRequestLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet values from inputs. Blocks. This is faster than many \u003ccode\u003egetValue\u003c/code\u003e invocations.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "getValuesList",
          "package": "threepenny-gui",
          "signature": "[Element]-\u003e UI [String]",
          "type": "function"
        },
        "index": {
          "description": "Get values from inputs Blocks This is faster than many getValue invocations",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "getValuesList",
          "normalized": "[Element]-\u003eUI[String]",
          "package": "threepenny-gui",
          "partial": "Values List",
          "signature": "[Element]-\u003eUI[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:getValuesList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the browser \u003ccode\u003e\u003ca\u003eWindow\u003c/a\u003e\u003c/code\u003e in which the element resides.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "getWindow",
          "package": "threepenny-gui",
          "signature": "Element -\u003e IO Window",
          "source": "src/Graphics-UI-Threepenny-Core.html#getWindow",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the browser Window in which the element resides",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "getWindow",
          "normalized": "Element-\u003eIO Window",
          "package": "threepenny-gui",
          "partial": "Window",
          "signature": "Element-\u003eIO Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:getWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlign given elements in a rectangular grid.\n\u003c/p\u003e\u003cp\u003eLayout is achieved by using the CSS \u003ccode\u003edisplay:table\u003c/code\u003e property.\n The following element tree will be generated\n\u003c/p\u003e\u003cpre\u003e  \u003cdiv class=\"table\"\u003e\n    \u003cdiv class=\"table-row\"\u003e\n      \u003cdiv class=\"table-cell\"\u003e ... \u003c/div\u003e\n      \u003cdiv class=\"table-cell\"\u003e ... \u003c/div\u003e\n    \u003c/div\u003e\n    \u003cdiv class=\"table-row\"\u003e\n      ...\n    \u003c/div\u003e\n   ...\n   \u003c/div\u003e\n\u003c/pre\u003e\u003cp\u003eYou can customatize the actual layout by assigning an \u003ccode\u003eid\u003c/code\u003e to the element\n and changing the \u003ccode\u003e.table\u003c/code\u003e, \u003ccode\u003e.table-row\u003c/code\u003e and \u003ccode\u003etable-column\u003c/code\u003e\n classes in a custom CSS file.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "grid",
          "package": "threepenny-gui",
          "signature": "[[UI Element]] -\u003e UI Element",
          "source": "src/Graphics-UI-Threepenny-Core.html#grid",
          "type": "function"
        },
        "index": {
          "description": "Align given elements in rectangular grid Layout is achieved by using the CSS display table property The following element tree will be generated div class table div class table-row div class table-cell div div class table-cell div div div class table-row div div You can customatize the actual layout by assigning an id to the element and changing the table table-row and table-column classes in custom CSS file",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "grid",
          "normalized": "[[UI Element]]-\u003eUI Element",
          "package": "threepenny-gui",
          "signature": "[[UI Element]]-\u003eUI Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:grid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChild elements of a given element as a HTML string.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "html",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Core.html#html",
          "type": "function"
        },
        "index": {
          "description": "Child elements of given element as HTML string",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "html",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:html"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSchedule an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action to be run later.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "liftIOLater",
          "package": "threepenny-gui",
          "signature": "IO () -\u003e UI ()",
          "source": "src/Graphics-UI-Threepenny-Core.html#liftIOLater",
          "type": "function"
        },
        "index": {
          "description": "Schedule an IO action to be run later",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "liftIOLater",
          "normalized": "IO()-\u003eUI()",
          "package": "threepenny-gui",
          "partial": "IOLater",
          "signature": "IO()-\u003eUI()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:liftIOLater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a local directory available as a relative URI.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "loadDirectory",
          "package": "threepenny-gui",
          "signature": "FilePath -\u003e UI String",
          "source": "src/Graphics-UI-Threepenny-Core.html#loadDirectory",
          "type": "function"
        },
        "index": {
          "description": "Make local directory available as relative URI",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "loadDirectory",
          "normalized": "FilePath-\u003eUI String",
          "package": "threepenny-gui",
          "partial": "Directory",
          "signature": "FilePath-\u003eUI String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:loadDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a local file available as a relative URI.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "loadFile",
          "package": "threepenny-gui",
          "signature": "String-\u003e FilePath-\u003e UI String",
          "type": "function"
        },
        "index": {
          "description": "Make local file available as relative URI",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "loadFile",
          "normalized": "String-\u003eFilePath-\u003eUI String",
          "package": "threepenny-gui",
          "partial": "File",
          "signature": "String-\u003eFilePath-\u003eUI String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:loadFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a new DOM element.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "mkElement",
          "package": "threepenny-gui",
          "signature": "String-\u003e UI Element",
          "type": "function"
        },
        "index": {
          "description": "Make new DOM element",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "mkElement",
          "normalized": "String-\u003eUI Element",
          "package": "threepenny-gui",
          "partial": "Element",
          "signature": "String-\u003eUI Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:mkElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild attribute from a getter.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "mkReadAttr",
          "package": "threepenny-gui",
          "signature": "(x -\u003e UI o) -\u003e ReadAttr x o",
          "source": "src/Graphics-UI-Threepenny-Core.html#mkReadAttr",
          "type": "function"
        },
        "index": {
          "description": "Build attribute from getter",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "mkReadAttr",
          "normalized": "(a-\u003eUI b)-\u003eReadAttr a b",
          "package": "threepenny-gui",
          "partial": "Read Attr",
          "signature": "(x-\u003eUI o)-\u003eReadAttr x o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:mkReadAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild an attribute from a getter and a setter.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "mkReadWriteAttr",
          "package": "threepenny-gui",
          "signature": "(x -\u003e UI o)-\u003e (i -\u003e x -\u003e UI ())-\u003e ReadWriteAttr x i o",
          "type": "function"
        },
        "index": {
          "description": "Build an attribute from getter and setter",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "mkReadWriteAttr",
          "normalized": "(a-\u003eUI b)-\u003e(c-\u003ea-\u003eUI())-\u003eReadWriteAttr a c b",
          "package": "threepenny-gui",
          "partial": "Read Write Attr",
          "signature": "(x-\u003eUI o)-\u003e(i-\u003ex-\u003eUI())-\u003eReadWriteAttr x i o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:mkReadWriteAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild attribute from a setter.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "mkWriteAttr",
          "package": "threepenny-gui",
          "signature": "(i -\u003e x -\u003e UI ()) -\u003e WriteAttr x i",
          "source": "src/Graphics-UI-Threepenny-Core.html#mkWriteAttr",
          "type": "function"
        },
        "index": {
          "description": "Build attribute from setter",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "mkWriteAttr",
          "normalized": "(a-\u003eb-\u003eUI())-\u003eWriteAttr b a",
          "package": "threepenny-gui",
          "partial": "Write Attr",
          "signature": "(i-\u003ex-\u003eUI())-\u003eWriteAttr x i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:mkWriteAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function to register \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es for \u003ccode\u003e\u003ca\u003eElement\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eExample usage.\n\u003c/p\u003e\u003cpre\u003e on click element $ \\_ -\u003e ...\n\u003c/pre\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "on",
          "package": "threepenny-gui",
          "signature": "(element -\u003e Event a) -\u003e element -\u003e (a -\u003e UI void) -\u003e UI ()",
          "source": "src/Graphics-UI-Threepenny-Core.html#on",
          "type": "function"
        },
        "index": {
          "description": "Convenience function to register Event for Element Example usage on click element",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "on",
          "normalized": "(a-\u003eEvent b)-\u003ea-\u003e(b-\u003eUI c)-\u003eUI()",
          "package": "threepenny-gui",
          "signature": "(element-\u003eEvent a)-\u003eelement-\u003e(a-\u003eUI void)-\u003eUI()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:on"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a \u003ccode\u003e\u003ca\u003eUI\u003c/a\u003e\u003c/code\u003e action whenever a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e changes.\n Use sparingly, it is recommended that you use \u003ccode\u003e\u003ca\u003esink\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "onChanges",
          "package": "threepenny-gui",
          "signature": "Behavior a -\u003e (a -\u003e UI void) -\u003e UI ()",
          "source": "src/Graphics-UI-Threepenny-Core.html#onChanges",
          "type": "function"
        },
        "index": {
          "description": "Execute UI action whenever Behavior changes Use sparingly it is recommended that you use sink instead",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "onChanges",
          "normalized": "Behavior a-\u003e(a-\u003eUI b)-\u003eUI()",
          "package": "threepenny-gui",
          "partial": "Changes",
          "signature": "Behavior a-\u003e(a-\u003eUI void)-\u003eUI()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:onChanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister an \u003ccode\u003e\u003ca\u003eUI\u003c/a\u003e\u003c/code\u003e action to be executed whenever the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e happens.\n\u003c/p\u003e\u003cp\u003eFIXME: Should be unified with \u003ccode\u003e\u003ca\u003eon\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "onEvent",
          "package": "threepenny-gui",
          "signature": "Event a -\u003e (a -\u003e UI void) -\u003e UI ()",
          "source": "src/Graphics-UI-Threepenny-Core.html#onEvent",
          "type": "function"
        },
        "index": {
          "description": "Register an UI action to be executed whenever the Event happens FIXME Should be unified with on",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "onEvent",
          "normalized": "Event a-\u003e(a-\u003eUI b)-\u003eUI()",
          "package": "threepenny-gui",
          "partial": "Event",
          "signature": "Event a-\u003e(a-\u003eUI void)-\u003eUI()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:onEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlign given elements in a row. Special case of \u003ccode\u003e\u003ca\u003egrid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "row",
          "package": "threepenny-gui",
          "signature": "[UI Element] -\u003e UI Element",
          "source": "src/Graphics-UI-Threepenny-Core.html#row",
          "type": "function"
        },
        "index": {
          "description": "Align given elements in row Special case of grid",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "row",
          "normalized": "[UI Element]-\u003eUI Element",
          "package": "threepenny-gui",
          "signature": "[UI Element]-\u003eUI Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given JavaScript function and carry on. Doesn't block.\n\u003c/p\u003e\u003cp\u003eThe client window uses JavaScript's \u003ccode\u003eeval()\u003c/code\u003e function to run the code.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "runFunction",
          "package": "threepenny-gui",
          "signature": "JSFunction () -\u003e UI ()",
          "source": "src/Graphics-UI-Threepenny-Core.html#runFunction",
          "type": "function"
        },
        "index": {
          "description": "Run the given JavaScript function and carry on Doesn block The client window uses JavaScript eval function to run the code",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "runFunction",
          "normalized": "JSFunction()-\u003eUI()",
          "package": "threepenny-gui",
          "partial": "Function",
          "signature": "JSFunction()-\u003eUI()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:runFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an \u003ccode\u003e\u003ca\u003eUI\u003c/a\u003e\u003c/code\u003e action in a particular browser window.\n Also runs all scheduled \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "runUI",
          "package": "threepenny-gui",
          "signature": "Window -\u003e UI a -\u003e IO a",
          "source": "src/Graphics-UI-Threepenny-Core.html#runUI",
          "type": "function"
        },
        "index": {
          "description": "Execute an UI action in particular browser window Also runs all scheduled IO action",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "runUI",
          "normalized": "Window-\u003eUI a-\u003eIO a",
          "package": "threepenny-gui",
          "partial": "UI",
          "signature": "Window-\u003eUI a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:runUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet value of an attribute in the \u003ccode\u003e\u003ca\u003eUI\u003c/a\u003e\u003c/code\u003e monad.\n Best used in conjunction with '#'.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "set",
          "package": "threepenny-gui",
          "signature": "ReadWriteAttr x i o -\u003e i -\u003e UI x -\u003e UI x",
          "source": "src/Graphics-UI-Threepenny-Core.html#set",
          "type": "function"
        },
        "index": {
          "description": "Set value of an attribute in the UI monad Best used in conjunction with",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "set",
          "normalized": "ReadWriteAttr a b c-\u003eb-\u003eUI a-\u003eUI a",
          "package": "threepenny-gui",
          "signature": "ReadWriteAttr x i o-\u003ei-\u003eUI x-\u003eUI x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Core",
          "name": "set'",
          "package": "threepenny-gui",
          "signature": "i -\u003e x -\u003e UI ()",
          "source": "src/Graphics-UI-Threepenny-Core.html#ReadWriteAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "set'",
          "normalized": "a-\u003eb-\u003eUI()",
          "package": "threepenny-gui",
          "signature": "i-\u003ex-\u003eUI()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:set-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the value of an attribute to a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e, that is a time-varying value.\n\u003c/p\u003e\u003cp\u003eNote: For reasons of efficiency, the attribute is only\n updated when the value changes.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "sink",
          "package": "threepenny-gui",
          "signature": "ReadWriteAttr x i o -\u003e Behavior i -\u003e UI x -\u003e UI x",
          "source": "src/Graphics-UI-Threepenny-Core.html#sink",
          "type": "function"
        },
        "index": {
          "description": "Set the value of an attribute to Behavior that is time-varying value Note For reasons of efficiency the attribute is only updated when the value changes",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "sink",
          "normalized": "ReadWriteAttr a b c-\u003eBehavior b-\u003eUI a-\u003eUI a",
          "package": "threepenny-gui",
          "signature": "ReadWriteAttr x i o-\u003eBehavior i-\u003eUI x-\u003eUI x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:sink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart server for GUI sessions.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "startGUI",
          "package": "threepenny-gui",
          "signature": "Config-\u003e (Window -\u003e UI ())-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Start server for GUI sessions",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "startGUI",
          "normalized": "Config-\u003e(Window-\u003eUI())-\u003eIO()",
          "package": "threepenny-gui",
          "partial": "GUI",
          "signature": "Config-\u003e(Window-\u003eUI())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:startGUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a \u003ccode\u003espan\u003c/code\u003e element with a given text content.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "string",
          "package": "threepenny-gui",
          "signature": "String -\u003e UI Element",
          "source": "src/Graphics-UI-Threepenny-Core.html#string",
          "type": "function"
        },
        "index": {
          "description": "Make span element with given text content",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "string",
          "normalized": "String-\u003eUI Element",
          "package": "threepenny-gui",
          "signature": "String-\u003eUI Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet CSS style of an Element\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "style",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element [(String, String)]",
          "source": "src/Graphics-UI-Threepenny-Core.html#style",
          "type": "function"
        },
        "index": {
          "description": "Set CSS style of an Element",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "style",
          "normalized": "WriteAttr Element[(String,String)]",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText content of an element.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "text",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element String",
          "source": "src/Graphics-UI-Threepenny-Core.html#text",
          "type": "function"
        },
        "index": {
          "description": "Text content of an element",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "text",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTitle of the client window.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "title",
          "package": "threepenny-gui",
          "signature": "WriteAttr Window String",
          "source": "src/Graphics-UI-Threepenny-Core.html#title",
          "type": "function"
        },
        "index": {
          "description": "Title of the client window",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "title",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Core",
          "name": "toElement",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Element",
          "source": "src/Graphics-UI-Threepenny-Core.html#toElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "toElement",
          "normalized": "Element-\u003eElement",
          "package": "threepenny-gui",
          "partial": "Element",
          "signature": "Element-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:toElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom HTML file to replace the default one.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "tpCustomHTML",
          "package": "threepenny-gui",
          "signature": "Maybe FilePath",
          "source": "src/Graphics-UI-Threepenny-Internal-Types.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Custom HTML file to replace the default one",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "tpCustomHTML",
          "package": "threepenny-gui",
          "partial": "Custom HTML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:tpCustomHTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a single log message.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "tpLog",
          "package": "threepenny-gui",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Graphics-UI-Threepenny-Internal-Types.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Print single log message",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "tpLog",
          "normalized": "ByteString-\u003eIO()",
          "package": "threepenny-gui",
          "partial": "Log",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:tpLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePort number.\n \u003ccode\u003eNothing\u003c/code\u003e means that the port number is\n read from the environment variable \u003ccode\u003ePORT\u003c/code\u003e.\n Alternatively, port \u003ccode\u003e8023\u003c/code\u003e is used if this variable is not set.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "tpPort",
          "package": "threepenny-gui",
          "signature": "Maybe Int",
          "source": "src/Graphics-UI-Threepenny-Internal-Types.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Port number Nothing means that the port number is read from the environment variable PORT Alternatively port is used if this variable is not set",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "tpPort",
          "package": "threepenny-gui",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:tpPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirectory that is served under \u003ccode\u003e/static\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "tpStatic",
          "package": "threepenny-gui",
          "signature": "Maybe FilePath",
          "source": "src/Graphics-UI-Threepenny-Internal-Types.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Directory that is served under static",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "tpStatic",
          "package": "threepenny-gui",
          "partial": "Static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:tpStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue attribute of an element.\n Particularly relevant for control widgets like \u003ccode\u003einput\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "value",
          "package": "threepenny-gui",
          "signature": "Attr Element String",
          "source": "src/Graphics-UI-Threepenny-Core.html#value",
          "type": "function"
        },
        "index": {
          "description": "Value attribute of an element Particularly relevant for control widgets like input",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "value",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvience synonym for \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e to make widgets work well with \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "widget",
          "package": "threepenny-gui",
          "signature": "w -\u003e UI w",
          "source": "src/Graphics-UI-Threepenny-Core.html#widget",
          "type": "function"
        },
        "index": {
          "description": "Convience synonym for return to make widgets work well with set",
          "hierarchy": "Graphics UI Threepenny Core",
          "module": "Graphics.UI.Threepenny.Core",
          "name": "widget",
          "normalized": "a-\u003eUI a",
          "package": "threepenny-gui",
          "signature": "w-\u003eUI w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Core.html#v:widget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "DragNDrop",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-DragNDrop.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny DragNDrop",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "DragNDrop",
          "package": "threepenny-gui",
          "partial": "Drag NDrop",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData carried by a dragged element. \n\u003c/p\u003e\u003cp\u003eFIXME: Empty data is currently encoded by the empty String.\n Change this to 'Maybe String' instead.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "DragData",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-DragNDrop.html#DragData",
          "type": "type"
        },
        "index": {
          "description": "Data carried by dragged element FIXME Empty data is currently encoded by the empty String Change this to Maybe String instead",
          "hierarchy": "Graphics UI Threepenny DragNDrop",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "DragData",
          "package": "threepenny-gui",
          "partial": "Drag Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#t:DragData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOccurs periodically while the element is being dragged around.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "drag",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event DragData",
          "source": "src/Graphics-UI-Threepenny-DragNDrop.html#drag",
          "type": "function"
        },
        "index": {
          "description": "Occurs periodically while the element is being dragged around",
          "hierarchy": "Graphics UI Threepenny DragNDrop",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "drag",
          "normalized": "Element-\u003eEvent DragData",
          "package": "threepenny-gui",
          "signature": "Element-\u003eEvent DragData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:drag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the data that is transferred when dragging this element.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "dragData",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element DragData",
          "source": "src/Graphics-UI-Threepenny-DragNDrop.html#dragData",
          "type": "function"
        },
        "index": {
          "description": "Set the data that is transferred when dragging this element",
          "hierarchy": "Graphics UI Threepenny DragNDrop",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "dragData",
          "package": "threepenny-gui",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:dragData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDragging the element ends.\n\u003c/p\u003e\u003cp\u003eWARNING: This event can occur both before and after a corresponding \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e event.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "dragEnd",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event DragData",
          "source": "src/Graphics-UI-Threepenny-DragNDrop.html#dragEnd",
          "type": "function"
        },
        "index": {
          "description": "Dragging the element ends WARNING This event can occur both before and after corresponding drop event",
          "hierarchy": "Graphics UI Threepenny DragNDrop",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "dragEnd",
          "normalized": "Element-\u003eEvent DragData",
          "package": "threepenny-gui",
          "partial": "End",
          "signature": "Element-\u003eEvent DragData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:dragEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe element is now the current target element for a \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWARNING: This element is buggy when moving the mouse over child elements.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "dragEnter",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event DragData",
          "source": "src/Graphics-UI-Threepenny-DragNDrop.html#dragEnter",
          "type": "function"
        },
        "index": {
          "description": "The element is now the current target element for drop WARNING This element is buggy when moving the mouse over child elements",
          "hierarchy": "Graphics UI Threepenny DragNDrop",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "dragEnter",
          "normalized": "Element-\u003eEvent DragData",
          "package": "threepenny-gui",
          "partial": "Enter",
          "signature": "Element-\u003eEvent DragData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:dragEnter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe element is no longer the current target element for a \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWARNING: This event is also fired when the mouse is moved over a child element.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "dragLeave",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event DragData",
          "source": "src/Graphics-UI-Threepenny-DragNDrop.html#dragLeave",
          "type": "function"
        },
        "index": {
          "description": "The element is no longer the current target element for drop WARNING This event is also fired when the mouse is moved over child element",
          "hierarchy": "Graphics UI Threepenny DragNDrop",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "dragLeave",
          "normalized": "Element-\u003eEvent DragData",
          "package": "threepenny-gui",
          "partial": "Leave",
          "signature": "Element-\u003eEvent DragData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:dragLeave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOccurs periodically while the element is the current target element.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "dragOver",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event DragData",
          "source": "src/Graphics-UI-Threepenny-DragNDrop.html#dragOver",
          "type": "function"
        },
        "index": {
          "description": "Occurs periodically while the element is the current target element",
          "hierarchy": "Graphics UI Threepenny DragNDrop",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "dragOver",
          "normalized": "Element-\u003eEvent DragData",
          "package": "threepenny-gui",
          "partial": "Over",
          "signature": "Element-\u003eEvent DragData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:dragOver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDragging the element starts.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "dragStart",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event DragData",
          "source": "src/Graphics-UI-Threepenny-DragNDrop.html#dragStart",
          "type": "function"
        },
        "index": {
          "description": "Dragging the element starts",
          "hierarchy": "Graphics UI Threepenny DragNDrop",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "dragStart",
          "normalized": "Element-\u003eEvent DragData",
          "package": "threepenny-gui",
          "partial": "Start",
          "signature": "Element-\u003eEvent DragData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:dragStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnable or disable whether the element can be dragged by the user.\n\u003c/p\u003e\u003cp\u003eAn element with draggable set to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e will receive\n \u003ccode\u003e\u003ca\u003edrag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edragStart\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edragEnd\u003c/a\u003e\u003c/code\u003e events.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "draggable",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Bool",
          "source": "src/Graphics-UI-Threepenny-DragNDrop.html#draggable",
          "type": "function"
        },
        "index": {
          "description": "Enable or disable whether the element can be dragged by the user An element with draggable set to True will receive drag dragStart and dragEnd events",
          "hierarchy": "Graphics UI Threepenny DragNDrop",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "draggable",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:draggable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe drag and drop operation is being completed on this element.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "drop",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event DragData",
          "source": "src/Graphics-UI-Threepenny-DragNDrop.html#drop",
          "type": "function"
        },
        "index": {
          "description": "The drag and drop operation is being completed on this element",
          "hierarchy": "Graphics UI Threepenny DragNDrop",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "drop",
          "normalized": "Element-\u003eEvent DragData",
          "package": "threepenny-gui",
          "signature": "Element-\u003eEvent DragData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnable or disable whether the element accepts drops.\n\u003c/p\u003e\u003cp\u003eAn element with \u003ccode\u003e\u003ca\u003edroppable\u003c/a\u003e\u003c/code\u003e set to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e will receive\n \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edragOver\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edragEnter\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edragLeave\u003c/a\u003e\u003c/code\u003e events.\n\u003c/p\u003e\u003cp\u003eChild elements of a \u003ccode\u003e\u003ca\u003edroppable\u003c/a\u003e\u003c/code\u003e element may also be \u003ccode\u003e\u003ca\u003edroppable\u003c/a\u003e\u003c/code\u003e.\n When dragging something over an element, the closest ancestor element\n that is \u003ccode\u003e\u003ca\u003edroppable\u003c/a\u003e\u003c/code\u003e will be the target and receive corresponding\n events.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "droppable",
          "package": "threepenny-gui",
          "signature": "WriteAttr Element Bool",
          "source": "src/Graphics-UI-Threepenny-DragNDrop.html#droppable",
          "type": "function"
        },
        "index": {
          "description": "Enable or disable whether the element accepts drops An element with droppable set to True will receive drop dragOver dragEnter and dragLeave events Child elements of droppable element may also be droppable When dragging something over an element the closest ancestor element that is droppable will be the target and receive corresponding events",
          "hierarchy": "Graphics UI Threepenny DragNDrop",
          "module": "Graphics.UI.Threepenny.DragNDrop",
          "name": "droppable",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-DragNDrop.html#v:droppable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePredefined DOM elements, for convenience.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "Elements",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Elements.html",
          "type": "module"
        },
        "index": {
          "description": "Predefined DOM elements for convenience",
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "Elements",
          "package": "threepenny-gui",
          "partial": "Elements",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "a",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "a",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:a"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a stylesheet to the head.\n\u003c/p\u003e\u003cp\u003eThe second argument refers to the filename of the stylesheet,\n but not its complete filepath.\n Threepenny will prefix the \u003ccode\u003ecss\u003c/code\u003e subdirectory of the \u003ccode\u003e\u003ca\u003etpStatic\u003c/a\u003e\u003c/code\u003e configuration field\n to construct the complete filepath.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "addStyleSheet",
          "package": "threepenny-gui",
          "signature": "Window -\u003e FilePath -\u003e UI ()",
          "source": "src/Graphics-UI-Threepenny-Elements.html#addStyleSheet",
          "type": "function"
        },
        "index": {
          "description": "Add stylesheet to the head The second argument refers to the filename of the stylesheet but not its complete filepath Threepenny will prefix the css subdirectory of the tpStatic configuration field to construct the complete filepath",
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "addStyleSheet",
          "normalized": "Window-\u003eFilePath-\u003eUI()",
          "package": "threepenny-gui",
          "partial": "Style Sheet",
          "signature": "Window-\u003eFilePath-\u003eUI()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:addStyleSheet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "address",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#address",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "address",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "anchor",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#anchor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "anchor",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:anchor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "applet",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#applet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "applet",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:applet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "area",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#area",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "area",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:area"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "audio",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#audio",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "audio",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:audio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "basefont",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#basefont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "basefont",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:basefont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "big",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#big",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "big",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:big"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "blockquote",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#blockquote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "blockquote",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:blockquote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "body",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#body",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "body",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "bold",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#bold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "bold",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:bold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "br",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#br",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "br",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:br"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "button",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#button",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "button",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "canvas",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#canvas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "canvas",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:canvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "caption",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#caption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "caption",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:caption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "center",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#center",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "center",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:center"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "cite",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#cite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "cite",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:cite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "code",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "code",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "ddef",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#ddef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "ddef",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:ddef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "define",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#define",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "define",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:define"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "div",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#div",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "div",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "dlist",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#dlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "dlist",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:dlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "dterm",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#dterm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "dterm",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:dterm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "emphasize",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#emphasize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "emphasize",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:emphasize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "fieldset",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#fieldset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "fieldset",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:fieldset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "font",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#font",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "font",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:font"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "form",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#form",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "form",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "frame",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "frame",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "frameset",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#frameset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "frameset",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:frameset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "h1",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#h1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "h1",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:h1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "h2",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#h2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "h2",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:h2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "h3",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#h3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "h3",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:h3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "h4",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#h4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "h4",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:h4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "h5",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#h5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "h5",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:h5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "h6",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#h6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "h6",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:h6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "header",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "header",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "hr",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#hr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "hr",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:hr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "image",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "image",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "img",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#img",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "img",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:img"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "input",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#input",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "input",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "italics",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#italics",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "italics",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:italics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "keyboard",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#keyboard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "keyboard",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:keyboard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "legend",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#legend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "legend",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:legend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "li",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#li",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "li",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:li"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "link",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#link",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "link",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "map",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "map",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "meta",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#meta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "meta",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:meta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a new \u003ccode\u003ediv\u003c/code\u003e element, synonym for \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "new",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#new",
          "type": "function"
        },
        "index": {
          "description": "Make new div element synonym for div",
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "new",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "noframes",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#noframes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "noframes",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:noframes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "olist",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#olist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "olist",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:olist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "option",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "option",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "p",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#p",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "p",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "paragraph",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#paragraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "paragraph",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:paragraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "param",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "param",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "pre",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#pre",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "pre",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:pre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "sample",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#sample",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "sample",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "select",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#select",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "select",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "small",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#small",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "small",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:small"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "source",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#source",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "source",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "span",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#span",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "span",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "strong",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#strong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "strong",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:strong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "sub",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#sub",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "sub",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "sup",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#sup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "sup",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:sup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "table",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "table",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "td",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#td",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "td",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:td"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "textarea",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#textarea",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "textarea",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:textarea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "th",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#th",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "th",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:th"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "thebase",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#thebase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "thebase",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:thebase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "thehtml",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#thehtml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "thehtml",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:thehtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "title_",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#title_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "title_",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:title_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "tr",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#tr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "tr",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:tr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "tt",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#tt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "tt",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:tt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "ul",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#ul",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "ul",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:ul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "underline",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#underline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "underline",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:underline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "variable",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#variable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "variable",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:variable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "video",
          "package": "threepenny-gui",
          "signature": "UI Element",
          "source": "src/Graphics-UI-Threepenny-Elements.html#video",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Elements",
          "module": "Graphics.UI.Threepenny.Elements",
          "name": "video",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Elements.html#v:video"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Events",
          "name": "Events",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Events.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Events",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "Events",
          "package": "threepenny-gui",
          "partial": "Events",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Events",
          "name": "KeyCode",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Events.html#KeyCode",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Events",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "KeyCode",
          "package": "threepenny-gui",
          "partial": "Key Code",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#t:KeyCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement loses focus.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "blur",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event ()",
          "source": "src/Graphics-UI-Threepenny-Events.html#blur",
          "type": "function"
        },
        "index": {
          "description": "Element loses focus",
          "hierarchy": "Graphics UI Threepenny Events",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "blur",
          "normalized": "Element-\u003eEvent()",
          "package": "threepenny-gui",
          "signature": "Element-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:blur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent that occurs when the \u003cem\u003euser\u003c/em\u003e changes the checked status of an input\n element of type checkbox.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "checkedChange",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event Bool",
          "source": "src/Graphics-UI-Threepenny-Events.html#checkedChange",
          "type": "function"
        },
        "index": {
          "description": "Event that occurs when the user changes the checked status of an input element of type checkbox",
          "hierarchy": "Graphics UI Threepenny Events",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "checkedChange",
          "normalized": "Element-\u003eEvent Bool",
          "package": "threepenny-gui",
          "partial": "Change",
          "signature": "Element-\u003eEvent Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:checkedChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMouse click.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "click",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event ()",
          "source": "src/Graphics-UI-Threepenny-Events.html#click",
          "type": "function"
        },
        "index": {
          "description": "Mouse click",
          "hierarchy": "Graphics UI Threepenny Events",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "click",
          "normalized": "Element-\u003eEvent()",
          "package": "threepenny-gui",
          "signature": "Element-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:click"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement receives focus.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "focus",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event ()",
          "source": "src/Graphics-UI-Threepenny-Events.html#focus",
          "type": "function"
        },
        "index": {
          "description": "Element receives focus",
          "hierarchy": "Graphics UI Threepenny Events",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "focus",
          "normalized": "Element-\u003eEvent()",
          "package": "threepenny-gui",
          "signature": "Element-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:focus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMouse enters an element.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "hover",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event ()",
          "source": "src/Graphics-UI-Threepenny-Events.html#hover",
          "type": "function"
        },
        "index": {
          "description": "Mouse enters an element",
          "hierarchy": "Graphics UI Threepenny Events",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "hover",
          "normalized": "Element-\u003eEvent()",
          "package": "threepenny-gui",
          "signature": "Element-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:hover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey pressed while element has focus.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "keydown",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event KeyCode",
          "source": "src/Graphics-UI-Threepenny-Events.html#keydown",
          "type": "function"
        },
        "index": {
          "description": "Key pressed while element has focus",
          "hierarchy": "Graphics UI Threepenny Events",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "keydown",
          "normalized": "Element-\u003eEvent KeyCode",
          "package": "threepenny-gui",
          "signature": "Element-\u003eEvent KeyCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:keydown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey released while element has focus.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "keyup",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event KeyCode",
          "source": "src/Graphics-UI-Threepenny-Events.html#keyup",
          "type": "function"
        },
        "index": {
          "description": "Key released while element has focus",
          "hierarchy": "Graphics UI Threepenny Events",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "keyup",
          "normalized": "Element-\u003eEvent KeyCode",
          "package": "threepenny-gui",
          "signature": "Element-\u003eEvent KeyCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:keyup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMouse leaving an element.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "leave",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event ()",
          "source": "src/Graphics-UI-Threepenny-Events.html#leave",
          "type": "function"
        },
        "index": {
          "description": "Mouse leaving an element",
          "hierarchy": "Graphics UI Threepenny Events",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "leave",
          "normalized": "Element-\u003eEvent()",
          "package": "threepenny-gui",
          "signature": "Element-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:leave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMouse down event.\n The mouse coordinates are relative to the element. \n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "mousedown",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event (Int, Int)",
          "source": "src/Graphics-UI-Threepenny-Events.html#mousedown",
          "type": "function"
        },
        "index": {
          "description": "Mouse down event The mouse coordinates are relative to the element",
          "hierarchy": "Graphics UI Threepenny Events",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "mousedown",
          "normalized": "Element-\u003eEvent(Int,Int)",
          "package": "threepenny-gui",
          "signature": "Element-\u003eEvent(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:mousedown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent that periodically occurs while the mouse is moving over an element.\n\u003c/p\u003e\u003cp\u003eThe event value represents the mouse coordinates\n relative to the upper left corner of the element.\n\u003c/p\u003e\u003cp\u003eNote: The \u003ccode\u003e\u003ca\u003ebody\u003c/a\u003e\u003c/code\u003e element responds to mouse move events,\n but only in the area occupied by actual content,\n not the whole browser window.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "mousemove",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event (Int, Int)",
          "source": "src/Graphics-UI-Threepenny-Events.html#mousemove",
          "type": "function"
        },
        "index": {
          "description": "Event that periodically occurs while the mouse is moving over an element The event value represents the mouse coordinates relative to the upper left corner of the element Note The body element responds to mouse move events but only in the area occupied by actual content not the whole browser window",
          "hierarchy": "Graphics UI Threepenny Events",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "mousemove",
          "normalized": "Element-\u003eEvent(Int,Int)",
          "package": "threepenny-gui",
          "signature": "Element-\u003eEvent(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:mousemove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMouse up event.\n The mouse coordinates are relative to the element. \n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "mouseup",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event (Int, Int)",
          "source": "src/Graphics-UI-Threepenny-Events.html#mouseup",
          "type": "function"
        },
        "index": {
          "description": "Mouse up event The mouse coordinates are relative to the element",
          "hierarchy": "Graphics UI Threepenny Events",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "mouseup",
          "normalized": "Element-\u003eEvent(Int,Int)",
          "package": "threepenny-gui",
          "signature": "Element-\u003eEvent(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:mouseup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent that occurs when the \u003cem\u003euser\u003c/em\u003e changes the selection of a \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "selectionChange",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event (Maybe Int)",
          "source": "src/Graphics-UI-Threepenny-Events.html#selectionChange",
          "type": "function"
        },
        "index": {
          "description": "Event that occurs when the user changes the selection of select element",
          "hierarchy": "Graphics UI Threepenny Events",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "selectionChange",
          "normalized": "Element-\u003eEvent(Maybe Int)",
          "package": "threepenny-gui",
          "partial": "Change",
          "signature": "Element-\u003eEvent(Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:selectionChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent that occurs when the \u003cem\u003euser\u003c/em\u003e changes the value of the input element.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "valueChange",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event String",
          "source": "src/Graphics-UI-Threepenny-Events.html#valueChange",
          "type": "function"
        },
        "index": {
          "description": "Event that occurs when the user changes the value of the input element",
          "hierarchy": "Graphics UI Threepenny Events",
          "module": "Graphics.UI.Threepenny.Events",
          "name": "valueChange",
          "normalized": "Element-\u003eEvent String",
          "package": "threepenny-gui",
          "partial": "Change",
          "signature": "Element-\u003eEvent String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Events.html#v:valueChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "JQuery",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-JQuery.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny JQuery",
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "JQuery",
          "package": "threepenny-gui",
          "partial": "JQuery",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "Easing",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-JQuery.html#Easing",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny JQuery",
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "Easing",
          "package": "threepenny-gui",
          "partial": "Easing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#t:Easing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "Linear",
          "package": "threepenny-gui",
          "signature": "Linear",
          "source": "src/Graphics-UI-Threepenny-JQuery.html#Easing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny JQuery",
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "Linear",
          "package": "threepenny-gui",
          "partial": "Linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#v:Linear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "Swing",
          "package": "threepenny-gui",
          "signature": "Swing",
          "source": "src/Graphics-UI-Threepenny-JQuery.html#Easing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny JQuery",
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "Swing",
          "package": "threepenny-gui",
          "partial": "Swing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#v:Swing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnimate property changes of a function.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "animate",
          "package": "threepenny-gui",
          "signature": "Element -\u003e [(String, String)] -\u003e Int -\u003e Easing -\u003e IO () -\u003e IO ()",
          "source": "src/Graphics-UI-Threepenny-JQuery.html#animate",
          "type": "function"
        },
        "index": {
          "description": "Animate property changes of function",
          "hierarchy": "Graphics UI Threepenny JQuery",
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "animate",
          "normalized": "Element-\u003e[(String,String)]-\u003eInt-\u003eEasing-\u003eIO()-\u003eIO()",
          "package": "threepenny-gui",
          "signature": "Element-\u003e[(String,String)]-\u003eInt-\u003eEasing-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#v:animate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFade in an element.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "fadeIn",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Int -\u003e Easing -\u003e IO () -\u003e IO ()",
          "source": "src/Graphics-UI-Threepenny-JQuery.html#fadeIn",
          "type": "function"
        },
        "index": {
          "description": "Fade in an element",
          "hierarchy": "Graphics UI Threepenny JQuery",
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "fadeIn",
          "normalized": "Element-\u003eInt-\u003eEasing-\u003eIO()-\u003eIO()",
          "package": "threepenny-gui",
          "partial": "In",
          "signature": "Element-\u003eInt-\u003eEasing-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#v:fadeIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFade out an element.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "fadeOut",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Int -\u003e Easing -\u003e IO () -\u003e IO ()",
          "source": "src/Graphics-UI-Threepenny-JQuery.html#fadeOut",
          "type": "function"
        },
        "index": {
          "description": "Fade out an element",
          "hierarchy": "Graphics UI Threepenny JQuery",
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "fadeOut",
          "normalized": "Element-\u003eInt-\u003eEasing-\u003eIO()-\u003eIO()",
          "package": "threepenny-gui",
          "partial": "Out",
          "signature": "Element-\u003eInt-\u003eEasing-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#v:fadeOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScroll to the bottom of an element.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "scrollToBottom",
          "package": "threepenny-gui",
          "signature": "Element -\u003e UI ()",
          "source": "src/Graphics-UI-Threepenny-JQuery.html#scrollToBottom",
          "type": "function"
        },
        "index": {
          "description": "Scroll to the bottom of an element",
          "hierarchy": "Graphics UI Threepenny JQuery",
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "scrollToBottom",
          "normalized": "Element-\u003eUI()",
          "package": "threepenny-gui",
          "partial": "To Bottom",
          "signature": "Element-\u003eUI()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#v:scrollToBottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo something on return.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "sendValue",
          "package": "threepenny-gui",
          "signature": "Element -\u003e Event String",
          "source": "src/Graphics-UI-Threepenny-JQuery.html#sendValue",
          "type": "function"
        },
        "index": {
          "description": "Do something on return",
          "hierarchy": "Graphics UI Threepenny JQuery",
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "sendValue",
          "normalized": "Element-\u003eEvent String",
          "package": "threepenny-gui",
          "partial": "Value",
          "signature": "Element-\u003eEvent String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#v:sendValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFocus an element.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "setFocus",
          "package": "threepenny-gui",
          "signature": "Element -\u003e UI ()",
          "source": "src/Graphics-UI-Threepenny-JQuery.html#setFocus",
          "type": "function"
        },
        "index": {
          "description": "Focus an element",
          "hierarchy": "Graphics UI Threepenny JQuery",
          "module": "Graphics.UI.Threepenny.JQuery",
          "name": "setFocus",
          "normalized": "Element-\u003eUI()",
          "package": "threepenny-gui",
          "partial": "Focus",
          "signature": "Element-\u003eUI()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-JQuery.html#v:setFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Timer",
          "name": "Timer",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Timer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Timer",
          "module": "Graphics.UI.Threepenny.Timer",
          "name": "Timer",
          "package": "threepenny-gui",
          "partial": "Timer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Timer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Timer",
          "name": "Timer",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Timer.html#Timer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Timer",
          "module": "Graphics.UI.Threepenny.Timer",
          "name": "Timer",
          "package": "threepenny-gui",
          "partial": "Timer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Timer.html#t:Timer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimer interval in milliseconds.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Timer",
          "name": "interval",
          "package": "threepenny-gui",
          "signature": "Attr Timer Int",
          "source": "src/Graphics-UI-Threepenny-Timer.html#interval",
          "type": "function"
        },
        "index": {
          "description": "Timer interval in milliseconds",
          "hierarchy": "Graphics UI Threepenny Timer",
          "module": "Graphics.UI.Threepenny.Timer",
          "name": "interval",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Timer.html#v:interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the timer is running or not.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Timer",
          "name": "running",
          "package": "threepenny-gui",
          "signature": "Attr Timer Bool",
          "source": "src/Graphics-UI-Threepenny-Timer.html#running",
          "type": "function"
        },
        "index": {
          "description": "Whether the timer is running or not",
          "hierarchy": "Graphics UI Threepenny Timer",
          "module": "Graphics.UI.Threepenny.Timer",
          "name": "running",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Timer.html#v:running"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart the timer.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Timer",
          "name": "start",
          "package": "threepenny-gui",
          "signature": "Timer -\u003e UI ()",
          "source": "src/Graphics-UI-Threepenny-Timer.html#start",
          "type": "function"
        },
        "index": {
          "description": "Start the timer",
          "hierarchy": "Graphics UI Threepenny Timer",
          "module": "Graphics.UI.Threepenny.Timer",
          "name": "start",
          "normalized": "Timer-\u003eUI()",
          "package": "threepenny-gui",
          "signature": "Timer-\u003eUI()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Timer.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop the timer.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Timer",
          "name": "stop",
          "package": "threepenny-gui",
          "signature": "Timer -\u003e UI ()",
          "source": "src/Graphics-UI-Threepenny-Timer.html#stop",
          "type": "function"
        },
        "index": {
          "description": "Stop the timer",
          "hierarchy": "Graphics UI Threepenny Timer",
          "module": "Graphics.UI.Threepenny.Timer",
          "name": "stop",
          "normalized": "Timer-\u003eUI()",
          "package": "threepenny-gui",
          "signature": "Timer-\u003eUI()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Timer.html#v:stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimer event.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Timer",
          "name": "tick",
          "package": "threepenny-gui",
          "signature": "Timer -\u003e Event ()",
          "source": "src/Graphics-UI-Threepenny-Timer.html#tick",
          "type": "function"
        },
        "index": {
          "description": "Timer event",
          "hierarchy": "Graphics UI Threepenny Timer",
          "module": "Graphics.UI.Threepenny.Timer",
          "name": "tick",
          "normalized": "Timer-\u003eEvent()",
          "package": "threepenny-gui",
          "signature": "Timer-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Timer.html#v:tick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new timer\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Timer",
          "name": "timer",
          "package": "threepenny-gui",
          "signature": "UI Timer",
          "source": "src/Graphics-UI-Threepenny-Timer.html#timer",
          "type": "function"
        },
        "index": {
          "description": "Create new timer",
          "hierarchy": "Graphics UI Threepenny Timer",
          "module": "Graphics.UI.Threepenny.Timer",
          "name": "timer",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Timer.html#v:timer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny.Widgets",
          "name": "Widgets",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Widgets.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Widgets",
          "module": "Graphics.UI.Threepenny.Widgets",
          "name": "Widgets",
          "package": "threepenny-gui",
          "partial": "Widgets",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of values. The user can select entries.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Widgets",
          "name": "ListBox",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Widgets.html#ListBox",
          "type": "data"
        },
        "index": {
          "description": "list of values The user can select entries",
          "hierarchy": "Graphics UI Threepenny Widgets",
          "module": "Graphics.UI.Threepenny.Widgets",
          "name": "ListBox",
          "package": "threepenny-gui",
          "partial": "List Box",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#t:ListBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single-line text entry.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Widgets",
          "name": "TextEntry",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny-Widgets.html#TextEntry",
          "type": "data"
        },
        "index": {
          "description": "single-line text entry",
          "hierarchy": "Graphics UI Threepenny Widgets",
          "module": "Graphics.UI.Threepenny.Widgets",
          "name": "TextEntry",
          "package": "threepenny-gui",
          "partial": "Text Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#t:TextEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a behavior (\u003ccode\u003e\u003ca\u003efacts\u003c/a\u003e\u003c/code\u003e)\n and suggestions to change it (\u003ccode\u003e\u003ca\u003erumors\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Widgets",
          "name": "Tidings",
          "package": "threepenny-gui",
          "source": "src/Reactive-Threepenny.html#Tidings",
          "type": "data"
        },
        "index": {
          "description": "Data type representing behavior facts and suggestions to change it rumors",
          "hierarchy": "Graphics UI Threepenny Widgets",
          "module": "Graphics.UI.Threepenny.Widgets",
          "name": "Tidings",
          "package": "threepenny-gui",
          "partial": "Tidings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#t:Tidings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a single-line text entry.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Widgets",
          "name": "entry",
          "package": "threepenny-gui",
          "signature": "Behavior String-\u003e UI TextEntry",
          "type": "function"
        },
        "index": {
          "description": "Create single-line text entry",
          "hierarchy": "Graphics UI Threepenny Widgets",
          "module": "Graphics.UI.Threepenny.Widgets",
          "name": "entry",
          "normalized": "Behavior String-\u003eUI TextEntry",
          "package": "threepenny-gui",
          "signature": "Behavior String-\u003eUI TextEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.UI.Threepenny.Widgets\",\"Reactive.Threepenny\"]",
          "name": "facts",
          "package": "threepenny-gui",
          "signature": "Tidings a -\u003e Behavior a",
          "source": "src/Reactive-Threepenny.html#facts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#v:facts\",\"http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:facts\"]"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Widgets",
          "module": "Graphics.UI.Threepenny.Widgets",
          "name": "facts",
          "normalized": "Tidings a-\u003eBehavior a",
          "package": "threepenny-gui",
          "signature": "Tidings a-\u003eBehavior a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#v:facts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eListBox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Widgets",
          "name": "listBox",
          "package": "threepenny-gui",
          "signature": "Behavior [a]-\u003e Behavior (Maybe a)-\u003e Behavior (a -\u003e UI Element)-\u003e UI (ListBox a)",
          "type": "function"
        },
        "index": {
          "description": "Create ListBox",
          "hierarchy": "Graphics UI Threepenny Widgets",
          "module": "Graphics.UI.Threepenny.Widgets",
          "name": "listBox",
          "normalized": "Behavior[a]-\u003eBehavior(Maybe a)-\u003eBehavior(a-\u003eUI Element)-\u003eUI(ListBox a)",
          "package": "threepenny-gui",
          "partial": "Box",
          "signature": "Behavior[a]-\u003eBehavior(Maybe a)-\u003eBehavior(a-\u003eUI Element)-\u003eUI(ListBox a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#v:listBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.UI.Threepenny.Widgets\",\"Reactive.Threepenny\"]",
          "name": "rumors",
          "package": "threepenny-gui",
          "signature": "Tidings a -\u003e Event a",
          "source": "src/Reactive-Threepenny.html#rumors",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#v:rumors\",\"http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:rumors\"]"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny Widgets",
          "module": "Graphics.UI.Threepenny.Widgets",
          "name": "rumors",
          "normalized": "Tidings a-\u003eEvent a",
          "package": "threepenny-gui",
          "signature": "Tidings a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#v:rumors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor. Combine facts and rumors into \u003ccode\u003e\u003ca\u003eTidings\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Graphics.UI.Threepenny.Widgets\",\"Reactive.Threepenny\"]",
          "name": "tidings",
          "package": "threepenny-gui",
          "signature": "Behavior a -\u003e Event a -\u003e Tidings a",
          "source": "src/Reactive-Threepenny.html#tidings",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#v:tidings\",\"http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:tidings\"]"
        },
        "index": {
          "description": "Smart constructor Combine facts and rumors into Tidings",
          "hierarchy": "Graphics UI Threepenny Widgets",
          "module": "Graphics.UI.Threepenny.Widgets",
          "name": "tidings",
          "normalized": "Behavior a-\u003eEvent a-\u003eTidings a",
          "package": "threepenny-gui",
          "signature": "Behavior a-\u003eEvent a-\u003eTidings a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#v:tidings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser changes to the current selection (possibly empty).\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Widgets",
          "name": "userSelection",
          "package": "threepenny-gui",
          "signature": "ListBox a -\u003e Tidings (Maybe a)",
          "source": "src/Graphics-UI-Threepenny-Widgets.html#userSelection",
          "type": "function"
        },
        "index": {
          "description": "User changes to the current selection possibly empty",
          "hierarchy": "Graphics UI Threepenny Widgets",
          "module": "Graphics.UI.Threepenny.Widgets",
          "name": "userSelection",
          "normalized": "ListBox a-\u003eTidings(Maybe a)",
          "package": "threepenny-gui",
          "partial": "Selection",
          "signature": "ListBox a-\u003eTidings(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#v:userSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser changes to the text value.\n\u003c/p\u003e",
          "module": "Graphics.UI.Threepenny.Widgets",
          "name": "userText",
          "package": "threepenny-gui",
          "signature": "TextEntry -\u003e Tidings String",
          "source": "src/Graphics-UI-Threepenny-Widgets.html#userText",
          "type": "function"
        },
        "index": {
          "description": "User changes to the text value",
          "hierarchy": "Graphics UI Threepenny Widgets",
          "module": "Graphics.UI.Threepenny.Widgets",
          "name": "userText",
          "normalized": "TextEntry-\u003eTidings String",
          "package": "threepenny-gui",
          "partial": "Text",
          "signature": "TextEntry-\u003eTidings String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny-Widgets.html#v:userText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Threepenny",
          "name": "Threepenny",
          "package": "threepenny-gui",
          "source": "src/Graphics-UI-Threepenny.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Threepenny",
          "module": "Graphics.UI.Threepenny",
          "name": "Threepenny",
          "package": "threepenny-gui",
          "partial": "Threepenny",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Graphics-UI-Threepenny.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Threepenny",
          "name": "Threepenny",
          "package": "threepenny-gui",
          "source": "src/Reactive-Threepenny.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "Threepenny",
          "package": "threepenny-gui",
          "partial": "Threepenny",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eBehavior a\u003c/code\u003e represents a value that varies in time. Think of it as\n\u003c/p\u003e\u003cpre\u003e type Behavior a = Time -\u003e a\n\u003c/pre\u003e",
          "module": "Reactive.Threepenny",
          "name": "Behavior",
          "package": "threepenny-gui",
          "source": "src/Reactive-Threepenny.html#Behavior",
          "type": "data"
        },
        "index": {
          "description": "Behavior represents value that varies in time Think of it as type Behavior Time",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "Behavior",
          "package": "threepenny-gui",
          "partial": "Behavior",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#t:Behavior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eEvent a\u003c/code\u003e represents a stream of events as they occur in time.\nSemantically, you can think of \u003ccode\u003eEvent a\u003c/code\u003e as an infinite list of values\nthat are tagged with their corresponding time of occurence,\n\u003c/p\u003e\u003cpre\u003e type Event a = [(Time,a)]\n\u003c/pre\u003e",
          "module": "Reactive.Threepenny",
          "name": "Event",
          "package": "threepenny-gui",
          "source": "src/Reactive-Threepenny.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Event represents stream of events as they occur in time Semantically you can think of Event as an infinite list of values that are tagged with their corresponding time of occurence type Event Time",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "Event",
          "package": "threepenny-gui",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003cem\u003eevent handler\u003c/em\u003e is a function that takes an\n \u003cem\u003eevent value\u003c/em\u003e and performs some computation.\n\u003c/p\u003e",
          "module": "Reactive.Threepenny",
          "name": "Handler",
          "package": "threepenny-gui",
          "source": "src/Reactive-Threepenny.html#Handler",
          "type": "type"
        },
        "index": {
          "description": "An event handler is function that takes an event value and performs some computation",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "Handler",
          "package": "threepenny-gui",
          "partial": "Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a behavior (\u003ccode\u003e\u003ca\u003efacts\u003c/a\u003e\u003c/code\u003e)\n and suggestions to change it (\u003ccode\u003e\u003ca\u003erumors\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Reactive.Threepenny",
          "name": "Tidings",
          "package": "threepenny-gui",
          "source": "src/Reactive-Threepenny.html#Tidings",
          "type": "data"
        },
        "index": {
          "description": "Data type representing behavior facts and suggestions to change it rumors",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "Tidings",
          "package": "threepenny-gui",
          "partial": "Tidings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#t:Tidings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eapply\u003c/a\u003e\u003c/code\u003e similar to \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Reactive.Threepenny",
          "name": "(\u003c@)",
          "package": "threepenny-gui",
          "signature": "Behavior a -\u003e Event b -\u003e Event a",
          "source": "src/Reactive-Threepenny.html#%3C%40",
          "type": "function"
        },
        "index": {
          "description": "Variant of apply similar to",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "(\u003c@) \u003c@",
          "normalized": "Behavior a-\u003eEvent b-\u003eEvent a",
          "package": "threepenny-gui",
          "signature": "Behavior a-\u003eEvent b-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:-60--64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix synonym for \u003ccode\u003e\u003ca\u003eapply\u003c/a\u003e\u003c/code\u003e, similar to \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Reactive.Threepenny",
          "name": "(\u003c@\u003e)",
          "package": "threepenny-gui",
          "signature": "Behavior (a -\u003e b) -\u003e Event a -\u003e Event b",
          "source": "src/Reactive-Threepenny.html#%3C%40%3E",
          "type": "function"
        },
        "index": {
          "description": "Infix synonym for apply similar to",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "(\u003c@\u003e) \u003c@\u003e",
          "normalized": "Behavior(a-\u003eb)-\u003eEvent a-\u003eEvent b",
          "package": "threepenny-gui",
          "signature": "Behavior(a-\u003eb)-\u003eEvent a-\u003eEvent b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:-60--64--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eaccumB\u003c/a\u003e\u003c/code\u003e function is similar to a \u003cem\u003estrict\u003c/em\u003e left fold, \u003ccode\u003efoldl'\u003c/code\u003e.\n It starts with an initial value and combines it with incoming events.\n For example, think\n\u003c/p\u003e\u003cpre\u003e accumB \"x\" [(time1,(++\"y\")),(time2,(++\"z\"))]\n    = stepper \"x\" [(time1,\"xy\"),(time2,\"xyz\")]\n\u003c/pre\u003e\u003cp\u003eNote that the value of the behavior changes \"slightly after\"\n the events occur. This allows for recursive definitions.\n\u003c/p\u003e",
          "module": "Reactive.Threepenny",
          "name": "accumB",
          "package": "threepenny-gui",
          "signature": "a -\u003e Event (a -\u003e a) -\u003e m (Behavior a)",
          "source": "src/Reactive-Threepenny.html#accumB",
          "type": "function"
        },
        "index": {
          "description": "The accumB function is similar to strict left fold foldl It starts with an initial value and combines it with incoming events For example think accumB time1 time2 stepper time1 xy time2 xyz Note that the value of the behavior changes slightly after the events occur This allows for recursive definitions",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "accumB",
          "normalized": "a-\u003eEvent(a-\u003ea)-\u003eb(Behavior a)",
          "package": "threepenny-gui",
          "signature": "a-\u003eEvent(a-\u003ea)-\u003em(Behavior a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:accumB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eaccumE\u003c/a\u003e\u003c/code\u003e function accumulates a stream of events.\n Example:\n\u003c/p\u003e\u003cpre\u003e accumE \"x\" [(time1,(++\"y\")),(time2,(++\"z\"))]\n    = return [(time1,\"xy\"),(time2,\"xyz\")]\n\u003c/pre\u003e\u003cp\u003eNote that the output events are simultaneous with the input events,\n there is no \"delay\" like in the case of \u003ccode\u003e\u003ca\u003eaccumB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Reactive.Threepenny",
          "name": "accumE",
          "package": "threepenny-gui",
          "signature": "a -\u003e Event (a -\u003e a) -\u003e m (Event a)",
          "source": "src/Reactive-Threepenny.html#accumE",
          "type": "function"
        },
        "index": {
          "description": "The accumE function accumulates stream of events Example accumE time1 time2 return time1 xy time2 xyz Note that the output events are simultaneous with the input events there is no delay like in the case of accumB",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "accumE",
          "normalized": "a-\u003eEvent(a-\u003ea)-\u003eb(Event a)",
          "package": "threepenny-gui",
          "signature": "a-\u003eEvent(a-\u003ea)-\u003em(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:accumE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a time-varying function to a stream of events.\n Think of it as\n\u003c/p\u003e\u003cpre\u003e apply bf ex = [(time, bf time x) | (time, x) \u003c- ex]\n\u003c/pre\u003e",
          "module": "Reactive.Threepenny",
          "name": "apply",
          "package": "threepenny-gui",
          "signature": "Behavior (a -\u003e b) -\u003e Event a -\u003e Event b",
          "source": "src/Reactive-Threepenny.html#apply",
          "type": "function"
        },
        "index": {
          "description": "Apply time-varying function to stream of events Think of it as apply bf ex time bf time time ex",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "apply",
          "normalized": "Behavior(a-\u003eb)-\u003eEvent a-\u003eEvent b",
          "package": "threepenny-gui",
          "signature": "Behavior(a-\u003eb)-\u003eEvent a-\u003eEvent b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a list of functions in succession.\n Useful in conjunction with \u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e concatenate [f,g,h] = f . g . h \n\u003c/pre\u003e",
          "module": "Reactive.Threepenny",
          "name": "concatenate",
          "package": "threepenny-gui",
          "signature": "[a -\u003e a] -\u003e a -\u003e a",
          "source": "src/Reactive-Threepenny.html#concatenate",
          "type": "function"
        },
        "index": {
          "description": "Apply list of functions in succession Useful in conjunction with unions concatenate",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "concatenate",
          "normalized": "[a-\u003ea]-\u003ea-\u003ea",
          "package": "threepenny-gui",
          "signature": "[a-\u003ea]-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:concatenate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the current value of a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Reactive.Threepenny",
          "name": "currentValue",
          "package": "threepenny-gui",
          "signature": "Behavior a -\u003e m a",
          "source": "src/Reactive-Threepenny.html#currentValue",
          "type": "function"
        },
        "index": {
          "description": "Read the current value of Behavior",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "currentValue",
          "normalized": "Behavior a-\u003eb a",
          "package": "threepenny-gui",
          "partial": "Value",
          "signature": "Behavior a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:currentValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all event occurrences that fulfill the time-varying predicate,\n discard the rest. Generalization of \u003ccode\u003e\u003ca\u003efilterE\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Reactive.Threepenny",
          "name": "filterApply",
          "package": "threepenny-gui",
          "signature": "Behavior (a -\u003e Bool) -\u003e Event a -\u003e Event a",
          "source": "src/Reactive-Threepenny.html#filterApply",
          "type": "function"
        },
        "index": {
          "description": "Return all event occurrences that fulfill the time-varying predicate discard the rest Generalization of filterE",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "filterApply",
          "normalized": "Behavior(a-\u003eBool)-\u003eEvent a-\u003eEvent a",
          "package": "threepenny-gui",
          "partial": "Apply",
          "signature": "Behavior(a-\u003eBool)-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:filterApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all event occurrences that fulfill the predicate, discard the rest.\n\u003c/p\u003e",
          "module": "Reactive.Threepenny",
          "name": "filterE",
          "package": "threepenny-gui",
          "signature": "(a -\u003e Bool) -\u003e Event a -\u003e Event a",
          "source": "src/Reactive-Threepenny.html#filterE",
          "type": "function"
        },
        "index": {
          "description": "Return all event occurrences that fulfill the predicate discard the rest",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "filterE",
          "normalized": "(a-\u003eBool)-\u003eEvent a-\u003eEvent a",
          "package": "threepenny-gui",
          "signature": "(a-\u003eBool)-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:filterE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all event occurrences that are \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e values, discard the rest.\n Think of it as\n\u003c/p\u003e\u003cpre\u003e filterJust es = [(time,a) | (time,Just a) \u003c- es]\n\u003c/pre\u003e",
          "module": "Reactive.Threepenny",
          "name": "filterJust",
          "package": "threepenny-gui",
          "signature": "Event (Maybe a) -\u003e Event a",
          "source": "src/Reactive-Threepenny.html#filterJust",
          "type": "function"
        },
        "index": {
          "description": "Return all event occurrences that are Just values discard the rest Think of it as filterJust es time time Just es",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "filterJust",
          "normalized": "Event(Maybe a)-\u003eEvent a",
          "package": "threepenny-gui",
          "partial": "Just",
          "signature": "Event(Maybe a)-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:filterJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficient combination of \u003ccode\u003e\u003ca\u003eaccumE\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eaccumB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Reactive.Threepenny",
          "name": "mapAccum",
          "package": "threepenny-gui",
          "signature": "acc -\u003e Event (acc -\u003e (x, acc)) -\u003e m (Event x, Behavior acc)",
          "source": "src/Reactive-Threepenny.html#mapAccum",
          "type": "function"
        },
        "index": {
          "description": "Efficient combination of accumE and accumB",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "mapAccum",
          "normalized": "a-\u003eEvent(a-\u003e(b,a))-\u003ec(Event b,Behavior a)",
          "package": "threepenny-gui",
          "partial": "Accum",
          "signature": "acc-\u003eEvent(acc-\u003e(x,acc))-\u003em(Event x,Behavior acc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:mapAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent that never occurs.\n Think of it as \u003ccode\u003enever = []\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Reactive.Threepenny",
          "name": "never",
          "package": "threepenny-gui",
          "signature": "Event a",
          "source": "src/Reactive-Threepenny.html#never",
          "type": "function"
        },
        "index": {
          "description": "Event that never occurs Think of it as never",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "never",
          "package": "threepenny-gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new event.\n Also returns a function that triggers an event occurrence.\n\u003c/p\u003e",
          "module": "Reactive.Threepenny",
          "name": "newEvent",
          "package": "threepenny-gui",
          "signature": "IO (Event a, Handler a)",
          "source": "src/Reactive-Threepenny.html#newEvent",
          "type": "function"
        },
        "index": {
          "description": "Create new event Also returns function that triggers an event occurrence",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "newEvent",
          "normalized": "IO(Event a,Handler a)",
          "package": "threepenny-gui",
          "partial": "Event",
          "signature": "IO(Event a,Handler a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:newEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a series of events with delayed initialization.\n\u003c/p\u003e\u003cp\u003eFor each name, the initialization handler will be called\n exactly once when the event is first \u003ca\u003ebrought to life\u003c/a\u003e,\n e.g. when an event handler is registered to it.\n\u003c/p\u003e",
          "module": "Reactive.Threepenny",
          "name": "newEventsNamed",
          "package": "threepenny-gui",
          "signature": "Handler (name, Event a, Handler a)-\u003e IO (name -\u003e Event a)",
          "type": "function"
        },
        "index": {
          "description": "Create series of events with delayed initialization For each name the initialization handler will be called exactly once when the event is first brought to life e.g when an event handler is registered to it",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "newEventsNamed",
          "normalized": "Handler(a,Event b,Handler b)-\u003eIO(a-\u003eEvent b)",
          "package": "threepenny-gui",
          "partial": "Events Named",
          "signature": "Handler(name,Event a,Handler a)-\u003eIO(name-\u003eEvent a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:newEventsNamed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister an event \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e.\n All registered handlers will be called whenever the behavior changes.\n\u003c/p\u003e\u003cp\u003eHowever, note that this is only an approximation,\n as behaviors may change continuously.\n Consequently, handlers should be idempotent.\n\u003c/p\u003e",
          "module": "Reactive.Threepenny",
          "name": "onChange",
          "package": "threepenny-gui",
          "signature": "Behavior a -\u003e Handler a -\u003e IO ()",
          "source": "src/Reactive-Threepenny.html#onChange",
          "type": "function"
        },
        "index": {
          "description": "Register an event Handler for Behavior All registered handlers will be called whenever the behavior changes However note that this is only an approximation as behaviors may change continuously Consequently handlers should be idempotent",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "onChange",
          "normalized": "Behavior a-\u003eHandler a-\u003eIO()",
          "package": "threepenny-gui",
          "partial": "Change",
          "signature": "Behavior a-\u003eHandler a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:onChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister an event \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e for an \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e.\n All registered handlers will be called whenever the event occurs.\n\u003c/p\u003e\u003cp\u003eWhen registering an event handler, you will also be given an action\n that unregisters this handler again.\n\u003c/p\u003e\u003cpre\u003e do unregisterMyHandler \u003c- register event myHandler\n\u003c/pre\u003e\u003cp\u003eFIXME: Unregistering event handlers does not work yet.\n\u003c/p\u003e",
          "module": "Reactive.Threepenny",
          "name": "register",
          "package": "threepenny-gui",
          "signature": "Event a -\u003e Handler a -\u003e IO (IO ())",
          "source": "src/Reactive-Threepenny.html#register",
          "type": "function"
        },
        "index": {
          "description": "Register an event Handler for an Event All registered handlers will be called whenever the event occurs When registering an event handler you will also be given an action that unregisters this handler again do unregisterMyHandler register event myHandler FIXME Unregistering event handlers does not work yet",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "register",
          "normalized": "Event a-\u003eHandler a-\u003eIO(IO())",
          "package": "threepenny-gui",
          "signature": "Event a-\u003eHandler a-\u003eIO(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:register"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit event occurrences according to a tag.\n The \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e values go into the left component while the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e values\n go into the right component of the result.\n\u003c/p\u003e",
          "module": "Reactive.Threepenny",
          "name": "split",
          "package": "threepenny-gui",
          "signature": "Event (Either a b) -\u003e (Event a, Event b)",
          "source": "src/Reactive-Threepenny.html#split",
          "type": "function"
        },
        "index": {
          "description": "Split event occurrences according to tag The Left values go into the left component while the Right values go into the right component of the result",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "split",
          "normalized": "Event(Either a b)-\u003e(Event a,Event b)",
          "package": "threepenny-gui",
          "signature": "Event(Either a b)-\u003e(Event a,Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a time-varying function from an initial value and \n a stream of new values. Think of it as\n\u003c/p\u003e\u003cpre\u003e stepper x0 ex = return $ \\time -\u003e\n     last (x0 : [x | (timex,x) \u003c- ex, timex \u003c time])\n\u003c/pre\u003e\u003cp\u003eNote that the smaller-than-sign in the comparision \u003ccode\u003etimex \u003c time\u003c/code\u003e means \n that the value of the behavior changes \"slightly after\"\n the event occurrences. This allows for recursive definitions.\n\u003c/p\u003e",
          "module": "Reactive.Threepenny",
          "name": "stepper",
          "package": "threepenny-gui",
          "signature": "a -\u003e Event a -\u003e m (Behavior a)",
          "source": "src/Reactive-Threepenny.html#stepper",
          "type": "function"
        },
        "index": {
          "description": "Construct time-varying function from an initial value and stream of new values Think of it as stepper x0 ex return time last x0 timex ex timex time Note that the smaller-than-sign in the comparision timex time means that the value of the behavior changes slightly after the event occurrences This allows for recursive definitions",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "stepper",
          "normalized": "a-\u003eEvent a-\u003eb(Behavior a)",
          "package": "threepenny-gui",
          "signature": "a-\u003eEvent a-\u003em(Behavior a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:stepper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two event streams of the same type.\n In case of simultaneous occurrences, the event values are combined\n with the binary function.\n Think of it as\n\u003c/p\u003e\u003cpre\u003e unionWith f ((timex,x):xs) ((timey,y):ys)\n    | timex == timey = (timex,f x y) : unionWith f xs ys\n    | timex \u003c  timey = (timex,x)     : unionWith f xs ((timey,y):ys)\n    | timex \u003e  timey = (timey,y)     : unionWith f ((timex,x):xs) ys\n\u003c/pre\u003e",
          "module": "Reactive.Threepenny",
          "name": "unionWith",
          "package": "threepenny-gui",
          "signature": "(a -\u003e a -\u003e a) -\u003e Event a -\u003e Event a -\u003e Event a",
          "source": "src/Reactive-Threepenny.html#unionWith",
          "type": "function"
        },
        "index": {
          "description": "Merge two event streams of the same type In case of simultaneous occurrences the event values are combined with the binary function Think of it as unionWith timex xs timey ys timex timey timex unionWith xs ys timex timey timex unionWith xs timey ys timex timey timey unionWith timex xs ys",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eEvent a-\u003eEvent a-\u003eEvent a",
          "package": "threepenny-gui",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eEvent a-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect simultaneous event occurrences in a list.\n\u003c/p\u003e",
          "module": "Reactive.Threepenny",
          "name": "unions",
          "package": "threepenny-gui",
          "signature": "[Event a] -\u003e Event [a]",
          "source": "src/Reactive-Threepenny.html#unions",
          "type": "function"
        },
        "index": {
          "description": "Collect simultaneous event occurrences in list",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "unions",
          "normalized": "[Event a]-\u003eEvent[a]",
          "package": "threepenny-gui",
          "signature": "[Event a]-\u003eEvent[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Threepenny",
          "name": "unsafeMapIO",
          "package": "threepenny-gui",
          "signature": "(a -\u003e IO b) -\u003e Event a -\u003e Event b",
          "source": "src/Reactive-Threepenny.html#unsafeMapIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "unsafeMapIO",
          "normalized": "(a-\u003eIO b)-\u003eEvent a-\u003eEvent b",
          "package": "threepenny-gui",
          "partial": "Map IO",
          "signature": "(a-\u003eIO b)-\u003eEvent a-\u003eEvent b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:unsafeMapIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn event occurrences only when the behavior is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n Variant of \u003ccode\u003e\u003ca\u003efilterApply\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Reactive.Threepenny",
          "name": "whenE",
          "package": "threepenny-gui",
          "signature": "Behavior Bool -\u003e Event a -\u003e Event a",
          "source": "src/Reactive-Threepenny.html#whenE",
          "type": "function"
        },
        "index": {
          "description": "Return event occurrences only when the behavior is True Variant of filterApply",
          "hierarchy": "Reactive Threepenny",
          "module": "Reactive.Threepenny",
          "name": "whenE",
          "normalized": "Behavior Bool-\u003eEvent a-\u003eEvent a",
          "package": "threepenny-gui",
          "signature": "Behavior Bool-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threepenny-gui/docs/Reactive-Threepenny.html#v:whenE"
      }
    }
  ]
]