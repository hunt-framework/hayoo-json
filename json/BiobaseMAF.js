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
        "word": "BiobaseMAF"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe importer for MAF files.\n\u003c/p\u003e\u003cp\u003eThe importer is in enumerator form. In case of large alignments, move\n computations into an iteratee.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Biobase.MAF.Import",
          "name": "Import",
          "package": "BiobaseMAF",
          "source": "src/Biobase-MAF-Import.html",
          "type": "module"
        },
        "index": {
          "description": "The importer for MAF files The importer is in enumerator form In case of large alignments move computations into an iteratee",
          "hierarchy": "Biobase MAF Import",
          "module": "Biobase.MAF.Import",
          "name": "Import",
          "package": "BiobaseMAF",
          "partial": "Import",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF-Import.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a ByteString stream into a stream of \u003ca\u003eEither MAF Alignment\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Biobase.MAF.Import",
          "name": "eneeMAF",
          "package": "BiobaseMAF",
          "signature": "Enumeratee ByteString [Either MAF Alignment] m a",
          "source": "src/Biobase-MAF-Import.html#eneeMAF",
          "type": "function"
        },
        "index": {
          "description": "Transforms ByteString stream into stream of Either MAF Alignment",
          "hierarchy": "Biobase MAF Import",
          "module": "Biobase.MAF.Import",
          "name": "eneeMAF",
          "normalized": "Enumeratee ByteString[Either MAF Alignment]a b",
          "package": "BiobaseMAF",
          "partial": "MAF",
          "signature": "Enumeratee ByteString[Either MAF Alignment]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF-Import.html#v:eneeMAF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMAF, multiple alignment format provides multiple alignments with\n genome-wide scale. Often used for n-way alignments with n genomes aligned\n against one reference genome.\n\u003c/p\u003e\u003cp\u003eWe follow \u003ca\u003ehttp://genome.ucsc.edu/FAQ/FAQformat.html#format5\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eTODO this is not a complete implementation of the MAF format\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Biobase.MAF",
          "name": "MAF",
          "package": "BiobaseMAF",
          "source": "src/Biobase-MAF.html",
          "type": "module"
        },
        "index": {
          "description": "MAF multiple alignment format provides multiple alignments with genome-wide scale Often used for n-way alignments with genomes aligned against one reference genome We follow http genome.ucsc.edu FAQ FAQformat.html format5 TODO this is not complete implementation of the MAF format",
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "MAF",
          "package": "BiobaseMAF",
          "partial": "MAF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea single aligned sequence.\n\u003c/p\u003e\u003cp\u003eTODO this should later on be a \u003ca\u003eBioSeq\u003c/a\u003e (cf. Ketil Maldes work) but that\n change stays in an experimental repo until \u003ca\u003eBioSeq\u003c/a\u003e is available on hackage\n\u003c/p\u003e",
          "module": "Biobase.MAF",
          "name": "Aligned",
          "package": "BiobaseMAF",
          "source": "src/Biobase-MAF.html#Aligned",
          "type": "data"
        },
        "index": {
          "description": "single aligned sequence TODO this should later on be BioSeq cf Ketil Maldes work but that change stays in an experimental repo until BioSeq is available on hackage",
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "Aligned",
          "package": "BiobaseMAF",
          "partial": "Aligned",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#t:Aligned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach alignment.\n\u003c/p\u003e",
          "module": "Biobase.MAF",
          "name": "Alignment",
          "package": "BiobaseMAF",
          "source": "src/Biobase-MAF.html#Alignment",
          "type": "data"
        },
        "index": {
          "description": "Each alignment",
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "Alignment",
          "package": "BiobaseMAF",
          "partial": "Alignment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#t:Alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome key-value pairs are defined; these are in a map\n\u003c/p\u003e",
          "module": "Biobase.MAF",
          "name": "KVs",
          "package": "BiobaseMAF",
          "source": "src/Biobase-MAF.html#KVs",
          "type": "type"
        },
        "index": {
          "description": "Some key-value pairs are defined these are in map",
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "KVs",
          "package": "BiobaseMAF",
          "partial": "KVs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#t:KVs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe header of a MAF file. Reads the initial lines beginning with '#'.\n\u003c/p\u003e",
          "module": "Biobase.MAF",
          "name": "MAF",
          "package": "BiobaseMAF",
          "source": "src/Biobase-MAF.html#MAF",
          "type": "data"
        },
        "index": {
          "description": "The header of MAF file Reads the initial lines beginning with",
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "MAF",
          "package": "BiobaseMAF",
          "partial": "MAF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#t:MAF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.MAF",
          "name": "Aligned",
          "package": "BiobaseMAF",
          "signature": "Aligned",
          "source": "src/Biobase-MAF.html#Aligned",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "Aligned",
          "package": "BiobaseMAF",
          "partial": "Aligned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#v:Aligned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.MAF",
          "name": "Alignment",
          "package": "BiobaseMAF",
          "signature": "Alignment",
          "source": "src/Biobase-MAF.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "Alignment",
          "package": "BiobaseMAF",
          "partial": "Alignment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#v:Alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.MAF",
          "name": "MAF",
          "package": "BiobaseMAF",
          "signature": "MAF",
          "source": "src/Biobase-MAF.html#MAF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "MAF",
          "package": "BiobaseMAF",
          "partial": "MAF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#v:MAF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.MAF",
          "name": "blocks",
          "package": "BiobaseMAF",
          "signature": "[Alignment]",
          "source": "src/Biobase-MAF.html#MAF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "blocks",
          "normalized": "[Alignment]",
          "package": "BiobaseMAF",
          "signature": "[Alignment]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#v:blocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.MAF",
          "name": "comments",
          "package": "BiobaseMAF",
          "signature": "[ByteString]",
          "source": "src/Biobase-MAF.html#MAF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "comments",
          "normalized": "[ByteString]",
          "package": "BiobaseMAF",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#v:comments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.MAF",
          "name": "genomesize",
          "package": "BiobaseMAF",
          "signature": "Int",
          "source": "src/Biobase-MAF.html#Aligned",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "genomesize",
          "package": "BiobaseMAF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#v:genomesize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.MAF",
          "name": "header",
          "package": "BiobaseMAF",
          "signature": "KVs",
          "source": "src/Biobase-MAF.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "header",
          "package": "BiobaseMAF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.MAF",
          "name": "key",
          "package": "BiobaseMAF",
          "signature": "ByteString",
          "source": "src/Biobase-MAF.html#Aligned",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "key",
          "package": "BiobaseMAF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#v:key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.MAF",
          "name": "length",
          "package": "BiobaseMAF",
          "signature": "Int",
          "source": "src/Biobase-MAF.html#Aligned",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "length",
          "package": "BiobaseMAF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.MAF",
          "name": "mafheader",
          "package": "BiobaseMAF",
          "signature": "KVs",
          "source": "src/Biobase-MAF.html#MAF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "mafheader",
          "package": "BiobaseMAF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#v:mafheader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.MAF",
          "name": "metadata",
          "package": "BiobaseMAF",
          "signature": "[ByteString]",
          "source": "src/Biobase-MAF.html#MAF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "metadata",
          "normalized": "[ByteString]",
          "package": "BiobaseMAF",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#v:metadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.MAF",
          "name": "sequences",
          "package": "BiobaseMAF",
          "signature": "[Aligned]",
          "source": "src/Biobase-MAF.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "sequences",
          "normalized": "[Aligned]",
          "package": "BiobaseMAF",
          "signature": "[Aligned]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#v:sequences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.MAF",
          "name": "start",
          "package": "BiobaseMAF",
          "signature": "Int",
          "source": "src/Biobase-MAF.html#Aligned",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "start",
          "package": "BiobaseMAF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.MAF",
          "name": "strand",
          "package": "BiobaseMAF",
          "signature": "Char",
          "source": "src/Biobase-MAF.html#Aligned",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "strand",
          "package": "BiobaseMAF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#v:strand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.MAF",
          "name": "value",
          "package": "BiobaseMAF",
          "signature": "ByteString",
          "source": "src/Biobase-MAF.html#Aligned",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase MAF",
          "module": "Biobase.MAF",
          "name": "value",
          "package": "BiobaseMAF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseMAF/docs/Biobase-MAF.html#v:value"
      }
    }
  ]
]