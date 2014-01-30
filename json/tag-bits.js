[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tag-bits/docs/Data-TagBits.html#",
      "description": {
        "fct-module": "Data.TagBits",
        "fct-package": "tag-bits",
        "fct-signature": "module",
        "fct-source": "src/Data-TagBits.html",
        "fct-type": "module",
        "title": "TagBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Data TagBits",
        "module": "Data.TagBits",
        "name": "TagBits",
        "normalized": "",
        "package": "tag-bits",
        "partial": "Tag Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tag-bits/docs/Data-TagBits.html#v:unsafeGetTagBits",
      "description": {
        "fct-descr": "\u003cp\u003eInspect the dynamic pointer tagging bits of a closure. This is an impure function that relies on GHC internals and may falsely return 0, but should never give the wrong tag number if it returns a non-0 value.\n\u003c/p\u003e",
        "fct-module": "Data.TagBits",
        "fct-package": "tag-bits",
        "fct-signature": "a -\u003e Word",
        "fct-source": "src/Data-TagBits.html#unsafeGetTagBits",
        "fct-type": "function",
        "title": "unsafeGetTagBits"
      },
      "index": {
        "description": "Inspect the dynamic pointer tagging bits of closure This is an impure function that relies on GHC internals and may falsely return but should never give the wrong tag number if it returns non-0 value",
        "hierarchy": "Data TagBits",
        "module": "Data.TagBits",
        "name": "unsafeGetTagBits",
        "normalized": "a-\u003eWord",
        "package": "tag-bits",
        "partial": "Get Tag Bits",
        "signature": "a-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tag-bits/docs/Data-TagBits.html#v:unsafeIsEvaluated",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a guess as to whether or not a value has been evaluated. This is an impure function that relies on GHC internals and will return false negatives, but no false positives. This is unsafe as the value of this function will vary (from False to True) over the course of otherwise pure invocations! This first attempts to check the tag bits of the pointer, and then falls back on inspecting the info table for the closure type.\n\u003c/p\u003e",
        "fct-module": "Data.TagBits",
        "fct-package": "tag-bits",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Data-TagBits.html#unsafeIsEvaluated",
        "fct-type": "function",
        "title": "unsafeIsEvaluated"
      },
      "index": {
        "description": "Returns guess as to whether or not value has been evaluated This is an impure function that relies on GHC internals and will return false negatives but no false positives This is unsafe as the value of this function will vary from False to True over the course of otherwise pure invocations This first attempts to check the tag bits of the pointer and then falls back on inspecting the info table for the closure type",
        "hierarchy": "Data TagBits",
        "module": "Data.TagBits",
        "name": "unsafeIsEvaluated",
        "normalized": "a-\u003eBool",
        "package": "tag-bits",
        "partial": "Is Evaluated",
        "signature": "a-\u003eBool"
      }
    }
  }
]