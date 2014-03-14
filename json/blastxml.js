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
        "word": "blastxml"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a hierarchical data structure for BLAST results.\n\u003c/p\u003e\u003cp\u003eBLAST is a tool for searching in (biological) sequences for\n   similarity.  This library is tested against NCBI-blast version\n   2.2.14.  There exist several independent versions of BLAST, so expect some\n   incompatbilities if you're using a different BLAST version.\n\u003c/p\u003e\u003cp\u003eFor parsing BLAST results, the XML format (blastall -m 7) is by far the most\n   robust choice, and is implemented in the \u003ca\u003eBio.Alignment.BlastXML\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eThe format is straightforward (and non-recursive).\n   For more information on BLAST, check \u003ca\u003ehttp://www.ncbi.nlm.nih.gov/Education/BLASTinfo/information3.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.BlastData",
          "name": "BlastData",
          "package": "blastxml",
          "source": "src/Bio-BlastData.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements hierarchical data structure for BLAST results BLAST is tool for searching in biological sequences for similarity This library is tested against NCBI-blast version There exist several independent versions of BLAST so expect some incompatbilities if you re using different BLAST version For parsing BLAST results the XML format blastall is by far the most robust choice and is implemented in the Bio.Alignment.BlastXML module The format is straightforward and non-recursive For more information on BLAST check http www.ncbi.nlm.nih.gov Education BLASTinfo information3.html",
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "BlastData",
          "package": "blastxml",
          "partial": "Blast Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Aux field in the BLAST output includes match information that depends\n   on the BLAST flavor (blastn, blastx, or blastp).  This data structure captures\n   those variations.\n\u003c/p\u003e",
          "module": "Bio.BlastData",
          "name": "Aux",
          "package": "blastxml",
          "source": "src/Bio-BlastData.html#Aux",
          "type": "data"
        },
        "index": {
          "description": "The Aux field in the BLAST output includes match information that depends on the BLAST flavor blastn blastx or blastp This data structure captures those variations",
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "Aux",
          "package": "blastxml",
          "partial": "Aux",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#t:Aux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach match between a query and a target sequence (or subject)\n   is a \u003ccode\u003e\u003ca\u003eBlastHit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bio.BlastData",
          "name": "BlastHit",
          "package": "blastxml",
          "source": "src/Bio-BlastData.html#BlastHit",
          "type": "data"
        },
        "index": {
          "description": "Each match between query and target sequence or subject is BlastHit",
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "BlastHit",
          "package": "blastxml",
          "partial": "Blast Hit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#t:BlastHit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBlastHit\u003c/a\u003e\u003c/code\u003e may contain multiple separate matches (typcially when\n   an indel causes a frameshift that blastx is unable to bridge).\n\u003c/p\u003e",
          "module": "Bio.BlastData",
          "name": "BlastMatch",
          "package": "blastxml",
          "source": "src/Bio-BlastData.html#BlastMatch",
          "type": "data"
        },
        "index": {
          "description": "BlastHit may contain multiple separate matches typcially when an indel causes frameshift that blastx is unable to bridge",
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "BlastMatch",
          "package": "blastxml",
          "partial": "Blast Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#t:BlastMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach query sequence generates a \u003ccode\u003e\u003ca\u003eBlastRecord\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bio.BlastData",
          "name": "BlastRecord",
          "package": "blastxml",
          "source": "src/Bio-BlastData.html#BlastRecord",
          "type": "data"
        },
        "index": {
          "description": "Each query sequence generates BlastRecord",
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "BlastRecord",
          "package": "blastxml",
          "partial": "Blast Record",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#t:BlastRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBlastResult\u003c/a\u003e\u003c/code\u003e is the root of the hierarchy.\n\u003c/p\u003e",
          "module": "Bio.BlastData",
          "name": "BlastResult",
          "package": "blastxml",
          "source": "src/Bio-BlastData.html#BlastResult",
          "type": "data"
        },
        "index": {
          "description": "BlastResult is the root of the hierarchy",
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "BlastResult",
          "package": "blastxml",
          "partial": "Blast Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#t:BlastResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "BlastHit",
          "package": "blastxml",
          "signature": "BlastHit",
          "source": "src/Bio-BlastData.html#BlastHit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "BlastHit",
          "package": "blastxml",
          "partial": "Blast Hit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:BlastHit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "BlastMatch",
          "package": "blastxml",
          "signature": "BlastMatch",
          "source": "src/Bio-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "BlastMatch",
          "package": "blastxml",
          "partial": "Blast Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:BlastMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "BlastRecord",
          "package": "blastxml",
          "signature": "BlastRecord",
          "source": "src/Bio-BlastData.html#BlastRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "BlastRecord",
          "package": "blastxml",
          "partial": "Blast Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:BlastRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "BlastResult",
          "package": "blastxml",
          "signature": "BlastResult",
          "source": "src/Bio-BlastData.html#BlastResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "BlastResult",
          "package": "blastxml",
          "partial": "Blast Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:BlastResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eblastx\n\u003c/p\u003e",
          "module": "Bio.BlastData",
          "name": "Frame",
          "package": "blastxml",
          "signature": "Frame !Strand !Int",
          "source": "src/Bio-BlastData.html#Aux",
          "type": "function"
        },
        "index": {
          "description": "blastx",
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "Frame",
          "package": "blastxml",
          "partial": "Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:Frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eblastn\n\u003c/p\u003e",
          "module": "Bio.BlastData",
          "name": "Strands",
          "package": "blastxml",
          "signature": "Strands !Strand !Strand",
          "source": "src/Bio-BlastData.html#Aux",
          "type": "function"
        },
        "index": {
          "description": "blastn",
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "Strands",
          "package": "blastxml",
          "partial": "Strands",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:Strands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "aux",
          "package": "blastxml",
          "signature": "Aux",
          "source": "src/Bio-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "aux",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:aux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "bits",
          "package": "blastxml",
          "signature": "Double",
          "source": "src/Bio-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "bits",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:bits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "blastdate",
          "package": "blastxml",
          "signature": "ByteString",
          "source": "src/Bio-BlastData.html#BlastResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "blastdate",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:blastdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "blastprogram",
          "package": "blastxml",
          "signature": "ByteString",
          "source": "src/Bio-BlastData.html#BlastResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "blastprogram",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:blastprogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "blastreferences",
          "package": "blastxml",
          "signature": "ByteString",
          "source": "src/Bio-BlastData.html#BlastResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "blastreferences",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:blastreferences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "blastversion",
          "package": "blastxml",
          "signature": "ByteString",
          "source": "src/Bio-BlastData.html#BlastResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "blastversion",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:blastversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "database",
          "package": "blastxml",
          "signature": "ByteString",
          "source": "src/Bio-BlastData.html#BlastResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "database",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:database"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "dbchars",
          "package": "blastxml",
          "signature": "Integer",
          "source": "src/Bio-BlastData.html#BlastResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "dbchars",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:dbchars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "dbsequences",
          "package": "blastxml",
          "signature": "Integer",
          "source": "src/Bio-BlastData.html#BlastResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "dbsequences",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:dbsequences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "e_val",
          "package": "blastxml",
          "signature": "Double",
          "source": "src/Bio-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "e_val",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:e_val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "h_from",
          "package": "blastxml",
          "signature": "Int",
          "source": "src/Bio-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "h_from",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:h_from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "h_to",
          "package": "blastxml",
          "signature": "Int",
          "source": "src/Bio-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "h_to",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:h_to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "hits",
          "package": "blastxml",
          "signature": "[BlastHit]",
          "source": "src/Bio-BlastData.html#BlastRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "hits",
          "normalized": "[BlastHit]",
          "package": "blastxml",
          "signature": "[BlastHit]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:hits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "hseq",
          "package": "blastxml",
          "signature": "ByteString",
          "source": "src/Bio-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "hseq",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:hseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "identity",
          "package": "blastxml",
          "signature": "(Int, Int)",
          "source": "src/Bio-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "identity",
          "normalized": "(Int,Int)",
          "package": "blastxml",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "matches",
          "package": "blastxml",
          "signature": "[BlastMatch]",
          "source": "src/Bio-BlastData.html#BlastHit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "matches",
          "normalized": "[BlastMatch]",
          "package": "blastxml",
          "signature": "[BlastMatch]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:matches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "q_from",
          "package": "blastxml",
          "signature": "Int",
          "source": "src/Bio-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "q_from",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:q_from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "q_to",
          "package": "blastxml",
          "signature": "Int",
          "source": "src/Bio-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "q_to",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:q_to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "qlength",
          "package": "blastxml",
          "signature": "Int",
          "source": "src/Bio-BlastData.html#BlastRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "qlength",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:qlength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "qseq",
          "package": "blastxml",
          "signature": "ByteString",
          "source": "src/Bio-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "qseq",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:qseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "query",
          "package": "blastxml",
          "signature": "SeqLabel",
          "source": "src/Bio-BlastData.html#BlastRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "query",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "results",
          "package": "blastxml",
          "signature": "[BlastRecord]",
          "source": "src/Bio-BlastData.html#BlastResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "results",
          "normalized": "[BlastRecord]",
          "package": "blastxml",
          "signature": "[BlastRecord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:results"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "slength",
          "package": "blastxml",
          "signature": "Int",
          "source": "src/Bio-BlastData.html#BlastHit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "slength",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:slength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastData",
          "name": "subject",
          "package": "blastxml",
          "signature": "SeqLabel",
          "source": "src/Bio-BlastData.html#BlastHit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastData",
          "module": "Bio.BlastData",
          "name": "subject",
          "package": "blastxml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:subject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse blast XML output.\n\u003c/p\u003e\u003cp\u003eIf you use a recent version of NCBI BLAST and specify XML output (blastall -m 7),\n   this module should be able to parse the result into a hierarchical \u003ccode\u003e\u003ca\u003eBlastResult\u003c/a\u003e\u003c/code\u003e\n   structure.\n\u003c/p\u003e\u003cp\u003eWhile the process may consume a bit of memory, the parsing is lazy,\n   and file sizes of several gigabytes can be parsed (see e.g. the\n   xml2x tool for an example).  To parse XML, we use\n   \u003ccode\u003e\u003ca\u003eTagSoup\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.BlastXML",
          "name": "BlastXML",
          "package": "blastxml",
          "source": "src/Bio-BlastXML.html",
          "type": "module"
        },
        "index": {
          "description": "Parse blast XML output If you use recent version of NCBI BLAST and specify XML output blastall this module should be able to parse the result into hierarchical BlastResult structure While the process may consume bit of memory the parsing is lazy and file sizes of several gigabytes can be parsed see e.g the xml2x tool for an example To parse XML we use TagSoup",
          "hierarchy": "Bio BlastXML",
          "module": "Bio.BlastXML",
          "name": "BlastXML",
          "package": "blastxml",
          "partial": "Blast XML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastXML.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.BlastXML",
          "name": "parseXML",
          "package": "blastxml",
          "signature": "ByteString -\u003e IO BlastResult",
          "source": "src/Bio-BlastXML.html#parseXML",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio BlastXML",
          "module": "Bio.BlastXML",
          "name": "parseXML",
          "normalized": "ByteString-\u003eIO BlastResult",
          "package": "blastxml",
          "partial": "XML",
          "signature": "ByteString-\u003eIO BlastResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastXML.html#v:parseXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse BLAST results in XML format\n\u003c/p\u003e",
          "module": "Bio.BlastXML",
          "name": "readXML",
          "package": "blastxml",
          "signature": "FilePath -\u003e IO BlastResult",
          "source": "src/Bio-BlastXML.html#readXML",
          "type": "function"
        },
        "index": {
          "description": "Parse BLAST results in XML format",
          "hierarchy": "Bio BlastXML",
          "module": "Bio.BlastXML",
          "name": "readXML",
          "normalized": "FilePath-\u003eIO BlastResult",
          "package": "blastxml",
          "partial": "XML",
          "signature": "FilePath-\u003eIO BlastResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastXML.html#v:readXML"
      }
    }
  ]
]