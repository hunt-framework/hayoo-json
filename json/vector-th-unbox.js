[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-th-unbox/docs/Data-Vector-Unboxed-Deriving.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWriting \u003ccode\u003eUnbox\u003c/code\u003e instances for new data types is tedious and formulaic. More\noften than not, there is a straightforward mapping of the new type onto some\nexisting one already imbued with an \u003ccode\u003eUnbox\u003c/code\u003e instance. The\n\u003ca\u003eexample\u003c/a\u003e\nfrom the \u003ccode\u003evector\u003c/code\u003e package represents \u003ccode\u003eComplex a\u003c/code\u003e as pairs \u003ccode\u003e(a, a)\u003c/code\u003e. Using\n\u003ccode\u003e\u003ca\u003ederivingUnbox\u003c/a\u003e\u003c/code\u003e, we can define the same instances much more succinctly:\n\u003c/p\u003e\u003cpre\u003ederivingUnbox \"Complex\"\n    [t| (Unbox a) &#8658; Complex a &#8594; (a, a) |]    [| \\ (r :+ i) &#8594; (r, i) |]    [| \\ (r, i) &#8594; r :+ i |]\u003c/pre\u003e\u003cp\u003eRequires the \u003ccode\u003eMultiParamTypeClasses\u003c/code\u003e, \u003ccode\u003eTemplateHaskell\u003c/code\u003e, \u003ccode\u003eTypeFamilies\u003c/code\u003e and\nprobably the \u003ccode\u003eFlexibleInstances\u003c/code\u003e \u003ccode\u003eLANGUAGE\u003c/code\u003e extensions. Note that GHC 7.4\n(but not earlier nor later) needs the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMVector\u003c/a\u003e\u003c/code\u003e class\nmethod names to be in scope in order to define the appropriate instances:\n\u003c/p\u003e\u003cpre\u003e#if __GLASGOW_HASKELL == 704\nimport qualified Data.Vector.Generic\nimport qualified Data.Vector.Generic.Mutable\n#endif\n\u003c/pre\u003e\u003cp\u003eConsult the \u003ca\u003esanity test\u003c/a\u003e\nfor a working example.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Vector.Unboxed.Deriving",
        "fct-package": "vector-th-unbox",
        "fct-signature": "module",
        "fct-source": "src/Data-Vector-Unboxed-Deriving.html",
        "fct-type": "module",
        "title": "Deriving"
      },
      "index": {
        "description": "Writing Unbox instances for new data types is tedious and formulaic More often than not there is straightforward mapping of the new type onto some existing one already imbued with an Unbox instance The example from the vector package represents Complex as pairs Using derivingUnbox we can define the same instances much more succinctly derivingUnbox Complex Unbox Complex Requires the MultiParamTypeClasses TemplateHaskell TypeFamilies and probably the FlexibleInstances LANGUAGE extensions Note that GHC but not earlier nor later needs the Vector and MVector class method names to be in scope in order to define the appropriate instances if GLASGOW HASKELL import qualified Data.Vector.Generic import qualified Data.Vector.Generic.Mutable endif Consult the sanity test for working example",
        "hierarchy": "Data Vector Unboxed Deriving",
        "module": "Data.Vector.Unboxed.Deriving",
        "name": "Deriving",
        "normalized": "",
        "package": "vector-th-unbox",
        "partial": "Deriving",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-th-unbox/docs/Data-Vector-Unboxed-Deriving.html#v:derivingUnbox",
      "description": {
        "fct-descr": "\u003cp\u003eLet's consider a more complex example: suppose we want an \u003ccode\u003eUnbox\u003c/code\u003e\ninstance for \u003ccode\u003eMaybe a\u003c/code\u003e. We could encode this using the pair \u003ccode\u003e(Bool, a)\u003c/code\u003e,\nwith the boolean indicating whether we have \u003ccode\u003eNothing\u003c/code\u003e or \u003ccode\u003eJust\u003c/code\u003e something.\nThis encoding requires a dummy value in the \u003ccode\u003eNothing\u003c/code\u003e case, necessitating an\nadditional \u003ca\u003eDefault\u003c/a\u003e\nconstraint. Thus:\n\u003c/p\u003e\u003cpre\u003ederivingUnbox \"Maybe\"\n    [t| (Default a, Unbox a) &#8658; Maybe a &#8594; (Bool, a) |]    [| maybe (False, def) (\\ x &#8594; (True, x)) |]    [| \\ (b, x) &#8594; if b then Just x else Nothing |]\u003c/pre\u003e",
        "fct-module": "Data.Vector.Unboxed.Deriving",
        "fct-package": "vector-th-unbox",
        "fct-signature": "String-\u003e TypeQ-\u003e ExpQ-\u003e ExpQ-\u003e DecsQ",
        "fct-type": "function",
        "title": "derivingUnbox"
      },
      "index": {
        "description": "Let consider more complex example suppose we want an Unbox instance for Maybe We could encode this using the pair Bool with the boolean indicating whether we have Nothing or Just something This encoding requires dummy value in the Nothing case necessitating an additional Default constraint Thus derivingUnbox Maybe Default Unbox Maybe Bool maybe False def True if then Just else Nothing",
        "hierarchy": "Data Vector Unboxed Deriving",
        "module": "Data.Vector.Unboxed.Deriving",
        "name": "derivingUnbox",
        "normalized": "String-\u003eTypeQ-\u003eExpQ-\u003eExpQ-\u003eDecsQ",
        "package": "vector-th-unbox",
        "partial": "Unbox",
        "signature": "String-\u003eTypeQ-\u003eExpQ-\u003eExpQ-\u003eDecsQ"
      }
    }
  }
]