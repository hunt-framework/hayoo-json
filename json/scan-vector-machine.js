[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-AccelerateSVM.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn instance\n\u003c/p\u003e\u003cpre\u003e\n     instance Accelerate.IsScalar s =\u003e\n              SVM.ScanVectorMachine (Accelerate.Array Accelerate.DIM1) s\n\u003c/pre\u003e\u003cp\u003edemonstrating that the \u003ccode\u003eData.Array.Accelerate\u003c/code\u003e\n library for GPU computation is able to support the SVM operations\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Parallel.ScanVectorMachine.AccelerateSVM",
        "fct-package": "scan-vector-machine",
        "fct-signature": "module",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-AccelerateSVM.html",
        "fct-type": "module",
        "title": "AccelerateSVM"
      },
      "index": {
        "description": "An instance instance Accelerate.IsScalar SVM.ScanVectorMachine Accelerate.Array Accelerate.DIM1 demonstrating that the Data.Array.Accelerate library for GPU computation is able to support the SVM operations",
        "hierarchy": "Control Parallel ScanVectorMachine AccelerateSVM",
        "module": "Control.Parallel.ScanVectorMachine.AccelerateSVM",
        "name": "AccelerateSVM",
        "normalized": "",
        "package": "scan-vector-machine",
        "partial": "Accelerate SVM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-DataParallelHaskellSVM.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn instance\n\u003c/p\u003e\u003cpre\u003e\n     instance Num s =\u003e SVM.ScanVectorMachine ([::]) s\n\u003c/pre\u003e\u003cp\u003e... demonstrating that the parallel arrays \u003ccode\u003e[:s:]\u003c/code\u003e of\n   Data Parallel Haskell support the SVM operations.  In truth this\n   is a bit backward: DPH is a high-level nested data parallel\n   language which ought to \u003cem\u003ecompile down to\u003c/em\u003e something like SVM.\n   Unfortunately DPH's \u003ccode\u003emapP\u003c/code\u003e allows closures and uncontained\n   recursion into the parallel context, so this isn't possible.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Parallel.ScanVectorMachine.DataParallelHaskellSVM",
        "fct-package": "scan-vector-machine",
        "fct-signature": "module",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-DataParallelHaskellSVM.html",
        "fct-type": "module",
        "title": "DataParallelHaskellSVM"
      },
      "index": {
        "description": "An instance instance Num SVM.ScanVectorMachine demonstrating that the parallel arrays of Data Parallel Haskell support the SVM operations In truth this is bit backward DPH is high-level nested data parallel language which ought to compile down to something like SVM Unfortunately DPH mapP allows closures and uncontained recursion into the parallel context so this isn possible",
        "hierarchy": "Control Parallel ScanVectorMachine DataParallelHaskellSVM",
        "module": "Control.Parallel.ScanVectorMachine.DataParallelHaskellSVM",
        "name": "DataParallelHaskellSVM",
        "normalized": "",
        "package": "scan-vector-machine",
        "partial": "Data Parallel Haskell SVM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-NestedVectors.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGiven an instance of \u003ccode\u003eScanVectorMachine V' (V S)\u003c/code\u003e, we can produce\n   a type \u003ccode\u003eV''\u003c/code\u003e and instance \u003ccode\u003eScanVectorMachine V'' (V' (V S))\u003c/code\u003e.  In\n   other words, given an implementation of vectors with some nonzero\n   nesting depth, this will produce an implementation with nesting\n   depth \u003cem\u003eone level deeper\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThis is different from \u003ccode\u003eSegmentedVectors\u003c/code\u003e, which uses flat\n   vectors (0-deep nesting) to emulate segmented vectors (1-deep\n   nesting) by cutting the size of the scalars in half.  Here, there\n   is no need to assume that the flat-vector scalars are twice as\n   wide (in terms of bits) as the segmented scalars, so arbitrarily\n   deep nesting may be achieved without sacrificing any additional\n   bit-width.  In addition, \u003ccode\u003eNestedVectors\u003c/code\u003e introduces less overhead\n   than \u003ccode\u003eSegmentedVectors\u003c/code\u003e.  For this reason, many hardware/platform\n   providers choose to implement \u003ccode\u003eScanVectorMachine V' (V S)\u003c/code\u003e\n   instead of \u003ccode\u003eScanVectorMachine (V S)\u003c/code\u003e; this requires more work\n   (more methods to implement), but eliminates the overhead of\n   \u003ccode\u003eSegmentedVectors\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Parallel.ScanVectorMachine.NestedVectors",
        "fct-package": "scan-vector-machine",
        "fct-signature": "module",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-NestedVectors.html",
        "fct-type": "module",
        "title": "NestedVectors"
      },
      "index": {
        "description": "Given an instance of ScanVectorMachine we can produce type and instance ScanVectorMachine In other words given an implementation of vectors with some nonzero nesting depth this will produce an implementation with nesting depth one level deeper This is different from SegmentedVectors which uses flat vectors deep nesting to emulate segmented vectors deep nesting by cutting the size of the scalars in half Here there is no need to assume that the flat-vector scalars are twice as wide in terms of bits as the segmented scalars so arbitrarily deep nesting may be achieved without sacrificing any additional bit-width In addition NestedVectors introduces less overhead than SegmentedVectors For this reason many hardware platform providers choose to implement ScanVectorMachine instead of ScanVectorMachine this requires more work more methods to implement but eliminates the overhead of SegmentedVectors",
        "hierarchy": "Control Parallel ScanVectorMachine NestedVectors",
        "module": "Control.Parallel.ScanVectorMachine.NestedVectors",
        "name": "NestedVectors",
        "normalized": "",
        "package": "scan-vector-machine",
        "partial": "Nested Vectors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-NestedVectors.html#t:VecPair",
      "description": {
        "fct-module": "Control.Parallel.ScanVectorMachine.NestedVectors",
        "fct-package": "scan-vector-machine",
        "fct-signature": "data",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-NestedVectors.html#VecPair",
        "fct-type": "data",
        "title": "VecPair"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Parallel ScanVectorMachine NestedVectors",
        "module": "Control.Parallel.ScanVectorMachine.NestedVectors",
        "name": "VecPair",
        "normalized": "",
        "package": "scan-vector-machine",
        "partial": "Vec Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-NestedVectors.html#v:VecPair",
      "description": {
        "fct-module": "Control.Parallel.ScanVectorMachine.NestedVectors",
        "fct-package": "scan-vector-machine",
        "fct-signature": "VecPair v v",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-NestedVectors.html#VecPair",
        "fct-type": "function",
        "title": "VecPair"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Parallel ScanVectorMachine NestedVectors",
        "module": "Control.Parallel.ScanVectorMachine.NestedVectors",
        "name": "VecPair",
        "normalized": "",
        "package": "scan-vector-machine",
        "partial": "Vec Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-NestedVectors.html#v:check_eq",
      "description": {
        "fct-module": "Control.Parallel.ScanVectorMachine.NestedVectors",
        "fct-package": "scan-vector-machine",
        "fct-signature": "t -\u003e t1 -\u003e t",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-NestedVectors.html#check_eq",
        "fct-type": "function",
        "title": "check_eq"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Parallel ScanVectorMachine NestedVectors",
        "module": "Control.Parallel.ScanVectorMachine.NestedVectors",
        "name": "check_eq",
        "normalized": "a-\u003ea-\u003ea",
        "package": "scan-vector-machine",
        "partial": "",
        "signature": "t-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#",
      "description": {
        "fct-module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "module",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html",
        "fct-type": "module",
        "title": "ScanVectorMachine"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Parallel ScanVectorMachine ScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "name": "ScanVectorMachine",
        "normalized": "",
        "package": "scan-vector-machine",
        "partial": "Scan Vector Machine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#t:Op",
      "description": {
        "fct-descr": "\u003cp\u003eScalar operations which may be performed on the elements of a\n   vector, either elementwise or in prefix-scan form.\n\u003c/p\u003e",
        "fct-module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "data",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#Op",
        "fct-type": "data",
        "title": "Op"
      },
      "index": {
        "description": "Scalar operations which may be performed on the elements of vector either elementwise or in prefix-scan form",
        "hierarchy": "Control Parallel ScanVectorMachine ScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "name": "Op",
        "normalized": "",
        "package": "scan-vector-machine",
        "partial": "Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#t:ScanVectorMachine",
      "description": {
        "fct-descr": "\u003cp\u003eAn instance of \u003ccode\u003eScanVectorMachine\u003c/code\u003e provides a scalar type \u003ccode\u003es\u003c/code\u003e,\n   vectors of type \u003ccode\u003ev s\u003c/code\u003e over that scalar of type, and the full\n   suite of Scan Vector Machine (SVM) operations (Blelloch'90,\n   page 60) on those vectors.  The SVM instruction set is sometimes\n   referred to as \u003cem\u003eVCODE\u003c/em\u003e (CMU tech report CMU-CS-90-146-R).\n\u003c/p\u003e\u003cp\u003eOnly two changes have been made: (1) booleans are encoded as\n scalars (zero is false, nonzero is true) and (2) Belloch's\n elementwise subtraction has been replaced with a unary \u003ccode\u003eneg\u003c/code\u003e\n operation; this way the set of elementwise and scan operations are\n the same (subtraction is not associative).\n\u003c/p\u003e\u003cp\u003eMany of the names below overlap with those in the Prelude; we\n recommend \u003ccode\u003eimport qualified ScanVectorMachine as SVM\u003c/code\u003e so that these\n may be referred to as, for example, \u003ccode\u003eSVM.length\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNotice that there is no \u003ccode\u003emap :: (s -\u003e s) -\u003e v s -\u003e v s\u003c/code\u003e; this is\n essential to keeping \u003cem\u003eclosures\u003c/em\u003e and \u003cem\u003euncontained recursion\u003c/em\u003e out of the\n parallel context.  See Blelloch 10.6.2 for the definition of\n contained recursion.\n\u003c/p\u003e\u003cp\u003eAlso notice that only three operations involve communication\n between different parts of the paralell context: \u003ccode\u003edistribute\u003c/code\u003e,\n \u003ccode\u003escan\u003c/code\u003e, and \u003ccode\u003epermute\u003c/code\u003e.  The \u003ccode\u003edistribute\u003c/code\u003e operation performs\n broadcast communication from the serial context to the parallel\n context.  The \u003ccode\u003escan\u003c/code\u003e operation performs prefix scans, which have\n very efficient communication patterns (do a local scan, then a\n global tree reduction, then a local distribution, then an\n elementwise operation).  Only the \u003ccode\u003epermute\u003c/code\u003e operation involves\n complicated communication patterns.  This is mitigated to some\n extent by the requirement that \u003ccode\u003epermute\u003c/code\u003e must be a \u003cem\u003epermutation\u003c/em\u003e of\n the vector; it is an error to send two elements to the same\n destination index, or to have a destination index to which no\n element is sent.\n\u003c/p\u003e",
        "fct-module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "class",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#ScanVectorMachine",
        "fct-type": "class",
        "title": "ScanVectorMachine"
      },
      "index": {
        "description": "An instance of ScanVectorMachine provides scalar type vectors of type over that scalar of type and the full suite of Scan Vector Machine SVM operations Blelloch page on those vectors The SVM instruction set is sometimes referred to as VCODE CMU tech report CMU-CS-90-146-R Only two changes have been made booleans are encoded as scalars zero is false nonzero is true and Belloch elementwise subtraction has been replaced with unary neg operation this way the set of elementwise and scan operations are the same subtraction is not associative Many of the names below overlap with those in the Prelude we recommend import qualified ScanVectorMachine as SVM so that these may be referred to as for example SVM.length Notice that there is no map this is essential to keeping closures and uncontained recursion out of the parallel context See Blelloch for the definition of contained recursion Also notice that only three operations involve communication between different parts of the paralell context distribute scan and permute The distribute operation performs broadcast communication from the serial context to the parallel context The scan operation performs prefix scans which have very efficient communication patterns do local scan then global tree reduction then local distribution then an elementwise operation Only the permute operation involves complicated communication patterns This is mitigated to some extent by the requirement that permute must be permutation of the vector it is an error to send two elements to the same destination index or to have destination index to which no element is sent",
        "hierarchy": "Control Parallel ScanVectorMachine ScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "name": "ScanVectorMachine",
        "normalized": "",
        "package": "scan-vector-machine",
        "partial": "Scan Vector Machine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#v:And",
      "description": {
        "fct-module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "And",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#Op",
        "fct-type": "function",
        "title": "And"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Parallel ScanVectorMachine ScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "name": "And",
        "normalized": "",
        "package": "scan-vector-machine",
        "partial": "And",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#v:Max",
      "description": {
        "fct-module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "Max",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#Op",
        "fct-type": "function",
        "title": "Max"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Parallel ScanVectorMachine ScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "name": "Max",
        "normalized": "",
        "package": "scan-vector-machine",
        "partial": "Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#v:Min",
      "description": {
        "fct-module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "Min",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#Op",
        "fct-type": "function",
        "title": "Min"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Parallel ScanVectorMachine ScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "name": "Min",
        "normalized": "",
        "package": "scan-vector-machine",
        "partial": "Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#v:Or",
      "description": {
        "fct-module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "Or",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#Op",
        "fct-type": "function",
        "title": "Or"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Parallel ScanVectorMachine ScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "name": "Or",
        "normalized": "",
        "package": "scan-vector-machine",
        "partial": "Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#v:Plus",
      "description": {
        "fct-module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "Plus",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#Op",
        "fct-type": "function",
        "title": "Plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Parallel ScanVectorMachine ScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "name": "Plus",
        "normalized": "",
        "package": "scan-vector-machine",
        "partial": "Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#v:Times",
      "description": {
        "fct-module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "Times",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#Op",
        "fct-type": "function",
        "title": "Times"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Parallel ScanVectorMachine ScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "name": "Times",
        "normalized": "",
        "package": "scan-vector-machine",
        "partial": "Times",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#v:distribute",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new vector; \u003ccode\u003edistribute s n\u003c/code\u003e creates a vector of length \u003ccode\u003en\u003c/code\u003e whose elements are all \u003ccode\u003es\u003c/code\u003e.\n   This instruction implements communication from the parallel context to the serial context.\n\u003c/p\u003e",
        "fct-module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "s -\u003e s -\u003e v s",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#distribute",
        "fct-type": "method",
        "title": "distribute"
      },
      "index": {
        "description": "Creates new vector distribute creates vector of length whose elements are all This instruction implements communication from the parallel context to the serial context",
        "hierarchy": "Control Parallel ScanVectorMachine ScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "name": "distribute",
        "normalized": "a-\u003ea-\u003eb a",
        "package": "scan-vector-machine",
        "partial": "",
        "signature": "s-\u003es-\u003ev s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#v:extract",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts an element of a vector; \u003ccode\u003eextract v i\u003c/code\u003e yields \u003ccode\u003ev[i]\u003c/code\u003e.  The scalar \u003ccode\u003ei\u003c/code\u003e must be nonnegative and less than\n   the length of the vector.  This instruction implements communication from the parallel context to the serial context.\n\u003c/p\u003e",
        "fct-module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "v s -\u003e s -\u003e s",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#extract",
        "fct-type": "method",
        "title": "extract"
      },
      "index": {
        "description": "Extracts an element of vector extract yields The scalar must be nonnegative and less than the length of the vector This instruction implements communication from the parallel context to the serial context",
        "hierarchy": "Control Parallel ScanVectorMachine ScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "name": "extract",
        "normalized": "a b-\u003eb-\u003eb",
        "package": "scan-vector-machine",
        "partial": "",
        "signature": "v s-\u003es-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eReplaces an element of a vector; \u003ccode\u003einsert v s i e\u003c/code\u003e sets \u003ccode\u003ei\u003c/code\u003e^th element of the vector to \u003ccode\u003es\u003c/code\u003e.  The scalar \u003ccode\u003ei\u003c/code\u003e must be\n   nonnegative and less than the length of the vector.  This instruction implements unicast communication from the\n   serial context to the parallel context.\n\u003c/p\u003e",
        "fct-module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "v s -\u003e s -\u003e s -\u003e v s",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#insert",
        "fct-type": "method",
        "title": "insert"
      },
      "index": {
        "description": "Replaces an element of vector insert sets th element of the vector to The scalar must be nonnegative and less than the length of the vector This instruction implements unicast communication from the serial context to the parallel context",
        "hierarchy": "Control Parallel ScanVectorMachine ScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "name": "insert",
        "normalized": "a b-\u003eb-\u003eb-\u003ea b",
        "package": "scan-vector-machine",
        "partial": "",
        "signature": "v s-\u003es-\u003es-\u003ev s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the length of a parallel vector.  These can be cached in the serial context since the length of a vector\n   never depends on data from the paralell context; as a result \u003ccode\u003elength\u003c/code\u003e does not actually involve communication.\n\u003c/p\u003e",
        "fct-module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "v s -\u003e s",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#length",
        "fct-type": "method",
        "title": "length"
      },
      "index": {
        "description": "Returns the length of parallel vector These can be cached in the serial context since the length of vector never depends on data from the paralell context as result length does not actually involve communication",
        "hierarchy": "Control Parallel ScanVectorMachine ScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "name": "length",
        "normalized": "a b-\u003eb",
        "package": "scan-vector-machine",
        "partial": "",
        "signature": "v s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#v:leq",
      "description": {
        "fct-descr": "\u003cp\u003eElementwise less-than-or-equal-to comparison.  Both vectors must be the same length.\n\u003c/p\u003e",
        "fct-module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "v s -\u003e v s -\u003e v s",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#leq",
        "fct-type": "method",
        "title": "leq"
      },
      "index": {
        "description": "Elementwise less-than-or-equal-to comparison Both vectors must be the same length",
        "hierarchy": "Control Parallel ScanVectorMachine ScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "name": "leq",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "scan-vector-machine",
        "partial": "",
        "signature": "v s-\u003ev s-\u003ev s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#v:neg",
      "description": {
        "fct-descr": "\u003cp\u003eScalar negation all of the elements of the vector.\n\u003c/p\u003e",
        "fct-module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "v s -\u003e v s",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#neg",
        "fct-type": "method",
        "title": "neg"
      },
      "index": {
        "description": "Scalar negation all of the elements of the vector",
        "hierarchy": "Control Parallel ScanVectorMachine ScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "name": "neg",
        "normalized": "a b-\u003ea b",
        "package": "scan-vector-machine",
        "partial": "",
        "signature": "v s-\u003ev s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#v:op",
      "description": {
        "fct-descr": "\u003cp\u003eElementwise operations (see \u003ccode\u003eOp\u003c/code\u003e).  Both vectors must be the same length.\n\u003c/p\u003e",
        "fct-module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "Op -\u003e v s -\u003e v s -\u003e v s",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#op",
        "fct-type": "method",
        "title": "op"
      },
      "index": {
        "description": "Elementwise operations see Op Both vectors must be the same length",
        "hierarchy": "Control Parallel ScanVectorMachine ScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "name": "op",
        "normalized": "Op-\u003ea b-\u003ea b-\u003ea b",
        "package": "scan-vector-machine",
        "partial": "",
        "signature": "Op-\u003ev s-\u003ev s-\u003ev s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#v:permute",
      "description": {
        "fct-descr": "\u003cp\u003ePermutation: \u003ccode\u003epermute v1 v2\u003c/code\u003e returns a vector \u003ccode\u003ev3\u003c/code\u003e where \u003ccode\u003ev3[v2[i]] = v1[i]\u003c/code\u003e for all \u003ccode\u003ei\u003c/code\u003e.  Both vectors\n   must be the same length and the elements of \u003ccode\u003ev2\u003c/code\u003e must all be distinct, non-negative, and\n   less than the lengths of the vectors.\n\u003c/p\u003e",
        "fct-module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "v s -\u003e v s -\u003e v s",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#permute",
        "fct-type": "method",
        "title": "permute"
      },
      "index": {
        "description": "Permutation permute v1 v2 returns vector v3 where v3 v2 v1 for all Both vectors must be the same length and the elements of v2 must all be distinct non-negative and less than the lengths of the vectors",
        "hierarchy": "Control Parallel ScanVectorMachine ScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "name": "permute",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "scan-vector-machine",
        "partial": "",
        "signature": "v s-\u003ev s-\u003ev s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#v:scan",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix scan operations (see \u003ccode\u003eOp\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "Op -\u003e v s -\u003e v s",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#scan",
        "fct-type": "method",
        "title": "scan"
      },
      "index": {
        "description": "Prefix scan operations see Op",
        "hierarchy": "Control Parallel ScanVectorMachine ScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "name": "scan",
        "normalized": "Op-\u003ea b-\u003ea b",
        "package": "scan-vector-machine",
        "partial": "",
        "signature": "Op-\u003ev s-\u003ev s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eIf-then-else; \u003ccode\u003eselect b x y\u003c/code\u003e returns a vector whose \u003ccode\u003ei\u003c/code\u003e^th element is \u003ccode\u003eif b[i] then x[i] else y[i]\u003c/code\u003e.\n   All three vectors must be the same length.\n\u003c/p\u003e",
        "fct-module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "v s -\u003e v s -\u003e v s -\u003e v s",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-ScanVectorMachine.html#select",
        "fct-type": "method",
        "title": "select"
      },
      "index": {
        "description": "If-then-else select returns vector whose th element is if then else All three vectors must be the same length",
        "hierarchy": "Control Parallel ScanVectorMachine ScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.ScanVectorMachine",
        "name": "select",
        "normalized": "a b-\u003ea b-\u003ea b-\u003ea b",
        "package": "scan-vector-machine",
        "partial": "",
        "signature": "v s-\u003ev s-\u003ev s-\u003ev s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-SegmentedScanVectorMachine.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn instance of \u003ccode\u003eSegmentedScanVectorMachine\u003c/code\u003e provides a scalar\n   type \u003ccode\u003es\u003c/code\u003e, a vector type \u003ccode\u003ev\u003c/code\u003e, and a segmented vector\n   (vector-of-vectors) type \u003ccode\u003ev'\u003c/code\u003e such that \u003ccode\u003ev\u003c/code\u003e implements the SVM\n   operations over \u003ccode\u003es\u003c/code\u003e \u003cem\u003eand\u003c/em\u003e \u003ccode\u003ev'\u003c/code\u003e implements the SVM operations over\n   \u003ccode\u003ev s\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis file contains a default instance for \u003ccode\u003eScanVectorMachine V' (V S)\u003c/code\u003e,\n   given an instance \u003ccode\u003eScanVectorMachine V S\u003c/code\u003e.  In other words, given an\n   implementation of vectors-of-scalars, this will produce an\n   implementation of vectors-of-vectors-of-scalars.\n\u003c/p\u003e\u003cp\u003eThis new type \u003ccode\u003eV'\u003c/code\u003e provides SVM operations over\n   vectors-of-vectors-of-scalars; from the perspective of \u003ccode\u003eV'\u003c/code\u003e, the\n   vectors-of-scalars are called \u003cem\u003esegments\u003c/em\u003e.  Notice that \u003ccode\u003eV'\u003c/code\u003e uses\n   vectors-of-scalars wherever ordinary scalars were previously\n   used.  For example, when the \u003cem\u003elength\u003c/em\u003e operation is applied to a\n   vector-of-vectors the result is not a scalar, but rather a\n   vector-of-scalars giving the lengths of each of the segments.\n   This phenomenon is crucial to the replication theorem and\n   flattening transformation.\n\u003c/p\u003e\u003cp\u003eIt turns out that \u003ccode\u003eV'\u003c/code\u003e is basically \u003ccode\u003e(,)\u003c/code\u003e -- but this is not\n   exposed to the user.  Blelloch outlines three encodings (figure\n   4.2): head-flags, length, and head-pointer.  The implementation\n   below uses the \u003cem\u003elength\u003c/em\u003e style since it can represent zero-length\n   vectors efficiently.\n\u003c/p\u003e\u003cp\u003eIt is sometimes advantageous for hardware/platform providers to\n   implement vectors-of-vectors-of-scalars directly (see\n   \u003ccode\u003eNestedVectors.hs\u003c/code\u003e for the reasoning).  To do this, implement the\n   class \u003ccode\u003eSegmentedScanVectorMachine\u003c/code\u003e below.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Parallel.ScanVectorMachine.SegmentedScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "module",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-SegmentedScanVectorMachine.html",
        "fct-type": "module",
        "title": "SegmentedScanVectorMachine"
      },
      "index": {
        "description": "An instance of SegmentedScanVectorMachine provides scalar type vector type and segmented vector vector-of-vectors type such that implements the SVM operations over and implements the SVM operations over This file contains default instance for ScanVectorMachine given an instance ScanVectorMachine In other words given an implementation of vectors-of-scalars this will produce an implementation of vectors-of-vectors-of-scalars This new type provides SVM operations over vectors-of-vectors-of-scalars from the perspective of the vectors-of-scalars are called segments Notice that uses vectors-of-scalars wherever ordinary scalars were previously used For example when the length operation is applied to vector-of-vectors the result is not scalar but rather vector-of-scalars giving the lengths of each of the segments This phenomenon is crucial to the replication theorem and flattening transformation It turns out that is basically but this is not exposed to the user Blelloch outlines three encodings figure head-flags length and head-pointer The implementation below uses the length style since it can represent zero-length vectors efficiently It is sometimes advantageous for hardware platform providers to implement vectors-of-vectors-of-scalars directly see NestedVectors.hs for the reasoning To do this implement the class SegmentedScanVectorMachine below",
        "hierarchy": "Control Parallel ScanVectorMachine SegmentedScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.SegmentedScanVectorMachine",
        "name": "SegmentedScanVectorMachine",
        "normalized": "",
        "package": "scan-vector-machine",
        "partial": "Segmented Scan Vector Machine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-SegmentedScanVectorMachine.html#t:SegmentedScanVectorMachine",
      "description": {
        "fct-module": "Control.Parallel.ScanVectorMachine.SegmentedScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "class",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-SegmentedScanVectorMachine.html#SegmentedScanVectorMachine",
        "fct-type": "class",
        "title": "SegmentedScanVectorMachine"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Parallel ScanVectorMachine SegmentedScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.SegmentedScanVectorMachine",
        "name": "SegmentedScanVectorMachine",
        "normalized": "",
        "package": "scan-vector-machine",
        "partial": "Segmented Scan Vector Machine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-SerialScanVectorMachine.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA crude implementation of the ScanVectorMachine class using\n   \u003ccode\u003eData.Array.IArray\u003c/code\u003e; no parallelism.  Warning: outrageously\n   inefficient code ahead!\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Parallel.ScanVectorMachine.SerialScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "module",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-SerialScanVectorMachine.html",
        "fct-type": "module",
        "title": "SerialScanVectorMachine"
      },
      "index": {
        "description": "crude implementation of the ScanVectorMachine class using Data.Array.IArray no parallelism Warning outrageously inefficient code ahead",
        "hierarchy": "Control Parallel ScanVectorMachine SerialScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.SerialScanVectorMachine",
        "name": "SerialScanVectorMachine",
        "normalized": "",
        "package": "scan-vector-machine",
        "partial": "Serial Scan Vector Machine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scan-vector-machine/docs/Control-Parallel-ScanVectorMachine-SerialScanVectorMachine.html#t:SSVM",
      "description": {
        "fct-module": "Control.Parallel.ScanVectorMachine.SerialScanVectorMachine",
        "fct-package": "scan-vector-machine",
        "fct-signature": "data",
        "fct-source": "src/Control-Parallel-ScanVectorMachine-SerialScanVectorMachine.html#SSVM",
        "fct-type": "data",
        "title": "SSVM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Parallel ScanVectorMachine SerialScanVectorMachine",
        "module": "Control.Parallel.ScanVectorMachine.SerialScanVectorMachine",
        "name": "SSVM",
        "normalized": "",
        "package": "scan-vector-machine",
        "partial": "SSVM",
        "signature": ""
      }
    }
  }
]