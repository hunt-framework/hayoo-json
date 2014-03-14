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
        "word": "seqloc-datafiles"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for reading and writing BED format gene annotations \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.SeqLoc.Bed",
          "name": "Bed",
          "package": "seqloc-datafiles",
          "source": "src/Bio-SeqLoc-Bed.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for reading and writing BED format gene annotations",
          "hierarchy": "Bio SeqLoc Bed",
          "module": "Bio.SeqLoc.Bed",
          "name": "Bed",
          "package": "seqloc-datafiles",
          "partial": "Bed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/seqloc-datafiles/docs/Bio-SeqLoc-Bed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIteratee to convert an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e over a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e,\n such as the standard \u003ccode\u003e\u003ca\u003efileDriver\u003c/a\u003e\u003c/code\u003e, into an iteratee over a\n list of \u003ccode\u003e\u003ca\u003eTranscript\u003c/a\u003e\u003c/code\u003e annotations from the file.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Bed",
          "name": "bedTranscriptEnum",
          "package": "seqloc-datafiles",
          "signature": "Iteratee [Transcript] m a -\u003e Iteratee ByteString m a",
          "source": "src/Bio-SeqLoc-Bed.html#bedTranscriptEnum",
          "type": "function"
        },
        "index": {
          "description": "Iteratee to convert an Iteratee over ByteString such as the standard fileDriver into an iteratee over list of Transcript annotations from the file",
          "hierarchy": "Bio SeqLoc Bed",
          "module": "Bio.SeqLoc.Bed",
          "name": "bedTranscriptEnum",
          "normalized": "Iteratee[Transcript]a b-\u003eIteratee ByteString a b",
          "package": "seqloc-datafiles",
          "partial": "Transcript Enum",
          "signature": "Iteratee[Transcript]m a-\u003eIteratee ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc-datafiles/docs/Bio-SeqLoc-Bed.html#v:bedTranscriptEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimalistic \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e-style parser for a BED format line, not\n including the trailing newline.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Bed",
          "name": "bedZP",
          "package": "seqloc-datafiles",
          "signature": "Parser Transcript",
          "source": "src/Bio-SeqLoc-Bed.html#bedZP",
          "type": "function"
        },
        "index": {
          "description": "Minimalistic Parser style parser for BED format line not including the trailing newline",
          "hierarchy": "Bio SeqLoc Bed",
          "module": "Bio.SeqLoc.Bed",
          "name": "bedZP",
          "package": "seqloc-datafiles",
          "partial": "ZP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc-datafiles/docs/Bio-SeqLoc-Bed.html#v:bedZP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead all BED format annotations in a BED file\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Bed",
          "name": "readBedTranscripts",
          "package": "seqloc-datafiles",
          "signature": "FilePath -\u003e IO [Transcript]",
          "source": "src/Bio-SeqLoc-Bed.html#readBedTranscripts",
          "type": "function"
        },
        "index": {
          "description": "Read all BED format annotations in BED file",
          "hierarchy": "Bio SeqLoc Bed",
          "module": "Bio.SeqLoc.Bed",
          "name": "readBedTranscripts",
          "normalized": "FilePath-\u003eIO[Transcript]",
          "package": "seqloc-datafiles",
          "partial": "Bed Transcripts",
          "signature": "FilePath-\u003eIO[Transcript]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc-datafiles/docs/Bio-SeqLoc-Bed.html#v:readBedTranscripts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eTranscript\u003c/a\u003e\u003c/code\u003e to a BED annotation line, specifying the\n \u003cem\u003escore\u003c/em\u003e and \u003cem\u003eitemRGB\u003c/em\u003e fields.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Bed",
          "name": "transcriptToBed",
          "package": "seqloc-datafiles",
          "signature": "ByteString-\u003e ByteString-\u003e Transcript-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert Transcript to BED annotation line specifying the score and itemRGB fields",
          "hierarchy": "Bio SeqLoc Bed",
          "module": "Bio.SeqLoc.Bed",
          "name": "transcriptToBed",
          "normalized": "ByteString-\u003eByteString-\u003eTranscript-\u003eByteString",
          "package": "seqloc-datafiles",
          "partial": "To Bed",
          "signature": "ByteString-\u003eByteString-\u003eTranscript-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc-datafiles/docs/Bio-SeqLoc-Bed.html#v:transcriptToBed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eTranscript\u003c/a\u003e\u003c/code\u003e to a BED annotation line.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Bed",
          "name": "transcriptToBedStd",
          "package": "seqloc-datafiles",
          "signature": "Transcript -\u003e ByteString",
          "source": "src/Bio-SeqLoc-Bed.html#transcriptToBedStd",
          "type": "function"
        },
        "index": {
          "description": "Convert Transcript to BED annotation line",
          "hierarchy": "Bio SeqLoc Bed",
          "module": "Bio.SeqLoc.Bed",
          "name": "transcriptToBedStd",
          "normalized": "Transcript-\u003eByteString",
          "package": "seqloc-datafiles",
          "partial": "To Bed Std",
          "signature": "Transcript-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc-datafiles/docs/Bio-SeqLoc-Bed.html#v:transcriptToBedStd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for reading and writing GTF format gene annotations \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.SeqLoc.GTF",
          "name": "GTF",
          "package": "seqloc-datafiles",
          "source": "src/Bio-SeqLoc-GTF.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for reading and writing GTF format gene annotations",
          "hierarchy": "Bio SeqLoc GTF",
          "module": "Bio.SeqLoc.GTF",
          "name": "GTF",
          "package": "seqloc-datafiles",
          "partial": "GTF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/seqloc-datafiles/docs/Bio-SeqLoc-GTF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a GTF annotation file. The entire file is read at once,\n because a single annotated transcript can span many lines in a GTF\n file that are not required to occur in any specific order. The\n transcript \u003ccode\u003e\u003ca\u003eSpliceSeqLoc\u003c/a\u003e\u003c/code\u003e transcript location is assembled from\n \u003ccode\u003eexon\u003c/code\u003e annotations and any CDS location is then produced from \u003ccode\u003eCDS\u003c/code\u003e\n annotations, with an error occurring if the CDS is not a single\n contiguous location within the transcript.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.GTF",
          "name": "readGtfTranscripts",
          "package": "seqloc-datafiles",
          "signature": "FilePath -\u003e IO [Transcript]",
          "source": "src/Bio-SeqLoc-GTF.html#readGtfTranscripts",
          "type": "function"
        },
        "index": {
          "description": "Read GTF annotation file The entire file is read at once because single annotated transcript can span many lines in GTF file that are not required to occur in any specific order The transcript SpliceSeqLoc transcript location is assembled from exon annotations and any CDS location is then produced from CDS annotations with an error occurring if the CDS is not single contiguous location within the transcript",
          "hierarchy": "Bio SeqLoc GTF",
          "module": "Bio.SeqLoc.GTF",
          "name": "readGtfTranscripts",
          "normalized": "FilePath-\u003eIO[Transcript]",
          "package": "seqloc-datafiles",
          "partial": "Gtf Transcripts",
          "signature": "FilePath-\u003eIO[Transcript]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc-datafiles/docs/Bio-SeqLoc-GTF.html#v:readGtfTranscripts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.GTF",
          "name": "readGtfTranscriptsErr",
          "package": "seqloc-datafiles",
          "signature": "FilePath -\u003e IO ([Transcript], [String])",
          "source": "src/Bio-SeqLoc-GTF.html#readGtfTranscriptsErr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc GTF",
          "module": "Bio.SeqLoc.GTF",
          "name": "readGtfTranscriptsErr",
          "normalized": "FilePath-\u003eIO([Transcript],[String])",
          "package": "seqloc-datafiles",
          "partial": "Gtf Transcripts Err",
          "signature": "FilePath-\u003eIO([Transcript],[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc-datafiles/docs/Bio-SeqLoc-GTF.html#v:readGtfTranscriptsErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eTranscript\u003c/a\u003e\u003c/code\u003e to a string consisting of GTF lines. These\n lines will contain \u003ccode\u003eexon\u003c/code\u003e lines for the transcript, as well as\n \u003ccode\u003eCDS\u003c/code\u003e lines if the \u003ccode\u003e\u003ca\u003eTranscript\u003c/a\u003e\u003c/code\u003e has a \u003ccode\u003e\u003ca\u003ecds\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.GTF",
          "name": "transcriptToGtf",
          "package": "seqloc-datafiles",
          "signature": "ByteString -\u003e Transcript -\u003e ByteString",
          "source": "src/Bio-SeqLoc-GTF.html#transcriptToGtf",
          "type": "function"
        },
        "index": {
          "description": "Convert Transcript to string consisting of GTF lines These lines will contain exon lines for the transcript as well as CDS lines if the Transcript has cds",
          "hierarchy": "Bio SeqLoc GTF",
          "module": "Bio.SeqLoc.GTF",
          "name": "transcriptToGtf",
          "normalized": "ByteString-\u003eTranscript-\u003eByteString",
          "package": "seqloc-datafiles",
          "partial": "To Gtf",
          "signature": "ByteString-\u003eTranscript-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc-datafiles/docs/Bio-SeqLoc-GTF.html#v:transcriptToGtf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMinimal tab-delimited annotation of \u003ccode\u003e\u003ca\u003eTranscript\u003c/a\u003e\u003c/code\u003e locations. Each\n\u003ccode\u003e\u003ca\u003eTranscript\u003c/a\u003e\u003c/code\u003e has one line, containing the \u003ccode\u003e\u003ca\u003egeneId\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etrxId\u003c/a\u003e\u003c/code\u003e fields,\nfollowed by the \u003ccode\u003e\u003ca\u003eLocRepr\u003c/a\u003e\u003c/code\u003e representation of the \u003ccode\u003e\u003ca\u003eSpliceSeqLoc\u003c/a\u003e\u003c/code\u003e\nlocation of the transcript, and then the location of the CDS within\nthe transcript or \u003ca\u003en/a\u003c/a\u003e if there is no CDS. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.SeqLoc.TranscriptTable",
          "name": "TranscriptTable",
          "package": "seqloc-datafiles",
          "source": "src/Bio-SeqLoc-TranscriptTable.html",
          "type": "module"
        },
        "index": {
          "description": "Minimal tab-delimited annotation of Transcript locations Each Transcript has one line containing the geneId and trxId fields followed by the LocRepr representation of the SpliceSeqLoc location of the transcript and then the location of the CDS within the transcript or if there is no CDS",
          "hierarchy": "Bio SeqLoc TranscriptTable",
          "module": "Bio.SeqLoc.TranscriptTable",
          "name": "TranscriptTable",
          "package": "seqloc-datafiles",
          "partial": "Transcript Table",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/seqloc-datafiles/docs/Bio-SeqLoc-TranscriptTable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a transcript table line, not including the newline\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.TranscriptTable",
          "name": "parseLine",
          "package": "seqloc-datafiles",
          "signature": "ByteString -\u003e Maybe Transcript",
          "source": "src/Bio-SeqLoc-TranscriptTable.html#parseLine",
          "type": "function"
        },
        "index": {
          "description": "Parse transcript table line not including the newline",
          "hierarchy": "Bio SeqLoc TranscriptTable",
          "module": "Bio.SeqLoc.TranscriptTable",
          "name": "parseLine",
          "normalized": "ByteString-\u003eMaybe Transcript",
          "package": "seqloc-datafiles",
          "partial": "Line",
          "signature": "ByteString-\u003eMaybe Transcript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc-datafiles/docs/Bio-SeqLoc-TranscriptTable.html#v:parseLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a transcript table file as a list of annotated transcripts\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.TranscriptTable",
          "name": "readTable",
          "package": "seqloc-datafiles",
          "signature": "FilePath -\u003e IO [Transcript]",
          "source": "src/Bio-SeqLoc-TranscriptTable.html#readTable",
          "type": "function"
        },
        "index": {
          "description": "Read transcript table file as list of annotated transcripts",
          "hierarchy": "Bio SeqLoc TranscriptTable",
          "module": "Bio.SeqLoc.TranscriptTable",
          "name": "readTable",
          "normalized": "FilePath-\u003eIO[Transcript]",
          "package": "seqloc-datafiles",
          "partial": "Table",
          "signature": "FilePath-\u003eIO[Transcript]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc-datafiles/docs/Bio-SeqLoc-TranscriptTable.html#v:readTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a single transcript table line for a \u003ccode\u003e\u003ca\u003eTranscript\u003c/a\u003e\u003c/code\u003e, newline not included.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.TranscriptTable",
          "name": "unparseLine",
          "package": "seqloc-datafiles",
          "signature": "Transcript -\u003e ByteString",
          "source": "src/Bio-SeqLoc-TranscriptTable.html#unparseLine",
          "type": "function"
        },
        "index": {
          "description": "Produce single transcript table line for Transcript newline not included",
          "hierarchy": "Bio SeqLoc TranscriptTable",
          "module": "Bio.SeqLoc.TranscriptTable",
          "name": "unparseLine",
          "normalized": "Transcript-\u003eByteString",
          "package": "seqloc-datafiles",
          "partial": "Line",
          "signature": "Transcript-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc-datafiles/docs/Bio-SeqLoc-TranscriptTable.html#v:unparseLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a transcript table file\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.TranscriptTable",
          "name": "writeTable",
          "package": "seqloc-datafiles",
          "signature": "FilePath -\u003e [Transcript] -\u003e IO ()",
          "source": "src/Bio-SeqLoc-TranscriptTable.html#writeTable",
          "type": "function"
        },
        "index": {
          "description": "Write transcript table file",
          "hierarchy": "Bio SeqLoc TranscriptTable",
          "module": "Bio.SeqLoc.TranscriptTable",
          "name": "writeTable",
          "normalized": "FilePath-\u003e[Transcript]-\u003eIO()",
          "package": "seqloc-datafiles",
          "partial": "Table",
          "signature": "FilePath-\u003e[Transcript]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc-datafiles/docs/Bio-SeqLoc-TranscriptTable.html#v:writeTable"
      }
    }
  ]
]