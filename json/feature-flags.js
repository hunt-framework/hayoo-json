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
        "word": "feature-flags"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA small utility module that provides a foundation for dynamically enabling and disabling features.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.FeatureFlag",
          "name": "FeatureFlag",
          "package": "feature-flags",
          "source": "src/Control-FeatureFlag.html",
          "type": "module"
        },
        "index": {
          "description": "small utility module that provides foundation for dynamically enabling and disabling features",
          "hierarchy": "Control FeatureFlag",
          "module": "Control.FeatureFlag",
          "name": "FeatureFlag",
          "package": "feature-flags",
          "partial": "Feature Flag",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feature-flags/docs/Control-FeatureFlag.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA union of different feature providers which maintains a currently active provider and facilities for changing providers.\n\u003c/p\u003e\u003cp\u003eUse this when you don't need to disable a feature, just to replace the implementation.\n\u003c/p\u003e",
          "module": "Control.FeatureFlag",
          "name": "FeatureProvider",
          "package": "feature-flags",
          "source": "src/Control-FeatureFlag.html#FeatureProvider",
          "type": "data"
        },
        "index": {
          "description": "union of different feature providers which maintains currently active provider and facilities for changing providers Use this when you don need to disable feature just to replace the implementation",
          "hierarchy": "Control FeatureFlag",
          "module": "Control.FeatureFlag",
          "name": "FeatureProvider",
          "package": "feature-flags",
          "partial": "Feature Provider",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feature-flags/docs/Control-FeatureFlag.html#t:FeatureProvider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple toggle for selectively enabling or disabling functionality.\n\u003c/p\u003e",
          "module": "Control.FeatureFlag",
          "name": "FeatureToggle",
          "package": "feature-flags",
          "source": "src/Control-FeatureFlag.html#FeatureToggle",
          "type": "data"
        },
        "index": {
          "description": "simple toggle for selectively enabling or disabling functionality",
          "hierarchy": "Control FeatureFlag",
          "module": "Control.FeatureFlag",
          "name": "FeatureToggle",
          "package": "feature-flags",
          "partial": "Feature Toggle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feature-flags/docs/Control-FeatureFlag.html#t:FeatureToggle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.FeatureFlag",
          "name": "Disabled",
          "package": "feature-flags",
          "signature": "Disabled",
          "source": "src/Control-FeatureFlag.html#FeatureToggle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control FeatureFlag",
          "module": "Control.FeatureFlag",
          "name": "Disabled",
          "package": "feature-flags",
          "partial": "Disabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feature-flags/docs/Control-FeatureFlag.html#v:Disabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.FeatureFlag",
          "name": "Enabled",
          "package": "feature-flags",
          "signature": "Enabled",
          "source": "src/Control-FeatureFlag.html#FeatureToggle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control FeatureFlag",
          "module": "Control.FeatureFlag",
          "name": "Enabled",
          "package": "feature-flags",
          "partial": "Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feature-flags/docs/Control-FeatureFlag.html#v:Enabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.FeatureFlag",
          "name": "FeatureProvider",
          "package": "feature-flags",
          "signature": "FeatureProvider",
          "source": "src/Control-FeatureFlag.html#FeatureProvider",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control FeatureFlag",
          "module": "Control.FeatureFlag",
          "name": "FeatureProvider",
          "package": "feature-flags",
          "partial": "Feature Provider",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feature-flags/docs/Control-FeatureFlag.html#v:FeatureProvider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.FeatureFlag",
          "name": "availableProviders",
          "package": "feature-flags",
          "signature": "[(Text, a)]",
          "source": "src/Control-FeatureFlag.html#FeatureProvider",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control FeatureFlag",
          "module": "Control.FeatureFlag",
          "name": "availableProviders",
          "normalized": "[(Text,a)]",
          "package": "feature-flags",
          "partial": "Providers",
          "signature": "[(Text,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feature-flags/docs/Control-FeatureFlag.html#v:availableProviders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.FeatureFlag",
          "name": "defaultProvider",
          "package": "feature-flags",
          "signature": "a",
          "source": "src/Control-FeatureFlag.html#FeatureProvider",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control FeatureFlag",
          "module": "Control.FeatureFlag",
          "name": "defaultProvider",
          "package": "feature-flags",
          "partial": "Provider",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feature-flags/docs/Control-FeatureFlag.html#v:defaultProvider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisable a feature.\n\u003c/p\u003e",
          "module": "Control.FeatureFlag",
          "name": "disable",
          "package": "feature-flags",
          "signature": "FeatureToggle a -\u003e FeatureToggle a",
          "source": "src/Control-FeatureFlag.html#disable",
          "type": "function"
        },
        "index": {
          "description": "Disable feature",
          "hierarchy": "Control FeatureFlag",
          "module": "Control.FeatureFlag",
          "name": "disable",
          "normalized": "FeatureToggle a-\u003eFeatureToggle a",
          "package": "feature-flags",
          "signature": "FeatureToggle a-\u003eFeatureToggle a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feature-flags/docs/Control-FeatureFlag.html#v:disable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnable a feature.\n\u003c/p\u003e",
          "module": "Control.FeatureFlag",
          "name": "enable",
          "package": "feature-flags",
          "signature": "FeatureToggle a -\u003e FeatureToggle a",
          "source": "src/Control-FeatureFlag.html#enable",
          "type": "function"
        },
        "index": {
          "description": "Enable feature",
          "hierarchy": "Control FeatureFlag",
          "module": "Control.FeatureFlag",
          "name": "enable",
          "normalized": "FeatureToggle a-\u003eFeatureToggle a",
          "package": "feature-flags",
          "signature": "FeatureToggle a-\u003eFeatureToggle a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feature-flags/docs/Control-FeatureFlag.html#v:enable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.FeatureFlag",
          "name": "enabledProvider",
          "package": "feature-flags",
          "signature": "a",
          "source": "src/Control-FeatureFlag.html#FeatureProvider",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control FeatureFlag",
          "module": "Control.FeatureFlag",
          "name": "enabledProvider",
          "package": "feature-flags",
          "partial": "Provider",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feature-flags/docs/Control-FeatureFlag.html#v:enabledProvider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.FeatureFlag",
          "name": "enabledProviderName",
          "package": "feature-flags",
          "signature": "Text",
          "source": "src/Control-FeatureFlag.html#FeatureProvider",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control FeatureFlag",
          "module": "Control.FeatureFlag",
          "name": "enabledProviderName",
          "package": "feature-flags",
          "partial": "Provider Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feature-flags/docs/Control-FeatureFlag.html#v:enabledProviderName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlip a toggle from enabled to disabled or vice versa.\n\u003c/p\u003e",
          "module": "Control.FeatureFlag",
          "name": "toggle",
          "package": "feature-flags",
          "signature": "FeatureToggle a -\u003e FeatureToggle a",
          "source": "src/Control-FeatureFlag.html#toggle",
          "type": "function"
        },
        "index": {
          "description": "Flip toggle from enabled to disabled or vice versa",
          "hierarchy": "Control FeatureFlag",
          "module": "Control.FeatureFlag",
          "name": "toggle",
          "normalized": "FeatureToggle a-\u003eFeatureToggle a",
          "package": "feature-flags",
          "signature": "FeatureToggle a-\u003eFeatureToggle a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feature-flags/docs/Control-FeatureFlag.html#v:toggle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the current feature provider with another provider.\n Returns Left if the default provider is used due to a failed lookup.\n Returns Right if the lookup succeeded.\n\u003c/p\u003e\u003cp\u003eUse \"default\" as the lookup value if you want to explicitly load the default provider.\n\u003c/p\u003e",
          "module": "Control.FeatureFlag",
          "name": "use",
          "package": "feature-flags",
          "signature": "Text -\u003e FeatureProvider a -\u003e Either (FeatureProvider a) (FeatureProvider a)",
          "source": "src/Control-FeatureFlag.html#use",
          "type": "function"
        },
        "index": {
          "description": "Replace the current feature provider with another provider Returns Left if the default provider is used due to failed lookup Returns Right if the lookup succeeded Use default as the lookup value if you want to explicitly load the default provider",
          "hierarchy": "Control FeatureFlag",
          "module": "Control.FeatureFlag",
          "name": "use",
          "normalized": "Text-\u003eFeatureProvider a-\u003eEither(FeatureProvider a)(FeatureProvider a)",
          "package": "feature-flags",
          "signature": "Text-\u003eFeatureProvider a-\u003eEither(FeatureProvider a)(FeatureProvider a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feature-flags/docs/Control-FeatureFlag.html#v:use"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action only when the specified feature is disabled.\n\u003c/p\u003e",
          "module": "Control.FeatureFlag",
          "name": "whenDisabled",
          "package": "feature-flags",
          "signature": "FeatureToggle a -\u003e m b -\u003e m ()",
          "source": "src/Control-FeatureFlag.html#whenDisabled",
          "type": "function"
        },
        "index": {
          "description": "Execute an action only when the specified feature is disabled",
          "hierarchy": "Control FeatureFlag",
          "module": "Control.FeatureFlag",
          "name": "whenDisabled",
          "normalized": "FeatureToggle a-\u003eb c-\u003eb()",
          "package": "feature-flags",
          "partial": "Disabled",
          "signature": "FeatureToggle a-\u003em b-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feature-flags/docs/Control-FeatureFlag.html#v:whenDisabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action only when the specified feature is enabled.\n\u003c/p\u003e",
          "module": "Control.FeatureFlag",
          "name": "whenEnabled",
          "package": "feature-flags",
          "signature": "FeatureToggle a -\u003e m b -\u003e m ()",
          "source": "src/Control-FeatureFlag.html#whenEnabled",
          "type": "function"
        },
        "index": {
          "description": "Execute an action only when the specified feature is enabled",
          "hierarchy": "Control FeatureFlag",
          "module": "Control.FeatureFlag",
          "name": "whenEnabled",
          "normalized": "FeatureToggle a-\u003eb c-\u003eb()",
          "package": "feature-flags",
          "partial": "Enabled",
          "signature": "FeatureToggle a-\u003em b-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feature-flags/docs/Control-FeatureFlag.html#v:whenEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function that takes a feature provided by a \u003ca\u003eFeatureProvider\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Control.FeatureFlag",
          "name": "withProvider",
          "package": "feature-flags",
          "signature": "FeatureProvider a -\u003e (a -\u003e b) -\u003e b",
          "source": "src/Control-FeatureFlag.html#withProvider",
          "type": "function"
        },
        "index": {
          "description": "Apply function that takes feature provided by FeatureProvider",
          "hierarchy": "Control FeatureFlag",
          "module": "Control.FeatureFlag",
          "name": "withProvider",
          "normalized": "FeatureProvider a-\u003e(a-\u003eb)-\u003eb",
          "package": "feature-flags",
          "partial": "Provider",
          "signature": "FeatureProvider a-\u003e(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feature-flags/docs/Control-FeatureFlag.html#v:withProvider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwitch on values depending on whether a toggle is enabled or disabled.\n\u003c/p\u003e",
          "module": "Control.FeatureFlag",
          "name": "withToggle",
          "package": "feature-flags",
          "signature": "FeatureToggle a -\u003e b -\u003e b -\u003e b",
          "source": "src/Control-FeatureFlag.html#withToggle",
          "type": "function"
        },
        "index": {
          "description": "Switch on values depending on whether toggle is enabled or disabled",
          "hierarchy": "Control FeatureFlag",
          "module": "Control.FeatureFlag",
          "name": "withToggle",
          "normalized": "FeatureToggle a-\u003eb-\u003eb-\u003eb",
          "package": "feature-flags",
          "partial": "Toggle",
          "signature": "FeatureToggle a-\u003eb-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feature-flags/docs/Control-FeatureFlag.html#v:withToggle"
      }
    }
  ]
]