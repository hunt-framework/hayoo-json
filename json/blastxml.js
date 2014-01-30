[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a hierarchical data structure for BLAST results.\n\u003c/p\u003e\u003cp\u003eBLAST is a tool for searching in (biological) sequences for\n   similarity.  This library is tested against NCBI-blast version\n   2.2.14.  There exist several independent versions of BLAST, so expect some\n   incompatbilities if you're using a different BLAST version.\n\u003c/p\u003e\u003cp\u003eFor parsing BLAST results, the XML format (blastall -m 7) is by far the most\n   robust choice, and is implemented in the \u003ca\u003eBio.Alignment.BlastXML\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eThe format is straightforward (and non-recursive).\n   For more information on BLAST, check \u003ca\u003ehttp://www.ncbi.nlm.nih.gov/Education/BLASTinfo/information3.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "module",
        "fct-source": "src/Bio-BlastData.html",
        "fct-type": "module",
        "title": "BlastData"
      },
      "index": {
        "description": "This module implements hierarchical data structure for BLAST results BLAST is tool for searching in biological sequences for similarity This library is tested against NCBI-blast version There exist several independent versions of BLAST so expect some incompatbilities if you re using different BLAST version For parsing BLAST results the XML format blastall is by far the most robust choice and is implemented in the Bio.Alignment.BlastXML module The format is straightforward and non-recursive For more information on BLAST check http www.ncbi.nlm.nih.gov Education BLASTinfo information3.html",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "BlastData",
        "normalized": "",
        "package": "blastxml",
        "partial": "Blast Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#t:Aux",
      "description": {
        "fct-descr": "\u003cp\u003eThe Aux field in the BLAST output includes match information that depends\n   on the BLAST flavor (blastn, blastx, or blastp).  This data structure captures\n   those variations.\n\u003c/p\u003e",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "data",
        "fct-source": "src/Bio-BlastData.html#Aux",
        "fct-type": "data",
        "title": "Aux"
      },
      "index": {
        "description": "The Aux field in the BLAST output includes match information that depends on the BLAST flavor blastn blastx or blastp This data structure captures those variations",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "Aux",
        "normalized": "",
        "package": "blastxml",
        "partial": "Aux",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#t:BlastHit",
      "description": {
        "fct-descr": "\u003cp\u003eEach match between a query and a target sequence (or subject)\n   is a \u003ccode\u003e\u003ca\u003eBlastHit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "data",
        "fct-source": "src/Bio-BlastData.html#BlastHit",
        "fct-type": "data",
        "title": "BlastHit"
      },
      "index": {
        "description": "Each match between query and target sequence or subject is BlastHit",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "BlastHit",
        "normalized": "",
        "package": "blastxml",
        "partial": "Blast Hit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#t:BlastMatch",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBlastHit\u003c/a\u003e\u003c/code\u003e may contain multiple separate matches (typcially when\n   an indel causes a frameshift that blastx is unable to bridge).\n\u003c/p\u003e",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "data",
        "fct-source": "src/Bio-BlastData.html#BlastMatch",
        "fct-type": "data",
        "title": "BlastMatch"
      },
      "index": {
        "description": "BlastHit may contain multiple separate matches typcially when an indel causes frameshift that blastx is unable to bridge",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "BlastMatch",
        "normalized": "",
        "package": "blastxml",
        "partial": "Blast Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#t:BlastRecord",
      "description": {
        "fct-descr": "\u003cp\u003eEach query sequence generates a \u003ccode\u003e\u003ca\u003eBlastRecord\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "data",
        "fct-source": "src/Bio-BlastData.html#BlastRecord",
        "fct-type": "data",
        "title": "BlastRecord"
      },
      "index": {
        "description": "Each query sequence generates BlastRecord",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "BlastRecord",
        "normalized": "",
        "package": "blastxml",
        "partial": "Blast Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#t:BlastResult",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBlastResult\u003c/a\u003e\u003c/code\u003e is the root of the hierarchy.\n\u003c/p\u003e",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "data",
        "fct-source": "src/Bio-BlastData.html#BlastResult",
        "fct-type": "data",
        "title": "BlastResult"
      },
      "index": {
        "description": "BlastResult is the root of the hierarchy",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "BlastResult",
        "normalized": "",
        "package": "blastxml",
        "partial": "Blast Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:BlastHit",
      "description": {
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "BlastHit",
        "fct-source": "src/Bio-BlastData.html#BlastHit",
        "fct-type": "function",
        "title": "BlastHit"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "BlastHit",
        "normalized": "",
        "package": "blastxml",
        "partial": "Blast Hit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:BlastMatch",
      "description": {
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "BlastMatch",
        "fct-source": "src/Bio-BlastData.html#BlastMatch",
        "fct-type": "function",
        "title": "BlastMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "BlastMatch",
        "normalized": "",
        "package": "blastxml",
        "partial": "Blast Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:BlastRecord",
      "description": {
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "BlastRecord",
        "fct-source": "src/Bio-BlastData.html#BlastRecord",
        "fct-type": "function",
        "title": "BlastRecord"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "BlastRecord",
        "normalized": "",
        "package": "blastxml",
        "partial": "Blast Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:BlastResult",
      "description": {
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "BlastResult",
        "fct-source": "src/Bio-BlastData.html#BlastResult",
        "fct-type": "function",
        "title": "BlastResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "BlastResult",
        "normalized": "",
        "package": "blastxml",
        "partial": "Blast Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:Frame",
      "description": {
        "fct-descr": "\u003cp\u003eblastx\n\u003c/p\u003e",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "Frame !Strand !Int",
        "fct-source": "src/Bio-BlastData.html#Aux",
        "fct-type": "function",
        "title": "Frame"
      },
      "index": {
        "description": "blastx",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "Frame",
        "normalized": "",
        "package": "blastxml",
        "partial": "Frame",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:Strands",
      "description": {
        "fct-descr": "\u003cp\u003eblastn\n\u003c/p\u003e",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "Strands !Strand !Strand",
        "fct-source": "src/Bio-BlastData.html#Aux",
        "fct-type": "function",
        "title": "Strands"
      },
      "index": {
        "description": "blastn",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "Strands",
        "normalized": "",
        "package": "blastxml",
        "partial": "Strands",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:aux",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!Aux",
        "fct-source": "src/Bio-BlastData.html#BlastMatch",
        "fct-type": "function",
        "title": "aux"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "aux",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:bits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!Double",
        "fct-source": "src/Bio-BlastData.html#BlastMatch",
        "fct-type": "function",
        "title": "bits"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "bits",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:blastdate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!ByteString",
        "fct-source": "src/Bio-BlastData.html#BlastResult",
        "fct-type": "function",
        "title": "blastdate"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "blastdate",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:blastprogram",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!ByteString",
        "fct-source": "src/Bio-BlastData.html#BlastResult",
        "fct-type": "function",
        "title": "blastprogram"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "blastprogram",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:blastreferences",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!ByteString",
        "fct-source": "src/Bio-BlastData.html#BlastResult",
        "fct-type": "function",
        "title": "blastreferences"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "blastreferences",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:blastversion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!ByteString",
        "fct-source": "src/Bio-BlastData.html#BlastResult",
        "fct-type": "function",
        "title": "blastversion"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "blastversion",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:database",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!ByteString",
        "fct-source": "src/Bio-BlastData.html#BlastResult",
        "fct-type": "function",
        "title": "database"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "database",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:dbchars",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!Integer",
        "fct-source": "src/Bio-BlastData.html#BlastResult",
        "fct-type": "function",
        "title": "dbchars"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "dbchars",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:dbsequences",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!Integer",
        "fct-source": "src/Bio-BlastData.html#BlastResult",
        "fct-type": "function",
        "title": "dbsequences"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "dbsequences",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:e_val",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!Double",
        "fct-source": "src/Bio-BlastData.html#BlastMatch",
        "fct-type": "function",
        "title": "e_val"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "e_val",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:h_from",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!Int",
        "fct-source": "src/Bio-BlastData.html#BlastMatch",
        "fct-type": "function",
        "title": "h_from"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "h_from",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:h_to",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!Int",
        "fct-source": "src/Bio-BlastData.html#BlastMatch",
        "fct-type": "function",
        "title": "h_to"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "h_to",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:hits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "[BlastHit]",
        "fct-source": "src/Bio-BlastData.html#BlastRecord",
        "fct-type": "function",
        "title": "hits"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "hits",
        "normalized": "[BlastHit]",
        "package": "blastxml",
        "partial": "",
        "signature": "[BlastHit]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:hseq",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!ByteString",
        "fct-source": "src/Bio-BlastData.html#BlastMatch",
        "fct-type": "function",
        "title": "hseq"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "hseq",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:identity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "(Int, Int)",
        "fct-source": "src/Bio-BlastData.html#BlastMatch",
        "fct-type": "function",
        "title": "identity"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "identity",
        "normalized": "(Int,Int)",
        "package": "blastxml",
        "partial": "",
        "signature": "(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:matches",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "[BlastMatch]",
        "fct-source": "src/Bio-BlastData.html#BlastHit",
        "fct-type": "function",
        "title": "matches"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "matches",
        "normalized": "[BlastMatch]",
        "package": "blastxml",
        "partial": "",
        "signature": "[BlastMatch]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:q_from",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!Int",
        "fct-source": "src/Bio-BlastData.html#BlastMatch",
        "fct-type": "function",
        "title": "q_from"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "q_from",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:q_to",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!Int",
        "fct-source": "src/Bio-BlastData.html#BlastMatch",
        "fct-type": "function",
        "title": "q_to"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "q_to",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:qlength",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!Int",
        "fct-source": "src/Bio-BlastData.html#BlastRecord",
        "fct-type": "function",
        "title": "qlength"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "qlength",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:qseq",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!ByteString",
        "fct-source": "src/Bio-BlastData.html#BlastMatch",
        "fct-type": "function",
        "title": "qseq"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "qseq",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:query",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!SeqLabel",
        "fct-source": "src/Bio-BlastData.html#BlastRecord",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "query",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:results",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "[BlastRecord]",
        "fct-source": "src/Bio-BlastData.html#BlastResult",
        "fct-type": "function",
        "title": "results"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "results",
        "normalized": "[BlastRecord]",
        "package": "blastxml",
        "partial": "",
        "signature": "[BlastRecord]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:slength",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!Int",
        "fct-source": "src/Bio-BlastData.html#BlastHit",
        "fct-type": "function",
        "title": "slength"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "slength",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastData.html#v:subject",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastData",
        "fct-package": "blastxml",
        "fct-signature": "!SeqLabel",
        "fct-source": "src/Bio-BlastData.html#BlastHit",
        "fct-type": "function",
        "title": "subject"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastData",
        "module": "Bio.BlastData",
        "name": "subject",
        "normalized": "",
        "package": "blastxml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastXML.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse blast XML output.\n\u003c/p\u003e\u003cp\u003eIf you use a recent version of NCBI BLAST and specify XML output (blastall -m 7),\n   this module should be able to parse the result into a hierarchical \u003ccode\u003e\u003ca\u003eBlastResult\u003c/a\u003e\u003c/code\u003e\n   structure.\n\u003c/p\u003e\u003cp\u003eWhile the process may consume a bit of memory, the parsing is lazy,\n   and file sizes of several gigabytes can be parsed (see e.g. the\n   xml2x tool for an example).  To parse XML, we use\n   \u003ccode\u003e\u003ca\u003eTagSoup\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bio.BlastXML",
        "fct-package": "blastxml",
        "fct-signature": "module",
        "fct-source": "src/Bio-BlastXML.html",
        "fct-type": "module",
        "title": "BlastXML"
      },
      "index": {
        "description": "Parse blast XML output If you use recent version of NCBI BLAST and specify XML output blastall this module should be able to parse the result into hierarchical BlastResult structure While the process may consume bit of memory the parsing is lazy and file sizes of several gigabytes can be parsed see e.g the xml2x tool for an example To parse XML we use TagSoup",
        "hierarchy": "Bio BlastXML",
        "module": "Bio.BlastXML",
        "name": "BlastXML",
        "normalized": "",
        "package": "blastxml",
        "partial": "Blast XML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastXML.html#v:parseXML",
      "description": {
        "fct-module": "Bio.BlastXML",
        "fct-package": "blastxml",
        "fct-signature": "ByteString -\u003e IO BlastResult",
        "fct-source": "src/Bio-BlastXML.html#parseXML",
        "fct-type": "function",
        "title": "parseXML"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastXML",
        "module": "Bio.BlastXML",
        "name": "parseXML",
        "normalized": "ByteString-\u003eIO BlastResult",
        "package": "blastxml",
        "partial": "XML",
        "signature": "ByteString-\u003eIO BlastResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blastxml/docs/Bio-BlastXML.html#v:readXML",
      "description": {
        "fct-descr": "\u003cp\u003eParse BLAST results in XML format\n\u003c/p\u003e",
        "fct-module": "Bio.BlastXML",
        "fct-package": "blastxml",
        "fct-signature": "FilePath -\u003e IO BlastResult",
        "fct-source": "src/Bio-BlastXML.html#readXML",
        "fct-type": "function",
        "title": "readXML"
      },
      "index": {
        "description": "Parse BLAST results in XML format",
        "hierarchy": "Bio BlastXML",
        "module": "Bio.BlastXML",
        "name": "readXML",
        "normalized": "FilePath-\u003eIO BlastResult",
        "package": "blastxml",
        "partial": "XML",
        "signature": "FilePath-\u003eIO BlastResult"
      }
    }
  }
]