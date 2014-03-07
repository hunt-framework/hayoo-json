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
        "word": "samtools-iteratee"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SamTools.Iteratee",
          "name": "Iteratee",
          "package": "samtools-iteratee",
          "source": "src/Bio-SamTools-Iteratee.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bio SamTools Iteratee",
          "module": "Bio.SamTools.Iteratee",
          "name": "Iteratee",
          "package": "samtools-iteratee",
          "partial": "Iteratee",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/samtools-iteratee/docs/Bio-SamTools-Iteratee.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SamTools.Iteratee",
          "name": "enumBam",
          "package": "samtools-iteratee",
          "signature": "FilePath -\u003e Enumerator [Bam1] IO a",
          "source": "src/Bio-SamTools-Iteratee.html#enumBam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SamTools Iteratee",
          "module": "Bio.SamTools.Iteratee",
          "name": "enumBam",
          "normalized": "FilePath-\u003eEnumerator[Bam]IO a",
          "package": "samtools-iteratee",
          "partial": "Bam",
          "signature": "FilePath-\u003eEnumerator[Bam]IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/samtools-iteratee/docs/Bio-SamTools-Iteratee.html#v:enumBam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SamTools.Iteratee",
          "name": "enumBamRegion",
          "package": "samtools-iteratee",
          "signature": "FilePath -\u003e ByteString -\u003e (Int64, Int64) -\u003e Enumerator [Bam1] IO a",
          "source": "src/Bio-SamTools-Iteratee.html#enumBamRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SamTools Iteratee",
          "module": "Bio.SamTools.Iteratee",
          "name": "enumBamRegion",
          "normalized": "FilePath-\u003eByteString-\u003e(Int,Int)-\u003eEnumerator[Bam]IO a",
          "package": "samtools-iteratee",
          "partial": "Bam Region",
          "signature": "FilePath-\u003eByteString-\u003e(Int,Int)-\u003eEnumerator[Bam]IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/samtools-iteratee/docs/Bio-SamTools-Iteratee.html#v:enumBamRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SamTools.Iteratee",
          "name": "enumInHandle",
          "package": "samtools-iteratee",
          "signature": "InHandle -\u003e Enumerator [Bam1] IO a",
          "source": "src/Bio-SamTools-Iteratee.html#enumInHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SamTools Iteratee",
          "module": "Bio.SamTools.Iteratee",
          "name": "enumInHandle",
          "normalized": "InHandle-\u003eEnumerator[Bam]IO a",
          "package": "samtools-iteratee",
          "partial": "In Handle",
          "signature": "InHandle-\u003eEnumerator[Bam]IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/samtools-iteratee/docs/Bio-SamTools-Iteratee.html#v:enumInHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SamTools.Iteratee",
          "name": "enumIndexRegion",
          "package": "samtools-iteratee",
          "signature": "IdxHandle -\u003e Int -\u003e (Int64, Int64) -\u003e Enumerator [Bam1] IO a",
          "source": "src/Bio-SamTools-Iteratee.html#enumIndexRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SamTools Iteratee",
          "module": "Bio.SamTools.Iteratee",
          "name": "enumIndexRegion",
          "normalized": "IdxHandle-\u003eInt-\u003e(Int,Int)-\u003eEnumerator[Bam]IO a",
          "package": "samtools-iteratee",
          "partial": "Index Region",
          "signature": "IdxHandle-\u003eInt-\u003e(Int,Int)-\u003eEnumerator[Bam]IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/samtools-iteratee/docs/Bio-SamTools-Iteratee.html#v:enumIndexRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SamTools.Iteratee",
          "name": "enumQuery",
          "package": "samtools-iteratee",
          "signature": "Query -\u003e Enumerator [Bam1] IO a",
          "source": "src/Bio-SamTools-Iteratee.html#enumQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SamTools Iteratee",
          "module": "Bio.SamTools.Iteratee",
          "name": "enumQuery",
          "normalized": "Query-\u003eEnumerator[Bam]IO a",
          "package": "samtools-iteratee",
          "partial": "Query",
          "signature": "Query-\u003eEnumerator[Bam]IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/samtools-iteratee/docs/Bio-SamTools-Iteratee.html#v:enumQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SamTools.Iteratee",
          "name": "enumTam",
          "package": "samtools-iteratee",
          "signature": "FilePath -\u003e Enumerator [Bam1] IO a",
          "source": "src/Bio-SamTools-Iteratee.html#enumTam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SamTools Iteratee",
          "module": "Bio.SamTools.Iteratee",
          "name": "enumTam",
          "normalized": "FilePath-\u003eEnumerator[Bam]IO a",
          "package": "samtools-iteratee",
          "partial": "Tam",
          "signature": "FilePath-\u003eEnumerator[Bam]IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/samtools-iteratee/docs/Bio-SamTools-Iteratee.html#v:enumTam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SamTools.Iteratee",
          "name": "enumTamWithIndex",
          "package": "samtools-iteratee",
          "signature": "FilePath -\u003e FilePath -\u003e Enumerator [Bam1] IO a",
          "source": "src/Bio-SamTools-Iteratee.html#enumTamWithIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SamTools Iteratee",
          "module": "Bio.SamTools.Iteratee",
          "name": "enumTamWithIndex",
          "normalized": "FilePath-\u003eFilePath-\u003eEnumerator[Bam]IO a",
          "package": "samtools-iteratee",
          "partial": "Tam With Index",
          "signature": "FilePath-\u003eFilePath-\u003eEnumerator[Bam]IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/samtools-iteratee/docs/Bio-SamTools-Iteratee.html#v:enumTamWithIndex"
      }
    }
  ]
]