[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate-Interpreter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis interpreter is meant to be a reference implementation of the semantics\n of the embedded array language.  The emphasis is on defining the semantics\n clearly, not on performance.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSurface types versus representation types\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eAs a general rule, we perform all computations on representation types and we store all data\n as values of representation types.  To guarantee the type safety of the interpreter, this\n currently implies a lot of conversions between surface and representation types.  Optimising\n the code by eliminating back and forth conversions is fine, but only where it doesn't\n negatively affects clarity &#8212; after all, the main purpose of the interpreter is to serve as an\n executable specification.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Accelerate.Interpreter",
        "fct-package": "accelerate",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Accelerate-Interpreter.html",
        "fct-type": "module",
        "title": "Interpreter"
      },
      "index": {
        "description": "This interpreter is meant to be reference implementation of the semantics of the embedded array language The emphasis is on defining the semantics clearly not on performance Surface types versus representation types As general rule we perform all computations on representation types and we store all data as values of representation types To guarantee the type safety of the interpreter this currently implies lot of conversions between surface and representation types Optimising the code by eliminating back and forth conversions is fine but only where it doesn negatively affects clarity after all the main purpose of the interpreter is to serve as an executable specification",
        "hierarchy": "Data Array Accelerate Interpreter",
        "module": "Data.Array.Accelerate.Interpreter",
        "name": "Interpreter",
        "normalized": "",
        "package": "accelerate",
        "partial": "Interpreter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate-Interpreter.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eRun a complete embedded array program using the reference interpreter.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.Interpreter",
        "fct-package": "accelerate",
        "fct-signature": "Acc a -\u003e a",
        "fct-source": "src/Data-Array-Accelerate-Interpreter.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Run complete embedded array program using the reference interpreter",
        "hierarchy": "Data Array Accelerate Interpreter",
        "module": "Data.Array.Accelerate.Interpreter",
        "name": "run",
        "normalized": "Acc a-\u003ea",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate-Interpreter.html#v:run1",
      "description": {
        "fct-descr": "\u003cp\u003ePrepare and run an embedded array program of one argument\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.Interpreter",
        "fct-package": "accelerate",
        "fct-signature": "(Acc a -\u003e Acc b) -\u003e a -\u003e b",
        "fct-source": "src/Data-Array-Accelerate-Interpreter.html#run1",
        "fct-type": "function",
        "title": "run1"
      },
      "index": {
        "description": "Prepare and run an embedded array program of one argument",
        "hierarchy": "Data Array Accelerate Interpreter",
        "module": "Data.Array.Accelerate.Interpreter",
        "name": "run1",
        "normalized": "(Acc a-\u003eAcc b)-\u003ea-\u003eb",
        "package": "accelerate",
        "partial": "",
        "signature": "(Acc a-\u003eAcc b)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate-Interpreter.html#v:stream",
      "description": {
        "fct-descr": "\u003cp\u003eStream a lazily read list of input arrays through the given program,\n collecting results as we go\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.Interpreter",
        "fct-package": "accelerate",
        "fct-signature": "(Acc a -\u003e Acc b) -\u003e [a] -\u003e [b]",
        "fct-source": "src/Data-Array-Accelerate-Interpreter.html#stream",
        "fct-type": "function",
        "title": "stream"
      },
      "index": {
        "description": "Stream lazily read list of input arrays through the given program collecting results as we go",
        "hierarchy": "Data Array Accelerate Interpreter",
        "module": "Data.Array.Accelerate.Interpreter",
        "name": "stream",
        "normalized": "(Acc a-\u003eAcc b)-\u003e[a]-\u003e[b]",
        "package": "accelerate",
        "partial": "",
        "signature": "(Acc a-\u003eAcc b)-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines an embedded language of array computations for\n high-performance computing. Computations on multi-dimensional, regular\n arrays are expressed in the form of parameterised collective operations\n (such as maps, reductions, and permutations). These computations are online\n compiled and executed on a range of architectures.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eAbstract interface:\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe types representing array computations are only exported abstractly &#8212;\n i.e., client code can generate array computations and submit them for\n execution, but it cannot inspect these computations. This is to allow for\n more flexibility for future extensions of this library.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eCode execution:\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eAccess to the various backends is via a \u003ccode\u003erun\u003c/code\u003e function in backend-specific\n top level modules. Currently, we have the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Array.Accelerate.Interpreter\u003c/a\u003e: simple interpreter in Haskell as a\n   reference implementation defining the semantics of the Accelerate language\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Array.Accelerate.CUDA\u003c/a\u003e: an implementation supporting parallel\n   execution on CUDA-capable NVIDIA GPUs\n\u003c/li\u003e\u003c/ul\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eExamples and documentation:\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e A (draft) tutorial is available on the GitHub wiki:\n   \u003ca\u003ehttps://github.com/AccelerateHS/accelerate/wiki\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003eaccelerate-examples\u003c/code\u003e package demonstrates a range of computational\n   kernels and several complete applications:\n   \u003ca\u003ehttp://hackage.haskell.org/package/accelerate-examples\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Accelerate.html",
        "fct-type": "module",
        "title": "Accelerate"
      },
      "index": {
        "description": "This module defines an embedded language of array computations for high-performance computing Computations on multi-dimensional regular arrays are expressed in the form of parameterised collective operations such as maps reductions and permutations These computations are online compiled and executed on range of architectures Abstract interface The types representing array computations are only exported abstractly i.e client code can generate array computations and submit them for execution but it cannot inspect these computations This is to allow for more flexibility for future extensions of this library Code execution Access to the various backends is via run function in backend-specific top level modules Currently we have the following Data.Array.Accelerate.Interpreter simple interpreter in Haskell as reference implementation defining the semantics of the Accelerate language Data.Array.Accelerate.CUDA an implementation supporting parallel execution on CUDA-capable NVIDIA GPUs Examples and documentation draft tutorial is available on the GitHub wiki https github.com AccelerateHS accelerate wiki The accelerate-examples package demonstrates range of computational kernels and several complete applications http hackage.haskell.org package accelerate-examples",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Accelerate",
        "normalized": "",
        "package": "accelerate",
        "partial": "Accelerate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t::.",
      "description": {
        "fct-descr": "\u003cp\u003eIncrease an index rank by one dimension.  The \u003ccode\u003e\u003ca\u003e:.\u003c/a\u003e\u003c/code\u003e operator is\n  used to construct both values and types.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#%3A.",
        "fct-type": "data",
        "title": ":."
      },
      "index": {
        "description": "Increase an index rank by one dimension The operator is used to construct both values and types",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": ":.",
        "normalized": "",
        "package": "accelerate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Acc",
      "description": {
        "fct-descr": "\u003cp\u003eArray-valued collective computations\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Accelerate-Smart.html#Acc",
        "fct-type": "data",
        "title": "Acc"
      },
      "index": {
        "description": "Array-valued collective computations",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Acc",
        "normalized": "",
        "package": "accelerate",
        "partial": "Acc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:All",
      "description": {
        "fct-descr": "\u003cp\u003eMarker for entire dimensions in slice descriptors.\n\u003c/p\u003e\u003cp\u003eFor example, when used in slices passed to \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e, the\n occurrences of \u003ccode\u003e\u003ca\u003eAll\u003c/a\u003e\u003c/code\u003e indicate the dimensions into which the array's\n existing extent will be placed, rather than the new dimensions\n introduced by replication.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#All",
        "fct-type": "data",
        "title": "All"
      },
      "index": {
        "description": "Marker for entire dimensions in slice descriptors For example when used in slices passed to replicate the occurrences of All indicate the dimensions into which the array existing extent will be placed rather than the new dimensions introduced by replication",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "All",
        "normalized": "",
        "package": "accelerate",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Any",
      "description": {
        "fct-descr": "\u003cp\u003eMarker for arbitrary shapes in slice descriptors.  Such arbitrary\n  shapes may include an unknown number of dimensions.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eAny\u003c/a\u003e\u003c/code\u003e can be used in the leftmost position of a slice instead of\n  \u003ccode\u003e\u003ca\u003eZ\u003c/a\u003e\u003c/code\u003e, for example \u003ccode\u003e(Any :. _ :. _)\u003c/code\u003e.  In the following definition\n  \u003ccode\u003e\u003ca\u003eAny\u003c/a\u003e\u003c/code\u003e is used to match against whatever shape the type variable\n  \u003ccode\u003esh\u003c/code\u003e takes:\n\u003c/p\u003e\u003cpre\u003e repN :: (Shape sh, Elt e) =\u003e Int -\u003e Acc (Array sh e) -\u003e Acc (Array (sh:.Int) e)\n repN n a = replicate (constant $ Any :. n) a\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#Any",
        "fct-type": "data",
        "title": "Any"
      },
      "index": {
        "description": "Marker for arbitrary shapes in slice descriptors Such arbitrary shapes may include an unknown number of dimensions Any can be used in the leftmost position of slice instead of for example Any In the following definition Any is used to match against whatever shape the type variable sh takes repN Shape sh Elt Int Acc Array sh Acc Array sh Int repN replicate constant Any",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Any",
        "normalized": "",
        "package": "accelerate",
        "partial": "Any",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Array",
      "description": {
        "fct-descr": "\u003cp\u003eMulti-dimensional arrays for array processing.\n\u003c/p\u003e\u003cp\u003eIf device and host memory are separate, arrays will be transferred to the\n device when necessary (if possible asynchronously and in parallel with other\n tasks) and cached on the device if sufficient memory is available.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#Array",
        "fct-type": "data",
        "title": "Array"
      },
      "index": {
        "description": "Multi-dimensional arrays for array processing If device and host memory are separate arrays will be transferred to the device when necessary if possible asynchronously and in parallel with other tasks and cached on the device if sufficient memory is available",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Array",
        "normalized": "",
        "package": "accelerate",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Arrays",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#Arrays",
        "fct-type": "class",
        "title": "Arrays"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Arrays",
        "normalized": "",
        "package": "accelerate",
        "partial": "Arrays",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Bool",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Bool",
        "normalized": "",
        "package": "accelerate",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Boundary",
      "description": {
        "fct-descr": "\u003cp\u003eBoundary condition specification for stencil operations.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Accelerate-Type.html#Boundary",
        "fct-type": "data",
        "title": "Boundary"
      },
      "index": {
        "description": "Boundary condition specification for stencil operations",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Boundary",
        "normalized": "",
        "package": "accelerate",
        "partial": "Boundary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:CChar",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell type representing the C \u003ccode\u003echar\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "CChar"
      },
      "index": {
        "description": "Haskell type representing the char type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "CChar",
        "normalized": "",
        "package": "accelerate",
        "partial": "CChar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:CDouble",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell type representing the C \u003ccode\u003edouble\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "CDouble"
      },
      "index": {
        "description": "Haskell type representing the double type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "CDouble",
        "normalized": "",
        "package": "accelerate",
        "partial": "CDouble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:CFloat",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell type representing the C \u003ccode\u003efloat\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "CFloat"
      },
      "index": {
        "description": "Haskell type representing the float type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "CFloat",
        "normalized": "",
        "package": "accelerate",
        "partial": "CFloat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:CInt",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell type representing the C \u003ccode\u003eint\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "CInt"
      },
      "index": {
        "description": "Haskell type representing the int type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "CInt",
        "normalized": "",
        "package": "accelerate",
        "partial": "CInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:CLLong",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell type representing the C \u003ccode\u003elong long\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "CLLong"
      },
      "index": {
        "description": "Haskell type representing the long long type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "CLLong",
        "normalized": "",
        "package": "accelerate",
        "partial": "CLLong",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:CLong",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell type representing the C \u003ccode\u003elong\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "CLong"
      },
      "index": {
        "description": "Haskell type representing the long type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "CLong",
        "normalized": "",
        "package": "accelerate",
        "partial": "CLong",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:CSChar",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell type representing the C \u003ccode\u003esigned char\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "CSChar"
      },
      "index": {
        "description": "Haskell type representing the signed char type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "CSChar",
        "normalized": "",
        "package": "accelerate",
        "partial": "CSChar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:CShort",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell type representing the C \u003ccode\u003eshort\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "CShort"
      },
      "index": {
        "description": "Haskell type representing the short type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "CShort",
        "normalized": "",
        "package": "accelerate",
        "partial": "CShort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:CUChar",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell type representing the C \u003ccode\u003eunsigned char\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "CUChar"
      },
      "index": {
        "description": "Haskell type representing the unsigned char type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "CUChar",
        "normalized": "",
        "package": "accelerate",
        "partial": "CUChar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:CUInt",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell type representing the C \u003ccode\u003eunsigned int\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "CUInt"
      },
      "index": {
        "description": "Haskell type representing the unsigned int type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "CUInt",
        "normalized": "",
        "package": "accelerate",
        "partial": "CUInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:CULLong",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell type representing the C \u003ccode\u003eunsigned long long\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "CULLong"
      },
      "index": {
        "description": "Haskell type representing the unsigned long long type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "CULLong",
        "normalized": "",
        "package": "accelerate",
        "partial": "CULLong",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:CULong",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell type representing the C \u003ccode\u003eunsigned long\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "CULong"
      },
      "index": {
        "description": "Haskell type representing the unsigned long type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "CULong",
        "normalized": "",
        "package": "accelerate",
        "partial": "CULong",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:CUShort",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell type representing the C \u003ccode\u003eunsigned short\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "CUShort"
      },
      "index": {
        "description": "Haskell type representing the unsigned short type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "CUShort",
        "normalized": "",
        "package": "accelerate",
        "partial": "CUShort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Char",
      "description": {
        "fct-descr": "\u003cp\u003eThe character type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e is an enumeration whose values represent\nUnicode (or equivalently ISO/IEC 10646) characters (see\n\u003ca\u003ehttp://www.unicode.org/\u003c/a\u003e for details).  This set extends the ISO 8859-1\n(Latin-1) character set (the first 256 characters), which is itself an extension\nof the ASCII character set (the first 128 characters).  A character literal in\nHaskell has type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to or from the corresponding \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value defined\nby Unicode, use \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e from the\n\u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e class respectively (or equivalently \u003ccode\u003eord\u003c/code\u003e and \u003ccode\u003echr\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Char"
      },
      "index": {
        "description": "The character type Char is an enumeration whose values represent Unicode or equivalently ISO IEC characters see http www.unicode.org for details This set extends the ISO Latin-1 character set the first characters which is itself an extension of the ASCII character set the first characters character literal in Haskell has type Char To convert Char to or from the corresponding Int value defined by Unicode use toEnum and fromEnum from the Enum class respectively or equivalently ord and chr",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Char",
        "normalized": "",
        "package": "accelerate",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:DIM0",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#DIM0",
        "fct-type": "type",
        "title": "DIM0"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "DIM0",
        "normalized": "",
        "package": "accelerate",
        "partial": "DIM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:DIM1",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#DIM1",
        "fct-type": "type",
        "title": "DIM1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "DIM1",
        "normalized": "",
        "package": "accelerate",
        "partial": "DIM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:DIM2",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#DIM2",
        "fct-type": "type",
        "title": "DIM2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "DIM2",
        "normalized": "",
        "package": "accelerate",
        "partial": "DIM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:DIM3",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#DIM3",
        "fct-type": "type",
        "title": "DIM3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "DIM3",
        "normalized": "",
        "package": "accelerate",
        "partial": "DIM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:DIM4",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#DIM4",
        "fct-type": "type",
        "title": "DIM4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "DIM4",
        "normalized": "",
        "package": "accelerate",
        "partial": "DIM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:DIM5",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#DIM5",
        "fct-type": "type",
        "title": "DIM5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "DIM5",
        "normalized": "",
        "package": "accelerate",
        "partial": "DIM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:DIM6",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#DIM6",
        "fct-type": "type",
        "title": "DIM6"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "DIM6",
        "normalized": "",
        "package": "accelerate",
        "partial": "DIM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:DIM7",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#DIM7",
        "fct-type": "type",
        "title": "DIM7"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "DIM7",
        "normalized": "",
        "package": "accelerate",
        "partial": "DIM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:DIM8",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#DIM8",
        "fct-type": "type",
        "title": "DIM8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "DIM8",
        "normalized": "",
        "package": "accelerate",
        "partial": "DIM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:DIM9",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#DIM9",
        "fct-type": "type",
        "title": "DIM9"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "DIM9",
        "normalized": "",
        "package": "accelerate",
        "partial": "DIM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Double",
      "description": {
        "fct-descr": "\u003cp\u003eDouble-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE double-precision type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Double"
      },
      "index": {
        "description": "Double-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE double-precision type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Double",
        "normalized": "",
        "package": "accelerate",
        "partial": "Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Elt",
      "description": {
        "fct-descr": "\u003cp\u003eAccelerate supports as array elements only simple atomic types, and tuples\n thereof. These element types are stored efficiently in memory, unpacked as\n consecutive elements without pointers.\n\u003c/p\u003e\u003cp\u003eThis class characterises the types of values that can be array elements, and\n hence, appear in scalar Accelerate expressions.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#Elt",
        "fct-type": "class",
        "title": "Elt"
      },
      "index": {
        "description": "Accelerate supports as array elements only simple atomic types and tuples thereof These element types are stored efficiently in memory unpacked as consecutive elements without pointers This class characterises the types of values that can be array elements and hence appear in scalar Accelerate expressions",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Elt",
        "normalized": "",
        "package": "accelerate",
        "partial": "Elt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Exp",
      "description": {
        "fct-descr": "\u003cp\u003eScalar expressions for plain array computations.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Accelerate-Smart.html#Exp",
        "fct-type": "data",
        "title": "Exp"
      },
      "index": {
        "description": "Scalar expressions for plain array computations",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Exp",
        "normalized": "",
        "package": "accelerate",
        "partial": "Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Float",
      "description": {
        "fct-descr": "\u003cp\u003eSingle-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE single-precision type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Float"
      },
      "index": {
        "description": "Single-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE single-precision type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Float",
        "normalized": "",
        "package": "accelerate",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Int",
      "description": {
        "fct-descr": "\u003cp\u003eA fixed-precision integer type with at least the range \u003ccode\u003e[-2^29 .. 2^29-1]\u003c/code\u003e.\n The exact range for a given implementation can be determined by using\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Int"
      },
      "index": {
        "description": "fixed-precision integer type with at least the range The exact range for given implementation can be determined by using minBound and maxBound from the Bounded class",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Int",
        "normalized": "",
        "package": "accelerate",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Int16",
      "description": {
        "fct-descr": "\u003cp\u003e16-bit signed integer type\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Int16"
      },
      "index": {
        "description": "bit signed integer type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Int16",
        "normalized": "",
        "package": "accelerate",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Int32",
      "description": {
        "fct-descr": "\u003cp\u003e32-bit signed integer type\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Int32"
      },
      "index": {
        "description": "bit signed integer type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Int32",
        "normalized": "",
        "package": "accelerate",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Int64",
      "description": {
        "fct-descr": "\u003cp\u003e64-bit signed integer type\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Int64"
      },
      "index": {
        "description": "bit signed integer type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Int64",
        "normalized": "",
        "package": "accelerate",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Int8",
      "description": {
        "fct-descr": "\u003cp\u003e8-bit signed integer type\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Int8"
      },
      "index": {
        "description": "bit signed integer type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Int8",
        "normalized": "",
        "package": "accelerate",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:IsBounded",
      "description": {
        "fct-descr": "\u003cp\u003eBounded types\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Accelerate-Type.html#IsBounded",
        "fct-type": "class",
        "title": "IsBounded"
      },
      "index": {
        "description": "Bounded types",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "IsBounded",
        "normalized": "",
        "package": "accelerate",
        "partial": "Is Bounded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:IsFloating",
      "description": {
        "fct-descr": "\u003cp\u003eFloating types\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Accelerate-Type.html#IsFloating",
        "fct-type": "class",
        "title": "IsFloating"
      },
      "index": {
        "description": "Floating types",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "IsFloating",
        "normalized": "",
        "package": "accelerate",
        "partial": "Is Floating",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:IsIntegral",
      "description": {
        "fct-descr": "\u003cp\u003eIntegral types\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Accelerate-Type.html#IsIntegral",
        "fct-type": "class",
        "title": "IsIntegral"
      },
      "index": {
        "description": "Integral types",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "IsIntegral",
        "normalized": "",
        "package": "accelerate",
        "partial": "Is Integral",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:IsNonNum",
      "description": {
        "fct-descr": "\u003cp\u003eNon-numeric types\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Accelerate-Type.html#IsNonNum",
        "fct-type": "class",
        "title": "IsNonNum"
      },
      "index": {
        "description": "Non-numeric types",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "IsNonNum",
        "normalized": "",
        "package": "accelerate",
        "partial": "Is Non Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:IsNum",
      "description": {
        "fct-descr": "\u003cp\u003eNumeric types\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Accelerate-Type.html#IsNum",
        "fct-type": "class",
        "title": "IsNum"
      },
      "index": {
        "description": "Numeric types",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "IsNum",
        "normalized": "",
        "package": "accelerate",
        "partial": "Is Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:IsScalar",
      "description": {
        "fct-descr": "\u003cp\u003eAll scalar type\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Accelerate-Type.html#IsScalar",
        "fct-type": "class",
        "title": "IsScalar"
      },
      "index": {
        "description": "All scalar type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "IsScalar",
        "normalized": "",
        "package": "accelerate",
        "partial": "Is Scalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Lift",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of types \u003ccode\u003ee\u003c/code\u003e which can be lifted into \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#Lift",
        "fct-type": "class",
        "title": "Lift"
      },
      "index": {
        "description": "The class of types which can be lifted into",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Lift",
        "normalized": "",
        "package": "accelerate",
        "partial": "Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Scalar",
      "description": {
        "fct-descr": "\u003cp\u003eScalars arrays hold a single element\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#Scalar",
        "fct-type": "type",
        "title": "Scalar"
      },
      "index": {
        "description": "Scalars arrays hold single element",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Scalar",
        "normalized": "",
        "package": "accelerate",
        "partial": "Scalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Segments",
      "description": {
        "fct-descr": "\u003cp\u003eSegment descriptor (vector of segment lengths).\n\u003c/p\u003e\u003cp\u003eTo represent nested one-dimensional arrays, we use a flat array of data\n values in conjunction with a \u003cem\u003esegment descriptor\u003c/em\u003e, which stores the lengths\n of the subarrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#Segments",
        "fct-type": "type",
        "title": "Segments"
      },
      "index": {
        "description": "Segment descriptor vector of segment lengths To represent nested one-dimensional arrays we use flat array of data values in conjunction with segment descriptor which stores the lengths of the subarrays",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Segments",
        "normalized": "",
        "package": "accelerate",
        "partial": "Segments",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Shape",
      "description": {
        "fct-descr": "\u003cp\u003eShapes and indices of multi-dimensional arrays\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#Shape",
        "fct-type": "class",
        "title": "Shape"
      },
      "index": {
        "description": "Shapes and indices of multi-dimensional arrays",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Shape",
        "normalized": "",
        "package": "accelerate",
        "partial": "Shape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Slice",
      "description": {
        "fct-descr": "\u003cp\u003eSlices, aka generalised indices, as \u003cem\u003en\u003c/em\u003e-tuples and mappings of slice\n indices to slices, co-slices, and slice dimensions\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#Slice",
        "fct-type": "class",
        "title": "Slice"
      },
      "index": {
        "description": "Slices aka generalised indices as tuples and mappings of slice indices to slices co-slices and slice dimensions",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Slice",
        "normalized": "",
        "package": "accelerate",
        "partial": "Slice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Stencil",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Accelerate-Smart.html#Stencil",
        "fct-type": "class",
        "title": "Stencil"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Stencil",
        "normalized": "",
        "package": "accelerate",
        "partial": "Stencil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Stencil3",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Language.html#Stencil3",
        "fct-type": "type",
        "title": "Stencil3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Stencil3",
        "normalized": "",
        "package": "accelerate",
        "partial": "Stencil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Stencil3x3",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Language.html#Stencil3x3",
        "fct-type": "type",
        "title": "Stencil3x3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Stencil3x3",
        "normalized": "",
        "package": "accelerate",
        "partial": "Stencil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Stencil3x3x3",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Language.html#Stencil3x3x3",
        "fct-type": "type",
        "title": "Stencil3x3x3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Stencil3x3x3",
        "normalized": "",
        "package": "accelerate",
        "partial": "Stencil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Stencil3x3x5",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Language.html#Stencil3x3x5",
        "fct-type": "type",
        "title": "Stencil3x3x5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Stencil3x3x5",
        "normalized": "",
        "package": "accelerate",
        "partial": "Stencil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Stencil3x5",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Language.html#Stencil3x5",
        "fct-type": "type",
        "title": "Stencil3x5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Stencil3x5",
        "normalized": "",
        "package": "accelerate",
        "partial": "Stencil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Stencil3x5x3",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Language.html#Stencil3x5x3",
        "fct-type": "type",
        "title": "Stencil3x5x3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Stencil3x5x3",
        "normalized": "",
        "package": "accelerate",
        "partial": "Stencil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Stencil3x5x5",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Language.html#Stencil3x5x5",
        "fct-type": "type",
        "title": "Stencil3x5x5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Stencil3x5x5",
        "normalized": "",
        "package": "accelerate",
        "partial": "Stencil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Stencil5",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Language.html#Stencil5",
        "fct-type": "type",
        "title": "Stencil5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Stencil5",
        "normalized": "",
        "package": "accelerate",
        "partial": "Stencil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Stencil5x3",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Language.html#Stencil5x3",
        "fct-type": "type",
        "title": "Stencil5x3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Stencil5x3",
        "normalized": "",
        "package": "accelerate",
        "partial": "Stencil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Stencil5x3x3",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Language.html#Stencil5x3x3",
        "fct-type": "type",
        "title": "Stencil5x3x3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Stencil5x3x3",
        "normalized": "",
        "package": "accelerate",
        "partial": "Stencil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Stencil5x3x5",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Language.html#Stencil5x3x5",
        "fct-type": "type",
        "title": "Stencil5x3x5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Stencil5x3x5",
        "normalized": "",
        "package": "accelerate",
        "partial": "Stencil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Stencil5x5",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Language.html#Stencil5x5",
        "fct-type": "type",
        "title": "Stencil5x5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Stencil5x5",
        "normalized": "",
        "package": "accelerate",
        "partial": "Stencil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Stencil5x5x3",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Language.html#Stencil5x5x3",
        "fct-type": "type",
        "title": "Stencil5x5x3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Stencil5x5x3",
        "normalized": "",
        "package": "accelerate",
        "partial": "Stencil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Stencil5x5x5",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Language.html#Stencil5x5x5",
        "fct-type": "type",
        "title": "Stencil5x5x5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Stencil5x5x5",
        "normalized": "",
        "package": "accelerate",
        "partial": "Stencil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Stencil7",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Language.html#Stencil7",
        "fct-type": "type",
        "title": "Stencil7"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Stencil7",
        "normalized": "",
        "package": "accelerate",
        "partial": "Stencil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Stencil9",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Language.html#Stencil9",
        "fct-type": "type",
        "title": "Stencil9"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Stencil9",
        "normalized": "",
        "package": "accelerate",
        "partial": "Stencil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Unlift",
      "description": {
        "fct-descr": "\u003cp\u003eA limited subset of types which can be lifted, can also be unlifted.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#Unlift",
        "fct-type": "class",
        "title": "Unlift"
      },
      "index": {
        "description": "limited subset of types which can be lifted can also be unlifted",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Unlift",
        "normalized": "",
        "package": "accelerate",
        "partial": "Unlift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Vector",
      "description": {
        "fct-descr": "\u003cp\u003eVectors are one-dimensional arrays\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#Vector",
        "fct-type": "type",
        "title": "Vector"
      },
      "index": {
        "description": "Vectors are one-dimensional arrays",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Vector",
        "normalized": "",
        "package": "accelerate",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Word",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e is an unsigned integral type, with the same size as \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Word"
      },
      "index": {
        "description": "Word is an unsigned integral type with the same size as Int",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Word",
        "normalized": "",
        "package": "accelerate",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Word16",
      "description": {
        "fct-descr": "\u003cp\u003e16-bit unsigned integer type\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Word16"
      },
      "index": {
        "description": "bit unsigned integer type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Word16",
        "normalized": "",
        "package": "accelerate",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Word32",
      "description": {
        "fct-descr": "\u003cp\u003e32-bit unsigned integer type\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Word32"
      },
      "index": {
        "description": "bit unsigned integer type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Word32",
        "normalized": "",
        "package": "accelerate",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Word64",
      "description": {
        "fct-descr": "\u003cp\u003e64-bit unsigned integer type\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Word64"
      },
      "index": {
        "description": "bit unsigned integer type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Word64",
        "normalized": "",
        "package": "accelerate",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Word8",
      "description": {
        "fct-descr": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Word8"
      },
      "index": {
        "description": "bit unsigned integer type",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Word8",
        "normalized": "",
        "package": "accelerate",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#t:Z",
      "description": {
        "fct-descr": "\u003cp\u003eRank-0 index\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#Z",
        "fct-type": "data",
        "title": "Z"
      },
      "index": {
        "description": "Rank-0 index",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Z",
        "normalized": "",
        "package": "accelerate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:-124--124--42-",
      "description": {
        "fct-descr": "\u003cp\u003eDisjunction\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp Bool -\u003e Exp Bool -\u003e Exp Bool",
        "fct-source": "src/Data-Array-Accelerate-Language.html#%7C%7C%2A",
        "fct-type": "function",
        "title": "(||*)"
      },
      "index": {
        "description": "Disjunction",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "(||*) ||*",
        "normalized": "Exp Bool-\u003eExp Bool-\u003eExp Bool",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp Bool-\u003eExp Bool-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eExpression form that extracts a scalar from an array\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array ix e) -\u003e Exp ix -\u003e Exp e",
        "fct-source": "src/Data-Array-Accelerate-Language.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "Expression form that extracts scalar from an array",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "(!) !",
        "normalized": "Acc(Array a b)-\u003eExp a-\u003eExp b",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array ix e)-\u003eExp ix-\u003eExp e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:-33--33-",
      "description": {
        "fct-descr": "\u003cp\u003eExpression form that extracts a scalar from an array at a linear index\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array ix e) -\u003e Exp Int -\u003e Exp e",
        "fct-source": "src/Data-Array-Accelerate-Language.html#%21%21",
        "fct-type": "function",
        "title": "(!!)"
      },
      "index": {
        "description": "Expression form that extracts scalar from an array at linear index",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "(!!) !!",
        "normalized": "Acc(Array a b)-\u003eExp Int-\u003eExp b",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array ix e)-\u003eExp Int-\u003eExp e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:-38--38--42-",
      "description": {
        "fct-descr": "\u003cp\u003eConjunction\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp Bool -\u003e Exp Bool -\u003e Exp Bool",
        "fct-source": "src/Data-Array-Accelerate-Language.html#%26%26%2A",
        "fct-type": "function",
        "title": "(&&*)"
      },
      "index": {
        "description": "Conjunction",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "(&&*) &&*",
        "normalized": "Exp Bool-\u003eExp Bool-\u003eExp Bool",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp Bool-\u003eExp Bool-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:-43--43-",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenate outermost component of two arrays. The extent of the lower\n   dimensional component is the intersection of the two arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array (sh :. Int) e) -\u003e Acc (Array (sh :. Int) e) -\u003e Acc (Array (sh :. Int) e)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#%2B%2B",
        "fct-type": "function",
        "title": "(++)"
      },
      "index": {
        "description": "Concatenate outermost component of two arrays The extent of the lower dimensional component is the intersection of the two arrays",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "(++) ++",
        "normalized": "Acc(Array(a Int)b)-\u003eAcc(Array(a Int)b)-\u003eAcc(Array(a Int)b)",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array(sh Int)e)-\u003eAcc(Array(sh Int)e)-\u003eAcc(Array(sh Int)e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:-47--61--42-",
      "description": {
        "fct-descr": "\u003cp\u003eInequality lifted into Accelerate expressions.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp t -\u003e Exp t -\u003e Exp Bool",
        "fct-source": "src/Data-Array-Accelerate-Language.html#%2F%3D%2A",
        "fct-type": "function",
        "title": "(/=*)"
      },
      "index": {
        "description": "Inequality lifted into Accelerate expressions",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "(/=*) /=*",
        "normalized": "Exp a-\u003eExp a-\u003eExp Bool",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp t-\u003eExp t-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:-60--42-",
      "description": {
        "fct-descr": "\u003cp\u003eSmaller-than lifted into Accelerate expressions.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp t -\u003e Exp t -\u003e Exp Bool",
        "fct-source": "src/Data-Array-Accelerate-Language.html#%3C%2A",
        "fct-type": "function",
        "title": "(\u003c*)"
      },
      "index": {
        "description": "Smaller-than lifted into Accelerate expressions",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "(\u003c*) \u003c*",
        "normalized": "Exp a-\u003eExp a-\u003eExp Bool",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp t-\u003eExp t-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:-60--61--42-",
      "description": {
        "fct-descr": "\u003cp\u003eSmaller-or-equal lifted into Accelerate expressions.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp t -\u003e Exp t -\u003e Exp Bool",
        "fct-source": "src/Data-Array-Accelerate-Language.html#%3C%3D%2A",
        "fct-type": "function",
        "title": "(\u003c=*)"
      },
      "index": {
        "description": "Smaller-or-equal lifted into Accelerate expressions",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "(\u003c=*) \u003c=*",
        "normalized": "Exp a-\u003eExp a-\u003eExp Bool",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp t-\u003eExp t-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:-61--61--42-",
      "description": {
        "fct-descr": "\u003cp\u003eEquality lifted into Accelerate expressions.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp t -\u003e Exp t -\u003e Exp Bool",
        "fct-source": "src/Data-Array-Accelerate-Language.html#%3D%3D%2A",
        "fct-type": "function",
        "title": "(==*)"
      },
      "index": {
        "description": "Equality lifted into Accelerate expressions",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "(==*) ==*",
        "normalized": "Exp a-\u003eExp a-\u003eExp Bool",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp t-\u003eExp t-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:-62--42-",
      "description": {
        "fct-descr": "\u003cp\u003eGreater-than lifted into Accelerate expressions.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp t -\u003e Exp t -\u003e Exp Bool",
        "fct-source": "src/Data-Array-Accelerate-Language.html#%3E%2A",
        "fct-type": "function",
        "title": "(\u003e*)"
      },
      "index": {
        "description": "Greater-than lifted into Accelerate expressions",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "(\u003e*) \u003e*",
        "normalized": "Exp a-\u003eExp a-\u003eExp Bool",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp t-\u003eExp t-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:-62--45--62-",
      "description": {
        "fct-descr": "\u003cp\u003ePipelining of two array computations.\n\u003c/p\u003e\u003cp\u003eDenotationally, we have\n\u003c/p\u003e\u003cpre\u003e (acc1 \u003e-\u003e acc2) arrs = let tmp = acc1 arrs in acc2 tmp\n\u003c/pre\u003e\u003cp\u003eOperationally, the array computations \u003ccode\u003eacc1\u003c/code\u003e and \u003ccode\u003eacc2\u003c/code\u003e will not share any sub-computations,\n neither between each other nor with the environment.  This makes them truly independent stages\n that only communicate by way of the result of \u003ccode\u003eacc1\u003c/code\u003e which is being fed as an argument to \u003ccode\u003eacc2\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Acc a -\u003e Acc b) -\u003e (Acc b -\u003e Acc c) -\u003e Acc a -\u003e Acc c",
        "fct-source": "src/Data-Array-Accelerate-Language.html#%3E-%3E",
        "fct-type": "function",
        "title": "(\u003e-\u003e)"
      },
      "index": {
        "description": "Pipelining of two array computations Denotationally we have acc1 acc2 arrs let tmp acc1 arrs in acc2 tmp Operationally the array computations acc1 and acc2 will not share any sub-computations neither between each other nor with the environment This makes them truly independent stages that only communicate by way of the result of acc1 which is being fed as an argument to acc2",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "(\u003e-\u003e) \u003e-\u003e",
        "normalized": "(Acc a-\u003eAcc b)-\u003e(Acc b-\u003eAcc c)-\u003eAcc a-\u003eAcc c",
        "package": "accelerate",
        "partial": "",
        "signature": "(Acc a-\u003eAcc b)-\u003e(Acc b-\u003eAcc c)-\u003eAcc a-\u003eAcc c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:-62--61--42-",
      "description": {
        "fct-descr": "\u003cp\u003eGreater-or-equal lifted into Accelerate expressions.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp t -\u003e Exp t -\u003e Exp Bool",
        "fct-source": "src/Data-Array-Accelerate-Language.html#%3E%3D%2A",
        "fct-type": "function",
        "title": "(\u003e=*)"
      },
      "index": {
        "description": "Greater-or-equal lifted into Accelerate expressions",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "(\u003e=*) \u003e=*",
        "normalized": "Exp a-\u003eExp a-\u003eExp Bool",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp t-\u003eExp t-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:-63-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix version of \u003ccode\u003e\u003ca\u003econd\u003c/a\u003e\u003c/code\u003e. If the predicate evaluates to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the first\n component of the tuple is returned, else the second.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp Bool -\u003e (Exp t, Exp t) -\u003e Exp t",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#%3F",
        "fct-type": "function",
        "title": "(?)"
      },
      "index": {
        "description": "An infix version of cond If the predicate evaluates to True the first component of the tuple is returned else the second",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "(?) ?",
        "normalized": "Exp Bool-\u003e(Exp a,Exp a)-\u003eExp a",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp Bool-\u003e(Exp t,Exp t)-\u003eExp t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:-63--124-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix version of \u003ccode\u003e\u003ca\u003eacond\u003c/a\u003e\u003c/code\u003e. If the predicate evaluates to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the first\n component of the tuple is returned, else the second.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp Bool -\u003e (Acc a, Acc a) -\u003e Acc a",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#%3F%7C",
        "fct-type": "function",
        "title": "(?|)"
      },
      "index": {
        "description": "Infix version of acond If the predicate evaluates to True the first component of the tuple is returned else the second",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "(?|) ?|",
        "normalized": "Exp Bool-\u003e(Acc a,Acc a)-\u003eAcc a",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp Bool-\u003e(Acc a,Acc a)-\u003eAcc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v::.",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "tail :. head",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#%3A.",
        "fct-type": "function",
        "title": ":."
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": ":.",
        "normalized": "",
        "package": "accelerate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:All",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "All",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#All",
        "fct-type": "function",
        "title": "All"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "All",
        "normalized": "",
        "package": "accelerate",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:Any",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Any",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#Any",
        "fct-type": "function",
        "title": "Any"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Any",
        "normalized": "",
        "package": "accelerate",
        "partial": "Any",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:Clamp",
      "description": {
        "fct-descr": "\u003cp\u003eclamp coordinates to the extent of the array\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Clamp",
        "fct-source": "src/Data-Array-Accelerate-Type.html#Boundary",
        "fct-type": "function",
        "title": "Clamp"
      },
      "index": {
        "description": "clamp coordinates to the extent of the array",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Clamp",
        "normalized": "",
        "package": "accelerate",
        "partial": "Clamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:Constant",
      "description": {
        "fct-descr": "\u003cp\u003euse a constant value for outlying coordinates \n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Constant a",
        "fct-source": "src/Data-Array-Accelerate-Type.html#Boundary",
        "fct-type": "function",
        "title": "Constant"
      },
      "index": {
        "description": "use constant value for outlying coordinates",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Constant",
        "normalized": "",
        "package": "accelerate",
        "partial": "Constant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:Mirror",
      "description": {
        "fct-descr": "\u003cp\u003emirror coordinates beyond the array extent\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Mirror",
        "fct-source": "src/Data-Array-Accelerate-Type.html#Boundary",
        "fct-type": "function",
        "title": "Mirror"
      },
      "index": {
        "description": "mirror coordinates beyond the array extent",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Mirror",
        "normalized": "",
        "package": "accelerate",
        "partial": "Mirror",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:Wrap",
      "description": {
        "fct-descr": "\u003cp\u003ewrap coordinates around on each dimension\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Wrap",
        "fct-source": "src/Data-Array-Accelerate-Type.html#Boundary",
        "fct-type": "function",
        "title": "Wrap"
      },
      "index": {
        "description": "wrap coordinates around on each dimension",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Wrap",
        "normalized": "",
        "package": "accelerate",
        "partial": "Wrap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:Z",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Z",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#Z",
        "fct-type": "function",
        "title": "Z"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "Z",
        "normalized": "",
        "package": "accelerate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:acond",
      "description": {
        "fct-descr": "\u003cp\u003eAn array-level if-then-else construct.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp Bool-\u003e Acc a-\u003e Acc a-\u003e Acc a",
        "fct-type": "function",
        "title": "acond"
      },
      "index": {
        "description": "An array-level if-then-else construct",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "acond",
        "normalized": "Exp Bool-\u003eAcc a-\u003eAcc a-\u003eAcc a",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp Bool-\u003eAcc a-\u003eAcc a-\u003eAcc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:all",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if all elements satisfy a predicate\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp e -\u003e Exp Bool) -\u003e Acc (Array sh e) -\u003e Acc (Scalar Bool)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#all",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "Check if all elements satisfy predicate",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "all",
        "normalized": "(Exp a-\u003eExp Bool)-\u003eAcc(Array b a)-\u003eAcc(Scalar Bool)",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp e-\u003eExp Bool)-\u003eAcc(Array sh e)-\u003eAcc(Scalar Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:and",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if all elements are \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh Bool) -\u003e Acc (Scalar Bool)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#and",
        "fct-type": "function",
        "title": "and"
      },
      "index": {
        "description": "Check if all elements are True",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "and",
        "normalized": "Acc(Array a Bool)-\u003eAcc(Scalar Bool)",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh Bool)-\u003eAcc(Scalar Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:any",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if any element satisfies the predicate\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp e -\u003e Exp Bool) -\u003e Acc (Array sh e) -\u003e Acc (Scalar Bool)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#any",
        "fct-type": "function",
        "title": "any"
      },
      "index": {
        "description": "Check if any element satisfies the predicate",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "any",
        "normalized": "(Exp a-\u003eExp Bool)-\u003eAcc(Array b a)-\u003eAcc(Scalar Bool)",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp e-\u003eExp Bool)-\u003eAcc(Array sh e)-\u003eAcc(Scalar Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:arrayDim",
      "description": {
        "fct-descr": "\u003cp\u003eRank of an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "sh -\u003e Int",
        "fct-source": "src/Data-Array-Accelerate.html#arrayDim",
        "fct-type": "function",
        "title": "arrayDim"
      },
      "index": {
        "description": "Rank of an array",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "arrayDim",
        "normalized": "a-\u003eInt",
        "package": "accelerate",
        "partial": "Dim",
        "signature": "sh-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:arrayShape",
      "description": {
        "fct-descr": "\u003cp\u003eArray shape in plain Haskell code.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Array sh e -\u003e sh",
        "fct-source": "src/Data-Array-Accelerate.html#arrayShape",
        "fct-type": "function",
        "title": "arrayShape"
      },
      "index": {
        "description": "Array shape in plain Haskell code",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "arrayShape",
        "normalized": "Array a b-\u003ea",
        "package": "accelerate",
        "partial": "Shape",
        "signature": "Array sh e-\u003esh"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:arraySize",
      "description": {
        "fct-descr": "\u003cp\u003eTotal number of elements in an array of the given \u003ccode\u003eShape\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "sh -\u003e Int",
        "fct-source": "src/Data-Array-Accelerate.html#arraySize",
        "fct-type": "function",
        "title": "arraySize"
      },
      "index": {
        "description": "Total number of elements in an array of the given Shape",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "arraySize",
        "normalized": "a-\u003eInt",
        "package": "accelerate",
        "partial": "Size",
        "signature": "sh-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:awhile",
      "description": {
        "fct-descr": "\u003cp\u003eAn array-level while construct\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Acc a -\u003e Acc (Scalar Bool)) -\u003e (Acc a -\u003e Acc a) -\u003e Acc a -\u003e Acc a",
        "fct-source": "src/Data-Array-Accelerate-Language.html#awhile",
        "fct-type": "function",
        "title": "awhile"
      },
      "index": {
        "description": "An array-level while construct",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "awhile",
        "normalized": "(Acc a-\u003eAcc(Scalar Bool))-\u003e(Acc a-\u003eAcc a)-\u003eAcc a-\u003eAcc a",
        "package": "accelerate",
        "partial": "",
        "signature": "(Acc a-\u003eAcc(Scalar Bool))-\u003e(Acc a-\u003eAcc a)-\u003eAcc a-\u003eAcc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:backpermute",
      "description": {
        "fct-descr": "\u003cp\u003eBackward permutation specified by an index mapping from the destination\n array specifying which element of the source array to read.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp ix'-\u003e (Exp ix' -\u003e Exp ix)-\u003e Acc (Array ix a)-\u003e Acc (Array ix' a)",
        "fct-type": "function",
        "title": "backpermute"
      },
      "index": {
        "description": "Backward permutation specified by an index mapping from the destination array specifying which element of the source array to read",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "backpermute",
        "normalized": "Exp a-\u003e(Exp a-\u003eExp b)-\u003eAcc(Array b c)-\u003eAcc(Array a c)",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp ix'-\u003e(Exp ix'-\u003eExp ix)-\u003eAcc(Array ix a)-\u003eAcc(Array ix' a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:bit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ebit i\u003c/code\u003e is a value with the \u003ccode\u003ei\u003c/code\u003eth bit set and all other bits clear\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp Int -\u003e Exp t",
        "fct-source": "src/Data-Array-Accelerate-Language.html#bit",
        "fct-type": "function",
        "title": "bit"
      },
      "index": {
        "description": "bit is value with the th bit set and all other bits clear",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "bit",
        "normalized": "Exp Int-\u003eExp a",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp Int-\u003eExp t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:boolToInt",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a Boolean value to an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, where \u003ccode\u003eFalse\u003c/code\u003e turns into '0' and \u003ccode\u003eTrue\u003c/code\u003e\n into '1'.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp Bool -\u003e Exp Int",
        "fct-source": "src/Data-Array-Accelerate-Language.html#boolToInt",
        "fct-type": "function",
        "title": "boolToInt"
      },
      "index": {
        "description": "Convert Boolean value to an Int where False turns into and True into",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "boolToInt",
        "normalized": "Exp Bool-\u003eExp Int",
        "package": "accelerate",
        "partial": "To Int",
        "signature": "Exp Bool-\u003eExp Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:ceiling",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eceiling x\u003c/code\u003e returns the least integer not less than \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp a -\u003e Exp b",
        "fct-source": "src/Data-Array-Accelerate-Language.html#ceiling",
        "fct-type": "function",
        "title": "ceiling"
      },
      "index": {
        "description": "ceiling returns the least integer not less than",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "ceiling",
        "normalized": "Exp a-\u003eExp b",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp a-\u003eExp b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:clearBit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ex `clearBit` i\u003c/code\u003e is the same as \u003ccode\u003ex .&. complement (bit i)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp t -\u003e Exp Int -\u003e Exp t",
        "fct-source": "src/Data-Array-Accelerate-Language.html#clearBit",
        "fct-type": "function",
        "title": "clearBit"
      },
      "index": {
        "description": "clearBit is the same as complement bit",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "clearBit",
        "normalized": "Exp a-\u003eExp Int-\u003eExp a",
        "package": "accelerate",
        "partial": "Bit",
        "signature": "Exp t-\u003eExp Int-\u003eExp t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:complementBit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ex `complementBit` i\u003c/code\u003e is the same as \u003ccode\u003ex `xor` bit i\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp t -\u003e Exp Int -\u003e Exp t",
        "fct-source": "src/Data-Array-Accelerate-Language.html#complementBit",
        "fct-type": "function",
        "title": "complementBit"
      },
      "index": {
        "description": "complementBit is the same as xor bit",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "complementBit",
        "normalized": "Exp a-\u003eExp Int-\u003eExp a",
        "package": "accelerate",
        "partial": "Bit",
        "signature": "Exp t-\u003eExp Int-\u003eExp t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:cond",
      "description": {
        "fct-descr": "\u003cp\u003eA scalar-level if-then-else construct.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp Bool-\u003e Exp t-\u003e Exp t-\u003e Exp t",
        "fct-type": "function",
        "title": "cond"
      },
      "index": {
        "description": "scalar-level if-then-else construct",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "cond",
        "normalized": "Exp Bool-\u003eExp a-\u003eExp a-\u003eExp a",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp Bool-\u003eExp t-\u003eExp t-\u003eExp t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:constant",
      "description": {
        "fct-descr": "\u003cp\u003eScalar expression inlet: make a Haskell value available for processing in\n an Accelerate scalar expression.\n\u003c/p\u003e\u003cp\u003eNote that this embeds the value directly into the expression. Depending on\n the backend used to execute the computation, this might not always be\n desirable. For example, a backend that does external code generation may\n embed this constant directly into the generated code, which means new code\n will need to be generated and compiled every time the value changes. In such\n cases, consider instead lifting scalar values into (singleton) arrays so that\n they can be passed as an input to the computation and thus the value can\n change without the need to generate fresh code.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "t -\u003e Exp t",
        "fct-source": "src/Data-Array-Accelerate-Smart.html#constant",
        "fct-type": "function",
        "title": "constant"
      },
      "index": {
        "description": "Scalar expression inlet make Haskell value available for processing in an Accelerate scalar expression Note that this embeds the value directly into the expression Depending on the backend used to execute the computation this might not always be desirable For example backend that does external code generation may embed this constant directly into the generated code which means new code will need to be generated and compiled every time the value changes In such cases consider instead lifting scalar values into singleton arrays so that they can be passed as an input to the computation and thus the value can change without the need to generate fresh code",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "constant",
        "normalized": "a-\u003eExp a",
        "package": "accelerate",
        "partial": "",
        "signature": "t-\u003eExp t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:curry",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an uncurried function to a curried function.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(f (Plain (f a), Plain (f b)) -\u003e f c) -\u003e f a -\u003e f b -\u003e f c",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#curry",
        "fct-type": "function",
        "title": "curry"
      },
      "index": {
        "description": "Converts an uncurried function to curried function",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "curry",
        "normalized": "(a(Plain(a b),Plain(a c))-\u003ea d)-\u003ea b-\u003ea c-\u003ea d",
        "package": "accelerate",
        "partial": "",
        "signature": "(f(Plain(f a),Plain(f b))-\u003ef c)-\u003ef a-\u003ef b-\u003ef c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003eYield all but the first \u003ccode\u003en\u003c/code\u003e elements of the input vector. The vector must\n   contain no fewer than \u003ccode\u003en\u003c/code\u003e elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp Int -\u003e Acc (Vector e) -\u003e Acc (Vector e)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "Yield all but the first elements of the input vector The vector must contain no fewer than elements",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "drop",
        "normalized": "Exp Int-\u003eAcc(Vector a)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp Int-\u003eAcc(Vector e)-\u003eAcc(Vector e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:enumFromN",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an array of the given shape containing the values x, x+1, etc (in\n   row-major order).\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp sh -\u003e Exp e -\u003e Acc (Array sh e)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#enumFromN",
        "fct-type": "function",
        "title": "enumFromN"
      },
      "index": {
        "description": "Create an array of the given shape containing the values etc in row-major order",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "enumFromN",
        "normalized": "Exp a-\u003eExp b-\u003eAcc(Array a b)",
        "package": "accelerate",
        "partial": "From",
        "signature": "Exp sh-\u003eExp e-\u003eAcc(Array sh e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:enumFromStepN",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an array of the given shape containing the values \u003ccode\u003ex\u003c/code\u003e, \u003ccode\u003ex+y\u003c/code\u003e,\n \u003ccode\u003ex+y+y\u003c/code\u003e etc. (in row-major order).\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp sh-\u003e Exp e-\u003e Exp e-\u003e Acc (Array sh e)",
        "fct-type": "function",
        "title": "enumFromStepN"
      },
      "index": {
        "description": "Create an array of the given shape containing the values etc in row-major order",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "enumFromStepN",
        "normalized": "Exp a-\u003eExp b-\u003eExp b-\u003eAcc(Array a b)",
        "package": "accelerate",
        "partial": "From Step",
        "signature": "Exp sh-\u003eExp e-\u003eExp e-\u003eAcc(Array sh e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:even",
      "description": {
        "fct-descr": "\u003cp\u003ereturn if the integer is even\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp a -\u003e Exp Bool",
        "fct-source": "src/Data-Array-Accelerate-Language.html#even",
        "fct-type": "function",
        "title": "even"
      },
      "index": {
        "description": "return if the integer is even",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "even",
        "normalized": "Exp a-\u003eExp Bool",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp a-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:fill",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an array where all elements are the same value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp sh -\u003e Exp e -\u003e Acc (Array sh e)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#fill",
        "fct-type": "function",
        "title": "fill"
      },
      "index": {
        "description": "Create an array where all elements are the same value",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "fill",
        "normalized": "Exp a-\u003eExp b-\u003eAcc(Array a b)",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp sh-\u003eExp e-\u003eAcc(Array sh e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eDrop elements that do not satisfy the predicate\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp Bool) -\u003e Acc (Vector a) -\u003e Acc (Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Drop elements that do not satisfy the predicate",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "filter",
        "normalized": "(Exp a-\u003eExp Bool)-\u003eAcc(Vector a)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp a-\u003eExp Bool)-\u003eAcc(Vector a)-\u003eAcc(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:flatten",
      "description": {
        "fct-descr": "\u003cp\u003eFlattens a given array of arbitrary dimension.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array ix a) -\u003e Acc (Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#flatten",
        "fct-type": "function",
        "title": "flatten"
      },
      "index": {
        "description": "Flattens given array of arbitrary dimension",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "flatten",
        "normalized": "Acc(Array a b)-\u003eAcc(Vector b)",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array ix a)-\u003eAcc(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:floor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efloor x\u003c/code\u003e returns the greatest integer not greater than \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp a -\u003e Exp b",
        "fct-source": "src/Data-Array-Accelerate-Language.html#floor",
        "fct-type": "function",
        "title": "floor"
      },
      "index": {
        "description": "floor returns the greatest integer not greater than",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "floor",
        "normalized": "Exp a-\u003eExp b",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp a-\u003eExp b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eReduction of the innermost dimension of an array of arbitrary rank.  The\n first argument needs to be an \u003cem\u003eassociative\u003c/em\u003e function to enable an efficient\n parallel implementation.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Exp a -\u003e Acc (Array (ix :. Int) a) -\u003e Acc (Array ix a)",
        "fct-source": "src/Data-Array-Accelerate-Language.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Reduction of the innermost dimension of an array of arbitrary rank The first argument needs to be an associative function to enable an efficient parallel implementation",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "fold",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Array(b Int)a)-\u003eAcc(Array b a)",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Array(ix Int)a)-\u003eAcc(Array ix a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:fold1",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e that requires the reduced array to be non-empty and\n doesn't need an default value.  The first argument needs to be an\n \u003cem\u003eassociative\u003c/em\u003e function to enable an efficient parallel implementation.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Acc (Array (ix :. Int) a) -\u003e Acc (Array ix a)",
        "fct-source": "src/Data-Array-Accelerate-Language.html#fold1",
        "fct-type": "function",
        "title": "fold1"
      },
      "index": {
        "description": "Variant of fold that requires the reduced array to be non-empty and doesn need an default value The first argument needs to be an associative function to enable an efficient parallel implementation",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "fold1",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eAcc(Array(b Int)a)-\u003eAcc(Array b a)",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eAcc(Array(ix Int)a)-\u003eAcc(Array ix a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:fold1All",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003efoldAll\u003c/a\u003e\u003c/code\u003e that requires the reduced array to be non-empty and\n doesn't need an default value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Acc (Array sh a) -\u003e Acc (Scalar a)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#fold1All",
        "fct-type": "function",
        "title": "fold1All"
      },
      "index": {
        "description": "Variant of foldAll that requires the reduced array to be non-empty and doesn need an default value",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "fold1All",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eAcc(Array b a)-\u003eAcc(Scalar a)",
        "package": "accelerate",
        "partial": "All",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eAcc(Array sh a)-\u003eAcc(Scalar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:fold1Seg",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003efoldSeg\u003c/a\u003e\u003c/code\u003e that requires \u003cem\u003eall\u003c/em\u003e segments of the reduced array to\n be non-empty and doesn't need a default value.\n\u003c/p\u003e\u003cp\u003eThe source array must have at least rank 1. The \u003ccode\u003e\u003ca\u003eSegments\u003c/a\u003e\u003c/code\u003e array determines\n the lengths of the logical sub-arrays, each of which is folded separately.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Acc (Array (ix :. Int) a) -\u003e Acc (Segments i) -\u003e Acc (Array (ix :. Int) a)",
        "fct-source": "src/Data-Array-Accelerate-Language.html#fold1Seg",
        "fct-type": "function",
        "title": "fold1Seg"
      },
      "index": {
        "description": "Variant of foldSeg that requires all segments of the reduced array to be non-empty and doesn need default value The source array must have at least rank The Segments array determines the lengths of the logical sub-arrays each of which is folded separately",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "fold1Seg",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eAcc(Array(b Int)a)-\u003eAcc(Segments c)-\u003eAcc(Array(b Int)a)",
        "package": "accelerate",
        "partial": "Seg",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eAcc(Array(ix Int)a)-\u003eAcc(Segments i)-\u003eAcc(Array(ix Int)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:foldAll",
      "description": {
        "fct-descr": "\u003cp\u003eReduction of an array of arbitrary rank to a single scalar value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Exp a -\u003e Acc (Array sh a) -\u003e Acc (Scalar a)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#foldAll",
        "fct-type": "function",
        "title": "foldAll"
      },
      "index": {
        "description": "Reduction of an array of arbitrary rank to single scalar value",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "foldAll",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Array b a)-\u003eAcc(Scalar a)",
        "package": "accelerate",
        "partial": "All",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Array sh a)-\u003eAcc(Scalar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:foldSeg",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented reduction along the innermost dimension.  Performs one individual\n reduction per segment of the source array.  These reductions proceed in\n parallel.\n\u003c/p\u003e\u003cp\u003eThe source array must have at least rank 1.  The \u003ccode\u003e\u003ca\u003eSegments\u003c/a\u003e\u003c/code\u003e array determines\n the lengths of the logical sub-arrays, each of which is folded separately.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Exp a -\u003e Acc (Array (ix :. Int) a) -\u003e Acc (Segments i) -\u003e Acc (Array (ix :. Int) a)",
        "fct-source": "src/Data-Array-Accelerate-Language.html#foldSeg",
        "fct-type": "function",
        "title": "foldSeg"
      },
      "index": {
        "description": "Segmented reduction along the innermost dimension Performs one individual reduction per segment of the source array These reductions proceed in parallel The source array must have at least rank The Segments array determines the lengths of the logical sub-arrays each of which is folded separately",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "foldSeg",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Array(b Int)a)-\u003eAcc(Segments c)-\u003eAcc(Array(b Int)a)",
        "package": "accelerate",
        "partial": "Seg",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Array(ix Int)a)-\u003eAcc(Segments i)-\u003eAcc(Array(ix Int)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:foreignAcc",
      "description": {
        "fct-descr": "\u003cp\u003eCall a foreign function. The form the function takes is dependent on the backend being used.\n The arguments are passed as either a single array or as a tuple of arrays. In addition a pure\n Accelerate version of the function needs to be provided to support backends other than the one\n being targeted.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "ff acc res -\u003e (Acc acc -\u003e Acc res) -\u003e Acc acc -\u003e Acc res",
        "fct-source": "src/Data-Array-Accelerate-Language.html#foreignAcc",
        "fct-type": "function",
        "title": "foreignAcc"
      },
      "index": {
        "description": "Call foreign function The form the function takes is dependent on the backend being used The arguments are passed as either single array or as tuple of arrays In addition pure Accelerate version of the function needs to be provided to support backends other than the one being targeted",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "foreignAcc",
        "normalized": "a b c-\u003e(Acc b-\u003eAcc c)-\u003eAcc b-\u003eAcc c",
        "package": "accelerate",
        "partial": "Acc",
        "signature": "ff acc res-\u003e(Acc acc-\u003eAcc res)-\u003eAcc acc-\u003eAcc res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:foreignAcc2",
      "description": {
        "fct-descr": "\u003cp\u003eCall a foreign function with foreign implementations for two different backends.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "ff1 acc res -\u003e ff2 acc res -\u003e (Acc acc -\u003e Acc res) -\u003e Acc acc -\u003e Acc res",
        "fct-source": "src/Data-Array-Accelerate-Language.html#foreignAcc2",
        "fct-type": "function",
        "title": "foreignAcc2"
      },
      "index": {
        "description": "Call foreign function with foreign implementations for two different backends",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "foreignAcc2",
        "normalized": "a b c-\u003ea b c-\u003e(Acc b-\u003eAcc c)-\u003eAcc b-\u003eAcc c",
        "package": "accelerate",
        "partial": "Acc",
        "signature": "ff acc res-\u003eff acc res-\u003e(Acc acc-\u003eAcc res)-\u003eAcc acc-\u003eAcc res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:foreignAcc3",
      "description": {
        "fct-descr": "\u003cp\u003eCall a foreign function with foreign implementations for three different backends.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "ff1 acc res -\u003e ff2 acc res -\u003e ff3 acc res -\u003e (Acc acc -\u003e Acc res) -\u003e Acc acc -\u003e Acc res",
        "fct-source": "src/Data-Array-Accelerate-Language.html#foreignAcc3",
        "fct-type": "function",
        "title": "foreignAcc3"
      },
      "index": {
        "description": "Call foreign function with foreign implementations for three different backends",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "foreignAcc3",
        "normalized": "a b c-\u003ea b c-\u003ea b c-\u003e(Acc b-\u003eAcc c)-\u003eAcc b-\u003eAcc c",
        "package": "accelerate",
        "partial": "Acc",
        "signature": "ff acc res-\u003eff acc res-\u003eff acc res-\u003e(Acc acc-\u003eAcc res)-\u003eAcc acc-\u003eAcc res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:foreignExp",
      "description": {
        "fct-descr": "\u003cp\u003eCall a foreign expression function. The form the function takes is dependent on the\n backend being used. The arguments are passed as either a single scalar element or as a\n tuple of elements. In addition a pure Accelerate version of the function needs to be\n provided to support backends other than the one being targeted.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "ff e res -\u003e (Exp e -\u003e Exp res) -\u003e Exp e -\u003e Exp res",
        "fct-source": "src/Data-Array-Accelerate-Language.html#foreignExp",
        "fct-type": "function",
        "title": "foreignExp"
      },
      "index": {
        "description": "Call foreign expression function The form the function takes is dependent on the backend being used The arguments are passed as either single scalar element or as tuple of elements In addition pure Accelerate version of the function needs to be provided to support backends other than the one being targeted",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "foreignExp",
        "normalized": "a b c-\u003e(Exp b-\u003eExp c)-\u003eExp b-\u003eExp c",
        "package": "accelerate",
        "partial": "Exp",
        "signature": "ff e res-\u003e(Exp e-\u003eExp res)-\u003eExp e-\u003eExp res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:foreignExp2",
      "description": {
        "fct-descr": "\u003cp\u003eCall a foreign function with foreign implementations for two different backends.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "ff1 e res -\u003e ff2 e res -\u003e (Exp e -\u003e Exp res) -\u003e Exp e -\u003e Exp res",
        "fct-source": "src/Data-Array-Accelerate-Language.html#foreignExp2",
        "fct-type": "function",
        "title": "foreignExp2"
      },
      "index": {
        "description": "Call foreign function with foreign implementations for two different backends",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "foreignExp2",
        "normalized": "a b c-\u003ea b c-\u003e(Exp b-\u003eExp c)-\u003eExp b-\u003eExp c",
        "package": "accelerate",
        "partial": "Exp",
        "signature": "ff e res-\u003eff e res-\u003e(Exp e-\u003eExp res)-\u003eExp e-\u003eExp res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:foreignExp3",
      "description": {
        "fct-descr": "\u003cp\u003eCall a foreign function with foreign implementations for three different backends.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "ff1 e res -\u003e ff2 e res -\u003e ff3 e res -\u003e (Exp e -\u003e Exp res) -\u003e Exp e -\u003e Exp res",
        "fct-source": "src/Data-Array-Accelerate-Language.html#foreignExp3",
        "fct-type": "function",
        "title": "foreignExp3"
      },
      "index": {
        "description": "Call foreign function with foreign implementations for three different backends",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "foreignExp3",
        "normalized": "a b c-\u003ea b c-\u003ea b c-\u003e(Exp b-\u003eExp c)-\u003eExp b-\u003eExp c",
        "package": "accelerate",
        "partial": "Exp",
        "signature": "ff e res-\u003eff e res-\u003eff e res-\u003e(Exp e-\u003eExp res)-\u003eExp e-\u003eExp res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:fromFunction",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an array from its representation function.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "sh -\u003e (sh -\u003e e) -\u003e Array sh e",
        "fct-source": "src/Data-Array-Accelerate.html#fromFunction",
        "fct-type": "function",
        "title": "fromFunction"
      },
      "index": {
        "description": "Create an array from its representation function",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "fromFunction",
        "normalized": "a-\u003e(a-\u003eb)-\u003eArray a b",
        "package": "accelerate",
        "partial": "Function",
        "signature": "sh-\u003e(sh-\u003ee)-\u003eArray sh e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:fromIArray",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/code\u003e to an accelerated array.\n\u003c/p\u003e\u003cp\u003eWhile the type signature mentions Accelerate internals that are not exported,\n in practice satisfying the type equality is straight forward. The index type\n \u003ccode\u003eix\u003c/code\u003e must be the unit type \u003ccode\u003e()\u003c/code\u003e for singleton arrays, or an \u003ccode\u003eInt\u003c/code\u003e or tuple of\n \u003ccode\u003eInt\u003c/code\u003e's for multidimensional arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "a ix e -\u003e Array sh e",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#fromIArray",
        "fct-type": "function",
        "title": "fromIArray"
      },
      "index": {
        "description": "Convert an IArray to an accelerated array While the type signature mentions Accelerate internals that are not exported in practice satisfying the type equality is straight forward The index type ix must be the unit type for singleton arrays or an Int or tuple of Int for multidimensional arrays",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "fromIArray",
        "normalized": "a b c-\u003eArray d c",
        "package": "accelerate",
        "partial": "IArray",
        "signature": "a ix e-\u003eArray sh e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:fromIndex",
      "description": {
        "fct-descr": "\u003cp\u003eInverse of \u003ccode\u003e\u003ca\u003efromIndex\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp sh -\u003e Exp Int -\u003e Exp sh",
        "fct-source": "src/Data-Array-Accelerate-Language.html#fromIndex",
        "fct-type": "function",
        "title": "fromIndex"
      },
      "index": {
        "description": "Inverse of fromIndex",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "fromIndex",
        "normalized": "Exp a-\u003eExp Int-\u003eExp a",
        "package": "accelerate",
        "partial": "Index",
        "signature": "Exp sh-\u003eExp Int-\u003eExp sh"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:fromIntegral",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral coercion from integral types\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp a -\u003e Exp b",
        "fct-source": "src/Data-Array-Accelerate-Language.html#fromIntegral",
        "fct-type": "function",
        "title": "fromIntegral"
      },
      "index": {
        "description": "General coercion from integral types",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "fromIntegral",
        "normalized": "Exp a-\u003eExp b",
        "package": "accelerate",
        "partial": "Integral",
        "signature": "Exp a-\u003eExp b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a list, with elements in row-major order, into an accelerated array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "sh -\u003e [e] -\u003e Array sh e",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Convert list with elements in row-major order into an accelerated array",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "fromList",
        "normalized": "a-\u003e[b]-\u003eArray a b",
        "package": "accelerate",
        "partial": "List",
        "signature": "sh-\u003e[e]-\u003eArray sh e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:fst",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the first component of a pair.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "f (Plain (f a), Plain (f b)) -\u003e f a",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#fst",
        "fct-type": "function",
        "title": "fst"
      },
      "index": {
        "description": "Extract the first component of pair",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "fst",
        "normalized": "a(Plain(a b),Plain(a c))-\u003ea b",
        "package": "accelerate",
        "partial": "",
        "signature": "f(Plain(f a),Plain(f b))-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:gather",
      "description": {
        "fct-descr": "\u003cp\u003eCopy elements from source array to destination array according to a map. This\n   is a backpermute operation where a \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e vector encodes the output to input\n   index mapping.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e input  = [1, 9, 6, 4, 4, 2, 0, 1, 2]\n map    = [1, 3, 7, 2, 5, 3]\n\n output = [9, 4, 1, 6, 2, 4]\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Vector Int)-\u003e Acc (Vector e)-\u003e Acc (Vector e)",
        "fct-type": "function",
        "title": "gather"
      },
      "index": {
        "description": "Copy elements from source array to destination array according to map This is backpermute operation where map vector encodes the output to input index mapping For example input map output",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "gather",
        "normalized": "Acc(Vector Int)-\u003eAcc(Vector a)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Vector Int)-\u003eAcc(Vector e)-\u003eAcc(Vector e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:gatherIf",
      "description": {
        "fct-descr": "\u003cp\u003eConditionally copy elements from source array to destination array according\n   to a map. This is a backpermute operation where a \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e vector encodes the\n   output to input index mapping. In addition, there is a \u003ccode\u003emask\u003c/code\u003e vector, and an\n   associated predication function, that specifies whether an element will be\n   copied. If not copied, the output array assumes the default vector's value.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e default = [6, 6, 6, 6, 6, 6]\n map     = [1, 3, 7, 2, 5, 3]\n mask    = [3, 4, 9, 2, 7, 5]\n pred    = (\u003e 4)\n input   = [1, 9, 6, 4, 4, 2, 0, 1, 2]\n\n output  = [6, 6, 1, 6, 2, 4]\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Vector Int)-\u003e Acc (Vector e)-\u003e (Exp e -\u003e Exp Bool)-\u003e Acc (Vector e')-\u003e Acc (Vector e')-\u003e Acc (Vector e')",
        "fct-type": "function",
        "title": "gatherIf"
      },
      "index": {
        "description": "Conditionally copy elements from source array to destination array according to map This is backpermute operation where map vector encodes the output to input index mapping In addition there is mask vector and an associated predication function that specifies whether an element will be copied If not copied the output array assumes the default vector value For example default map mask pred input output",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "gatherIf",
        "normalized": "Acc(Vector Int)-\u003eAcc(Vector a)-\u003e(Exp a-\u003eExp Bool)-\u003eAcc(Vector b)-\u003eAcc(Vector b)-\u003eAcc(Vector b)",
        "package": "accelerate",
        "partial": "If",
        "signature": "Acc(Vector Int)-\u003eAcc(Vector e)-\u003e(Exp e-\u003eExp Bool)-\u003eAcc(Vector e')-\u003eAcc(Vector e')-\u003eAcc(Vector e')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:generate",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a new array by applying a function to each index.\n\u003c/p\u003e\u003cp\u003eFor example, the following will generate a one-dimensional array\n (\u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e) of three floating point numbers:\n\u003c/p\u003e\u003cpre\u003e generate (index1 3) (\\_ -\u003e 1.2)\n\u003c/pre\u003e\u003cp\u003eOr, equivalently:\n\u003c/p\u003e\u003cpre\u003e generate (constant (Z :. (3::Int))) (\\_ -\u003e 1.2)\n\u003c/pre\u003e\u003cp\u003eFinally, the following will create an array equivalent to '[1..10]':\n\u003c/p\u003e\u003cpre\u003e generate (index1 10) $ \\ ix -\u003e\n          let (Z :. i) = unlift ix\n          in fromIntegral i\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp ix -\u003e (Exp ix -\u003e Exp a) -\u003e Acc (Array ix a)",
        "fct-source": "src/Data-Array-Accelerate-Language.html#generate",
        "fct-type": "function",
        "title": "generate"
      },
      "index": {
        "description": "Construct new array by applying function to each index For example the following will generate one-dimensional array Vector of three floating point numbers generate index1 Or equivalently generate constant Int Finally the following will create an array equivalent to generate index1 ix let unlift ix in fromIntegral",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "generate",
        "normalized": "Exp a-\u003e(Exp a-\u003eExp b)-\u003eAcc(Array a b)",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp ix-\u003e(Exp ix-\u003eExp a)-\u003eAcc(Array ix a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:ignore",
      "description": {
        "fct-descr": "\u003cp\u003eMagic value identifying elements that are ignored in a forward permutation.\n Note that this currently does not work for singleton arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp ix",
        "fct-source": "src/Data-Array-Accelerate-Language.html#ignore",
        "fct-type": "function",
        "title": "ignore"
      },
      "index": {
        "description": "Magic value identifying elements that are ignored in forward permutation Note that this currently does not work for singleton arrays",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "ignore",
        "normalized": "",
        "package": "accelerate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:ilift1",
      "description": {
        "fct-descr": "\u003cp\u003eLift a unary function to a computation over rank-1 indices.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp Int -\u003e Exp Int) -\u003e Exp DIM1 -\u003e Exp DIM1",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#ilift1",
        "fct-type": "function",
        "title": "ilift1"
      },
      "index": {
        "description": "Lift unary function to computation over rank-1 indices",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "ilift1",
        "normalized": "(Exp Int-\u003eExp Int)-\u003eExp DIM-\u003eExp DIM",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp Int-\u003eExp Int)-\u003eExp DIM-\u003eExp DIM"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:ilift2",
      "description": {
        "fct-descr": "\u003cp\u003eLift a binary function to a computation over rank-1 indices.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp Int -\u003e Exp Int -\u003e Exp Int) -\u003e Exp DIM1 -\u003e Exp DIM1 -\u003e Exp DIM1",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#ilift2",
        "fct-type": "function",
        "title": "ilift2"
      },
      "index": {
        "description": "Lift binary function to computation over rank-1 indices",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "ilift2",
        "normalized": "(Exp Int-\u003eExp Int-\u003eExp Int)-\u003eExp DIM-\u003eExp DIM-\u003eExp DIM",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp Int-\u003eExp Int-\u003eExp Int)-\u003eExp DIM-\u003eExp DIM-\u003eExp DIM"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:index0",
      "description": {
        "fct-descr": "\u003cp\u003eThe one index for a rank-0 array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp Z",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#index0",
        "fct-type": "function",
        "title": "index0"
      },
      "index": {
        "description": "The one index for rank-0 array",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "index0",
        "normalized": "",
        "package": "accelerate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:index1",
      "description": {
        "fct-descr": "\u003cp\u003eTurn an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e expression into a rank-1 indexing expression.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp i -\u003e Exp (Z :. i)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#index1",
        "fct-type": "function",
        "title": "index1"
      },
      "index": {
        "description": "Turn an Int expression into rank-1 indexing expression",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "index1",
        "normalized": "Exp a-\u003eExp(Z a)",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp i-\u003eExp(Z i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:index2",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a rank-2 index from two Exp Int`s\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp i -\u003e Exp i -\u003e Exp ((Z :. i) :. i)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#index2",
        "fct-type": "function",
        "title": "index2"
      },
      "index": {
        "description": "Creates rank-2 index from two Exp Int",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "index2",
        "normalized": "Exp a-\u003eExp a-\u003eExp((Z a)a)",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp i-\u003eExp i-\u003eExp((Z i)i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:indexArray",
      "description": {
        "fct-descr": "\u003cp\u003eArray indexing in plain Haskell code.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Array sh e -\u003e sh -\u003e e",
        "fct-source": "src/Data-Array-Accelerate.html#indexArray",
        "fct-type": "function",
        "title": "indexArray"
      },
      "index": {
        "description": "Array indexing in plain Haskell code",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "indexArray",
        "normalized": "Array a b-\u003ea-\u003eb",
        "package": "accelerate",
        "partial": "Array",
        "signature": "Array sh e-\u003esh-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:indexHead",
      "description": {
        "fct-descr": "\u003cp\u003eGet the outermost dimension of a shape\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp (sh :. Int) -\u003e Exp Int",
        "fct-source": "src/Data-Array-Accelerate-Language.html#indexHead",
        "fct-type": "function",
        "title": "indexHead"
      },
      "index": {
        "description": "Get the outermost dimension of shape",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "indexHead",
        "normalized": "Exp(a Int)-\u003eExp Int",
        "package": "accelerate",
        "partial": "Head",
        "signature": "Exp(sh Int)-\u003eExp Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:indexTail",
      "description": {
        "fct-descr": "\u003cp\u003eGet all but the outermost element of a shape\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp (sh :. Int) -\u003e Exp sh",
        "fct-source": "src/Data-Array-Accelerate-Language.html#indexTail",
        "fct-type": "function",
        "title": "indexTail"
      },
      "index": {
        "description": "Get all but the outermost element of shape",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "indexTail",
        "normalized": "Exp(a Int)-\u003eExp a",
        "package": "accelerate",
        "partial": "Tail",
        "signature": "Exp(sh Int)-\u003eExp sh"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:init",
      "description": {
        "fct-descr": "\u003cp\u003eYield all but the last element of the input vector. The vector must not be\n   empty.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Vector e) -\u003e Acc (Vector e)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#init",
        "fct-type": "function",
        "title": "init"
      },
      "index": {
        "description": "Yield all but the last element of the input vector The vector must not be empty",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "init",
        "normalized": "Acc(Vector a)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Vector e)-\u003eAcc(Vector e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:intersect",
      "description": {
        "fct-descr": "\u003cp\u003eIntersection of two shapes\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp sh -\u003e Exp sh -\u003e Exp sh",
        "fct-source": "src/Data-Array-Accelerate-Language.html#intersect",
        "fct-type": "function",
        "title": "intersect"
      },
      "index": {
        "description": "Intersection of two shapes",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "intersect",
        "normalized": "Exp a-\u003eExp a-\u003eExp a",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp sh-\u003eExp sh-\u003eExp sh"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:iterate",
      "description": {
        "fct-descr": "\u003cp\u003eRepeatedly apply a function a fixed number of times\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp Int -\u003e (Exp a -\u003e Exp a) -\u003e Exp a -\u003e Exp a",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#iterate",
        "fct-type": "function",
        "title": "iterate"
      },
      "index": {
        "description": "Repeatedly apply function fixed number of times",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "iterate",
        "normalized": "Exp Int-\u003e(Exp a-\u003eExp a)-\u003eExp a-\u003eExp a",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp Int-\u003e(Exp a-\u003eExp a)-\u003eExp a-\u003eExp a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:lift",
      "description": {
        "fct-descr": "\u003cp\u003eLift the given value into a surface type \u003ccode\u003ec\u003c/code\u003e --- either \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e for scalar\n expressions or \u003ccode\u003e\u003ca\u003eAcc\u003c/a\u003e\u003c/code\u003e for array computations. The value may already contain\n subexpressions in \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "e -\u003e c (Plain e)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#lift",
        "fct-type": "method",
        "title": "lift"
      },
      "index": {
        "description": "Lift the given value into surface type either Exp for scalar expressions or Acc for array computations The value may already contain subexpressions in",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "lift",
        "normalized": "a-\u003eb(Plain a)",
        "package": "accelerate",
        "partial": "",
        "signature": "e-\u003ec(Plain e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:lift1",
      "description": {
        "fct-descr": "\u003cp\u003eLift a unary function into \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(e1 -\u003e e2) -\u003e Exp (Plain e1) -\u003e Exp (Plain e2)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#lift1",
        "fct-type": "function",
        "title": "lift1"
      },
      "index": {
        "description": "Lift unary function into Exp",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "lift1",
        "normalized": "(a-\u003ea)-\u003eExp(Plain a)-\u003eExp(Plain a)",
        "package": "accelerate",
        "partial": "",
        "signature": "(e-\u003ee)-\u003eExp(Plain e)-\u003eExp(Plain e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:lift2",
      "description": {
        "fct-descr": "\u003cp\u003eLift a binary function into \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(e1 -\u003e e2 -\u003e e3) -\u003e Exp (Plain e1) -\u003e Exp (Plain e2) -\u003e Exp (Plain e3)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#lift2",
        "fct-type": "function",
        "title": "lift2"
      },
      "index": {
        "description": "Lift binary function into Exp",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "lift2",
        "normalized": "(a-\u003ea-\u003ea)-\u003eExp(Plain a)-\u003eExp(Plain a)-\u003eExp(Plain a)",
        "package": "accelerate",
        "partial": "",
        "signature": "(e-\u003ee-\u003ee)-\u003eExp(Plain e)-\u003eExp(Plain e)-\u003eExp(Plain e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eApply the given function element-wise to the given array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp b) -\u003e Acc (Array ix a) -\u003e Acc (Array ix b)",
        "fct-source": "src/Data-Array-Accelerate-Language.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Apply the given function element-wise to the given array",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "map",
        "normalized": "(Exp a-\u003eExp b)-\u003eAcc(Array c a)-\u003eAcc(Array c b)",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp a-\u003eExp b)-\u003eAcc(Array ix a)-\u003eAcc(Array ix b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:maximum",
      "description": {
        "fct-descr": "\u003cp\u003eYield the maximum element of an array. The array must not be empty.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh e) -\u003e Acc (Scalar e)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#maximum",
        "fct-type": "function",
        "title": "maximum"
      },
      "index": {
        "description": "Yield the maximum element of an array The array must not be empty",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "maximum",
        "normalized": "Acc(Array a b)-\u003eAcc(Scalar b)",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh e)-\u003eAcc(Scalar e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:minimum",
      "description": {
        "fct-descr": "\u003cp\u003eYield the minimum element of an array. The array must not be empty.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh e) -\u003e Acc (Scalar e)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#minimum",
        "fct-type": "function",
        "title": "minimum"
      },
      "index": {
        "description": "Yield the minimum element of an array The array must not be empty",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "minimum",
        "normalized": "Acc(Array a b)-\u003eAcc(Scalar b)",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh e)-\u003eAcc(Scalar e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:not",
      "description": {
        "fct-descr": "\u003cp\u003eNegation\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp Bool -\u003e Exp Bool",
        "fct-source": "src/Data-Array-Accelerate-Language.html#not",
        "fct-type": "function",
        "title": "not"
      },
      "index": {
        "description": "Negation",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "not",
        "normalized": "Exp Bool-\u003eExp Bool",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp Bool-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether an array is empty\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array ix e) -\u003e Exp Bool",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Test whether an array is empty",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "null",
        "normalized": "Acc(Array a b)-\u003eExp Bool",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array ix e)-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:odd",
      "description": {
        "fct-descr": "\u003cp\u003ereturn if the integer is odd\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp a -\u003e Exp Bool",
        "fct-source": "src/Data-Array-Accelerate-Language.html#odd",
        "fct-type": "function",
        "title": "odd"
      },
      "index": {
        "description": "return if the integer is odd",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "odd",
        "normalized": "Exp a-\u003eExp Bool",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp a-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:or",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if any element is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh Bool) -\u003e Acc (Scalar Bool)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#or",
        "fct-type": "function",
        "title": "or"
      },
      "index": {
        "description": "Check if any element is True",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "or",
        "normalized": "Acc(Array a Bool)-\u003eAcc(Scalar Bool)",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh Bool)-\u003eAcc(Scalar Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:permute",
      "description": {
        "fct-descr": "\u003cp\u003eForward permutation specified by an index mapping. The result array is\n initialised with the given defaults and any further values that are permuted\n into the result array are added to the current value using the given\n combination function.\n\u003c/p\u003e\u003cp\u003eThe combination function must be \u003cem\u003eassociative\u003c/em\u003e and \u003cem\u003ecommutative\u003c/em\u003e. Elements\n that are mapped to the magic value \u003ccode\u003e\u003ca\u003eignore\u003c/a\u003e\u003c/code\u003e by the permutation function are\n dropped.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a)-\u003e Acc (Array ix' a)-\u003e (Exp ix -\u003e Exp ix')-\u003e Acc (Array ix a)-\u003e Acc (Array ix' a)",
        "fct-type": "function",
        "title": "permute"
      },
      "index": {
        "description": "Forward permutation specified by an index mapping The result array is initialised with the given defaults and any further values that are permuted into the result array are added to the current value using the given combination function The combination function must be associative and commutative Elements that are mapped to the magic value ignore by the permutation function are dropped",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "permute",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eAcc(Array b a)-\u003e(Exp c-\u003eExp b)-\u003eAcc(Array c a)-\u003eAcc(Array b a)",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eAcc(Array ix' a)-\u003e(Exp ix-\u003eExp ix')-\u003eAcc(Array ix a)-\u003eAcc(Array ix' a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:postscanl",
      "description": {
        "fct-descr": "\u003cp\u003eLeft-to-right postscan, a variant of \u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e with an initial value.  Denotationally, we have\n\u003c/p\u003e\u003cpre\u003e postscanl f e = map (e `f`) . scanl1 f\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Exp a -\u003e Acc (Vector a) -\u003e Acc (Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#postscanl",
        "fct-type": "function",
        "title": "postscanl"
      },
      "index": {
        "description": "Left-to-right postscan variant of scanl1 with an initial value Denotationally we have postscanl map scanl1",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "postscanl",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:postscanlSeg",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented version of \u003ccode\u003e\u003ca\u003epostscanl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Exp a -\u003e Acc (Vector a) -\u003e Acc (Segments i) -\u003e Acc (Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#postscanlSeg",
        "fct-type": "function",
        "title": "postscanlSeg"
      },
      "index": {
        "description": "Segmented version of postscanl",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "postscanlSeg",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Segments b)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "Seg",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Segments i)-\u003eAcc(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:postscanr",
      "description": {
        "fct-descr": "\u003cp\u003eRight-to-left postscan, a variant of \u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e with an initial value.  Denotationally, we have\n\u003c/p\u003e\u003cpre\u003e postscanr f e = map (e `f`) . scanr1 f\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Exp a -\u003e Acc (Vector a) -\u003e Acc (Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#postscanr",
        "fct-type": "function",
        "title": "postscanr"
      },
      "index": {
        "description": "Right-to-left postscan variant of scanr1 with an initial value Denotationally we have postscanr map scanr1",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "postscanr",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:postscanrSeg",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented version of \u003ccode\u003e\u003ca\u003epostscanr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Exp a -\u003e Acc (Vector a) -\u003e Acc (Segments i) -\u003e Acc (Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#postscanrSeg",
        "fct-type": "function",
        "title": "postscanrSeg"
      },
      "index": {
        "description": "Segmented version of postscanr",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "postscanrSeg",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Segments b)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "Seg",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Segments i)-\u003eAcc(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:prescanl",
      "description": {
        "fct-descr": "\u003cp\u003eLeft-to-right prescan (aka exclusive scan).  As for \u003ccode\u003escan\u003c/code\u003e, the first argument must be an\n \u003cem\u003eassociative\u003c/em\u003e function.  Denotationally, we have\n\u003c/p\u003e\u003cpre\u003e prescanl f e = Prelude.fst . scanl' f e\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Exp a -\u003e Acc (Vector a) -\u003e Acc (Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#prescanl",
        "fct-type": "function",
        "title": "prescanl"
      },
      "index": {
        "description": "Left-to-right prescan aka exclusive scan As for scan the first argument must be an associative function Denotationally we have prescanl Prelude.fst scanl",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "prescanl",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:prescanlSeg",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented version of \u003ccode\u003e\u003ca\u003eprescanl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Exp a -\u003e Acc (Vector a) -\u003e Acc (Segments i) -\u003e Acc (Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#prescanlSeg",
        "fct-type": "function",
        "title": "prescanlSeg"
      },
      "index": {
        "description": "Segmented version of prescanl",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "prescanlSeg",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Segments b)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "Seg",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Segments i)-\u003eAcc(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:prescanr",
      "description": {
        "fct-descr": "\u003cp\u003eRight-to-left prescan (aka exclusive scan).  As for \u003ccode\u003escan\u003c/code\u003e, the first argument must be an\n \u003cem\u003eassociative\u003c/em\u003e function.  Denotationally, we have\n\u003c/p\u003e\u003cpre\u003e prescanr f e = Prelude.fst . scanr' f e\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Exp a -\u003e Acc (Vector a) -\u003e Acc (Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#prescanr",
        "fct-type": "function",
        "title": "prescanr"
      },
      "index": {
        "description": "Right-to-left prescan aka exclusive scan As for scan the first argument must be an associative function Denotationally we have prescanr Prelude.fst scanr",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "prescanr",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:prescanrSeg",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented version of \u003ccode\u003e\u003ca\u003eprescanr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Exp a -\u003e Acc (Vector a) -\u003e Acc (Segments i) -\u003e Acc (Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#prescanrSeg",
        "fct-type": "function",
        "title": "prescanrSeg"
      },
      "index": {
        "description": "Segmented version of prescanr",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "prescanrSeg",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Segments b)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "Seg",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Segments i)-\u003eAcc(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:product",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the product of the elements\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh e) -\u003e Acc (Scalar e)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#product",
        "fct-type": "function",
        "title": "product"
      },
      "index": {
        "description": "Compute the product of the elements",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "product",
        "normalized": "Acc(Array a b)-\u003eAcc(Scalar b)",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh e)-\u003eAcc(Scalar e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:replicate",
      "description": {
        "fct-descr": "\u003cp\u003eReplicate an array across one or more dimensions as specified by the\n \u003cem\u003egeneralised\u003c/em\u003e array index provided as the first argument.\n\u003c/p\u003e\u003cp\u003eFor example, assuming \u003ccode\u003earr\u003c/code\u003e is a vector (one-dimensional array),\n\u003c/p\u003e\u003cpre\u003e replicate (Z :.2 :.All :.3) arr\n\u003c/pre\u003e\u003cp\u003eyields a three dimensional array, where \u003ccode\u003earr\u003c/code\u003e is replicated twice across the\n first and three times across the third dimension.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp slix -\u003e Acc (Array (SliceShape slix) e) -\u003e Acc (Array (FullShape slix) e)",
        "fct-source": "src/Data-Array-Accelerate-Language.html#replicate",
        "fct-type": "function",
        "title": "replicate"
      },
      "index": {
        "description": "Replicate an array across one or more dimensions as specified by the generalised array index provided as the first argument For example assuming arr is vector one-dimensional array replicate All arr yields three dimensional array where arr is replicated twice across the first and three times across the third dimension",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "replicate",
        "normalized": "Exp a-\u003eAcc(Array(SliceShape a)b)-\u003eAcc(Array(FullShape a)b)",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp slix-\u003eAcc(Array(SliceShape slix)e)-\u003eAcc(Array(FullShape slix)e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:reshape",
      "description": {
        "fct-descr": "\u003cp\u003eChange the shape of an array without altering its contents. The \u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e of\n the source and result arrays must be identical.\n\u003c/p\u003e\u003cpre\u003e precondition: size ix == size ix'\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp ix -\u003e Acc (Array ix' e) -\u003e Acc (Array ix e)",
        "fct-source": "src/Data-Array-Accelerate-Language.html#reshape",
        "fct-type": "function",
        "title": "reshape"
      },
      "index": {
        "description": "Change the shape of an array without altering its contents The size of the source and result arrays must be identical precondition size ix size ix",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "reshape",
        "normalized": "Exp a-\u003eAcc(Array b c)-\u003eAcc(Array a c)",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp ix-\u003eAcc(Array ix' e)-\u003eAcc(Array ix e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:reverse",
      "description": {
        "fct-descr": "\u003cp\u003eReverse the elements of a vector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Vector e) -\u003e Acc (Vector e)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#reverse",
        "fct-type": "function",
        "title": "reverse"
      },
      "index": {
        "description": "Reverse the elements of vector",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "reverse",
        "normalized": "Acc(Vector a)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Vector e)-\u003eAcc(Vector e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:rotate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erotate\u003c/a\u003e\u003c/code\u003e x i\u003c/code\u003e rotates \u003ccode\u003ex\u003c/code\u003e left by \u003ccode\u003ei\u003c/code\u003e bits if \u003ccode\u003ei\u003c/code\u003e is positive, or right by\n \u003ccode\u003e-i\u003c/code\u003e bits otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp t -\u003e Exp Int -\u003e Exp t",
        "fct-source": "src/Data-Array-Accelerate-Language.html#rotate",
        "fct-type": "function",
        "title": "rotate"
      },
      "index": {
        "description": "rotate rotates left by bits if is positive or right by bits otherwise",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "rotate",
        "normalized": "Exp a-\u003eExp Int-\u003eExp a",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp t-\u003eExp Int-\u003eExp t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:rotateL",
      "description": {
        "fct-descr": "\u003cp\u003eRotate the argument left by the specified number of bits\n (which must be non-negative).\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp t -\u003e Exp Int -\u003e Exp t",
        "fct-source": "src/Data-Array-Accelerate-Language.html#rotateL",
        "fct-type": "function",
        "title": "rotateL"
      },
      "index": {
        "description": "Rotate the argument left by the specified number of bits which must be non-negative",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "rotateL",
        "normalized": "Exp a-\u003eExp Int-\u003eExp a",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp t-\u003eExp Int-\u003eExp t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:rotateR",
      "description": {
        "fct-descr": "\u003cp\u003eRotate the argument right by the specified number of bits\n (which must be non-negative).\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp t -\u003e Exp Int -\u003e Exp t",
        "fct-source": "src/Data-Array-Accelerate-Language.html#rotateR",
        "fct-type": "function",
        "title": "rotateR"
      },
      "index": {
        "description": "Rotate the argument right by the specified number of bits which must be non-negative",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "rotateR",
        "normalized": "Exp a-\u003eExp Int-\u003eExp a",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp t-\u003eExp Int-\u003eExp t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:round",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eround x\u003c/code\u003e returns the nearest integer to \u003ccode\u003ex\u003c/code\u003e, or the even integer if \u003ccode\u003ex\u003c/code\u003e is\n equidistant between two integers.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp a -\u003e Exp b",
        "fct-source": "src/Data-Array-Accelerate-Language.html#round",
        "fct-type": "function",
        "title": "round"
      },
      "index": {
        "description": "round returns the nearest integer to or the even integer if is equidistant between two integers",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "round",
        "normalized": "Exp a-\u003eExp b",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp a-\u003eExp b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:scanl",
      "description": {
        "fct-descr": "\u003cp\u003eData.List style left-to-right scan, but with the additional restriction\n that the first argument needs to be an \u003cem\u003eassociative\u003c/em\u003e function to enable an\n efficient parallel implementation. The initial value (second argument) may be\n arbitrary.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Exp a -\u003e Acc (Vector a) -\u003e Acc (Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Language.html#scanl",
        "fct-type": "function",
        "title": "scanl"
      },
      "index": {
        "description": "Data.List style left-to-right scan but with the additional restriction that the first argument needs to be an associative function to enable an efficient parallel implementation The initial value second argument may be arbitrary",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "scanl",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:scanl-39-",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e, where the final result of the reduction is returned\n separately. Denotationally, we have\n\u003c/p\u003e\u003cpre\u003e scanl' f e arr = (init res, unit (res!len))\n   where\n     len = shape arr\n     res = scanl f e arr\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Exp a -\u003e Acc (Vector a) -\u003e (Acc (Vector a), Acc (Scalar a))",
        "fct-source": "src/Data-Array-Accelerate-Language.html#scanl%27",
        "fct-type": "function",
        "title": "scanl'"
      },
      "index": {
        "description": "Variant of scanl where the final result of the reduction is returned separately Denotationally we have scanl arr init res unit res len where len shape arr res scanl arr",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "scanl'",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003e(Acc(Vector a),Acc(Scalar a))",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003e(Acc(Vector a),Acc(Scalar a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:scanl-39-Seg",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented version of \u003ccode\u003e\u003ca\u003escanl'\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe first element of the resulting tuple is a vector of scanned values. The\n second element is a vector of segment scan totals and has the same size as\n the segment vector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Exp a -\u003e Acc (Vector a) -\u003e Acc (Segments i) -\u003e Acc (Vector a, Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#scanl%27Seg",
        "fct-type": "function",
        "title": "scanl'Seg"
      },
      "index": {
        "description": "Segmented version of scanl The first element of the resulting tuple is vector of scanned values The second element is vector of segment scan totals and has the same size as the segment vector",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "scanl'Seg",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Segments b)-\u003eAcc(Vector a,Vector a)",
        "package": "accelerate",
        "partial": "Seg",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Segments i)-\u003eAcc(Vector a,Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:scanl1",
      "description": {
        "fct-descr": "\u003cp\u003eData.List style left-to-right scan without an initial value (aka inclusive\n scan).  Again, the first argument needs to be an \u003cem\u003eassociative\u003c/em\u003e function.\n Denotationally, we have\n\u003c/p\u003e\u003cpre\u003e scanl1 f e arr = tail (scanl f e arr)\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Acc (Vector a) -\u003e Acc (Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Language.html#scanl1",
        "fct-type": "function",
        "title": "scanl1"
      },
      "index": {
        "description": "Data.List style left-to-right scan without an initial value aka inclusive scan Again the first argument needs to be an associative function Denotationally we have scanl1 arr tail scanl arr",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "scanl1",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eAcc(Vector a)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eAcc(Vector a)-\u003eAcc(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:scanl1Seg",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented version of \u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Acc (Vector a) -\u003e Acc (Segments i) -\u003e Acc (Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#scanl1Seg",
        "fct-type": "function",
        "title": "scanl1Seg"
      },
      "index": {
        "description": "Segmented version of scanl1",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "scanl1Seg",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eAcc(Vector a)-\u003eAcc(Segments b)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "Seg",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eAcc(Vector a)-\u003eAcc(Segments i)-\u003eAcc(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:scanlSeg",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented version of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Exp a -\u003e Acc (Vector a) -\u003e Acc (Segments i) -\u003e Acc (Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#scanlSeg",
        "fct-type": "function",
        "title": "scanlSeg"
      },
      "index": {
        "description": "Segmented version of scanl",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "scanlSeg",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Segments b)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "Seg",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Segments i)-\u003eAcc(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:scanr",
      "description": {
        "fct-descr": "\u003cp\u003eRight-to-left variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Exp a -\u003e Acc (Vector a) -\u003e Acc (Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Language.html#scanr",
        "fct-type": "function",
        "title": "scanr"
      },
      "index": {
        "description": "Right-to-left variant of scanl",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "scanr",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:scanr-39-",
      "description": {
        "fct-descr": "\u003cp\u003eRight-to-left variant of \u003ccode\u003e\u003ca\u003escanl'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Exp a -\u003e Acc (Vector a) -\u003e (Acc (Vector a), Acc (Scalar a))",
        "fct-source": "src/Data-Array-Accelerate-Language.html#scanr%27",
        "fct-type": "function",
        "title": "scanr'"
      },
      "index": {
        "description": "Right-to-left variant of scanl",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "scanr'",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003e(Acc(Vector a),Acc(Scalar a))",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003e(Acc(Vector a),Acc(Scalar a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:scanr-39-Seg",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented version of \u003ccode\u003e\u003ca\u003escanr'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Exp a -\u003e Acc (Vector a) -\u003e Acc (Segments i) -\u003e Acc (Vector a, Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#scanr%27Seg",
        "fct-type": "function",
        "title": "scanr'Seg"
      },
      "index": {
        "description": "Segmented version of scanr",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "scanr'Seg",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Segments b)-\u003eAcc(Vector a,Vector a)",
        "package": "accelerate",
        "partial": "Seg",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Segments i)-\u003eAcc(Vector a,Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:scanr1",
      "description": {
        "fct-descr": "\u003cp\u003eRight-to-left variant of \u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Acc (Vector a) -\u003e Acc (Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Language.html#scanr1",
        "fct-type": "function",
        "title": "scanr1"
      },
      "index": {
        "description": "Right-to-left variant of scanl1",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "scanr1",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eAcc(Vector a)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eAcc(Vector a)-\u003eAcc(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:scanr1Seg",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented version of \u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Acc (Vector a) -\u003e Acc (Segments i) -\u003e Acc (Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#scanr1Seg",
        "fct-type": "function",
        "title": "scanr1Seg"
      },
      "index": {
        "description": "Segmented version of scanr1",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "scanr1Seg",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eAcc(Vector a)-\u003eAcc(Segments b)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "Seg",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eAcc(Vector a)-\u003eAcc(Segments i)-\u003eAcc(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:scanrSeg",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented version of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp a -\u003e Exp a) -\u003e Exp a -\u003e Acc (Vector a) -\u003e Acc (Segments i) -\u003e Acc (Vector a)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#scanrSeg",
        "fct-type": "function",
        "title": "scanrSeg"
      },
      "index": {
        "description": "Segmented version of scanr",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "scanrSeg",
        "normalized": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Segments b)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "Seg",
        "signature": "(Exp a-\u003eExp a-\u003eExp a)-\u003eExp a-\u003eAcc(Vector a)-\u003eAcc(Segments i)-\u003eAcc(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:scatter",
      "description": {
        "fct-descr": "\u003cp\u003eCopy elements from source array to destination array according to a map. This\n   is a forward-permute operation where a \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e vector encodes an input to output\n   index mapping. Output elements for indices that are not mapped assume the\n   default vector's value.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e default = [0, 0, 0, 0, 0, 0, 0, 0, 0]\n map     = [1, 3, 7, 2, 5, 8]\n input   = [1, 9, 6, 4, 4, 2, 5]\n\n output  = [0, 1, 4, 9, 0, 4, 0, 6, 2]\n\u003c/pre\u003e\u003cp\u003eNote if the same index appears in the map more than once, the result is\n   undefined. The map vector cannot be larger than the input vector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Vector Int)-\u003e Acc (Vector e)-\u003e Acc (Vector e)-\u003e Acc (Vector e)",
        "fct-type": "function",
        "title": "scatter"
      },
      "index": {
        "description": "Copy elements from source array to destination array according to map This is forward-permute operation where map vector encodes an input to output index mapping Output elements for indices that are not mapped assume the default vector value For example default map input output Note if the same index appears in the map more than once the result is undefined The map vector cannot be larger than the input vector",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "scatter",
        "normalized": "Acc(Vector Int)-\u003eAcc(Vector a)-\u003eAcc(Vector a)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Vector Int)-\u003eAcc(Vector e)-\u003eAcc(Vector e)-\u003eAcc(Vector e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:scatterIf",
      "description": {
        "fct-descr": "\u003cp\u003eConditionally copy elements from source array to destination array according\n   to a map. This is a forward-permute operation where a \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e vector encodes an\n   input to output index mapping. In addition, there is a \u003ccode\u003emask\u003c/code\u003e vector, and an\n   associated predicate function, that specifies whether an elements will be\n   copied. If not copied, the output array assumes the default vector's value.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e default = [0, 0, 0, 0, 0, 0, 0, 0, 0]\n map     = [1, 3, 7, 2, 5, 8]\n mask    = [3, 4, 9, 2, 7, 5]\n pred    = (\u003e 4)\n input   = [1, 9, 6, 4, 4, 2]\n\n output  = [0, 0, 0, 0, 0, 4, 0, 6, 2]\n\u003c/pre\u003e\u003cp\u003eNote if the same index appears in the map more than once, the result is\n   undefined. The map and input vector must be of the same length.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Vector Int)-\u003e Acc (Vector e)-\u003e (Exp e -\u003e Exp Bool)-\u003e Acc (Vector e')-\u003e Acc (Vector e')-\u003e Acc (Vector e')",
        "fct-type": "function",
        "title": "scatterIf"
      },
      "index": {
        "description": "Conditionally copy elements from source array to destination array according to map This is forward-permute operation where map vector encodes an input to output index mapping In addition there is mask vector and an associated predicate function that specifies whether an elements will be copied If not copied the output array assumes the default vector value For example default map mask pred input output Note if the same index appears in the map more than once the result is undefined The map and input vector must be of the same length",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "scatterIf",
        "normalized": "Acc(Vector Int)-\u003eAcc(Vector a)-\u003e(Exp a-\u003eExp Bool)-\u003eAcc(Vector b)-\u003eAcc(Vector b)-\u003eAcc(Vector b)",
        "package": "accelerate",
        "partial": "If",
        "signature": "Acc(Vector Int)-\u003eAcc(Vector e)-\u003e(Exp e-\u003eExp Bool)-\u003eAcc(Vector e')-\u003eAcc(Vector e')-\u003eAcc(Vector e')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:setBit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ex `setBit` i\u003c/code\u003e is the same as \u003ccode\u003ex .|. bit i\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp t -\u003e Exp Int -\u003e Exp t",
        "fct-source": "src/Data-Array-Accelerate-Language.html#setBit",
        "fct-type": "function",
        "title": "setBit"
      },
      "index": {
        "description": "setBit is the same as bit",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "setBit",
        "normalized": "Exp a-\u003eExp Int-\u003eExp a",
        "package": "accelerate",
        "partial": "Bit",
        "signature": "Exp t-\u003eExp Int-\u003eExp t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:sfoldl",
      "description": {
        "fct-descr": "\u003cp\u003eReduce along an innermost slice of an array \u003cem\u003esequentially\u003c/em\u003e, by applying a\n binary operator to a starting value and the array from left to right.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp b -\u003e Exp a) -\u003e Exp a -\u003e Exp sh -\u003e Acc (Array (sh :. Int) b) -\u003e Exp a",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#sfoldl",
        "fct-type": "function",
        "title": "sfoldl"
      },
      "index": {
        "description": "Reduce along an innermost slice of an array sequentially by applying binary operator to starting value and the array from left to right",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "sfoldl",
        "normalized": "(Exp a-\u003eExp b-\u003eExp a)-\u003eExp a-\u003eExp c-\u003eAcc(Array(c Int)b)-\u003eExp a",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp a-\u003eExp b-\u003eExp a)-\u003eExp a-\u003eExp sh-\u003eAcc(Array(sh Int)b)-\u003eExp a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:shape",
      "description": {
        "fct-descr": "\u003cp\u003eExpression form that yields the shape of an array\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array ix e) -\u003e Exp ix",
        "fct-source": "src/Data-Array-Accelerate-Language.html#shape",
        "fct-type": "function",
        "title": "shape"
      },
      "index": {
        "description": "Expression form that yields the shape of an array",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "shape",
        "normalized": "Acc(Array a b)-\u003eExp a",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array ix e)-\u003eExp ix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:shapeSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe total number of elements in an array of the given \u003ccode\u003e\u003ca\u003eShape\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp ix -\u003e Exp Int",
        "fct-source": "src/Data-Array-Accelerate-Language.html#shapeSize",
        "fct-type": "function",
        "title": "shapeSize"
      },
      "index": {
        "description": "The total number of elements in an array of the given Shape",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "shapeSize",
        "normalized": "Exp a-\u003eExp Int",
        "package": "accelerate",
        "partial": "Size",
        "signature": "Exp ix-\u003eExp Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:shift",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eshift\u003c/a\u003e\u003c/code\u003e x i\u003c/code\u003e shifts \u003ccode\u003ex\u003c/code\u003e left by \u003ccode\u003ei\u003c/code\u003e bits if \u003ccode\u003ei\u003c/code\u003e is positive, or right by\n \u003ccode\u003e-i\u003c/code\u003e bits otherwise. Right shifts perform sign extension on signed number\n types; i.e. they fill the top bits with 1 if the \u003ccode\u003ex\u003c/code\u003e is negative and with 0\n otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp t -\u003e Exp Int -\u003e Exp t",
        "fct-source": "src/Data-Array-Accelerate-Language.html#shift",
        "fct-type": "function",
        "title": "shift"
      },
      "index": {
        "description": "shift shifts left by bits if is positive or right by bits otherwise Right shifts perform sign extension on signed number types i.e they fill the top bits with if the is negative and with otherwise",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "shift",
        "normalized": "Exp a-\u003eExp Int-\u003eExp a",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp t-\u003eExp Int-\u003eExp t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:shiftL",
      "description": {
        "fct-descr": "\u003cp\u003eShift the argument left by the specified number of bits\n (which must be non-negative).\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp t -\u003e Exp Int -\u003e Exp t",
        "fct-source": "src/Data-Array-Accelerate-Language.html#shiftL",
        "fct-type": "function",
        "title": "shiftL"
      },
      "index": {
        "description": "Shift the argument left by the specified number of bits which must be non-negative",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "shiftL",
        "normalized": "Exp a-\u003eExp Int-\u003eExp a",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp t-\u003eExp Int-\u003eExp t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:shiftR",
      "description": {
        "fct-descr": "\u003cp\u003eShift the first argument right by the specified number of bits. The result\n is undefined for negative shift amounts and shift amounts greater or equal to\n the \u003ccode\u003ebitSize\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eRight shifts perform sign extension on signed number types; i.e. they fill\n the top bits with 1 if the \u003ccode\u003ex\u003c/code\u003e is negative and with 0 otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp t -\u003e Exp Int -\u003e Exp t",
        "fct-source": "src/Data-Array-Accelerate-Language.html#shiftR",
        "fct-type": "function",
        "title": "shiftR"
      },
      "index": {
        "description": "Shift the first argument right by the specified number of bits The result is undefined for negative shift amounts and shift amounts greater or equal to the bitSize Right shifts perform sign extension on signed number types i.e they fill the top bits with if the is negative and with otherwise",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "shiftR",
        "normalized": "Exp a-\u003eExp Int-\u003eExp a",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp t-\u003eExp Int-\u003eExp t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eExpression form that yields the size of an array\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array ix e) -\u003e Exp Int",
        "fct-source": "src/Data-Array-Accelerate-Language.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Expression form that yields the size of an array",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "size",
        "normalized": "Acc(Array a b)-\u003eExp Int",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array ix e)-\u003eExp Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:slice",
      "description": {
        "fct-descr": "\u003cp\u003eIndex an array with a \u003cem\u003egeneralised\u003c/em\u003e array index, supplied as the\n second argument. The result is a new array (possibly a singleton)\n containing the selected dimensions (\u003ccode\u003e\u003ca\u003eAll\u003c/a\u003e\u003c/code\u003es) in their entirety.\n\u003c/p\u003e\u003cp\u003eThis can be used to \u003cem\u003ecut out\u003c/em\u003e entire dimensions.  The opposite of\n \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e.  For example, if \u003ccode\u003emat\u003c/code\u003e is a two dimensional array, the\n following will select a specific row and yield a one dimensional\n result:\n\u003c/p\u003e\u003cpre\u003e slice mat (constant (Z :. (2::Int) :. All))\n\u003c/pre\u003e\u003cp\u003eA fully specified index (with no \u003ccode\u003e\u003ca\u003eAll\u003c/a\u003e\u003c/code\u003es) would return a single\n element (zero dimensional array).\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array (FullShape slix) e) -\u003e Exp slix -\u003e Acc (Array (SliceShape slix) e)",
        "fct-source": "src/Data-Array-Accelerate-Language.html#slice",
        "fct-type": "function",
        "title": "slice"
      },
      "index": {
        "description": "Index an array with generalised array index supplied as the second argument The result is new array possibly singleton containing the selected dimensions All in their entirety This can be used to cut out entire dimensions The opposite of replicate For example if mat is two dimensional array the following will select specific row and yield one dimensional result slice mat constant Int All fully specified index with no All would return single element zero dimensional array",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "slice",
        "normalized": "Acc(Array(FullShape a)b)-\u003eExp a-\u003eAcc(Array(SliceShape a)b)",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array(FullShape slix)e)-\u003eExp slix-\u003eAcc(Array(SliceShape slix)e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:sliceIndex",
      "description": {
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "sl -\u003e SliceIndex (EltRepr sl) (EltRepr (SliceShape sl)) (EltRepr (CoSliceShape sl)) (EltRepr (FullShape sl))",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#sliceIndex",
        "fct-type": "method",
        "title": "sliceIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "sliceIndex",
        "normalized": "a-\u003eSliceIndex(EltRepr a)(EltRepr(SliceShape a))(EltRepr(CoSliceShape a))(EltRepr(FullShape a))",
        "package": "accelerate",
        "partial": "Index",
        "signature": "sl-\u003eSliceIndex(EltRepr sl)(EltRepr(SliceShape sl))(EltRepr(CoSliceShape sl))(EltRepr(FullShape sl))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:slit",
      "description": {
        "fct-descr": "\u003cp\u003eYield a slit (slice) from the vector. The vector must contain at least\n   \u003ccode\u003ei + n\u003c/code\u003e elements. Denotationally, we have:\n\u003c/p\u003e\u003cpre\u003e slit i n = take n . drop i\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp Int -\u003e Exp Int -\u003e Acc (Vector e) -\u003e Acc (Vector e)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#slit",
        "fct-type": "function",
        "title": "slit"
      },
      "index": {
        "description": "Yield slit slice from the vector The vector must contain at least elements Denotationally we have slit take drop",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "slit",
        "normalized": "Exp Int-\u003eExp Int-\u003eAcc(Vector a)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp Int-\u003eExp Int-\u003eAcc(Vector e)-\u003eAcc(Vector e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:snd",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the second component of a pair.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "f (Plain (f a), Plain (f b)) -\u003e f b",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#snd",
        "fct-type": "function",
        "title": "snd"
      },
      "index": {
        "description": "Extract the second component of pair",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "snd",
        "normalized": "a(Plain(a b),Plain(a c))-\u003ea c",
        "package": "accelerate",
        "partial": "",
        "signature": "f(Plain(f a),Plain(f b))-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:stencil",
      "description": {
        "fct-descr": "\u003cp\u003eMap a stencil over an array.  In contrast to \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, the domain of a stencil function is an\n  entire \u003cem\u003eneighbourhood\u003c/em\u003e of each array element.  Neighbourhoods are sub-arrays centred around a\n  focal point.  They are not necessarily rectangular, but they are symmetric in each dimension\n  and have an extent of at least three in each dimensions &#8212; due to the symmetry requirement, the\n  extent is necessarily odd.  The focal point is the array position that is determined by the\n  stencil.\n\u003c/p\u003e\u003cp\u003eFor those array positions where the neighbourhood extends past the boundaries of the source\n  array, a boundary condition determines the contents of the out-of-bounds neighbourhood\n  positions.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(stencil -\u003e Exp b)-\u003e Boundary a-\u003e Acc (Array ix a)-\u003e Acc (Array ix b)",
        "fct-type": "function",
        "title": "stencil"
      },
      "index": {
        "description": "Map stencil over an array In contrast to map the domain of stencil function is an entire neighbourhood of each array element Neighbourhoods are sub-arrays centred around focal point They are not necessarily rectangular but they are symmetric in each dimension and have an extent of at least three in each dimensions due to the symmetry requirement the extent is necessarily odd The focal point is the array position that is determined by the stencil For those array positions where the neighbourhood extends past the boundaries of the source array boundary condition determines the contents of the out-of-bounds neighbourhood positions",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "stencil",
        "normalized": "(a-\u003eExp b)-\u003eBoundary c-\u003eAcc(Array d c)-\u003eAcc(Array d b)",
        "package": "accelerate",
        "partial": "",
        "signature": "(stencil-\u003eExp b)-\u003eBoundary a-\u003eAcc(Array ix a)-\u003eAcc(Array ix b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:stencil2",
      "description": {
        "fct-descr": "\u003cp\u003eMap a binary stencil of an array.  The extent of the resulting array is the\n intersection of the extents of the two source arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(stencil1 -\u003e stencil2 -\u003e Exp c)-\u003e Boundary a-\u003e Acc (Array ix a)-\u003e Boundary b-\u003e Acc (Array ix b)-\u003e Acc (Array ix c)",
        "fct-type": "function",
        "title": "stencil2"
      },
      "index": {
        "description": "Map binary stencil of an array The extent of the resulting array is the intersection of the extents of the two source arrays",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "stencil2",
        "normalized": "(a-\u003ea-\u003eExp b)-\u003eBoundary c-\u003eAcc(Array d c)-\u003eBoundary e-\u003eAcc(Array d e)-\u003eAcc(Array d b)",
        "package": "accelerate",
        "partial": "",
        "signature": "(stencil-\u003estencil-\u003eExp c)-\u003eBoundary a-\u003eAcc(Array ix a)-\u003eBoundary b-\u003eAcc(Array ix b)-\u003eAcc(Array ix c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:sum",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the sum of elements\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh e) -\u003e Acc (Scalar e)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#sum",
        "fct-type": "function",
        "title": "sum"
      },
      "index": {
        "description": "Compute the sum of elements",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "sum",
        "normalized": "Acc(Array a b)-\u003eAcc(Scalar b)",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh e)-\u003eAcc(Scalar e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:tail",
      "description": {
        "fct-descr": "\u003cp\u003eYield all but the first element of the input vector. The vector must not be\n   empty.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Vector e) -\u003e Acc (Vector e)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#tail",
        "fct-type": "function",
        "title": "tail"
      },
      "index": {
        "description": "Yield all but the first element of the input vector The vector must not be empty",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "tail",
        "normalized": "Acc(Vector a)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Vector e)-\u003eAcc(Vector e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003eYield the first \u003ccode\u003en\u003c/code\u003e elements of the input vector. The vector must contain\n no more than \u003ccode\u003en\u003c/code\u003e elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp Int -\u003e Acc (Vector e) -\u003e Acc (Vector e)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "Yield the first elements of the input vector The vector must contain no more than elements",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "take",
        "normalized": "Exp Int-\u003eAcc(Vector a)-\u003eAcc(Vector a)",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp Int-\u003eAcc(Vector e)-\u003eAcc(Vector e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:testBit",
      "description": {
        "fct-descr": "\u003cp\u003eReturn \u003ccode\u003eTrue\u003c/code\u003e if the \u003ccode\u003en\u003c/code\u003eth bit of the argument is 1\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp t -\u003e Exp Int -\u003e Exp Bool",
        "fct-source": "src/Data-Array-Accelerate-Language.html#testBit",
        "fct-type": "function",
        "title": "testBit"
      },
      "index": {
        "description": "Return True if the th bit of the argument is",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "testBit",
        "normalized": "Exp a-\u003eExp Int-\u003eExp Bool",
        "package": "accelerate",
        "partial": "Bit",
        "signature": "Exp t-\u003eExp Int-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:the",
      "description": {
        "fct-descr": "\u003cp\u003eExtraction of the element in a singleton array\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Scalar e) -\u003e Exp e",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#the",
        "fct-type": "function",
        "title": "the"
      },
      "index": {
        "description": "Extraction of the element in singleton array",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "the",
        "normalized": "Acc(Scalar a)-\u003eExp a",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Scalar e)-\u003eExp e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:toIArray",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an accelerated array to an \u003ccode\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Array sh e -\u003e a ix e",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#toIArray",
        "fct-type": "function",
        "title": "toIArray"
      },
      "index": {
        "description": "Convert an accelerated array to an IArray",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "toIArray",
        "normalized": "Array a b-\u003ec d b",
        "package": "accelerate",
        "partial": "IArray",
        "signature": "Array sh e-\u003ea ix e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:toIndex",
      "description": {
        "fct-descr": "\u003cp\u003eMap a multi-dimensional index into a linear, row-major representation of an\n array. The first argument is the array shape, the second is the index.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp sh -\u003e Exp sh -\u003e Exp Int",
        "fct-source": "src/Data-Array-Accelerate-Language.html#toIndex",
        "fct-type": "function",
        "title": "toIndex"
      },
      "index": {
        "description": "Map multi-dimensional index into linear row-major representation of an array The first argument is the array shape the second is the index",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "toIndex",
        "normalized": "Exp a-\u003eExp a-\u003eExp Int",
        "package": "accelerate",
        "partial": "Index",
        "signature": "Exp sh-\u003eExp sh-\u003eExp Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an accelerated array to a list in row-major order.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "forall sh e.  Array sh e -\u003e [e]",
        "fct-source": "src/Data-Array-Accelerate-Array-Sugar.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert an accelerated array to list in row-major order",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "toList",
        "normalized": "a b c Array b d-\u003e[d]",
        "package": "accelerate",
        "partial": "List",
        "signature": "forall sh e. Array sh e-\u003e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:transpose",
      "description": {
        "fct-descr": "\u003cp\u003eTranspose the rows and columns of a matrix.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array DIM2 e) -\u003e Acc (Array DIM2 e)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#transpose",
        "fct-type": "function",
        "title": "transpose"
      },
      "index": {
        "description": "Transpose the rows and columns of matrix",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "transpose",
        "normalized": "Acc(Array DIM a)-\u003eAcc(Array DIM a)",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array DIM e)-\u003eAcc(Array DIM e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:truncate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etruncate x\u003c/code\u003e returns the integer nearest \u003ccode\u003ex\u003c/code\u003e between zero and \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp a -\u003e Exp b",
        "fct-source": "src/Data-Array-Accelerate-Language.html#truncate",
        "fct-type": "function",
        "title": "truncate"
      },
      "index": {
        "description": "truncate returns the integer nearest between zero and",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "truncate",
        "normalized": "Exp a-\u003eExp b",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp a-\u003eExp b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:uncurry",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a curried function to a function on pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(f a -\u003e f b -\u003e f c) -\u003e f (Plain (f a), Plain (f b)) -\u003e f c",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#uncurry",
        "fct-type": "function",
        "title": "uncurry"
      },
      "index": {
        "description": "Converts curried function to function on pairs",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "uncurry",
        "normalized": "(a b-\u003ea c-\u003ea d)-\u003ea(Plain(a b),Plain(a c))-\u003ea d",
        "package": "accelerate",
        "partial": "",
        "signature": "(f a-\u003ef b-\u003ef c)-\u003ef(Plain(f a),Plain(f b))-\u003ef c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:unindex1",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a rank-1 indexing expression into an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e expression.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp (Z :. i) -\u003e Exp i",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#unindex1",
        "fct-type": "function",
        "title": "unindex1"
      },
      "index": {
        "description": "Turn rank-1 indexing expression into an Int expression",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "unindex1",
        "normalized": "Exp(Z a)-\u003eExp a",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp(Z i)-\u003eExp i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:unindex2",
      "description": {
        "fct-descr": "\u003cp\u003eDestructs a rank-2 index to an Exp tuple of two Int`s.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp ((Z :. i) :. i) -\u003e Exp (i, i)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#unindex2",
        "fct-type": "function",
        "title": "unindex2"
      },
      "index": {
        "description": "Destructs rank-2 index to an Exp tuple of two Int",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "unindex2",
        "normalized": "Exp((Z a)a)-\u003eExp(a,a)",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp((Z i)i)-\u003eExp(i,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:unit",
      "description": {
        "fct-descr": "\u003cp\u003eScalar inlet: injects a scalar (or a tuple of scalars) into a singleton\n array for use in the Accelerate language.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Exp e -\u003e Acc (Scalar e)",
        "fct-source": "src/Data-Array-Accelerate-Language.html#unit",
        "fct-type": "function",
        "title": "unit"
      },
      "index": {
        "description": "Scalar inlet injects scalar or tuple of scalars into singleton array for use in the Accelerate language",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "unit",
        "normalized": "Exp a-\u003eAcc(Scalar a)",
        "package": "accelerate",
        "partial": "",
        "signature": "Exp e-\u003eAcc(Scalar e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:unlift",
      "description": {
        "fct-descr": "\u003cp\u003eUnlift the outermost constructor through the surface type. This is only\n possible if the constructor is fully determined by its type - i.e., it is a\n singleton.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "c (Plain e) -\u003e e",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#unlift",
        "fct-type": "method",
        "title": "unlift"
      },
      "index": {
        "description": "Unlift the outermost constructor through the surface type This is only possible if the constructor is fully determined by its type i.e it is singleton",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "unlift",
        "normalized": "a(Plain b)-\u003eb",
        "package": "accelerate",
        "partial": "",
        "signature": "c(Plain e)-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:unzip",
      "description": {
        "fct-descr": "\u003cp\u003eThe converse of \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e, but the shape of the two results is identical to the\n shape of the argument.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh (a, b)) -\u003e (Acc (Array sh a), Acc (Array sh b))",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#unzip",
        "fct-type": "function",
        "title": "unzip"
      },
      "index": {
        "description": "The converse of zip but the shape of the two results is identical to the shape of the argument",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "unzip",
        "normalized": "Acc(Array a(b,c))-\u003e(Acc(Array a b),Acc(Array a c))",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh(a,b))-\u003e(Acc(Array sh a),Acc(Array sh b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:unzip3",
      "description": {
        "fct-descr": "\u003cp\u003eTake an array of triples and return three arrays, analogous to unzip.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh (a, b, c)) -\u003e (Acc (Array sh a), Acc (Array sh b), Acc (Array sh c))",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#unzip3",
        "fct-type": "function",
        "title": "unzip3"
      },
      "index": {
        "description": "Take an array of triples and return three arrays analogous to unzip",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "unzip3",
        "normalized": "Acc(Array a(b,c,d))-\u003e(Acc(Array a b),Acc(Array a c),Acc(Array a d))",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh(a,b,c))-\u003e(Acc(Array sh a),Acc(Array sh b),Acc(Array sh c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:unzip4",
      "description": {
        "fct-descr": "\u003cp\u003eTake an array of quadruples and return four arrays, analogous to unzip.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh (a, b, c, d)) -\u003e (Acc (Array sh a), Acc (Array sh b), Acc (Array sh c), Acc (Array sh d))",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#unzip4",
        "fct-type": "function",
        "title": "unzip4"
      },
      "index": {
        "description": "Take an array of quadruples and return four arrays analogous to unzip",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "unzip4",
        "normalized": "Acc(Array a(b,c,d,e))-\u003e(Acc(Array a b),Acc(Array a c),Acc(Array a d),Acc(Array a e))",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh(a,b,c,d))-\u003e(Acc(Array sh a),Acc(Array sh b),Acc(Array sh c),Acc(Array sh d))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:unzip5",
      "description": {
        "fct-descr": "\u003cp\u003eTake an array of 5-tuples and return five arrays, analogous to unzip.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh (a, b, c, d, e)) -\u003e (Acc (Array sh a), Acc (Array sh b), Acc (Array sh c), Acc (Array sh d), Acc (Array sh e))",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#unzip5",
        "fct-type": "function",
        "title": "unzip5"
      },
      "index": {
        "description": "Take an array of tuples and return five arrays analogous to unzip",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "unzip5",
        "normalized": "Acc(Array a(b,c,d,e,f))-\u003e(Acc(Array a b),Acc(Array a c),Acc(Array a d),Acc(Array a e),Acc(Array a f))",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh(a,b,c,d,e))-\u003e(Acc(Array sh a),Acc(Array sh b),Acc(Array sh c),Acc(Array sh d),Acc(Array sh e))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:unzip6",
      "description": {
        "fct-descr": "\u003cp\u003eTake an array of 6-tuples and return six arrays, analogous to unzip.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh (a, b, c, d, e, f)) -\u003e (Acc (Array sh a), Acc (Array sh b), Acc (Array sh c), Acc (Array sh d), Acc (Array sh e), Acc (Array sh f))",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#unzip6",
        "fct-type": "function",
        "title": "unzip6"
      },
      "index": {
        "description": "Take an array of tuples and return six arrays analogous to unzip",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "unzip6",
        "normalized": "Acc(Array a(b,c,d,e,f,g))-\u003e(Acc(Array a b),Acc(Array a c),Acc(Array a d),Acc(Array a e),Acc(Array a f),Acc(Array a g))",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh(a,b,c,d,e,f))-\u003e(Acc(Array sh a),Acc(Array sh b),Acc(Array sh c),Acc(Array sh d),Acc(Array sh e),Acc(Array sh f))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:unzip7",
      "description": {
        "fct-descr": "\u003cp\u003eTake an array of 7-tuples and return seven arrays, analogous to unzip.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh (a, b, c, d, e, f, g)) -\u003e (Acc (Array sh a), Acc (Array sh b), Acc (Array sh c), Acc (Array sh d), Acc (Array sh e), Acc (Array sh f), Acc (Array sh g))",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#unzip7",
        "fct-type": "function",
        "title": "unzip7"
      },
      "index": {
        "description": "Take an array of tuples and return seven arrays analogous to unzip",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "unzip7",
        "normalized": "Acc(Array a(b,c,d,e,f,g,h))-\u003e(Acc(Array a b),Acc(Array a c),Acc(Array a d),Acc(Array a e),Acc(Array a f),Acc(Array a g),Acc(Array a h))",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh(a,b,c,d,e,f,g))-\u003e(Acc(Array sh a),Acc(Array sh b),Acc(Array sh c),Acc(Array sh d),Acc(Array sh e),Acc(Array sh f),Acc(Array sh g))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:unzip8",
      "description": {
        "fct-descr": "\u003cp\u003eTake an array of 8-tuples and return eight arrays, analogous to unzip.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh (a, b, c, d, e, f, g, h)) -\u003e (Acc (Array sh a), Acc (Array sh b), Acc (Array sh c), Acc (Array sh d), Acc (Array sh e), Acc (Array sh f), Acc (Array sh g), Acc (Array sh h))",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#unzip8",
        "fct-type": "function",
        "title": "unzip8"
      },
      "index": {
        "description": "Take an array of tuples and return eight arrays analogous to unzip",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "unzip8",
        "normalized": "Acc(Array a(b,c,d,e,f,g,h,i))-\u003e(Acc(Array a b),Acc(Array a c),Acc(Array a d),Acc(Array a e),Acc(Array a f),Acc(Array a g),Acc(Array a h),Acc(Array a i))",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh(a,b,c,d,e,f,g,h))-\u003e(Acc(Array sh a),Acc(Array sh b),Acc(Array sh c),Acc(Array sh d),Acc(Array sh e),Acc(Array sh f),Acc(Array sh g),Acc(Array sh h))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:unzip9",
      "description": {
        "fct-descr": "\u003cp\u003eTake an array of 8-tuples and return eight arrays, analogous to unzip.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh (a, b, c, d, e, f, g, h, i)) -\u003e (Acc (Array sh a), Acc (Array sh b), Acc (Array sh c), Acc (Array sh d), Acc (Array sh e), Acc (Array sh f), Acc (Array sh g), Acc (Array sh h), Acc (Array sh i))",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#unzip9",
        "fct-type": "function",
        "title": "unzip9"
      },
      "index": {
        "description": "Take an array of tuples and return eight arrays analogous to unzip",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "unzip9",
        "normalized": "Acc(Array a(b,c,d,e,f,g,h,i,j))-\u003e(Acc(Array a b),Acc(Array a c),Acc(Array a d),Acc(Array a e),Acc(Array a f),Acc(Array a g),Acc(Array a h),Acc(Array a i),Acc(Array a j))",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh(a,b,c,d,e,f,g,h,i))-\u003e(Acc(Array sh a),Acc(Array sh b),Acc(Array sh c),Acc(Array sh d),Acc(Array sh e),Acc(Array sh f),Acc(Array sh g),Acc(Array sh h),Acc(Array sh i))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:use",
      "description": {
        "fct-descr": "\u003cp\u003eArray inlet: makes an array available for processing using the Accelerate\n language.\n\u003c/p\u003e\u003cp\u003eDepending upon the backend used to execute array computations, this may\n trigger (asynchronous) data transfer.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "arrays -\u003e Acc arrays",
        "fct-source": "src/Data-Array-Accelerate-Language.html#use",
        "fct-type": "function",
        "title": "use"
      },
      "index": {
        "description": "Array inlet makes an array available for processing using the Accelerate language Depending upon the backend used to execute array computations this may trigger asynchronous data transfer",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "use",
        "normalized": "a-\u003eAcc a",
        "package": "accelerate",
        "partial": "",
        "signature": "arrays-\u003eAcc arrays"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:while",
      "description": {
        "fct-descr": "\u003cp\u003eWhile construct. Continue to apply the given function, starting with the\n initial value, until the test function evaluates to true.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp e -\u003e Exp Bool) -\u003e (Exp e -\u003e Exp e) -\u003e Exp e -\u003e Exp e",
        "fct-source": "src/Data-Array-Accelerate-Language.html#while",
        "fct-type": "function",
        "title": "while"
      },
      "index": {
        "description": "While construct Continue to apply the given function starting with the initial value until the test function evaluates to true",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "while",
        "normalized": "(Exp a-\u003eExp Bool)-\u003e(Exp a-\u003eExp a)-\u003eExp a-\u003eExp a",
        "package": "accelerate",
        "partial": "",
        "signature": "(Exp e-\u003eExp Bool)-\u003e(Exp e-\u003eExp e)-\u003eExp e-\u003eExp e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:zip",
      "description": {
        "fct-descr": "\u003cp\u003eCombine the elements of two arrays pairwise.  The shape of the result is\n the intersection of the two argument shapes.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh a) -\u003e Acc (Array sh b) -\u003e Acc (Array sh (a, b))",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#zip",
        "fct-type": "function",
        "title": "zip"
      },
      "index": {
        "description": "Combine the elements of two arrays pairwise The shape of the result is the intersection of the two argument shapes",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "zip",
        "normalized": "Acc(Array a b)-\u003eAcc(Array a c)-\u003eAcc(Array a(b,c))",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh a)-\u003eAcc(Array sh b)-\u003eAcc(Array sh(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:zip3",
      "description": {
        "fct-descr": "\u003cp\u003eTake three arrays and return an array of triples, analogous to zip.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh a) -\u003e Acc (Array sh b) -\u003e Acc (Array sh c) -\u003e Acc (Array sh (a, b, c))",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#zip3",
        "fct-type": "function",
        "title": "zip3"
      },
      "index": {
        "description": "Take three arrays and return an array of triples analogous to zip",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "zip3",
        "normalized": "Acc(Array a b)-\u003eAcc(Array a c)-\u003eAcc(Array a d)-\u003eAcc(Array a(b,c,d))",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh a)-\u003eAcc(Array sh b)-\u003eAcc(Array sh c)-\u003eAcc(Array sh(a,b,c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:zip4",
      "description": {
        "fct-descr": "\u003cp\u003eTake four arrays and return an array of quadruples, analogous to zip.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh a) -\u003e Acc (Array sh b) -\u003e Acc (Array sh c) -\u003e Acc (Array sh d) -\u003e Acc (Array sh (a, b, c, d))",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#zip4",
        "fct-type": "function",
        "title": "zip4"
      },
      "index": {
        "description": "Take four arrays and return an array of quadruples analogous to zip",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "zip4",
        "normalized": "Acc(Array a b)-\u003eAcc(Array a c)-\u003eAcc(Array a d)-\u003eAcc(Array a e)-\u003eAcc(Array a(b,c,d,e))",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh a)-\u003eAcc(Array sh b)-\u003eAcc(Array sh c)-\u003eAcc(Array sh d)-\u003eAcc(Array sh(a,b,c,d))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:zip5",
      "description": {
        "fct-descr": "\u003cp\u003eTake five arrays and return an array of five-tuples, analogous to zip.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh a) -\u003e Acc (Array sh b) -\u003e Acc (Array sh c) -\u003e Acc (Array sh d) -\u003e Acc (Array sh e) -\u003e Acc (Array sh (a, b, c, d, e))",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#zip5",
        "fct-type": "function",
        "title": "zip5"
      },
      "index": {
        "description": "Take five arrays and return an array of five-tuples analogous to zip",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "zip5",
        "normalized": "Acc(Array a b)-\u003eAcc(Array a c)-\u003eAcc(Array a d)-\u003eAcc(Array a e)-\u003eAcc(Array a f)-\u003eAcc(Array a(b,c,d,e,f))",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh a)-\u003eAcc(Array sh b)-\u003eAcc(Array sh c)-\u003eAcc(Array sh d)-\u003eAcc(Array sh e)-\u003eAcc(Array sh(a,b,c,d,e))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:zip6",
      "description": {
        "fct-descr": "\u003cp\u003eTake six arrays and return an array of six-tuples, analogous to zip.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh a) -\u003e Acc (Array sh b) -\u003e Acc (Array sh c) -\u003e Acc (Array sh d) -\u003e Acc (Array sh e) -\u003e Acc (Array sh f) -\u003e Acc (Array sh (a, b, c, d, e, f))",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#zip6",
        "fct-type": "function",
        "title": "zip6"
      },
      "index": {
        "description": "Take six arrays and return an array of six-tuples analogous to zip",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "zip6",
        "normalized": "Acc(Array a b)-\u003eAcc(Array a c)-\u003eAcc(Array a d)-\u003eAcc(Array a e)-\u003eAcc(Array a f)-\u003eAcc(Array a g)-\u003eAcc(Array a(b,c,d,e,f,g))",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh a)-\u003eAcc(Array sh b)-\u003eAcc(Array sh c)-\u003eAcc(Array sh d)-\u003eAcc(Array sh e)-\u003eAcc(Array sh f)-\u003eAcc(Array sh(a,b,c,d,e,f))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:zip7",
      "description": {
        "fct-descr": "\u003cp\u003eTake seven arrays and return an array of seven-tuples, analogous to zip.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh a) -\u003e Acc (Array sh b) -\u003e Acc (Array sh c) -\u003e Acc (Array sh d) -\u003e Acc (Array sh e) -\u003e Acc (Array sh f) -\u003e Acc (Array sh g) -\u003e Acc (Array sh (a, b, c, d, e, f, g))",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#zip7",
        "fct-type": "function",
        "title": "zip7"
      },
      "index": {
        "description": "Take seven arrays and return an array of seven-tuples analogous to zip",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "zip7",
        "normalized": "Acc(Array a b)-\u003eAcc(Array a c)-\u003eAcc(Array a d)-\u003eAcc(Array a e)-\u003eAcc(Array a f)-\u003eAcc(Array a g)-\u003eAcc(Array a h)-\u003eAcc(Array a(b,c,d,e,f,g,h))",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh a)-\u003eAcc(Array sh b)-\u003eAcc(Array sh c)-\u003eAcc(Array sh d)-\u003eAcc(Array sh e)-\u003eAcc(Array sh f)-\u003eAcc(Array sh g)-\u003eAcc(Array sh(a,b,c,d,e,f,g))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:zip8",
      "description": {
        "fct-descr": "\u003cp\u003eTake seven arrays and return an array of seven-tuples, analogous to zip.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh a) -\u003e Acc (Array sh b) -\u003e Acc (Array sh c) -\u003e Acc (Array sh d) -\u003e Acc (Array sh e) -\u003e Acc (Array sh f) -\u003e Acc (Array sh g) -\u003e Acc (Array sh h) -\u003e Acc (Array sh (a, b, c, d, e, f, g, h))",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#zip8",
        "fct-type": "function",
        "title": "zip8"
      },
      "index": {
        "description": "Take seven arrays and return an array of seven-tuples analogous to zip",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "zip8",
        "normalized": "Acc(Array a b)-\u003eAcc(Array a c)-\u003eAcc(Array a d)-\u003eAcc(Array a e)-\u003eAcc(Array a f)-\u003eAcc(Array a g)-\u003eAcc(Array a h)-\u003eAcc(Array a i)-\u003eAcc(Array a(b,c,d,e,f,g,h,i))",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh a)-\u003eAcc(Array sh b)-\u003eAcc(Array sh c)-\u003eAcc(Array sh d)-\u003eAcc(Array sh e)-\u003eAcc(Array sh f)-\u003eAcc(Array sh g)-\u003eAcc(Array sh h)-\u003eAcc(Array sh(a,b,c,d,e,f,g,h))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:zip9",
      "description": {
        "fct-descr": "\u003cp\u003eTake seven arrays and return an array of seven-tuples, analogous to zip.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "Acc (Array sh a) -\u003e Acc (Array sh b) -\u003e Acc (Array sh c) -\u003e Acc (Array sh d) -\u003e Acc (Array sh e) -\u003e Acc (Array sh f) -\u003e Acc (Array sh g) -\u003e Acc (Array sh h) -\u003e Acc (Array sh i) -\u003e Acc (Array sh (a, b, c, d, e, f, g, h, i))",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#zip9",
        "fct-type": "function",
        "title": "zip9"
      },
      "index": {
        "description": "Take seven arrays and return an array of seven-tuples analogous to zip",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "zip9",
        "normalized": "Acc(Array a b)-\u003eAcc(Array a c)-\u003eAcc(Array a d)-\u003eAcc(Array a e)-\u003eAcc(Array a f)-\u003eAcc(Array a g)-\u003eAcc(Array a h)-\u003eAcc(Array a i)-\u003eAcc(Array a j)-\u003eAcc(Array a(b,c,d,e,f,g,h,i,j))",
        "package": "accelerate",
        "partial": "",
        "signature": "Acc(Array sh a)-\u003eAcc(Array sh b)-\u003eAcc(Array sh c)-\u003eAcc(Array sh d)-\u003eAcc(Array sh e)-\u003eAcc(Array sh f)-\u003eAcc(Array sh g)-\u003eAcc(Array sh h)-\u003eAcc(Array sh i)-\u003eAcc(Array sh(a,b,c,d,e,f,g,h,i))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:zipWith",
      "description": {
        "fct-descr": "\u003cp\u003eApply the given binary function element-wise to the two arrays.  The extent of the resulting\n array is the intersection of the extents of the two source arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp b -\u003e Exp c) -\u003e Acc (Array ix a) -\u003e Acc (Array ix b) -\u003e Acc (Array ix c)",
        "fct-source": "src/Data-Array-Accelerate-Language.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "Apply the given binary function element-wise to the two arrays The extent of the resulting array is the intersection of the extents of the two source arrays",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "zipWith",
        "normalized": "(Exp a-\u003eExp b-\u003eExp c)-\u003eAcc(Array d a)-\u003eAcc(Array d b)-\u003eAcc(Array d c)",
        "package": "accelerate",
        "partial": "With",
        "signature": "(Exp a-\u003eExp b-\u003eExp c)-\u003eAcc(Array ix a)-\u003eAcc(Array ix b)-\u003eAcc(Array ix c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:zipWith3",
      "description": {
        "fct-descr": "\u003cp\u003eZip three arrays with the given function, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp b -\u003e Exp c -\u003e Exp d) -\u003e Acc (Array sh a) -\u003e Acc (Array sh b) -\u003e Acc (Array sh c) -\u003e Acc (Array sh d)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#zipWith3",
        "fct-type": "function",
        "title": "zipWith3"
      },
      "index": {
        "description": "Zip three arrays with the given function analogous to zipWith",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "zipWith3",
        "normalized": "(Exp a-\u003eExp b-\u003eExp c-\u003eExp d)-\u003eAcc(Array e a)-\u003eAcc(Array e b)-\u003eAcc(Array e c)-\u003eAcc(Array e d)",
        "package": "accelerate",
        "partial": "With",
        "signature": "(Exp a-\u003eExp b-\u003eExp c-\u003eExp d)-\u003eAcc(Array sh a)-\u003eAcc(Array sh b)-\u003eAcc(Array sh c)-\u003eAcc(Array sh d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:zipWith4",
      "description": {
        "fct-descr": "\u003cp\u003eZip four arrays with the given function, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp b -\u003e Exp c -\u003e Exp d -\u003e Exp e) -\u003e Acc (Array sh a) -\u003e Acc (Array sh b) -\u003e Acc (Array sh c) -\u003e Acc (Array sh d) -\u003e Acc (Array sh e)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#zipWith4",
        "fct-type": "function",
        "title": "zipWith4"
      },
      "index": {
        "description": "Zip four arrays with the given function analogous to zipWith",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "zipWith4",
        "normalized": "(Exp a-\u003eExp b-\u003eExp c-\u003eExp d-\u003eExp e)-\u003eAcc(Array f a)-\u003eAcc(Array f b)-\u003eAcc(Array f c)-\u003eAcc(Array f d)-\u003eAcc(Array f e)",
        "package": "accelerate",
        "partial": "With",
        "signature": "(Exp a-\u003eExp b-\u003eExp c-\u003eExp d-\u003eExp e)-\u003eAcc(Array sh a)-\u003eAcc(Array sh b)-\u003eAcc(Array sh c)-\u003eAcc(Array sh d)-\u003eAcc(Array sh e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:zipWith5",
      "description": {
        "fct-descr": "\u003cp\u003eZip five arrays with the given function, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp b -\u003e Exp c -\u003e Exp d -\u003e Exp e -\u003e Exp f) -\u003e Acc (Array sh a) -\u003e Acc (Array sh b) -\u003e Acc (Array sh c) -\u003e Acc (Array sh d) -\u003e Acc (Array sh e) -\u003e Acc (Array sh f)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#zipWith5",
        "fct-type": "function",
        "title": "zipWith5"
      },
      "index": {
        "description": "Zip five arrays with the given function analogous to zipWith",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "zipWith5",
        "normalized": "(Exp a-\u003eExp b-\u003eExp c-\u003eExp d-\u003eExp e-\u003eExp f)-\u003eAcc(Array g a)-\u003eAcc(Array g b)-\u003eAcc(Array g c)-\u003eAcc(Array g d)-\u003eAcc(Array g e)-\u003eAcc(Array g f)",
        "package": "accelerate",
        "partial": "With",
        "signature": "(Exp a-\u003eExp b-\u003eExp c-\u003eExp d-\u003eExp e-\u003eExp f)-\u003eAcc(Array sh a)-\u003eAcc(Array sh b)-\u003eAcc(Array sh c)-\u003eAcc(Array sh d)-\u003eAcc(Array sh e)-\u003eAcc(Array sh f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:zipWith6",
      "description": {
        "fct-descr": "\u003cp\u003eZip six arrays with the given function, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp b -\u003e Exp c -\u003e Exp d -\u003e Exp e -\u003e Exp f -\u003e Exp g) -\u003e Acc (Array sh a) -\u003e Acc (Array sh b) -\u003e Acc (Array sh c) -\u003e Acc (Array sh d) -\u003e Acc (Array sh e) -\u003e Acc (Array sh f) -\u003e Acc (Array sh g)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#zipWith6",
        "fct-type": "function",
        "title": "zipWith6"
      },
      "index": {
        "description": "Zip six arrays with the given function analogous to zipWith",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "zipWith6",
        "normalized": "(Exp a-\u003eExp b-\u003eExp c-\u003eExp d-\u003eExp e-\u003eExp f-\u003eExp g)-\u003eAcc(Array h a)-\u003eAcc(Array h b)-\u003eAcc(Array h c)-\u003eAcc(Array h d)-\u003eAcc(Array h e)-\u003eAcc(Array h f)-\u003eAcc(Array h g)",
        "package": "accelerate",
        "partial": "With",
        "signature": "(Exp a-\u003eExp b-\u003eExp c-\u003eExp d-\u003eExp e-\u003eExp f-\u003eExp g)-\u003eAcc(Array sh a)-\u003eAcc(Array sh b)-\u003eAcc(Array sh c)-\u003eAcc(Array sh d)-\u003eAcc(Array sh e)-\u003eAcc(Array sh f)-\u003eAcc(Array sh g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:zipWith7",
      "description": {
        "fct-descr": "\u003cp\u003eZip seven arrays with the given function, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp b -\u003e Exp c -\u003e Exp d -\u003e Exp e -\u003e Exp f -\u003e Exp g -\u003e Exp h) -\u003e Acc (Array sh a) -\u003e Acc (Array sh b) -\u003e Acc (Array sh c) -\u003e Acc (Array sh d) -\u003e Acc (Array sh e) -\u003e Acc (Array sh f) -\u003e Acc (Array sh g) -\u003e Acc (Array sh h)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#zipWith7",
        "fct-type": "function",
        "title": "zipWith7"
      },
      "index": {
        "description": "Zip seven arrays with the given function analogous to zipWith",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "zipWith7",
        "normalized": "(Exp a-\u003eExp b-\u003eExp c-\u003eExp d-\u003eExp e-\u003eExp f-\u003eExp g-\u003eExp h)-\u003eAcc(Array i a)-\u003eAcc(Array i b)-\u003eAcc(Array i c)-\u003eAcc(Array i d)-\u003eAcc(Array i e)-\u003eAcc(Array i f)-\u003eAcc(Array i g)-\u003eAcc(Array i h)",
        "package": "accelerate",
        "partial": "With",
        "signature": "(Exp a-\u003eExp b-\u003eExp c-\u003eExp d-\u003eExp e-\u003eExp f-\u003eExp g-\u003eExp h)-\u003eAcc(Array sh a)-\u003eAcc(Array sh b)-\u003eAcc(Array sh c)-\u003eAcc(Array sh d)-\u003eAcc(Array sh e)-\u003eAcc(Array sh f)-\u003eAcc(Array sh g)-\u003eAcc(Array sh h)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:zipWith8",
      "description": {
        "fct-descr": "\u003cp\u003eZip eight arrays with the given function, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp b -\u003e Exp c -\u003e Exp d -\u003e Exp e -\u003e Exp f -\u003e Exp g -\u003e Exp h -\u003e Exp i) -\u003e Acc (Array sh a) -\u003e Acc (Array sh b) -\u003e Acc (Array sh c) -\u003e Acc (Array sh d) -\u003e Acc (Array sh e) -\u003e Acc (Array sh f) -\u003e Acc (Array sh g) -\u003e Acc (Array sh h) -\u003e Acc (Array sh i)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#zipWith8",
        "fct-type": "function",
        "title": "zipWith8"
      },
      "index": {
        "description": "Zip eight arrays with the given function analogous to zipWith",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "zipWith8",
        "normalized": "(Exp a-\u003eExp b-\u003eExp c-\u003eExp d-\u003eExp e-\u003eExp f-\u003eExp g-\u003eExp h-\u003eExp i)-\u003eAcc(Array j a)-\u003eAcc(Array j b)-\u003eAcc(Array j c)-\u003eAcc(Array j d)-\u003eAcc(Array j e)-\u003eAcc(Array j f)-\u003eAcc(Array j g)-\u003eAcc(Array j h)-\u003eAcc(Array j i)",
        "package": "accelerate",
        "partial": "With",
        "signature": "(Exp a-\u003eExp b-\u003eExp c-\u003eExp d-\u003eExp e-\u003eExp f-\u003eExp g-\u003eExp h-\u003eExp i)-\u003eAcc(Array sh a)-\u003eAcc(Array sh b)-\u003eAcc(Array sh c)-\u003eAcc(Array sh d)-\u003eAcc(Array sh e)-\u003eAcc(Array sh f)-\u003eAcc(Array sh g)-\u003eAcc(Array sh h)-\u003eAcc(Array sh i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate/docs/Data-Array-Accelerate.html#v:zipWith9",
      "description": {
        "fct-descr": "\u003cp\u003eZip nine arrays with the given function, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate",
        "fct-package": "accelerate",
        "fct-signature": "(Exp a -\u003e Exp b -\u003e Exp c -\u003e Exp d -\u003e Exp e -\u003e Exp f -\u003e Exp g -\u003e Exp h -\u003e Exp i -\u003e Exp j) -\u003e Acc (Array sh a) -\u003e Acc (Array sh b) -\u003e Acc (Array sh c) -\u003e Acc (Array sh d) -\u003e Acc (Array sh e) -\u003e Acc (Array sh f) -\u003e Acc (Array sh g) -\u003e Acc (Array sh h) -\u003e Acc (Array sh i) -\u003e Acc (Array sh j)",
        "fct-source": "src/Data-Array-Accelerate-Prelude.html#zipWith9",
        "fct-type": "function",
        "title": "zipWith9"
      },
      "index": {
        "description": "Zip nine arrays with the given function analogous to zipWith",
        "hierarchy": "Data Array Accelerate",
        "module": "Data.Array.Accelerate",
        "name": "zipWith9",
        "normalized": "(Exp a-\u003eExp b-\u003eExp c-\u003eExp d-\u003eExp e-\u003eExp f-\u003eExp g-\u003eExp h-\u003eExp i-\u003eExp j)-\u003eAcc(Array k a)-\u003eAcc(Array k b)-\u003eAcc(Array k c)-\u003eAcc(Array k d)-\u003eAcc(Array k e)-\u003eAcc(Array k f)-\u003eAcc(Array k g)-\u003eAcc(Array k h)-\u003eAcc(Array k i)-\u003eAcc(Array k j)",
        "package": "accelerate",
        "partial": "With",
        "signature": "(Exp a-\u003eExp b-\u003eExp c-\u003eExp d-\u003eExp e-\u003eExp f-\u003eExp g-\u003eExp h-\u003eExp i-\u003eExp j)-\u003eAcc(Array sh a)-\u003eAcc(Array sh b)-\u003eAcc(Array sh c)-\u003eAcc(Array sh d)-\u003eAcc(Array sh e)-\u003eAcc(Array sh f)-\u003eAcc(Array sh g)-\u003eAcc(Array sh h)-\u003eAcc(Array sh i)-\u003eAcc(Array sh j)"
      }
    }
  }
]