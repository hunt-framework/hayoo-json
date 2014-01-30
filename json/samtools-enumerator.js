[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/samtools-enumerator/docs/Bio-SamTools-Enumerator.html#",
      "description": {
        "fct-module": "Bio.SamTools.Enumerator",
        "fct-package": "samtools-enumerator",
        "fct-signature": "module",
        "fct-source": "src/Bio-SamTools-Enumerator.html",
        "fct-type": "module",
        "title": "Enumerator"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio SamTools Enumerator",
        "module": "Bio.SamTools.Enumerator",
        "name": "Enumerator",
        "normalized": "",
        "package": "samtools-enumerator",
        "partial": "Enumerator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/samtools-enumerator/docs/Bio-SamTools-Enumerator.html#v:enumBam",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate over the contents of a BAM (binary) alignment file\n\u003c/p\u003e",
        "fct-module": "Bio.SamTools.Enumerator",
        "fct-package": "samtools-enumerator",
        "fct-signature": "FilePath -\u003e Enumerator Bam1 IO a",
        "fct-source": "src/Bio-SamTools-Enumerator.html#enumBam",
        "fct-type": "function",
        "title": "enumBam"
      },
      "index": {
        "description": "Enumerate over the contents of BAM binary alignment file",
        "hierarchy": "Bio SamTools Enumerator",
        "module": "Bio.SamTools.Enumerator",
        "name": "enumBam",
        "normalized": "FilePath-\u003eEnumerator Bam IO a",
        "package": "samtools-enumerator",
        "partial": "Bam",
        "signature": "FilePath-\u003eEnumerator Bam IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/samtools-enumerator/docs/Bio-SamTools-Enumerator.html#v:enumBamRegion",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate over the reads in a region from a sorted, indexed BAM file\n\u003c/p\u003e",
        "fct-module": "Bio.SamTools.Enumerator",
        "fct-package": "samtools-enumerator",
        "fct-signature": "FilePath -\u003e ByteString -\u003e (Int64, Int64) -\u003e Enumerator Bam1 IO a",
        "fct-source": "src/Bio-SamTools-Enumerator.html#enumBamRegion",
        "fct-type": "function",
        "title": "enumBamRegion"
      },
      "index": {
        "description": "Enumerate over the reads in region from sorted indexed BAM file",
        "hierarchy": "Bio SamTools Enumerator",
        "module": "Bio.SamTools.Enumerator",
        "name": "enumBamRegion",
        "normalized": "FilePath-\u003eByteString-\u003e(Int,Int)-\u003eEnumerator Bam IO a",
        "package": "samtools-enumerator",
        "partial": "Bam Region",
        "signature": "FilePath-\u003eByteString-\u003e(Int,Int)-\u003eEnumerator Bam IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/samtools-enumerator/docs/Bio-SamTools-Enumerator.html#v:enumInHandle",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate over the contents of a BAM/SAM alignment input handle\n\u003c/p\u003e",
        "fct-module": "Bio.SamTools.Enumerator",
        "fct-package": "samtools-enumerator",
        "fct-signature": "InHandle -\u003e Enumerator Bam1 m a",
        "fct-source": "src/Bio-SamTools-Enumerator.html#enumInHandle",
        "fct-type": "function",
        "title": "enumInHandle"
      },
      "index": {
        "description": "Enumerate over the contents of BAM SAM alignment input handle",
        "hierarchy": "Bio SamTools Enumerator",
        "module": "Bio.SamTools.Enumerator",
        "name": "enumInHandle",
        "normalized": "InHandle-\u003eEnumerator Bam a b",
        "package": "samtools-enumerator",
        "partial": "In Handle",
        "signature": "InHandle-\u003eEnumerator Bam m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/samtools-enumerator/docs/Bio-SamTools-Enumerator.html#v:enumIndexRegion",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate over the reads in a region from an indexed BAM file input handle\n\u003c/p\u003e",
        "fct-module": "Bio.SamTools.Enumerator",
        "fct-package": "samtools-enumerator",
        "fct-signature": "IdxHandle -\u003e Int -\u003e (Int64, Int64) -\u003e Enumerator Bam1 IO a",
        "fct-source": "src/Bio-SamTools-Enumerator.html#enumIndexRegion",
        "fct-type": "function",
        "title": "enumIndexRegion"
      },
      "index": {
        "description": "Enumerate over the reads in region from an indexed BAM file input handle",
        "hierarchy": "Bio SamTools Enumerator",
        "module": "Bio.SamTools.Enumerator",
        "name": "enumIndexRegion",
        "normalized": "IdxHandle-\u003eInt-\u003e(Int,Int)-\u003eEnumerator Bam IO a",
        "package": "samtools-enumerator",
        "partial": "Index Region",
        "signature": "IdxHandle-\u003eInt-\u003e(Int,Int)-\u003eEnumerator Bam IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/samtools-enumerator/docs/Bio-SamTools-Enumerator.html#v:enumQuery",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate over the results of a query into a sorted, indexed BAM file\n\u003c/p\u003e",
        "fct-module": "Bio.SamTools.Enumerator",
        "fct-package": "samtools-enumerator",
        "fct-signature": "Query -\u003e Enumerator Bam1 IO a",
        "fct-source": "src/Bio-SamTools-Enumerator.html#enumQuery",
        "fct-type": "function",
        "title": "enumQuery"
      },
      "index": {
        "description": "Enumerate over the results of query into sorted indexed BAM file",
        "hierarchy": "Bio SamTools Enumerator",
        "module": "Bio.SamTools.Enumerator",
        "name": "enumQuery",
        "normalized": "Query-\u003eEnumerator Bam IO a",
        "package": "samtools-enumerator",
        "partial": "Query",
        "signature": "Query-\u003eEnumerator Bam IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/samtools-enumerator/docs/Bio-SamTools-Enumerator.html#v:enumTam",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate over the contents of a TAM (tab-delimited text) alignment file\n\u003c/p\u003e",
        "fct-module": "Bio.SamTools.Enumerator",
        "fct-package": "samtools-enumerator",
        "fct-signature": "FilePath -\u003e Enumerator Bam1 IO a",
        "fct-source": "src/Bio-SamTools-Enumerator.html#enumTam",
        "fct-type": "function",
        "title": "enumTam"
      },
      "index": {
        "description": "Enumerate over the contents of TAM tab-delimited text alignment file",
        "hierarchy": "Bio SamTools Enumerator",
        "module": "Bio.SamTools.Enumerator",
        "name": "enumTam",
        "normalized": "FilePath-\u003eEnumerator Bam IO a",
        "package": "samtools-enumerator",
        "partial": "Tam",
        "signature": "FilePath-\u003eEnumerator Bam IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/samtools-enumerator/docs/Bio-SamTools-Enumerator.html#v:enumTamWithIndex",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate over the contents of a TAM file with a separate target sequence index\n\u003c/p\u003e",
        "fct-module": "Bio.SamTools.Enumerator",
        "fct-package": "samtools-enumerator",
        "fct-signature": "FilePath -\u003e FilePath -\u003e Enumerator Bam1 IO a",
        "fct-source": "src/Bio-SamTools-Enumerator.html#enumTamWithIndex",
        "fct-type": "function",
        "title": "enumTamWithIndex"
      },
      "index": {
        "description": "Enumerate over the contents of TAM file with separate target sequence index",
        "hierarchy": "Bio SamTools Enumerator",
        "module": "Bio.SamTools.Enumerator",
        "name": "enumTamWithIndex",
        "normalized": "FilePath-\u003eFilePath-\u003eEnumerator Bam IO a",
        "package": "samtools-enumerator",
        "partial": "Tam With Index",
        "signature": "FilePath-\u003eFilePath-\u003eEnumerator Bam IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/samtools-enumerator/docs/Bio-SamTools-Enumerator.html#v:iterHandle",
      "description": {
        "fct-module": "Bio.SamTools.Enumerator",
        "fct-package": "samtools-enumerator",
        "fct-signature": "OutHandle -\u003e Iteratee Bam1 IO ()",
        "fct-source": "src/Bio-SamTools-Enumerator.html#iterHandle",
        "fct-type": "function",
        "title": "iterHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio SamTools Enumerator",
        "module": "Bio.SamTools.Enumerator",
        "name": "iterHandle",
        "normalized": "OutHandle-\u003eIteratee Bam IO()",
        "package": "samtools-enumerator",
        "partial": "Handle",
        "signature": "OutHandle-\u003eIteratee Bam IO()"
      }
    }
  }
]