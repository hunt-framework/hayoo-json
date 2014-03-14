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
        "word": "cascading"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Build",
          "name": "Build",
          "package": "cascading",
          "source": "src/Data-CSS-Build.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CSS Build",
          "module": "Data.CSS.Build",
          "name": "Build",
          "package": "cascading",
          "partial": "Build",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Build.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the given property to the given value.  (infix 2)\n\u003c/p\u003e\u003cp\u003eInfix version of \u003ccode\u003e\u003ca\u003esetProp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Build",
          "name": "($=)",
          "package": "cascading",
          "signature": "PropName-\u003e a-\u003e SetProp",
          "type": "function"
        },
        "index": {
          "description": "Set the given property to the given value infix Infix version of setProp",
          "hierarchy": "Data CSS Build",
          "module": "Data.CSS.Build",
          "name": "($=) $=",
          "normalized": "PropName-\u003ea-\u003eSetProp",
          "package": "cascading",
          "signature": "PropName-\u003ea-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Build.html#v:-36--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven children of the current selector.\n\u003c/p\u003e",
          "module": "Data.CSS.Build",
          "name": "below",
          "package": "cascading",
          "signature": "[Selector] -\u003e m a -\u003e m a",
          "source": "src/Data-CSS-Build.html#below",
          "type": "function"
        },
        "index": {
          "description": "Given children of the current selector",
          "hierarchy": "Data CSS Build",
          "module": "Data.CSS.Build",
          "name": "below",
          "normalized": "[Selector]-\u003ea b-\u003ea b",
          "package": "cascading",
          "signature": "[Selector]-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Build.html#v:below"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport the given style sheet for the given media type.\n\u003c/p\u003e",
          "module": "Data.CSS.Build",
          "name": "importFrom",
          "package": "cascading",
          "signature": "MediaType -\u003e Text -\u003e m ()",
          "source": "src/Data-CSS-Build.html#importFrom",
          "type": "function"
        },
        "index": {
          "description": "Import the given style sheet for the given media type",
          "hierarchy": "Data CSS Build",
          "module": "Data.CSS.Build",
          "name": "importFrom",
          "normalized": "MediaType-\u003eText-\u003ea()",
          "package": "cascading",
          "partial": "From",
          "signature": "MediaType-\u003eText-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Build.html#v:importFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport the given style sheet for the given media type.\n\u003c/p\u003e",
          "module": "Data.CSS.Build",
          "name": "importUrl",
          "package": "cascading",
          "signature": "MediaType -\u003e URL m -\u003e m ()",
          "source": "src/Data-CSS-Build.html#importUrl",
          "type": "function"
        },
        "index": {
          "description": "Import the given style sheet for the given media type",
          "hierarchy": "Data CSS Build",
          "module": "Data.CSS.Build",
          "name": "importUrl",
          "normalized": "MediaType-\u003eURL a-\u003ea()",
          "package": "cascading",
          "partial": "Url",
          "signature": "MediaType-\u003eURL m-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Build.html#v:importUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMark all property values important.\n\u003c/p\u003e",
          "module": "Data.CSS.Build",
          "name": "important",
          "package": "cascading",
          "signature": "m a -\u003e m a",
          "source": "src/Data-CSS-Build.html#important",
          "type": "function"
        },
        "index": {
          "description": "Mark all property values important",
          "hierarchy": "Data CSS Build",
          "module": "Data.CSS.Build",
          "name": "important",
          "normalized": "a b-\u003ea b",
          "package": "cascading",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Build.html#v:important"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the given property to be inherited.\n\u003c/p\u003e",
          "module": "Data.CSS.Build",
          "name": "inherit",
          "package": "cascading",
          "signature": "PropName -\u003e m ()",
          "source": "src/Data-CSS-Build.html#inherit",
          "type": "function"
        },
        "index": {
          "description": "Set the given property to be inherited",
          "hierarchy": "Data CSS Build",
          "module": "Data.CSS.Build",
          "name": "inherit",
          "normalized": "PropName-\u003ea()",
          "package": "cascading",
          "signature": "PropName-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Build.html#v:inherit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a computation in a modified environment.\n\u003c/p\u003e",
          "module": "Data.CSS.Build",
          "name": "local",
          "package": "cascading",
          "signature": "(r -\u003e r)-\u003e m a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Executes computation in modified environment",
          "hierarchy": "Data CSS Build",
          "module": "Data.CSS.Build",
          "name": "local",
          "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
          "package": "cascading",
          "signature": "(r-\u003er)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Build.html#v:local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify stylesheets for all media,\n\u003c/p\u003e",
          "module": "Data.CSS.Build",
          "name": "onAll",
          "package": "cascading",
          "signature": "ReaderT (Set MediaType) m a -\u003e m a",
          "source": "src/Data-CSS-Build.html#onAll",
          "type": "function"
        },
        "index": {
          "description": "Specify stylesheets for all media",
          "hierarchy": "Data CSS Build",
          "module": "Data.CSS.Build",
          "name": "onAll",
          "normalized": "ReaderT(Set MediaType)a b-\u003ea b",
          "package": "cascading",
          "partial": "All",
          "signature": "ReaderT(Set MediaType)m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Build.html#v:onAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify stylesheets for the given media.\n\u003c/p\u003e",
          "module": "Data.CSS.Build",
          "name": "onMedia",
          "package": "cascading",
          "signature": "[MediaType] -\u003e ReaderT (Set MediaType) m a -\u003e m a",
          "source": "src/Data-CSS-Build.html#onMedia",
          "type": "function"
        },
        "index": {
          "description": "Specify stylesheets for the given media",
          "hierarchy": "Data CSS Build",
          "module": "Data.CSS.Build",
          "name": "onMedia",
          "normalized": "[MediaType]-\u003eReaderT(Set MediaType)a b-\u003ea b",
          "package": "cascading",
          "partial": "Media",
          "signature": "[MediaType]-\u003eReaderT(Set MediaType)m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Build.html#v:onMedia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the selector.\n\u003c/p\u003e",
          "module": "Data.CSS.Build",
          "name": "select",
          "package": "cascading",
          "signature": "[Selector] -\u003e ReaderT BuildCfg m a -\u003e ReaderT (Set MediaType) m a",
          "source": "src/Data-CSS-Build.html#select",
          "type": "function"
        },
        "index": {
          "description": "Specify the selector",
          "hierarchy": "Data CSS Build",
          "module": "Data.CSS.Build",
          "name": "select",
          "normalized": "[Selector]-\u003eReaderT BuildCfg a b-\u003eReaderT(Set MediaType)a b",
          "package": "cascading",
          "signature": "[Selector]-\u003eReaderT BuildCfg m a-\u003eReaderT(Set MediaType)m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Build.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the given property to the given value.\n\u003c/p\u003e\u003cp\u003eNon-infix version of \u003ccode\u003e\u003ca\u003e$=\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Build",
          "name": "setProp",
          "package": "cascading",
          "signature": "PropName-\u003e a-\u003e SetProp",
          "type": "function"
        },
        "index": {
          "description": "Set the given property to the given value Non-infix version of",
          "hierarchy": "Data CSS Build",
          "module": "Data.CSS.Build",
          "name": "setProp",
          "normalized": "PropName-\u003ea-\u003eSetProp",
          "package": "cascading",
          "partial": "Prop",
          "signature": "PropName-\u003ea-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Build.html#v:setProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Classes",
          "name": "Classes",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Classes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CSS Properties Classes",
          "module": "Data.CSS.Properties.Classes",
          "name": "Classes",
          "package": "cascading",
          "partial": "Classes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Classes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for length types with a notion of automatic length.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Classes",
          "name": "HasAutoLength",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Classes.html#HasAutoLength",
          "type": "class"
        },
        "index": {
          "description": "Class for length types with notion of automatic length",
          "hierarchy": "Data CSS Properties Classes",
          "module": "Data.CSS.Properties.Classes",
          "name": "HasAutoLength",
          "package": "cascading",
          "partial": "Has Auto Length",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Classes.html#t:HasAutoLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of types, which feature CSS lengths.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:  \u003ccode\u003e\u003ca\u003e_Em\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e_Ex\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e_Mm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e_Px\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ezeroLen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Classes",
          "name": "HasLength",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Classes.html#HasLength",
          "type": "class"
        },
        "index": {
          "description": "Class of types which feature CSS lengths Minimal complete definition Em Ex Mm Px zeroLen",
          "hierarchy": "Data CSS Properties Classes",
          "module": "Data.CSS.Properties.Classes",
          "name": "HasLength",
          "package": "cascading",
          "partial": "Has Length",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Classes.html#t:HasLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for length types with percentages.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003e_Factor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Classes",
          "name": "HasPercent",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Classes.html#HasPercent",
          "type": "class"
        },
        "index": {
          "description": "Class for length types with percentages Minimal complete definition Factor",
          "hierarchy": "Data CSS Properties Classes",
          "module": "Data.CSS.Properties.Classes",
          "name": "HasPercent",
          "package": "cascading",
          "partial": "Has Percent",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Classes.html#t:HasPercent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eLength\u003c/code\u003e in centimeters (\u003ccode\u003ecm\u003c/code\u003e).  Compatible with \u003ccode\u003e\u003ca\u003e_In\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e_Mm\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003e_Pc\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e_Pt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Classes",
          "name": "_Cm",
          "package": "cascading",
          "signature": "Prism' (len a) a",
          "source": "src/Data-CSS-Properties-Classes.html#_Cm",
          "type": "method"
        },
        "index": {
          "description": "Length in centimeters cm Compatible with In Mm Pc and Pt",
          "hierarchy": "Data CSS Properties Classes",
          "module": "Data.CSS.Properties.Classes",
          "name": "_Cm",
          "package": "cascading",
          "partial": "Cm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Classes.html#v:_Cm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eLength\u003c/code\u003e in units of the font size (\u003ccode\u003eem\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Classes",
          "name": "_Em",
          "package": "cascading",
          "signature": "Prism' (len a) a",
          "source": "src/Data-CSS-Properties-Classes.html#_Em",
          "type": "method"
        },
        "index": {
          "description": "Length in units of the font size em",
          "hierarchy": "Data CSS Properties Classes",
          "module": "Data.CSS.Properties.Classes",
          "name": "_Em",
          "package": "cascading",
          "partial": "Em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Classes.html#v:_Em"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eLength\u003c/code\u003e in units of the height of the \u003ccode\u003ex\u003c/code\u003e character in the\n current font (\u003ccode\u003eex\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Classes",
          "name": "_Ex",
          "package": "cascading",
          "signature": "Prism' (len a) a",
          "source": "src/Data-CSS-Properties-Classes.html#_Ex",
          "type": "method"
        },
        "index": {
          "description": "Length in units of the height of the character in the current font ex",
          "hierarchy": "Data CSS Properties Classes",
          "module": "Data.CSS.Properties.Classes",
          "name": "_Ex",
          "package": "cascading",
          "partial": "Ex",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Classes.html#v:_Ex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelative \u003ccode\u003eLength\u003c/code\u003e by factor where 1 means 100% (\u003ccode\u003e%\u003c/code\u003e).\n Compatible with \u003ccode\u003e\u003ca\u003e_Percent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Classes",
          "name": "_Factor",
          "package": "cascading",
          "signature": "Prism' (len a) a",
          "source": "src/Data-CSS-Properties-Classes.html#_Factor",
          "type": "method"
        },
        "index": {
          "description": "Relative Length by factor where means Compatible with Percent",
          "hierarchy": "Data CSS Properties Classes",
          "module": "Data.CSS.Properties.Classes",
          "name": "_Factor",
          "package": "cascading",
          "partial": "Factor",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Classes.html#v:_Factor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eLength\u003c/code\u003e in inches (\u003ccode\u003ein\u003c/code\u003e).  Compatible with \u003ccode\u003e\u003ca\u003e_Cm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e_Mm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e_Pc\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003e_Pt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Classes",
          "name": "_In",
          "package": "cascading",
          "signature": "Prism' (len a) a",
          "source": "src/Data-CSS-Properties-Classes.html#_In",
          "type": "method"
        },
        "index": {
          "description": "Length in inches in Compatible with Cm Mm Pc and Pt",
          "hierarchy": "Data CSS Properties Classes",
          "module": "Data.CSS.Properties.Classes",
          "name": "_In",
          "package": "cascading",
          "partial": "In",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Classes.html#v:_In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eLength\u003c/code\u003e in millimeters (\u003ccode\u003emm\u003c/code\u003e).  Compatible with \u003ccode\u003e\u003ca\u003e_Cm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e_In\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003e_Pc\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e_Pt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Classes",
          "name": "_Mm",
          "package": "cascading",
          "signature": "Prism' (len a) a",
          "source": "src/Data-CSS-Properties-Classes.html#_Mm",
          "type": "method"
        },
        "index": {
          "description": "Length in millimeters mm Compatible with Cm In Pc and Pt",
          "hierarchy": "Data CSS Properties Classes",
          "module": "Data.CSS.Properties.Classes",
          "name": "_Mm",
          "package": "cascading",
          "partial": "Mm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Classes.html#v:_Mm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eLength\u003c/code\u003e in picas (\u003ccode\u003epc\u003c/code\u003e).  Compatible with \u003ccode\u003e\u003ca\u003e_Cm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e_In\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e_Mm\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003e_Pt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Classes",
          "name": "_Pc",
          "package": "cascading",
          "signature": "Prism' (len a) a",
          "source": "src/Data-CSS-Properties-Classes.html#_Pc",
          "type": "method"
        },
        "index": {
          "description": "Length in picas pc Compatible with Cm In Mm and Pt",
          "hierarchy": "Data CSS Properties Classes",
          "module": "Data.CSS.Properties.Classes",
          "name": "_Pc",
          "package": "cascading",
          "partial": "Pc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Classes.html#v:_Pc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelative \u003ccode\u003eLength\u003c/code\u003e in percent (\u003ccode\u003e%\u003c/code\u003e).  Compatible with \u003ccode\u003e\u003ca\u003e_Factor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Classes",
          "name": "_Percent",
          "package": "cascading",
          "signature": "Prism' (len a) a",
          "source": "src/Data-CSS-Properties-Classes.html#_Percent",
          "type": "method"
        },
        "index": {
          "description": "Relative Length in percent Compatible with Factor",
          "hierarchy": "Data CSS Properties Classes",
          "module": "Data.CSS.Properties.Classes",
          "name": "_Percent",
          "package": "cascading",
          "partial": "Percent",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Classes.html#v:_Percent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eLength\u003c/code\u003e in points (\u003ccode\u003ept\u003c/code\u003e).  Compatible with \u003ccode\u003e\u003ca\u003e_Cm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e_In\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e_Mm\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003e_Pc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Classes",
          "name": "_Pt",
          "package": "cascading",
          "signature": "Prism' (len a) a",
          "source": "src/Data-CSS-Properties-Classes.html#_Pt",
          "type": "method"
        },
        "index": {
          "description": "Length in points pt Compatible with Cm In Mm and Pc",
          "hierarchy": "Data CSS Properties Classes",
          "module": "Data.CSS.Properties.Classes",
          "name": "_Pt",
          "package": "cascading",
          "partial": "Pt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Classes.html#v:_Pt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eLength\u003c/code\u003e in pixels (\u003ccode\u003epx\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Classes",
          "name": "_Px",
          "package": "cascading",
          "signature": "Prism' (len a) a",
          "source": "src/Data-CSS-Properties-Classes.html#_Px",
          "type": "method"
        },
        "index": {
          "description": "Length in pixels px",
          "hierarchy": "Data CSS Properties Classes",
          "module": "Data.CSS.Properties.Classes",
          "name": "_Px",
          "package": "cascading",
          "partial": "Px",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Classes.html#v:_Px"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAutomatic length.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Classes",
          "name": "autoLen",
          "package": "cascading",
          "signature": "len a",
          "source": "src/Data-CSS-Properties-Classes.html#autoLen",
          "type": "method"
        },
        "index": {
          "description": "Automatic length",
          "hierarchy": "Data CSS Properties Classes",
          "module": "Data.CSS.Properties.Classes",
          "name": "autoLen",
          "package": "cascading",
          "partial": "Len",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Classes.html#v:autoLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero length.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Classes",
          "name": "zeroLen",
          "package": "cascading",
          "signature": "len a",
          "source": "src/Data-CSS-Properties-Classes.html#zeroLen",
          "type": "method"
        },
        "index": {
          "description": "Zero length",
          "hierarchy": "Data CSS Properties Classes",
          "module": "Data.CSS.Properties.Classes",
          "name": "zeroLen",
          "package": "cascading",
          "partial": "Len",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Classes.html#v:zeroLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Compat",
          "name": "Compat",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Compat.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CSS Properties Compat",
          "module": "Data.CSS.Properties.Compat",
          "name": "Compat",
          "package": "cascading",
          "partial": "Compat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Compat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds vendor-prefixed properties for all properties in the given\n style sheet.  The following vendors are currently added:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Microsoft (\u003ccode\u003e-ms-\u003c/code\u003e),\n\u003c/li\u003e\u003cli\u003e Mozilla (\u003ccode\u003e-moz-\u003c/code\u003e),\n\u003c/li\u003e\u003cli\u003e Opera (\u003ccode\u003e-o-\u003c/code\u003e),\n\u003c/li\u003e\u003cli\u003e WebKit (\u003ccode\u003e-webkit-\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis combinator keeps the original (non-prefixed) property and does\n not prefix properties that already have a vendor prefix.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Compat",
          "name": "vendors",
          "package": "cascading",
          "signature": "m a -\u003e m a",
          "source": "src/Data-CSS-Properties-Compat.html#vendors",
          "type": "function"
        },
        "index": {
          "description": "Adds vendor-prefixed properties for all properties in the given style sheet The following vendors are currently added Microsoft ms Mozilla moz Opera WebKit webkit This combinator keeps the original non-prefixed property and does not prefix properties that already have vendor prefix",
          "hierarchy": "Data CSS Properties Compat",
          "module": "Data.CSS.Properties.Compat",
          "name": "vendors",
          "normalized": "a b-\u003ea b",
          "package": "cascading",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Compat.html#v:vendors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Font",
          "name": "Font",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Font.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CSS Properties Font",
          "module": "Data.CSS.Properties.Font",
          "name": "Font",
          "package": "cascading",
          "partial": "Font",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Font.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003ebackground-attachment\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Font",
          "name": "backgroundAttachment",
          "package": "cascading",
          "signature": "BackgroundAttachment -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Font.html#backgroundAttachment",
          "type": "function"
        },
        "index": {
          "description": "Set the background-attachment",
          "hierarchy": "Data CSS Properties Font",
          "module": "Data.CSS.Properties.Font",
          "name": "backgroundAttachment",
          "normalized": "BackgroundAttachment-\u003eSetProp",
          "package": "cascading",
          "partial": "Attachment",
          "signature": "BackgroundAttachment-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Font.html#v:backgroundAttachment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003ebackground-color\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Font",
          "name": "backgroundColor",
          "package": "cascading",
          "signature": "f a -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Font.html#backgroundColor",
          "type": "function"
        },
        "index": {
          "description": "Set the background-color",
          "hierarchy": "Data CSS Properties Font",
          "module": "Data.CSS.Properties.Font",
          "name": "backgroundColor",
          "normalized": "a b-\u003eSetProp",
          "package": "cascading",
          "partial": "Color",
          "signature": "f a-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Font.html#v:backgroundColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003ebackground-image\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Font",
          "name": "backgroundImage",
          "package": "cascading",
          "signature": "Maybe (CssUrl Text) -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Font.html#backgroundImage",
          "type": "function"
        },
        "index": {
          "description": "Set the background-image",
          "hierarchy": "Data CSS Properties Font",
          "module": "Data.CSS.Properties.Font",
          "name": "backgroundImage",
          "normalized": "Maybe(CssUrl Text)-\u003eSetProp",
          "package": "cascading",
          "partial": "Image",
          "signature": "Maybe(CssUrl Text)-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Font.html#v:backgroundImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003ebackground-image\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Font",
          "name": "backgroundImageUrl",
          "package": "cascading",
          "signature": "Maybe (URL m) -\u003e SetPropM m",
          "source": "src/Data-CSS-Properties-Font.html#backgroundImageUrl",
          "type": "function"
        },
        "index": {
          "description": "Set the background-image",
          "hierarchy": "Data CSS Properties Font",
          "module": "Data.CSS.Properties.Font",
          "name": "backgroundImageUrl",
          "normalized": "Maybe(URL a)-\u003eSetPropM a",
          "package": "cascading",
          "partial": "Image Url",
          "signature": "Maybe(URL m)-\u003eSetPropM m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Font.html#v:backgroundImageUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003ebackground-position\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Font",
          "name": "backgroundPosition",
          "package": "cascading",
          "signature": "FactorLen Length a -\u003e FactorLen Length b -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Font.html#backgroundPosition",
          "type": "function"
        },
        "index": {
          "description": "Set the background-position",
          "hierarchy": "Data CSS Properties Font",
          "module": "Data.CSS.Properties.Font",
          "name": "backgroundPosition",
          "normalized": "FactorLen Length a-\u003eFactorLen Length b-\u003eSetProp",
          "package": "cascading",
          "partial": "Position",
          "signature": "FactorLen Length a-\u003eFactorLen Length b-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Font.html#v:backgroundPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet \u003ccode\u003ebackground-repeat\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Font",
          "name": "backgroundRepeat",
          "package": "cascading",
          "signature": "BackgroundRepeat -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Font.html#backgroundRepeat",
          "type": "function"
        },
        "index": {
          "description": "Set background-repeat",
          "hierarchy": "Data CSS Properties Font",
          "module": "Data.CSS.Properties.Font",
          "name": "backgroundRepeat",
          "normalized": "BackgroundRepeat-\u003eSetProp",
          "package": "cascading",
          "partial": "Repeat",
          "signature": "BackgroundRepeat-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Font.html#v:backgroundRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the foreground \u003ccode\u003ecolor\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Font",
          "name": "color",
          "package": "cascading",
          "signature": "f a -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Font.html#color",
          "type": "function"
        },
        "index": {
          "description": "Set the foreground color",
          "hierarchy": "Data CSS Properties Font",
          "module": "Data.CSS.Properties.Font",
          "name": "color",
          "normalized": "a b-\u003eSetProp",
          "package": "cascading",
          "signature": "f a-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Font.html#v:color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003efont-family\u003c/code\u003e choices.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Font",
          "name": "fontFamily",
          "package": "cascading",
          "signature": "[FontFamily] -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Font.html#fontFamily",
          "type": "function"
        },
        "index": {
          "description": "Set the font-family choices",
          "hierarchy": "Data CSS Properties Font",
          "module": "Data.CSS.Properties.Font",
          "name": "fontFamily",
          "normalized": "[FontFamily]-\u003eSetProp",
          "package": "cascading",
          "partial": "Family",
          "signature": "[FontFamily]-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Font.html#v:fontFamily"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003efont-size\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Font",
          "name": "fontSize",
          "package": "cascading",
          "signature": "FontSize a -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Font.html#fontSize",
          "type": "function"
        },
        "index": {
          "description": "Set the font-size",
          "hierarchy": "Data CSS Properties Font",
          "module": "Data.CSS.Properties.Font",
          "name": "fontSize",
          "normalized": "FontSize a-\u003eSetProp",
          "package": "cascading",
          "partial": "Size",
          "signature": "FontSize a-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Font.html#v:fontSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003efont-style\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Font",
          "name": "fontStyle",
          "package": "cascading",
          "signature": "FontStyle -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Font.html#fontStyle",
          "type": "function"
        },
        "index": {
          "description": "Set the font-style",
          "hierarchy": "Data CSS Properties Font",
          "module": "Data.CSS.Properties.Font",
          "name": "fontStyle",
          "normalized": "FontStyle-\u003eSetProp",
          "package": "cascading",
          "partial": "Style",
          "signature": "FontStyle-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Font.html#v:fontStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003efont-variant\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Font",
          "name": "fontVariant",
          "package": "cascading",
          "signature": "FontVariant -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Font.html#fontVariant",
          "type": "function"
        },
        "index": {
          "description": "Set the font-variant",
          "hierarchy": "Data CSS Properties Font",
          "module": "Data.CSS.Properties.Font",
          "name": "fontVariant",
          "normalized": "FontVariant-\u003eSetProp",
          "package": "cascading",
          "partial": "Variant",
          "signature": "FontVariant-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Font.html#v:fontVariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003efont-weight\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Font",
          "name": "fontWeight",
          "package": "cascading",
          "signature": "FontWeight -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Font.html#fontWeight",
          "type": "function"
        },
        "index": {
          "description": "Set the font-weight",
          "hierarchy": "Data CSS Properties Font",
          "module": "Data.CSS.Properties.Font",
          "name": "fontWeight",
          "normalized": "FontWeight-\u003eSetProp",
          "package": "cascading",
          "partial": "Weight",
          "signature": "FontWeight-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Font.html#v:fontWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003etext-decoration\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Font",
          "name": "textDecoration",
          "package": "cascading",
          "signature": "Maybe TextDecoration -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Font.html#textDecoration",
          "type": "function"
        },
        "index": {
          "description": "Set the text-decoration",
          "hierarchy": "Data CSS Properties Font",
          "module": "Data.CSS.Properties.Font",
          "name": "textDecoration",
          "normalized": "Maybe TextDecoration-\u003eSetProp",
          "package": "cascading",
          "partial": "Decoration",
          "signature": "Maybe TextDecoration-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Font.html#v:textDecoration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Layout",
          "name": "Layout",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Layout.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "Layout",
          "package": "cascading",
          "partial": "Layout",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet all \u003ccode\u003eborder\u003c/code\u003e properties for all edges.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "border",
          "package": "cascading",
          "signature": "BorderWidth a-\u003e BorderStyle-\u003e f b-\u003e SetProp",
          "type": "function"
        },
        "index": {
          "description": "Set all border properties for all edges",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "border",
          "normalized": "BorderWidth a-\u003eBorderStyle-\u003eb c-\u003eSetProp",
          "package": "cascading",
          "signature": "BorderWidth a-\u003eBorderStyle-\u003ef b-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:border"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollapse borders for tables (\u003ccode\u003eborder-collapse\u003c/code\u003e)?\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "borderCollapse",
          "package": "cascading",
          "signature": "Bool -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#borderCollapse",
          "type": "function"
        },
        "index": {
          "description": "Collapse borders for tables border-collapse",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "borderCollapse",
          "normalized": "Bool-\u003eSetProp",
          "package": "cascading",
          "partial": "Collapse",
          "signature": "Bool-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:borderCollapse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the border color for the given edges (\u003ccode\u003eborder*-color\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "borderColor",
          "package": "cascading",
          "signature": "Edge (f a) -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#borderColor",
          "type": "function"
        },
        "index": {
          "description": "Set the border color for the given edges border color",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "borderColor",
          "normalized": "Edge(a b)-\u003eSetProp",
          "package": "cascading",
          "partial": "Color",
          "signature": "Edge(f a)-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:borderColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the table's \u003ccode\u003eborder-spacing\u003c/code\u003e (up to two values).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "borderSpacing",
          "package": "cascading",
          "signature": "[Length a] -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#borderSpacing",
          "type": "function"
        },
        "index": {
          "description": "Set the table border-spacing up to two values",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "borderSpacing",
          "normalized": "[Length a]-\u003eSetProp",
          "package": "cascading",
          "partial": "Spacing",
          "signature": "[Length a]-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:borderSpacing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the border style for the given edges (\u003ccode\u003eborder*-style\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "borderStyle",
          "package": "cascading",
          "signature": "Edge BorderStyle -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#borderStyle",
          "type": "function"
        },
        "index": {
          "description": "Set the border style for the given edges border style",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "borderStyle",
          "normalized": "Edge BorderStyle-\u003eSetProp",
          "package": "cascading",
          "partial": "Style",
          "signature": "Edge BorderStyle-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:borderStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the border width for the given edges (\u003ccode\u003eborder*-width\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "borderWidth",
          "package": "cascading",
          "signature": "Edge (BorderWidth a) -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#borderWidth",
          "type": "function"
        },
        "index": {
          "description": "Set the border width for the given edges border width",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "borderWidth",
          "normalized": "Edge(BorderWidth a)-\u003eSetProp",
          "package": "cascading",
          "partial": "Width",
          "signature": "Edge(BorderWidth a)-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:borderWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003ecaption-side\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "captionSide",
          "package": "cascading",
          "signature": "CaptionSide -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#captionSide",
          "type": "function"
        },
        "index": {
          "description": "Set the caption-side",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "captionSide",
          "normalized": "CaptionSide-\u003eSetProp",
          "package": "cascading",
          "partial": "Side",
          "signature": "CaptionSide-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:captionSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the sides to \u003ccode\u003eclear\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "clear",
          "package": "cascading",
          "signature": "[FloatEdge] -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#clear",
          "type": "function"
        },
        "index": {
          "description": "Set the sides to clear",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "clear",
          "normalized": "[FloatEdge]-\u003eSetProp",
          "package": "cascading",
          "signature": "[FloatEdge]-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:clear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003eclip\u003c/code\u003e mode to the given shape or \u003ccode\u003eauto\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "clip",
          "package": "cascading",
          "signature": "Maybe (ClipMode a) -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#clip",
          "type": "function"
        },
        "index": {
          "description": "Set the clip mode to the given shape or auto",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "clip",
          "normalized": "Maybe(ClipMode a)-\u003eSetProp",
          "package": "cascading",
          "signature": "Maybe(ClipMode a)-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:clip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003edisplay\u003c/code\u003e mode.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "display",
          "package": "cascading",
          "signature": "DisplayMode -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#display",
          "type": "function"
        },
        "index": {
          "description": "Set the display mode",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "display",
          "normalized": "DisplayMode-\u003eSetProp",
          "package": "cascading",
          "signature": "DisplayMode-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet edge positions (\u003ccode\u003etop\u003c/code\u003e, \u003ccode\u003eright\u003c/code\u003e, \u003ccode\u003ebottom\u003c/code\u003e, \u003ccode\u003eleft\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "edgePos",
          "package": "cascading",
          "signature": "Edge (AutoLen (FactorLen Length) a) -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#edgePos",
          "type": "function"
        },
        "index": {
          "description": "Set edge positions top right bottom left",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "edgePos",
          "normalized": "Edge(AutoLen(FactorLen Length)a)-\u003eSetProp",
          "package": "cascading",
          "partial": "Pos",
          "signature": "Edge(AutoLen(FactorLen Length)a)-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:edgePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow \u003ccode\u003eempty-cells\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "emptyCells",
          "package": "cascading",
          "signature": "Bool -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#emptyCells",
          "type": "function"
        },
        "index": {
          "description": "Show empty-cells",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "emptyCells",
          "normalized": "Bool-\u003eSetProp",
          "package": "cascading",
          "partial": "Cells",
          "signature": "Bool-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:emptyCells"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet \u003ccode\u003efloat\u003c/code\u003e side.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "float",
          "package": "cascading",
          "signature": "Maybe FloatEdge -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#float",
          "type": "function"
        },
        "index": {
          "description": "Set float side",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "float",
          "normalized": "Maybe FloatEdge-\u003eSetProp",
          "package": "cascading",
          "signature": "Maybe FloatEdge-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003eheight\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "height",
          "package": "cascading",
          "signature": "AutoLen (FactorLen Length) a -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#height",
          "type": "function"
        },
        "index": {
          "description": "Set the height",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "height",
          "normalized": "AutoLen(FactorLen Length)a-\u003eSetProp",
          "package": "cascading",
          "signature": "AutoLen(FactorLen Length)a-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003eline-height\u003c/code\u003e to the given length or \u003ccode\u003enormal\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "lineHeight",
          "package": "cascading",
          "signature": "Maybe (FactorLen Length a) -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#lineHeight",
          "type": "function"
        },
        "index": {
          "description": "Set the line-height to the given length or normal",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "lineHeight",
          "normalized": "Maybe(FactorLen Length a)-\u003eSetProp",
          "package": "cascading",
          "partial": "Height",
          "signature": "Maybe(FactorLen Length a)-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:lineHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the margin for the given edges (\u003ccode\u003emargin*\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "margin",
          "package": "cascading",
          "signature": "Edge (AutoLen (FactorLen Length) a) -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#margin",
          "type": "function"
        },
        "index": {
          "description": "Set the margin for the given edges margin",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "margin",
          "normalized": "Edge(AutoLen(FactorLen Length)a)-\u003eSetProp",
          "package": "cascading",
          "signature": "Edge(AutoLen(FactorLen Length)a)-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:margin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003emax-height\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "maxHeight",
          "package": "cascading",
          "signature": "Maybe (FactorLen Length a) -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#maxHeight",
          "type": "function"
        },
        "index": {
          "description": "Set the max-height",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "maxHeight",
          "normalized": "Maybe(FactorLen Length a)-\u003eSetProp",
          "package": "cascading",
          "partial": "Height",
          "signature": "Maybe(FactorLen Length a)-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:maxHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003emax-width\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "maxWidth",
          "package": "cascading",
          "signature": "Maybe (FactorLen Length a) -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#maxWidth",
          "type": "function"
        },
        "index": {
          "description": "Set the max-width",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "maxWidth",
          "normalized": "Maybe(FactorLen Length a)-\u003eSetProp",
          "package": "cascading",
          "partial": "Width",
          "signature": "Maybe(FactorLen Length a)-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:maxWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003emin-height\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "minHeight",
          "package": "cascading",
          "signature": "FactorLen Length a -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#minHeight",
          "type": "function"
        },
        "index": {
          "description": "Set the min-height",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "minHeight",
          "normalized": "FactorLen Length a-\u003eSetProp",
          "package": "cascading",
          "partial": "Height",
          "signature": "FactorLen Length a-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:minHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003emin-width\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "minWidth",
          "package": "cascading",
          "signature": "FactorLen Length a -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#minWidth",
          "type": "function"
        },
        "index": {
          "description": "Set the min-width",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "minWidth",
          "normalized": "FactorLen Length a-\u003eSetProp",
          "package": "cascading",
          "partial": "Width",
          "signature": "FactorLen Length a-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:minWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003eoverflow\u003c/code\u003e handling mode.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "overflow",
          "package": "cascading",
          "signature": "OverflowMode -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#overflow",
          "type": "function"
        },
        "index": {
          "description": "Set the overflow handling mode",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "overflow",
          "normalized": "OverflowMode-\u003eSetProp",
          "package": "cascading",
          "signature": "OverflowMode-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:overflow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the padding for the given edges (\u003ccode\u003epadding*\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "padding",
          "package": "cascading",
          "signature": "Edge (FactorLen Length a) -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#padding",
          "type": "function"
        },
        "index": {
          "description": "Set the padding for the given edges padding",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "padding",
          "normalized": "Edge(FactorLen Length a)-\u003eSetProp",
          "package": "cascading",
          "signature": "Edge(FactorLen Length a)-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:padding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet page breaking behaviour after the element (\u003ccode\u003epage-break-after\u003c/code\u003e)\n to the given value or \u003ccode\u003eauto\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "pageBreakAfter",
          "package": "cascading",
          "signature": "Maybe (PageBreak a) -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#pageBreakAfter",
          "type": "function"
        },
        "index": {
          "description": "Set page breaking behaviour after the element page-break-after to the given value or auto",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "pageBreakAfter",
          "normalized": "Maybe(PageBreak a)-\u003eSetProp",
          "package": "cascading",
          "partial": "Break After",
          "signature": "Maybe(PageBreak a)-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:pageBreakAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet page breaking behaviour before the element\n (\u003ccode\u003epage-break-before\u003c/code\u003e) to the given value or \u003ccode\u003eauto\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "pageBreakBefore",
          "package": "cascading",
          "signature": "Maybe (PageBreak a) -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#pageBreakBefore",
          "type": "function"
        },
        "index": {
          "description": "Set page breaking behaviour before the element page-break-before to the given value or auto",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "pageBreakBefore",
          "normalized": "Maybe(PageBreak a)-\u003eSetProp",
          "package": "cascading",
          "partial": "Break Before",
          "signature": "Maybe(PageBreak a)-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:pageBreakBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet page breaking behaviour inside the element\n (\u003ccode\u003epage-break-inside\u003c/code\u003e) to the given value or \u003ccode\u003eauto\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "pageBreakInside",
          "package": "cascading",
          "signature": "Maybe (PageBreak InsideBreak) -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#pageBreakInside",
          "type": "function"
        },
        "index": {
          "description": "Set page breaking behaviour inside the element page-break-inside to the given value or auto",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "pageBreakInside",
          "normalized": "Maybe(PageBreak InsideBreak)-\u003eSetProp",
          "package": "cascading",
          "partial": "Break Inside",
          "signature": "Maybe(PageBreak InsideBreak)-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:pageBreakInside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the page margins for paged media.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "pageMargins",
          "package": "cascading",
          "signature": "PageSelector-\u003e Edge (AutoLen (FactorLen Length) a)-\u003e ReaderT (Set MediaType) m ()",
          "type": "function"
        },
        "index": {
          "description": "Specify the page margins for paged media",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "pageMargins",
          "normalized": "PageSelector-\u003eEdge(AutoLen(FactorLen Length)a)-\u003eReaderT(Set MediaType)b()",
          "package": "cascading",
          "partial": "Margins",
          "signature": "PageSelector-\u003eEdge(AutoLen(FactorLen Length)a)-\u003eReaderT(Set MediaType)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:pageMargins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003eposition\u003c/code\u003e mode.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "position",
          "package": "cascading",
          "signature": "PositionMode -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#position",
          "type": "function"
        },
        "index": {
          "description": "Set the position mode",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "position",
          "normalized": "PositionMode-\u003eSetProp",
          "package": "cascading",
          "signature": "PositionMode-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003etable-layout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "tableLayout",
          "package": "cascading",
          "signature": "TableLayout -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#tableLayout",
          "type": "function"
        },
        "index": {
          "description": "Set the table-layout",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "tableLayout",
          "normalized": "TableLayout-\u003eSetProp",
          "package": "cascading",
          "partial": "Layout",
          "signature": "TableLayout-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:tableLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003evertical-align\u003c/code\u003e mode.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "verticalAlign",
          "package": "cascading",
          "signature": "VerticalAlign a -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#verticalAlign",
          "type": "function"
        },
        "index": {
          "description": "Set the vertical-align mode",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "verticalAlign",
          "normalized": "VerticalAlign a-\u003eSetProp",
          "package": "cascading",
          "partial": "Align",
          "signature": "VerticalAlign a-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:verticalAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003evisibility\u003c/code\u003e mode.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "visibility",
          "package": "cascading",
          "signature": "VisibilityMode -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#visibility",
          "type": "function"
        },
        "index": {
          "description": "Set the visibility mode",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "visibility",
          "normalized": "VisibilityMode-\u003eSetProp",
          "package": "cascading",
          "signature": "VisibilityMode-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:visibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003ewidth\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "width",
          "package": "cascading",
          "signature": "AutoLen (FactorLen Length) a -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#width",
          "type": "function"
        },
        "index": {
          "description": "Set the width",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "width",
          "normalized": "AutoLen(FactorLen Length)a-\u003eSetProp",
          "package": "cascading",
          "signature": "AutoLen(FactorLen Length)a-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003ez-index\u003c/code\u003e to the given integer or \u003ccode\u003eauto\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Layout",
          "name": "zIndex",
          "package": "cascading",
          "signature": "Maybe a -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Layout.html#zIndex",
          "type": "function"
        },
        "index": {
          "description": "Set the z-index to the given integer or auto",
          "hierarchy": "Data CSS Properties Layout",
          "module": "Data.CSS.Properties.Layout",
          "name": "zIndex",
          "normalized": "Maybe a-\u003eSetProp",
          "package": "cascading",
          "partial": "Index",
          "signature": "Maybe a-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Layout.html#v:zIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Text",
          "name": "Text",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Text.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "Text",
          "package": "cascading",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the generated \u003ccode\u003econtent\u003c/code\u003e to the given list of parts or \u003ccode\u003enormal\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "content",
          "package": "cascading",
          "signature": "Maybe [ContentPart (CssUrl Text)] -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Text.html#content",
          "type": "function"
        },
        "index": {
          "description": "Set the generated content to the given list of parts or normal",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "content",
          "normalized": "Maybe[ContentPart(CssUrl Text)]-\u003eSetProp",
          "package": "cascading",
          "signature": "Maybe[ContentPart(CssUrl Text)]-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the generated \u003ccode\u003econtent\u003c/code\u003e to the given list of parts or \u003ccode\u003enormal\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "contentUrl",
          "package": "cascading",
          "signature": "Maybe [ContentPart (URL m)] -\u003e SetPropM m",
          "source": "src/Data-CSS-Properties-Text.html#contentUrl",
          "type": "function"
        },
        "index": {
          "description": "Set the generated content to the given list of parts or normal",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "contentUrl",
          "normalized": "Maybe[ContentPart(URL a)]-\u003eSetPropM a",
          "package": "cascading",
          "partial": "Url",
          "signature": "Maybe[ContentPart(URL m)]-\u003eSetPropM m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:contentUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement the given counters by the given value\n (\u003ccode\u003ecounter-increment\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "counterIncrement",
          "package": "cascading",
          "signature": "[(ByteString, a)] -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Text.html#counterIncrement",
          "type": "function"
        },
        "index": {
          "description": "Increment the given counters by the given value counter-increment",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "counterIncrement",
          "normalized": "[(ByteString,a)]-\u003eSetProp",
          "package": "cascading",
          "partial": "Increment",
          "signature": "[(ByteString,a)]-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:counterIncrement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset the given counters to the given value (\u003ccode\u003ecounter-reset\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "counterReset",
          "package": "cascading",
          "signature": "[(ByteString, a)] -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Text.html#counterReset",
          "type": "function"
        },
        "index": {
          "description": "Reset the given counters to the given value counter-reset",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "counterReset",
          "normalized": "[(ByteString,a)]-\u003eSetProp",
          "package": "cascading",
          "partial": "Reset",
          "signature": "[(ByteString,a)]-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:counterReset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the text \u003ccode\u003edirection\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "direction",
          "package": "cascading",
          "signature": "TextDirection -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Text.html#direction",
          "type": "function"
        },
        "index": {
          "description": "Set the text direction",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "direction",
          "normalized": "TextDirection-\u003eSetProp",
          "package": "cascading",
          "signature": "TextDirection-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003eletter-spacing\u003c/code\u003e to the specified value or \u003ccode\u003enormal\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "letterSpacing",
          "package": "cascading",
          "signature": "Maybe (Length a) -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Text.html#letterSpacing",
          "type": "function"
        },
        "index": {
          "description": "Set the letter-spacing to the specified value or normal",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "letterSpacing",
          "normalized": "Maybe(Length a)-\u003eSetProp",
          "package": "cascading",
          "partial": "Spacing",
          "signature": "Maybe(Length a)-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:letterSpacing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet all \u003ccode\u003elist-style\u003c/code\u003e properties.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "listStyle",
          "package": "cascading",
          "signature": "ListStyle -\u003e ListPosition -\u003e Maybe (CssUrl Text) -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Text.html#listStyle",
          "type": "function"
        },
        "index": {
          "description": "Set all list-style properties",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "listStyle",
          "normalized": "ListStyle-\u003eListPosition-\u003eMaybe(CssUrl Text)-\u003eSetProp",
          "package": "cascading",
          "partial": "Style",
          "signature": "ListStyle-\u003eListPosition-\u003eMaybe(CssUrl Text)-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:listStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003elist-style-image\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "listStyleImage",
          "package": "cascading",
          "signature": "Maybe (CssUrl Text) -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Text.html#listStyleImage",
          "type": "function"
        },
        "index": {
          "description": "Set the list-style-image",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "listStyleImage",
          "normalized": "Maybe(CssUrl Text)-\u003eSetProp",
          "package": "cascading",
          "partial": "Style Image",
          "signature": "Maybe(CssUrl Text)-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:listStyleImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003elist-style-image\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "listStyleImageUrl",
          "package": "cascading",
          "signature": "Maybe (URL m) -\u003e SetPropM m",
          "source": "src/Data-CSS-Properties-Text.html#listStyleImageUrl",
          "type": "function"
        },
        "index": {
          "description": "Set the list-style-image",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "listStyleImageUrl",
          "normalized": "Maybe(URL a)-\u003eSetPropM a",
          "package": "cascading",
          "partial": "Style Image Url",
          "signature": "Maybe(URL m)-\u003eSetPropM m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:listStyleImageUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003elist-style-position\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "listStylePosition",
          "package": "cascading",
          "signature": "ListPosition -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Text.html#listStylePosition",
          "type": "function"
        },
        "index": {
          "description": "Set the list-style-position",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "listStylePosition",
          "normalized": "ListPosition-\u003eSetProp",
          "package": "cascading",
          "partial": "Style Position",
          "signature": "ListPosition-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:listStylePosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003elist-style-type\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "listStyleType",
          "package": "cascading",
          "signature": "ListStyle -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Text.html#listStyleType",
          "type": "function"
        },
        "index": {
          "description": "Set the list-style-type",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "listStyleType",
          "normalized": "ListStyle-\u003eSetProp",
          "package": "cascading",
          "partial": "Style Type",
          "signature": "ListStyle-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:listStyleType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet all \u003ccode\u003elist-style\u003c/code\u003e properties.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "listStyleUrl",
          "package": "cascading",
          "signature": "ListStyle -\u003e ListPosition -\u003e Maybe (URL m) -\u003e SetPropM m",
          "source": "src/Data-CSS-Properties-Text.html#listStyleUrl",
          "type": "function"
        },
        "index": {
          "description": "Set all list-style properties",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "listStyleUrl",
          "normalized": "ListStyle-\u003eListPosition-\u003eMaybe(URL a)-\u003eSetPropM a",
          "package": "cascading",
          "partial": "Style Url",
          "signature": "ListStyle-\u003eListPosition-\u003eMaybe(URL m)-\u003eSetPropM m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:listStyleUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003eorphans\u003c/code\u003e threshold (minimum number of lines at the bottom\n of a page).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "orphans",
          "package": "cascading",
          "signature": "a -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Text.html#orphans",
          "type": "function"
        },
        "index": {
          "description": "Set the orphans threshold minimum number of lines at the bottom of page",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "orphans",
          "normalized": "a-\u003eSetProp",
          "package": "cascading",
          "signature": "a-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:orphans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003equotes\u003c/code\u003e pairs (\u003ccode\u003enone\u003c/code\u003e if empty).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "quotes",
          "package": "cascading",
          "signature": "[(CssString Text, CssString Text)] -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Text.html#quotes",
          "type": "function"
        },
        "index": {
          "description": "Set the quotes pairs none if empty",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "quotes",
          "normalized": "[(CssString Text,CssString Text)]-\u003eSetProp",
          "package": "cascading",
          "signature": "[(CssString Text,CssString Text)]-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:quotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet \u003ccode\u003etext-align\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "textAlign",
          "package": "cascading",
          "signature": "TextAlign -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Text.html#textAlign",
          "type": "function"
        },
        "index": {
          "description": "Set text-align",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "textAlign",
          "normalized": "TextAlign-\u003eSetProp",
          "package": "cascading",
          "partial": "Align",
          "signature": "TextAlign-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:textAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003etext-indent\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "textIndent",
          "package": "cascading",
          "signature": "FactorLen Length a -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Text.html#textIndent",
          "type": "function"
        },
        "index": {
          "description": "Set the text-indent",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "textIndent",
          "normalized": "FactorLen Length a-\u003eSetProp",
          "package": "cascading",
          "partial": "Indent",
          "signature": "FactorLen Length a-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:textIndent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003etext-transform\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "textTransform",
          "package": "cascading",
          "signature": "Maybe TextTransform -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Text.html#textTransform",
          "type": "function"
        },
        "index": {
          "description": "Set the text-transform",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "textTransform",
          "normalized": "Maybe TextTransform-\u003eSetProp",
          "package": "cascading",
          "partial": "Transform",
          "signature": "Maybe TextTransform-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:textTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003eunicode-bidi\u003c/code\u003e mode.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "unicodeBidi",
          "package": "cascading",
          "signature": "UnicodeBidiMode -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Text.html#unicodeBidi",
          "type": "function"
        },
        "index": {
          "description": "Set the unicode-bidi mode",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "unicodeBidi",
          "normalized": "UnicodeBidiMode-\u003eSetProp",
          "package": "cascading",
          "partial": "Bidi",
          "signature": "UnicodeBidiMode-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:unicodeBidi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the white space collapse and text wrapping modes\n (\u003ccode\u003ewhite-space\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "whiteSpace",
          "package": "cascading",
          "signature": "TextWrapMode -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Text.html#whiteSpace",
          "type": "function"
        },
        "index": {
          "description": "Set the white space collapse and text wrapping modes white-space",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "whiteSpace",
          "normalized": "TextWrapMode-\u003eSetProp",
          "package": "cascading",
          "partial": "Space",
          "signature": "TextWrapMode-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:whiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003ewidows\u003c/code\u003e threshold (minimum number of lines at the top of a\n page).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "widows",
          "package": "cascading",
          "signature": "a -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Text.html#widows",
          "type": "function"
        },
        "index": {
          "description": "Set the widows threshold minimum number of lines at the top of page",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "widows",
          "normalized": "a-\u003eSetProp",
          "package": "cascading",
          "signature": "a-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:widows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003eword-spacing\u003c/code\u003e to the specified value or \u003ccode\u003enormal\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Text",
          "name": "wordSpacing",
          "package": "cascading",
          "signature": "Maybe (Length a) -\u003e SetProp",
          "source": "src/Data-CSS-Properties-Text.html#wordSpacing",
          "type": "function"
        },
        "index": {
          "description": "Set the word-spacing to the specified value or normal",
          "hierarchy": "Data CSS Properties Text",
          "module": "Data.CSS.Properties.Text",
          "name": "wordSpacing",
          "normalized": "Maybe(Length a)-\u003eSetProp",
          "package": "cascading",
          "partial": "Spacing",
          "signature": "Maybe(Length a)-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Text.html#v:wordSpacing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "Types",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "Types",
          "package": "cascading",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePage break context: any.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "AnyBreak",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#AnyBreak",
          "type": "data"
        },
        "index": {
          "description": "Page break context any",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "AnyBreak",
          "package": "cascading",
          "partial": "Any Break",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:AnyBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength transformer to add automatic lengths.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "AutoLen",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#AutoLen",
          "type": "data"
        },
        "index": {
          "description": "Length transformer to add automatic lengths",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "AutoLen",
          "package": "cascading",
          "partial": "Auto Len",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:AutoLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBackground attachment.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "BackgroundAttachment",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#BackgroundAttachment",
          "type": "data"
        },
        "index": {
          "description": "Background attachment",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "BackgroundAttachment",
          "package": "cascading",
          "partial": "Background Attachment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:BackgroundAttachment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBackground repeating.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "BackgroundRepeat",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#BackgroundRepeat",
          "type": "data"
        },
        "index": {
          "description": "Background repeating",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "BackgroundRepeat",
          "package": "cascading",
          "partial": "Background Repeat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:BackgroundRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBorder style.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "BorderStyle",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#BorderStyle",
          "type": "data"
        },
        "index": {
          "description": "Border style",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "BorderStyle",
          "package": "cascading",
          "partial": "Border Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:BorderStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBorder widths.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "BorderWidth",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#BorderWidth",
          "type": "data"
        },
        "index": {
          "description": "Border widths",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "BorderWidth",
          "package": "cascading",
          "partial": "Border Width",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:BorderWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable caption sides.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "CaptionSide",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#CaptionSide",
          "type": "data"
        },
        "index": {
          "description": "Table caption sides",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "CaptionSide",
          "package": "cascading",
          "partial": "Caption Side",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:CaptionSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClipping modes.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "ClipMode",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#ClipMode",
          "type": "data"
        },
        "index": {
          "description": "Clipping modes",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "ClipMode",
          "package": "cascading",
          "partial": "Clip Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:ClipMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParts for the \u003ccode\u003econtent\u003c/code\u003e property.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "ContentPart",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#ContentPart",
          "type": "data"
        },
        "index": {
          "description": "Parts for the content property",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "ContentPart",
          "package": "cascading",
          "partial": "Content Part",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:ContentPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCSS strings.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "CssString",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#CssString",
          "type": "newtype"
        },
        "index": {
          "description": "CSS strings",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "CssString",
          "package": "cascading",
          "partial": "Css String",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:CssString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCSS URLs.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "CssUrl",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#CssUrl",
          "type": "newtype"
        },
        "index": {
          "description": "CSS URLs",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "CssUrl",
          "package": "cascading",
          "partial": "Css Url",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:CssUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCursors.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "Cursor",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#Cursor",
          "type": "data"
        },
        "index": {
          "description": "Cursors",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "Cursor",
          "package": "cascading",
          "partial": "Cursor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:Cursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay modes.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "DisplayMode",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#DisplayMode",
          "type": "data"
        },
        "index": {
          "description": "Display modes",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "DisplayMode",
          "package": "cascading",
          "partial": "Display Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:DisplayMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEdge-oriented specifications.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "Edge",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#Edge",
          "type": "data"
        },
        "index": {
          "description": "Edge-oriented specifications",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "Edge",
          "package": "cascading",
          "partial": "Edge",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:Edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength transformer to add percental lengths.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "FactorLen",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#FactorLen",
          "type": "data"
        },
        "index": {
          "description": "Length transformer to add percental lengths",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "FactorLen",
          "package": "cascading",
          "partial": "Factor Len",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:FactorLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloating edge.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "FloatEdge",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#FloatEdge",
          "type": "data"
        },
        "index": {
          "description": "Floating edge",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "FloatEdge",
          "package": "cascading",
          "partial": "Float Edge",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:FloatEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFont families.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "FontFamily",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#FontFamily",
          "type": "data"
        },
        "index": {
          "description": "Font families",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "FontFamily",
          "package": "cascading",
          "partial": "Font Family",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:FontFamily"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFont sizes.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "FontSize",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#FontSize",
          "type": "data"
        },
        "index": {
          "description": "Font sizes",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "FontSize",
          "package": "cascading",
          "partial": "Font Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:FontSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFont styles.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "FontStyle",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#FontStyle",
          "type": "data"
        },
        "index": {
          "description": "Font styles",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "FontStyle",
          "package": "cascading",
          "partial": "Font Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:FontStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFont variants.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "FontVariant",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#FontVariant",
          "type": "data"
        },
        "index": {
          "description": "Font variants",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "FontVariant",
          "package": "cascading",
          "partial": "Font Variant",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:FontVariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFont weight.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "FontWeight",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#FontWeight",
          "type": "data"
        },
        "index": {
          "description": "Font weight",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "FontWeight",
          "package": "cascading",
          "partial": "Font Weight",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:FontWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePage break context: \u003ccode\u003epage-break-inside\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "InsideBreak",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#InsideBreak",
          "type": "data"
        },
        "index": {
          "description": "Page break context page-break-inside",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "InsideBreak",
          "package": "cascading",
          "partial": "Inside Break",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:InsideBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength transformer to add lengths in various CSS units.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "Length",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#Length",
          "type": "data"
        },
        "index": {
          "description": "Length transformer to add lengths in various CSS units",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "Length",
          "package": "cascading",
          "partial": "Length",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList number/bullet position.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "ListPosition",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#ListPosition",
          "type": "data"
        },
        "index": {
          "description": "List number bullet position",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "ListPosition",
          "package": "cascading",
          "partial": "List Position",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:ListPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList number/bullet styles.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "ListStyle",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#ListStyle",
          "type": "data"
        },
        "index": {
          "description": "List number bullet styles",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "ListStyle",
          "package": "cascading",
          "partial": "List Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:ListStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverflow handling mode.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "OverflowMode",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#OverflowMode",
          "type": "data"
        },
        "index": {
          "description": "Overflow handling mode",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "OverflowMode",
          "package": "cascading",
          "partial": "Overflow Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:OverflowMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePage break rules.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "PageBreak",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#PageBreak",
          "type": "data"
        },
        "index": {
          "description": "Page break rules",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "PageBreak",
          "package": "cascading",
          "partial": "Page Break",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:PageBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePage selectors for paged media.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "PageSelector",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#PageSelector",
          "type": "data"
        },
        "index": {
          "description": "Page selectors for paged media",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "PageSelector",
          "package": "cascading",
          "partial": "Page Selector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:PageSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition modes.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "PositionMode",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#PositionMode",
          "type": "data"
        },
        "index": {
          "description": "Position modes",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "PositionMode",
          "package": "cascading",
          "partial": "Position Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:PositionMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable layout.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "TableLayout",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#TableLayout",
          "type": "data"
        },
        "index": {
          "description": "Table layout",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TableLayout",
          "package": "cascading",
          "partial": "Table Layout",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:TableLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText alignment.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "TextAlign",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#TextAlign",
          "type": "data"
        },
        "index": {
          "description": "Text alignment",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TextAlign",
          "package": "cascading",
          "partial": "Text Align",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:TextAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText decoration.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "TextDecoration",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#TextDecoration",
          "type": "data"
        },
        "index": {
          "description": "Text decoration",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TextDecoration",
          "package": "cascading",
          "partial": "Text Decoration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:TextDecoration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText direction.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "TextDirection",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#TextDirection",
          "type": "data"
        },
        "index": {
          "description": "Text direction",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TextDirection",
          "package": "cascading",
          "partial": "Text Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:TextDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText transformation modes.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "TextTransform",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#TextTransform",
          "type": "data"
        },
        "index": {
          "description": "Text transformation modes",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TextTransform",
          "package": "cascading",
          "partial": "Text Transform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:TextTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText wrapping modes.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "TextWrapMode",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#TextWrapMode",
          "type": "data"
        },
        "index": {
          "description": "Text wrapping modes",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TextWrapMode",
          "package": "cascading",
          "partial": "Text Wrap Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:TextWrapMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnicode bidi embedding mode.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "UnicodeBidiMode",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#UnicodeBidiMode",
          "type": "data"
        },
        "index": {
          "description": "Unicode bidi embedding mode",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "UnicodeBidiMode",
          "package": "cascading",
          "partial": "Unicode Bidi Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:UnicodeBidiMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVertical text/box alignment.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "VerticalAlign",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#VerticalAlign",
          "type": "data"
        },
        "index": {
          "description": "Vertical text box alignment",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "VerticalAlign",
          "package": "cascading",
          "partial": "Vertical Align",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:VerticalAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVisibility modes.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "VisibilityMode",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Types.html#VisibilityMode",
          "type": "data"
        },
        "index": {
          "description": "Visibility modes",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "VisibilityMode",
          "package": "cascading",
          "partial": "Visibility Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#t:VisibilityMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eabsolute\u003c/code\u003e positioning.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "AbsolutePos",
          "package": "cascading",
          "signature": "AbsolutePos",
          "source": "src/Data-CSS-Properties-Types.html#PositionMode",
          "type": "function"
        },
        "index": {
          "description": "absolute positioning",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "AbsolutePos",
          "package": "cascading",
          "partial": "Absolute Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:AbsolutePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect all pages (\u003ccode\u003e@page\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "AllPages",
          "package": "cascading",
          "signature": "AllPages",
          "source": "src/Data-CSS-Properties-Types.html#PageSelector",
          "type": "function"
        },
        "index": {
          "description": "Select all pages page",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "AllPages",
          "package": "cascading",
          "partial": "All Pages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:AllPages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "AlwaysBreak",
          "package": "cascading",
          "signature": "PageBreak AnyBreak",
          "source": "src/Data-CSS-Properties-Types.html#PageBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "AlwaysBreak",
          "package": "cascading",
          "partial": "Always Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:AlwaysBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003earmenian\u003c/code\u003e numbering.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "ArmenianList",
          "package": "cascading",
          "signature": "ArmenianList",
          "source": "src/Data-CSS-Properties-Types.html#ListStyle",
          "type": "function"
        },
        "index": {
          "description": "armenian numbering",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "ArmenianList",
          "package": "cascading",
          "partial": "Armenian List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:ArmenianList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eattr(x)\u003c/code\u003e part.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "AttrPart",
          "package": "cascading",
          "signature": "AttrPart ByteString",
          "source": "src/Data-CSS-Properties-Types.html#ContentPart",
          "type": "function"
        },
        "index": {
          "description": "attr part",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "AttrPart",
          "package": "cascading",
          "partial": "Attr Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:AttrPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eauto\u003c/code\u003e layout.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "AutoLayout",
          "package": "cascading",
          "signature": "AutoLayout",
          "source": "src/Data-CSS-Properties-Types.html#TableLayout",
          "type": "function"
        },
        "index": {
          "description": "auto layout",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "AutoLayout",
          "package": "cascading",
          "partial": "Auto Layout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:AutoLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eauto\u003c/code\u003e overflow handling.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "AutoOverflow",
          "package": "cascading",
          "signature": "AutoOverflow",
          "source": "src/Data-CSS-Properties-Types.html#OverflowMode",
          "type": "function"
        },
        "index": {
          "description": "auto overflow handling",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "AutoOverflow",
          "package": "cascading",
          "partial": "Auto Overflow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:AutoOverflow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "AvoidBreak",
          "package": "cascading",
          "signature": "PageBreak InsideBreak",
          "source": "src/Data-CSS-Properties-Types.html#PageBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "AvoidBreak",
          "package": "cascading",
          "partial": "Avoid Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:AvoidBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "BaselineAlign",
          "package": "cascading",
          "signature": "BaselineAlign",
          "source": "src/Data-CSS-Properties-Types.html#VerticalAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "BaselineAlign",
          "package": "cascading",
          "partial": "Baseline Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:BaselineAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eblink\u003c/code\u003e text.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "BlinkText",
          "package": "cascading",
          "signature": "BlinkText",
          "source": "src/Data-CSS-Properties-Types.html#TextDecoration",
          "type": "function"
        },
        "index": {
          "description": "blink text",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "BlinkText",
          "package": "cascading",
          "partial": "Blink Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:BlinkText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eblock\u003c/code\u003e display.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "BlockDisplay",
          "package": "cascading",
          "signature": "BlockDisplay",
          "source": "src/Data-CSS-Properties-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "description": "block display",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "BlockDisplay",
          "package": "cascading",
          "partial": "Block Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:BlockDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelatively \u003ccode\u003ebolder\u003c/code\u003e font weight.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "BolderWeight",
          "package": "cascading",
          "signature": "BolderWeight",
          "source": "src/Data-CSS-Properties-Types.html#FontWeight",
          "type": "function"
        },
        "index": {
          "description": "Relatively bolder font weight",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "BolderWeight",
          "package": "cascading",
          "partial": "Bolder Weight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:BolderWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom border width.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "BorderWidth",
          "package": "cascading",
          "signature": "BorderWidth (Length a)",
          "source": "src/Data-CSS-Properties-Types.html#BorderWidth",
          "type": "function"
        },
        "index": {
          "description": "Custom border width",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "BorderWidth",
          "package": "cascading",
          "partial": "Border Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:BorderWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "BottomAlign",
          "package": "cascading",
          "signature": "BottomAlign",
          "source": "src/Data-CSS-Properties-Types.html#VerticalAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "BottomAlign",
          "package": "cascading",
          "partial": "Bottom Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:BottomAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBottom edge.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "BottomEdge",
          "package": "cascading",
          "signature": "BottomEdge a",
          "source": "src/Data-CSS-Properties-Types.html#Edge",
          "type": "function"
        },
        "index": {
          "description": "Bottom edge",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "BottomEdge",
          "package": "cascading",
          "partial": "Bottom Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:BottomEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable's \u003ccode\u003ebottom\u003c/code\u003e side.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "BottomSide",
          "package": "cascading",
          "signature": "BottomSide",
          "source": "src/Data-CSS-Properties-Types.html#CaptionSide",
          "type": "function"
        },
        "index": {
          "description": "Table bottom side",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "BottomSide",
          "package": "cascading",
          "partial": "Bottom Side",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:BottomSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecapitalize\u003c/code\u003e transform.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "CapitalizeText",
          "package": "cascading",
          "signature": "CapitalizeText",
          "source": "src/Data-CSS-Properties-Types.html#TextTransform",
          "type": "function"
        },
        "index": {
          "description": "capitalize transform",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "CapitalizeText",
          "package": "cascading",
          "partial": "Capitalize Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:CapitalizeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecenter\u003c/code\u003e alignment.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "CenterAlign",
          "package": "cascading",
          "signature": "CenterAlign",
          "source": "src/Data-CSS-Properties-Types.html#TextAlign",
          "type": "function"
        },
        "index": {
          "description": "center alignment",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "CenterAlign",
          "package": "cascading",
          "partial": "Center Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:CenterAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecircle\u003c/code\u003e bullets.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "CircleList",
          "package": "cascading",
          "signature": "CircleList",
          "source": "src/Data-CSS-Properties-Types.html#ListStyle",
          "type": "function"
        },
        "index": {
          "description": "circle bullets",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "CircleList",
          "package": "cascading",
          "partial": "Circle List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:CircleList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRectangular clipping region.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "ClipRect",
          "package": "cascading",
          "signature": "ClipRect (AutoLen Length a) (AutoLen Length a) (AutoLen Length a) (AutoLen Length a)",
          "source": "src/Data-CSS-Properties-Types.html#ClipMode",
          "type": "function"
        },
        "index": {
          "description": "Rectangular clipping region",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "ClipRect",
          "package": "cascading",
          "partial": "Clip Rect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:ClipRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eclose-quote\u003c/code\u003e part.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "CloseQuotePart",
          "package": "cascading",
          "signature": "CloseQuotePart",
          "source": "src/Data-CSS-Properties-Types.html#ContentPart",
          "type": "function"
        },
        "index": {
          "description": "close-quote part",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "CloseQuotePart",
          "package": "cascading",
          "partial": "Close Quote Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:CloseQuotePart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecollapse\u003c/code\u003e visibility.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "CollapseVisibility",
          "package": "cascading",
          "signature": "CollapseVisibility",
          "source": "src/Data-CSS-Properties-Types.html#VisibilityMode",
          "type": "function"
        },
        "index": {
          "description": "collapse visibility",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "CollapseVisibility",
          "package": "cascading",
          "partial": "Collapse Visibility",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:CollapseVisibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecounter(x, y)\u003c/code\u003e part.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "CounterPart",
          "package": "cascading",
          "signature": "CounterPart ByteString (Maybe ListStyle)",
          "source": "src/Data-CSS-Properties-Types.html#ContentPart",
          "type": "function"
        },
        "index": {
          "description": "counter part",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "CounterPart",
          "package": "cascading",
          "partial": "Counter Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:CounterPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecounters(x, y)\u003c/code\u003e part.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "CountersPart",
          "package": "cascading",
          "signature": "CountersPart ByteString Text (Maybe ListStyle)",
          "source": "src/Data-CSS-Properties-Types.html#ContentPart",
          "type": "function"
        },
        "index": {
          "description": "counters part",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "CountersPart",
          "package": "cascading",
          "partial": "Counters Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:CountersPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecrosshair\u003c/code\u003e cursor.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "CrosshairCursor",
          "package": "cascading",
          "signature": "CrosshairCursor",
          "source": "src/Data-CSS-Properties-Types.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "crosshair cursor",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "CrosshairCursor",
          "package": "cascading",
          "partial": "Crosshair Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:CrosshairCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "CssString",
          "package": "cascading",
          "signature": "CssString",
          "source": "src/Data-CSS-Properties-Types.html#CssString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "CssString",
          "package": "cascading",
          "partial": "Css String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:CssString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "CssUrl",
          "package": "cascading",
          "signature": "CssUrl",
          "source": "src/Data-CSS-Properties-Types.html#CssUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "CssUrl",
          "package": "cascading",
          "partial": "Css Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:CssUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric \u003ccode\u003ecursive\u003c/code\u003e font.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "CursiveFont",
          "package": "cascading",
          "signature": "CursiveFont",
          "source": "src/Data-CSS-Properties-Types.html#FontFamily",
          "type": "function"
        },
        "index": {
          "description": "Generic cursive font",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "CursiveFont",
          "package": "cascading",
          "partial": "Cursive Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:CursiveFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCursor from one of the given URLs.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "CursorFrom",
          "package": "cascading",
          "signature": "CursorFrom [url]",
          "source": "src/Data-CSS-Properties-Types.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "Cursor from one of the given URLs",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "CursorFrom",
          "normalized": "CursorFrom[a]",
          "package": "cascading",
          "partial": "Cursor From",
          "signature": "CursorFrom[url]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:CursorFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "DashedBorder",
          "package": "cascading",
          "signature": "DashedBorder",
          "source": "src/Data-CSS-Properties-Types.html#BorderStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "DashedBorder",
          "package": "cascading",
          "partial": "Dashed Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:DashedBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edecimal-leading-zero\u003c/code\u003e numbering.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "DecimalLeadingZeroList",
          "package": "cascading",
          "signature": "DecimalLeadingZeroList",
          "source": "src/Data-CSS-Properties-Types.html#ListStyle",
          "type": "function"
        },
        "index": {
          "description": "decimal-leading-zero numbering",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "DecimalLeadingZeroList",
          "package": "cascading",
          "partial": "Decimal Leading Zero List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:DecimalLeadingZeroList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edecimal\u003c/code\u003e numbering.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "DecimalList",
          "package": "cascading",
          "signature": "DecimalList",
          "source": "src/Data-CSS-Properties-Types.html#ListStyle",
          "type": "function"
        },
        "index": {
          "description": "decimal numbering",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "DecimalList",
          "package": "cascading",
          "partial": "Decimal List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:DecimalList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edefault\u003c/code\u003e cursor.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "DefaultCursor",
          "package": "cascading",
          "signature": "DefaultCursor",
          "source": "src/Data-CSS-Properties-Types.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "default cursor",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "DefaultCursor",
          "package": "cascading",
          "partial": "Default Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:DefaultCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edisc\u003c/code\u003e bullets.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "DiscList",
          "package": "cascading",
          "signature": "DiscList",
          "source": "src/Data-CSS-Properties-Types.html#ListStyle",
          "type": "function"
        },
        "index": {
          "description": "disc bullets",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "DiscList",
          "package": "cascading",
          "partial": "Disc List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:DiscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "DottedBorder",
          "package": "cascading",
          "signature": "DottedBorder",
          "source": "src/Data-CSS-Properties-Types.html#BorderStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "DottedBorder",
          "package": "cascading",
          "partial": "Dotted Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:DottedBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "DoubleBorder",
          "package": "cascading",
          "signature": "DoubleBorder",
          "source": "src/Data-CSS-Properties-Types.html#BorderStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "DoubleBorder",
          "package": "cascading",
          "partial": "Double Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:DoubleBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ee-resize\u003c/code\u003e cursor.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "EResizeCursor",
          "package": "cascading",
          "signature": "EResizeCursor",
          "source": "src/Data-CSS-Properties-Types.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "e-resize cursor",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "EResizeCursor",
          "package": "cascading",
          "partial": "EResize Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:EResizeCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll edges.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "Edges",
          "package": "cascading",
          "signature": "Edges [a]",
          "source": "src/Data-CSS-Properties-Types.html#Edge",
          "type": "function"
        },
        "index": {
          "description": "All edges",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "Edges",
          "normalized": "Edges[a]",
          "package": "cascading",
          "partial": "Edges",
          "signature": "Edges[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:Edges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eembed\u003c/code\u003e mode.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "EmbedBidi",
          "package": "cascading",
          "signature": "EmbedBidi",
          "source": "src/Data-CSS-Properties-Types.html#UnicodeBidiMode",
          "type": "function"
        },
        "index": {
          "description": "embed mode",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "EmbedBidi",
          "package": "cascading",
          "partial": "Embed Bidi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:EmbedBidi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric \u003ccode\u003efantasy\u003c/code\u003e font.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "FantasyFont",
          "package": "cascading",
          "signature": "FantasyFont",
          "source": "src/Data-CSS-Properties-Types.html#FontFamily",
          "type": "function"
        },
        "index": {
          "description": "Generic fantasy font",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "FantasyFont",
          "package": "cascading",
          "partial": "Fantasy Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:FantasyFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect first page (\u003ccode\u003e@page :first\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "FirstPage",
          "package": "cascading",
          "signature": "FirstPage",
          "source": "src/Data-CSS-Properties-Types.html#PageSelector",
          "type": "function"
        },
        "index": {
          "description": "Select first page page first",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "FirstPage",
          "package": "cascading",
          "partial": "First Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:FirstPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efixed\u003c/code\u003e background.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "FixedBgr",
          "package": "cascading",
          "signature": "FixedBgr",
          "source": "src/Data-CSS-Properties-Types.html#BackgroundAttachment",
          "type": "function"
        },
        "index": {
          "description": "fixed background",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "FixedBgr",
          "package": "cascading",
          "partial": "Fixed Bgr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:FixedBgr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efixed\u003c/code\u003e layout.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "FixedLayout",
          "package": "cascading",
          "signature": "FixedLayout",
          "source": "src/Data-CSS-Properties-Types.html#TableLayout",
          "type": "function"
        },
        "index": {
          "description": "fixed layout",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "FixedLayout",
          "package": "cascading",
          "partial": "Fixed Layout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:FixedLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efixed\u003c/code\u003e positioning.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "FixedPos",
          "package": "cascading",
          "signature": "FixedPos",
          "source": "src/Data-CSS-Properties-Types.html#PositionMode",
          "type": "function"
        },
        "index": {
          "description": "fixed positioning",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "FixedPos",
          "package": "cascading",
          "partial": "Fixed Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:FixedPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecific font weight (1-9), 4 = \u003ccode\u003enormal\u003c/code\u003e, 7 = \u003ccode\u003ebold\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "FontWeight",
          "package": "cascading",
          "signature": "FontWeight Int",
          "source": "src/Data-CSS-Properties-Types.html#FontWeight",
          "type": "function"
        },
        "index": {
          "description": "Specific font weight normal bold",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "FontWeight",
          "package": "cascading",
          "partial": "Font Weight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:FontWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egeorgian\u003c/code\u003e numbering.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "GeorgianList",
          "package": "cascading",
          "signature": "GeorgianList",
          "source": "src/Data-CSS-Properties-Types.html#ListStyle",
          "type": "function"
        },
        "index": {
          "description": "georgian numbering",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "GeorgianList",
          "package": "cascading",
          "partial": "Georgian List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:GeorgianList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "GrooveBorder",
          "package": "cascading",
          "signature": "GrooveBorder",
          "source": "src/Data-CSS-Properties-Types.html#BorderStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "GrooveBorder",
          "package": "cascading",
          "partial": "Groove Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:GrooveBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ehelp\u003c/code\u003e cursor.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "HelpCursor",
          "package": "cascading",
          "signature": "HelpCursor",
          "source": "src/Data-CSS-Properties-Types.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "help cursor",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "HelpCursor",
          "package": "cascading",
          "partial": "Help Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:HelpCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "HiddenBorder",
          "package": "cascading",
          "signature": "HiddenBorder",
          "source": "src/Data-CSS-Properties-Types.html#BorderStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "HiddenBorder",
          "package": "cascading",
          "partial": "Hidden Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:HiddenBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ehidden\u003c/code\u003e overflow handling.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "HiddenOverflow",
          "package": "cascading",
          "signature": "HiddenOverflow",
          "source": "src/Data-CSS-Properties-Types.html#OverflowMode",
          "type": "function"
        },
        "index": {
          "description": "hidden overflow handling",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "HiddenOverflow",
          "package": "cascading",
          "partial": "Hidden Overflow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:HiddenOverflow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ehidden\u003c/code\u003e visibility.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "HiddenVisibility",
          "package": "cascading",
          "signature": "HiddenVisibility",
          "source": "src/Data-CSS-Properties-Types.html#VisibilityMode",
          "type": "function"
        },
        "index": {
          "description": "hidden visibility",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "HiddenVisibility",
          "package": "cascading",
          "partial": "Hidden Visibility",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:HiddenVisibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einline-block\u003c/code\u003e display.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "InlineBlockDisplay",
          "package": "cascading",
          "signature": "InlineBlockDisplay",
          "source": "src/Data-CSS-Properties-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "description": "inline-block display",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "InlineBlockDisplay",
          "package": "cascading",
          "partial": "Inline Block Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:InlineBlockDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einline\u003c/code\u003e display.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "InlineDisplay",
          "package": "cascading",
          "signature": "InlineDisplay",
          "source": "src/Data-CSS-Properties-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "description": "inline display",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "InlineDisplay",
          "package": "cascading",
          "partial": "Inline Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:InlineDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einline-table\u003c/code\u003e display.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "InlineTableDisplay",
          "package": "cascading",
          "signature": "InlineTableDisplay",
          "source": "src/Data-CSS-Properties-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "description": "inline-table display",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "InlineTableDisplay",
          "package": "cascading",
          "partial": "Inline Table Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:InlineTableDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "InsetBorder",
          "package": "cascading",
          "signature": "InsetBorder",
          "source": "src/Data-CSS-Properties-Types.html#BorderStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "InsetBorder",
          "package": "cascading",
          "partial": "Inset Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:InsetBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einside\u003c/code\u003e the box.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "InsideList",
          "package": "cascading",
          "signature": "InsideList",
          "source": "src/Data-CSS-Properties-Types.html#ListPosition",
          "type": "function"
        },
        "index": {
          "description": "inside the box",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "InsideList",
          "package": "cascading",
          "partial": "Inside List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:InsideList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect \u003ccode\u003eitalic\u003c/code\u003e style.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "ItalicStyle",
          "package": "cascading",
          "signature": "ItalicStyle",
          "source": "src/Data-CSS-Properties-Types.html#FontStyle",
          "type": "function"
        },
        "index": {
          "description": "Select italic style",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "ItalicStyle",
          "package": "cascading",
          "partial": "Italic Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:ItalicStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ejustify\u003c/code\u003e alignment.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "JustifyAlign",
          "package": "cascading",
          "signature": "JustifyAlign",
          "source": "src/Data-CSS-Properties-Types.html#TextAlign",
          "type": "function"
        },
        "index": {
          "description": "justify alignment",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "JustifyAlign",
          "package": "cascading",
          "partial": "Justify Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:JustifyAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolutely \u003ccode\u003elarge\u003c/code\u003e size.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "LargeSize",
          "package": "cascading",
          "signature": "LargeSize",
          "source": "src/Data-CSS-Properties-Types.html#FontSize",
          "type": "function"
        },
        "index": {
          "description": "Absolutely large size",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "LargeSize",
          "package": "cascading",
          "partial": "Large Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:LargeSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelatively \u003ccode\u003elarger\u003c/code\u003e size.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "LargerSize",
          "package": "cascading",
          "signature": "LargerSize",
          "source": "src/Data-CSS-Properties-Types.html#FontSize",
          "type": "function"
        },
        "index": {
          "description": "Relatively larger size",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "LargerSize",
          "package": "cascading",
          "partial": "Larger Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:LargerSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eleft\u003c/code\u003e alignment.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "LeftAlign",
          "package": "cascading",
          "signature": "LeftAlign",
          "source": "src/Data-CSS-Properties-Types.html#TextAlign",
          "type": "function"
        },
        "index": {
          "description": "left alignment",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "LeftAlign",
          "package": "cascading",
          "partial": "Left Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:LeftAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "LeftBreak",
          "package": "cascading",
          "signature": "PageBreak AnyBreak",
          "source": "src/Data-CSS-Properties-Types.html#PageBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "LeftBreak",
          "package": "cascading",
          "partial": "Left Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:LeftBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft edge.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "LeftEdge",
          "package": "cascading",
          "signature": "LeftEdge a",
          "source": "src/Data-CSS-Properties-Types.html#Edge",
          "type": "function"
        },
        "index": {
          "description": "Left edge",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "LeftEdge",
          "package": "cascading",
          "partial": "Left Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:LeftEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "LeftFloat",
          "package": "cascading",
          "signature": "LeftFloat",
          "source": "src/Data-CSS-Properties-Types.html#FloatEdge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "LeftFloat",
          "package": "cascading",
          "partial": "Left Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:LeftFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect all left pages (\u003ccode\u003e@page :left\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "LeftPages",
          "package": "cascading",
          "signature": "LeftPages",
          "source": "src/Data-CSS-Properties-Types.html#PageSelector",
          "type": "function"
        },
        "index": {
          "description": "Select all left pages page left",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "LeftPages",
          "package": "cascading",
          "partial": "Left Pages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:LeftPages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "LeftToRight",
          "package": "cascading",
          "signature": "LeftToRight",
          "source": "src/Data-CSS-Properties-Types.html#TextDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "LeftToRight",
          "package": "cascading",
          "partial": "Left To Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:LeftToRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "LengthAlign",
          "package": "cascading",
          "signature": "LengthAlign (FactorLen Length a)",
          "source": "src/Data-CSS-Properties-Types.html#VerticalAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "LengthAlign",
          "package": "cascading",
          "partial": "Length Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:LengthAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecific font size.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "LengthSize",
          "package": "cascading",
          "signature": "LengthSize (FactorLen Length a)",
          "source": "src/Data-CSS-Properties-Types.html#FontSize",
          "type": "function"
        },
        "index": {
          "description": "Specific font size",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "LengthSize",
          "package": "cascading",
          "partial": "Length Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:LengthSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelatively \u003ccode\u003elighter\u003c/code\u003e font weight.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "LighterWeight",
          "package": "cascading",
          "signature": "LighterWeight",
          "source": "src/Data-CSS-Properties-Types.html#FontWeight",
          "type": "function"
        },
        "index": {
          "description": "Relatively lighter font weight",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "LighterWeight",
          "package": "cascading",
          "partial": "Lighter Weight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:LighterWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eline-through\u003c/code\u003e text.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "LineThroughText",
          "package": "cascading",
          "signature": "LineThroughText",
          "source": "src/Data-CSS-Properties-Types.html#TextDecoration",
          "type": "function"
        },
        "index": {
          "description": "line-through text",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "LineThroughText",
          "package": "cascading",
          "partial": "Line Through Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:LineThroughText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elist-item\u003c/code\u003e display\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "ListItemDisplay",
          "package": "cascading",
          "signature": "ListItemDisplay",
          "source": "src/Data-CSS-Properties-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "description": "list-item display",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "ListItemDisplay",
          "package": "cascading",
          "partial": "List Item Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:ListItemDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elower-alpha\u003c/code\u003e numbering.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "LowerAlphaList",
          "package": "cascading",
          "signature": "LowerAlphaList",
          "source": "src/Data-CSS-Properties-Types.html#ListStyle",
          "type": "function"
        },
        "index": {
          "description": "lower-alpha numbering",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "LowerAlphaList",
          "package": "cascading",
          "partial": "Lower Alpha List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:LowerAlphaList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elower-greek\u003c/code\u003e numbering.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "LowerGreekList",
          "package": "cascading",
          "signature": "LowerGreekList",
          "source": "src/Data-CSS-Properties-Types.html#ListStyle",
          "type": "function"
        },
        "index": {
          "description": "lower-greek numbering",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "LowerGreekList",
          "package": "cascading",
          "partial": "Lower Greek List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:LowerGreekList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elower-latin\u003c/code\u003e numbering.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "LowerLatinList",
          "package": "cascading",
          "signature": "LowerLatinList",
          "source": "src/Data-CSS-Properties-Types.html#ListStyle",
          "type": "function"
        },
        "index": {
          "description": "lower-latin numbering",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "LowerLatinList",
          "package": "cascading",
          "partial": "Lower Latin List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:LowerLatinList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elower-roman\u003c/code\u003e numbering.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "LowerRomanList",
          "package": "cascading",
          "signature": "LowerRomanList",
          "source": "src/Data-CSS-Properties-Types.html#ListStyle",
          "type": "function"
        },
        "index": {
          "description": "lower-roman numbering",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "LowerRomanList",
          "package": "cascading",
          "partial": "Lower Roman List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:LowerRomanList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elowercase\u003c/code\u003e transform.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "LowercaseText",
          "package": "cascading",
          "signature": "LowercaseText",
          "source": "src/Data-CSS-Properties-Types.html#TextTransform",
          "type": "function"
        },
        "index": {
          "description": "lowercase transform",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "LowercaseText",
          "package": "cascading",
          "partial": "Lowercase Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:LowercaseText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolutely \u003ccode\u003emedium\u003c/code\u003e size.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "MediumSize",
          "package": "cascading",
          "signature": "MediumSize",
          "source": "src/Data-CSS-Properties-Types.html#FontSize",
          "type": "function"
        },
        "index": {
          "description": "Absolutely medium size",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "MediumSize",
          "package": "cascading",
          "partial": "Medium Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:MediumSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMedium border width.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "MediumWidth",
          "package": "cascading",
          "signature": "MediumWidth",
          "source": "src/Data-CSS-Properties-Types.html#BorderWidth",
          "type": "function"
        },
        "index": {
          "description": "Medium border width",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "MediumWidth",
          "package": "cascading",
          "partial": "Medium Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:MediumWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "MiddleAlign",
          "package": "cascading",
          "signature": "MiddleAlign",
          "source": "src/Data-CSS-Properties-Types.html#VerticalAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "MiddleAlign",
          "package": "cascading",
          "partial": "Middle Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:MiddleAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric \u003ccode\u003emonospace\u003c/code\u003e font.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "MonospaceFont",
          "package": "cascading",
          "signature": "MonospaceFont",
          "source": "src/Data-CSS-Properties-Types.html#FontFamily",
          "type": "function"
        },
        "index": {
          "description": "Generic monospace font",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "MonospaceFont",
          "package": "cascading",
          "partial": "Monospace Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:MonospaceFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emove\u003c/code\u003e cursor.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "MoveCursor",
          "package": "cascading",
          "signature": "MoveCursor",
          "source": "src/Data-CSS-Properties-Types.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "move cursor",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "MoveCursor",
          "package": "cascading",
          "partial": "Move Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:MoveCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003en-resize\u003c/code\u003e cursor.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "NResizeCursor",
          "package": "cascading",
          "signature": "NResizeCursor",
          "source": "src/Data-CSS-Properties-Types.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "n-resize cursor",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "NResizeCursor",
          "package": "cascading",
          "partial": "NResize Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:NResizeCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecific named font.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "NamedFont",
          "package": "cascading",
          "signature": "NamedFont (CssString Text)",
          "source": "src/Data-CSS-Properties-Types.html#FontFamily",
          "type": "function"
        },
        "index": {
          "description": "Specific named font",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "NamedFont",
          "package": "cascading",
          "partial": "Named Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:NamedFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ene-resize\u003c/code\u003e cursor.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "NeResizeCursor",
          "package": "cascading",
          "signature": "NeResizeCursor",
          "source": "src/Data-CSS-Properties-Types.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "ne-resize cursor",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "NeResizeCursor",
          "package": "cascading",
          "partial": "Ne Resize Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:NeResizeCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "NoBorder",
          "package": "cascading",
          "signature": "NoBorder",
          "source": "src/Data-CSS-Properties-Types.html#BorderStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "NoBorder",
          "package": "cascading",
          "partial": "No Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:NoBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eno-close-quote\u003c/code\u003e part.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "NoCloseQuotePart",
          "package": "cascading",
          "signature": "NoCloseQuotePart",
          "source": "src/Data-CSS-Properties-Types.html#ContentPart",
          "type": "function"
        },
        "index": {
          "description": "no-close-quote part",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "NoCloseQuotePart",
          "package": "cascading",
          "partial": "No Close Quote Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:NoCloseQuotePart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eno-open-quote\u003c/code\u003e part.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "NoOpenQuotePart",
          "package": "cascading",
          "signature": "NoOpenQuotePart",
          "source": "src/Data-CSS-Properties-Types.html#ContentPart",
          "type": "function"
        },
        "index": {
          "description": "no-open-quote part",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "NoOpenQuotePart",
          "package": "cascading",
          "partial": "No Open Quote Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:NoOpenQuotePart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eno-repeat\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "NoRepeat",
          "package": "cascading",
          "signature": "NoRepeat",
          "source": "src/Data-CSS-Properties-Types.html#BackgroundRepeat",
          "type": "function"
        },
        "index": {
          "description": "no-repeat",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "NoRepeat",
          "package": "cascading",
          "partial": "No Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:NoRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enone\u003c/code\u003e display.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "NoneDisplay",
          "package": "cascading",
          "signature": "NoneDisplay",
          "source": "src/Data-CSS-Properties-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "description": "none display",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "NoneDisplay",
          "package": "cascading",
          "partial": "None Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:NoneDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enormal\u003c/code\u003e mode.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "NormalBidi",
          "package": "cascading",
          "signature": "NormalBidi",
          "source": "src/Data-CSS-Properties-Types.html#UnicodeBidiMode",
          "type": "function"
        },
        "index": {
          "description": "normal mode",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "NormalBidi",
          "package": "cascading",
          "partial": "Normal Bidi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:NormalBidi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect \u003ccode\u003enormal\u003c/code\u003e style.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "NormalStyle",
          "package": "cascading",
          "signature": "NormalStyle",
          "source": "src/Data-CSS-Properties-Types.html#FontStyle",
          "type": "function"
        },
        "index": {
          "description": "Select normal style",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "NormalStyle",
          "package": "cascading",
          "partial": "Normal Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:NormalStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect \u003ccode\u003enormal\u003c/code\u003e font.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "NormalVariant",
          "package": "cascading",
          "signature": "NormalVariant",
          "source": "src/Data-CSS-Properties-Types.html#FontVariant",
          "type": "function"
        },
        "index": {
          "description": "Select normal font",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "NormalVariant",
          "package": "cascading",
          "partial": "Normal Variant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:NormalVariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enormal\u003c/code\u003e wrapping.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "NormalWrapping",
          "package": "cascading",
          "signature": "NormalWrapping",
          "source": "src/Data-CSS-Properties-Types.html#TextWrapMode",
          "type": "function"
        },
        "index": {
          "description": "normal wrapping",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "NormalWrapping",
          "package": "cascading",
          "partial": "Normal Wrapping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:NormalWrapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enowrap\u003c/code\u003e wrapping.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "NowrapWrapping",
          "package": "cascading",
          "signature": "NowrapWrapping",
          "source": "src/Data-CSS-Properties-Types.html#TextWrapMode",
          "type": "function"
        },
        "index": {
          "description": "nowrap wrapping",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "NowrapWrapping",
          "package": "cascading",
          "partial": "Nowrap Wrapping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:NowrapWrapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enw-resize\u003c/code\u003e cursor.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "NwResizeCursor",
          "package": "cascading",
          "signature": "NwResizeCursor",
          "source": "src/Data-CSS-Properties-Types.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "nw-resize cursor",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "NwResizeCursor",
          "package": "cascading",
          "partial": "Nw Resize Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:NwResizeCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect \u003ccode\u003eoblique\u003c/code\u003e style.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "ObliqueStyle",
          "package": "cascading",
          "signature": "ObliqueStyle",
          "source": "src/Data-CSS-Properties-Types.html#FontStyle",
          "type": "function"
        },
        "index": {
          "description": "Select oblique style",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "ObliqueStyle",
          "package": "cascading",
          "partial": "Oblique Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:ObliqueStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eopen-quote\u003c/code\u003e part.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "OpenQuotePart",
          "package": "cascading",
          "signature": "OpenQuotePart",
          "source": "src/Data-CSS-Properties-Types.html#ContentPart",
          "type": "function"
        },
        "index": {
          "description": "open-quote part",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "OpenQuotePart",
          "package": "cascading",
          "partial": "Open Quote Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:OpenQuotePart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "OutsetBorder",
          "package": "cascading",
          "signature": "OutsetBorder",
          "source": "src/Data-CSS-Properties-Types.html#BorderStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "OutsetBorder",
          "package": "cascading",
          "partial": "Outset Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:OutsetBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoutside\u003c/code\u003e of the box.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "OutsideList",
          "package": "cascading",
          "signature": "OutsideList",
          "source": "src/Data-CSS-Properties-Types.html#ListPosition",
          "type": "function"
        },
        "index": {
          "description": "outside of the box",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "OutsideList",
          "package": "cascading",
          "partial": "Outside List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:OutsideList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoverline\u003c/code\u003e text.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "OverlineText",
          "package": "cascading",
          "signature": "OverlineText",
          "source": "src/Data-CSS-Properties-Types.html#TextDecoration",
          "type": "function"
        },
        "index": {
          "description": "overline text",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "OverlineText",
          "package": "cascading",
          "partial": "Overline Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:OverlineText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebidi-override\u003c/code\u003e mode.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "OverrideBidi",
          "package": "cascading",
          "signature": "OverrideBidi",
          "source": "src/Data-CSS-Properties-Types.html#UnicodeBidiMode",
          "type": "function"
        },
        "index": {
          "description": "bidi-override mode",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "OverrideBidi",
          "package": "cascading",
          "partial": "Override Bidi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:OverrideBidi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epointer\u003c/code\u003e cursor.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "PointerCursor",
          "package": "cascading",
          "signature": "PointerCursor",
          "source": "src/Data-CSS-Properties-Types.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "pointer cursor",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "PointerCursor",
          "package": "cascading",
          "partial": "Pointer Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:PointerCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epre-line\u003c/code\u003e wrapping.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "PreLineWrapping",
          "package": "cascading",
          "signature": "PreLineWrapping",
          "source": "src/Data-CSS-Properties-Types.html#TextWrapMode",
          "type": "function"
        },
        "index": {
          "description": "pre-line wrapping",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "PreLineWrapping",
          "package": "cascading",
          "partial": "Pre Line Wrapping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:PreLineWrapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epre-wrap\u003c/code\u003e wrapping.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "PreWrapWrapping",
          "package": "cascading",
          "signature": "PreWrapWrapping",
          "source": "src/Data-CSS-Properties-Types.html#TextWrapMode",
          "type": "function"
        },
        "index": {
          "description": "pre-wrap wrapping",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "PreWrapWrapping",
          "package": "cascading",
          "partial": "Pre Wrap Wrapping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:PreWrapWrapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epre\u003c/code\u003e wrapping.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "PreWrapping",
          "package": "cascading",
          "signature": "PreWrapping",
          "source": "src/Data-CSS-Properties-Types.html#TextWrapMode",
          "type": "function"
        },
        "index": {
          "description": "pre wrapping",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "PreWrapping",
          "package": "cascading",
          "partial": "Pre Wrapping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:PreWrapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eprogress\u003c/code\u003e cursor.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "ProgressCursor",
          "package": "cascading",
          "signature": "ProgressCursor",
          "source": "src/Data-CSS-Properties-Types.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "progress cursor",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "ProgressCursor",
          "package": "cascading",
          "partial": "Progress Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:ProgressCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erelative\u003c/code\u003e positioning.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "RelativePos",
          "package": "cascading",
          "signature": "RelativePos",
          "source": "src/Data-CSS-Properties-Types.html#PositionMode",
          "type": "function"
        },
        "index": {
          "description": "relative positioning",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "RelativePos",
          "package": "cascading",
          "partial": "Relative Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:RelativePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erepeat\u003c/code\u003e both axes.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "Repeat",
          "package": "cascading",
          "signature": "Repeat",
          "source": "src/Data-CSS-Properties-Types.html#BackgroundRepeat",
          "type": "function"
        },
        "index": {
          "description": "repeat both axes",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "Repeat",
          "package": "cascading",
          "partial": "Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:Repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erepeat-x\u003c/code\u003e axis.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "RepeatX",
          "package": "cascading",
          "signature": "RepeatX",
          "source": "src/Data-CSS-Properties-Types.html#BackgroundRepeat",
          "type": "function"
        },
        "index": {
          "description": "repeat-x axis",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "RepeatX",
          "package": "cascading",
          "partial": "Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:RepeatX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erepeat-y\u003c/code\u003e axis.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "RepeatY",
          "package": "cascading",
          "signature": "RepeatY",
          "source": "src/Data-CSS-Properties-Types.html#BackgroundRepeat",
          "type": "function"
        },
        "index": {
          "description": "repeat-y axis",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "RepeatY",
          "package": "cascading",
          "partial": "Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:RepeatY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "RidgeBorder",
          "package": "cascading",
          "signature": "RidgeBorder",
          "source": "src/Data-CSS-Properties-Types.html#BorderStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "RidgeBorder",
          "package": "cascading",
          "partial": "Ridge Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:RidgeBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eright\u003c/code\u003e alignment.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "RightAlign",
          "package": "cascading",
          "signature": "RightAlign",
          "source": "src/Data-CSS-Properties-Types.html#TextAlign",
          "type": "function"
        },
        "index": {
          "description": "right alignment",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "RightAlign",
          "package": "cascading",
          "partial": "Right Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:RightAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "RightBreak",
          "package": "cascading",
          "signature": "PageBreak AnyBreak",
          "source": "src/Data-CSS-Properties-Types.html#PageBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "RightBreak",
          "package": "cascading",
          "partial": "Right Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:RightBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight edge.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "RightEdge",
          "package": "cascading",
          "signature": "RightEdge a",
          "source": "src/Data-CSS-Properties-Types.html#Edge",
          "type": "function"
        },
        "index": {
          "description": "Right edge",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "RightEdge",
          "package": "cascading",
          "partial": "Right Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:RightEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "RightFloat",
          "package": "cascading",
          "signature": "RightFloat",
          "source": "src/Data-CSS-Properties-Types.html#FloatEdge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "RightFloat",
          "package": "cascading",
          "partial": "Right Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:RightFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect all right pages (\u003ccode\u003e@page :right\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "RightPages",
          "package": "cascading",
          "signature": "RightPages",
          "source": "src/Data-CSS-Properties-Types.html#PageSelector",
          "type": "function"
        },
        "index": {
          "description": "Select all right pages page right",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "RightPages",
          "package": "cascading",
          "partial": "Right Pages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:RightPages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "RightToLeft",
          "package": "cascading",
          "signature": "RightToLeft",
          "source": "src/Data-CSS-Properties-Types.html#TextDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "RightToLeft",
          "package": "cascading",
          "partial": "Right To Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:RightToLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003es-resize\u003c/code\u003e cursor.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "SResizeCursor",
          "package": "cascading",
          "signature": "SResizeCursor",
          "source": "src/Data-CSS-Properties-Types.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "s-resize cursor",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "SResizeCursor",
          "package": "cascading",
          "partial": "SResize Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:SResizeCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric \u003ccode\u003esans-serif\u003c/code\u003e font.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "SansSerifFont",
          "package": "cascading",
          "signature": "SansSerifFont",
          "source": "src/Data-CSS-Properties-Types.html#FontFamily",
          "type": "function"
        },
        "index": {
          "description": "Generic sans-serif font",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "SansSerifFont",
          "package": "cascading",
          "partial": "Sans Serif Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:SansSerifFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003escroll\u003c/code\u003e background.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "ScrollBgr",
          "package": "cascading",
          "signature": "ScrollBgr",
          "source": "src/Data-CSS-Properties-Types.html#BackgroundAttachment",
          "type": "function"
        },
        "index": {
          "description": "scroll background",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "ScrollBgr",
          "package": "cascading",
          "partial": "Scroll Bgr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:ScrollBgr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003escroll\u003c/code\u003e overflow handling.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "ScrollOverflow",
          "package": "cascading",
          "signature": "ScrollOverflow",
          "source": "src/Data-CSS-Properties-Types.html#OverflowMode",
          "type": "function"
        },
        "index": {
          "description": "scroll overflow handling",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "ScrollOverflow",
          "package": "cascading",
          "partial": "Scroll Overflow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:ScrollOverflow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ese-resize\u003c/code\u003e cursor.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "SeResizeCursor",
          "package": "cascading",
          "signature": "SeResizeCursor",
          "source": "src/Data-CSS-Properties-Types.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "se-resize cursor",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "SeResizeCursor",
          "package": "cascading",
          "partial": "Se Resize Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:SeResizeCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric \u003ccode\u003eserif\u003c/code\u003e font.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "SerifFont",
          "package": "cascading",
          "signature": "SerifFont",
          "source": "src/Data-CSS-Properties-Types.html#FontFamily",
          "type": "function"
        },
        "index": {
          "description": "Generic serif font",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "SerifFont",
          "package": "cascading",
          "partial": "Serif Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:SerifFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect \u003ccode\u003esmall-caps\u003c/code\u003e font.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "SmallCapsVariant",
          "package": "cascading",
          "signature": "SmallCapsVariant",
          "source": "src/Data-CSS-Properties-Types.html#FontVariant",
          "type": "function"
        },
        "index": {
          "description": "Select small-caps font",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "SmallCapsVariant",
          "package": "cascading",
          "partial": "Small Caps Variant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:SmallCapsVariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolutely \u003ccode\u003esmall\u003c/code\u003e size.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "SmallSize",
          "package": "cascading",
          "signature": "SmallSize",
          "source": "src/Data-CSS-Properties-Types.html#FontSize",
          "type": "function"
        },
        "index": {
          "description": "Absolutely small size",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "SmallSize",
          "package": "cascading",
          "partial": "Small Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:SmallSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelatively \u003ccode\u003esmaller\u003c/code\u003e size.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "SmallerSize",
          "package": "cascading",
          "signature": "SmallerSize",
          "source": "src/Data-CSS-Properties-Types.html#FontSize",
          "type": "function"
        },
        "index": {
          "description": "Relatively smaller size",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "SmallerSize",
          "package": "cascading",
          "partial": "Smaller Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:SmallerSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "SolidBorder",
          "package": "cascading",
          "signature": "SolidBorder",
          "source": "src/Data-CSS-Properties-Types.html#BorderStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "SolidBorder",
          "package": "cascading",
          "partial": "Solid Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:SolidBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esquare\u003c/code\u003e bullets.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "SquareList",
          "package": "cascading",
          "signature": "SquareList",
          "source": "src/Data-CSS-Properties-Types.html#ListStyle",
          "type": "function"
        },
        "index": {
          "description": "square bullets",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "SquareList",
          "package": "cascading",
          "partial": "Square List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:SquareList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003estatic\u003c/code\u003e positioning.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "StaticPos",
          "package": "cascading",
          "signature": "StaticPos",
          "source": "src/Data-CSS-Properties-Types.html#PositionMode",
          "type": "function"
        },
        "index": {
          "description": "static positioning",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "StaticPos",
          "package": "cascading",
          "partial": "Static Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:StaticPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "SubAlign",
          "package": "cascading",
          "signature": "SubAlign",
          "source": "src/Data-CSS-Properties-Types.html#VerticalAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "SubAlign",
          "package": "cascading",
          "partial": "Sub Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:SubAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "SuperAlign",
          "package": "cascading",
          "signature": "SuperAlign",
          "source": "src/Data-CSS-Properties-Types.html#VerticalAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "SuperAlign",
          "package": "cascading",
          "partial": "Super Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:SuperAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esw-resize\u003c/code\u003e cursor.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "SwResizeCursor",
          "package": "cascading",
          "signature": "SwResizeCursor",
          "source": "src/Data-CSS-Properties-Types.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "sw-resize cursor",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "SwResizeCursor",
          "package": "cascading",
          "partial": "Sw Resize Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:SwResizeCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etable-caption\u003c/code\u003e display.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "TableCaptionDisplay",
          "package": "cascading",
          "signature": "TableCaptionDisplay",
          "source": "src/Data-CSS-Properties-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "description": "table-caption display",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TableCaptionDisplay",
          "package": "cascading",
          "partial": "Table Caption Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:TableCaptionDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etable-cell\u003c/code\u003e display.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "TableCellDisplay",
          "package": "cascading",
          "signature": "TableCellDisplay",
          "source": "src/Data-CSS-Properties-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "description": "table-cell display",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TableCellDisplay",
          "package": "cascading",
          "partial": "Table Cell Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:TableCellDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etable-column\u003c/code\u003e display.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "TableColumnDisplay",
          "package": "cascading",
          "signature": "TableColumnDisplay",
          "source": "src/Data-CSS-Properties-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "description": "table-column display",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TableColumnDisplay",
          "package": "cascading",
          "partial": "Table Column Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:TableColumnDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etable-column-group\u003c/code\u003e display.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "TableColumnGroupDisplay",
          "package": "cascading",
          "signature": "TableColumnGroupDisplay",
          "source": "src/Data-CSS-Properties-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "description": "table-column-group display",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TableColumnGroupDisplay",
          "package": "cascading",
          "partial": "Table Column Group Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:TableColumnGroupDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etable\u003c/code\u003e display.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "TableDisplay",
          "package": "cascading",
          "signature": "TableDisplay",
          "source": "src/Data-CSS-Properties-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "description": "table display",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TableDisplay",
          "package": "cascading",
          "partial": "Table Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:TableDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etable-footer-group\u003c/code\u003e display.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "TableFooterGroupDisplay",
          "package": "cascading",
          "signature": "TableFooterGroupDisplay",
          "source": "src/Data-CSS-Properties-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "description": "table-footer-group display",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TableFooterGroupDisplay",
          "package": "cascading",
          "partial": "Table Footer Group Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:TableFooterGroupDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etable-header-group\u003c/code\u003e display.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "TableHeaderGroupDisplay",
          "package": "cascading",
          "signature": "TableHeaderGroupDisplay",
          "source": "src/Data-CSS-Properties-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "description": "table-header-group display",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TableHeaderGroupDisplay",
          "package": "cascading",
          "partial": "Table Header Group Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:TableHeaderGroupDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etable-row\u003c/code\u003e display.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "TableRowDisplay",
          "package": "cascading",
          "signature": "TableRowDisplay",
          "source": "src/Data-CSS-Properties-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "description": "table-row display",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TableRowDisplay",
          "package": "cascading",
          "partial": "Table Row Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:TableRowDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etable-row-group\u003c/code\u003e display.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "TableRowGroupDisplay",
          "package": "cascading",
          "signature": "TableRowGroupDisplay",
          "source": "src/Data-CSS-Properties-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "description": "table-row-group display",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TableRowGroupDisplay",
          "package": "cascading",
          "partial": "Table Row Group Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:TableRowGroupDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "TextBottomAlign",
          "package": "cascading",
          "signature": "TextBottomAlign",
          "source": "src/Data-CSS-Properties-Types.html#VerticalAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TextBottomAlign",
          "package": "cascading",
          "partial": "Text Bottom Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:TextBottomAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etext\u003c/code\u003e cursor.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "TextCursor",
          "package": "cascading",
          "signature": "TextCursor",
          "source": "src/Data-CSS-Properties-Types.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "text cursor",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TextCursor",
          "package": "cascading",
          "partial": "Text Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:TextCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText part.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "TextPart",
          "package": "cascading",
          "signature": "TextPart (CssString Text)",
          "source": "src/Data-CSS-Properties-Types.html#ContentPart",
          "type": "function"
        },
        "index": {
          "description": "Text part",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TextPart",
          "package": "cascading",
          "partial": "Text Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:TextPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "TextTopAlign",
          "package": "cascading",
          "signature": "TextTopAlign",
          "source": "src/Data-CSS-Properties-Types.html#VerticalAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TextTopAlign",
          "package": "cascading",
          "partial": "Text Top Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:TextTopAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThick border width.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "ThickWidth",
          "package": "cascading",
          "signature": "ThickWidth",
          "source": "src/Data-CSS-Properties-Types.html#BorderWidth",
          "type": "function"
        },
        "index": {
          "description": "Thick border width",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "ThickWidth",
          "package": "cascading",
          "partial": "Thick Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:ThickWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThin border width.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "ThinWidth",
          "package": "cascading",
          "signature": "ThinWidth",
          "source": "src/Data-CSS-Properties-Types.html#BorderWidth",
          "type": "function"
        },
        "index": {
          "description": "Thin border width",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "ThinWidth",
          "package": "cascading",
          "partial": "Thin Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:ThinWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "TopAlign",
          "package": "cascading",
          "signature": "TopAlign",
          "source": "src/Data-CSS-Properties-Types.html#VerticalAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TopAlign",
          "package": "cascading",
          "partial": "Top Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:TopAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop edge.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "TopEdge",
          "package": "cascading",
          "signature": "TopEdge a",
          "source": "src/Data-CSS-Properties-Types.html#Edge",
          "type": "function"
        },
        "index": {
          "description": "Top edge",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TopEdge",
          "package": "cascading",
          "partial": "Top Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:TopEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable's \u003ccode\u003etop\u003c/code\u003e side.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "TopSide",
          "package": "cascading",
          "signature": "TopSide",
          "source": "src/Data-CSS-Properties-Types.html#CaptionSide",
          "type": "function"
        },
        "index": {
          "description": "Table top side",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "TopSide",
          "package": "cascading",
          "partial": "Top Side",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:TopSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eunderline\u003c/code\u003e text.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "UnderlineText",
          "package": "cascading",
          "signature": "UnderlineText",
          "source": "src/Data-CSS-Properties-Types.html#TextDecoration",
          "type": "function"
        },
        "index": {
          "description": "underline text",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "UnderlineText",
          "package": "cascading",
          "partial": "Underline Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:UnderlineText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eupper-alpha\u003c/code\u003e numbering.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "UpperAlphaList",
          "package": "cascading",
          "signature": "UpperAlphaList",
          "source": "src/Data-CSS-Properties-Types.html#ListStyle",
          "type": "function"
        },
        "index": {
          "description": "upper-alpha numbering",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "UpperAlphaList",
          "package": "cascading",
          "partial": "Upper Alpha List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:UpperAlphaList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eupper-latin\u003c/code\u003e numbering.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "UpperLatinList",
          "package": "cascading",
          "signature": "UpperLatinList",
          "source": "src/Data-CSS-Properties-Types.html#ListStyle",
          "type": "function"
        },
        "index": {
          "description": "upper-latin numbering",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "UpperLatinList",
          "package": "cascading",
          "partial": "Upper Latin List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:UpperLatinList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eupper-roman\u003c/code\u003e numbering.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "UpperRomanList",
          "package": "cascading",
          "signature": "UpperRomanList",
          "source": "src/Data-CSS-Properties-Types.html#ListStyle",
          "type": "function"
        },
        "index": {
          "description": "upper-roman numbering",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "UpperRomanList",
          "package": "cascading",
          "partial": "Upper Roman List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:UpperRomanList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003euppercase\u003c/code\u003e transform.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "UppercaseText",
          "package": "cascading",
          "signature": "UppercaseText",
          "source": "src/Data-CSS-Properties-Types.html#TextTransform",
          "type": "function"
        },
        "index": {
          "description": "uppercase transform",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "UppercaseText",
          "package": "cascading",
          "partial": "Uppercase Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:UppercaseText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eurl(x)\u003c/code\u003e part.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "UriPart",
          "package": "cascading",
          "signature": "UriPart url",
          "source": "src/Data-CSS-Properties-Types.html#ContentPart",
          "type": "function"
        },
        "index": {
          "description": "url part",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "UriPart",
          "package": "cascading",
          "partial": "Uri Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:UriPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003evisible\u003c/code\u003e overflow handling.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "VisibleOverflow",
          "package": "cascading",
          "signature": "VisibleOverflow",
          "source": "src/Data-CSS-Properties-Types.html#OverflowMode",
          "type": "function"
        },
        "index": {
          "description": "visible overflow handling",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "VisibleOverflow",
          "package": "cascading",
          "partial": "Visible Overflow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:VisibleOverflow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003evisible\u003c/code\u003e visibility.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "VisibleVisibility",
          "package": "cascading",
          "signature": "VisibleVisibility",
          "source": "src/Data-CSS-Properties-Types.html#VisibilityMode",
          "type": "function"
        },
        "index": {
          "description": "visible visibility",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "VisibleVisibility",
          "package": "cascading",
          "partial": "Visible Visibility",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:VisibleVisibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ew-resize\u003c/code\u003e cursor.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "WResizeCursor",
          "package": "cascading",
          "signature": "WResizeCursor",
          "source": "src/Data-CSS-Properties-Types.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "w-resize cursor",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "WResizeCursor",
          "package": "cascading",
          "partial": "WResize Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:WResizeCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewait\u003c/code\u003e cursor.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "WaitCursor",
          "package": "cascading",
          "signature": "WaitCursor",
          "source": "src/Data-CSS-Properties-Types.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "wait cursor",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "WaitCursor",
          "package": "cascading",
          "partial": "Wait Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:WaitCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolutely \u003ccode\u003ex-large\u003c/code\u003e size.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "XLargeSize",
          "package": "cascading",
          "signature": "XLargeSize",
          "source": "src/Data-CSS-Properties-Types.html#FontSize",
          "type": "function"
        },
        "index": {
          "description": "Absolutely x-large size",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "XLargeSize",
          "package": "cascading",
          "partial": "XLarge Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:XLargeSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolutely \u003ccode\u003ex-small\u003c/code\u003e size.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "XSmallSize",
          "package": "cascading",
          "signature": "XSmallSize",
          "source": "src/Data-CSS-Properties-Types.html#FontSize",
          "type": "function"
        },
        "index": {
          "description": "Absolutely x-small size",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "XSmallSize",
          "package": "cascading",
          "partial": "XSmall Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:XSmallSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolutely \u003ccode\u003exx-large\u003c/code\u003e size.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "XXLargeSize",
          "package": "cascading",
          "signature": "XXLargeSize",
          "source": "src/Data-CSS-Properties-Types.html#FontSize",
          "type": "function"
        },
        "index": {
          "description": "Absolutely xx-large size",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "XXLargeSize",
          "package": "cascading",
          "partial": "XXLarge Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:XXLargeSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolutely \u003ccode\u003exx-small\u003c/code\u003e size.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Types",
          "name": "XXSmallSize",
          "package": "cascading",
          "signature": "XXSmallSize",
          "source": "src/Data-CSS-Properties-Types.html#FontSize",
          "type": "function"
        },
        "index": {
          "description": "Absolutely xx-small size",
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "XXSmallSize",
          "package": "cascading",
          "partial": "XXSmall Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:XXSmallSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "getCssString",
          "package": "cascading",
          "signature": "a",
          "source": "src/Data-CSS-Properties-Types.html#CssString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "getCssString",
          "package": "cascading",
          "partial": "Css String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:getCssString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Types",
          "name": "getCssUrl",
          "package": "cascading",
          "signature": "a",
          "source": "src/Data-CSS-Properties-Types.html#CssUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Properties Types",
          "module": "Data.CSS.Properties.Types",
          "name": "getCssUrl",
          "package": "cascading",
          "partial": "Css Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Types.html#v:getCssUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.UI",
          "name": "UI",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-UI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CSS Properties UI",
          "module": "Data.CSS.Properties.UI",
          "name": "UI",
          "package": "cascading",
          "partial": "UI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-UI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003ecursor\u003c/code\u003e to the specified value or \u003ccode\u003eauto\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.UI",
          "name": "cursor",
          "package": "cascading",
          "signature": "Maybe (Cursor (CssUrl Text)) -\u003e SetProp",
          "source": "src/Data-CSS-Properties-UI.html#cursor",
          "type": "function"
        },
        "index": {
          "description": "Set the cursor to the specified value or auto",
          "hierarchy": "Data CSS Properties UI",
          "module": "Data.CSS.Properties.UI",
          "name": "cursor",
          "normalized": "Maybe(Cursor(CssUrl Text))-\u003eSetProp",
          "package": "cascading",
          "signature": "Maybe(Cursor(CssUrl Text))-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-UI.html#v:cursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003ecursor\u003c/code\u003e to the specified value or \u003ccode\u003eauto\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.UI",
          "name": "cursorUrl",
          "package": "cascading",
          "signature": "Maybe (Cursor (URL m)) -\u003e SetPropM m",
          "source": "src/Data-CSS-Properties-UI.html#cursorUrl",
          "type": "function"
        },
        "index": {
          "description": "Set the cursor to the specified value or auto",
          "hierarchy": "Data CSS Properties UI",
          "module": "Data.CSS.Properties.UI",
          "name": "cursorUrl",
          "normalized": "Maybe(Cursor(URL a))-\u003eSetPropM a",
          "package": "cascading",
          "partial": "Url",
          "signature": "Maybe(Cursor(URL m))-\u003eSetPropM m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-UI.html#v:cursorUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003eoutline\u003c/code\u003e properties.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.UI",
          "name": "outline",
          "package": "cascading",
          "signature": "Maybe (f a)-\u003e BorderStyle-\u003e BorderWidth b-\u003e SetProp",
          "type": "function"
        },
        "index": {
          "description": "Set the outline properties",
          "hierarchy": "Data CSS Properties UI",
          "module": "Data.CSS.Properties.UI",
          "name": "outline",
          "normalized": "Maybe(a b)-\u003eBorderStyle-\u003eBorderWidth c-\u003eSetProp",
          "package": "cascading",
          "signature": "Maybe(f a)-\u003eBorderStyle-\u003eBorderWidth b-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-UI.html#v:outline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003eoutline-color\u003c/code\u003e to the given color or \u003ccode\u003einvert\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.UI",
          "name": "outlineColor",
          "package": "cascading",
          "signature": "Maybe (f a) -\u003e SetProp",
          "source": "src/Data-CSS-Properties-UI.html#outlineColor",
          "type": "function"
        },
        "index": {
          "description": "Set the outline-color to the given color or invert",
          "hierarchy": "Data CSS Properties UI",
          "module": "Data.CSS.Properties.UI",
          "name": "outlineColor",
          "normalized": "Maybe(a b)-\u003eSetProp",
          "package": "cascading",
          "partial": "Color",
          "signature": "Maybe(f a)-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-UI.html#v:outlineColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003eoutline-style\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.UI",
          "name": "outlineStyle",
          "package": "cascading",
          "signature": "BorderStyle -\u003e SetProp",
          "source": "src/Data-CSS-Properties-UI.html#outlineStyle",
          "type": "function"
        },
        "index": {
          "description": "Set the outline-style",
          "hierarchy": "Data CSS Properties UI",
          "module": "Data.CSS.Properties.UI",
          "name": "outlineStyle",
          "normalized": "BorderStyle-\u003eSetProp",
          "package": "cascading",
          "partial": "Style",
          "signature": "BorderStyle-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-UI.html#v:outlineStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003ccode\u003eoutline-width\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.UI",
          "name": "outlineWidth",
          "package": "cascading",
          "signature": "BorderWidth a -\u003e SetProp",
          "source": "src/Data-CSS-Properties-UI.html#outlineWidth",
          "type": "function"
        },
        "index": {
          "description": "Set the outline-width",
          "hierarchy": "Data CSS Properties UI",
          "module": "Data.CSS.Properties.UI",
          "name": "outlineWidth",
          "normalized": "BorderWidth a-\u003eSetProp",
          "package": "cascading",
          "partial": "Width",
          "signature": "BorderWidth a-\u003eSetProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-UI.html#v:outlineWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties.Utils",
          "name": "Utils",
          "package": "cascading",
          "source": "src/Data-CSS-Properties-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CSS Properties Utils",
          "module": "Data.CSS.Properties.Utils",
          "name": "Utils",
          "package": "cascading",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience wrapper around \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e for properties.  Renders as the\n given bytestring if \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Utils",
          "name": "maybeBuilder",
          "package": "cascading",
          "signature": "ByteString -\u003e Maybe a -\u003e Builder",
          "source": "src/Data-CSS-Properties-Utils.html#maybeBuilder",
          "type": "function"
        },
        "index": {
          "description": "Convenience wrapper around maybe for properties Renders as the given bytestring if Nothing",
          "hierarchy": "Data CSS Properties Utils",
          "module": "Data.CSS.Properties.Utils",
          "name": "maybeBuilder",
          "normalized": "ByteString-\u003eMaybe a-\u003eBuilder",
          "package": "cascading",
          "partial": "Builder",
          "signature": "ByteString-\u003eMaybe a-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Utils.html#v:maybeBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience wrapper around \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e for properties.  Renders as the\n given bytestring if \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Properties.Utils",
          "name": "maybeProp",
          "package": "cascading",
          "signature": "ByteString -\u003e Maybe a -\u003e PropValue",
          "source": "src/Data-CSS-Properties-Utils.html#maybeProp",
          "type": "function"
        },
        "index": {
          "description": "Convenience wrapper around maybe for properties Renders as the given bytestring if Nothing",
          "hierarchy": "Data CSS Properties Utils",
          "module": "Data.CSS.Properties.Utils",
          "name": "maybeProp",
          "normalized": "ByteString-\u003eMaybe a-\u003ePropValue",
          "package": "cascading",
          "partial": "Prop",
          "signature": "ByteString-\u003eMaybe a-\u003ePropValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties-Utils.html#v:maybeProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Properties",
          "name": "Properties",
          "package": "cascading",
          "source": "src/Data-CSS-Properties.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CSS Properties",
          "module": "Data.CSS.Properties",
          "name": "Properties",
          "package": "cascading",
          "partial": "Properties",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Properties.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Render",
          "name": "Render",
          "package": "cascading",
          "source": "src/Data-CSS-Render.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CSS Render",
          "module": "Data.CSS.Render",
          "name": "Render",
          "package": "cascading",
          "partial": "Render",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Render.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the given raw stylesheet to a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Render",
          "name": "fromCSS",
          "package": "cascading",
          "signature": "CSS -\u003e Builder",
          "source": "src/Data-CSS-Render.html#fromCSS",
          "type": "function"
        },
        "index": {
          "description": "Render the given raw stylesheet to Builder",
          "hierarchy": "Data CSS Render",
          "module": "Data.CSS.Render",
          "name": "fromCSS",
          "normalized": "CSS-\u003eBuilder",
          "package": "cascading",
          "partial": "CSS",
          "signature": "CSS-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Render.html#v:fromCSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the given stylesheet.\n\u003c/p\u003e",
          "module": "Data.CSS.Render",
          "name": "renderCSS",
          "package": "cascading",
          "signature": "Writer CSS a -\u003e Builder",
          "source": "src/Data-CSS-Render.html#renderCSS",
          "type": "function"
        },
        "index": {
          "description": "Render the given stylesheet",
          "hierarchy": "Data CSS Render",
          "module": "Data.CSS.Render",
          "name": "renderCSS",
          "normalized": "Writer CSS a-\u003eBuilder",
          "package": "cascading",
          "partial": "CSS",
          "signature": "Writer CSS a-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Render.html#v:renderCSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the given stylesheet.\n\u003c/p\u003e",
          "module": "Data.CSS.Render",
          "name": "renderCSST",
          "package": "cascading",
          "signature": "WriterT CSS m a -\u003e m Builder",
          "source": "src/Data-CSS-Render.html#renderCSST",
          "type": "function"
        },
        "index": {
          "description": "Render the given stylesheet",
          "hierarchy": "Data CSS Render",
          "module": "Data.CSS.Render",
          "name": "renderCSST",
          "normalized": "WriterT CSS a b-\u003ea Builder",
          "package": "cascading",
          "partial": "CSST",
          "signature": "WriterT CSS m a-\u003em Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Render.html#v:renderCSST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "Types",
          "package": "cascading",
          "source": "src/Data-CSS-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "Types",
          "package": "cascading",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCSS builder configuration.\n\u003c/p\u003e",
          "module": "Data.CSS.Types",
          "name": "BuildCfg",
          "package": "cascading",
          "source": "src/Data-CSS-Types.html#BuildCfg",
          "type": "data"
        },
        "index": {
          "description": "CSS builder configuration",
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "BuildCfg",
          "package": "cascading",
          "partial": "Build Cfg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#t:BuildCfg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCascading style sheets.\n\u003c/p\u003e",
          "module": "Data.CSS.Types",
          "name": "CSS",
          "package": "cascading",
          "source": "src/Data-CSS-Types.html#CSS",
          "type": "data"
        },
        "index": {
          "description": "Cascading style sheets",
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "CSS",
          "package": "cascading",
          "partial": "CSS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#t:CSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMedia types, e.g. \u003ccode\u003eall\u003c/code\u003e or \u003ccode\u003eprint\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Types",
          "name": "MediaType",
          "package": "cascading",
          "source": "src/Data-CSS-Types.html#MediaType",
          "type": "newtype"
        },
        "index": {
          "description": "Media types e.g all or print",
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "MediaType",
          "package": "cascading",
          "partial": "Media Type",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#t:MediaType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty names, e.g. \u003ccode\u003efont-family\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Types",
          "name": "PropName",
          "package": "cascading",
          "source": "src/Data-CSS-Types.html#PropName",
          "type": "newtype"
        },
        "index": {
          "description": "Property names e.g font-family",
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "PropName",
          "package": "cascading",
          "partial": "Prop Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#t:PropName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty values, e.g. \u003ccode\u003esans-serif\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Types",
          "name": "PropValue",
          "package": "cascading",
          "source": "src/Data-CSS-Types.html#PropValue",
          "type": "newtype"
        },
        "index": {
          "description": "Property values e.g sans-serif",
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "PropValue",
          "package": "cascading",
          "partial": "Prop Value",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#t:PropValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle properties.\n\u003c/p\u003e",
          "module": "Data.CSS.Types",
          "name": "Property",
          "package": "cascading",
          "source": "src/Data-CSS-Types.html#Property",
          "type": "data"
        },
        "index": {
          "description": "Style properties",
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "Property",
          "package": "cascading",
          "partial": "Property",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#t:Property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelectors, e.g. \u003ccode\u003e*\u003c/code\u003e or \u003ccode\u003e#content p\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Types",
          "name": "Selector",
          "package": "cascading",
          "source": "src/Data-CSS-Types.html#Selector",
          "type": "newtype"
        },
        "index": {
          "description": "Selectors e.g or content",
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "Selector",
          "package": "cascading",
          "partial": "Selector",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#t:Selector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty setter.\n\u003c/p\u003e",
          "module": "Data.CSS.Types",
          "name": "SetProp",
          "package": "cascading",
          "source": "src/Data-CSS-Types.html#SetProp",
          "type": "type"
        },
        "index": {
          "description": "Property setter",
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "SetProp",
          "package": "cascading",
          "partial": "Set Prop",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#t:SetProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParametric property setter.\n\u003c/p\u003e",
          "module": "Data.CSS.Types",
          "name": "SetPropM",
          "package": "cascading",
          "source": "src/Data-CSS-Types.html#SetPropM",
          "type": "type"
        },
        "index": {
          "description": "Parametric property setter",
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "SetPropM",
          "package": "cascading",
          "partial": "Set Prop",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#t:SetPropM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes that feature a conversion function to \u003ccode\u003e\u003ca\u003ePropValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CSS.Types",
          "name": "ToPropValue",
          "package": "cascading",
          "source": "src/Data-CSS-Types.html#ToPropValue",
          "type": "class"
        },
        "index": {
          "description": "Types that feature conversion function to PropValue",
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "ToPropValue",
          "package": "cascading",
          "partial": "To Prop Value",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#t:ToPropValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "BuildCfg",
          "package": "cascading",
          "signature": "BuildCfg",
          "source": "src/Data-CSS-Types.html#BuildCfg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "BuildCfg",
          "package": "cascading",
          "partial": "Build Cfg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:BuildCfg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "CSS",
          "package": "cascading",
          "signature": "CSS",
          "source": "src/Data-CSS-Types.html#CSS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "CSS",
          "package": "cascading",
          "partial": "CSS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:CSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "MediaType",
          "package": "cascading",
          "signature": "MediaType",
          "source": "src/Data-CSS-Types.html#MediaType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "MediaType",
          "package": "cascading",
          "partial": "Media Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:MediaType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "PropName",
          "package": "cascading",
          "signature": "PropName",
          "source": "src/Data-CSS-Types.html#PropName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "PropName",
          "package": "cascading",
          "partial": "Prop Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:PropName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "PropValue",
          "package": "cascading",
          "signature": "PropValue",
          "source": "src/Data-CSS-Types.html#PropValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "PropValue",
          "package": "cascading",
          "partial": "Prop Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:PropValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "Property",
          "package": "cascading",
          "signature": "Property",
          "source": "src/Data-CSS-Types.html#Property",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "Property",
          "package": "cascading",
          "partial": "Property",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:Property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "Selector",
          "package": "cascading",
          "signature": "Selector",
          "source": "src/Data-CSS-Types.html#Selector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "Selector",
          "package": "cascading",
          "partial": "Selector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:Selector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent media type.\n\u003c/p\u003e",
          "module": "Data.CSS.Types",
          "name": "_bcMedia",
          "package": "cascading",
          "signature": "Set MediaType",
          "source": "src/Data-CSS-Types.html#BuildCfg",
          "type": "function"
        },
        "index": {
          "description": "Current media type",
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "_bcMedia",
          "package": "cascading",
          "partial": "Media",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:_bcMedia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent selector.\n\u003c/p\u003e",
          "module": "Data.CSS.Types",
          "name": "_bcSelector",
          "package": "cascading",
          "signature": "[Selector]",
          "source": "src/Data-CSS-Types.html#BuildCfg",
          "type": "function"
        },
        "index": {
          "description": "Current selector",
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "_bcSelector",
          "normalized": "[Selector]",
          "package": "cascading",
          "partial": "Selector",
          "signature": "[Selector]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:_bcSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal stylesheets (url, media-type).\n\u003c/p\u003e",
          "module": "Data.CSS.Types",
          "name": "_cssImports",
          "package": "cascading",
          "signature": "Map Text (Set MediaType)",
          "source": "src/Data-CSS-Types.html#CSS",
          "type": "function"
        },
        "index": {
          "description": "External stylesheets url media-type",
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "_cssImports",
          "package": "cascading",
          "partial": "Imports",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:_cssImports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperties.\n\u003c/p\u003e",
          "module": "Data.CSS.Types",
          "name": "_cssProps",
          "package": "cascading",
          "signature": "Map (Set MediaType) [Property]",
          "source": "src/Data-CSS-Types.html#CSS",
          "type": "function"
        },
        "index": {
          "description": "Properties",
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "_cssProps",
          "normalized": "Map(Set MediaType)[Property]",
          "package": "cascading",
          "partial": "Props",
          "signature": "Map(Set MediaType)[Property]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:_cssProps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "_mediaTypeStr",
          "package": "cascading",
          "signature": "ByteString",
          "source": "src/Data-CSS-Types.html#MediaType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "_mediaTypeStr",
          "package": "cascading",
          "partial": "Type Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:_mediaTypeStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e!important\u003c/code\u003e property?\n\u003c/p\u003e",
          "module": "Data.CSS.Types",
          "name": "_propImportant",
          "package": "cascading",
          "signature": "Bool",
          "source": "src/Data-CSS-Types.html#Property",
          "type": "function"
        },
        "index": {
          "description": "important property",
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "_propImportant",
          "package": "cascading",
          "partial": "Important",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:_propImportant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty name.\n\u003c/p\u003e",
          "module": "Data.CSS.Types",
          "name": "_propName",
          "package": "cascading",
          "signature": "PropName",
          "source": "src/Data-CSS-Types.html#Property",
          "type": "function"
        },
        "index": {
          "description": "Property name",
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "_propName",
          "package": "cascading",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:_propName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "_propNameStr",
          "package": "cascading",
          "signature": "ByteString",
          "source": "src/Data-CSS-Types.html#PropName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "_propNameStr",
          "package": "cascading",
          "partial": "Name Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:_propNameStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelector for this property.\n\u003c/p\u003e",
          "module": "Data.CSS.Types",
          "name": "_propSelector",
          "package": "cascading",
          "signature": "[Selector]",
          "source": "src/Data-CSS-Types.html#Property",
          "type": "function"
        },
        "index": {
          "description": "Selector for this property",
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "_propSelector",
          "normalized": "[Selector]",
          "package": "cascading",
          "partial": "Selector",
          "signature": "[Selector]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:_propSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty value.\n\u003c/p\u003e",
          "module": "Data.CSS.Types",
          "name": "_propValue",
          "package": "cascading",
          "signature": "PropValue",
          "source": "src/Data-CSS-Types.html#Property",
          "type": "function"
        },
        "index": {
          "description": "Property value",
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "_propValue",
          "package": "cascading",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:_propValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "_propValueStr",
          "package": "cascading",
          "signature": "ByteString",
          "source": "src/Data-CSS-Types.html#PropValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "_propValueStr",
          "package": "cascading",
          "partial": "Value Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:_propValueStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "_selectorStr",
          "package": "cascading",
          "signature": "ByteString",
          "source": "src/Data-CSS-Types.html#Selector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "_selectorStr",
          "package": "cascading",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:_selectorStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "bcMedia",
          "package": "cascading",
          "signature": "Lens' BuildCfg (Set MediaType)",
          "source": "src/Data-CSS-Types.html#bcMedia",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "bcMedia",
          "package": "cascading",
          "partial": "Media",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:bcMedia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "bcSelector",
          "package": "cascading",
          "signature": "Lens' BuildCfg [Selector]",
          "source": "src/Data-CSS-Types.html#bcSelector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "bcSelector",
          "normalized": "Lens' BuildCfg[Selector]",
          "package": "cascading",
          "partial": "Selector",
          "signature": "Lens' BuildCfg[Selector]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:bcSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "cssImports",
          "package": "cascading",
          "signature": "Lens' CSS (Map Text (Set MediaType))",
          "source": "src/Data-CSS-Types.html#cssImports",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "cssImports",
          "package": "cascading",
          "partial": "Imports",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:cssImports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "cssProps",
          "package": "cascading",
          "signature": "Lens' CSS (Map (Set MediaType) [Property])",
          "source": "src/Data-CSS-Types.html#cssProps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "cssProps",
          "normalized": "Lens' CSS(Map(Set MediaType)[Property])",
          "package": "cascading",
          "partial": "Props",
          "signature": "Lens' CSS(Map(Set MediaType)[Property])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:cssProps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "mediaTypeStr",
          "package": "cascading",
          "signature": "Iso' MediaType ByteString",
          "source": "src/Data-CSS-Types.html#mediaTypeStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "mediaTypeStr",
          "package": "cascading",
          "partial": "Type Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:mediaTypeStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "propImportant",
          "package": "cascading",
          "signature": "Lens' Property Bool",
          "source": "src/Data-CSS-Types.html#propImportant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "propImportant",
          "package": "cascading",
          "partial": "Important",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:propImportant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "propName",
          "package": "cascading",
          "signature": "Lens' Property PropName",
          "source": "src/Data-CSS-Types.html#propName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "propName",
          "package": "cascading",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:propName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "propNameStr",
          "package": "cascading",
          "signature": "Iso' PropName ByteString",
          "source": "src/Data-CSS-Types.html#propNameStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "propNameStr",
          "package": "cascading",
          "partial": "Name Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:propNameStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "propSelector",
          "package": "cascading",
          "signature": "Lens' Property [Selector]",
          "source": "src/Data-CSS-Types.html#propSelector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "propSelector",
          "normalized": "Lens' Property[Selector]",
          "package": "cascading",
          "partial": "Selector",
          "signature": "Lens' Property[Selector]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:propSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "propValue",
          "package": "cascading",
          "signature": "Lens' Property PropValue",
          "source": "src/Data-CSS-Types.html#propValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "propValue",
          "package": "cascading",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:propValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "propValueStr",
          "package": "cascading",
          "signature": "Iso' PropValue ByteString",
          "source": "src/Data-CSS-Types.html#propValueStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "propValueStr",
          "package": "cascading",
          "partial": "Value Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:propValueStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "selectorStr",
          "package": "cascading",
          "signature": "Iso' Selector ByteString",
          "source": "src/Data-CSS-Types.html#selectorStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "selectorStr",
          "package": "cascading",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:selectorStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "toPropBuilder",
          "package": "cascading",
          "signature": "a -\u003e Builder",
          "source": "src/Data-CSS-Types.html#toPropBuilder",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "toPropBuilder",
          "normalized": "a-\u003eBuilder",
          "package": "cascading",
          "partial": "Prop Builder",
          "signature": "a-\u003eBuilder",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:toPropBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Types",
          "name": "toPropValue",
          "package": "cascading",
          "signature": "a -\u003e PropValue",
          "source": "src/Data-CSS-Types.html#toPropValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data CSS Types",
          "module": "Data.CSS.Types",
          "name": "toPropValue",
          "normalized": "a-\u003ePropValue",
          "package": "cascading",
          "partial": "Prop Value",
          "signature": "a-\u003ePropValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Types.html#v:toPropValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CSS.Utils",
          "name": "Utils",
          "package": "cascading",
          "source": "src/Data-CSS-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CSS Utils",
          "module": "Data.CSS.Utils",
          "name": "Utils",
          "package": "cascading",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the given list of builders separated by commas.\n\u003c/p\u003e",
          "module": "Data.CSS.Utils",
          "name": "commas",
          "package": "cascading",
          "signature": "[Builder] -\u003e Builder",
          "source": "src/Data-CSS-Utils.html#commas",
          "type": "function"
        },
        "index": {
          "description": "Render the given list of builders separated by commas",
          "hierarchy": "Data CSS Utils",
          "module": "Data.CSS.Utils",
          "name": "commas",
          "normalized": "[Builder]-\u003eBuilder",
          "package": "cascading",
          "signature": "[Builder]-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Utils.html#v:commas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the given list of builders separated by commas.\n\u003c/p\u003e",
          "module": "Data.CSS.Utils",
          "name": "commasBS",
          "package": "cascading",
          "signature": "[ByteString] -\u003e Builder",
          "source": "src/Data-CSS-Utils.html#commasBS",
          "type": "function"
        },
        "index": {
          "description": "Render the given list of builders separated by commas",
          "hierarchy": "Data CSS Utils",
          "module": "Data.CSS.Utils",
          "name": "commasBS",
          "normalized": "[ByteString]-\u003eBuilder",
          "package": "cascading",
          "partial": "BS",
          "signature": "[ByteString]-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Utils.html#v:commasBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders the given CSS string in double-quotes, escaped as\n necessary.\n\u003c/p\u003e",
          "module": "Data.CSS.Utils",
          "name": "cssString",
          "package": "cascading",
          "signature": "Text -\u003e Builder",
          "source": "src/Data-CSS-Utils.html#cssString",
          "type": "function"
        },
        "index": {
          "description": "Renders the given CSS string in double-quotes escaped as necessary",
          "hierarchy": "Data CSS Utils",
          "module": "Data.CSS.Utils",
          "name": "cssString",
          "normalized": "Text-\u003eBuilder",
          "package": "cascading",
          "partial": "String",
          "signature": "Text-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Utils.html#v:cssString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eshowHexInt p n\u003c/code\u003e builds the hexadecimal representation of \u003ccode\u003en\u003c/code\u003e with\n at least \u003ccode\u003ep\u003c/code\u003e digits.  Prepends zeroes to fill.\n\u003c/p\u003e",
          "module": "Data.CSS.Utils",
          "name": "showHexInt",
          "package": "cascading",
          "signature": "Int -\u003e a -\u003e Builder",
          "source": "src/Data-CSS-Utils.html#showHexInt",
          "type": "function"
        },
        "index": {
          "description": "showHexInt builds the hexadecimal representation of with at least digits Prepends zeroes to fill",
          "hierarchy": "Data CSS Utils",
          "module": "Data.CSS.Utils",
          "name": "showHexInt",
          "normalized": "Int-\u003ea-\u003eBuilder",
          "package": "cascading",
          "partial": "Hex Int",
          "signature": "Int-\u003ea-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Utils.html#v:showHexInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLossily convert the given \u003ccode\u003e\u003ca\u003eReal\u003c/a\u003e\u003c/code\u003e number into a decimal\n representation suitable for CSS.\n\u003c/p\u003e",
          "module": "Data.CSS.Utils",
          "name": "showReal",
          "package": "cascading",
          "signature": "a -\u003e Builder",
          "source": "src/Data-CSS-Utils.html#showReal",
          "type": "function"
        },
        "index": {
          "description": "Lossily convert the given Real number into decimal representation suitable for CSS",
          "hierarchy": "Data CSS Utils",
          "module": "Data.CSS.Utils",
          "name": "showReal",
          "normalized": "a-\u003eBuilder",
          "package": "cascading",
          "partial": "Real",
          "signature": "a-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS-Utils.html#v:showReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library implements a domain-specific language for cascading\n style sheets as used in web pages.  It allows you to specify your\n style sheets in regular Haskell syntax and gives you all the\n additional power of server-side document generation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CSS",
          "name": "CSS",
          "package": "cascading",
          "source": "src/Data-CSS.html",
          "type": "module"
        },
        "index": {
          "description": "This library implements domain-specific language for cascading style sheets as used in web pages It allows you to specify your style sheets in regular Haskell syntax and gives you all the additional power of server-side document generation",
          "hierarchy": "Data CSS",
          "module": "Data.CSS",
          "name": "CSS",
          "package": "cascading",
          "partial": "CSS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cascading/docs/Data-CSS.html#"
      }
    }
  ]
]