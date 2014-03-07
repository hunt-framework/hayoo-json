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
        "word": "AC-PPM"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerate binary PPM files (\"P6\"). These are smaller\n  on disk and faster to generate than text PPM files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.PPM.Binary",
          "name": "Binary",
          "package": "AC-PPM",
          "source": "src/Codec-PPM-Binary.html",
          "type": "module"
        },
        "index": {
          "description": "Generate binary PPM files P6 These are smaller on disk and faster to generate than text PPM files",
          "hierarchy": "Codec PPM Binary",
          "module": "Codec.PPM.Binary",
          "name": "Binary",
          "package": "AC-PPM",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function: Given a function from pixel coordinates to pixel\n  colour, produce a list of pixel data ready to feed to one of the\n  other PPM functions.\n\u003c/p\u003e",
          "module": "Codec.PPM.Binary",
          "name": "fn_list",
          "package": "AC-PPM",
          "signature": "((Integer, Integer) -\u003e (Word8, Word8, Word8)) -\u003e (Integer, Integer) -\u003e [(Word8, Word8, Word8)]",
          "source": "src/Codec-PPM-Binary.html#fn_list",
          "type": "function"
        },
        "index": {
          "description": "Helper function Given function from pixel coordinates to pixel colour produce list of pixel data ready to feed to one of the other PPM functions",
          "hierarchy": "Codec PPM Binary",
          "module": "Codec.PPM.Binary",
          "name": "fn_list",
          "normalized": "((Integer,Integer)-\u003e(Word,Word,Word))-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]",
          "package": "AC-PPM",
          "signature": "((Integer,Integer)-\u003e(Word,Word,Word))-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Binary.html#v:fn_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function: Generate PPM data and write it to the\n  specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e. The handle is not closed or flushed afterwards.\n  This allows writing PPM data to network streams, etc. This function\n  does not return until all the data has been completely written.\n  (It may of course throw some kind of I/O exception instead.)\n\u003c/p\u003e",
          "module": "Codec.PPM.Binary",
          "name": "putPPM",
          "package": "AC-PPM",
          "signature": "Handle -\u003e (Integer, Integer) -\u003e [(Word8, Word8, Word8)] -\u003e IO ()",
          "source": "src/Codec-PPM-Binary.html#putPPM",
          "type": "function"
        },
        "index": {
          "description": "Convenience function Generate PPM data and write it to the specified Handle The handle is not closed or flushed afterwards This allows writing PPM data to network streams etc This function does not return until all the data has been completely written It may of course throw some kind of exception instead",
          "hierarchy": "Codec PPM Binary",
          "module": "Codec.PPM.Binary",
          "name": "putPPM",
          "normalized": "Handle-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eIO()",
          "package": "AC-PPM",
          "partial": "PPM",
          "signature": "Handle-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Binary.html#v:putPPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the image size (X pixels, Y pixels) and a list of\n  pixel values (red, green, blue), produce a lazy ByteString\n  containing the PPM data.\n\u003c/p\u003e",
          "module": "Codec.PPM.Binary",
          "name": "stringPPM",
          "package": "AC-PPM",
          "signature": "(Integer, Integer) -\u003e [(Word8, Word8, Word8)] -\u003e ByteString",
          "source": "src/Codec-PPM-Binary.html#stringPPM",
          "type": "function"
        },
        "index": {
          "description": "Given the image size pixels pixels and list of pixel values red green blue produce lazy ByteString containing the PPM data",
          "hierarchy": "Codec PPM Binary",
          "module": "Codec.PPM.Binary",
          "name": "stringPPM",
          "normalized": "(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eByteString",
          "package": "AC-PPM",
          "partial": "PPM",
          "signature": "(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Binary.html#v:stringPPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function: Write PPM data directly to a file. If the file\n  does not exist, it is created. If it exists, it is overwritten.\n  This function does not return until the file has been completely\n  created. (It may of course throw some kind of I/O exception instead.)\n\u003c/p\u003e",
          "module": "Codec.PPM.Binary",
          "name": "writePPM",
          "package": "AC-PPM",
          "signature": "FilePath -\u003e (Integer, Integer) -\u003e [(Word8, Word8, Word8)] -\u003e IO ()",
          "source": "src/Codec-PPM-Binary.html#writePPM",
          "type": "function"
        },
        "index": {
          "description": "Convenience function Write PPM data directly to file If the file does not exist it is created If it exists it is overwritten This function does not return until the file has been completely created It may of course throw some kind of exception instead",
          "hierarchy": "Codec PPM Binary",
          "module": "Codec.PPM.Binary",
          "name": "writePPM",
          "normalized": "FilePath-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eIO()",
          "package": "AC-PPM",
          "partial": "PPM",
          "signature": "FilePath-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Binary.html#v:writePPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerate textual PPM files (\"P3\"). These are much larger\n  than binary files and slower to generate, but have the\n  advantage of being \u003cem\u003evaguely\u003c/em\u003e human-readable. (Apart from\n  the file header, each line is three decimal numbers\n  representing the RGB values of a single pixel.) Such files\n  will also survive transfer in \"text mode\" without\n  being mutilated, unlike binary image files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.PPM.Text",
          "name": "Text",
          "package": "AC-PPM",
          "source": "src/Codec-PPM-Text.html",
          "type": "module"
        },
        "index": {
          "description": "Generate textual PPM files P3 These are much larger than binary files and slower to generate but have the advantage of being vaguely human-readable Apart from the file header each line is three decimal numbers representing the RGB values of single pixel Such files will also survive transfer in text mode without being mutilated unlike binary image files",
          "hierarchy": "Codec PPM Text",
          "module": "Codec.PPM.Text",
          "name": "Text",
          "package": "AC-PPM",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function: Given a function from pixel coordinates to pixel\n  colour, produce a list of pixel data ready to feed to one of the\n  other PPM functions.\n\u003c/p\u003e",
          "module": "Codec.PPM.Text",
          "name": "fn_list",
          "package": "AC-PPM",
          "signature": "((Integer, Integer) -\u003e (Word8, Word8, Word8)) -\u003e (Integer, Integer) -\u003e [(Word8, Word8, Word8)]",
          "source": "src/Codec-PPM-Text.html#fn_list",
          "type": "function"
        },
        "index": {
          "description": "Helper function Given function from pixel coordinates to pixel colour produce list of pixel data ready to feed to one of the other PPM functions",
          "hierarchy": "Codec PPM Text",
          "module": "Codec.PPM.Text",
          "name": "fn_list",
          "normalized": "((Integer,Integer)-\u003e(Word,Word,Word))-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]",
          "package": "AC-PPM",
          "signature": "((Integer,Integer)-\u003e(Word,Word,Word))-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Text.html#v:fn_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function: Generate PPM data and write it to the\n  specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e. The handle is not closed or flushed afterwards.\n  This allows writing PPM data to network streams, etc. This function\n  does not return until all the data has been completely written.\n  (It may of course throw some kind of I/O exception instead.)\n\u003c/p\u003e",
          "module": "Codec.PPM.Text",
          "name": "putPPM",
          "package": "AC-PPM",
          "signature": "Handle -\u003e (Integer, Integer) -\u003e [(Word8, Word8, Word8)] -\u003e IO ()",
          "source": "src/Codec-PPM-Text.html#putPPM",
          "type": "function"
        },
        "index": {
          "description": "Convenience function Generate PPM data and write it to the specified Handle The handle is not closed or flushed afterwards This allows writing PPM data to network streams etc This function does not return until all the data has been completely written It may of course throw some kind of exception instead",
          "hierarchy": "Codec PPM Text",
          "module": "Codec.PPM.Text",
          "name": "putPPM",
          "normalized": "Handle-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eIO()",
          "package": "AC-PPM",
          "partial": "PPM",
          "signature": "Handle-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Text.html#v:putPPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the image size (X pixels, Y pixels) and a list of\n  pixel values (red, green, blue), produce a lazy ByteString\n  containing the PPM data.\n\u003c/p\u003e",
          "module": "Codec.PPM.Text",
          "name": "stringPPM",
          "package": "AC-PPM",
          "signature": "(Integer, Integer) -\u003e [(Word8, Word8, Word8)] -\u003e ByteString",
          "source": "src/Codec-PPM-Text.html#stringPPM",
          "type": "function"
        },
        "index": {
          "description": "Given the image size pixels pixels and list of pixel values red green blue produce lazy ByteString containing the PPM data",
          "hierarchy": "Codec PPM Text",
          "module": "Codec.PPM.Text",
          "name": "stringPPM",
          "normalized": "(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eByteString",
          "package": "AC-PPM",
          "partial": "PPM",
          "signature": "(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Text.html#v:stringPPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function: Write PPM data directly to a file. If the file\n  does not exist, it is created. If it exists, it is overwritten.\n  This function does not return until the file has been completely\n  created. (It may of course throw some kind of I/O exception instead.)\n\u003c/p\u003e",
          "module": "Codec.PPM.Text",
          "name": "writePPM",
          "package": "AC-PPM",
          "signature": "FilePath -\u003e (Integer, Integer) -\u003e [(Word8, Word8, Word8)] -\u003e IO ()",
          "source": "src/Codec-PPM-Text.html#writePPM",
          "type": "function"
        },
        "index": {
          "description": "Convenience function Write PPM data directly to file If the file does not exist it is created If it exists it is overwritten This function does not return until the file has been completely created It may of course throw some kind of exception instead",
          "hierarchy": "Codec PPM Text",
          "module": "Codec.PPM.Text",
          "name": "writePPM",
          "normalized": "FilePath-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eIO()",
          "package": "AC-PPM",
          "partial": "PPM",
          "signature": "FilePath-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Text.html#v:writePPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe two modules \u003ca\u003eCodec.PPM.Text\u003c/a\u003e and \u003ca\u003eCodec.PPM.Binary\u003c/a\u003e support\n  the generation of text or binary PPM files (\"P3\" or \"P6\"\n  respectively). Default is binary (since it is more efficient.)\n  Both modules have an identical API; just change the import\n  declaration to change file mode.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.PPM",
          "name": "PPM",
          "package": "AC-PPM",
          "source": "src/Codec-PPM.html",
          "type": "module"
        },
        "index": {
          "description": "The two modules Codec.PPM.Text and Codec.PPM.Binary support the generation of text or binary PPM files P3 or P6 respectively Default is binary since it is more efficient Both modules have an identical API just change the import declaration to change file mode",
          "hierarchy": "Codec PPM",
          "module": "Codec.PPM",
          "name": "PPM",
          "package": "AC-PPM",
          "partial": "PPM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM.html#"
      }
    }
  ]
]