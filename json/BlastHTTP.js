[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlastHTTP/docs/Bio-BlastHTTP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSearches a provided sequence with the NCBI Blast REST service and returns a blast result in xml format as BlastResult.\n\u003c/p\u003e\u003cp\u003eThe function blastHTTP takes the BlastHTTPQuery datatype as argument, which contains following elements: \n\u003c/p\u003e\u003col\u003e\u003cli\u003e program:  Selects the blast-program to be used for the query. Example values are blastn, blastp, blastx,.. If Nothing is used as argument the function will default to blastn. Type: Maybe String\n\u003c/li\u003e\u003cli\u003e database: Selects the database to be queried against. Example values are refseq_genomic, nr, est,.. Please consider that the database must be chosen in accordance with the blastprogram. Default value: refseq_genomic. Type: Maybe String\n\u003c/li\u003e\u003cli\u003e querySequence: nucleotides or protein sequence, depending on the blast program used. If no sequence is provided an exception as String will be produced. Type: Maybe SeqData\n\u003c/li\u003e\u003cli\u003e entrezQuery: This argument is optional and will filter the result if provided. Type: Maybe String\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eand returns Either a BlastResult (Right) on success or an exception as String (Left)\n\u003c/p\u003e\u003cp\u003eIf you plan to submit more than 20 searches in one session, please look up the Usage Guidelines in the webservice information \u003ca\u003ehttp://www.ncbi.nlm.nih.gov/BLAST/developer.shtml\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bio.BlastHTTP",
        "fct-package": "BlastHTTP",
        "fct-signature": "module",
        "fct-source": "src/Bio-BlastHTTP.html",
        "fct-type": "module",
        "title": "BlastHTTP"
      },
      "index": {
        "description": "Searches provided sequence with the NCBI Blast REST service and returns blast result in xml format as BlastResult The function blastHTTP takes the BlastHTTPQuery datatype as argument which contains following elements program Selects the blast-program to be used for the query Example values are blastn blastp blastx If Nothing is used as argument the function will default to blastn Type Maybe String database Selects the database to be queried against Example values are refseq genomic nr est Please consider that the database must be chosen in accordance with the blastprogram Default value refseq genomic Type Maybe String querySequence nucleotides or protein sequence depending on the blast program used If no sequence is provided an exception as String will be produced Type Maybe SeqData entrezQuery This argument is optional and will filter the result if provided Type Maybe String and returns Either BlastResult Right on success or an exception as String Left If you plan to submit more than searches in one session please look up the Usage Guidelines in the webservice information http www.ncbi.nlm.nih.gov BLAST developer.shtml",
        "hierarchy": "Bio BlastHTTP",
        "module": "Bio.BlastHTTP",
        "name": "BlastHTTP",
        "normalized": "",
        "package": "BlastHTTP",
        "partial": "Blast HTTP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlastHTTP/docs/Bio-BlastHTTP.html#t:BlastHTTPQuery",
      "description": {
        "fct-module": "Bio.BlastHTTP",
        "fct-package": "BlastHTTP",
        "fct-signature": "data",
        "fct-source": "src/Bio-BlastHTTP.html#BlastHTTPQuery",
        "fct-type": "data",
        "title": "BlastHTTPQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastHTTP",
        "module": "Bio.BlastHTTP",
        "name": "BlastHTTPQuery",
        "normalized": "",
        "package": "BlastHTTP",
        "partial": "Blast HTTPQuery",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlastHTTP/docs/Bio-BlastHTTP.html#v:BlastHTTPQuery",
      "description": {
        "fct-module": "Bio.BlastHTTP",
        "fct-package": "BlastHTTP",
        "fct-signature": "BlastHTTPQuery",
        "fct-source": "src/Bio-BlastHTTP.html#BlastHTTPQuery",
        "fct-type": "function",
        "title": "BlastHTTPQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastHTTP",
        "module": "Bio.BlastHTTP",
        "name": "BlastHTTPQuery",
        "normalized": "",
        "package": "BlastHTTP",
        "partial": "Blast HTTPQuery",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlastHTTP/docs/Bio-BlastHTTP.html#v:blastHTTP",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve Blast results in BlastXML format from the NCBI REST Blast interface\n The querySequence has to be provided, all other parameters are optional. It is possible to provide an ENTREZ query string\nblastHTTP :: Maybe String -\u003e Maybe String -\u003e Maybe SeqData -\u003e Maybe String -\u003e IO (Either String BlastResult)\n\u003c/p\u003e",
        "fct-module": "Bio.BlastHTTP",
        "fct-package": "BlastHTTP",
        "fct-signature": "BlastHTTPQuery -\u003e IO (Either String BlastResult)",
        "fct-source": "src/Bio-BlastHTTP.html#blastHTTP",
        "fct-type": "function",
        "title": "blastHTTP"
      },
      "index": {
        "description": "Retrieve Blast results in BlastXML format from the NCBI REST Blast interface The querySequence has to be provided all other parameters are optional It is possible to provide an ENTREZ query string blastHTTP Maybe String Maybe String Maybe SeqData Maybe String IO Either String BlastResult",
        "hierarchy": "Bio BlastHTTP",
        "module": "Bio.BlastHTTP",
        "name": "blastHTTP",
        "normalized": "BlastHTTPQuery-\u003eIO(Either String BlastResult)",
        "package": "BlastHTTP",
        "partial": "HTTP",
        "signature": "BlastHTTPQuery-\u003eIO(Either String BlastResult)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlastHTTP/docs/Bio-BlastHTTP.html#v:database",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastHTTP",
        "fct-package": "BlastHTTP",
        "fct-signature": "Maybe String",
        "fct-source": "src/Bio-BlastHTTP.html#BlastHTTPQuery",
        "fct-type": "function",
        "title": "database"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastHTTP",
        "module": "Bio.BlastHTTP",
        "name": "database",
        "normalized": "",
        "package": "BlastHTTP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlastHTTP/docs/Bio-BlastHTTP.html#v:entrezQuery",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastHTTP",
        "fct-package": "BlastHTTP",
        "fct-signature": "Maybe String",
        "fct-source": "src/Bio-BlastHTTP.html#BlastHTTPQuery",
        "fct-type": "function",
        "title": "entrezQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastHTTP",
        "module": "Bio.BlastHTTP",
        "name": "entrezQuery",
        "normalized": "",
        "package": "BlastHTTP",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlastHTTP/docs/Bio-BlastHTTP.html#v:program",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastHTTP",
        "fct-package": "BlastHTTP",
        "fct-signature": "Maybe String",
        "fct-source": "src/Bio-BlastHTTP.html#BlastHTTPQuery",
        "fct-type": "function",
        "title": "program"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastHTTP",
        "module": "Bio.BlastHTTP",
        "name": "program",
        "normalized": "",
        "package": "BlastHTTP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlastHTTP/docs/Bio-BlastHTTP.html#v:querySequence",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.BlastHTTP",
        "fct-package": "BlastHTTP",
        "fct-signature": "Maybe SeqData",
        "fct-source": "src/Bio-BlastHTTP.html#BlastHTTPQuery",
        "fct-type": "function",
        "title": "querySequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio BlastHTTP",
        "module": "Bio.BlastHTTP",
        "name": "querySequence",
        "normalized": "",
        "package": "BlastHTTP",
        "partial": "Sequence",
        "signature": ""
      }
    }
  }
]