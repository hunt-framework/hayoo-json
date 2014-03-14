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
        "word": "snaplet-stripe"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "Stripe",
          "package": "snaplet-stripe",
          "source": "src/Snap-Snaplet-Stripe.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "Stripe",
          "package": "snaplet-stripe",
          "partial": "Stripe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "HasStripe",
          "package": "snaplet-stripe",
          "source": "src/Snap-Snaplet-Stripe.html#HasStripe",
          "type": "class"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "HasStripe",
          "package": "snaplet-stripe",
          "partial": "Has Stripe",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#t:HasStripe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "StripeState",
          "package": "snaplet-stripe",
          "source": "src/Snap-Snaplet-Stripe.html#StripeState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "StripeState",
          "package": "snaplet-stripe",
          "partial": "Stripe State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#t:StripeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "StripeState",
          "package": "snaplet-stripe",
          "signature": "StripeState",
          "source": "src/Snap-Snaplet-Stripe.html#StripeState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "StripeState",
          "package": "snaplet-stripe",
          "partial": "Stripe State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#v:StripeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "addCardByCustId",
          "package": "snaplet-stripe",
          "signature": "CustomerId -\u003e TokenId -\u003e m (Either StripeFailure Customer)",
          "source": "src/Snap-Snaplet-Stripe.html#addCardByCustId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "addCardByCustId",
          "normalized": "CustomerId-\u003eTokenId-\u003ea(Either StripeFailure Customer)",
          "package": "snaplet-stripe",
          "partial": "Card By Cust Id",
          "signature": "CustomerId-\u003eTokenId-\u003em(Either StripeFailure Customer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#v:addCardByCustId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "addCustomer",
          "package": "snaplet-stripe",
          "signature": "Email -\u003e m (Either StripeFailure Customer)",
          "source": "src/Snap-Snaplet-Stripe.html#addCustomer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "addCustomer",
          "normalized": "Email-\u003ea(Either StripeFailure Customer)",
          "package": "snaplet-stripe",
          "partial": "Customer",
          "signature": "Email-\u003em(Either StripeFailure Customer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#v:addCustomer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "addCustomerWithCard",
          "package": "snaplet-stripe",
          "signature": "Email -\u003e TokenId -\u003e m (Either StripeFailure Customer)",
          "source": "src/Snap-Snaplet-Stripe.html#addCustomerWithCard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "addCustomerWithCard",
          "normalized": "Email-\u003eTokenId-\u003ea(Either StripeFailure Customer)",
          "package": "snaplet-stripe",
          "partial": "Customer With Card",
          "signature": "Email-\u003eTokenId-\u003em(Either StripeFailure Customer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#v:addCustomerWithCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "addStripeSplices",
          "package": "snaplet-stripe",
          "signature": "Snaplet (Heist b) -\u003e SnapletLens b StripeState -\u003e Initializer b v ()",
          "source": "src/Snap-Snaplet-Stripe.html#addStripeSplices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "addStripeSplices",
          "normalized": "Snaplet(Heist a)-\u003eSnapletLens a StripeState-\u003eInitializer a b()",
          "package": "snaplet-stripe",
          "partial": "Stripe Splices",
          "signature": "Snaplet(Heist b)-\u003eSnapletLens b StripeState-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#v:addStripeSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "charge",
          "package": "snaplet-stripe",
          "signature": "ChargeId -\u003e m (Either StripeFailure Charge)",
          "source": "src/Snap-Snaplet-Stripe.html#charge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "charge",
          "normalized": "ChargeId-\u003ea(Either StripeFailure Charge)",
          "package": "snaplet-stripe",
          "signature": "ChargeId-\u003em(Either StripeFailure Charge)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#v:charge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "chargeConnectCustomer",
          "package": "snaplet-stripe",
          "signature": "CustomerId -\u003e Amount -\u003e Currency -\u003e Maybe Description -\u003e AccessToken -\u003e Maybe Amount -\u003e m (Either StripeFailure Charge)",
          "source": "src/Snap-Snaplet-Stripe.html#chargeConnectCustomer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "chargeConnectCustomer",
          "normalized": "CustomerId-\u003eAmount-\u003eCurrency-\u003eMaybe Description-\u003eAccessToken-\u003eMaybe Amount-\u003ea(Either StripeFailure Charge)",
          "package": "snaplet-stripe",
          "partial": "Connect Customer",
          "signature": "CustomerId-\u003eAmount-\u003eCurrency-\u003eMaybe Description-\u003eAccessToken-\u003eMaybe Amount-\u003em(Either StripeFailure Charge)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#v:chargeConnectCustomer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "chargeCustomer",
          "package": "snaplet-stripe",
          "signature": "CustomerId -\u003e Amount -\u003e Currency -\u003e Maybe Description -\u003e m (Either StripeFailure Charge)",
          "source": "src/Snap-Snaplet-Stripe.html#chargeCustomer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "chargeCustomer",
          "normalized": "CustomerId-\u003eAmount-\u003eCurrency-\u003eMaybe Description-\u003ea(Either StripeFailure Charge)",
          "package": "snaplet-stripe",
          "partial": "Customer",
          "signature": "CustomerId-\u003eAmount-\u003eCurrency-\u003eMaybe Description-\u003em(Either StripeFailure Charge)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#v:chargeCustomer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "connectCharge",
          "package": "snaplet-stripe",
          "signature": "AccessToken -\u003e ChargeId -\u003e m (Either StripeFailure Charge)",
          "source": "src/Snap-Snaplet-Stripe.html#connectCharge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "connectCharge",
          "normalized": "AccessToken-\u003eChargeId-\u003ea(Either StripeFailure Charge)",
          "package": "snaplet-stripe",
          "partial": "Charge",
          "signature": "AccessToken-\u003eChargeId-\u003em(Either StripeFailure Charge)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#v:connectCharge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "customer",
          "package": "snaplet-stripe",
          "signature": "CustomerId -\u003e m (Either StripeFailure Customer)",
          "source": "src/Snap-Snaplet-Stripe.html#customer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "customer",
          "normalized": "CustomerId-\u003ea(Either StripeFailure Customer)",
          "package": "snaplet-stripe",
          "signature": "CustomerId-\u003em(Either StripeFailure Customer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#v:customer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "fromAmount",
          "package": "snaplet-stripe",
          "signature": "Amount -\u003e Float",
          "source": "src/Snap-Snaplet-Stripe.html#fromAmount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "fromAmount",
          "normalized": "Amount-\u003eFloat",
          "package": "snaplet-stripe",
          "partial": "Amount",
          "signature": "Amount-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#v:fromAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "getAuthURL",
          "package": "snaplet-stripe",
          "signature": "Maybe Scope -\u003e Maybe Text -\u003e Maybe Landing -\u003e m URL",
          "source": "src/Snap-Snaplet-Stripe.html#getAuthURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "getAuthURL",
          "normalized": "Maybe Scope-\u003eMaybe Text-\u003eMaybe Landing-\u003ea URL",
          "package": "snaplet-stripe",
          "partial": "Auth URL",
          "signature": "Maybe Scope-\u003eMaybe Text-\u003eMaybe Landing-\u003em URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#v:getAuthURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "getStripeState",
          "package": "snaplet-stripe",
          "signature": "b StripeState",
          "source": "src/Snap-Snaplet-Stripe.html#getStripeState",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "getStripeState",
          "package": "snaplet-stripe",
          "partial": "Stripe State",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#v:getStripeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "initStripe",
          "package": "snaplet-stripe",
          "signature": "SnapletInit b StripeState",
          "source": "src/Snap-Snaplet-Stripe.html#initStripe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "initStripe",
          "package": "snaplet-stripe",
          "partial": "Stripe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#v:initStripe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "stripeConfig",
          "package": "snaplet-stripe",
          "signature": "StripeConfig",
          "source": "src/Snap-Snaplet-Stripe.html#StripeState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "stripeConfig",
          "package": "snaplet-stripe",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#v:stripeConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "stripeConnectClientId",
          "package": "snaplet-stripe",
          "signature": "ClientId",
          "source": "src/Snap-Snaplet-Stripe.html#StripeState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "stripeConnectClientId",
          "package": "snaplet-stripe",
          "partial": "Connect Client Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#v:stripeConnectClientId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "stripePublicKey",
          "package": "snaplet-stripe",
          "signature": "PublicKey",
          "source": "src/Snap-Snaplet-Stripe.html#StripeState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "stripePublicKey",
          "package": "snaplet-stripe",
          "partial": "Public Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#v:stripePublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Stripe",
          "name": "toAmount",
          "package": "snaplet-stripe",
          "signature": "Float -\u003e Amount",
          "source": "src/Snap-Snaplet-Stripe.html#toAmount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Stripe",
          "module": "Snap.Snaplet.Stripe",
          "name": "toAmount",
          "normalized": "Float-\u003eAmount",
          "package": "snaplet-stripe",
          "partial": "Amount",
          "signature": "Float-\u003eAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-stripe/docs/Snap-Snaplet-Stripe.html#v:toAmount"
      }
    }
  ]
]