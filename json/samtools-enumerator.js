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
        "word": "samtools-enumerator"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SamTools.Enumerator",
          "name": "Enumerator",
          "package": "samtools-enumerator",
          "source": "src/Bio-SamTools-Enumerator.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bio SamTools Enumerator",
          "module": "Bio.SamTools.Enumerator",
          "name": "Enumerator",
          "package": "samtools-enumerator",
          "partial": "Enumerator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/samtools-enumerator/docs/Bio-SamTools-Enumerator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate over the contents of a BAM (binary) alignment file\n\u003c/p\u003e",
          "module": "Bio.SamTools.Enumerator",
          "name": "enumBam",
          "package": "samtools-enumerator",
          "signature": "FilePath -\u003e Enumerator Bam1 IO a",
          "source": "src/Bio-SamTools-Enumerator.html#enumBam",
          "type": "function"
        },
        "index": {
          "description": "Enumerate over the contents of BAM binary alignment file",
          "hierarchy": "Bio SamTools Enumerator",
          "module": "Bio.SamTools.Enumerator",
          "name": "enumBam",
          "normalized": "FilePath-\u003eEnumerator Bam IO a",
          "package": "samtools-enumerator",
          "partial": "Bam",
          "signature": "FilePath-\u003eEnumerator Bam IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/samtools-enumerator/docs/Bio-SamTools-Enumerator.html#v:enumBam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate over the reads in a region from a sorted, indexed BAM file\n\u003c/p\u003e",
          "module": "Bio.SamTools.Enumerator",
          "name": "enumBamRegion",
          "package": "samtools-enumerator",
          "signature": "FilePath -\u003e ByteString -\u003e (Int64, Int64) -\u003e Enumerator Bam1 IO a",
          "source": "src/Bio-SamTools-Enumerator.html#enumBamRegion",
          "type": "function"
        },
        "index": {
          "description": "Enumerate over the reads in region from sorted indexed BAM file",
          "hierarchy": "Bio SamTools Enumerator",
          "module": "Bio.SamTools.Enumerator",
          "name": "enumBamRegion",
          "normalized": "FilePath-\u003eByteString-\u003e(Int,Int)-\u003eEnumerator Bam IO a",
          "package": "samtools-enumerator",
          "partial": "Bam Region",
          "signature": "FilePath-\u003eByteString-\u003e(Int,Int)-\u003eEnumerator Bam IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/samtools-enumerator/docs/Bio-SamTools-Enumerator.html#v:enumBamRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate over the contents of a BAM/SAM alignment input handle\n\u003c/p\u003e",
          "module": "Bio.SamTools.Enumerator",
          "name": "enumInHandle",
          "package": "samtools-enumerator",
          "signature": "InHandle -\u003e Enumerator Bam1 m a",
          "source": "src/Bio-SamTools-Enumerator.html#enumInHandle",
          "type": "function"
        },
        "index": {
          "description": "Enumerate over the contents of BAM SAM alignment input handle",
          "hierarchy": "Bio SamTools Enumerator",
          "module": "Bio.SamTools.Enumerator",
          "name": "enumInHandle",
          "normalized": "InHandle-\u003eEnumerator Bam a b",
          "package": "samtools-enumerator",
          "partial": "In Handle",
          "signature": "InHandle-\u003eEnumerator Bam m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/samtools-enumerator/docs/Bio-SamTools-Enumerator.html#v:enumInHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate over the reads in a region from an indexed BAM file input handle\n\u003c/p\u003e",
          "module": "Bio.SamTools.Enumerator",
          "name": "enumIndexRegion",
          "package": "samtools-enumerator",
          "signature": "IdxHandle -\u003e Int -\u003e (Int64, Int64) -\u003e Enumerator Bam1 IO a",
          "source": "src/Bio-SamTools-Enumerator.html#enumIndexRegion",
          "type": "function"
        },
        "index": {
          "description": "Enumerate over the reads in region from an indexed BAM file input handle",
          "hierarchy": "Bio SamTools Enumerator",
          "module": "Bio.SamTools.Enumerator",
          "name": "enumIndexRegion",
          "normalized": "IdxHandle-\u003eInt-\u003e(Int,Int)-\u003eEnumerator Bam IO a",
          "package": "samtools-enumerator",
          "partial": "Index Region",
          "signature": "IdxHandle-\u003eInt-\u003e(Int,Int)-\u003eEnumerator Bam IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/samtools-enumerator/docs/Bio-SamTools-Enumerator.html#v:enumIndexRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate over the results of a query into a sorted, indexed BAM file\n\u003c/p\u003e",
          "module": "Bio.SamTools.Enumerator",
          "name": "enumQuery",
          "package": "samtools-enumerator",
          "signature": "Query -\u003e Enumerator Bam1 IO a",
          "source": "src/Bio-SamTools-Enumerator.html#enumQuery",
          "type": "function"
        },
        "index": {
          "description": "Enumerate over the results of query into sorted indexed BAM file",
          "hierarchy": "Bio SamTools Enumerator",
          "module": "Bio.SamTools.Enumerator",
          "name": "enumQuery",
          "normalized": "Query-\u003eEnumerator Bam IO a",
          "package": "samtools-enumerator",
          "partial": "Query",
          "signature": "Query-\u003eEnumerator Bam IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/samtools-enumerator/docs/Bio-SamTools-Enumerator.html#v:enumQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate over the contents of a TAM (tab-delimited text) alignment file\n\u003c/p\u003e",
          "module": "Bio.SamTools.Enumerator",
          "name": "enumTam",
          "package": "samtools-enumerator",
          "signature": "FilePath -\u003e Enumerator Bam1 IO a",
          "source": "src/Bio-SamTools-Enumerator.html#enumTam",
          "type": "function"
        },
        "index": {
          "description": "Enumerate over the contents of TAM tab-delimited text alignment file",
          "hierarchy": "Bio SamTools Enumerator",
          "module": "Bio.SamTools.Enumerator",
          "name": "enumTam",
          "normalized": "FilePath-\u003eEnumerator Bam IO a",
          "package": "samtools-enumerator",
          "partial": "Tam",
          "signature": "FilePath-\u003eEnumerator Bam IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/samtools-enumerator/docs/Bio-SamTools-Enumerator.html#v:enumTam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate over the contents of a TAM file with a separate target sequence index\n\u003c/p\u003e",
          "module": "Bio.SamTools.Enumerator",
          "name": "enumTamWithIndex",
          "package": "samtools-enumerator",
          "signature": "FilePath -\u003e FilePath -\u003e Enumerator Bam1 IO a",
          "source": "src/Bio-SamTools-Enumerator.html#enumTamWithIndex",
          "type": "function"
        },
        "index": {
          "description": "Enumerate over the contents of TAM file with separate target sequence index",
          "hierarchy": "Bio SamTools Enumerator",
          "module": "Bio.SamTools.Enumerator",
          "name": "enumTamWithIndex",
          "normalized": "FilePath-\u003eFilePath-\u003eEnumerator Bam IO a",
          "package": "samtools-enumerator",
          "partial": "Tam With Index",
          "signature": "FilePath-\u003eFilePath-\u003eEnumerator Bam IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/samtools-enumerator/docs/Bio-SamTools-Enumerator.html#v:enumTamWithIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SamTools.Enumerator",
          "name": "iterHandle",
          "package": "samtools-enumerator",
          "signature": "OutHandle -\u003e Iteratee Bam1 IO ()",
          "source": "src/Bio-SamTools-Enumerator.html#iterHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SamTools Enumerator",
          "module": "Bio.SamTools.Enumerator",
          "name": "iterHandle",
          "normalized": "OutHandle-\u003eIteratee Bam IO()",
          "package": "samtools-enumerator",
          "partial": "Handle",
          "signature": "OutHandle-\u003eIteratee Bam IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/samtools-enumerator/docs/Bio-SamTools-Enumerator.html#v:iterHandle"
      }
    }
  ]
]