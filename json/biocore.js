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
        "word": "biocore"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines common data structures for biosequences,\n    i.e. data that represents nucleotide or protein sequences.\n\u003c/p\u003e\u003cp\u003eBasically, anything resembling or wrapping a sequence should\n    implement the \u003ccode\u003e\u003ca\u003eBioSeq\u003c/a\u003e\u003c/code\u003e class (and \u003ccode\u003e\u003ca\u003eBioSeqQual\u003c/a\u003e\u003c/code\u003e if quality information\n    is available).\n\u003c/p\u003e\u003cp\u003eThe data types are mostly wrappers from lazy bytestrings from\n    \u003ccode\u003e\u003ca\u003eLazy\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eChar8\u003c/a\u003e\u003c/code\u003e, but most users\n    of this module should not need to access the underlying data types directly.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Core.Sequence",
          "name": "Sequence",
          "package": "biocore",
          "source": "src/Bio-Core-Sequence.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines common data structures for biosequences i.e data that represents nucleotide or protein sequences Basically anything resembling or wrapping sequence should implement the BioSeq class and BioSeqQual if quality information is available The data types are mostly wrappers from lazy bytestrings from Lazy and Char8 but most users of this module should not need to access the underlying data types directly",
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "Sequence",
          "package": "biocore",
          "partial": "Sequence",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBioSeq\u003c/a\u003e\u003c/code\u003e class models sequence data, and any data object that\n   represents a biological sequence should implement it.\n\u003c/p\u003e",
          "module": "Bio.Core.Sequence",
          "name": "BioSeq",
          "package": "biocore",
          "source": "src/Bio-Core-Sequence.html#BioSeq",
          "type": "class"
        },
        "index": {
          "description": "The BioSeq class models sequence data and any data object that represents biological sequence should implement it",
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "BioSeq",
          "package": "biocore",
          "partial": "Bio Seq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#t:BioSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe BioSeqQual class extends \u003ccode\u003e\u003ca\u003eBioSeq\u003c/a\u003e\u003c/code\u003e with quality data.  Any correspondig data object\n   should be an instance, this will allow Fasta formatted quality data \u003ccode\u003e\u003ca\u003etoFastaQual\u003c/a\u003e\u003c/code\u003e, as\n   well as the combined FastQ format (via \u003ccode\u003e\u003ca\u003etoFastQ\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Bio.Core.Sequence",
          "name": "BioSeqQual",
          "package": "biocore",
          "source": "src/Bio-Core-Sequence.html#BioSeqQual",
          "type": "class"
        },
        "index": {
          "description": "The BioSeqQual class extends BioSeq with quality data Any correspondig data object should be an instance this will allow Fasta formatted quality data toFastaQual as well as the combined FastQ format via toFastQ",
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "BioSeqQual",
          "package": "biocore",
          "partial": "Bio Seq Qual",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#t:BioSeqQual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eOffset\u003c/a\u003e\u003c/code\u003e is a zero-based index into a sequence\n\u003c/p\u003e",
          "module": "Bio.Core.Sequence",
          "name": "Offset",
          "package": "biocore",
          "source": "src/Bio-Core-Sequence.html#Offset",
          "type": "newtype"
        },
        "index": {
          "description": "An Offset is zero-based index into sequence",
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "Offset",
          "package": "biocore",
          "partial": "Offset",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#t:Offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA quality value is in the range 0..255.\n\u003c/p\u003e",
          "module": "Bio.Core.Sequence",
          "name": "Qual",
          "package": "biocore",
          "source": "src/Bio-Core-Sequence.html#Qual",
          "type": "newtype"
        },
        "index": {
          "description": "quality value is in the range",
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "Qual",
          "package": "biocore",
          "partial": "Qual",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#t:Qual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuality data are lazy bytestrings of \u003ccode\u003e\u003ca\u003eQual\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Bio.Core.Sequence",
          "name": "QualData",
          "package": "biocore",
          "source": "src/Bio-Core-Sequence.html#QualData",
          "type": "newtype"
        },
        "index": {
          "description": "Quality data are lazy bytestrings of Qual",
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "QualData",
          "package": "biocore",
          "partial": "Qual Data",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#t:QualData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence data are lazy bytestrings of ASCII characters.\n\u003c/p\u003e",
          "module": "Bio.Core.Sequence",
          "name": "SeqData",
          "package": "biocore",
          "source": "src/Bio-Core-Sequence.html#SeqData",
          "type": "newtype"
        },
        "index": {
          "description": "Sequence data are lazy bytestrings of ASCII characters",
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "SeqData",
          "package": "biocore",
          "partial": "Seq Data",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#t:SeqData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence data are lazy bytestrings of ASCII characters.\n\u003c/p\u003e",
          "module": "Bio.Core.Sequence",
          "name": "SeqLabel",
          "package": "biocore",
          "source": "src/Bio-Core-Sequence.html#SeqLabel",
          "type": "newtype"
        },
        "index": {
          "description": "Sequence data are lazy bytestrings of ASCII characters",
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "SeqLabel",
          "package": "biocore",
          "partial": "Seq Label",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#t:SeqLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Core.Sequence",
          "name": "Offset",
          "package": "biocore",
          "signature": "Offset",
          "source": "src/Bio-Core-Sequence.html#Offset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "Offset",
          "package": "biocore",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:Offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Core.Sequence",
          "name": "Qual",
          "package": "biocore",
          "signature": "Qual",
          "source": "src/Bio-Core-Sequence.html#Qual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "Qual",
          "package": "biocore",
          "partial": "Qual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:Qual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Core.Sequence",
          "name": "QualData",
          "package": "biocore",
          "signature": "QualData",
          "source": "src/Bio-Core-Sequence.html#QualData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "QualData",
          "package": "biocore",
          "partial": "Qual Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:QualData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Core.Sequence",
          "name": "SeqData",
          "package": "biocore",
          "signature": "SeqData",
          "source": "src/Bio-Core-Sequence.html#SeqData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "SeqData",
          "package": "biocore",
          "partial": "Seq Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:SeqData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Core.Sequence",
          "name": "SeqLabel",
          "package": "biocore",
          "signature": "SeqLabel",
          "source": "src/Bio-Core-Sequence.html#SeqLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "SeqLabel",
          "package": "biocore",
          "partial": "Seq Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:SeqLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Core.Sequence",
          "name": "seqdata",
          "package": "biocore",
          "signature": "seqdata",
          "source": "src/Bio-Core-Sequence.html#seqdata",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "seqdata",
          "package": "biocore",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:seqdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Core.Sequence",
          "name": "seqheader",
          "package": "biocore",
          "signature": "seqheader",
          "source": "src/Bio-Core-Sequence.html#seqheader",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "seqheader",
          "package": "biocore",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:seqheader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Core.Sequence",
          "name": "seqid",
          "package": "biocore",
          "signature": "seqid",
          "source": "src/Bio-Core-Sequence.html#seqid",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "seqid",
          "package": "biocore",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:seqid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Warning: 'seqlabel' is deprecated, use 'seqid' or 'seqheader' instead.\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Core.Sequence",
          "name": "seqlabel",
          "package": "biocore",
          "signature": "seqlabel",
          "source": "src/Bio-Core-Sequence.html#seqlabel",
          "type": "method"
        },
        "index": {
          "description": "Deprecated Warning seqlabel is deprecated use seqid or seqheader instead",
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "seqlabel",
          "package": "biocore",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:seqlabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Core.Sequence",
          "name": "seqlength",
          "package": "biocore",
          "signature": "seqlength",
          "source": "src/Bio-Core-Sequence.html#seqlength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "seqlength",
          "package": "biocore",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:seqlength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Core.Sequence",
          "name": "seqqual",
          "package": "biocore",
          "signature": "sq -\u003e QualData",
          "source": "src/Bio-Core-Sequence.html#seqqual",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "seqqual",
          "normalized": "a-\u003eQualData",
          "package": "biocore",
          "signature": "sq-\u003eQualData",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:seqqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput FastQ-formatted data.  For simplicity, only the Sanger quality format is supported,\n   and only four lines per sequence (i.e. no line breaks in sequence or quality data).\n\u003c/p\u003e",
          "module": "Bio.Core.Sequence",
          "name": "toFastQ",
          "package": "biocore",
          "signature": "s -\u003e ByteString",
          "source": "src/Bio-Core-Sequence.html#toFastQ",
          "type": "function"
        },
        "index": {
          "description": "Output FastQ-formatted data For simplicity only the Sanger quality format is supported and only four lines per sequence i.e no line breaks in sequence or quality data",
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "toFastQ",
          "normalized": "a-\u003eByteString",
          "package": "biocore",
          "partial": "Fast",
          "signature": "s-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:toFastQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny \u003ccode\u003e\u003ca\u003eBioSeq\u003c/a\u003e\u003c/code\u003e can be formatted as Fasta, 60-char lines.\n\u003c/p\u003e",
          "module": "Bio.Core.Sequence",
          "name": "toFasta",
          "package": "biocore",
          "signature": "s -\u003e ByteString",
          "source": "src/Bio-Core-Sequence.html#toFasta",
          "type": "function"
        },
        "index": {
          "description": "Any BioSeq can be formatted as Fasta char lines",
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "toFasta",
          "normalized": "a-\u003eByteString",
          "package": "biocore",
          "partial": "Fasta",
          "signature": "s-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:toFasta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput Fasta-formatted quality data (.qual files), where quality values are output as\n   whitespace-separated integers.\n\u003c/p\u003e",
          "module": "Bio.Core.Sequence",
          "name": "toFastaQual",
          "package": "biocore",
          "signature": "s -\u003e ByteString",
          "source": "src/Bio-Core-Sequence.html#toFastaQual",
          "type": "function"
        },
        "index": {
          "description": "Output Fasta-formatted quality data qual files where quality values are output as whitespace-separated integers",
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "toFastaQual",
          "normalized": "a-\u003eByteString",
          "package": "biocore",
          "partial": "Fasta Qual",
          "signature": "s-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:toFastaQual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Core.Sequence",
          "name": "unOff",
          "package": "biocore",
          "signature": "Int64",
          "source": "src/Bio-Core-Sequence.html#Offset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "unOff",
          "package": "biocore",
          "partial": "Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:unOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Core.Sequence",
          "name": "unQD",
          "package": "biocore",
          "signature": "ByteString",
          "source": "src/Bio-Core-Sequence.html#QualData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "unQD",
          "package": "biocore",
          "partial": "QD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:unQD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Core.Sequence",
          "name": "unQual",
          "package": "biocore",
          "signature": "Word8",
          "source": "src/Bio-Core-Sequence.html#Qual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "unQual",
          "package": "biocore",
          "partial": "Qual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:unQual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Core.Sequence",
          "name": "unSD",
          "package": "biocore",
          "signature": "ByteString",
          "source": "src/Bio-Core-Sequence.html#SeqData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "unSD",
          "package": "biocore",
          "partial": "SD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:unSD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Core.Sequence",
          "name": "unSL",
          "package": "biocore",
          "signature": "ByteString",
          "source": "src/Bio-Core-Sequence.html#SeqLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Core Sequence",
          "module": "Bio.Core.Sequence",
          "name": "unSL",
          "package": "biocore",
          "partial": "SL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:unSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefine common data types for features of sequences \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Core.Strand",
          "name": "Strand",
          "package": "biocore",
          "source": "src/Bio-Core-Strand.html",
          "type": "module"
        },
        "index": {
          "description": "Define common data types for features of sequences",
          "hierarchy": "Bio Core Strand",
          "module": "Bio.Core.Strand",
          "name": "Strand",
          "package": "biocore",
          "partial": "Strand",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Strand.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eStrand\u003c/a\u003e\u003c/code\u003e is either plus (forward) or minus (reverse or reverse-complement)\n\u003c/p\u003e",
          "module": "Bio.Core.Strand",
          "name": "Strand",
          "package": "biocore",
          "source": "src/Bio-Core-Strand.html#Strand",
          "type": "data"
        },
        "index": {
          "description": "Strand is either plus forward or minus reverse or reverse-complement",
          "hierarchy": "Bio Core Strand",
          "module": "Bio.Core.Strand",
          "name": "Strand",
          "package": "biocore",
          "partial": "Strand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Strand.html#t:Strand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Core.Strand",
          "name": "Minus",
          "package": "biocore",
          "signature": "Minus",
          "source": "src/Bio-Core-Strand.html#Strand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Core Strand",
          "module": "Bio.Core.Strand",
          "name": "Minus",
          "package": "biocore",
          "partial": "Minus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Strand.html#v:Minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Core.Strand",
          "name": "Plus",
          "package": "biocore",
          "signature": "Plus",
          "source": "src/Bio-Core-Strand.html#Strand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Core Strand",
          "module": "Bio.Core.Strand",
          "name": "Plus",
          "package": "biocore",
          "partial": "Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Strand.html#v:Plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRe-exporting everything from sub-modules for simplicity \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Core",
          "name": "Core",
          "package": "biocore",
          "source": "src/Bio-Core.html",
          "type": "module"
        },
        "index": {
          "description": "Re-exporting everything from sub-modules for simplicity",
          "hierarchy": "Bio Core",
          "module": "Bio.Core",
          "name": "Core",
          "package": "biocore",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core.html#"
      }
    }
  ]
]