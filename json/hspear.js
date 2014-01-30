[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-GZ.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariants for handling \u003ccode\u003eGZIP\u003c/code\u003e compressed data.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF.GZ",
        "fct-package": "hspear",
        "fct-signature": "module",
        "fct-source": "src/Sound-Analysis-Spear-PTPF-GZ.html",
        "fct-type": "module",
        "title": "GZ"
      },
      "index": {
        "description": "Variants for handling GZIP compressed data",
        "hierarchy": "Sound Analysis Spear PTPF GZ",
        "module": "Sound.Analysis.Spear.PTPF.GZ",
        "name": "GZ",
        "normalized": "",
        "package": "hspear",
        "partial": "GZ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-GZ.html#v:at_right",
      "description": {
        "fct-descr": "\u003cp\u003eApply \u003cem\u003ef\u003c/em\u003e at \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e, else \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF.GZ",
        "fct-package": "hspear",
        "fct-signature": "(a -\u003e b) -\u003e Either t a -\u003e Either t b",
        "fct-source": "src/Sound-Analysis-Spear-PTPF-GZ.html#at_right",
        "fct-type": "function",
        "title": "at_right"
      },
      "index": {
        "description": "Apply at Right else id",
        "hierarchy": "Sound Analysis Spear PTPF GZ",
        "module": "Sound.Analysis.Spear.PTPF.GZ",
        "name": "at_right",
        "normalized": "(a-\u003eb)-\u003eEither c a-\u003eEither c b",
        "package": "hspear",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eEither t a-\u003eEither t b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-GZ.html#v:load_ptpf_gz",
      "description": {
        "fct-descr": "\u003cp\u003eLoad compressed spear data.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF.GZ",
        "fct-package": "hspear",
        "fct-signature": "FilePath -\u003e IO (Either String PTPF)",
        "fct-source": "src/Sound-Analysis-Spear-PTPF-GZ.html#load_ptpf_gz",
        "fct-type": "function",
        "title": "load_ptpf_gz"
      },
      "index": {
        "description": "Load compressed spear data",
        "hierarchy": "Sound Analysis Spear PTPF GZ",
        "module": "Sound.Analysis.Spear.PTPF.GZ",
        "name": "load_ptpf_gz",
        "normalized": "FilePath-\u003eIO(Either String PTPF)",
        "package": "hspear",
        "partial": "",
        "signature": "FilePath-\u003eIO(Either String PTPF)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-GZ.html#v:load_ptpf_gz_time_asc",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eload_ptpf_gz\u003c/a\u003e\u003c/code\u003e transforming with \u003ccode\u003e\u003ca\u003eptpf_time_asc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF.GZ",
        "fct-package": "hspear",
        "fct-signature": "FilePath -\u003e IO (Either String [(N_Time, [Node])])",
        "fct-source": "src/Sound-Analysis-Spear-PTPF-GZ.html#load_ptpf_gz_time_asc",
        "fct-type": "function",
        "title": "load_ptpf_gz_time_asc"
      },
      "index": {
        "description": "Variant of load ptpf gz transforming with ptpf time asc",
        "hierarchy": "Sound Analysis Spear PTPF GZ",
        "module": "Sound.Analysis.Spear.PTPF.GZ",
        "name": "load_ptpf_gz_time_asc",
        "normalized": "FilePath-\u003eIO(Either String[(N_Time,[Node])])",
        "package": "hspear",
        "partial": "",
        "signature": "FilePath-\u003eIO(Either String[(N_Time,[Node])])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-GZ.html#v:parse_ptpf_gz",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eparse_ptpf\u003c/a\u003e\u003c/code\u003e running \u003ccode\u003e\u003ca\u003edecompress\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF.GZ",
        "fct-package": "hspear",
        "fct-signature": "ByteString -\u003e Either String PTPF",
        "fct-source": "src/Sound-Analysis-Spear-PTPF-GZ.html#parse_ptpf_gz",
        "fct-type": "function",
        "title": "parse_ptpf_gz"
      },
      "index": {
        "description": "Variant of parse ptpf running decompress",
        "hierarchy": "Sound Analysis Spear PTPF GZ",
        "module": "Sound.Analysis.Spear.PTPF.GZ",
        "name": "parse_ptpf_gz",
        "normalized": "ByteString-\u003eEither String PTPF",
        "package": "hspear",
        "partial": "",
        "signature": "ByteString-\u003eEither String PTPF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-Reduce.html#",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF.Reduce",
        "fct-package": "hspear",
        "fct-signature": "module",
        "fct-source": "src/Sound-Analysis-Spear-PTPF-Reduce.html",
        "fct-type": "module",
        "title": "Reduce"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF Reduce",
        "module": "Sound.Analysis.Spear.PTPF.Reduce",
        "name": "Reduce",
        "normalized": "",
        "package": "hspear",
        "partial": "Reduce",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-Reduce.html#t:N_Reduction_F",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if (n1,n2,n3) can be reduced to (n1,n3).\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF.Reduce",
        "fct-package": "hspear",
        "fct-signature": "type",
        "fct-source": "src/Sound-Analysis-Spear-PTPF-Reduce.html#N_Reduction_F",
        "fct-type": "type",
        "title": "N_Reduction_F"
      },
      "index": {
        "description": "True if n1 n2 n3 can be reduced to n1 n3",
        "hierarchy": "Sound Analysis Spear PTPF Reduce",
        "module": "Sound.Analysis.Spear.PTPF.Reduce",
        "name": "N_Reduction_F",
        "normalized": "",
        "package": "hspear",
        "partial": "Reduction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-Reduce.html#v:ampDb",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF.Reduce",
        "fct-package": "hspear",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Sound-Analysis-Spear-PTPF-Reduce.html#ampDb",
        "fct-type": "function",
        "title": "ampDb"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF Reduce",
        "module": "Sound.Analysis.Spear.PTPF.Reduce",
        "name": "ampDb",
        "normalized": "a-\u003ea",
        "package": "hspear",
        "partial": "Db",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-Reduce.html#v:cps_to_fmidi",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF.Reduce",
        "fct-package": "hspear",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Sound-Analysis-Spear-PTPF-Reduce.html#cps_to_fmidi",
        "fct-type": "function",
        "title": "cps_to_fmidi"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF Reduce",
        "module": "Sound.Analysis.Spear.PTPF.Reduce",
        "name": "cps_to_fmidi",
        "normalized": "a-\u003ea",
        "package": "hspear",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-Reduce.html#v:n_gradient",
      "description": {
        "fct-descr": "\u003cp\u003eFrequency (FMIDI) and amplitude (DB) gradient from \u003cem\u003en1\u003c/em\u003e to \u003cem\u003en2\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF.Reduce",
        "fct-package": "hspear",
        "fct-signature": "Node -\u003e Node -\u003e (N_Data, N_Data)",
        "fct-source": "src/Sound-Analysis-Spear-PTPF-Reduce.html#n_gradient",
        "fct-type": "function",
        "title": "n_gradient"
      },
      "index": {
        "description": "Frequency FMIDI and amplitude DB gradient from n1 to n2",
        "hierarchy": "Sound Analysis Spear PTPF Reduce",
        "module": "Sound.Analysis.Spear.PTPF.Reduce",
        "name": "n_gradient",
        "normalized": "Node-\u003eNode-\u003e(N_Data,N_Data)",
        "package": "hspear",
        "partial": "",
        "signature": "Node-\u003eNode-\u003e(N_Data,N_Data)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-Reduce.html#v:n_reduction",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF.Reduce",
        "fct-package": "hspear",
        "fct-signature": "N_Reduction_F -\u003e [Node] -\u003e [Node]",
        "fct-source": "src/Sound-Analysis-Spear-PTPF-Reduce.html#n_reduction",
        "fct-type": "function",
        "title": "n_reduction"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF Reduce",
        "module": "Sound.Analysis.Spear.PTPF.Reduce",
        "name": "n_reduction",
        "normalized": "N_Reduction_F-\u003e[Node]-\u003e[Node]",
        "package": "hspear",
        "partial": "",
        "signature": "N_Reduction_F-\u003e[Node]-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-Reduce.html#v:p_reduction_gradient",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF.Reduce",
        "fct-package": "hspear",
        "fct-signature": "(N_Data, N_Data) -\u003e PTPF -\u003e PTPF",
        "fct-source": "src/Sound-Analysis-Spear-PTPF-Reduce.html#p_reduction_gradient",
        "fct-type": "function",
        "title": "p_reduction_gradient"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF Reduce",
        "module": "Sound.Analysis.Spear.PTPF.Reduce",
        "name": "p_reduction_gradient",
        "normalized": "(N_Data,N_Data)-\u003ePTPF-\u003ePTPF",
        "package": "hspear",
        "partial": "",
        "signature": "(N_Data,N_Data)-\u003ePTPF-\u003ePTPF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-Reduce.html#v:s_reduction",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF.Reduce",
        "fct-package": "hspear",
        "fct-signature": "N_Reduction_F -\u003e Seq -\u003e Seq",
        "fct-source": "src/Sound-Analysis-Spear-PTPF-Reduce.html#s_reduction",
        "fct-type": "function",
        "title": "s_reduction"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF Reduce",
        "module": "Sound.Analysis.Spear.PTPF.Reduce",
        "name": "s_reduction",
        "normalized": "N_Reduction_F-\u003eSeq-\u003eSeq",
        "package": "hspear",
        "partial": "",
        "signature": "N_Reduction_F-\u003eSeq-\u003eSeq"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-Reduce.html#v:s_reduction_gradient",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF.Reduce",
        "fct-package": "hspear",
        "fct-signature": "(N_Data, N_Data) -\u003e Seq -\u003e Seq",
        "fct-source": "src/Sound-Analysis-Spear-PTPF-Reduce.html#s_reduction_gradient",
        "fct-type": "function",
        "title": "s_reduction_gradient"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF Reduce",
        "module": "Sound.Analysis.Spear.PTPF.Reduce",
        "name": "s_reduction_gradient",
        "normalized": "(N_Data,N_Data)-\u003eSeq-\u003eSeq",
        "package": "hspear",
        "partial": "",
        "signature": "(N_Data,N_Data)-\u003eSeq-\u003eSeq"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-String.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e variant of parser.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF.String",
        "fct-package": "hspear",
        "fct-signature": "module",
        "fct-source": "src/Sound-Analysis-Spear-PTPF-String.html",
        "fct-type": "module",
        "title": "String"
      },
      "index": {
        "description": "String variant of parser",
        "hierarchy": "Sound Analysis Spear PTPF String",
        "module": "Sound.Analysis.Spear.PTPF.String",
        "name": "String",
        "normalized": "",
        "package": "hspear",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-String.html#v:parse_ptpf",
      "description": {
        "fct-descr": "\u003cp\u003eParse \u003ccode\u003e\u003ca\u003ePTPF\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF.String",
        "fct-package": "hspear",
        "fct-signature": "String -\u003e Either String PTPF",
        "fct-source": "src/Sound-Analysis-Spear-PTPF-String.html#parse_ptpf",
        "fct-type": "function",
        "title": "parse_ptpf"
      },
      "index": {
        "description": "Parse PTPF at String",
        "hierarchy": "Sound Analysis Spear PTPF String",
        "module": "Sound.Analysis.Spear.PTPF.String",
        "name": "parse_ptpf",
        "normalized": "String-\u003eEither String PTPF",
        "package": "hspear",
        "partial": "",
        "signature": "String-\u003eEither String PTPF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-String.html#v:ptpf_header",
      "description": {
        "fct-descr": "\u003cp\u003eParse header section, result is number of partials.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF.String",
        "fct-package": "hspear",
        "fct-signature": "[String] -\u003e Maybe Int",
        "fct-source": "src/Sound-Analysis-Spear-PTPF-String.html#ptpf_header",
        "fct-type": "function",
        "title": "ptpf_header"
      },
      "index": {
        "description": "Parse header section result is number of partials",
        "hierarchy": "Sound Analysis Spear PTPF String",
        "module": "Sound.Analysis.Spear.PTPF.String",
        "name": "ptpf_header",
        "normalized": "[String]-\u003eMaybe Int",
        "package": "hspear",
        "partial": "",
        "signature": "[String]-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-String.html#v:ptpf_node",
      "description": {
        "fct-descr": "\u003cp\u003eParse \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF.String",
        "fct-package": "hspear",
        "fct-signature": "Int -\u003e (String, String, String) -\u003e Node",
        "fct-source": "src/Sound-Analysis-Spear-PTPF-String.html#ptpf_node",
        "fct-type": "function",
        "title": "ptpf_node"
      },
      "index": {
        "description": "Parse Node",
        "hierarchy": "Sound Analysis Spear PTPF String",
        "module": "Sound.Analysis.Spear.PTPF.String",
        "name": "ptpf_node",
        "normalized": "Int-\u003e(String,String,String)-\u003eNode",
        "package": "hspear",
        "partial": "",
        "signature": "Int-\u003e(String,String,String)-\u003eNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-String.html#v:ptpf_seq",
      "description": {
        "fct-descr": "\u003cp\u003eParse \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e from pair of input lines.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF.String",
        "fct-package": "hspear",
        "fct-signature": "(String, String) -\u003e Seq",
        "fct-source": "src/Sound-Analysis-Spear-PTPF-String.html#ptpf_seq",
        "fct-type": "function",
        "title": "ptpf_seq"
      },
      "index": {
        "description": "Parse Seq from pair of input lines",
        "hierarchy": "Sound Analysis Spear PTPF String",
        "module": "Sound.Analysis.Spear.PTPF.String",
        "name": "ptpf_seq",
        "normalized": "(String,String)-\u003eSeq",
        "package": "hspear",
        "partial": "",
        "signature": "(String,String)-\u003eSeq"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eSpear\u003c/em\u003e \u003ccode\u003ePTPF\u003c/code\u003e (par-text-partials-format) files.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "module",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html",
        "fct-type": "module",
        "title": "PTPF"
      },
      "index": {
        "description": "Spear PTPF par-text-partials-format files",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "PTPF",
        "normalized": "",
        "package": "hspear",
        "partial": "PTPF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#t:N_Data",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "type",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#N_Data",
        "fct-type": "type",
        "title": "N_Data"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "N_Data",
        "normalized": "",
        "package": "hspear",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#t:N_Time",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "type",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#N_Time",
        "fct-type": "type",
        "title": "N_Time"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "N_Time",
        "normalized": "",
        "package": "hspear",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#t:Node",
      "description": {
        "fct-descr": "\u003cp\u003eRecord to hold data for single node of a partial track.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "data",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#Node",
        "fct-type": "data",
        "title": "Node"
      },
      "index": {
        "description": "Record to hold data for single node of partial track",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "Node",
        "normalized": "",
        "package": "hspear",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#t:PTPF",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePTPF\u003c/a\u003e\u003c/code\u003e is a set of \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "data",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#PTPF",
        "fct-type": "data",
        "title": "PTPF"
      },
      "index": {
        "description": "PTPF is set of Seq",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "PTPF",
        "normalized": "",
        "package": "hspear",
        "partial": "PTPF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#t:STR",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "type",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#STR",
        "fct-type": "type",
        "title": "STR"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "STR",
        "normalized": "",
        "package": "hspear",
        "partial": "STR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#t:Seq",
      "description": {
        "fct-descr": "\u003cp\u003eA sequence of partial \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e data.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "data",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#Seq",
        "fct-type": "data",
        "title": "Seq"
      },
      "index": {
        "description": "sequence of partial Node data",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "Seq",
        "normalized": "",
        "package": "hspear",
        "partial": "Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:Node",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "Node",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#Node",
        "fct-type": "function",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "Node",
        "normalized": "",
        "package": "hspear",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:PTPF",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "PTPF",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#PTPF",
        "fct-type": "function",
        "title": "PTPF"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "PTPF",
        "normalized": "",
        "package": "hspear",
        "partial": "PTPF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:Seq",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "Seq",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#Seq",
        "fct-type": "function",
        "title": "Seq"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "Seq",
        "normalized": "",
        "package": "hspear",
        "partial": "Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:at_last",
      "description": {
        "fct-descr": "\u003cp\u003eApply \u003cem\u003ef\u003c/em\u003e at last element.\n\u003c/p\u003e\u003cpre\u003e at_last negate [1..3] == [1,2,-3]\n\u003c/pre\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "(a -\u003e a) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#at_last",
        "fct-type": "function",
        "title": "at_last"
      },
      "index": {
        "description": "Apply at last element at last negate",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "at_last",
        "normalized": "(a-\u003ea)-\u003e[a]-\u003e[a]",
        "package": "hspear",
        "partial": "",
        "signature": "(a-\u003ea)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:duples",
      "description": {
        "fct-descr": "\u003cp\u003eAdjacent duples.\n\u003c/p\u003e\u003cpre\u003e duples [1..6] == [(1,2),(3,4),(5,6)]\n\u003c/pre\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "[t] -\u003e [(t, t)]",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#duples",
        "fct-type": "function",
        "title": "duples"
      },
      "index": {
        "description": "Adjacent duples duples",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "duples",
        "normalized": "[a]-\u003e[(a,a)]",
        "package": "hspear",
        "partial": "",
        "signature": "[t]-\u003e[(t,t)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:mean",
      "description": {
        "fct-descr": "\u003cp\u003eNumerically stable mean\n\u003c/p\u003e\u003cpre\u003e map mean [[1..5],[3,5,7],[7,7],[3,9,10,11,12]] == [3,5,7,9]\n\u003c/pre\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#mean",
        "fct-type": "function",
        "title": "mean"
      },
      "index": {
        "description": "Numerically stable mean map mean",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "mean",
        "normalized": "[a]-\u003ea",
        "package": "hspear",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:minmax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e minmax [0..5] == (0,5)\n\u003c/pre\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "[b] -\u003e (b, b)",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#minmax",
        "fct-type": "function",
        "title": "minmax"
      },
      "index": {
        "description": "minimum maximum minmax",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "minmax",
        "normalized": "[a]-\u003e(a,a)",
        "package": "hspear",
        "partial": "",
        "signature": "[b]-\u003e(b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:n_amplitude",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "N_Data",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#Node",
        "fct-type": "function",
        "title": "n_amplitude"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "n_amplitude",
        "normalized": "",
        "package": "hspear",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:n_frequency",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "N_Data",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#Node",
        "fct-type": "function",
        "title": "n_frequency"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "n_frequency",
        "normalized": "",
        "package": "hspear",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:n_partial_id",
      "description": {
        "fct-descr": "\u003cp\u003ePartial identifier\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "Int",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#Node",
        "fct-type": "function",
        "title": "n_partial_id"
      },
      "index": {
        "description": "Partial identifier",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "n_partial_id",
        "normalized": "",
        "package": "hspear",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:n_set_partial_id",
      "description": {
        "fct-descr": "\u003cp\u003eSet \u003ccode\u003e\u003ca\u003en_partial_id\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "Int -\u003e Node -\u003e Node",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#n_set_partial_id",
        "fct-type": "function",
        "title": "n_set_partial_id"
      },
      "index": {
        "description": "Set partial id at Node",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "n_set_partial_id",
        "normalized": "Int-\u003eNode-\u003eNode",
        "package": "hspear",
        "partial": "",
        "signature": "Int-\u003eNode-\u003eNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:n_temporal_f",
      "description": {
        "fct-descr": "\u003cp\u003eApply transform \u003cem\u003ef\u003c/em\u003e at \u003ccode\u003e\u003ca\u003en_time\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "(N_Time -\u003e N_Time) -\u003e Node -\u003e Node",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#n_temporal_f",
        "fct-type": "function",
        "title": "n_temporal_f"
      },
      "index": {
        "description": "Apply transform at time",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "n_temporal_f",
        "normalized": "(N_Time-\u003eN_Time)-\u003eNode-\u003eNode",
        "package": "hspear",
        "partial": "",
        "signature": "(N_Time-\u003eN_Time)-\u003eNode-\u003eNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:n_time",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "Double",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#Node",
        "fct-type": "function",
        "title": "n_time"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "n_time",
        "normalized": "",
        "package": "hspear",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:n_zero_amplitude",
      "description": {
        "fct-descr": "\u003cp\u003eSet \u003ccode\u003e\u003ca\u003en_amplitude\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "Node -\u003e Node",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#n_zero_amplitude",
        "fct-type": "function",
        "title": "n_zero_amplitude"
      },
      "index": {
        "description": "Set amplitude at Node to",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "n_zero_amplitude",
        "normalized": "Node-\u003eNode",
        "package": "hspear",
        "partial": "",
        "signature": "Node-\u003eNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_end_time",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003es_end_time\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003ep_seq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "PTPF -\u003e N_Time",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#p_end_time",
        "fct-type": "function",
        "title": "p_end_time"
      },
      "index": {
        "description": "maximum end time at seq",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "p_end_time",
        "normalized": "PTPF-\u003eN_Time",
        "package": "hspear",
        "partial": "",
        "signature": "PTPF-\u003eN_Time"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_filter",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "(Seq -\u003e Bool) -\u003e PTPF -\u003e PTPF",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#p_filter",
        "fct-type": "function",
        "title": "p_filter"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "p_filter",
        "normalized": "(Seq-\u003eBool)-\u003ePTPF-\u003ePTPF",
        "package": "hspear",
        "partial": "",
        "signature": "(Seq-\u003eBool)-\u003ePTPF-\u003ePTPF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_from_seq",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate \u003ccode\u003e\u003ca\u003ePTPF\u003c/a\u003e\u003c/code\u003e from set of \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e.  Re-assigns partial identifiers.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "[Seq] -\u003e PTPF",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#p_from_seq",
        "fct-type": "function",
        "title": "p_from_seq"
      },
      "index": {
        "description": "Generate PTPF from set of Seq Re-assigns partial identifiers",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "p_from_seq",
        "normalized": "[Seq]-\u003ePTPF",
        "package": "hspear",
        "partial": "",
        "signature": "[Seq]-\u003ePTPF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_map",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "(Seq -\u003e Seq) -\u003e PTPF -\u003e PTPF",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#p_map",
        "fct-type": "function",
        "title": "p_map"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "p_map",
        "normalized": "(Seq-\u003eSeq)-\u003ePTPF-\u003ePTPF",
        "package": "hspear",
        "partial": "",
        "signature": "(Seq-\u003eSeq)-\u003ePTPF-\u003ePTPF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_node_map",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "(Node -\u003e Node) -\u003e PTPF -\u003e PTPF",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#p_node_map",
        "fct-type": "function",
        "title": "p_node_map"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "p_node_map",
        "normalized": "(Node-\u003eNode)-\u003ePTPF-\u003ePTPF",
        "package": "hspear",
        "partial": "",
        "signature": "(Node-\u003eNode)-\u003ePTPF-\u003ePTPF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_nodes",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esum\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003es_nodes\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003ep_seq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "PTPF -\u003e Int",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#p_nodes",
        "fct-type": "function",
        "title": "p_nodes"
      },
      "index": {
        "description": "sum of nodes of seq",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "p_nodes",
        "normalized": "PTPF-\u003eInt",
        "package": "hspear",
        "partial": "",
        "signature": "PTPF-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_partials",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "Int",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#PTPF",
        "fct-type": "function",
        "title": "p_partials"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "p_partials",
        "normalized": "",
        "package": "hspear",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_seq",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "[Seq]",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#PTPF",
        "fct-type": "function",
        "title": "p_seq"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "p_seq",
        "normalized": "[Seq]",
        "package": "hspear",
        "partial": "",
        "signature": "[Seq]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_start_time",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003es_start_time\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003ep_seq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "PTPF -\u003e N_Time",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#p_start_time",
        "fct-type": "function",
        "title": "p_start_time"
      },
      "index": {
        "description": "minimum start time at seq",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "p_start_time",
        "normalized": "PTPF-\u003eN_Time",
        "package": "hspear",
        "partial": "",
        "signature": "PTPF-\u003eN_Time"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_temporal_f",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "(N_Time -\u003e N_Time) -\u003e PTPF -\u003e PTPF",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#p_temporal_f",
        "fct-type": "function",
        "title": "p_temporal_f"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "p_temporal_f",
        "normalized": "(N_Time-\u003eN_Time)-\u003ePTPF-\u003ePTPF",
        "package": "hspear",
        "partial": "",
        "signature": "(N_Time-\u003eN_Time)-\u003ePTPF-\u003ePTPF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:parse_ptpf",
      "description": {
        "fct-descr": "\u003cp\u003eParse \u003ccode\u003e\u003ca\u003ePTPF\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003eSTR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "STR -\u003e Either String PTPF",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#parse_ptpf",
        "fct-type": "function",
        "title": "parse_ptpf"
      },
      "index": {
        "description": "Parse PTPF at STR",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "parse_ptpf",
        "normalized": "STR-\u003eEither String PTPF",
        "package": "hspear",
        "partial": "",
        "signature": "STR-\u003eEither String PTPF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:ptpf_header",
      "description": {
        "fct-descr": "\u003cp\u003eParse header section, result is number of partials.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "[STR] -\u003e Maybe Int",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#ptpf_header",
        "fct-type": "function",
        "title": "ptpf_header"
      },
      "index": {
        "description": "Parse header section result is number of partials",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "ptpf_header",
        "normalized": "[STR]-\u003eMaybe Int",
        "package": "hspear",
        "partial": "",
        "signature": "[STR]-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:ptpf_node",
      "description": {
        "fct-descr": "\u003cp\u003eParse \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "Int -\u003e (STR, STR, STR) -\u003e Node",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#ptpf_node",
        "fct-type": "function",
        "title": "ptpf_node"
      },
      "index": {
        "description": "Parse Node",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "ptpf_node",
        "normalized": "Int-\u003e(STR,STR,STR)-\u003eNode",
        "package": "hspear",
        "partial": "",
        "signature": "Int-\u003e(STR,STR,STR)-\u003eNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:ptpf_seq",
      "description": {
        "fct-descr": "\u003cp\u003eParse \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e from pair of input lines.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "(STR, STR) -\u003e Seq",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#ptpf_seq",
        "fct-type": "function",
        "title": "ptpf_seq"
      },
      "index": {
        "description": "Parse Seq from pair of input lines",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "ptpf_seq",
        "normalized": "(STR,STR)-\u003eSeq",
        "package": "hspear",
        "partial": "",
        "signature": "(STR,STR)-\u003eSeq"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:ptpf_time_asc",
      "description": {
        "fct-descr": "\u003cp\u003eAll \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es grouped into sets with equal start times.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "PTPF -\u003e [(N_Time, [Node])]",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#ptpf_time_asc",
        "fct-type": "function",
        "title": "ptpf_time_asc"
      },
      "index": {
        "description": "All Node grouped into sets with equal start times",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "ptpf_time_asc",
        "normalized": "PTPF-\u003e[(N_Time,[Node])]",
        "package": "hspear",
        "partial": "",
        "signature": "PTPF-\u003e[(N_Time,[Node])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_data",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "[Node]",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#Seq",
        "fct-type": "function",
        "title": "s_data"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "s_data",
        "normalized": "[Node]",
        "package": "hspear",
        "partial": "",
        "signature": "[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_duration",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003es_end_time\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003es_start_time\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "Seq -\u003e N_Time",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#s_duration",
        "fct-type": "function",
        "title": "s_duration"
      },
      "index": {
        "description": "end time start time",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "s_duration",
        "normalized": "Seq-\u003eN_Time",
        "package": "hspear",
        "partial": "",
        "signature": "Seq-\u003eN_Time"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_end_time",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003en_time\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003es_data\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "N_Time",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#Seq",
        "fct-type": "function",
        "title": "s_end_time"
      },
      "index": {
        "description": "maximum time at data",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "s_end_time",
        "normalized": "",
        "package": "hspear",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_eq_identifier",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eon\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003es_identifier\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "Seq -\u003e Seq -\u003e Bool",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#s_eq_identifier",
        "fct-type": "function",
        "title": "s_eq_identifier"
      },
      "index": {
        "description": "on identifier",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "s_eq_identifier",
        "normalized": "Seq-\u003eSeq-\u003eBool",
        "package": "hspear",
        "partial": "",
        "signature": "Seq-\u003eSeq-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_identifier",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003en_partial_id\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003es_data\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "Int",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#Seq",
        "fct-type": "function",
        "title": "s_identifier"
      },
      "index": {
        "description": "to partial id at data",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "s_identifier",
        "normalized": "",
        "package": "hspear",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_map",
      "description": {
        "fct-descr": "\u003cp\u003eApply \u003cem\u003ef\u003c/em\u003e at \u003ccode\u003e\u003ca\u003es_data\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e and re-calculate temporal bounds.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "(Node -\u003e Node) -\u003e Seq -\u003e Seq",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#s_map",
        "fct-type": "function",
        "title": "s_map"
      },
      "index": {
        "description": "Apply at data of Seq and re-calculate temporal bounds",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "s_map",
        "normalized": "(Node-\u003eNode)-\u003eSeq-\u003eSeq",
        "package": "hspear",
        "partial": "",
        "signature": "(Node-\u003eNode)-\u003eSeq-\u003eSeq"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_max_amplitude",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003en_amplitude\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003es_data\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "Seq -\u003e N_Data",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#s_max_amplitude",
        "fct-type": "function",
        "title": "s_max_amplitude"
      },
      "index": {
        "description": "maximum amplitude at data",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "s_max_amplitude",
        "normalized": "Seq-\u003eN_Data",
        "package": "hspear",
        "partial": "",
        "signature": "Seq-\u003eN_Data"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_mean_amplitude",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emean\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003en_amplitude\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003es_data\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "Seq -\u003e N_Data",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#s_mean_amplitude",
        "fct-type": "function",
        "title": "s_mean_amplitude"
      },
      "index": {
        "description": "mean amplitude at data",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "s_mean_amplitude",
        "normalized": "Seq-\u003eN_Data",
        "package": "hspear",
        "partial": "",
        "signature": "Seq-\u003eN_Data"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_mean_frequency",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emean\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003en_frequency\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003es_data\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "Seq -\u003e N_Data",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#s_mean_frequency",
        "fct-type": "function",
        "title": "s_mean_frequency"
      },
      "index": {
        "description": "mean frequency at data",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "s_mean_frequency",
        "normalized": "Seq-\u003eN_Data",
        "package": "hspear",
        "partial": "",
        "signature": "Seq-\u003eN_Data"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_min_amplitude",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003en_amplitude\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003es_data\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "Seq -\u003e N_Data",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#s_min_amplitude",
        "fct-type": "function",
        "title": "s_min_amplitude"
      },
      "index": {
        "description": "minimum amplitude at data",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "s_min_amplitude",
        "normalized": "Seq-\u003eN_Data",
        "package": "hspear",
        "partial": "",
        "signature": "Seq-\u003eN_Data"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_nodes",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003es_data\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "Int",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#Seq",
        "fct-type": "function",
        "title": "s_nodes"
      },
      "index": {
        "description": "to length data",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "s_nodes",
        "normalized": "",
        "package": "hspear",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_set_identifier",
      "description": {
        "fct-descr": "\u003cp\u003eSet \u003ccode\u003e\u003ca\u003es_identifier\u003c/a\u003e\u003c/code\u003e and associated \u003ccode\u003e\u003ca\u003en_partial_id\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "Int -\u003e Seq -\u003e Seq",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#s_set_identifier",
        "fct-type": "function",
        "title": "s_set_identifier"
      },
      "index": {
        "description": "Set identifier and associated partial id",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "s_set_identifier",
        "normalized": "Int-\u003eSeq-\u003eSeq",
        "package": "hspear",
        "partial": "",
        "signature": "Int-\u003eSeq-\u003eSeq"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_start_time",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003en_time\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003es_data\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "N_Time",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#Seq",
        "fct-type": "function",
        "title": "s_start_time"
      },
      "index": {
        "description": "minimum time at data",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "s_start_time",
        "normalized": "",
        "package": "hspear",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_summarise",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "([a] -\u003e b) -\u003e (Node -\u003e a) -\u003e Seq -\u003e b",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#s_summarise",
        "fct-type": "function",
        "title": "s_summarise"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "s_summarise",
        "normalized": "([a]-\u003eb)-\u003e(Node-\u003ea)-\u003eSeq-\u003eb",
        "package": "hspear",
        "partial": "",
        "signature": "([a]-\u003eb)-\u003e(Node-\u003ea)-\u003eSeq-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_temporal_f",
      "description": {
        "fct-descr": "\u003cp\u003eApply transform \u003cem\u003ef\u003c/em\u003e at \u003ccode\u003e\u003ca\u003en_time\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "(N_Time -\u003e N_Time) -\u003e Seq -\u003e Seq",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#s_temporal_f",
        "fct-type": "function",
        "title": "s_temporal_f"
      },
      "index": {
        "description": "Apply transform at time",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "s_temporal_f",
        "normalized": "(N_Time-\u003eN_Time)-\u003eSeq-\u003eSeq",
        "package": "hspear",
        "partial": "",
        "signature": "(N_Time-\u003eN_Time)-\u003eSeq-\u003eSeq"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunionBy\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003es_eq_identifier\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "[Seq] -\u003e [Seq] -\u003e [Seq]",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#s_union",
        "fct-type": "function",
        "title": "s_union"
      },
      "index": {
        "description": "unionBy eq identifier",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "s_union",
        "normalized": "[Seq]-\u003e[Seq]-\u003e[Seq]",
        "package": "hspear",
        "partial": "",
        "signature": "[Seq]-\u003e[Seq]-\u003e[Seq]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:str_double",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "ByteString -\u003e n",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#str_double",
        "fct-type": "function",
        "title": "str_double"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "str_double",
        "normalized": "ByteString-\u003ea",
        "package": "hspear",
        "partial": "",
        "signature": "ByteString-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:str_int",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "ByteString -\u003e Int",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#str_int",
        "fct-type": "function",
        "title": "str_int"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "str_int",
        "normalized": "ByteString-\u003eInt",
        "package": "hspear",
        "partial": "",
        "signature": "ByteString-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:str_lines",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "ByteString -\u003e [ByteString]",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#str_lines",
        "fct-type": "function",
        "title": "str_lines"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "str_lines",
        "normalized": "ByteString-\u003e[ByteString]",
        "package": "hspear",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:str_words",
      "description": {
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "ByteString -\u003e [ByteString]",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#str_words",
        "fct-type": "function",
        "title": "str_words"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "str_words",
        "normalized": "ByteString-\u003e[ByteString]",
        "package": "hspear",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:triples",
      "description": {
        "fct-descr": "\u003cp\u003eAdjacent triples.\n\u003c/p\u003e\u003cpre\u003e triples [1..6] == [(1,2,3),(4,5,6)]\n\u003c/pre\u003e",
        "fct-module": "Sound.Analysis.Spear.PTPF",
        "fct-package": "hspear",
        "fct-signature": "[t] -\u003e [(t, t, t)]",
        "fct-source": "src/Sound-Analysis-Spear-PTPF.html#triples",
        "fct-type": "function",
        "title": "triples"
      },
      "index": {
        "description": "Adjacent triples triples",
        "hierarchy": "Sound Analysis Spear PTPF",
        "module": "Sound.Analysis.Spear.PTPF",
        "name": "triples",
        "normalized": "[a]-\u003e[(a,a,a)]",
        "package": "hspear",
        "partial": "",
        "signature": "[t]-\u003e[(t,t,t)]"
      }
    }
  }
]