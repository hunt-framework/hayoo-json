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
        "word": "hspear"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariants for handling \u003ccode\u003eGZIP\u003c/code\u003e compressed data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.Analysis.Spear.PTPF.GZ",
          "name": "GZ",
          "package": "hspear",
          "source": "src/Sound-Analysis-Spear-PTPF-GZ.html",
          "type": "module"
        },
        "index": {
          "description": "Variants for handling GZIP compressed data",
          "hierarchy": "Sound Analysis Spear PTPF GZ",
          "module": "Sound.Analysis.Spear.PTPF.GZ",
          "name": "GZ",
          "package": "hspear",
          "partial": "GZ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-GZ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply \u003cem\u003ef\u003c/em\u003e at \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e, else \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF.GZ",
          "name": "at_right",
          "package": "hspear",
          "signature": "(a -\u003e b) -\u003e Either t a -\u003e Either t b",
          "source": "src/Sound-Analysis-Spear-PTPF-GZ.html#at_right",
          "type": "function"
        },
        "index": {
          "description": "Apply at Right else id",
          "hierarchy": "Sound Analysis Spear PTPF GZ",
          "module": "Sound.Analysis.Spear.PTPF.GZ",
          "name": "at_right",
          "normalized": "(a-\u003eb)-\u003eEither c a-\u003eEither c b",
          "package": "hspear",
          "signature": "(a-\u003eb)-\u003eEither t a-\u003eEither t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-GZ.html#v:at_right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad compressed spear data.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF.GZ",
          "name": "load_ptpf_gz",
          "package": "hspear",
          "signature": "FilePath -\u003e IO (Either String PTPF)",
          "source": "src/Sound-Analysis-Spear-PTPF-GZ.html#load_ptpf_gz",
          "type": "function"
        },
        "index": {
          "description": "Load compressed spear data",
          "hierarchy": "Sound Analysis Spear PTPF GZ",
          "module": "Sound.Analysis.Spear.PTPF.GZ",
          "name": "load_ptpf_gz",
          "normalized": "FilePath-\u003eIO(Either String PTPF)",
          "package": "hspear",
          "signature": "FilePath-\u003eIO(Either String PTPF)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-GZ.html#v:load_ptpf_gz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eload_ptpf_gz\u003c/a\u003e\u003c/code\u003e transforming with \u003ccode\u003e\u003ca\u003eptpf_time_asc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF.GZ",
          "name": "load_ptpf_gz_time_asc",
          "package": "hspear",
          "signature": "FilePath -\u003e IO (Either String [(N_Time, [Node])])",
          "source": "src/Sound-Analysis-Spear-PTPF-GZ.html#load_ptpf_gz_time_asc",
          "type": "function"
        },
        "index": {
          "description": "Variant of load ptpf gz transforming with ptpf time asc",
          "hierarchy": "Sound Analysis Spear PTPF GZ",
          "module": "Sound.Analysis.Spear.PTPF.GZ",
          "name": "load_ptpf_gz_time_asc",
          "normalized": "FilePath-\u003eIO(Either String[(N_Time,[Node])])",
          "package": "hspear",
          "signature": "FilePath-\u003eIO(Either String[(N_Time,[Node])])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-GZ.html#v:load_ptpf_gz_time_asc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eparse_ptpf\u003c/a\u003e\u003c/code\u003e running \u003ccode\u003e\u003ca\u003edecompress\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF.GZ",
          "name": "parse_ptpf_gz",
          "package": "hspear",
          "signature": "ByteString -\u003e Either String PTPF",
          "source": "src/Sound-Analysis-Spear-PTPF-GZ.html#parse_ptpf_gz",
          "type": "function"
        },
        "index": {
          "description": "Variant of parse ptpf running decompress",
          "hierarchy": "Sound Analysis Spear PTPF GZ",
          "module": "Sound.Analysis.Spear.PTPF.GZ",
          "name": "parse_ptpf_gz",
          "normalized": "ByteString-\u003eEither String PTPF",
          "package": "hspear",
          "signature": "ByteString-\u003eEither String PTPF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-GZ.html#v:parse_ptpf_gz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF.Reduce",
          "name": "Reduce",
          "package": "hspear",
          "source": "src/Sound-Analysis-Spear-PTPF-Reduce.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF Reduce",
          "module": "Sound.Analysis.Spear.PTPF.Reduce",
          "name": "Reduce",
          "package": "hspear",
          "partial": "Reduce",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-Reduce.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if (n1,n2,n3) can be reduced to (n1,n3).\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF.Reduce",
          "name": "N_Reduction_F",
          "package": "hspear",
          "source": "src/Sound-Analysis-Spear-PTPF-Reduce.html#N_Reduction_F",
          "type": "type"
        },
        "index": {
          "description": "True if n1 n2 n3 can be reduced to n1 n3",
          "hierarchy": "Sound Analysis Spear PTPF Reduce",
          "module": "Sound.Analysis.Spear.PTPF.Reduce",
          "name": "N_Reduction_F",
          "package": "hspear",
          "partial": "Reduction",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-Reduce.html#t:N_Reduction_F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF.Reduce",
          "name": "ampDb",
          "package": "hspear",
          "signature": "a -\u003e a",
          "source": "src/Sound-Analysis-Spear-PTPF-Reduce.html#ampDb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF Reduce",
          "module": "Sound.Analysis.Spear.PTPF.Reduce",
          "name": "ampDb",
          "normalized": "a-\u003ea",
          "package": "hspear",
          "partial": "Db",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-Reduce.html#v:ampDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF.Reduce",
          "name": "cps_to_fmidi",
          "package": "hspear",
          "signature": "a -\u003e a",
          "source": "src/Sound-Analysis-Spear-PTPF-Reduce.html#cps_to_fmidi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF Reduce",
          "module": "Sound.Analysis.Spear.PTPF.Reduce",
          "name": "cps_to_fmidi",
          "normalized": "a-\u003ea",
          "package": "hspear",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-Reduce.html#v:cps_to_fmidi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrequency (FMIDI) and amplitude (DB) gradient from \u003cem\u003en1\u003c/em\u003e to \u003cem\u003en2\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF.Reduce",
          "name": "n_gradient",
          "package": "hspear",
          "signature": "Node -\u003e Node -\u003e (N_Data, N_Data)",
          "source": "src/Sound-Analysis-Spear-PTPF-Reduce.html#n_gradient",
          "type": "function"
        },
        "index": {
          "description": "Frequency FMIDI and amplitude DB gradient from n1 to n2",
          "hierarchy": "Sound Analysis Spear PTPF Reduce",
          "module": "Sound.Analysis.Spear.PTPF.Reduce",
          "name": "n_gradient",
          "normalized": "Node-\u003eNode-\u003e(N_Data,N_Data)",
          "package": "hspear",
          "signature": "Node-\u003eNode-\u003e(N_Data,N_Data)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-Reduce.html#v:n_gradient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF.Reduce",
          "name": "n_reduction",
          "package": "hspear",
          "signature": "N_Reduction_F -\u003e [Node] -\u003e [Node]",
          "source": "src/Sound-Analysis-Spear-PTPF-Reduce.html#n_reduction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF Reduce",
          "module": "Sound.Analysis.Spear.PTPF.Reduce",
          "name": "n_reduction",
          "normalized": "N_Reduction_F-\u003e[Node]-\u003e[Node]",
          "package": "hspear",
          "signature": "N_Reduction_F-\u003e[Node]-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-Reduce.html#v:n_reduction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF.Reduce",
          "name": "p_reduction_gradient",
          "package": "hspear",
          "signature": "(N_Data, N_Data) -\u003e PTPF -\u003e PTPF",
          "source": "src/Sound-Analysis-Spear-PTPF-Reduce.html#p_reduction_gradient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF Reduce",
          "module": "Sound.Analysis.Spear.PTPF.Reduce",
          "name": "p_reduction_gradient",
          "normalized": "(N_Data,N_Data)-\u003ePTPF-\u003ePTPF",
          "package": "hspear",
          "signature": "(N_Data,N_Data)-\u003ePTPF-\u003ePTPF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-Reduce.html#v:p_reduction_gradient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF.Reduce",
          "name": "s_reduction",
          "package": "hspear",
          "signature": "N_Reduction_F -\u003e Seq -\u003e Seq",
          "source": "src/Sound-Analysis-Spear-PTPF-Reduce.html#s_reduction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF Reduce",
          "module": "Sound.Analysis.Spear.PTPF.Reduce",
          "name": "s_reduction",
          "normalized": "N_Reduction_F-\u003eSeq-\u003eSeq",
          "package": "hspear",
          "signature": "N_Reduction_F-\u003eSeq-\u003eSeq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-Reduce.html#v:s_reduction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF.Reduce",
          "name": "s_reduction_gradient",
          "package": "hspear",
          "signature": "(N_Data, N_Data) -\u003e Seq -\u003e Seq",
          "source": "src/Sound-Analysis-Spear-PTPF-Reduce.html#s_reduction_gradient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF Reduce",
          "module": "Sound.Analysis.Spear.PTPF.Reduce",
          "name": "s_reduction_gradient",
          "normalized": "(N_Data,N_Data)-\u003eSeq-\u003eSeq",
          "package": "hspear",
          "signature": "(N_Data,N_Data)-\u003eSeq-\u003eSeq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-Reduce.html#v:s_reduction_gradient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e variant of parser.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.Analysis.Spear.PTPF.String",
          "name": "String",
          "package": "hspear",
          "source": "src/Sound-Analysis-Spear-PTPF-String.html",
          "type": "module"
        },
        "index": {
          "description": "String variant of parser",
          "hierarchy": "Sound Analysis Spear PTPF String",
          "module": "Sound.Analysis.Spear.PTPF.String",
          "name": "String",
          "package": "hspear",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse \u003ccode\u003e\u003ca\u003ePTPF\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF.String",
          "name": "parse_ptpf",
          "package": "hspear",
          "signature": "String -\u003e Either String PTPF",
          "source": "src/Sound-Analysis-Spear-PTPF-String.html#parse_ptpf",
          "type": "function"
        },
        "index": {
          "description": "Parse PTPF at String",
          "hierarchy": "Sound Analysis Spear PTPF String",
          "module": "Sound.Analysis.Spear.PTPF.String",
          "name": "parse_ptpf",
          "normalized": "String-\u003eEither String PTPF",
          "package": "hspear",
          "signature": "String-\u003eEither String PTPF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-String.html#v:parse_ptpf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse header section, result is number of partials.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF.String",
          "name": "ptpf_header",
          "package": "hspear",
          "signature": "[String] -\u003e Maybe Int",
          "source": "src/Sound-Analysis-Spear-PTPF-String.html#ptpf_header",
          "type": "function"
        },
        "index": {
          "description": "Parse header section result is number of partials",
          "hierarchy": "Sound Analysis Spear PTPF String",
          "module": "Sound.Analysis.Spear.PTPF.String",
          "name": "ptpf_header",
          "normalized": "[String]-\u003eMaybe Int",
          "package": "hspear",
          "signature": "[String]-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-String.html#v:ptpf_header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF.String",
          "name": "ptpf_node",
          "package": "hspear",
          "signature": "Int -\u003e (String, String, String) -\u003e Node",
          "source": "src/Sound-Analysis-Spear-PTPF-String.html#ptpf_node",
          "type": "function"
        },
        "index": {
          "description": "Parse Node",
          "hierarchy": "Sound Analysis Spear PTPF String",
          "module": "Sound.Analysis.Spear.PTPF.String",
          "name": "ptpf_node",
          "normalized": "Int-\u003e(String,String,String)-\u003eNode",
          "package": "hspear",
          "signature": "Int-\u003e(String,String,String)-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-String.html#v:ptpf_node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e from pair of input lines.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF.String",
          "name": "ptpf_seq",
          "package": "hspear",
          "signature": "(String, String) -\u003e Seq",
          "source": "src/Sound-Analysis-Spear-PTPF-String.html#ptpf_seq",
          "type": "function"
        },
        "index": {
          "description": "Parse Seq from pair of input lines",
          "hierarchy": "Sound Analysis Spear PTPF String",
          "module": "Sound.Analysis.Spear.PTPF.String",
          "name": "ptpf_seq",
          "normalized": "(String,String)-\u003eSeq",
          "package": "hspear",
          "signature": "(String,String)-\u003eSeq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF-String.html#v:ptpf_seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eSpear\u003c/em\u003e \u003ccode\u003ePTPF\u003c/code\u003e (par-text-partials-format) files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "PTPF",
          "package": "hspear",
          "source": "src/Sound-Analysis-Spear-PTPF.html",
          "type": "module"
        },
        "index": {
          "description": "Spear PTPF par-text-partials-format files",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "PTPF",
          "package": "hspear",
          "partial": "PTPF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "N_Data",
          "package": "hspear",
          "source": "src/Sound-Analysis-Spear-PTPF.html#N_Data",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "N_Data",
          "package": "hspear",
          "partial": "Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#t:N_Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "N_Time",
          "package": "hspear",
          "source": "src/Sound-Analysis-Spear-PTPF.html#N_Time",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "N_Time",
          "package": "hspear",
          "partial": "Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#t:N_Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecord to hold data for single node of a partial track.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "Node",
          "package": "hspear",
          "source": "src/Sound-Analysis-Spear-PTPF.html#Node",
          "type": "data"
        },
        "index": {
          "description": "Record to hold data for single node of partial track",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "Node",
          "package": "hspear",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePTPF\u003c/a\u003e\u003c/code\u003e is a set of \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "PTPF",
          "package": "hspear",
          "source": "src/Sound-Analysis-Spear-PTPF.html#PTPF",
          "type": "data"
        },
        "index": {
          "description": "PTPF is set of Seq",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "PTPF",
          "package": "hspear",
          "partial": "PTPF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#t:PTPF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "STR",
          "package": "hspear",
          "source": "src/Sound-Analysis-Spear-PTPF.html#STR",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "STR",
          "package": "hspear",
          "partial": "STR",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#t:STR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sequence of partial \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e data.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "Seq",
          "package": "hspear",
          "source": "src/Sound-Analysis-Spear-PTPF.html#Seq",
          "type": "data"
        },
        "index": {
          "description": "sequence of partial Node data",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "Seq",
          "package": "hspear",
          "partial": "Seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#t:Seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "Node",
          "package": "hspear",
          "signature": "Node",
          "source": "src/Sound-Analysis-Spear-PTPF.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "Node",
          "package": "hspear",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "PTPF",
          "package": "hspear",
          "signature": "PTPF",
          "source": "src/Sound-Analysis-Spear-PTPF.html#PTPF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "PTPF",
          "package": "hspear",
          "partial": "PTPF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:PTPF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "Seq",
          "package": "hspear",
          "signature": "Seq",
          "source": "src/Sound-Analysis-Spear-PTPF.html#Seq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "Seq",
          "package": "hspear",
          "partial": "Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:Seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply \u003cem\u003ef\u003c/em\u003e at last element.\n\u003c/p\u003e\u003cpre\u003e at_last negate [1..3] == [1,2,-3]\n\u003c/pre\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "at_last",
          "package": "hspear",
          "signature": "(a -\u003e a) -\u003e [a] -\u003e [a]",
          "source": "src/Sound-Analysis-Spear-PTPF.html#at_last",
          "type": "function"
        },
        "index": {
          "description": "Apply at last element at last negate",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "at_last",
          "normalized": "(a-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "hspear",
          "signature": "(a-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:at_last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjacent duples.\n\u003c/p\u003e\u003cpre\u003e duples [1..6] == [(1,2),(3,4),(5,6)]\n\u003c/pre\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "duples",
          "package": "hspear",
          "signature": "[t] -\u003e [(t, t)]",
          "source": "src/Sound-Analysis-Spear-PTPF.html#duples",
          "type": "function"
        },
        "index": {
          "description": "Adjacent duples duples",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "duples",
          "normalized": "[a]-\u003e[(a,a)]",
          "package": "hspear",
          "signature": "[t]-\u003e[(t,t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:duples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumerically stable mean\n\u003c/p\u003e\u003cpre\u003e map mean [[1..5],[3,5,7],[7,7],[3,9,10,11,12]] == [3,5,7,9]\n\u003c/pre\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "mean",
          "package": "hspear",
          "signature": "[a] -\u003e a",
          "source": "src/Sound-Analysis-Spear-PTPF.html#mean",
          "type": "function"
        },
        "index": {
          "description": "Numerically stable mean map mean",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "mean",
          "normalized": "[a]-\u003ea",
          "package": "hspear",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:mean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e minmax [0..5] == (0,5)\n\u003c/pre\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "minmax",
          "package": "hspear",
          "signature": "[b] -\u003e (b, b)",
          "source": "src/Sound-Analysis-Spear-PTPF.html#minmax",
          "type": "function"
        },
        "index": {
          "description": "minimum maximum minmax",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "minmax",
          "normalized": "[a]-\u003e(a,a)",
          "package": "hspear",
          "signature": "[b]-\u003e(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:minmax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "n_amplitude",
          "package": "hspear",
          "signature": "N_Data",
          "source": "src/Sound-Analysis-Spear-PTPF.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "n_amplitude",
          "package": "hspear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:n_amplitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "n_frequency",
          "package": "hspear",
          "signature": "N_Data",
          "source": "src/Sound-Analysis-Spear-PTPF.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "n_frequency",
          "package": "hspear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:n_frequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartial identifier\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "n_partial_id",
          "package": "hspear",
          "signature": "Int",
          "source": "src/Sound-Analysis-Spear-PTPF.html#Node",
          "type": "function"
        },
        "index": {
          "description": "Partial identifier",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "n_partial_id",
          "package": "hspear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:n_partial_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet \u003ccode\u003e\u003ca\u003en_partial_id\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "n_set_partial_id",
          "package": "hspear",
          "signature": "Int -\u003e Node -\u003e Node",
          "source": "src/Sound-Analysis-Spear-PTPF.html#n_set_partial_id",
          "type": "function"
        },
        "index": {
          "description": "Set partial id at Node",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "n_set_partial_id",
          "normalized": "Int-\u003eNode-\u003eNode",
          "package": "hspear",
          "signature": "Int-\u003eNode-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:n_set_partial_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply transform \u003cem\u003ef\u003c/em\u003e at \u003ccode\u003e\u003ca\u003en_time\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "n_temporal_f",
          "package": "hspear",
          "signature": "(N_Time -\u003e N_Time) -\u003e Node -\u003e Node",
          "source": "src/Sound-Analysis-Spear-PTPF.html#n_temporal_f",
          "type": "function"
        },
        "index": {
          "description": "Apply transform at time",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "n_temporal_f",
          "normalized": "(N_Time-\u003eN_Time)-\u003eNode-\u003eNode",
          "package": "hspear",
          "signature": "(N_Time-\u003eN_Time)-\u003eNode-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:n_temporal_f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "n_time",
          "package": "hspear",
          "signature": "Double",
          "source": "src/Sound-Analysis-Spear-PTPF.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "n_time",
          "package": "hspear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:n_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet \u003ccode\u003e\u003ca\u003en_amplitude\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "n_zero_amplitude",
          "package": "hspear",
          "signature": "Node -\u003e Node",
          "source": "src/Sound-Analysis-Spear-PTPF.html#n_zero_amplitude",
          "type": "function"
        },
        "index": {
          "description": "Set amplitude at Node to",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "n_zero_amplitude",
          "normalized": "Node-\u003eNode",
          "package": "hspear",
          "signature": "Node-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:n_zero_amplitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003es_end_time\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003ep_seq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_end_time",
          "package": "hspear",
          "signature": "PTPF -\u003e N_Time",
          "source": "src/Sound-Analysis-Spear-PTPF.html#p_end_time",
          "type": "function"
        },
        "index": {
          "description": "maximum end time at seq",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_end_time",
          "normalized": "PTPF-\u003eN_Time",
          "package": "hspear",
          "signature": "PTPF-\u003eN_Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_end_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_filter",
          "package": "hspear",
          "signature": "(Seq -\u003e Bool) -\u003e PTPF -\u003e PTPF",
          "source": "src/Sound-Analysis-Spear-PTPF.html#p_filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_filter",
          "normalized": "(Seq-\u003eBool)-\u003ePTPF-\u003ePTPF",
          "package": "hspear",
          "signature": "(Seq-\u003eBool)-\u003ePTPF-\u003ePTPF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate \u003ccode\u003e\u003ca\u003ePTPF\u003c/a\u003e\u003c/code\u003e from set of \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e.  Re-assigns partial identifiers.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_from_seq",
          "package": "hspear",
          "signature": "[Seq] -\u003e PTPF",
          "source": "src/Sound-Analysis-Spear-PTPF.html#p_from_seq",
          "type": "function"
        },
        "index": {
          "description": "Generate PTPF from set of Seq Re-assigns partial identifiers",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_from_seq",
          "normalized": "[Seq]-\u003ePTPF",
          "package": "hspear",
          "signature": "[Seq]-\u003ePTPF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_from_seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_map",
          "package": "hspear",
          "signature": "(Seq -\u003e Seq) -\u003e PTPF -\u003e PTPF",
          "source": "src/Sound-Analysis-Spear-PTPF.html#p_map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_map",
          "normalized": "(Seq-\u003eSeq)-\u003ePTPF-\u003ePTPF",
          "package": "hspear",
          "signature": "(Seq-\u003eSeq)-\u003ePTPF-\u003ePTPF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_node_map",
          "package": "hspear",
          "signature": "(Node -\u003e Node) -\u003e PTPF -\u003e PTPF",
          "source": "src/Sound-Analysis-Spear-PTPF.html#p_node_map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_node_map",
          "normalized": "(Node-\u003eNode)-\u003ePTPF-\u003ePTPF",
          "package": "hspear",
          "signature": "(Node-\u003eNode)-\u003ePTPF-\u003ePTPF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_node_map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esum\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003es_nodes\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003ep_seq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_nodes",
          "package": "hspear",
          "signature": "PTPF -\u003e Int",
          "source": "src/Sound-Analysis-Spear-PTPF.html#p_nodes",
          "type": "function"
        },
        "index": {
          "description": "sum of nodes of seq",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_nodes",
          "normalized": "PTPF-\u003eInt",
          "package": "hspear",
          "signature": "PTPF-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_nodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_partials",
          "package": "hspear",
          "signature": "Int",
          "source": "src/Sound-Analysis-Spear-PTPF.html#PTPF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_partials",
          "package": "hspear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_partials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_seq",
          "package": "hspear",
          "signature": "[Seq]",
          "source": "src/Sound-Analysis-Spear-PTPF.html#PTPF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_seq",
          "normalized": "[Seq]",
          "package": "hspear",
          "signature": "[Seq]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003es_start_time\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003ep_seq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_start_time",
          "package": "hspear",
          "signature": "PTPF -\u003e N_Time",
          "source": "src/Sound-Analysis-Spear-PTPF.html#p_start_time",
          "type": "function"
        },
        "index": {
          "description": "minimum start time at seq",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_start_time",
          "normalized": "PTPF-\u003eN_Time",
          "package": "hspear",
          "signature": "PTPF-\u003eN_Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_start_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_temporal_f",
          "package": "hspear",
          "signature": "(N_Time -\u003e N_Time) -\u003e PTPF -\u003e PTPF",
          "source": "src/Sound-Analysis-Spear-PTPF.html#p_temporal_f",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "p_temporal_f",
          "normalized": "(N_Time-\u003eN_Time)-\u003ePTPF-\u003ePTPF",
          "package": "hspear",
          "signature": "(N_Time-\u003eN_Time)-\u003ePTPF-\u003ePTPF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:p_temporal_f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse \u003ccode\u003e\u003ca\u003ePTPF\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003eSTR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "parse_ptpf",
          "package": "hspear",
          "signature": "STR -\u003e Either String PTPF",
          "source": "src/Sound-Analysis-Spear-PTPF.html#parse_ptpf",
          "type": "function"
        },
        "index": {
          "description": "Parse PTPF at STR",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "parse_ptpf",
          "normalized": "STR-\u003eEither String PTPF",
          "package": "hspear",
          "signature": "STR-\u003eEither String PTPF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:parse_ptpf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse header section, result is number of partials.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "ptpf_header",
          "package": "hspear",
          "signature": "[STR] -\u003e Maybe Int",
          "source": "src/Sound-Analysis-Spear-PTPF.html#ptpf_header",
          "type": "function"
        },
        "index": {
          "description": "Parse header section result is number of partials",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "ptpf_header",
          "normalized": "[STR]-\u003eMaybe Int",
          "package": "hspear",
          "signature": "[STR]-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:ptpf_header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "ptpf_node",
          "package": "hspear",
          "signature": "Int -\u003e (STR, STR, STR) -\u003e Node",
          "source": "src/Sound-Analysis-Spear-PTPF.html#ptpf_node",
          "type": "function"
        },
        "index": {
          "description": "Parse Node",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "ptpf_node",
          "normalized": "Int-\u003e(STR,STR,STR)-\u003eNode",
          "package": "hspear",
          "signature": "Int-\u003e(STR,STR,STR)-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:ptpf_node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e from pair of input lines.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "ptpf_seq",
          "package": "hspear",
          "signature": "(STR, STR) -\u003e Seq",
          "source": "src/Sound-Analysis-Spear-PTPF.html#ptpf_seq",
          "type": "function"
        },
        "index": {
          "description": "Parse Seq from pair of input lines",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "ptpf_seq",
          "normalized": "(STR,STR)-\u003eSeq",
          "package": "hspear",
          "signature": "(STR,STR)-\u003eSeq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:ptpf_seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es grouped into sets with equal start times.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "ptpf_time_asc",
          "package": "hspear",
          "signature": "PTPF -\u003e [(N_Time, [Node])]",
          "source": "src/Sound-Analysis-Spear-PTPF.html#ptpf_time_asc",
          "type": "function"
        },
        "index": {
          "description": "All Node grouped into sets with equal start times",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "ptpf_time_asc",
          "normalized": "PTPF-\u003e[(N_Time,[Node])]",
          "package": "hspear",
          "signature": "PTPF-\u003e[(N_Time,[Node])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:ptpf_time_asc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_data",
          "package": "hspear",
          "signature": "[Node]",
          "source": "src/Sound-Analysis-Spear-PTPF.html#Seq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_data",
          "normalized": "[Node]",
          "package": "hspear",
          "signature": "[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003es_end_time\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003es_start_time\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_duration",
          "package": "hspear",
          "signature": "Seq -\u003e N_Time",
          "source": "src/Sound-Analysis-Spear-PTPF.html#s_duration",
          "type": "function"
        },
        "index": {
          "description": "end time start time",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_duration",
          "normalized": "Seq-\u003eN_Time",
          "package": "hspear",
          "signature": "Seq-\u003eN_Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003en_time\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003es_data\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_end_time",
          "package": "hspear",
          "signature": "N_Time",
          "source": "src/Sound-Analysis-Spear-PTPF.html#Seq",
          "type": "function"
        },
        "index": {
          "description": "maximum time at data",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_end_time",
          "package": "hspear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_end_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eon\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003es_identifier\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_eq_identifier",
          "package": "hspear",
          "signature": "Seq -\u003e Seq -\u003e Bool",
          "source": "src/Sound-Analysis-Spear-PTPF.html#s_eq_identifier",
          "type": "function"
        },
        "index": {
          "description": "on identifier",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_eq_identifier",
          "normalized": "Seq-\u003eSeq-\u003eBool",
          "package": "hspear",
          "signature": "Seq-\u003eSeq-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_eq_identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003en_partial_id\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003es_data\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_identifier",
          "package": "hspear",
          "signature": "Int",
          "source": "src/Sound-Analysis-Spear-PTPF.html#Seq",
          "type": "function"
        },
        "index": {
          "description": "to partial id at data",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_identifier",
          "package": "hspear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply \u003cem\u003ef\u003c/em\u003e at \u003ccode\u003e\u003ca\u003es_data\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e and re-calculate temporal bounds.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_map",
          "package": "hspear",
          "signature": "(Node -\u003e Node) -\u003e Seq -\u003e Seq",
          "source": "src/Sound-Analysis-Spear-PTPF.html#s_map",
          "type": "function"
        },
        "index": {
          "description": "Apply at data of Seq and re-calculate temporal bounds",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_map",
          "normalized": "(Node-\u003eNode)-\u003eSeq-\u003eSeq",
          "package": "hspear",
          "signature": "(Node-\u003eNode)-\u003eSeq-\u003eSeq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003en_amplitude\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003es_data\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_max_amplitude",
          "package": "hspear",
          "signature": "Seq -\u003e N_Data",
          "source": "src/Sound-Analysis-Spear-PTPF.html#s_max_amplitude",
          "type": "function"
        },
        "index": {
          "description": "maximum amplitude at data",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_max_amplitude",
          "normalized": "Seq-\u003eN_Data",
          "package": "hspear",
          "signature": "Seq-\u003eN_Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_max_amplitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emean\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003en_amplitude\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003es_data\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_mean_amplitude",
          "package": "hspear",
          "signature": "Seq -\u003e N_Data",
          "source": "src/Sound-Analysis-Spear-PTPF.html#s_mean_amplitude",
          "type": "function"
        },
        "index": {
          "description": "mean amplitude at data",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_mean_amplitude",
          "normalized": "Seq-\u003eN_Data",
          "package": "hspear",
          "signature": "Seq-\u003eN_Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_mean_amplitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emean\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003en_frequency\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003es_data\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_mean_frequency",
          "package": "hspear",
          "signature": "Seq -\u003e N_Data",
          "source": "src/Sound-Analysis-Spear-PTPF.html#s_mean_frequency",
          "type": "function"
        },
        "index": {
          "description": "mean frequency at data",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_mean_frequency",
          "normalized": "Seq-\u003eN_Data",
          "package": "hspear",
          "signature": "Seq-\u003eN_Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_mean_frequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003en_amplitude\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003es_data\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_min_amplitude",
          "package": "hspear",
          "signature": "Seq -\u003e N_Data",
          "source": "src/Sound-Analysis-Spear-PTPF.html#s_min_amplitude",
          "type": "function"
        },
        "index": {
          "description": "minimum amplitude at data",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_min_amplitude",
          "normalized": "Seq-\u003eN_Data",
          "package": "hspear",
          "signature": "Seq-\u003eN_Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_min_amplitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003es_data\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_nodes",
          "package": "hspear",
          "signature": "Int",
          "source": "src/Sound-Analysis-Spear-PTPF.html#Seq",
          "type": "function"
        },
        "index": {
          "description": "to length data",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_nodes",
          "package": "hspear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_nodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet \u003ccode\u003e\u003ca\u003es_identifier\u003c/a\u003e\u003c/code\u003e and associated \u003ccode\u003e\u003ca\u003en_partial_id\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_set_identifier",
          "package": "hspear",
          "signature": "Int -\u003e Seq -\u003e Seq",
          "source": "src/Sound-Analysis-Spear-PTPF.html#s_set_identifier",
          "type": "function"
        },
        "index": {
          "description": "Set identifier and associated partial id",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_set_identifier",
          "normalized": "Int-\u003eSeq-\u003eSeq",
          "package": "hspear",
          "signature": "Int-\u003eSeq-\u003eSeq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_set_identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003en_time\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003es_data\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_start_time",
          "package": "hspear",
          "signature": "N_Time",
          "source": "src/Sound-Analysis-Spear-PTPF.html#Seq",
          "type": "function"
        },
        "index": {
          "description": "minimum time at data",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_start_time",
          "package": "hspear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_start_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_summarise",
          "package": "hspear",
          "signature": "([a] -\u003e b) -\u003e (Node -\u003e a) -\u003e Seq -\u003e b",
          "source": "src/Sound-Analysis-Spear-PTPF.html#s_summarise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_summarise",
          "normalized": "([a]-\u003eb)-\u003e(Node-\u003ea)-\u003eSeq-\u003eb",
          "package": "hspear",
          "signature": "([a]-\u003eb)-\u003e(Node-\u003ea)-\u003eSeq-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_summarise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply transform \u003cem\u003ef\u003c/em\u003e at \u003ccode\u003e\u003ca\u003en_time\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_temporal_f",
          "package": "hspear",
          "signature": "(N_Time -\u003e N_Time) -\u003e Seq -\u003e Seq",
          "source": "src/Sound-Analysis-Spear-PTPF.html#s_temporal_f",
          "type": "function"
        },
        "index": {
          "description": "Apply transform at time",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_temporal_f",
          "normalized": "(N_Time-\u003eN_Time)-\u003eSeq-\u003eSeq",
          "package": "hspear",
          "signature": "(N_Time-\u003eN_Time)-\u003eSeq-\u003eSeq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_temporal_f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunionBy\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003es_eq_identifier\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_union",
          "package": "hspear",
          "signature": "[Seq] -\u003e [Seq] -\u003e [Seq]",
          "source": "src/Sound-Analysis-Spear-PTPF.html#s_union",
          "type": "function"
        },
        "index": {
          "description": "unionBy eq identifier",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "s_union",
          "normalized": "[Seq]-\u003e[Seq]-\u003e[Seq]",
          "package": "hspear",
          "signature": "[Seq]-\u003e[Seq]-\u003e[Seq]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:s_union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "str_double",
          "package": "hspear",
          "signature": "ByteString -\u003e n",
          "source": "src/Sound-Analysis-Spear-PTPF.html#str_double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "str_double",
          "normalized": "ByteString-\u003ea",
          "package": "hspear",
          "signature": "ByteString-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:str_double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "str_int",
          "package": "hspear",
          "signature": "ByteString -\u003e Int",
          "source": "src/Sound-Analysis-Spear-PTPF.html#str_int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "str_int",
          "normalized": "ByteString-\u003eInt",
          "package": "hspear",
          "signature": "ByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:str_int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "str_lines",
          "package": "hspear",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Sound-Analysis-Spear-PTPF.html#str_lines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "str_lines",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "hspear",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:str_lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "str_words",
          "package": "hspear",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Sound-Analysis-Spear-PTPF.html#str_words",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "str_words",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "hspear",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:str_words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjacent triples.\n\u003c/p\u003e\u003cpre\u003e triples [1..6] == [(1,2,3),(4,5,6)]\n\u003c/pre\u003e",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "triples",
          "package": "hspear",
          "signature": "[t] -\u003e [(t, t, t)]",
          "source": "src/Sound-Analysis-Spear-PTPF.html#triples",
          "type": "function"
        },
        "index": {
          "description": "Adjacent triples triples",
          "hierarchy": "Sound Analysis Spear PTPF",
          "module": "Sound.Analysis.Spear.PTPF",
          "name": "triples",
          "normalized": "[a]-\u003e[(a,a,a)]",
          "package": "hspear",
          "signature": "[t]-\u003e[(t,t,t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspear/docs/Sound-Analysis-Spear-PTPF.html#v:triples"
      }
    }
  ]
]