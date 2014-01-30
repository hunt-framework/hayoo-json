[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Annotate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Combining low-level features (VAMP plug-ins) with high-level\n knowledge (the HarmTrace harmony model)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HarmTrace.Audio.Annotate",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Audio-Annotate.html",
        "fct-type": "module",
        "title": "Annotate"
      },
      "index": {
        "description": "Summary Combining low-level features VAMP plug-ins with high-level knowledge the HarmTrace harmony model",
        "hierarchy": "HarmTrace Audio Annotate",
        "module": "HarmTrace.Audio.Annotate",
        "name": "Annotate",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Annotate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Annotate.html#v:groupAnnotator",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an annotation out of a Chord candidate list by just picking the \n first chord. This annotator does smart grouping \n (see \u003ccode\u003e\u003ca\u003emergeByBeat\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Annotate",
        "fct-package": "HarmTrace",
        "fct-signature": "GrammarEx -\u003e Maybe [TimedData Key] -\u003e AudioFeat -\u003e ChordAnnotation",
        "fct-source": "src/HarmTrace-Audio-Annotate.html#groupAnnotator",
        "fct-type": "function",
        "title": "groupAnnotator"
      },
      "index": {
        "description": "Creates an annotation out of Chord candidate list by just picking the first chord This annotator does smart grouping see mergeByBeat",
        "hierarchy": "HarmTrace Audio Annotate",
        "module": "HarmTrace.Audio.Annotate",
        "name": "groupAnnotator",
        "normalized": "GrammarEx-\u003eMaybe[TimedData Key]-\u003eAudioFeat-\u003eChordAnnotation",
        "package": "HarmTrace",
        "partial": "Annotator",
        "signature": "GrammarEx-\u003eMaybe[TimedData Key]-\u003eAudioFeat-\u003eChordAnnotation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Annotate.html#v:mptreeAnnotator",
      "description": {
        "fct-descr": "\u003cp\u003eMPTrEE (Model Propelled Transcription of Euphonic Enitities): \n a sophisticated, harmony and beat informed chord annotator\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Annotate",
        "fct-package": "HarmTrace",
        "fct-signature": "GrammarEx -\u003e Maybe [TimedData Key] -\u003e AudioFeat -\u003e ChordAnnotation",
        "fct-source": "src/HarmTrace-Audio-Annotate.html#mptreeAnnotator",
        "fct-type": "function",
        "title": "mptreeAnnotator"
      },
      "index": {
        "description": "MPTrEE Model Propelled Transcription of Euphonic Enitities sophisticated harmony and beat informed chord annotator",
        "hierarchy": "HarmTrace Audio Annotate",
        "module": "HarmTrace.Audio.Annotate",
        "name": "mptreeAnnotator",
        "normalized": "GrammarEx-\u003eMaybe[TimedData Key]-\u003eAudioFeat-\u003eChordAnnotation",
        "package": "HarmTrace",
        "partial": "Annotator",
        "signature": "GrammarEx-\u003eMaybe[TimedData Key]-\u003eAudioFeat-\u003eChordAnnotation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Annotate.html#v:mptreeAnnotatorSTG",
      "description": {
        "fct-module": "HarmTrace.Audio.Annotate",
        "fct-package": "HarmTrace",
        "fct-signature": "GrammarEx -\u003e Maybe [TimedData Key] -\u003e AudioFeat -\u003e ChordAnnotation",
        "fct-source": "src/HarmTrace-Audio-Annotate.html#mptreeAnnotatorSTG",
        "fct-type": "function",
        "title": "mptreeAnnotatorSTG"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Audio Annotate",
        "module": "HarmTrace.Audio.Annotate",
        "name": "mptreeAnnotatorSTG",
        "normalized": "GrammarEx-\u003eMaybe[TimedData Key]-\u003eAudioFeat-\u003eChordAnnotation",
        "package": "HarmTrace",
        "partial": "Annotator STG",
        "signature": "GrammarEx-\u003eMaybe[TimedData Key]-\u003eAudioFeat-\u003eChordAnnotation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Annotate.html#v:preProcessData",
      "description": {
        "fct-descr": "\u003cp\u003epreprocesses the raw audio data before using chord harmony model based\n chord selection. First, the beats and chroma are synchronised. Second, \n chord candidate lists are created. Third, smart, beat informed grouping of \n the chord candidates is performed. Fourth, the chord candidate lists are \n grouped in segments based on the key (obtained\n as provided by the user or as derived from the audio data). Last, the \n chord candidate lists are further segmented based on the occurrences of \n I and V chords.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Annotate",
        "fct-package": "HarmTrace",
        "fct-signature": "Maybe [TimedData Key] -\u003e AudioFeat -\u003e [ProbChordSeg]",
        "fct-source": "src/HarmTrace-Audio-Annotate.html#preProcessData",
        "fct-type": "function",
        "title": "preProcessData"
      },
      "index": {
        "description": "preprocesses the raw audio data before using chord harmony model based chord selection First the beats and chroma are synchronised Second chord candidate lists are created Third smart beat informed grouping of the chord candidates is performed Fourth the chord candidate lists are grouped in segments based on the key obtained as provided by the user or as derived from the audio data Last the chord candidate lists are further segmented based on the occurrences of and chords",
        "hierarchy": "HarmTrace Audio Annotate",
        "module": "HarmTrace.Audio.Annotate",
        "name": "preProcessData",
        "normalized": "Maybe[TimedData Key]-\u003eAudioFeat-\u003e[ProbChordSeg]",
        "package": "HarmTrace",
        "partial": "Process Data",
        "signature": "Maybe[TimedData Key]-\u003eAudioFeat-\u003e[ProbChordSeg]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Annotate.html#v:putSegStats",
      "description": {
        "fct-descr": "\u003cp\u003eprints Segmetation statistics\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Annotate",
        "fct-package": "HarmTrace",
        "fct-signature": "Maybe [TimedData Key] -\u003e AudioFeat -\u003e IO ()",
        "fct-source": "src/HarmTrace-Audio-Annotate.html#putSegStats",
        "fct-type": "function",
        "title": "putSegStats"
      },
      "index": {
        "description": "prints Segmetation statistics",
        "hierarchy": "HarmTrace Audio Annotate",
        "module": "HarmTrace.Audio.Annotate",
        "name": "putSegStats",
        "normalized": "Maybe[TimedData Key]-\u003eAudioFeat-\u003eIO()",
        "package": "HarmTrace",
        "partial": "Seg Stats",
        "signature": "Maybe[TimedData Key]-\u003eAudioFeat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Annotate.html#v:simpleAnnotator",
      "description": {
        "fct-descr": "\u003cp\u003eThe most simple annotator, no grouping, no matching, \n just pick the best matching chord\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Annotate",
        "fct-package": "HarmTrace",
        "fct-signature": "GrammarEx -\u003e Maybe [TimedData Key] -\u003e AudioFeat -\u003e ChordAnnotation",
        "fct-source": "src/HarmTrace-Audio-Annotate.html#simpleAnnotator",
        "fct-type": "function",
        "title": "simpleAnnotator"
      },
      "index": {
        "description": "The most simple annotator no grouping no matching just pick the best matching chord",
        "hierarchy": "HarmTrace Audio Annotate",
        "module": "HarmTrace.Audio.Annotate",
        "name": "simpleAnnotator",
        "normalized": "GrammarEx-\u003eMaybe[TimedData Key]-\u003eAudioFeat-\u003eChordAnnotation",
        "package": "HarmTrace",
        "partial": "Annotator",
        "signature": "GrammarEx-\u003eMaybe[TimedData Key]-\u003eAudioFeat-\u003eChordAnnotation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-AnnotationParser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Parses textual ground-truth Chord annotations, such as the ones\n found at: \u003ca\u003ehttp://isophonics.net/content/reference-annotations\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HarmTrace.Audio.AnnotationParser",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Audio-AnnotationParser.html",
        "fct-type": "module",
        "title": "AnnotationParser"
      },
      "index": {
        "description": "Summary Parses textual ground-truth Chord annotations such as the ones found at http isophonics.net content reference-annotations",
        "hierarchy": "HarmTrace Audio AnnotationParser",
        "module": "HarmTrace.Audio.AnnotationParser",
        "name": "AnnotationParser",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Annotation Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-AnnotationParser.html#v:parseAnnotationData",
      "description": {
        "fct-descr": "\u003cp\u003eParses a chord annotation.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.AnnotationParser",
        "fct-package": "HarmTrace",
        "fct-signature": "Parser [TimedData ChordLabel]",
        "fct-source": "src/HarmTrace-Audio-AnnotationParser.html#parseAnnotationData",
        "fct-type": "function",
        "title": "parseAnnotationData"
      },
      "index": {
        "description": "Parses chord annotation",
        "hierarchy": "HarmTrace Audio AnnotationParser",
        "module": "HarmTrace.Audio.AnnotationParser",
        "name": "parseAnnotationData",
        "normalized": "Parser[TimedData ChordLabel]",
        "package": "HarmTrace",
        "partial": "Annotation Data",
        "signature": "Parser[TimedData ChordLabel]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-AnnotationParser.html#v:parseKeyAnnotationData",
      "description": {
        "fct-descr": "\u003cp\u003eParses a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e annotation.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.AnnotationParser",
        "fct-package": "HarmTrace",
        "fct-signature": "Parser [TimedData Key]",
        "fct-source": "src/HarmTrace-Audio-AnnotationParser.html#parseKeyAnnotationData",
        "fct-type": "function",
        "title": "parseKeyAnnotationData"
      },
      "index": {
        "description": "Parses Key annotation",
        "hierarchy": "HarmTrace Audio AnnotationParser",
        "module": "HarmTrace.Audio.AnnotationParser",
        "name": "parseKeyAnnotationData",
        "normalized": "Parser[TimedData Key]",
        "package": "HarmTrace",
        "partial": "Key Annotation Data",
        "signature": "Parser[TimedData Key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-ChromaChord.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Recognise audio chroma vectors into textual chord descriptions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HarmTrace.Audio.ChromaChord",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Audio-ChromaChord.html",
        "fct-type": "module",
        "title": "ChromaChord"
      },
      "index": {
        "description": "Summary Recognise audio chroma vectors into textual chord descriptions",
        "hierarchy": "HarmTrace Audio ChromaChord",
        "module": "HarmTrace.Audio.ChromaChord",
        "name": "ChromaChord",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Chroma Chord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-ChromaChord.html#v:beatSync",
      "description": {
        "fct-descr": "\u003cp\u003eSynchronises the \u003ccode\u003e\u003ca\u003eChordinoData\u003c/a\u003e\u003c/code\u003e with the list of beats \n by grouping the \u003ccode\u003eChordinoLines\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eChordinoData\u003c/a\u003e\u003c/code\u003e in separate lists.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.ChromaChord",
        "fct-package": "HarmTrace",
        "fct-signature": "BarTimeTrackData -\u003e [ChordinoLine] -\u003e [BeatChroma]",
        "fct-source": "src/HarmTrace-Audio-ChromaChord.html#beatSync",
        "fct-type": "function",
        "title": "beatSync"
      },
      "index": {
        "description": "Synchronises the ChordinoData with the list of beats by grouping the ChordinoLines of the ChordinoData in separate lists",
        "hierarchy": "HarmTrace Audio ChromaChord",
        "module": "HarmTrace.Audio.ChromaChord",
        "name": "beatSync",
        "normalized": "BarTimeTrackData-\u003e[ChordinoLine]-\u003e[BeatChroma]",
        "package": "HarmTrace",
        "partial": "Sync",
        "signature": "BarTimeTrackData-\u003e[ChordinoLine]-\u003e[BeatChroma]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-ChromaChord.html#v:createChordRanks",
      "description": {
        "fct-descr": "\u003cp\u003eHaving a matrix of beat-synchronised bass and treble chromagrams and a \n chord dictionary, the probability of a chord sounding at a particular beat is\n estimated by calculating the Euclidean distance between the chord structures \n and the chroma feature. These distances are calculated for every chord \n candidate at every beat. Next, we sort the chord candidates by descending \n Euclidean distance. To obtain a relative measure of the fit \n between a chord candidate and the chroma vector in the range [0,1],\n the distances are normalised by dividing them by distance of the best \n matching chord candidate. \n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.ChromaChord",
        "fct-package": "HarmTrace",
        "fct-signature": "[BeatChroma] -\u003e [TimedData [ProbChord]]",
        "fct-source": "src/HarmTrace-Audio-ChromaChord.html#createChordRanks",
        "fct-type": "function",
        "title": "createChordRanks"
      },
      "index": {
        "description": "Having matrix of beat-synchronised bass and treble chromagrams and chord dictionary the probability of chord sounding at particular beat is estimated by calculating the Euclidean distance between the chord structures and the chroma feature These distances are calculated for every chord candidate at every beat Next we sort the chord candidates by descending Euclidean distance To obtain relative measure of the fit between chord candidate and the chroma vector in the range the distances are normalised by dividing them by distance of the best matching chord candidate",
        "hierarchy": "HarmTrace Audio ChromaChord",
        "module": "HarmTrace.Audio.ChromaChord",
        "name": "createChordRanks",
        "normalized": "[BeatChroma]-\u003e[TimedData[ProbChord]]",
        "package": "HarmTrace",
        "partial": "Chord Ranks",
        "signature": "[BeatChroma]-\u003e[TimedData[ProbChord]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-ChromaChord.html#v:meanBeatSyncVectors",
      "description": {
        "fct-module": "HarmTrace.Audio.ChromaChord",
        "fct-package": "HarmTrace",
        "fct-signature": "[BeatChroma] -\u003e [TimedData (Vector NumData)]",
        "fct-source": "src/HarmTrace-Audio-ChromaChord.html#meanBeatSyncVectors",
        "fct-type": "function",
        "title": "meanBeatSyncVectors"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Audio ChromaChord",
        "module": "HarmTrace.Audio.ChromaChord",
        "name": "meanBeatSyncVectors",
        "normalized": "[BeatChroma]-\u003e[TimedData(Vector NumData)]",
        "package": "HarmTrace",
        "partial": "Beat Sync Vectors",
        "signature": "[BeatChroma]-\u003e[TimedData(Vector NumData)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-ChromaChord.html#v:mergeByOneAndThree",
      "description": {
        "fct-descr": "\u003cp\u003eMerges chord segments, adding a bias toward merging at the first\n and the third \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.ChromaChord",
        "fct-package": "HarmTrace",
        "fct-signature": "[TimedData [ProbChord]] -\u003e [TimedData [ProbChord]]",
        "fct-source": "src/HarmTrace-Audio-ChromaChord.html#mergeByOneAndThree",
        "fct-type": "function",
        "title": "mergeByOneAndThree"
      },
      "index": {
        "description": "Merges chord segments adding bias toward merging at the first and the third Beat",
        "hierarchy": "HarmTrace Audio ChromaChord",
        "module": "HarmTrace.Audio.ChromaChord",
        "name": "mergeByOneAndThree",
        "normalized": "[TimedData[ProbChord]]-\u003e[TimedData[ProbChord]]",
        "package": "HarmTrace",
        "partial": "By One And Three",
        "signature": "[TimedData[ProbChord]]-\u003e[TimedData[ProbChord]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-ChromaKey.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Low-processing of chroma features for key-finding\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HarmTrace.Audio.ChromaKey",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Audio-ChromaKey.html",
        "fct-type": "module",
        "title": "ChromaKey"
      },
      "index": {
        "description": "Summary Low-processing of chroma features for key-finding",
        "hierarchy": "HarmTrace Audio ChromaKey",
        "module": "HarmTrace.Audio.ChromaKey",
        "name": "ChromaKey",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Chroma Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-ChromaKey.html#v:beatSyncKeyStrength",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the beat synchronised key strenght for all \n 24 keys (ordered by \u003ccode\u003eKeyMap\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.ChromaKey",
        "fct-package": "HarmTrace",
        "fct-signature": "BarTimeTrackData -\u003e ChordinoData -\u003e [TimedData [NumData]]",
        "fct-source": "src/HarmTrace-Audio-ChromaKey.html#beatSyncKeyStrength",
        "fct-type": "function",
        "title": "beatSyncKeyStrength"
      },
      "index": {
        "description": "Calculates the beat synchronised key strenght for all keys ordered by KeyMap",
        "hierarchy": "HarmTrace Audio ChromaKey",
        "module": "HarmTrace.Audio.ChromaKey",
        "name": "beatSyncKeyStrength",
        "normalized": "BarTimeTrackData-\u003eChordinoData-\u003e[TimedData[NumData]]",
        "package": "HarmTrace",
        "partial": "Sync Key Strength",
        "signature": "BarTimeTrackData-\u003eChordinoData-\u003e[TimedData[NumData]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-ChromaKey.html#v:keyMap",
      "description": {
        "fct-descr": "\u003cp\u003eA key chroma map using a circle of fifths based ordering.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.ChromaKey",
        "fct-package": "HarmTrace",
        "fct-signature": "[Key]",
        "fct-source": "src/HarmTrace-Audio-ChromaKey.html#keyMap",
        "fct-type": "function",
        "title": "keyMap"
      },
      "index": {
        "description": "key chroma map using circle of fifths based ordering",
        "hierarchy": "HarmTrace Audio ChromaKey",
        "module": "HarmTrace.Audio.ChromaKey",
        "name": "keyMap",
        "normalized": "[Key]",
        "package": "HarmTrace",
        "partial": "Map",
        "signature": "[Key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Basic parsers for parsing VAMP csv files.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HarmTrace.Audio.DataParser",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Audio-DataParser.html",
        "fct-type": "module",
        "title": "DataParser"
      },
      "index": {
        "description": "Summary Basic parsers for parsing VAMP csv files",
        "hierarchy": "HarmTrace Audio DataParser",
        "module": "HarmTrace.Audio.DataParser",
        "name": "DataParser",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Data Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:pBeat",
      "description": {
        "fct-descr": "\u003cp\u003eParses a \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.DataParser",
        "fct-package": "HarmTrace",
        "fct-signature": "Parser Beat",
        "fct-source": "src/HarmTrace-Audio-DataParser.html#pBeat",
        "fct-type": "function",
        "title": "pBeat"
      },
      "index": {
        "description": "Parses Beat",
        "hierarchy": "HarmTrace Audio DataParser",
        "module": "HarmTrace.Audio.DataParser",
        "name": "pBeat",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Beat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:pComma",
      "description": {
        "fct-module": "HarmTrace.Audio.DataParser",
        "fct-package": "HarmTrace",
        "fct-signature": "Parser Char",
        "fct-source": "src/HarmTrace-Audio-DataParser.html#pComma",
        "fct-type": "function",
        "title": "pComma"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Audio DataParser",
        "module": "HarmTrace.Audio.DataParser",
        "name": "pComma",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Comma",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:pLabel",
      "description": {
        "fct-module": "HarmTrace.Audio.DataParser",
        "fct-package": "HarmTrace",
        "fct-signature": "Parser String",
        "fct-source": "src/HarmTrace-Audio-DataParser.html#pLabel",
        "fct-type": "function",
        "title": "pLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Audio DataParser",
        "module": "HarmTrace.Audio.DataParser",
        "name": "pLabel",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:pNumData",
      "description": {
        "fct-module": "HarmTrace.Audio.DataParser",
        "fct-package": "HarmTrace",
        "fct-signature": "Parser NumData",
        "fct-source": "src/HarmTrace-Audio-DataParser.html#pNumData",
        "fct-type": "function",
        "title": "pNumData"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Audio DataParser",
        "module": "HarmTrace.Audio.DataParser",
        "name": "pNumData",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Num Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:pParentheticalString",
      "description": {
        "fct-module": "HarmTrace.Audio.DataParser",
        "fct-package": "HarmTrace",
        "fct-signature": "Char -\u003e Parser String",
        "fct-source": "src/HarmTrace-Audio-DataParser.html#pParentheticalString",
        "fct-type": "function",
        "title": "pParentheticalString"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Audio DataParser",
        "module": "HarmTrace.Audio.DataParser",
        "name": "pParentheticalString",
        "normalized": "Char-\u003eParser String",
        "package": "HarmTrace",
        "partial": "Parenthetical String",
        "signature": "Char-\u003eParser String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:pQuotedString",
      "description": {
        "fct-module": "HarmTrace.Audio.DataParser",
        "fct-package": "HarmTrace",
        "fct-signature": "Parser String",
        "fct-source": "src/HarmTrace-Audio-DataParser.html#pQuotedString",
        "fct-type": "function",
        "title": "pQuotedString"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Audio DataParser",
        "module": "HarmTrace.Audio.DataParser",
        "name": "pQuotedString",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Quoted String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:parseBarTimeData",
      "description": {
        "fct-descr": "\u003cp\u003eParses \u003ccode\u003e\u003ca\u003eBarTime\u003c/a\u003e\u003c/code\u003e data.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.DataParser",
        "fct-package": "HarmTrace",
        "fct-signature": "Parser BarTimeTrackData",
        "fct-source": "src/HarmTrace-Audio-DataParser.html#parseBarTimeData",
        "fct-type": "function",
        "title": "parseBarTimeData"
      },
      "index": {
        "description": "Parses BarTime data",
        "hierarchy": "HarmTrace Audio DataParser",
        "module": "HarmTrace.Audio.DataParser",
        "name": "parseBarTimeData",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Bar Time Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:parseBeatData",
      "description": {
        "fct-descr": "\u003cp\u003eParsing beat time stamps.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.DataParser",
        "fct-package": "HarmTrace",
        "fct-signature": "Parser BeatTrackerData",
        "fct-source": "src/HarmTrace-Audio-DataParser.html#parseBeatData",
        "fct-type": "function",
        "title": "parseBeatData"
      },
      "index": {
        "description": "Parsing beat time stamps",
        "hierarchy": "HarmTrace Audio DataParser",
        "module": "HarmTrace.Audio.DataParser",
        "name": "parseBeatData",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Beat Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:parseChordinoData",
      "description": {
        "fct-descr": "\u003cp\u003eChroma parsing.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.DataParser",
        "fct-package": "HarmTrace",
        "fct-signature": "Parser ChordinoData",
        "fct-source": "src/HarmTrace-Audio-DataParser.html#parseChordinoData",
        "fct-type": "function",
        "title": "parseChordinoData"
      },
      "index": {
        "description": "Chroma parsing",
        "hierarchy": "HarmTrace Audio DataParser",
        "module": "HarmTrace.Audio.DataParser",
        "name": "parseChordinoData",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Chordino Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:parseChromaData",
      "description": {
        "fct-module": "HarmTrace.Audio.DataParser",
        "fct-package": "HarmTrace",
        "fct-signature": "Parser [ChordinoLine]",
        "fct-source": "src/HarmTrace-Audio-DataParser.html#parseChromaData",
        "fct-type": "function",
        "title": "parseChromaData"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Audio DataParser",
        "module": "HarmTrace.Audio.DataParser",
        "name": "parseChromaData",
        "normalized": "Parser[ChordinoLine]",
        "package": "HarmTrace",
        "partial": "Chroma Data",
        "signature": "Parser[ChordinoLine]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:shift",
      "description": {
        "fct-module": "HarmTrace.Audio.DataParser",
        "fct-package": "HarmTrace",
        "fct-signature": "Int -\u003e [a] -\u003e [a]",
        "fct-source": "src/HarmTrace-Audio-DataParser.html#shift",
        "fct-type": "function",
        "title": "shift"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Audio DataParser",
        "module": "HarmTrace.Audio.DataParser",
        "name": "shift",
        "normalized": "Int-\u003e[a]-\u003e[a]",
        "package": "HarmTrace",
        "partial": "",
        "signature": "Int-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: A module for evaluating chord and key annotations\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HarmTrace.Audio.Evaluation",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Audio-Evaluation.html",
        "fct-type": "module",
        "title": "Evaluation"
      },
      "index": {
        "description": "Summary module for evaluating chord and key annotations",
        "hierarchy": "HarmTrace Audio Evaluation",
        "module": "HarmTrace.Audio.Evaluation",
        "name": "Evaluation",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Evaluation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:achievScore",
      "description": {
        "fct-descr": "\u003cp\u003ecalculates the maximal achievable score given a ground truth annotation\n and a chord candidate list.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Evaluation",
        "fct-package": "HarmTrace",
        "fct-signature": "[TimedData ChordLabel] -\u003e [TimedData [ChordLabel]] -\u003e Double",
        "fct-source": "src/HarmTrace-Audio-Evaluation.html#achievScore",
        "fct-type": "function",
        "title": "achievScore"
      },
      "index": {
        "description": "calculates the maximal achievable score given ground truth annotation and chord candidate list",
        "hierarchy": "HarmTrace Audio Evaluation",
        "module": "HarmTrace.Audio.Evaluation",
        "name": "achievScore",
        "normalized": "[TimedData ChordLabel]-\u003e[TimedData[ChordLabel]]-\u003eDouble",
        "package": "HarmTrace",
        "partial": "Score",
        "signature": "[TimedData ChordLabel]-\u003e[TimedData[ChordLabel]]-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:avgDistToOne",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003echordChangeRatio\u003c/a\u003e\u003c/code\u003e is optimal if it is one, but it can be larger or \n smaller than 1. Therefore, calculating the average blurs the actual result.\n \u003ccode\u003e\u003ca\u003eavgDistToOne\u003c/a\u003e\u003c/code\u003e takes the absolute difference to 1.0 and averages these for a\n list of Doubles.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Evaluation",
        "fct-package": "HarmTrace",
        "fct-signature": "[Double] -\u003e Double",
        "fct-source": "src/HarmTrace-Audio-Evaluation.html#avgDistToOne",
        "fct-type": "function",
        "title": "avgDistToOne"
      },
      "index": {
        "description": "The chordChangeRatio is optimal if it is one but it can be larger or smaller than Therefore calculating the average blurs the actual result avgDistToOne takes the absolute difference to and averages these for list of Doubles",
        "hierarchy": "HarmTrace Audio Evaluation",
        "module": "HarmTrace.Audio.Evaluation",
        "name": "avgDistToOne",
        "normalized": "[Double]-\u003eDouble",
        "package": "HarmTrace",
        "partial": "Dist To One",
        "signature": "[Double]-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:chordChangeRatio",
      "description": {
        "fct-module": "HarmTrace.Audio.Evaluation",
        "fct-package": "HarmTrace",
        "fct-signature": "(ChordLabel -\u003e ChordLabel -\u003e Bool) -\u003e [TimedData ChordLabel] -\u003e [TimedData ChordLabel] -\u003e Double",
        "fct-source": "src/HarmTrace-Audio-Evaluation.html#chordChangeRatio",
        "fct-type": "function",
        "title": "chordChangeRatio"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Audio Evaluation",
        "module": "HarmTrace.Audio.Evaluation",
        "name": "chordChangeRatio",
        "normalized": "(ChordLabel-\u003eChordLabel-\u003eBool)-\u003e[TimedData ChordLabel]-\u003e[TimedData ChordLabel]-\u003eDouble",
        "package": "HarmTrace",
        "partial": "Change Ratio",
        "signature": "(ChordLabel-\u003eChordLabel-\u003eBool)-\u003e[TimedData ChordLabel]-\u003e[TimedData ChordLabel]-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:chordClassEq",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if both \u003ccode\u003e\u003ca\u003eChordLabel\u003c/a\u003e\u003c/code\u003es are equal at the chord class level: \n A chord is classified as being major, minor, dominant seventh, or dimished\n seventh. \u003ccode\u003e\u003ca\u003echordClassEq\u003c/a\u003e\u003c/code\u003e only returns True if the class of compared chords\n is the same. \u003ca\u003eNone Chords\u003c/a\u003e match only with other None Chords and \n with nothing else\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Evaluation",
        "fct-package": "HarmTrace",
        "fct-signature": "ChordLabel -\u003e ChordLabel -\u003e Bool",
        "fct-source": "src/HarmTrace-Audio-Evaluation.html#chordClassEq",
        "fct-type": "function",
        "title": "chordClassEq"
      },
      "index": {
        "description": "Returns True if both ChordLabel are equal at the chord class level chord is classified as being major minor dominant seventh or dimished seventh chordClassEq only returns True if the class of compared chords is the same None Chords match only with other None Chords and with nothing else",
        "hierarchy": "HarmTrace Audio Evaluation",
        "module": "HarmTrace.Audio.Evaluation",
        "name": "chordClassEq",
        "normalized": "ChordLabel-\u003eChordLabel-\u003eBool",
        "package": "HarmTrace",
        "partial": "Class Eq",
        "signature": "ChordLabel-\u003eChordLabel-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:chordTriadEq",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if both \u003ccode\u003e\u003ca\u003eChordLabel\u003c/a\u003e\u003c/code\u003es are equal at the triad level: they are\n either moth major or both minor. \u003ca\u003eNone Chords\u003c/a\u003e match only with other \u003ca\u003eNone\n Chords\u003c/a\u003e and with nothing else\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Evaluation",
        "fct-package": "HarmTrace",
        "fct-signature": "ChordLabel -\u003e ChordLabel -\u003e Bool",
        "fct-source": "src/HarmTrace-Audio-Evaluation.html#chordTriadEq",
        "fct-type": "function",
        "title": "chordTriadEq"
      },
      "index": {
        "description": "Returns True if both ChordLabel are equal at the triad level they are either moth major or both minor None Chords match only with other None Chords and with nothing else",
        "hierarchy": "HarmTrace Audio Evaluation",
        "module": "HarmTrace.Audio.Evaluation",
        "name": "chordTriadEq",
        "normalized": "ChordLabel-\u003eChordLabel-\u003eBool",
        "package": "HarmTrace",
        "partial": "Triad Eq",
        "signature": "ChordLabel-\u003eChordLabel-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:majMinEq",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if the \u003ccode\u003e\u003ca\u003eRoot\u003c/a\u003e\u003c/code\u003es of the \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003es are equal, but the one chord\n is Major and the other chord is Minor.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Evaluation",
        "fct-package": "HarmTrace",
        "fct-signature": "ChordLabel -\u003e ChordLabel -\u003e Bool",
        "fct-source": "src/HarmTrace-Audio-Evaluation.html#majMinEq",
        "fct-type": "function",
        "title": "majMinEq"
      },
      "index": {
        "description": "Returns True if the Root of the Chord are equal but the one chord is Major and the other chord is Minor",
        "hierarchy": "HarmTrace Audio Evaluation",
        "module": "HarmTrace.Audio.Evaluation",
        "name": "majMinEq",
        "normalized": "ChordLabel-\u003eChordLabel-\u003eBool",
        "package": "HarmTrace",
        "partial": "Min Eq",
        "signature": "ChordLabel-\u003eChordLabel-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:printChordRCO",
      "description": {
        "fct-descr": "\u003cp\u003edoes the same thing as relCorrectOverlap, but it also prints the\n chords and uses a lower sample rate. N.B. the number output by \n \u003ccode\u003eprintRelCorrectOverlap\u003c/code\u003e might differ from the output of \n \u003ccode\u003e\u003ca\u003erelCorrectOverlap\u003c/a\u003e\u003c/code\u003e, because a different sample rate might be used (see\n \u003ccode\u003eConstants\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Evaluation",
        "fct-package": "HarmTrace",
        "fct-signature": "(AudioFeat -\u003e ChordAnnotation) -\u003e [TimedData Key] -\u003e AudioFeat -\u003e [TimedData ChordLabel] -\u003e IO Double",
        "fct-source": "src/HarmTrace-Audio-Evaluation.html#printChordRCO",
        "fct-type": "function",
        "title": "printChordRCO"
      },
      "index": {
        "description": "does the same thing as relCorrectOverlap but it also prints the chords and uses lower sample rate N.B the number output by printRelCorrectOverlap might differ from the output of relCorrectOverlap because different sample rate might be used see Constants",
        "hierarchy": "HarmTrace Audio Evaluation",
        "module": "HarmTrace.Audio.Evaluation",
        "name": "printChordRCO",
        "normalized": "(AudioFeat-\u003eChordAnnotation)-\u003e[TimedData Key]-\u003eAudioFeat-\u003e[TimedData ChordLabel]-\u003eIO Double",
        "package": "HarmTrace",
        "partial": "Chord RCO",
        "signature": "(AudioFeat-\u003eChordAnnotation)-\u003e[TimedData Key]-\u003eAudioFeat-\u003e[TimedData ChordLabel]-\u003eIO Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:printRCO",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the relative correct overlap, which is the recall\n of matching frames, and defined as the nr of matching frames (sampled at\n an interval set in \u003ccode\u003e\u003ca\u003eConstants\u003c/a\u003e\u003c/code\u003e divided by all frames.\n This functions difers from \u003ccode\u003e\u003ca\u003erelCorrectOverlap\u003c/a\u003e\u003c/code\u003e in that it uses an\n equality function that is in IO.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Evaluation",
        "fct-package": "HarmTrace",
        "fct-signature": "(a -\u003e a -\u003e IO Bool) -\u003e [TimedData a] -\u003e [TimedData a] -\u003e IO Double",
        "fct-source": "src/HarmTrace-Audio-Evaluation.html#printRCO",
        "fct-type": "function",
        "title": "printRCO"
      },
      "index": {
        "description": "Calculates the relative correct overlap which is the recall of matching frames and defined as the nr of matching frames sampled at an interval set in Constants divided by all frames This functions difers from relCorrectOverlap in that it uses an equality function that is in IO",
        "hierarchy": "HarmTrace Audio Evaluation",
        "module": "HarmTrace.Audio.Evaluation",
        "name": "printRCO",
        "normalized": "(a-\u003ea-\u003eIO Bool)-\u003e[TimedData a]-\u003e[TimedData a]-\u003eIO Double",
        "package": "HarmTrace",
        "partial": "RCO",
        "signature": "(a-\u003ea-\u003eIO Bool)-\u003e[TimedData a]-\u003e[TimedData a]-\u003eIO Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:relCorrectOverlap",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the relative correct overlap, which is the recall\n of matching frames, and defined as the nr of matching frames (sampled at\n an 10 milisecond interval) divided by all frames.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Evaluation",
        "fct-package": "HarmTrace",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e [TimedData a] -\u003e [TimedData a] -\u003e Double",
        "fct-source": "src/HarmTrace-Audio-Evaluation.html#relCorrectOverlap",
        "fct-type": "function",
        "title": "relCorrectOverlap"
      },
      "index": {
        "description": "Calculates the relative correct overlap which is the recall of matching frames and defined as the nr of matching frames sampled at an milisecond interval divided by all frames",
        "hierarchy": "HarmTrace Audio Evaluation",
        "module": "HarmTrace.Audio.Evaluation",
        "name": "relCorrectOverlap",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e[TimedData a]-\u003e[TimedData a]-\u003eDouble",
        "package": "HarmTrace",
        "partial": "Correct Overlap",
        "signature": "(a-\u003ea-\u003eBool)-\u003e[TimedData a]-\u003e[TimedData a]-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:sample",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a chord annotation sample the chord label at every 10 ms\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Evaluation",
        "fct-package": "HarmTrace",
        "fct-signature": "[TimedData a] -\u003e [a]",
        "fct-source": "src/HarmTrace-Audio-Evaluation.html#sample",
        "fct-type": "function",
        "title": "sample"
      },
      "index": {
        "description": "Given chord annotation sample the chord label at every ms",
        "hierarchy": "HarmTrace Audio Evaluation",
        "module": "HarmTrace.Audio.Evaluation",
        "name": "sample",
        "normalized": "[TimedData a]-\u003e[a]",
        "package": "HarmTrace",
        "partial": "",
        "signature": "[TimedData a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Key.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Key-finding from musical audio.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HarmTrace.Audio.Key",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Audio-Key.html",
        "fct-type": "module",
        "title": "Key"
      },
      "index": {
        "description": "Summary Key-finding from musical audio",
        "hierarchy": "HarmTrace Audio Key",
        "module": "HarmTrace.Audio.Key",
        "name": "Key",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Key.html#v:getBeatSyncKeyFromChroma",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e key assignment, given \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e and chroma information.\n N.B. The beats and chroma do not have to be synchronised, they will be\n sychronised in the process of finding the key \n (see \u003ccode\u003e\u003ca\u003eChromaKey\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eBeatSync\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Key",
        "fct-package": "HarmTrace",
        "fct-signature": "AudioFeat -\u003e [TimedData Key]",
        "fct-source": "src/HarmTrace-Audio-Key.html#getBeatSyncKeyFromChroma",
        "fct-type": "function",
        "title": "getBeatSyncKeyFromChroma"
      },
      "index": {
        "description": "Returns Key key assignment given Beat and chroma information N.B The beats and chroma do not have to be synchronised they will be sychronised in the process of finding the key see ChromaKey and BeatSync",
        "hierarchy": "HarmTrace Audio Key",
        "module": "HarmTrace.Audio.Key",
        "name": "getBeatSyncKeyFromChroma",
        "normalized": "AudioFeat-\u003e[TimedData Key]",
        "package": "HarmTrace",
        "partial": "Beat Sync Key From Chroma",
        "signature": "AudioFeat-\u003e[TimedData Key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Statistical.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Some statistical functions used in processing audio.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HarmTrace.Audio.Statistical",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Audio-Statistical.html",
        "fct-type": "module",
        "title": "Statistical"
      },
      "index": {
        "description": "Summary Some statistical functions used in processing audio",
        "hierarchy": "HarmTrace Audio Statistical",
        "module": "HarmTrace.Audio.Statistical",
        "name": "Statistical",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Statistical",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Statistical.html#v:getWindows",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list with all \u003ca\u003esliding windows\u003c/a\u003e of a particular size.\n The left and right edge of the list are filled with the first and last (size \n \u003cem\u003e2) items, respectively and the remainder is filled with the mode\u003c/em\u003emedian of\n the complete list.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Statistical",
        "fct-package": "HarmTrace",
        "fct-signature": "Int -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/HarmTrace-Audio-Statistical.html#getWindows",
        "fct-type": "function",
        "title": "getWindows"
      },
      "index": {
        "description": "Returns list with all sliding windows of particular size The left and right edge of the list are filled with the first and last size items respectively and the remainder is filled with the mode median of the complete list",
        "hierarchy": "HarmTrace Audio Statistical",
        "module": "HarmTrace.Audio.Statistical",
        "name": "getWindows",
        "normalized": "Int-\u003e[a]-\u003e[[a]]",
        "package": "HarmTrace",
        "partial": "Windows",
        "signature": "Int-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Statistical.html#v:groupMinSize",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to group, but in case a group is smaller than s, \n the group is filled with the same number of a's:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egroupMinSize 3 0 [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]\n\u003c/code\u003e\u003c/strong\u003e[[0],[0,0],[0,0,0],[4,4,4,4],[5,5,5,5,5]]\n\u003c/pre\u003e",
        "fct-module": "HarmTrace.Audio.Statistical",
        "fct-package": "HarmTrace",
        "fct-signature": "Int -\u003e a -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/HarmTrace-Audio-Statistical.html#groupMinSize",
        "fct-type": "function",
        "title": "groupMinSize"
      },
      "index": {
        "description": "Similar to group but in case group is smaller than the group is filled with the same number of groupMinSize",
        "hierarchy": "HarmTrace Audio Statistical",
        "module": "HarmTrace.Audio.Statistical",
        "name": "groupMinSize",
        "normalized": "Int-\u003ea-\u003e[a]-\u003e[[a]]",
        "package": "HarmTrace",
        "partial": "Min Size",
        "signature": "Int-\u003ea-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Statistical.html#v:hasSize",
      "description": {
        "fct-module": "HarmTrace.Audio.Statistical",
        "fct-package": "HarmTrace",
        "fct-signature": "Int -\u003e [a] -\u003e Bool",
        "fct-source": "src/HarmTrace-Audio-Statistical.html#hasSize",
        "fct-type": "function",
        "title": "hasSize"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Audio Statistical",
        "module": "HarmTrace.Audio.Statistical",
        "name": "hasSize",
        "normalized": "Int-\u003e[a]-\u003eBool",
        "package": "HarmTrace",
        "partial": "Size",
        "signature": "Int-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Statistical.html#v:listMean",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the mean of list.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Statistical",
        "fct-package": "HarmTrace",
        "fct-signature": "[NumData] -\u003e NumData",
        "fct-source": "src/HarmTrace-Audio-Statistical.html#listMean",
        "fct-type": "function",
        "title": "listMean"
      },
      "index": {
        "description": "Returns the mean of list",
        "hierarchy": "HarmTrace Audio Statistical",
        "module": "HarmTrace.Audio.Statistical",
        "name": "listMean",
        "normalized": "[NumData]-\u003eNumData",
        "package": "HarmTrace",
        "partial": "Mean",
        "signature": "[NumData]-\u003eNumData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Statistical.html#v:maxListIndex",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the index of th maximal element of a list.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Statistical",
        "fct-package": "HarmTrace",
        "fct-signature": "[a] -\u003e Int",
        "fct-source": "src/HarmTrace-Audio-Statistical.html#maxListIndex",
        "fct-type": "function",
        "title": "maxListIndex"
      },
      "index": {
        "description": "Returns the index of th maximal element of list",
        "hierarchy": "HarmTrace Audio Statistical",
        "module": "HarmTrace.Audio.Statistical",
        "name": "maxListIndex",
        "normalized": "[a]-\u003eInt",
        "package": "HarmTrace",
        "partial": "List Index",
        "signature": "[a]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Statistical.html#v:median",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the median of a list.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Statistical",
        "fct-package": "HarmTrace",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/HarmTrace-Audio-Statistical.html#median",
        "fct-type": "function",
        "title": "median"
      },
      "index": {
        "description": "Returns the median of list",
        "hierarchy": "HarmTrace Audio Statistical",
        "module": "HarmTrace.Audio.Statistical",
        "name": "median",
        "normalized": "[a]-\u003ea",
        "package": "HarmTrace",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Statistical.html#v:medianFilter",
      "description": {
        "fct-descr": "\u003cp\u003ea median filter: see \u003ca\u003ehttp://en.wikipedia.org/wiki/Median_filter\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Statistical",
        "fct-package": "HarmTrace",
        "fct-signature": "Int -\u003e [a] -\u003e [a]",
        "fct-source": "src/HarmTrace-Audio-Statistical.html#medianFilter",
        "fct-type": "function",
        "title": "medianFilter"
      },
      "index": {
        "description": "median filter see http en.wikipedia.org wiki Median filter",
        "hierarchy": "HarmTrace Audio Statistical",
        "module": "HarmTrace.Audio.Statistical",
        "name": "medianFilter",
        "normalized": "Int-\u003e[a]-\u003e[a]",
        "package": "HarmTrace",
        "partial": "Filter",
        "signature": "Int-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Statistical.html#v:mode",
      "description": {
        "fct-descr": "\u003cp\u003eThe mode: the element that occurs most often in the collection.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Audio.Statistical",
        "fct-package": "HarmTrace",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/HarmTrace-Audio-Statistical.html#mode",
        "fct-type": "function",
        "title": "mode"
      },
      "index": {
        "description": "The mode the element that occurs most often in the collection",
        "hierarchy": "HarmTrace Audio Statistical",
        "module": "HarmTrace.Audio.Statistical",
        "name": "mode",
        "normalized": "[a]-\u003ea",
        "package": "HarmTrace",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Base-Instances.html#",
      "description": {
        "fct-module": "HarmTrace.Base.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Base-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base Instances",
        "module": "HarmTrace.Base.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html",
        "fct-type": "module",
        "title": "HAn"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "HAn",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "HAn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#t:GetDur",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "class",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#GetDur",
        "fct-type": "class",
        "title": "GetDur"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "GetDur",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Get Dur",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#t:HAn",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#HAn",
        "fct-type": "data",
        "title": "HAn"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "HAn",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "HAn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#t:HFunc",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#HFunc",
        "fct-type": "data",
        "title": "HFunc"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "HFunc",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "HFunc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#t:Prep",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#Prep",
        "fct-type": "data",
        "title": "Prep"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "Prep",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Prep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#t:SetDur",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "class",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#SetDur",
        "fct-type": "class",
        "title": "SetDur"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "SetDur",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Set Dur",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#t:Spec",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#Spec",
        "fct-type": "data",
        "title": "Spec"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "Spec",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#t:Trans",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#Trans",
        "fct-type": "data",
        "title": "Trans"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "Trans",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:Blues",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "Blues",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#Spec",
        "fct-type": "function",
        "title": "Blues"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "Blues",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Blues",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:DiatDom",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "DiatDom !Int !ScaleDegree",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#Prep",
        "fct-type": "function",
        "title": "DiatDom"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "DiatDom",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Diat Dom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:DimTrans",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "DimTrans !Int !ScaleDegree",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#Trans",
        "fct-type": "function",
        "title": "DimTrans"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "DimTrans",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dim Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:DimTrit",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "DimTrit !Int !ScaleDegree",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#Trans",
        "fct-type": "function",
        "title": "DimTrit"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "DimTrit",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dim Trit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:Dom",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "Dom !Int !Mode !Int !(Maybe Spec)",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#HFunc",
        "fct-type": "function",
        "title": "Dom"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "Dom",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:HAn",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "HAn !Int !String",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#HAn",
        "fct-type": "function",
        "title": "HAn"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "HAn",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "HAn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:HAnChord",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "HAnChord !ChordToken",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#HAn",
        "fct-type": "function",
        "title": "HAnChord"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "HAnChord",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "HAn Chord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:HAnFunc",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "HAnFunc !HFunc",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#HAn",
        "fct-type": "function",
        "title": "HAnFunc"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "HAnFunc",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "HAn Func",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:HAnPrep",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "HAnPrep !Prep",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#HAn",
        "fct-type": "function",
        "title": "HAnPrep"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "HAnPrep",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "HAn Prep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:HAnTrans",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "HAnTrans !Trans",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#HAn",
        "fct-type": "function",
        "title": "HAnTrans"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "HAnTrans",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "HAn Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:MinBorrow",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "MinBorrow",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#Spec",
        "fct-type": "function",
        "title": "MinBorrow"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "MinBorrow",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Min Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:NoPrep",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "NoPrep",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#Prep",
        "fct-type": "function",
        "title": "NoPrep"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "NoPrep",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "No Prep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:NoTrans",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "NoTrans",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#Trans",
        "fct-type": "function",
        "title": "NoTrans"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "NoTrans",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "No Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:P",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "P",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#HFunc",
        "fct-type": "function",
        "title": "P"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "P",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:PD",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "PD",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#HFunc",
        "fct-type": "function",
        "title": "PD"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "PD",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "PD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:PT",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "PT",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#HFunc",
        "fct-type": "function",
        "title": "PT"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "PT",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "PT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:Parallel",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "Parallel",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#Spec",
        "fct-type": "function",
        "title": "Parallel"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "Parallel",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Parallel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:SecDom",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "SecDom !Int !ScaleDegree",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#Prep",
        "fct-type": "function",
        "title": "SecDom"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "SecDom",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Sec Dom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:SecMin",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "SecMin !Int !ScaleDegree",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#Prep",
        "fct-type": "function",
        "title": "SecMin"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "SecMin",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Sec Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:Sub",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "Sub !Int !Mode !Int !(Maybe Spec)",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#HFunc",
        "fct-type": "function",
        "title": "Sub"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "Sub",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:Ton",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "Ton !Int !Mode !Int !(Maybe Spec)",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#HFunc",
        "fct-type": "function",
        "title": "Ton"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "Ton",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:Trit",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "Trit !Int !ScaleDegree",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#Trans",
        "fct-type": "function",
        "title": "Trit"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "Trit",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Trit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:getDur",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#getDur",
        "fct-type": "method",
        "title": "getDur"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "getDur",
        "normalized": "a-\u003eInt",
        "package": "HarmTrace",
        "partial": "Dur",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:setDur",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAn",
        "fct-package": "HarmTrace",
        "fct-signature": "a -\u003e Int -\u003e a",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#setDur",
        "fct-type": "method",
        "title": "setDur"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAn",
        "module": "HarmTrace.HAnTree.HAn",
        "name": "setDur",
        "normalized": "a-\u003eInt-\u003ea",
        "package": "HarmTrace",
        "partial": "Dur",
        "signature": "a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAnParser.html#",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAnParser",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-HAnTree-HAnParser.html",
        "fct-type": "module",
        "title": "HAnParser"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAnParser",
        "module": "HarmTrace.HAnTree.HAnParser",
        "name": "HAnParser",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "HAn Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAnParser.html#v:pAnyStr",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAnParser",
        "fct-package": "HarmTrace",
        "fct-signature": "Parser String",
        "fct-source": "src/HarmTrace-HAnTree-HAnParser.html#pAnyStr",
        "fct-type": "function",
        "title": "pAnyStr"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAnParser",
        "module": "HarmTrace.HAnTree.HAnParser",
        "name": "pAnyStr",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Any Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAnParser.html#v:pHFunc",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAnParser",
        "fct-package": "HarmTrace",
        "fct-signature": "Parser HFunc",
        "fct-source": "src/HarmTrace-HAnTree-HAnParser.html#pHFunc",
        "fct-type": "function",
        "title": "pHFunc"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAnParser",
        "module": "HarmTrace.HAnTree.HAnParser",
        "name": "pHFunc",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "HFunc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAnParser.html#v:pMode",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAnParser",
        "fct-package": "HarmTrace",
        "fct-signature": "Parser Mode",
        "fct-source": "src/HarmTrace-HAnTree-HAnParser.html#pMode",
        "fct-type": "function",
        "title": "pMode"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAnParser",
        "module": "HarmTrace.HAnTree.HAnParser",
        "name": "pMode",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAnParser.html#v:pSpec",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAnParser",
        "fct-package": "HarmTrace",
        "fct-signature": "Parser Spec",
        "fct-source": "src/HarmTrace-HAnTree-HAnParser.html#pSpec",
        "fct-type": "function",
        "title": "pSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAnParser",
        "module": "HarmTrace.HAnTree.HAnParser",
        "name": "pSpec",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAnParser.html#v:parseHAn",
      "description": {
        "fct-module": "HarmTrace.HAnTree.HAnParser",
        "fct-package": "HarmTrace",
        "fct-signature": "state -\u003e HAn",
        "fct-source": "src/HarmTrace-HAnTree-HAnParser.html#parseHAn",
        "fct-type": "function",
        "title": "parseHAn"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree HAnParser",
        "module": "HarmTrace.HAnTree.HAnParser",
        "name": "parseHAn",
        "normalized": "a-\u003eHAn",
        "package": "HarmTrace",
        "partial": "HAn",
        "signature": "state-\u003eHAn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#",
      "description": {
        "fct-module": "HarmTrace.HAnTree.PostProcess",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-HAnTree-PostProcess.html",
        "fct-type": "module",
        "title": "PostProcess"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree PostProcess",
        "module": "HarmTrace.HAnTree.PostProcess",
        "name": "PostProcess",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Post Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#t:PPOption",
      "description": {
        "fct-module": "HarmTrace.HAnTree.PostProcess",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-HAnTree-PostProcess.html#PPOption",
        "fct-type": "data",
        "title": "PPOption"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree PostProcess",
        "module": "HarmTrace.HAnTree.PostProcess",
        "name": "PPOption",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "PPOption",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#v:ExpandChordDurations",
      "description": {
        "fct-module": "HarmTrace.HAnTree.PostProcess",
        "fct-package": "HarmTrace",
        "fct-signature": "ExpandChordDurations",
        "fct-source": "src/HarmTrace-HAnTree-PostProcess.html#PPOption",
        "fct-type": "function",
        "title": "ExpandChordDurations"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree PostProcess",
        "module": "HarmTrace.HAnTree.PostProcess",
        "name": "ExpandChordDurations",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Expand Chord Durations",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#v:MergeDelChords",
      "description": {
        "fct-module": "HarmTrace.HAnTree.PostProcess",
        "fct-package": "HarmTrace",
        "fct-signature": "MergeDelChords",
        "fct-source": "src/HarmTrace-HAnTree-PostProcess.html#PPOption",
        "fct-type": "function",
        "title": "MergeDelChords"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree PostProcess",
        "module": "HarmTrace.HAnTree.PostProcess",
        "name": "MergeDelChords",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Merge Del Chords",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#v:RemoveInsertions",
      "description": {
        "fct-module": "HarmTrace.HAnTree.PostProcess",
        "fct-package": "HarmTrace",
        "fct-signature": "RemoveInsertions",
        "fct-source": "src/HarmTrace-HAnTree-PostProcess.html#PPOption",
        "fct-type": "function",
        "title": "RemoveInsertions"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree PostProcess",
        "module": "HarmTrace.HAnTree.PostProcess",
        "name": "RemoveInsertions",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Remove Insertions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#v:RemovePDPT",
      "description": {
        "fct-module": "HarmTrace.HAnTree.PostProcess",
        "fct-package": "HarmTrace",
        "fct-signature": "RemovePDPT",
        "fct-source": "src/HarmTrace-HAnTree-PostProcess.html#PPOption",
        "fct-type": "function",
        "title": "RemovePDPT"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree PostProcess",
        "module": "HarmTrace.HAnTree.PostProcess",
        "name": "RemovePDPT",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Remove PDPT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#v:expandChordDurations",
      "description": {
        "fct-module": "HarmTrace.HAnTree.PostProcess",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree HAn -\u003e Tree HAn",
        "fct-source": "src/HarmTrace-HAnTree-PostProcess.html#expandChordDurations",
        "fct-type": "function",
        "title": "expandChordDurations"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree PostProcess",
        "module": "HarmTrace.HAnTree.PostProcess",
        "name": "expandChordDurations",
        "normalized": "Tree HAn-\u003eTree HAn",
        "package": "HarmTrace",
        "partial": "Chord Durations",
        "signature": "Tree HAn-\u003eTree HAn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#v:mergeDelChords",
      "description": {
        "fct-module": "HarmTrace.HAnTree.PostProcess",
        "fct-package": "HarmTrace",
        "fct-signature": "Key -\u003e [Error Int] -\u003e [ChordLabel] -\u003e Tree HAn -\u003e Tree HAn",
        "fct-source": "src/HarmTrace-HAnTree-PostProcess.html#mergeDelChords",
        "fct-type": "function",
        "title": "mergeDelChords"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree PostProcess",
        "module": "HarmTrace.HAnTree.PostProcess",
        "name": "mergeDelChords",
        "normalized": "Key-\u003e[Error Int]-\u003e[ChordLabel]-\u003eTree HAn-\u003eTree HAn",
        "package": "HarmTrace",
        "partial": "Del Chords",
        "signature": "Key-\u003e[Error Int]-\u003e[ChordLabel]-\u003eTree HAn-\u003eTree HAn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#v:removeInsertions",
      "description": {
        "fct-module": "HarmTrace.HAnTree.PostProcess",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree HAn -\u003e Tree HAn",
        "fct-source": "src/HarmTrace-HAnTree-PostProcess.html#removeInsertions",
        "fct-type": "function",
        "title": "removeInsertions"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree PostProcess",
        "module": "HarmTrace.HAnTree.PostProcess",
        "name": "removeInsertions",
        "normalized": "Tree HAn-\u003eTree HAn",
        "package": "HarmTrace",
        "partial": "Insertions",
        "signature": "Tree HAn-\u003eTree HAn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#v:removePDPT",
      "description": {
        "fct-module": "HarmTrace.HAnTree.PostProcess",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree HAn -\u003e Tree HAn",
        "fct-source": "src/HarmTrace-HAnTree-PostProcess.html#removePDPT",
        "fct-type": "function",
        "title": "removePDPT"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree PostProcess",
        "module": "HarmTrace.HAnTree.PostProcess",
        "name": "removePDPT",
        "normalized": "Tree HAn-\u003eTree HAn",
        "package": "HarmTrace",
        "partial": "PDPT",
        "signature": "Tree HAn-\u003eTree HAn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#",
      "description": {
        "fct-module": "HarmTrace.HAnTree.ToHAnTree",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-HAnTree-ToHAnTree.html",
        "fct-type": "module",
        "title": "ToHAnTree"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree ToHAnTree",
        "module": "HarmTrace.HAnTree.ToHAnTree",
        "name": "ToHAnTree",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "To HAn Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#t:GTree",
      "description": {
        "fct-module": "HarmTrace.HAnTree.ToHAnTree",
        "fct-package": "HarmTrace",
        "fct-signature": "class",
        "fct-source": "src/HarmTrace-HAnTree-ToHAnTree.html#GTree",
        "fct-type": "class",
        "title": "GTree"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree ToHAnTree",
        "module": "HarmTrace.HAnTree.ToHAnTree",
        "name": "GTree",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "GTree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#t:HAn",
      "description": {
        "fct-module": "HarmTrace.HAnTree.ToHAnTree",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#HAn",
        "fct-type": "data",
        "title": "HAn"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree ToHAnTree",
        "module": "HarmTrace.HAnTree.ToHAnTree",
        "name": "HAn",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "HAn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#v:HAn",
      "description": {
        "fct-module": "HarmTrace.HAnTree.ToHAnTree",
        "fct-package": "HarmTrace",
        "fct-signature": "HAn !Int !String",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#HAn",
        "fct-type": "function",
        "title": "HAn"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree ToHAnTree",
        "module": "HarmTrace.HAnTree.ToHAnTree",
        "name": "HAn",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "HAn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#v:HAnChord",
      "description": {
        "fct-module": "HarmTrace.HAnTree.ToHAnTree",
        "fct-package": "HarmTrace",
        "fct-signature": "HAnChord !ChordToken",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#HAn",
        "fct-type": "function",
        "title": "HAnChord"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree ToHAnTree",
        "module": "HarmTrace.HAnTree.ToHAnTree",
        "name": "HAnChord",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "HAn Chord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#v:HAnFunc",
      "description": {
        "fct-module": "HarmTrace.HAnTree.ToHAnTree",
        "fct-package": "HarmTrace",
        "fct-signature": "HAnFunc !HFunc",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#HAn",
        "fct-type": "function",
        "title": "HAnFunc"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree ToHAnTree",
        "module": "HarmTrace.HAnTree.ToHAnTree",
        "name": "HAnFunc",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "HAn Func",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#v:HAnPrep",
      "description": {
        "fct-module": "HarmTrace.HAnTree.ToHAnTree",
        "fct-package": "HarmTrace",
        "fct-signature": "HAnPrep !Prep",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#HAn",
        "fct-type": "function",
        "title": "HAnPrep"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree ToHAnTree",
        "module": "HarmTrace.HAnTree.ToHAnTree",
        "name": "HAnPrep",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "HAn Prep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#v:HAnTrans",
      "description": {
        "fct-module": "HarmTrace.HAnTree.ToHAnTree",
        "fct-package": "HarmTrace",
        "fct-signature": "HAnTrans !Trans",
        "fct-source": "src/HarmTrace-HAnTree-HAn.html#HAn",
        "fct-type": "function",
        "title": "HAnTrans"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree ToHAnTree",
        "module": "HarmTrace.HAnTree.ToHAnTree",
        "name": "HAnTrans",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "HAn Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#v:emptyHAnTree",
      "description": {
        "fct-module": "HarmTrace.HAnTree.ToHAnTree",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree HAn",
        "fct-source": "src/HarmTrace-HAnTree-ToHAnTree.html#emptyHAnTree",
        "fct-type": "function",
        "title": "emptyHAnTree"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree ToHAnTree",
        "module": "HarmTrace.HAnTree.ToHAnTree",
        "name": "emptyHAnTree",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "HAn Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#v:gTree",
      "description": {
        "fct-module": "HarmTrace.HAnTree.ToHAnTree",
        "fct-package": "HarmTrace",
        "fct-signature": "a -\u003e [Tree HAn]",
        "fct-source": "src/HarmTrace-HAnTree-ToHAnTree.html#gTree",
        "fct-type": "method",
        "title": "gTree"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree ToHAnTree",
        "module": "HarmTrace.HAnTree.ToHAnTree",
        "name": "gTree",
        "normalized": "a-\u003e[Tree HAn]",
        "package": "HarmTrace",
        "partial": "Tree",
        "signature": "a-\u003e[Tree HAn]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#v:gTreeDefault",
      "description": {
        "fct-module": "HarmTrace.HAnTree.ToHAnTree",
        "fct-package": "HarmTrace",
        "fct-signature": "a -\u003e [Tree HAn]",
        "fct-source": "src/HarmTrace-HAnTree-ToHAnTree.html#gTreeDefault",
        "fct-type": "function",
        "title": "gTreeDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree ToHAnTree",
        "module": "HarmTrace.HAnTree.ToHAnTree",
        "name": "gTreeDefault",
        "normalized": "a-\u003e[Tree HAn]",
        "package": "HarmTrace",
        "partial": "Tree Default",
        "signature": "a-\u003e[Tree HAn]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#v:gTreeHead",
      "description": {
        "fct-module": "HarmTrace.HAnTree.ToHAnTree",
        "fct-package": "HarmTrace",
        "fct-signature": "a -\u003e Tree HAn",
        "fct-source": "src/HarmTrace-HAnTree-ToHAnTree.html#gTreeHead",
        "fct-type": "function",
        "title": "gTreeHead"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree ToHAnTree",
        "module": "HarmTrace.HAnTree.ToHAnTree",
        "name": "gTreeHead",
        "normalized": "a-\u003eTree HAn",
        "package": "HarmTrace",
        "partial": "Tree Head",
        "signature": "a-\u003eTree HAn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html",
        "fct-type": "module",
        "title": "Tree"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "Tree",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#t:Tree",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#Tree",
        "fct-type": "data",
        "title": "Tree"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "Tree",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:Node",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "Node",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#Tree",
        "fct-type": "function",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "Node",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:avgDepth",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree t -\u003e Float",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#avgDepth",
        "fct-type": "function",
        "title": "avgDepth"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "avgDepth",
        "normalized": "Tree a-\u003eFloat",
        "package": "HarmTrace",
        "partial": "Depth",
        "signature": "Tree t-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:avgDepthF",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "[Tree t] -\u003e Float",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#avgDepthF",
        "fct-type": "function",
        "title": "avgDepthF"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "avgDepthF",
        "normalized": "[Tree a]-\u003eFloat",
        "package": "HarmTrace",
        "partial": "Depth",
        "signature": "[Tree t]-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:collectLeafs",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree t -\u003e [Tree t]",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#collectLeafs",
        "fct-type": "function",
        "title": "collectLeafs"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "collectLeafs",
        "normalized": "Tree a-\u003e[Tree a]",
        "package": "HarmTrace",
        "partial": "Leafs",
        "signature": "Tree t-\u003e[Tree t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:depth",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree t -\u003e Int",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#depth",
        "fct-type": "function",
        "title": "depth"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "depth",
        "normalized": "Tree a-\u003eInt",
        "package": "HarmTrace",
        "partial": "",
        "signature": "Tree t-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:depth-39-",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "Int -\u003e Tree t -\u003e [Int]",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#depth%27",
        "fct-type": "function",
        "title": "depth'"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "depth'",
        "normalized": "Int-\u003eTree a-\u003e[Int]",
        "package": "HarmTrace",
        "partial": "",
        "signature": "Int-\u003eTree t-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:depthF",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "[Tree t] -\u003e Int",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#depthF",
        "fct-type": "function",
        "title": "depthF"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "depthF",
        "normalized": "[Tree a]-\u003eInt",
        "package": "HarmTrace",
        "partial": "",
        "signature": "[Tree t]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:findClose",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "String -\u003e Int",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#findClose",
        "fct-type": "function",
        "title": "findClose"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "findClose",
        "normalized": "String-\u003eInt",
        "package": "HarmTrace",
        "partial": "Close",
        "signature": "String-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:findClose-39-",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "String -\u003e Int -\u003e Int -\u003e Int",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#findClose%27",
        "fct-type": "function",
        "title": "findClose'"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "findClose'",
        "normalized": "String-\u003eInt-\u003eInt-\u003eInt",
        "package": "HarmTrace",
        "partial": "Close'",
        "signature": "String-\u003eInt-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:getChild",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "![Tree a]",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#Tree",
        "fct-type": "function",
        "title": "getChild"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "getChild",
        "normalized": "[Tree a]",
        "package": "HarmTrace",
        "partial": "Child",
        "signature": "[Tree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:getChildPns",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree a -\u003e [Int]",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#getChildPns",
        "fct-type": "function",
        "title": "getChildPns"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "getChildPns",
        "normalized": "Tree a-\u003e[Int]",
        "package": "HarmTrace",
        "partial": "Child Pns",
        "signature": "Tree a-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:getLabel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "!a",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#Tree",
        "fct-type": "function",
        "title": "getLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "getLabel",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:getPn",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "!(Maybe Int)",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#Tree",
        "fct-type": "function",
        "title": "getPn"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "getPn",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Pn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:getPns",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "[Tree t] -\u003e [Int]",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#getPns",
        "fct-type": "function",
        "title": "getPns"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "getPns",
        "normalized": "[Tree a]-\u003e[Int]",
        "package": "HarmTrace",
        "partial": "Pns",
        "signature": "[Tree t]-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:getSubTree",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree t -\u003e Int -\u003e Tree t",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#getSubTree",
        "fct-type": "function",
        "title": "getSubTree"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "getSubTree",
        "normalized": "Tree a-\u003eInt-\u003eTree a",
        "package": "HarmTrace",
        "partial": "Sub Tree",
        "signature": "Tree t-\u003eInt-\u003eTree t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:isLf",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree t -\u003e Bool",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#isLf",
        "fct-type": "function",
        "title": "isLf"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "isLf",
        "normalized": "Tree a-\u003eBool",
        "package": "HarmTrace",
        "partial": "Lf",
        "signature": "Tree t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:matchToTree",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree t -\u003e [Int] -\u003e [Tree t]",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#matchToTree",
        "fct-type": "function",
        "title": "matchToTree"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "matchToTree",
        "normalized": "Tree a-\u003e[Int]-\u003e[Tree a]",
        "package": "HarmTrace",
        "partial": "To Tree",
        "signature": "Tree t-\u003e[Int]-\u003e[Tree t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:pot",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree t -\u003e [Tree t]",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#pot",
        "fct-type": "function",
        "title": "pot"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "pot",
        "normalized": "Tree a-\u003e[Tree a]",
        "package": "HarmTrace",
        "partial": "",
        "signature": "Tree t-\u003e[Tree t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:pot-39-",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree t -\u003e [Tree t]",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#pot%27",
        "fct-type": "function",
        "title": "pot'"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "pot'",
        "normalized": "Tree a-\u003e[Tree a]",
        "package": "HarmTrace",
        "partial": "",
        "signature": "Tree t-\u003e[Tree t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:potPret",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree t -\u003e [Tree t]",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#potPret",
        "fct-type": "function",
        "title": "potPret"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "potPret",
        "normalized": "Tree a-\u003e[Tree a]",
        "package": "HarmTrace",
        "partial": "Pret",
        "signature": "Tree t-\u003e[Tree t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:preToPost",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree t -\u003e Int -\u003e Int",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#preToPost",
        "fct-type": "function",
        "title": "preToPost"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "preToPost",
        "normalized": "Tree a-\u003eInt-\u003eInt",
        "package": "HarmTrace",
        "partial": "To Post",
        "signature": "Tree t-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:pret",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree t -\u003e [Tree t]",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#pret",
        "fct-type": "function",
        "title": "pret"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "pret",
        "normalized": "Tree a-\u003e[Tree a]",
        "package": "HarmTrace",
        "partial": "",
        "signature": "Tree t-\u003e[Tree t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:pret-39-",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree t -\u003e [Tree t]",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#pret%27",
        "fct-type": "function",
        "title": "pret'"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "pret'",
        "normalized": "Tree a-\u003e[Tree a]",
        "package": "HarmTrace",
        "partial": "",
        "signature": "Tree t-\u003e[Tree t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:remove",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "t -\u003e Tree t -\u003e Tree t",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#remove",
        "fct-type": "function",
        "title": "remove"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "remove",
        "normalized": "a-\u003eTree a-\u003eTree a",
        "package": "HarmTrace",
        "partial": "",
        "signature": "t-\u003eTree t-\u003eTree t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:removeBy",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "(t -\u003e Bool) -\u003e Tree t -\u003e Tree t",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#removeBy",
        "fct-type": "function",
        "title": "removeBy"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "removeBy",
        "normalized": "(a-\u003eBool)-\u003eTree a-\u003eTree a",
        "package": "HarmTrace",
        "partial": "By",
        "signature": "(t-\u003eBool)-\u003eTree t-\u003eTree t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:removeBy-39-",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "(t -\u003e Bool) -\u003e Tree t -\u003e [Tree t]",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#removeBy%27",
        "fct-type": "function",
        "title": "removeBy'"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "removeBy'",
        "normalized": "(a-\u003eBool)-\u003eTree a-\u003e[Tree a]",
        "package": "HarmTrace",
        "partial": "By'",
        "signature": "(t-\u003eBool)-\u003eTree t-\u003e[Tree t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:setPost",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree t -\u003e Tree t",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#setPost",
        "fct-type": "function",
        "title": "setPost"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "setPost",
        "normalized": "Tree a-\u003eTree a",
        "package": "HarmTrace",
        "partial": "Post",
        "signature": "Tree t-\u003eTree t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:setPre",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree t -\u003e Tree t",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#setPre",
        "fct-type": "function",
        "title": "setPre"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "setPre",
        "normalized": "Tree a-\u003eTree a",
        "package": "HarmTrace",
        "partial": "Pre",
        "signature": "Tree t-\u003eTree t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:size",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree t -\u003e Int",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "size",
        "normalized": "Tree a-\u003eInt",
        "package": "HarmTrace",
        "partial": "",
        "signature": "Tree t-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:sizeF",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "[Tree t] -\u003e Int",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#sizeF",
        "fct-type": "function",
        "title": "sizeF"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "sizeF",
        "normalized": "[Tree a]-\u003eInt",
        "package": "HarmTrace",
        "partial": "",
        "signature": "[Tree t]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:strTree",
      "description": {
        "fct-module": "HarmTrace.HAnTree.Tree",
        "fct-package": "HarmTrace",
        "fct-signature": "String -\u003e Tree String",
        "fct-source": "src/HarmTrace-HAnTree-Tree.html#strTree",
        "fct-type": "function",
        "title": "strTree"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace HAnTree Tree",
        "module": "HarmTrace.HAnTree.Tree",
        "name": "strTree",
        "normalized": "String-\u003eTree String",
        "package": "HarmTrace",
        "partial": "Tree",
        "signature": "String-\u003eTree String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Alignment.html#",
      "description": {
        "fct-module": "HarmTrace.Matching.Alignment",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Matching-Alignment.html",
        "fct-type": "module",
        "title": "Alignment"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching Alignment",
        "module": "HarmTrace.Matching.Alignment",
        "name": "Alignment",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Alignment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Alignment.html#v:alignChordLab",
      "description": {
        "fct-module": "HarmTrace.Matching.Alignment",
        "fct-package": "HarmTrace",
        "fct-signature": "Key -\u003e Key -\u003e [ChordLabel] -\u003e [ChordLabel] -\u003e ([SimChord], Float, Vector (Vector Int))",
        "fct-source": "src/HarmTrace-Matching-Alignment.html#alignChordLab",
        "fct-type": "function",
        "title": "alignChordLab"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching Alignment",
        "module": "HarmTrace.Matching.Alignment",
        "name": "alignChordLab",
        "normalized": "Key-\u003eKey-\u003e[ChordLabel]-\u003e[ChordLabel]-\u003e([SimChord],Float,Vector(Vector Int))",
        "package": "HarmTrace",
        "partial": "Chord Lab",
        "signature": "Key-\u003eKey-\u003e[ChordLabel]-\u003e[ChordLabel]-\u003e([SimChord],Float,Vector(Vector Int))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Alignment.html#v:alignHAnChord",
      "description": {
        "fct-module": "HarmTrace.Matching.Alignment",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree HAn -\u003e Tree HAn -\u003e ([HChord], Float, Vector (Vector Int))",
        "fct-source": "src/HarmTrace-Matching-Alignment.html#alignHAnChord",
        "fct-type": "function",
        "title": "alignHAnChord"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching Alignment",
        "module": "HarmTrace.Matching.Alignment",
        "name": "alignHAnChord",
        "normalized": "Tree HAn-\u003eTree HAn-\u003e([HChord],Float,Vector(Vector Int))",
        "package": "HarmTrace",
        "partial": "HAn Chord",
        "signature": "Tree HAn-\u003eTree HAn-\u003e([HChord],Float,Vector(Vector Int))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Alignment.html#v:getAlignDist",
      "description": {
        "fct-module": "HarmTrace.Matching.Alignment",
        "fct-package": "HarmTrace",
        "fct-signature": "Key -\u003e Key -\u003e [ChordLabel] -\u003e [ChordLabel] -\u003e Float",
        "fct-source": "src/HarmTrace-Matching-Alignment.html#getAlignDist",
        "fct-type": "function",
        "title": "getAlignDist"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching Alignment",
        "module": "HarmTrace.Matching.Alignment",
        "name": "getAlignDist",
        "normalized": "Key-\u003eKey-\u003e[ChordLabel]-\u003e[ChordLabel]-\u003eFloat",
        "package": "HarmTrace",
        "partial": "Align Dist",
        "signature": "Key-\u003eKey-\u003e[ChordLabel]-\u003e[ChordLabel]-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Alignment.html#v:getHAnDist",
      "description": {
        "fct-module": "HarmTrace.Matching.Alignment",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree HAn -\u003e Tree HAn -\u003e Float",
        "fct-source": "src/HarmTrace-Matching-Alignment.html#getHAnDist",
        "fct-type": "function",
        "title": "getHAnDist"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching Alignment",
        "module": "HarmTrace.Matching.Alignment",
        "name": "getHAnDist",
        "normalized": "Tree HAn-\u003eTree HAn-\u003eFloat",
        "package": "HarmTrace",
        "partial": "HAn Dist",
        "signature": "Tree HAn-\u003eTree HAn-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Alignment.html#v:pPrintV",
      "description": {
        "fct-module": "HarmTrace.Matching.Alignment",
        "fct-package": "HarmTrace",
        "fct-signature": "Vector (Vector a) -\u003e IO ()",
        "fct-source": "src/HarmTrace-Matching-Alignment.html#pPrintV",
        "fct-type": "function",
        "title": "pPrintV"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching Alignment",
        "module": "HarmTrace.Matching.Alignment",
        "name": "pPrintV",
        "normalized": "Vector(Vector a)-\u003eIO()",
        "package": "HarmTrace",
        "partial": "Print",
        "signature": "Vector(Vector a)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-GuptaNishimura.html#",
      "description": {
        "fct-module": "HarmTrace.Matching.GuptaNishimura",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Matching-GuptaNishimura.html",
        "fct-type": "module",
        "title": "GuptaNishimura"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching GuptaNishimura",
        "module": "HarmTrace.Matching.GuptaNishimura",
        "name": "GuptaNishimura",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Gupta Nishimura",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-GuptaNishimura.html#v:getLCES",
      "description": {
        "fct-module": "HarmTrace.Matching.GuptaNishimura",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree HAn -\u003e Tree HAn -\u003e ([Tree HAn], Int)",
        "fct-source": "src/HarmTrace-Matching-GuptaNishimura.html#getLCES",
        "fct-type": "function",
        "title": "getLCES"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching GuptaNishimura",
        "module": "HarmTrace.Matching.GuptaNishimura",
        "name": "getLCES",
        "normalized": "Tree HAn-\u003eTree HAn-\u003e([Tree HAn],Int)",
        "package": "HarmTrace",
        "partial": "LCES",
        "signature": "Tree HAn-\u003eTree HAn-\u003e([Tree HAn],Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-GuptaNishimura.html#v:getLCESdepth",
      "description": {
        "fct-module": "HarmTrace.Matching.GuptaNishimura",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree HAn -\u003e Tree HAn -\u003e Float",
        "fct-source": "src/HarmTrace-Matching-GuptaNishimura.html#getLCESdepth",
        "fct-type": "function",
        "title": "getLCESdepth"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching GuptaNishimura",
        "module": "HarmTrace.Matching.GuptaNishimura",
        "name": "getLCESdepth",
        "normalized": "Tree HAn-\u003eTree HAn-\u003eFloat",
        "package": "HarmTrace",
        "partial": "LCESdepth",
        "signature": "Tree HAn-\u003eTree HAn-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-GuptaNishimura.html#v:getLCESsim",
      "description": {
        "fct-module": "HarmTrace.Matching.GuptaNishimura",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree HAn -\u003e Tree HAn -\u003e Float",
        "fct-source": "src/HarmTrace-Matching-GuptaNishimura.html#getLCESsim",
        "fct-type": "function",
        "title": "getLCESsim"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching GuptaNishimura",
        "module": "HarmTrace.Matching.GuptaNishimura",
        "name": "getLCESsim",
        "normalized": "Tree HAn-\u003eTree HAn-\u003eFloat",
        "package": "HarmTrace",
        "partial": "LCESsim",
        "signature": "Tree HAn-\u003eTree HAn-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-GuptaNishimura.html#v:getLCESsize",
      "description": {
        "fct-module": "HarmTrace.Matching.GuptaNishimura",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree HAn -\u003e Tree HAn -\u003e Float",
        "fct-source": "src/HarmTrace-Matching-GuptaNishimura.html#getLCESsize",
        "fct-type": "function",
        "title": "getLCESsize"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching GuptaNishimura",
        "module": "HarmTrace.Matching.GuptaNishimura",
        "name": "getLCESsize",
        "normalized": "Tree HAn-\u003eTree HAn-\u003eFloat",
        "package": "HarmTrace",
        "partial": "LCESsize",
        "signature": "Tree HAn-\u003eTree HAn-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-HChord.html#",
      "description": {
        "fct-module": "HarmTrace.Matching.HChord",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Matching-HChord.html",
        "fct-type": "module",
        "title": "HChord"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching HChord",
        "module": "HarmTrace.Matching.HChord",
        "name": "HChord",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "HChord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-HChord.html#t:HChord",
      "description": {
        "fct-module": "HarmTrace.Matching.HChord",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Matching-HChord.html#HChord",
        "fct-type": "data",
        "title": "HChord"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching HChord",
        "module": "HarmTrace.Matching.HChord",
        "name": "HChord",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "HChord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-HChord.html#t:Sim",
      "description": {
        "fct-module": "HarmTrace.Matching.HChord",
        "fct-package": "HarmTrace",
        "fct-signature": "class",
        "fct-source": "src/HarmTrace-Matching-Sim.html#Sim",
        "fct-type": "class",
        "title": "Sim"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching HChord",
        "module": "HarmTrace.Matching.HChord",
        "name": "Sim",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Sim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-HChord.html#v:toHChords",
      "description": {
        "fct-module": "HarmTrace.Matching.HChord",
        "fct-package": "HarmTrace",
        "fct-signature": "Tree HAn -\u003e [HChord]",
        "fct-source": "src/HarmTrace-Matching-HChord.html#toHChords",
        "fct-type": "function",
        "title": "toHChords"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching HChord",
        "module": "HarmTrace.Matching.HChord",
        "name": "toHChords",
        "normalized": "Tree HAn-\u003e[HChord]",
        "package": "HarmTrace",
        "partial": "HChords",
        "signature": "Tree HAn-\u003e[HChord]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Sim.html#",
      "description": {
        "fct-module": "HarmTrace.Matching.Sim",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Matching-Sim.html",
        "fct-type": "module",
        "title": "Sim"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching Sim",
        "module": "HarmTrace.Matching.Sim",
        "name": "Sim",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Sim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Sim.html#t:Sim",
      "description": {
        "fct-module": "HarmTrace.Matching.Sim",
        "fct-package": "HarmTrace",
        "fct-signature": "class",
        "fct-source": "src/HarmTrace-Matching-Sim.html#Sim",
        "fct-type": "class",
        "title": "Sim"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching Sim",
        "module": "HarmTrace.Matching.Sim",
        "name": "Sim",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Sim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Sim.html#v:div1",
      "description": {
        "fct-module": "HarmTrace.Matching.Sim",
        "fct-package": "HarmTrace",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/HarmTrace-Matching-Sim.html#div1",
        "fct-type": "function",
        "title": "div1"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching Sim",
        "module": "HarmTrace.Matching.Sim",
        "name": "div1",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "HarmTrace",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Sim.html#v:maxSim",
      "description": {
        "fct-module": "HarmTrace.Matching.Sim",
        "fct-package": "HarmTrace",
        "fct-signature": "[a] -\u003e Int",
        "fct-source": "src/HarmTrace-Matching-Sim.html#maxSim",
        "fct-type": "function",
        "title": "maxSim"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching Sim",
        "module": "HarmTrace.Matching.Sim",
        "name": "maxSim",
        "normalized": "[a]-\u003eInt",
        "package": "HarmTrace",
        "partial": "Sim",
        "signature": "[a]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Sim.html#v:sim",
      "description": {
        "fct-module": "HarmTrace.Matching.Sim",
        "fct-package": "HarmTrace",
        "fct-signature": "a -\u003e a -\u003e Int",
        "fct-source": "src/HarmTrace-Matching-Sim.html#sim",
        "fct-type": "method",
        "title": "sim"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching Sim",
        "module": "HarmTrace.Matching.Sim",
        "name": "sim",
        "normalized": "a-\u003ea-\u003eInt",
        "package": "HarmTrace",
        "partial": "",
        "signature": "a-\u003ea-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-SimpleChord.html#",
      "description": {
        "fct-module": "HarmTrace.Matching.SimpleChord",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Matching-SimpleChord.html",
        "fct-type": "module",
        "title": "SimpleChord"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching SimpleChord",
        "module": "HarmTrace.Matching.SimpleChord",
        "name": "SimpleChord",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Simple Chord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-SimpleChord.html#t:Sim",
      "description": {
        "fct-module": "HarmTrace.Matching.SimpleChord",
        "fct-package": "HarmTrace",
        "fct-signature": "class",
        "fct-source": "src/HarmTrace-Matching-Sim.html#Sim",
        "fct-type": "class",
        "title": "Sim"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching SimpleChord",
        "module": "HarmTrace.Matching.SimpleChord",
        "name": "Sim",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Sim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-SimpleChord.html#t:SimChord",
      "description": {
        "fct-module": "HarmTrace.Matching.SimpleChord",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Matching-SimpleChord.html#SimChord",
        "fct-type": "data",
        "title": "SimChord"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching SimpleChord",
        "module": "HarmTrace.Matching.SimpleChord",
        "name": "SimChord",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Sim Chord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-SimpleChord.html#v:toSimChords",
      "description": {
        "fct-module": "HarmTrace.Matching.SimpleChord",
        "fct-package": "HarmTrace",
        "fct-signature": "ChordDegree -\u003e [SimChord]",
        "fct-source": "src/HarmTrace-Matching-SimpleChord.html#toSimChords",
        "fct-type": "function",
        "title": "toSimChords"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching SimpleChord",
        "module": "HarmTrace.Matching.SimpleChord",
        "name": "toSimChords",
        "normalized": "ChordDegree-\u003e[SimChord]",
        "package": "HarmTrace",
        "partial": "Sim Chords",
        "signature": "ChordDegree-\u003e[SimChord]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Standard.html#",
      "description": {
        "fct-module": "HarmTrace.Matching.Standard",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Matching-Standard.html",
        "fct-type": "module",
        "title": "Standard"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching Standard",
        "module": "HarmTrace.Matching.Standard",
        "name": "Standard",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Standard",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Standard.html#v:diffChords",
      "description": {
        "fct-module": "HarmTrace.Matching.Standard",
        "fct-package": "HarmTrace",
        "fct-signature": "[a] -\u003e [a] -\u003e String",
        "fct-source": "src/HarmTrace-Matching-Standard.html#diffChords",
        "fct-type": "function",
        "title": "diffChords"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching Standard",
        "module": "HarmTrace.Matching.Standard",
        "name": "diffChords",
        "normalized": "[a]-\u003e[a]-\u003eString",
        "package": "HarmTrace",
        "partial": "Chords",
        "signature": "[a]-\u003e[a]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Standard.html#v:diffChordsLen",
      "description": {
        "fct-module": "HarmTrace.Matching.Standard",
        "fct-package": "HarmTrace",
        "fct-signature": "[a] -\u003e [a] -\u003e Float",
        "fct-source": "src/HarmTrace-Matching-Standard.html#diffChordsLen",
        "fct-type": "function",
        "title": "diffChordsLen"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Matching Standard",
        "module": "HarmTrace.Matching.Standard",
        "name": "diffChordsLen",
        "normalized": "[a]-\u003e[a]-\u003eFloat",
        "package": "HarmTrace",
        "partial": "Chords Len",
        "signature": "[a]-\u003e[a]-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#",
      "description": {
        "fct-module": "HarmTrace.Models.ChordTokens",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Models-ChordTokens.html",
        "fct-type": "module",
        "title": "ChordTokens"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models ChordTokens",
        "module": "HarmTrace.Models.ChordTokens",
        "name": "ChordTokens",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Chord Tokens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#t:ChordToken",
      "description": {
        "fct-module": "HarmTrace.Models.ChordTokens",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-ChordTokens.html#ChordToken",
        "fct-type": "data",
        "title": "ChordToken"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models ChordTokens",
        "module": "HarmTrace.Models.ChordTokens",
        "name": "ChordToken",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Chord Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#t:ParseStatus",
      "description": {
        "fct-module": "HarmTrace.Models.ChordTokens",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-ChordTokens.html#ParseStatus",
        "fct-type": "data",
        "title": "ParseStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models ChordTokens",
        "module": "HarmTrace.Models.ChordTokens",
        "name": "ParseStatus",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Parse Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#t:PieceToken",
      "description": {
        "fct-module": "HarmTrace.Models.ChordTokens",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-ChordTokens.html#PieceToken",
        "fct-type": "data",
        "title": "PieceToken"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models ChordTokens",
        "module": "HarmTrace.Models.ChordTokens",
        "name": "PieceToken",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Piece Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:ChordToken",
      "description": {
        "fct-module": "HarmTrace.Models.ChordTokens",
        "fct-package": "HarmTrace",
        "fct-signature": "ChordToken",
        "fct-source": "src/HarmTrace-Models-ChordTokens.html#ChordToken",
        "fct-type": "function",
        "title": "ChordToken"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models ChordTokens",
        "module": "HarmTrace.Models.ChordTokens",
        "name": "ChordToken",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Chord Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:Deleted",
      "description": {
        "fct-module": "HarmTrace.Models.ChordTokens",
        "fct-package": "HarmTrace",
        "fct-signature": "Deleted",
        "fct-source": "src/HarmTrace-Models-ChordTokens.html#ParseStatus",
        "fct-type": "function",
        "title": "Deleted"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models ChordTokens",
        "module": "HarmTrace.Models.ChordTokens",
        "name": "Deleted",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Deleted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:Inserted",
      "description": {
        "fct-module": "HarmTrace.Models.ChordTokens",
        "fct-package": "HarmTrace",
        "fct-signature": "Inserted",
        "fct-source": "src/HarmTrace-Models-ChordTokens.html#ParseStatus",
        "fct-type": "function",
        "title": "Inserted"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models ChordTokens",
        "module": "HarmTrace.Models.ChordTokens",
        "name": "Inserted",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Inserted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:NotParsed",
      "description": {
        "fct-module": "HarmTrace.Models.ChordTokens",
        "fct-package": "HarmTrace",
        "fct-signature": "NotParsed",
        "fct-source": "src/HarmTrace-Models-ChordTokens.html#ParseStatus",
        "fct-type": "function",
        "title": "NotParsed"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models ChordTokens",
        "module": "HarmTrace.Models.ChordTokens",
        "name": "NotParsed",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Not Parsed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:Parsed",
      "description": {
        "fct-module": "HarmTrace.Models.ChordTokens",
        "fct-package": "HarmTrace",
        "fct-signature": "Parsed",
        "fct-source": "src/HarmTrace-Models-ChordTokens.html#ParseStatus",
        "fct-type": "function",
        "title": "Parsed"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models ChordTokens",
        "module": "HarmTrace.Models.ChordTokens",
        "name": "Parsed",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Parsed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:PieceToken",
      "description": {
        "fct-module": "HarmTrace.Models.ChordTokens",
        "fct-package": "HarmTrace",
        "fct-signature": "PieceToken Key [ChordToken]",
        "fct-source": "src/HarmTrace-Models-ChordTokens.html#PieceToken",
        "fct-type": "function",
        "title": "PieceToken"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models ChordTokens",
        "module": "HarmTrace.Models.ChordTokens",
        "name": "PieceToken",
        "normalized": "PieceToken Key[ChordToken]",
        "package": "HarmTrace",
        "partial": "Piece Token",
        "signature": "PieceToken Key[ChordToken]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:chordNumReps",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Models.ChordTokens",
        "fct-package": "HarmTrace",
        "fct-signature": "Int",
        "fct-source": "src/HarmTrace-Models-ChordTokens.html#ChordToken",
        "fct-type": "function",
        "title": "chordNumReps"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models ChordTokens",
        "module": "HarmTrace.Models.ChordTokens",
        "name": "chordNumReps",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Num Reps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:chords",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Models.ChordTokens",
        "fct-package": "HarmTrace",
        "fct-signature": "[ChordLabel]",
        "fct-source": "src/HarmTrace-Models-ChordTokens.html#ChordToken",
        "fct-type": "function",
        "title": "chords"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models ChordTokens",
        "module": "HarmTrace.Models.ChordTokens",
        "name": "chords",
        "normalized": "[ChordLabel]",
        "package": "HarmTrace",
        "partial": "",
        "signature": "[ChordLabel]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:classType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Models.ChordTokens",
        "fct-package": "HarmTrace",
        "fct-signature": "ClassType",
        "fct-source": "src/HarmTrace-Models-ChordTokens.html#ChordToken",
        "fct-type": "function",
        "title": "classType"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models ChordTokens",
        "module": "HarmTrace.Models.ChordTokens",
        "name": "classType",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:dur",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Models.ChordTokens",
        "fct-package": "HarmTrace",
        "fct-signature": "Int",
        "fct-source": "src/HarmTrace-Models-ChordTokens.html#ChordToken",
        "fct-type": "function",
        "title": "dur"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models ChordTokens",
        "module": "HarmTrace.Models.ChordTokens",
        "name": "dur",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:root",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Models.ChordTokens",
        "fct-package": "HarmTrace",
        "fct-signature": "ScaleDegree",
        "fct-source": "src/HarmTrace-Models-ChordTokens.html#ChordToken",
        "fct-type": "function",
        "title": "root"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models ChordTokens",
        "module": "HarmTrace.Models.ChordTokens",
        "name": "root",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:status",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Models.ChordTokens",
        "fct-package": "HarmTrace",
        "fct-signature": "ParseStatus",
        "fct-source": "src/HarmTrace-Models-ChordTokens.html#ChordToken",
        "fct-type": "function",
        "title": "status"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models ChordTokens",
        "module": "HarmTrace.Models.ChordTokens",
        "name": "status",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:toKeyRelTok",
      "description": {
        "fct-descr": "\u003cp\u003eMerges duplicate chords and transforms absolute chord labels into key\n relative tokens that can be parsed by the HarmTrace model \n\u003c/p\u003e",
        "fct-module": "HarmTrace.Models.ChordTokens",
        "fct-package": "HarmTrace",
        "fct-signature": "Key -\u003e [ChordLabel] -\u003e [ChordToken]",
        "fct-source": "src/HarmTrace-Models-ChordTokens.html#toKeyRelTok",
        "fct-type": "function",
        "title": "toKeyRelTok"
      },
      "index": {
        "description": "Merges duplicate chords and transforms absolute chord labels into key relative tokens that can be parsed by the HarmTrace model",
        "hierarchy": "HarmTrace Models ChordTokens",
        "module": "HarmTrace.Models.ChordTokens",
        "name": "toKeyRelTok",
        "normalized": "Key-\u003e[ChordLabel]-\u003e[ChordToken]",
        "package": "HarmTrace",
        "partial": "Key Rel Tok",
        "signature": "Key-\u003e[ChordLabel]-\u003e[ChordToken]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Adhoc instances for the jazz model\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "Summary Adhoc instances for the jazz model",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:DMajBorrow_D_24_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#DMajBorrow_D_24_bor_",
        "fct-type": "data",
        "title": "DMajBorrow_D_24_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "DMajBorrow_D_24_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "DMaj Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:DMinBorrow_Dm_24_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#DMinBorrow_Dm_24_bor_",
        "fct-type": "data",
        "title": "DMinBorrow_Dm_24_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "DMinBorrow_Dm_24_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "DMin Borrow Dm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Dom_D_1_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#Dom_D_1_",
        "fct-type": "data",
        "title": "Dom_D_1_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "Dom_D_1_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Dom_D_2_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#Dom_D_2_",
        "fct-type": "data",
        "title": "Dom_D_2_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "Dom_D_2_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Dom_D_3_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#Dom_D_3_",
        "fct-type": "data",
        "title": "Dom_D_3_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "Dom_D_3_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Dom_D_4_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#Dom_D_4_",
        "fct-type": "data",
        "title": "Dom_D_4_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "Dom_D_4_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Dom_D_8_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#Dom_D_8_bor_",
        "fct-type": "data",
        "title": "Dom_D_8_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "Dom_D_8_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Dom_Dm_4_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#Dom_Dm_4_",
        "fct-type": "data",
        "title": "Dom_Dm_4_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "Dom_Dm_4_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dom Dm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Dom_Dm_8_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#Dom_Dm_8_bor_",
        "fct-type": "data",
        "title": "Dom_Dm_8_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "Dom_Dm_8_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dom Dm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:GetDegree",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "class",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#GetDegree",
        "fct-type": "class",
        "title": "GetDegree"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "GetDegree",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Get Degree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Phrase_PD_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#Phrase_PD_",
        "fct-type": "data",
        "title": "Phrase_PD_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "Phrase_PD_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Phrase PD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Phrase_PT_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#Phrase_PT_",
        "fct-type": "data",
        "title": "Phrase_PT_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "Phrase_PT_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Phrase PT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepDMajBorrow_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#RepDMajBorrow_",
        "fct-type": "type",
        "title": "RepDMajBorrow_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "RepDMajBorrow_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep DMaj Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepDMinBorrow_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#RepDMinBorrow_",
        "fct-type": "type",
        "title": "RepDMinBorrow_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "RepDMinBorrow_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep DMin Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepDom_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#RepDom_",
        "fct-type": "type",
        "title": "RepDom_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "RepDom_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep Dom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepPhrase_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#RepPhrase_",
        "fct-type": "type",
        "title": "RepPhrase_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "RepPhrase_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep Phrase",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepSDom_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#RepSDom_",
        "fct-type": "type",
        "title": "RepSDom_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "RepSDom_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep SDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepSMajBorrow_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#RepSMajBorrow_",
        "fct-type": "type",
        "title": "RepSMajBorrow_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "RepSMajBorrow_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep SMaj Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepSMinBorrow_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#RepSMinBorrow_",
        "fct-type": "type",
        "title": "RepSMinBorrow_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "RepSMinBorrow_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep SMin Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepTMajBorrow_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#RepTMajBorrow_",
        "fct-type": "type",
        "title": "RepTMajBorrow_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "RepTMajBorrow_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep TMaj Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepTMinBorrow_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#RepTMinBorrow_",
        "fct-type": "type",
        "title": "RepTMinBorrow_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "RepTMinBorrow_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep TMin Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepTon_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#RepTon_",
        "fct-type": "type",
        "title": "RepTon_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "RepTon_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep Ton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SDom_S_1_par_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#SDom_S_1_par_",
        "fct-type": "data",
        "title": "SDom_S_1_par_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "SDom_S_1_par_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SDom_S_2_par_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#SDom_S_2_par_",
        "fct-type": "data",
        "title": "SDom_S_2_par_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "SDom_S_2_par_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SDom_S_3_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#SDom_S_3_",
        "fct-type": "data",
        "title": "SDom_S_3_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "SDom_S_3_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SDom_S_4_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#SDom_S_4_",
        "fct-type": "data",
        "title": "SDom_S_4_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "SDom_S_4_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SDom_S_5_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#SDom_S_5_bor_",
        "fct-type": "data",
        "title": "SDom_S_5_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "SDom_S_5_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SDom_Sm_3_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#SDom_Sm_3_",
        "fct-type": "data",
        "title": "SDom_Sm_3_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "SDom_Sm_3_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SDom_Sm_4_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#SDom_Sm_4_",
        "fct-type": "data",
        "title": "SDom_Sm_4_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "SDom_Sm_4_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SDom_Sm_5_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#SDom_Sm_5_bor_",
        "fct-type": "data",
        "title": "SDom_Sm_5_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "SDom_Sm_5_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SDom_Sm_6_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#SDom_Sm_6_",
        "fct-type": "data",
        "title": "SDom_Sm_6_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "SDom_Sm_6_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SMajBorrow_S_20_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#SMajBorrow_S_20_bor_",
        "fct-type": "data",
        "title": "SMajBorrow_S_20_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "SMajBorrow_S_20_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SMaj Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SMinBorrow_Sm_20_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#SMinBorrow_Sm_20_bor_",
        "fct-type": "data",
        "title": "SMinBorrow_Sm_20_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "SMinBorrow_Sm_20_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SMin Borrow Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SMinBorrow_Sm_22_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#SMinBorrow_Sm_22_bor_",
        "fct-type": "data",
        "title": "SMinBorrow_Sm_22_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "SMinBorrow_Sm_22_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SMin Borrow Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:TMajBorrow_T_21_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#TMajBorrow_T_21_bor_",
        "fct-type": "data",
        "title": "TMajBorrow_T_21_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "TMajBorrow_T_21_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "TMaj Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:TMajBorrow_T_23_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#TMajBorrow_T_23_bor_",
        "fct-type": "data",
        "title": "TMajBorrow_T_23_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "TMajBorrow_T_23_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "TMaj Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:TMinBorrow_Tm_21_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#TMinBorrow_Tm_21_bor_",
        "fct-type": "data",
        "title": "TMinBorrow_Tm_21_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "TMinBorrow_Tm_21_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "TMin Borrow Tm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:TMinBorrow_Tm_23_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#TMinBorrow_Tm_23_bor_",
        "fct-type": "data",
        "title": "TMinBorrow_Tm_23_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "TMinBorrow_Tm_23_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "TMin Borrow Tm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Ton_T_1_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#Ton_T_1_",
        "fct-type": "data",
        "title": "Ton_T_1_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "Ton_T_1_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Ton_T_2_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#Ton_T_2_",
        "fct-type": "data",
        "title": "Ton_T_2_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "Ton_T_2_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Ton_T_3_par_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#Ton_T_3_par_",
        "fct-type": "data",
        "title": "Ton_T_3_par_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "Ton_T_3_par_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Ton_T_6_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#Ton_T_6_bor_",
        "fct-type": "data",
        "title": "Ton_T_6_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "Ton_T_6_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Ton_Tm_1_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#Ton_Tm_1_",
        "fct-type": "data",
        "title": "Ton_Tm_1_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "Ton_Tm_1_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ton Tm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Ton_Tm_2_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#Ton_Tm_2_",
        "fct-type": "data",
        "title": "Ton_Tm_2_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "Ton_Tm_2_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ton Tm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Ton_Tm_3_par_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#Ton_Tm_3_par_",
        "fct-type": "data",
        "title": "Ton_Tm_3_par_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "Ton_Tm_3_par_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ton Tm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Ton_Tm_6_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#Ton_Tm_6_bor_",
        "fct-type": "data",
        "title": "Ton_Tm_6_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "Ton_Tm_6_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ton Tm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#v:getDeg",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "a -\u003e (ScaleDegree, Int)",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#getDeg",
        "fct-type": "method",
        "title": "getDeg"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "getDeg",
        "normalized": "a-\u003e(ScaleDegree,Int)",
        "package": "HarmTrace",
        "partial": "Deg",
        "signature": "a-\u003e(ScaleDegree,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#v:pChord",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "ScaleDegree -\u003e ClassType -\u003e PMusic (Surface_Chord deg clss (Su n))",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#pChord",
        "fct-type": "function",
        "title": "pChord"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "pChord",
        "normalized": "ScaleDegree-\u003eClassType-\u003ePMusic(Surface_Chord a b(Su c))",
        "package": "HarmTrace",
        "partial": "Chord",
        "signature": "ScaleDegree-\u003eClassType-\u003ePMusic(Surface_Chord deg clss(Su n))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#v:toGTree",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "(Int -\u003e ScaleDegree -\u003e Trans) -\u003e Int -\u003e a -\u003e [Tree HAn]",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#toGTree",
        "fct-type": "function",
        "title": "toGTree"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "toGTree",
        "normalized": "(Int-\u003eScaleDegree-\u003eTrans)-\u003eInt-\u003ea-\u003e[Tree HAn]",
        "package": "HarmTrace",
        "partial": "GTree",
        "signature": "(Int-\u003eScaleDegree-\u003eTrans)-\u003eInt-\u003ea-\u003e[Tree HAn]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#v:toGTreeSplit",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "(Int -\u003e ScaleDegree -\u003e Prep) -\u003e b -\u003e a -\u003e [Tree HAn]",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#toGTreeSplit",
        "fct-type": "function",
        "title": "toGTreeSplit"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "toGTreeSplit",
        "normalized": "(Int-\u003eScaleDegree-\u003ePrep)-\u003ea-\u003eb-\u003e[Tree HAn]",
        "package": "HarmTrace",
        "partial": "GTree Split",
        "signature": "(Int-\u003eScaleDegree-\u003ePrep)-\u003eb-\u003ea-\u003e[Tree HAn]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#v:toSDVal",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "a -\u003e ScaleDegree",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#toSDVal",
        "fct-type": "function",
        "title": "toSDVal"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "toSDVal",
        "normalized": "a-\u003eScaleDegree",
        "package": "HarmTrace",
        "partial": "SDVal",
        "signature": "a-\u003eScaleDegree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#v:toTransSDVal",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "Int -\u003e a -\u003e ScaleDegree",
        "fct-source": "src/HarmTrace-Models-Jazz-Instances.html#toTransSDVal",
        "fct-type": "function",
        "title": "toTransSDVal"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Instances",
        "module": "HarmTrace.Models.Jazz.Instances",
        "name": "toTransSDVal",
        "normalized": "Int-\u003ea-\u003eScaleDegree",
        "package": "HarmTrace",
        "partial": "Trans SDVal",
        "signature": "Int-\u003ea-\u003eScaleDegree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Main.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: The jazz parser\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HarmTrace.Models.Jazz.Main",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Models-Jazz-Main.html",
        "fct-type": "module",
        "title": "Main"
      },
      "index": {
        "description": "Summary The jazz parser",
        "hierarchy": "HarmTrace Models Jazz Main",
        "module": "HarmTrace.Models.Jazz.Main",
        "name": "Main",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Main",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Main.html#v:pJazz",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Main",
        "fct-package": "HarmTrace",
        "fct-signature": "Key -\u003e PMusic [Piece]",
        "fct-source": "src/HarmTrace-Models-Jazz-Main.html#pJazz",
        "fct-type": "function",
        "title": "pJazz"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Main",
        "module": "HarmTrace.Models.Jazz.Main",
        "name": "pJazz",
        "normalized": "Key-\u003ePMusic[Piece]",
        "package": "HarmTrace",
        "partial": "Jazz",
        "signature": "Key-\u003ePMusic[Piece]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: The jazz model\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html",
        "fct-type": "module",
        "title": "Model"
      },
      "index": {
        "description": "Summary The jazz model",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Model",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Base_Final",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Base_Final",
        "fct-type": "data",
        "title": "Base_Final"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Base_Final",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Base Final",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Base_SD",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Base_SD",
        "fct-type": "data",
        "title": "Base_SD"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Base_SD",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Base SD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:DMajBorrow",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#DMajBorrow",
        "fct-type": "data",
        "title": "DMajBorrow"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "DMajBorrow",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "DMaj Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:DMinBorrow",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#DMinBorrow",
        "fct-type": "data",
        "title": "DMinBorrow"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "DMinBorrow",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "DMin Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:DiatV",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "DiatV",
        "fct-type": "function",
        "title": "DiatV"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "DiatV",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Diat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:DiatVM",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "DiatVM",
        "fct-type": "function",
        "title": "DiatVM"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "DiatVM",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Diat VM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:DimClass",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#DimClass",
        "fct-type": "data",
        "title": "DimClass"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "DimClass",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dim Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Dom",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Dom",
        "fct-type": "data",
        "title": "Dom"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Dom",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:DomClass",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#DomClass",
        "fct-type": "data",
        "title": "DomClass"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "DomClass",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dom Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Final",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Final",
        "fct-type": "type",
        "title": "Final"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Final",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Final",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:FinalDimTrans",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#FinalDimTrans",
        "fct-type": "type",
        "title": "FinalDimTrans"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "FinalDimTrans",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Final Dim Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:I",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#I",
        "fct-type": "data",
        "title": "I"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "I",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:II",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#II",
        "fct-type": "data",
        "title": "II"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "II",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "II",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:III",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#III",
        "fct-type": "data",
        "title": "III"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "III",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "III",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:IIIb",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#IIIb",
        "fct-type": "data",
        "title": "IIIb"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "IIIb",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "IIIb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:IIIs",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#IIIs",
        "fct-type": "data",
        "title": "IIIs"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "IIIs",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "IIIs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:IIb",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#IIb",
        "fct-type": "data",
        "title": "IIb"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "IIb",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "IIb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:IIbDim",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "IIbDim",
        "fct-type": "function",
        "title": "IIbDim"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "IIbDim",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "IIb Dim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:IIs",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#IIs",
        "fct-type": "data",
        "title": "IIs"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "IIs",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "IIs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:IV",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#IV",
        "fct-type": "data",
        "title": "IV"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "IV",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "IV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:IVb",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#IVb",
        "fct-type": "data",
        "title": "IVb"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "IVb",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "IVb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:IVs",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#IVs",
        "fct-type": "data",
        "title": "IVs"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "IVs",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "IVs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Ib",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Ib",
        "fct-type": "data",
        "title": "Ib"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Ib",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Imp",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Imp",
        "fct-type": "data",
        "title": "Imp"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Imp",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Imp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Is",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Is",
        "fct-type": "data",
        "title": "Is"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Is",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Is",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:MajClass",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#MajClass",
        "fct-type": "data",
        "title": "MajClass"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "MajClass",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Maj Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:MajMode",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#MajMode",
        "fct-type": "data",
        "title": "MajMode"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "MajMode",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Maj Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:MinClass",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#MinClass",
        "fct-type": "data",
        "title": "MinClass"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "MinClass",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Min Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:MinMode",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#MinMode",
        "fct-type": "data",
        "title": "MinMode"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "MinMode",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Min Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:MinThird",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "MinThird",
        "fct-type": "function",
        "title": "MinThird"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "MinThird",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Min Third",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Phrase",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Phrase",
        "fct-type": "data",
        "title": "Phrase"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Phrase",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Phrase",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Piece",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Piece",
        "fct-type": "data",
        "title": "Piece"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Piece",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Piece",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:SD",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#SD",
        "fct-type": "type",
        "title": "SD"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "SD",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:SDom",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
        "fct-type": "data",
        "title": "SDom"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "SDom",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:SMajBorrow",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#SMajBorrow",
        "fct-type": "data",
        "title": "SMajBorrow"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "SMajBorrow",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SMaj Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:SMinBorrow",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#SMinBorrow",
        "fct-type": "data",
        "title": "SMinBorrow"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "SMinBorrow",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SMin Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Surface_Chord",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Surface_Chord",
        "fct-type": "data",
        "title": "Surface_Chord"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Surface_Chord",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Surface Chord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:TMajBorrow",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#TMajBorrow",
        "fct-type": "data",
        "title": "TMajBorrow"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "TMajBorrow",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "TMaj Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:TMinBorrow",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#TMinBorrow",
        "fct-type": "data",
        "title": "TMinBorrow"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "TMinBorrow",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "TMin Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:ToClass",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "class",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#ToClass",
        "fct-type": "class",
        "title": "ToClass"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "ToClass",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "To Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:ToDegree",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "class",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#ToDegree",
        "fct-type": "class",
        "title": "ToDegree"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "ToDegree",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "To Degree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Ton",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Ton",
        "fct-type": "data",
        "title": "Ton"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Ton",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:TritMinVSub",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#TritMinVSub",
        "fct-type": "type",
        "title": "TritMinVSub"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "TritMinVSub",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Trit Min VSub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Tritone",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Tritone",
        "fct-type": "function",
        "title": "Tritone"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Tritone",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Tritone",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:V",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#V",
        "fct-type": "data",
        "title": "V"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "V",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:VDom",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "VDom",
        "fct-type": "function",
        "title": "VDom"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "VDom",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "VDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:VI",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#VI",
        "fct-type": "data",
        "title": "VI"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "VI",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "VI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:VII",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#VII",
        "fct-type": "data",
        "title": "VII"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "VII",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "VII",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:VIIb",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#VIIb",
        "fct-type": "data",
        "title": "VIIb"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "VIIb",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "VIIb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:VIIs",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#VIIs",
        "fct-type": "data",
        "title": "VIIs"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "VIIs",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "VIIs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:VIb",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#VIb",
        "fct-type": "data",
        "title": "VIb"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "VIb",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "VIb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:VIs",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#VIs",
        "fct-type": "data",
        "title": "VIs"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "VIs",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "VIs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:VMin",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "VMin",
        "fct-type": "function",
        "title": "VMin"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "VMin",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "VMin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Vb",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Vb",
        "fct-type": "data",
        "title": "Vb"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Vb",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Vb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Vs",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Vs",
        "fct-type": "data",
        "title": "Vs"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Vs",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Vs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Base_Final",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "FinalDimTrans deg clss -\u003e Base_Final deg clss (Su n)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Base_Final",
        "fct-type": "function",
        "title": "Base_Final"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Base_Final",
        "normalized": "FinalDimTrans a b-\u003eBase_Final a b(Su c)",
        "package": "HarmTrace",
        "partial": "Base Final",
        "signature": "FinalDimTrans deg clss-\u003eBase_Final deg clss(Su n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Base_SD",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "TritMinVSub deg clss -\u003e Base_SD deg clss (Su n)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Base_SD",
        "fct-type": "function",
        "title": "Base_SD"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Base_SD",
        "normalized": "TritMinVSub a b-\u003eBase_SD a b(Su c)",
        "package": "HarmTrace",
        "partial": "Base SD",
        "signature": "TritMinVSub deg clss-\u003eBase_SD deg clss(Su n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Cons_Diat",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Base_SD (DiatV deg) MinClass n -\u003e Base_SD deg MinClass n -\u003e Base_SD deg MinClass (Su n)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Base_SD",
        "fct-type": "function",
        "title": "Cons_Diat"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Cons_Diat",
        "normalized": "Base_SD(DiatV a)MinClass b-\u003eBase_SD a MinClass b-\u003eBase_SD a MinClass(Su b)",
        "package": "HarmTrace",
        "partial": "Cons Diat",
        "signature": "Base_SD(DiatV deg)MinClass n-\u003eBase_SD deg MinClass n-\u003eBase_SD deg MinClass(Su n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Cons_DiatM",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Base_SD (DiatVM deg) MajClass n -\u003e Base_SD deg MajClass n -\u003e Base_SD deg MajClass (Su n)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Base_SD",
        "fct-type": "function",
        "title": "Cons_DiatM"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Cons_DiatM",
        "normalized": "Base_SD(DiatVM a)MajClass b-\u003eBase_SD a MajClass b-\u003eBase_SD a MajClass(Su b)",
        "package": "HarmTrace",
        "partial": "Cons Diat",
        "signature": "Base_SD(DiatVM deg)MajClass n-\u003eBase_SD deg MajClass n-\u003eBase_SD deg MajClass(Su n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Cons_DiatM-39-",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Base_SD (DiatVM deg) MajClass n -\u003e Base_SD deg MinClass n -\u003e Base_SD deg MinClass (Su n)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Base_SD",
        "fct-type": "function",
        "title": "Cons_DiatM'"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Cons_DiatM'",
        "normalized": "Base_SD(DiatVM a)MajClass b-\u003eBase_SD a MinClass b-\u003eBase_SD a MinClass(Su b)",
        "package": "HarmTrace",
        "partial": "Cons Diat M'",
        "signature": "Base_SD(DiatVM deg)MajClass n-\u003eBase_SD deg MinClass n-\u003eBase_SD deg MinClass(Su n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Cons_Vdom",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Base_SD (VDom deg) DomClass n -\u003e Base_SD deg clss n -\u003e Base_SD deg clss (Su n)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Base_SD",
        "fct-type": "function",
        "title": "Cons_Vdom"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Cons_Vdom",
        "normalized": "Base_SD(VDom a)DomClass b-\u003eBase_SD a c b-\u003eBase_SD a c(Su b)",
        "package": "HarmTrace",
        "partial": "Cons Vdom",
        "signature": "Base_SD(VDom deg)DomClass n-\u003eBase_SD deg clss n-\u003eBase_SD deg clss(Su n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Cons_Vmin",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Base_SD (VMin deg) MinClass n -\u003e Base_SD deg DomClass n -\u003e Base_SD deg DomClass (Su n)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Base_SD",
        "fct-type": "function",
        "title": "Cons_Vmin"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Cons_Vmin",
        "normalized": "Base_SD(VMin a)MinClass b-\u003eBase_SD a DomClass b-\u003eBase_SD a DomClass(Su b)",
        "package": "HarmTrace",
        "partial": "Cons Vmin",
        "signature": "Base_SD(VMin deg)MinClass n-\u003eBase_SD deg DomClass n-\u003eBase_SD deg DomClass(Su n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:D_1",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SDom mode -\u003e Dom mode -\u003e Dom mode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Dom",
        "fct-type": "function",
        "title": "D_1"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "D_1",
        "normalized": "SDom a-\u003eDom a-\u003eDom a",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SDom mode-\u003eDom mode-\u003eDom mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:D_2",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD mode V DomClass -\u003e Dom mode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Dom",
        "fct-type": "function",
        "title": "D_2"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "D_2",
        "normalized": "SD a V DomClass-\u003eDom a",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SD mode V DomClass-\u003eDom mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:D_24_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "D_24_bor (SD MajMode VII MinClass)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#DMajBorrow",
        "fct-type": "function",
        "title": "D_24_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "D_24_bor",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:D_3",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD mode V MajClass -\u003e Dom mode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Dom",
        "fct-type": "function",
        "title": "D_3"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "D_3",
        "normalized": "SD a V MajClass-\u003eDom a",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SD mode V MajClass-\u003eDom mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:D_4",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MajMode VII MinClass -\u003e Dom MajMode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Dom",
        "fct-type": "function",
        "title": "D_4"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "D_4",
        "normalized": "SD MajMode VII MinClass-\u003eDom MajMode",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SD MajMode VII MinClass-\u003eDom MajMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:D_8_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "DMinBorrow -\u003e Dom MajMode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Dom",
        "fct-type": "function",
        "title": "D_8_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "D_8_bor",
        "normalized": "DMinBorrow-\u003eDom MajMode",
        "package": "HarmTrace",
        "partial": "",
        "signature": "DMinBorrow-\u003eDom MajMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Dim_Chord_Trns",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Surface_Chord (MinThird deg) DimClass n -\u003e Surface_Chord deg DimClass (Su n)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Surface_Chord",
        "fct-type": "function",
        "title": "Dim_Chord_Trns"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Dim_Chord_Trns",
        "normalized": "Surface_Chord(MinThird a)DimClass b-\u003eSurface_Chord a DimClass(Su b)",
        "package": "HarmTrace",
        "partial": "Dim Chord Trns",
        "signature": "Surface_Chord(MinThird deg)DimClass n-\u003eSurface_Chord deg DimClass(Su n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Dm_24_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Dm_24_bor (SD MinMode VIIb MajClass)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#DMinBorrow",
        "fct-type": "function",
        "title": "Dm_24_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Dm_24_bor",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Dm_4",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MinMode VIIb MajClass -\u003e Dom MinMode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Dom",
        "fct-type": "function",
        "title": "Dm_4"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Dm_4",
        "normalized": "SD MinMode VIIb MajClass-\u003eDom MinMode",
        "package": "HarmTrace",
        "partial": "Dm",
        "signature": "SD MinMode VIIb MajClass-\u003eDom MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Dm_8_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "DMajBorrow -\u003e Dom MinMode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Dom",
        "fct-type": "function",
        "title": "Dm_8_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Dm_8_bor",
        "normalized": "DMajBorrow-\u003eDom MinMode",
        "package": "HarmTrace",
        "partial": "Dm",
        "signature": "DMajBorrow-\u003eDom MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Final_Dim_V",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Base_Final (IIbDim deg) DimClass n -\u003e Base_Final deg DomClass (Su n)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Base_Final",
        "fct-type": "function",
        "title": "Final_Dim_V"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Final_Dim_V",
        "normalized": "Base_Final(IIbDim a)DimClass b-\u003eBase_Final a DomClass(Su b)",
        "package": "HarmTrace",
        "partial": "Final Dim",
        "signature": "Base_Final(IIbDim deg)DimClass n-\u003eBase_Final deg DomClass(Su n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Final_Tritone",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Base_Final (Tritone deg) DomClass n -\u003e Base_Final deg DomClass (Su n)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Base_Final",
        "fct-type": "function",
        "title": "Final_Tritone"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Final_Tritone",
        "normalized": "Base_Final(Tritone a)DomClass b-\u003eBase_Final a DomClass(Su b)",
        "package": "HarmTrace",
        "partial": "Final Tritone",
        "signature": "Base_Final(Tritone deg)DomClass n-\u003eBase_Final deg DomClass(Su n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:PD",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Dom mode -\u003e Phrase mode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Phrase",
        "fct-type": "function",
        "title": "PD"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "PD",
        "normalized": "Dom a-\u003ePhrase a",
        "package": "HarmTrace",
        "partial": "PD",
        "signature": "Dom mode-\u003ePhrase mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:PT",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Ton mode -\u003e Phrase mode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Phrase",
        "fct-type": "function",
        "title": "PT"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "PT",
        "normalized": "Ton a-\u003ePhrase a",
        "package": "HarmTrace",
        "partial": "PT",
        "signature": "Ton mode-\u003ePhrase mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Piece",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "forall mode . Piece [Phrase mode]",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Piece",
        "fct-type": "function",
        "title": "Piece"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Piece",
        "normalized": "a b Piece[Phrase b]",
        "package": "HarmTrace",
        "partial": "Piece",
        "signature": "forall mode Piece[Phrase mode]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:S_1_par",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD mode II MinClass -\u003e SDom mode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
        "fct-type": "function",
        "title": "S_1_par"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "S_1_par",
        "normalized": "SD a II MinClass-\u003eSDom a",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SD mode II MinClass-\u003eSDom mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:S_20_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "S_20_bor (SD MajMode IV MajClass)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#SMajBorrow",
        "fct-type": "function",
        "title": "S_20_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "S_20_bor",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:S_2_par",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD mode II DomClass -\u003e Final II MinClass -\u003e SDom mode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
        "fct-type": "function",
        "title": "S_2_par"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "S_2_par",
        "normalized": "SD a II DomClass-\u003eFinal II MinClass-\u003eSDom a",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SD mode II DomClass-\u003eFinal II MinClass-\u003eSDom mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:S_3",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MajMode IV MajClass -\u003e SDom MajMode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
        "fct-type": "function",
        "title": "S_3"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "S_3",
        "normalized": "SD MajMode IV MajClass-\u003eSDom MajMode",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SD MajMode IV MajClass-\u003eSDom MajMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:S_4",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MajMode III MinClass -\u003e Final IV MajClass -\u003e SDom MajMode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
        "fct-type": "function",
        "title": "S_4"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "S_4",
        "normalized": "SD MajMode III MinClass-\u003eFinal IV MajClass-\u003eSDom MajMode",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SD MajMode III MinClass-\u003eFinal IV MajClass-\u003eSDom MajMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:S_5_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SMinBorrow -\u003e SDom MajMode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
        "fct-type": "function",
        "title": "S_5_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "S_5_bor",
        "normalized": "SMinBorrow-\u003eSDom MajMode",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SMinBorrow-\u003eSDom MajMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Sm_20_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Sm_20_bor (SD MinMode IV MinClass)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#SMinBorrow",
        "fct-type": "function",
        "title": "Sm_20_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Sm_20_bor",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Sm_22_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Sm_22_bor (SD MinMode IIb MajClass)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#SMinBorrow",
        "fct-type": "function",
        "title": "Sm_22_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Sm_22_bor",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Sm_3",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MinMode IV MinClass -\u003e SDom MinMode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
        "fct-type": "function",
        "title": "Sm_3"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Sm_3",
        "normalized": "SD MinMode IV MinClass-\u003eSDom MinMode",
        "package": "HarmTrace",
        "partial": "Sm",
        "signature": "SD MinMode IV MinClass-\u003eSDom MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Sm_4",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MinMode IIIb MajClass -\u003e Final IV MinClass -\u003e SDom MinMode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
        "fct-type": "function",
        "title": "Sm_4"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Sm_4",
        "normalized": "SD MinMode IIIb MajClass-\u003eFinal IV MinClass-\u003eSDom MinMode",
        "package": "HarmTrace",
        "partial": "Sm",
        "signature": "SD MinMode IIIb MajClass-\u003eFinal IV MinClass-\u003eSDom MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Sm_5_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SMajBorrow -\u003e SDom MinMode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
        "fct-type": "function",
        "title": "Sm_5_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Sm_5_bor",
        "normalized": "SMajBorrow-\u003eSDom MinMode",
        "package": "HarmTrace",
        "partial": "Sm",
        "signature": "SMajBorrow-\u003eSDom MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Sm_6",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MinMode IIb MajClass -\u003e SDom MinMode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
        "fct-type": "function",
        "title": "Sm_6"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Sm_6",
        "normalized": "SD MinMode IIb MajClass-\u003eSDom MinMode",
        "package": "HarmTrace",
        "partial": "Sm",
        "signature": "SD MinMode IIb MajClass-\u003eSDom MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Surface_Chord",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "ChordToken -\u003e Surface_Chord deg clss (Su n)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Surface_Chord",
        "fct-type": "function",
        "title": "Surface_Chord"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Surface_Chord",
        "normalized": "ChordToken-\u003eSurface_Chord a b(Su c)",
        "package": "HarmTrace",
        "partial": "Surface Chord",
        "signature": "ChordToken-\u003eSurface_Chord deg clss(Su n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:T_1",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Final I MajClass -\u003e Ton MajMode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Ton",
        "fct-type": "function",
        "title": "T_1"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "T_1",
        "normalized": "Final I MajClass-\u003eTon MajMode",
        "package": "HarmTrace",
        "partial": "",
        "signature": "Final I MajClass-\u003eTon MajMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:T_2",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Final I MajClass -\u003e Final IV MajClass -\u003e Final I MajClass -\u003e Ton MajMode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Ton",
        "fct-type": "function",
        "title": "T_2"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "T_2",
        "normalized": "Final I MajClass-\u003eFinal IV MajClass-\u003eFinal I MajClass-\u003eTon MajMode",
        "package": "HarmTrace",
        "partial": "",
        "signature": "Final I MajClass-\u003eFinal IV MajClass-\u003eFinal I MajClass-\u003eTon MajMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:T_21_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "T_21_bor (SD MajMode I MajClass)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#TMajBorrow",
        "fct-type": "function",
        "title": "T_21_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "T_21_bor",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:T_23_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "T_23_bor (SD MajMode III MinClass)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#TMajBorrow",
        "fct-type": "function",
        "title": "T_23_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "T_23_bor",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:T_3_par",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Final III MinClass -\u003e Ton MajMode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Ton",
        "fct-type": "function",
        "title": "T_3_par"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "T_3_par",
        "normalized": "Final III MinClass-\u003eTon MajMode",
        "package": "HarmTrace",
        "partial": "",
        "signature": "Final III MinClass-\u003eTon MajMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:T_6_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "TMinBorrow -\u003e Ton MajMode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Ton",
        "fct-type": "function",
        "title": "T_6_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "T_6_bor",
        "normalized": "TMinBorrow-\u003eTon MajMode",
        "package": "HarmTrace",
        "partial": "",
        "signature": "TMinBorrow-\u003eTon MajMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Tm_1",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MinMode I MinClass -\u003e Ton MinMode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Ton",
        "fct-type": "function",
        "title": "Tm_1"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Tm_1",
        "normalized": "SD MinMode I MinClass-\u003eTon MinMode",
        "package": "HarmTrace",
        "partial": "Tm",
        "signature": "SD MinMode I MinClass-\u003eTon MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Tm_2",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Final I MinClass -\u003e Final IV MinClass -\u003e Final I MinClass -\u003e Ton MinMode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Ton",
        "fct-type": "function",
        "title": "Tm_2"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Tm_2",
        "normalized": "Final I MinClass-\u003eFinal IV MinClass-\u003eFinal I MinClass-\u003eTon MinMode",
        "package": "HarmTrace",
        "partial": "Tm",
        "signature": "Final I MinClass-\u003eFinal IV MinClass-\u003eFinal I MinClass-\u003eTon MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Tm_21_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Tm_21_bor (SD MinMode I MinClass)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#TMinBorrow",
        "fct-type": "function",
        "title": "Tm_21_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Tm_21_bor",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Tm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Tm_23_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Tm_23_bor (SD MinMode IIIb MajClass)",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#TMinBorrow",
        "fct-type": "function",
        "title": "Tm_23_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Tm_23_bor",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Tm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Tm_3_par",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Final IIIb MajClass -\u003e Ton MinMode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Ton",
        "fct-type": "function",
        "title": "Tm_3_par"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Tm_3_par",
        "normalized": "Final IIIb MajClass-\u003eTon MinMode",
        "package": "HarmTrace",
        "partial": "Tm",
        "signature": "Final IIIb MajClass-\u003eTon MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Tm_6_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "TMajBorrow -\u003e Ton MinMode",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#Ton",
        "fct-type": "function",
        "title": "Tm_6_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "Tm_6_bor",
        "normalized": "TMajBorrow-\u003eTon MinMode",
        "package": "HarmTrace",
        "partial": "Tm",
        "signature": "TMajBorrow-\u003eTon MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:allTypes",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "[Name]",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#allTypes",
        "fct-type": "function",
        "title": "allTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "allTypes",
        "normalized": "[Name]",
        "package": "HarmTrace",
        "partial": "Types",
        "signature": "[Name]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:toClass",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "clss -\u003e ClassType",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#toClass",
        "fct-type": "method",
        "title": "toClass"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "toClass",
        "normalized": "a-\u003eClassType",
        "package": "HarmTrace",
        "partial": "Class",
        "signature": "clss-\u003eClassType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:toDegree",
      "description": {
        "fct-module": "HarmTrace.Models.Jazz.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "deg -\u003e ScaleDegree",
        "fct-source": "src/HarmTrace-Models-Jazz-Model.html#toDegree",
        "fct-type": "method",
        "title": "toDegree"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Jazz Model",
        "module": "HarmTrace.Models.Jazz.Model",
        "name": "toDegree",
        "normalized": "a-\u003eScaleDegree",
        "package": "HarmTrace",
        "partial": "Degree",
        "signature": "deg-\u003eScaleDegree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Models.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: All the models\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HarmTrace.Models.Models",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Models-Models.html",
        "fct-type": "module",
        "title": "Models"
      },
      "index": {
        "description": "Summary All the models",
        "hierarchy": "HarmTrace Models Models",
        "module": "HarmTrace.Models.Models",
        "name": "Models",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Models",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Models.html#t:Grammar",
      "description": {
        "fct-module": "HarmTrace.Models.Models",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Models.html#Grammar",
        "fct-type": "data",
        "title": "Grammar"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Models",
        "module": "HarmTrace.Models.Models",
        "name": "Grammar",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Grammar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Models.html#t:GrammarEx",
      "description": {
        "fct-module": "HarmTrace.Models.Models",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Models.html#GrammarEx",
        "fct-type": "data",
        "title": "GrammarEx"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Models",
        "module": "HarmTrace.Models.Models",
        "name": "GrammarEx",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Grammar Ex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Models.html#v:GrammarEx",
      "description": {
        "fct-module": "HarmTrace.Models.Models",
        "fct-package": "HarmTrace",
        "fct-signature": "Grammar g -\u003e GrammarEx",
        "fct-source": "src/HarmTrace-Models-Models.html#GrammarEx",
        "fct-type": "function",
        "title": "GrammarEx"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Models",
        "module": "HarmTrace.Models.Models",
        "name": "GrammarEx",
        "normalized": "Grammar a-\u003eGrammarEx",
        "package": "HarmTrace",
        "partial": "Grammar Ex",
        "signature": "Grammar g-\u003eGrammarEx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Models.html#v:Jazz",
      "description": {
        "fct-module": "HarmTrace.Models.Models",
        "fct-package": "HarmTrace",
        "fct-signature": "Grammar Piece",
        "fct-source": "src/HarmTrace-Models-Models.html#Grammar",
        "fct-type": "function",
        "title": "Jazz"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Models",
        "module": "HarmTrace.Models.Models",
        "name": "Jazz",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Jazz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Models.html#v:Pop",
      "description": {
        "fct-module": "HarmTrace.Models.Models",
        "fct-package": "HarmTrace",
        "fct-signature": "Grammar Piece",
        "fct-source": "src/HarmTrace-Models-Models.html#Grammar",
        "fct-type": "function",
        "title": "Pop"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Models",
        "module": "HarmTrace.Models.Models",
        "name": "Pop",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Pop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Semi-generic parser for chords\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HarmTrace.Models.Parser",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Models-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "Summary Semi-generic parser for chords",
        "hierarchy": "HarmTrace Models Parser",
        "module": "HarmTrace.Models.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Parser.html#t:PMusic",
      "description": {
        "fct-descr": "\u003cp\u003ea type synoniome for a harmonic analysis of a piece of music\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Models.Parser",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Parser.html#PMusic",
        "fct-type": "type",
        "title": "PMusic"
      },
      "index": {
        "description": "type synoniome for harmonic analysis of piece of music",
        "hierarchy": "HarmTrace Models Parser",
        "module": "HarmTrace.Models.Parser",
        "name": "PMusic",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "PMusic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Parser.html#t:ParseG",
      "description": {
        "fct-module": "HarmTrace.Models.Parser",
        "fct-package": "HarmTrace",
        "fct-signature": "class",
        "fct-source": "src/HarmTrace-Models-Parser.html#ParseG",
        "fct-type": "class",
        "title": "ParseG"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Parser",
        "module": "HarmTrace.Models.Parser",
        "name": "ParseG",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Parser.html#v:parseG",
      "description": {
        "fct-module": "HarmTrace.Models.Parser",
        "fct-package": "HarmTrace",
        "fct-signature": "PMusic a",
        "fct-source": "src/HarmTrace-Models-Parser.html#parseG",
        "fct-type": "method",
        "title": "parseG"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Parser",
        "module": "HarmTrace.Models.Parser",
        "name": "parseG",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Parser.html#v:parseGdefault",
      "description": {
        "fct-descr": "\u003cp\u003edefault generic parser\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Models.Parser",
        "fct-package": "HarmTrace",
        "fct-signature": "PMusic a",
        "fct-source": "src/HarmTrace-Models-Parser.html#parseGdefault",
        "fct-type": "function",
        "title": "parseGdefault"
      },
      "index": {
        "description": "default generic parser",
        "hierarchy": "HarmTrace Models Parser",
        "module": "HarmTrace.Models.Parser",
        "name": "parseGdefault",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Gdefault",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:DMajBorrow_D_24_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#DMajBorrow_D_24_bor_",
        "fct-type": "data",
        "title": "DMajBorrow_D_24_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "DMajBorrow_D_24_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "DMaj Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:DMinBorrow_Dm_24_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#DMinBorrow_Dm_24_bor_",
        "fct-type": "data",
        "title": "DMinBorrow_Dm_24_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "DMinBorrow_Dm_24_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "DMin Borrow Dm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Dom_D_1_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#Dom_D_1_",
        "fct-type": "data",
        "title": "Dom_D_1_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "Dom_D_1_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Dom_D_2_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#Dom_D_2_",
        "fct-type": "data",
        "title": "Dom_D_2_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "Dom_D_2_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Dom_D_3_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#Dom_D_3_",
        "fct-type": "data",
        "title": "Dom_D_3_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "Dom_D_3_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Dom_D_4_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#Dom_D_4_",
        "fct-type": "data",
        "title": "Dom_D_4_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "Dom_D_4_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Dom_D_8_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#Dom_D_8_bor_",
        "fct-type": "data",
        "title": "Dom_D_8_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "Dom_D_8_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Dom_Dm_4_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#Dom_Dm_4_",
        "fct-type": "data",
        "title": "Dom_Dm_4_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "Dom_Dm_4_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dom Dm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Dom_Dm_8_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#Dom_Dm_8_bor_",
        "fct-type": "data",
        "title": "Dom_Dm_8_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "Dom_Dm_8_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dom Dm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:GetDegree",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "class",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#GetDegree",
        "fct-type": "class",
        "title": "GetDegree"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "GetDegree",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Get Degree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Phrase_PD_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#Phrase_PD_",
        "fct-type": "data",
        "title": "Phrase_PD_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "Phrase_PD_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Phrase PD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Phrase_PT_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#Phrase_PT_",
        "fct-type": "data",
        "title": "Phrase_PT_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "Phrase_PT_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Phrase PT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepDMajBorrow_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#RepDMajBorrow_",
        "fct-type": "type",
        "title": "RepDMajBorrow_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "RepDMajBorrow_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep DMaj Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepDMinBorrow_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#RepDMinBorrow_",
        "fct-type": "type",
        "title": "RepDMinBorrow_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "RepDMinBorrow_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep DMin Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepDom_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#RepDom_",
        "fct-type": "type",
        "title": "RepDom_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "RepDom_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep Dom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepPhrase_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#RepPhrase_",
        "fct-type": "type",
        "title": "RepPhrase_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "RepPhrase_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep Phrase",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepSDom_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#RepSDom_",
        "fct-type": "type",
        "title": "RepSDom_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "RepSDom_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep SDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepSMajBorrow_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#RepSMajBorrow_",
        "fct-type": "type",
        "title": "RepSMajBorrow_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "RepSMajBorrow_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep SMaj Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepSMinBorrow_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#RepSMinBorrow_",
        "fct-type": "type",
        "title": "RepSMinBorrow_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "RepSMinBorrow_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep SMin Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepTMajBorrow_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#RepTMajBorrow_",
        "fct-type": "type",
        "title": "RepTMajBorrow_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "RepTMajBorrow_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep TMaj Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepTMinBorrow_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#RepTMinBorrow_",
        "fct-type": "type",
        "title": "RepTMinBorrow_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "RepTMinBorrow_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep TMin Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepTon_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#RepTon_",
        "fct-type": "type",
        "title": "RepTon_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "RepTon_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Rep Ton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_S_1_par_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#SDom_S_1_par_",
        "fct-type": "data",
        "title": "SDom_S_1_par_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "SDom_S_1_par_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_S_2_par_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#SDom_S_2_par_",
        "fct-type": "data",
        "title": "SDom_S_2_par_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "SDom_S_2_par_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_S_3_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#SDom_S_3_",
        "fct-type": "data",
        "title": "SDom_S_3_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "SDom_S_3_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_S_3_bls_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#SDom_S_3_bls_",
        "fct-type": "data",
        "title": "SDom_S_3_bls_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "SDom_S_3_bls_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_S_4_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#SDom_S_4_",
        "fct-type": "data",
        "title": "SDom_S_4_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "SDom_S_4_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_S_5_par_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#SDom_S_5_par_",
        "fct-type": "data",
        "title": "SDom_S_5_par_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "SDom_S_5_par_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_S_7_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#SDom_S_7_",
        "fct-type": "data",
        "title": "SDom_S_7_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "SDom_S_7_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_S_9_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#SDom_S_9_bor_",
        "fct-type": "data",
        "title": "SDom_S_9_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "SDom_S_9_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_Sm_3_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#SDom_Sm_3_",
        "fct-type": "data",
        "title": "SDom_Sm_3_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "SDom_Sm_3_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_Sm_4_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#SDom_Sm_4_",
        "fct-type": "data",
        "title": "SDom_Sm_4_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "SDom_Sm_4_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_Sm_5_par_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#SDom_Sm_5_par_",
        "fct-type": "data",
        "title": "SDom_Sm_5_par_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "SDom_Sm_5_par_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_Sm_6_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#SDom_Sm_6_",
        "fct-type": "data",
        "title": "SDom_Sm_6_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "SDom_Sm_6_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_Sm_7_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#SDom_Sm_7_",
        "fct-type": "data",
        "title": "SDom_Sm_7_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "SDom_Sm_7_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_Sm_9_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#SDom_Sm_9_bor_",
        "fct-type": "data",
        "title": "SDom_Sm_9_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "SDom_Sm_9_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SMajBorrow_S_20_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#SMajBorrow_S_20_bor_",
        "fct-type": "data",
        "title": "SMajBorrow_S_20_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "SMajBorrow_S_20_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SMaj Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SMinBorrow_Sm_20_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#SMinBorrow_Sm_20_bor_",
        "fct-type": "data",
        "title": "SMinBorrow_Sm_20_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "SMinBorrow_Sm_20_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SMin Borrow Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SMinBorrow_Sm_22_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#SMinBorrow_Sm_22_bor_",
        "fct-type": "data",
        "title": "SMinBorrow_Sm_22_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "SMinBorrow_Sm_22_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SMin Borrow Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:TMajBorrow_T_21_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#TMajBorrow_T_21_bor_",
        "fct-type": "data",
        "title": "TMajBorrow_T_21_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "TMajBorrow_T_21_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "TMaj Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:TMinBorrow_Tm_21_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#TMinBorrow_Tm_21_bor_",
        "fct-type": "data",
        "title": "TMinBorrow_Tm_21_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "TMinBorrow_Tm_21_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "TMin Borrow Tm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Ton_T_0_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#Ton_T_0_",
        "fct-type": "data",
        "title": "Ton_T_0_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "Ton_T_0_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Ton_T_1_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#Ton_T_1_",
        "fct-type": "data",
        "title": "Ton_T_1_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "Ton_T_1_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Ton_T_4_bls_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#Ton_T_4_bls_",
        "fct-type": "data",
        "title": "Ton_T_4_bls_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "Ton_T_4_bls_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Ton_T_6_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#Ton_T_6_bor_",
        "fct-type": "data",
        "title": "Ton_T_6_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "Ton_T_6_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Ton_Tm_1_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#Ton_Tm_1_",
        "fct-type": "data",
        "title": "Ton_Tm_1_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "Ton_Tm_1_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ton Tm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Ton_Tm_6_bor_",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#Ton_Tm_6_bor_",
        "fct-type": "data",
        "title": "Ton_Tm_6_bor_"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "Ton_Tm_6_bor_",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ton Tm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#v:getDeg",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "a -\u003e (ScaleDegree, Int)",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#getDeg",
        "fct-type": "method",
        "title": "getDeg"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "getDeg",
        "normalized": "a-\u003e(ScaleDegree,Int)",
        "package": "HarmTrace",
        "partial": "Deg",
        "signature": "a-\u003e(ScaleDegree,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#v:pChord",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "ScaleDegree -\u003e ClassType -\u003e PMusic (Surface_Chord deg clss (Su n))",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#pChord",
        "fct-type": "function",
        "title": "pChord"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "pChord",
        "normalized": "ScaleDegree-\u003eClassType-\u003ePMusic(Surface_Chord a b(Su c))",
        "package": "HarmTrace",
        "partial": "Chord",
        "signature": "ScaleDegree-\u003eClassType-\u003ePMusic(Surface_Chord deg clss(Su n))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#v:toGTree",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "(Int -\u003e ScaleDegree -\u003e Trans) -\u003e Int -\u003e a -\u003e [Tree HAn]",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#toGTree",
        "fct-type": "function",
        "title": "toGTree"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "toGTree",
        "normalized": "(Int-\u003eScaleDegree-\u003eTrans)-\u003eInt-\u003ea-\u003e[Tree HAn]",
        "package": "HarmTrace",
        "partial": "GTree",
        "signature": "(Int-\u003eScaleDegree-\u003eTrans)-\u003eInt-\u003ea-\u003e[Tree HAn]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#v:toGTreeSplit",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "(Int -\u003e ScaleDegree -\u003e Prep) -\u003e b -\u003e a -\u003e [Tree HAn]",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#toGTreeSplit",
        "fct-type": "function",
        "title": "toGTreeSplit"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "toGTreeSplit",
        "normalized": "(Int-\u003eScaleDegree-\u003ePrep)-\u003ea-\u003eb-\u003e[Tree HAn]",
        "package": "HarmTrace",
        "partial": "GTree Split",
        "signature": "(Int-\u003eScaleDegree-\u003ePrep)-\u003eb-\u003ea-\u003e[Tree HAn]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#v:toSDVal",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "a -\u003e ScaleDegree",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#toSDVal",
        "fct-type": "function",
        "title": "toSDVal"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "toSDVal",
        "normalized": "a-\u003eScaleDegree",
        "package": "HarmTrace",
        "partial": "SDVal",
        "signature": "a-\u003eScaleDegree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#v:toTransSDVal",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Instances",
        "fct-package": "HarmTrace",
        "fct-signature": "Int -\u003e a -\u003e ScaleDegree",
        "fct-source": "src/HarmTrace-Models-Pop-Instances.html#toTransSDVal",
        "fct-type": "function",
        "title": "toTransSDVal"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Instances",
        "module": "HarmTrace.Models.Pop.Instances",
        "name": "toTransSDVal",
        "normalized": "Int-\u003ea-\u003eScaleDegree",
        "package": "HarmTrace",
        "partial": "Trans SDVal",
        "signature": "Int-\u003ea-\u003eScaleDegree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Main.html#",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Main",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Models-Pop-Main.html",
        "fct-type": "module",
        "title": "Main"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Main",
        "module": "HarmTrace.Models.Pop.Main",
        "name": "Main",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Main",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Main.html#v:pPop",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Main",
        "fct-package": "HarmTrace",
        "fct-signature": "Key -\u003e PMusic [Piece]",
        "fct-source": "src/HarmTrace-Models-Pop-Main.html#pPop",
        "fct-type": "function",
        "title": "pPop"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Main",
        "module": "HarmTrace.Models.Pop.Main",
        "name": "pPop",
        "normalized": "Key-\u003ePMusic[Piece]",
        "package": "HarmTrace",
        "partial": "Pop",
        "signature": "Key-\u003ePMusic[Piece]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html",
        "fct-type": "module",
        "title": "Model"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Model",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Base_Final",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Base_Final",
        "fct-type": "data",
        "title": "Base_Final"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Base_Final",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Base Final",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Base_SD",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Base_SD",
        "fct-type": "data",
        "title": "Base_SD"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Base_SD",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Base SD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:DMajBorrow",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#DMajBorrow",
        "fct-type": "data",
        "title": "DMajBorrow"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "DMajBorrow",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "DMaj Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:DMinBorrow",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#DMinBorrow",
        "fct-type": "data",
        "title": "DMinBorrow"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "DMinBorrow",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "DMin Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:DiatV",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "DiatV",
        "fct-type": "function",
        "title": "DiatV"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "DiatV",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Diat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:DiatVM",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "DiatVM",
        "fct-type": "function",
        "title": "DiatVM"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "DiatVM",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Diat VM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:DimClass",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#DimClass",
        "fct-type": "data",
        "title": "DimClass"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "DimClass",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dim Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Dom",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Dom",
        "fct-type": "data",
        "title": "Dom"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Dom",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:DomClass",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#DomClass",
        "fct-type": "data",
        "title": "DomClass"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "DomClass",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dom Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Final",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Final",
        "fct-type": "type",
        "title": "Final"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Final",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Final",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:FinalDimTrans",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#FinalDimTrans",
        "fct-type": "type",
        "title": "FinalDimTrans"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "FinalDimTrans",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Final Dim Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:I",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#I",
        "fct-type": "data",
        "title": "I"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "I",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:II",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#II",
        "fct-type": "data",
        "title": "II"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "II",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "II",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:III",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#III",
        "fct-type": "data",
        "title": "III"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "III",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "III",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:IIIb",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#IIIb",
        "fct-type": "data",
        "title": "IIIb"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "IIIb",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "IIIb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:IIIs",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#IIIs",
        "fct-type": "data",
        "title": "IIIs"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "IIIs",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "IIIs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:IIb",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#IIb",
        "fct-type": "data",
        "title": "IIb"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "IIb",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "IIb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:IIbDim",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "IIbDim",
        "fct-type": "function",
        "title": "IIbDim"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "IIbDim",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "IIb Dim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:IIs",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#IIs",
        "fct-type": "data",
        "title": "IIs"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "IIs",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "IIs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:IV",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#IV",
        "fct-type": "data",
        "title": "IV"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "IV",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "IV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:IVb",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#IVb",
        "fct-type": "data",
        "title": "IVb"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "IVb",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "IVb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:IVs",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#IVs",
        "fct-type": "data",
        "title": "IVs"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "IVs",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "IVs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Ib",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Ib",
        "fct-type": "data",
        "title": "Ib"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Ib",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Imp",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Imp",
        "fct-type": "data",
        "title": "Imp"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Imp",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Imp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Is",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Is",
        "fct-type": "data",
        "title": "Is"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Is",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Is",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:MajClass",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#MajClass",
        "fct-type": "data",
        "title": "MajClass"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "MajClass",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Maj Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:MajMode",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#MajMode",
        "fct-type": "data",
        "title": "MajMode"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "MajMode",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Maj Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:MinClass",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#MinClass",
        "fct-type": "data",
        "title": "MinClass"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "MinClass",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Min Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:MinMode",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#MinMode",
        "fct-type": "data",
        "title": "MinMode"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "MinMode",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Min Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:MinThird",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "MinThird",
        "fct-type": "function",
        "title": "MinThird"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "MinThird",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Min Third",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Phrase",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Phrase",
        "fct-type": "data",
        "title": "Phrase"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Phrase",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Phrase",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Piece",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Piece",
        "fct-type": "data",
        "title": "Piece"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Piece",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Piece",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:SD",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SD",
        "fct-type": "type",
        "title": "SD"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "SD",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:SDom",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SDom",
        "fct-type": "data",
        "title": "SDom"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "SDom",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:SMajBorrow",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SMajBorrow",
        "fct-type": "data",
        "title": "SMajBorrow"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "SMajBorrow",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SMaj Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:SMinBorrow",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SMinBorrow",
        "fct-type": "data",
        "title": "SMinBorrow"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "SMinBorrow",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "SMin Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Surface_Chord",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Surface_Chord",
        "fct-type": "data",
        "title": "Surface_Chord"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Surface_Chord",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Surface Chord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:TMajBorrow",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#TMajBorrow",
        "fct-type": "data",
        "title": "TMajBorrow"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "TMajBorrow",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "TMaj Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:TMinBorrow",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#TMinBorrow",
        "fct-type": "data",
        "title": "TMinBorrow"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "TMinBorrow",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "TMin Borrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:ToClass",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "class",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#ToClass",
        "fct-type": "class",
        "title": "ToClass"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "ToClass",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "To Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:ToDegree",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "class",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#ToDegree",
        "fct-type": "class",
        "title": "ToDegree"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "ToDegree",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "To Degree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Ton",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Ton",
        "fct-type": "data",
        "title": "Ton"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Ton",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:TritMinVSub",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#TritMinVSub",
        "fct-type": "type",
        "title": "TritMinVSub"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "TritMinVSub",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Trit Min VSub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Tritone",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Tritone",
        "fct-type": "function",
        "title": "Tritone"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Tritone",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Tritone",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:V",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#V",
        "fct-type": "data",
        "title": "V"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "V",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:VDom",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "VDom",
        "fct-type": "function",
        "title": "VDom"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "VDom",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "VDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:VI",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#VI",
        "fct-type": "data",
        "title": "VI"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "VI",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "VI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:VII",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#VII",
        "fct-type": "data",
        "title": "VII"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "VII",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "VII",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:VIIb",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#VIIb",
        "fct-type": "data",
        "title": "VIIb"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "VIIb",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "VIIb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:VIIs",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#VIIs",
        "fct-type": "data",
        "title": "VIIs"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "VIIs",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "VIIs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:VIb",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#VIb",
        "fct-type": "data",
        "title": "VIb"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "VIb",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "VIb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:VIs",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#VIs",
        "fct-type": "data",
        "title": "VIs"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "VIs",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "VIs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:VMin",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "VMin",
        "fct-type": "function",
        "title": "VMin"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "VMin",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "VMin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Vb",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Vb",
        "fct-type": "data",
        "title": "Vb"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Vb",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Vb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Vs",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Vs",
        "fct-type": "data",
        "title": "Vs"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Vs",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Vs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Base_Final",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "FinalDimTrans deg clss -\u003e Base_Final deg clss (Su n)",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Base_Final",
        "fct-type": "function",
        "title": "Base_Final"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Base_Final",
        "normalized": "FinalDimTrans a b-\u003eBase_Final a b(Su c)",
        "package": "HarmTrace",
        "partial": "Base Final",
        "signature": "FinalDimTrans deg clss-\u003eBase_Final deg clss(Su n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Base_SD",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "TritMinVSub deg clss -\u003e Base_SD deg clss (Su n)",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Base_SD",
        "fct-type": "function",
        "title": "Base_SD"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Base_SD",
        "normalized": "TritMinVSub a b-\u003eBase_SD a b(Su c)",
        "package": "HarmTrace",
        "partial": "Base SD",
        "signature": "TritMinVSub deg clss-\u003eBase_SD deg clss(Su n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Cons_Diat",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Base_SD (DiatV deg) MinClass n -\u003e Base_SD deg MinClass n -\u003e Base_SD deg MinClass (Su n)",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Base_SD",
        "fct-type": "function",
        "title": "Cons_Diat"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Cons_Diat",
        "normalized": "Base_SD(DiatV a)MinClass b-\u003eBase_SD a MinClass b-\u003eBase_SD a MinClass(Su b)",
        "package": "HarmTrace",
        "partial": "Cons Diat",
        "signature": "Base_SD(DiatV deg)MinClass n-\u003eBase_SD deg MinClass n-\u003eBase_SD deg MinClass(Su n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Cons_DiatM",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Base_SD (DiatVM deg) MajClass n -\u003e Base_SD deg MajClass n -\u003e Base_SD deg MajClass (Su n)",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Base_SD",
        "fct-type": "function",
        "title": "Cons_DiatM"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Cons_DiatM",
        "normalized": "Base_SD(DiatVM a)MajClass b-\u003eBase_SD a MajClass b-\u003eBase_SD a MajClass(Su b)",
        "package": "HarmTrace",
        "partial": "Cons Diat",
        "signature": "Base_SD(DiatVM deg)MajClass n-\u003eBase_SD deg MajClass n-\u003eBase_SD deg MajClass(Su n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Cons_DiatM-39-",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Base_SD (DiatVM deg) MajClass n -\u003e Base_SD deg MinClass n -\u003e Base_SD deg MinClass (Su n)",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Base_SD",
        "fct-type": "function",
        "title": "Cons_DiatM'"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Cons_DiatM'",
        "normalized": "Base_SD(DiatVM a)MajClass b-\u003eBase_SD a MinClass b-\u003eBase_SD a MinClass(Su b)",
        "package": "HarmTrace",
        "partial": "Cons Diat M'",
        "signature": "Base_SD(DiatVM deg)MajClass n-\u003eBase_SD deg MinClass n-\u003eBase_SD deg MinClass(Su n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Cons_Vdom",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Base_SD (VDom deg) DomClass n -\u003e Base_SD deg clss n -\u003e Base_SD deg clss (Su n)",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Base_SD",
        "fct-type": "function",
        "title": "Cons_Vdom"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Cons_Vdom",
        "normalized": "Base_SD(VDom a)DomClass b-\u003eBase_SD a c b-\u003eBase_SD a c(Su b)",
        "package": "HarmTrace",
        "partial": "Cons Vdom",
        "signature": "Base_SD(VDom deg)DomClass n-\u003eBase_SD deg clss n-\u003eBase_SD deg clss(Su n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Cons_Vmin",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Base_SD (VMin deg) MinClass n -\u003e Base_SD deg DomClass n -\u003e Base_SD deg DomClass (Su n)",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Base_SD",
        "fct-type": "function",
        "title": "Cons_Vmin"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Cons_Vmin",
        "normalized": "Base_SD(VMin a)MinClass b-\u003eBase_SD a DomClass b-\u003eBase_SD a DomClass(Su b)",
        "package": "HarmTrace",
        "partial": "Cons Vmin",
        "signature": "Base_SD(VMin deg)MinClass n-\u003eBase_SD deg DomClass n-\u003eBase_SD deg DomClass(Su n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:D_1",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SDom mode -\u003e Dom mode -\u003e Dom mode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Dom",
        "fct-type": "function",
        "title": "D_1"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "D_1",
        "normalized": "SDom a-\u003eDom a-\u003eDom a",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SDom mode-\u003eDom mode-\u003eDom mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:D_2",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD mode V DomClass -\u003e Dom mode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Dom",
        "fct-type": "function",
        "title": "D_2"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "D_2",
        "normalized": "SD a V DomClass-\u003eDom a",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SD mode V DomClass-\u003eDom mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:D_24_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "D_24_bor (SD MajMode VII MinClass)",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#DMajBorrow",
        "fct-type": "function",
        "title": "D_24_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "D_24_bor",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:D_3",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD mode V MajClass -\u003e Dom mode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Dom",
        "fct-type": "function",
        "title": "D_3"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "D_3",
        "normalized": "SD a V MajClass-\u003eDom a",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SD mode V MajClass-\u003eDom mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:D_4",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MajMode VII MinClass -\u003e Dom MajMode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Dom",
        "fct-type": "function",
        "title": "D_4"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "D_4",
        "normalized": "SD MajMode VII MinClass-\u003eDom MajMode",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SD MajMode VII MinClass-\u003eDom MajMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:D_8_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "DMinBorrow -\u003e Dom MajMode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Dom",
        "fct-type": "function",
        "title": "D_8_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "D_8_bor",
        "normalized": "DMinBorrow-\u003eDom MajMode",
        "package": "HarmTrace",
        "partial": "",
        "signature": "DMinBorrow-\u003eDom MajMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Dm_24_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Dm_24_bor (SD MinMode VIIb MajClass)",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#DMinBorrow",
        "fct-type": "function",
        "title": "Dm_24_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Dm_24_bor",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Dm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Dm_4",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MinMode VIIb MajClass -\u003e Dom MinMode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Dom",
        "fct-type": "function",
        "title": "Dm_4"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Dm_4",
        "normalized": "SD MinMode VIIb MajClass-\u003eDom MinMode",
        "package": "HarmTrace",
        "partial": "Dm",
        "signature": "SD MinMode VIIb MajClass-\u003eDom MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Dm_8_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "DMajBorrow -\u003e Dom MinMode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Dom",
        "fct-type": "function",
        "title": "Dm_8_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Dm_8_bor",
        "normalized": "DMajBorrow-\u003eDom MinMode",
        "package": "HarmTrace",
        "partial": "Dm",
        "signature": "DMajBorrow-\u003eDom MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:PD",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Dom mode -\u003e Phrase mode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Phrase",
        "fct-type": "function",
        "title": "PD"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "PD",
        "normalized": "Dom a-\u003ePhrase a",
        "package": "HarmTrace",
        "partial": "PD",
        "signature": "Dom mode-\u003ePhrase mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:PT",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Ton mode -\u003e Phrase mode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Phrase",
        "fct-type": "function",
        "title": "PT"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "PT",
        "normalized": "Ton a-\u003ePhrase a",
        "package": "HarmTrace",
        "partial": "PT",
        "signature": "Ton mode-\u003ePhrase mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Piece",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "forall mode . Piece [Phrase mode]",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Piece",
        "fct-type": "function",
        "title": "Piece"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Piece",
        "normalized": "a b Piece[Phrase b]",
        "package": "HarmTrace",
        "partial": "Piece",
        "signature": "forall mode Piece[Phrase mode]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:S_1_par",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD mode II MinClass -\u003e SDom mode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SDom",
        "fct-type": "function",
        "title": "S_1_par"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "S_1_par",
        "normalized": "SD a II MinClass-\u003eSDom a",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SD mode II MinClass-\u003eSDom mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:S_20_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "S_20_bor (SD MajMode IV MajClass)",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SMajBorrow",
        "fct-type": "function",
        "title": "S_20_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "S_20_bor",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:S_2_par",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD mode II DomClass -\u003e Final II MinClass -\u003e SDom mode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SDom",
        "fct-type": "function",
        "title": "S_2_par"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "S_2_par",
        "normalized": "SD a II DomClass-\u003eFinal II MinClass-\u003eSDom a",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SD mode II DomClass-\u003eFinal II MinClass-\u003eSDom mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:S_3",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MajMode IV MajClass -\u003e SDom MajMode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SDom",
        "fct-type": "function",
        "title": "S_3"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "S_3",
        "normalized": "SD MajMode IV MajClass-\u003eSDom MajMode",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SD MajMode IV MajClass-\u003eSDom MajMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:S_3_bls",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Final IV DomClass -\u003e SDom mode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SDom",
        "fct-type": "function",
        "title": "S_3_bls"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "S_3_bls",
        "normalized": "Final IV DomClass-\u003eSDom a",
        "package": "HarmTrace",
        "partial": "",
        "signature": "Final IV DomClass-\u003eSDom mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:S_4",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MajMode III MinClass -\u003e Final IV MajClass -\u003e SDom MajMode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SDom",
        "fct-type": "function",
        "title": "S_4"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "S_4",
        "normalized": "SD MajMode III MinClass-\u003eFinal IV MajClass-\u003eSDom MajMode",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SD MajMode III MinClass-\u003eFinal IV MajClass-\u003eSDom MajMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:S_5_par",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MajMode VI MinClass -\u003e SDom MajMode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SDom",
        "fct-type": "function",
        "title": "S_5_par"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "S_5_par",
        "normalized": "SD MajMode VI MinClass-\u003eSDom MajMode",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SD MajMode VI MinClass-\u003eSDom MajMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:S_7",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MajMode III MinClass -\u003e Final II MinClass -\u003e SDom MajMode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SDom",
        "fct-type": "function",
        "title": "S_7"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "S_7",
        "normalized": "SD MajMode III MinClass-\u003eFinal II MinClass-\u003eSDom MajMode",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SD MajMode III MinClass-\u003eFinal II MinClass-\u003eSDom MajMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:S_9_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SMinBorrow -\u003e SDom MajMode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SDom",
        "fct-type": "function",
        "title": "S_9_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "S_9_bor",
        "normalized": "SMinBorrow-\u003eSDom MajMode",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SMinBorrow-\u003eSDom MajMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Sm_20_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Sm_20_bor (SD MinMode IV MinClass)",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SMinBorrow",
        "fct-type": "function",
        "title": "Sm_20_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Sm_20_bor",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Sm_22_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Sm_22_bor (SD MinMode IIb MajClass)",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SMinBorrow",
        "fct-type": "function",
        "title": "Sm_22_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Sm_22_bor",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Sm_3",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MinMode IV MinClass -\u003e SDom MinMode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SDom",
        "fct-type": "function",
        "title": "Sm_3"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Sm_3",
        "normalized": "SD MinMode IV MinClass-\u003eSDom MinMode",
        "package": "HarmTrace",
        "partial": "Sm",
        "signature": "SD MinMode IV MinClass-\u003eSDom MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Sm_4",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MinMode IIIb MajClass -\u003e Final IV MinClass -\u003e SDom MinMode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SDom",
        "fct-type": "function",
        "title": "Sm_4"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Sm_4",
        "normalized": "SD MinMode IIIb MajClass-\u003eFinal IV MinClass-\u003eSDom MinMode",
        "package": "HarmTrace",
        "partial": "Sm",
        "signature": "SD MinMode IIIb MajClass-\u003eFinal IV MinClass-\u003eSDom MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Sm_5_par",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MinMode VIb MajClass -\u003e SDom MinMode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SDom",
        "fct-type": "function",
        "title": "Sm_5_par"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Sm_5_par",
        "normalized": "SD MinMode VIb MajClass-\u003eSDom MinMode",
        "package": "HarmTrace",
        "partial": "Sm",
        "signature": "SD MinMode VIb MajClass-\u003eSDom MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Sm_6",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MinMode IIb MajClass -\u003e SDom MinMode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SDom",
        "fct-type": "function",
        "title": "Sm_6"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Sm_6",
        "normalized": "SD MinMode IIb MajClass-\u003eSDom MinMode",
        "package": "HarmTrace",
        "partial": "Sm",
        "signature": "SD MinMode IIb MajClass-\u003eSDom MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Sm_7",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MinMode IIIb MajClass -\u003e Final II MinClass -\u003e SDom MinMode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SDom",
        "fct-type": "function",
        "title": "Sm_7"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Sm_7",
        "normalized": "SD MinMode IIIb MajClass-\u003eFinal II MinClass-\u003eSDom MinMode",
        "package": "HarmTrace",
        "partial": "Sm",
        "signature": "SD MinMode IIIb MajClass-\u003eFinal II MinClass-\u003eSDom MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Sm_9_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SMajBorrow -\u003e SDom MinMode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#SDom",
        "fct-type": "function",
        "title": "Sm_9_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Sm_9_bor",
        "normalized": "SMajBorrow-\u003eSDom MinMode",
        "package": "HarmTrace",
        "partial": "Sm",
        "signature": "SMajBorrow-\u003eSDom MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Surface_Chord",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "ChordToken -\u003e Surface_Chord deg clss (Su n)",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Surface_Chord",
        "fct-type": "function",
        "title": "Surface_Chord"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Surface_Chord",
        "normalized": "ChordToken-\u003eSurface_Chord a b(Su c)",
        "package": "HarmTrace",
        "partial": "Surface Chord",
        "signature": "ChordToken-\u003eSurface_Chord deg clss(Su n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:T_0",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SDom mode -\u003e Ton mode -\u003e Ton mode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Ton",
        "fct-type": "function",
        "title": "T_0"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "T_0",
        "normalized": "SDom a-\u003eTon a-\u003eTon a",
        "package": "HarmTrace",
        "partial": "",
        "signature": "SDom mode-\u003eTon mode-\u003eTon mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:T_1",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Final I MajClass -\u003e Ton MajMode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Ton",
        "fct-type": "function",
        "title": "T_1"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "T_1",
        "normalized": "Final I MajClass-\u003eTon MajMode",
        "package": "HarmTrace",
        "partial": "",
        "signature": "Final I MajClass-\u003eTon MajMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:T_21_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "T_21_bor (SD MajMode I MajClass)",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#TMajBorrow",
        "fct-type": "function",
        "title": "T_21_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "T_21_bor",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:T_4_bls",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Final I DomClass -\u003e Ton mode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Ton",
        "fct-type": "function",
        "title": "T_4_bls"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "T_4_bls",
        "normalized": "Final I DomClass-\u003eTon a",
        "package": "HarmTrace",
        "partial": "",
        "signature": "Final I DomClass-\u003eTon mode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:T_6_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "TMinBorrow -\u003e Ton MajMode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Ton",
        "fct-type": "function",
        "title": "T_6_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "T_6_bor",
        "normalized": "TMinBorrow-\u003eTon MajMode",
        "package": "HarmTrace",
        "partial": "",
        "signature": "TMinBorrow-\u003eTon MajMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Tm_1",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "SD MinMode I MinClass -\u003e Ton MinMode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Ton",
        "fct-type": "function",
        "title": "Tm_1"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Tm_1",
        "normalized": "SD MinMode I MinClass-\u003eTon MinMode",
        "package": "HarmTrace",
        "partial": "Tm",
        "signature": "SD MinMode I MinClass-\u003eTon MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Tm_21_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "Tm_21_bor (SD MinMode I MinClass)",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#TMinBorrow",
        "fct-type": "function",
        "title": "Tm_21_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Tm_21_bor",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Tm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Tm_6_bor",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "TMajBorrow -\u003e Ton MinMode",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#Ton",
        "fct-type": "function",
        "title": "Tm_6_bor"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "Tm_6_bor",
        "normalized": "TMajBorrow-\u003eTon MinMode",
        "package": "HarmTrace",
        "partial": "Tm",
        "signature": "TMajBorrow-\u003eTon MinMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:allTypes",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "[Name]",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#allTypes",
        "fct-type": "function",
        "title": "allTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "allTypes",
        "normalized": "[Name]",
        "package": "HarmTrace",
        "partial": "Types",
        "signature": "[Name]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:toClass",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "clss -\u003e ClassType",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#toClass",
        "fct-type": "method",
        "title": "toClass"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "toClass",
        "normalized": "a-\u003eClassType",
        "package": "HarmTrace",
        "partial": "Class",
        "signature": "clss-\u003eClassType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:toDegree",
      "description": {
        "fct-module": "HarmTrace.Models.Pop.Model",
        "fct-package": "HarmTrace",
        "fct-signature": "deg -\u003e ScaleDegree",
        "fct-source": "src/HarmTrace-Models-Pop-Model.html#toDegree",
        "fct-type": "method",
        "title": "toDegree"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models Pop Model",
        "module": "HarmTrace.Models.Pop.Model",
        "name": "toDegree",
        "normalized": "a-\u003eScaleDegree",
        "package": "HarmTrace",
        "partial": "Degree",
        "signature": "deg-\u003eScaleDegree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html",
        "fct-type": "module",
        "title": "TypeLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "TypeLevel",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Type Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:Su",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#Su",
        "fct-type": "data",
        "title": "Su"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "Su",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Su",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T0",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T0",
        "fct-type": "type",
        "title": "T0"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T0",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T1",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T1",
        "fct-type": "type",
        "title": "T1"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T1",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T10",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T10",
        "fct-type": "type",
        "title": "T10"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T10",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T11",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T11",
        "fct-type": "type",
        "title": "T11"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T11",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T12",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T12",
        "fct-type": "type",
        "title": "T12"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T12",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T13",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T13",
        "fct-type": "type",
        "title": "T13"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T13",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T14",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T14",
        "fct-type": "type",
        "title": "T14"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T14",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T15",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T15",
        "fct-type": "type",
        "title": "T15"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T15",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T16",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T16",
        "fct-type": "type",
        "title": "T16"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T16",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T17",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T17",
        "fct-type": "type",
        "title": "T17"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T17",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T18",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T18",
        "fct-type": "type",
        "title": "T18"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T18",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T19",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T19",
        "fct-type": "type",
        "title": "T19"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T19",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T2",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T2",
        "fct-type": "type",
        "title": "T2"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T2",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T20",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T20",
        "fct-type": "type",
        "title": "T20"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T20",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T3",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T3",
        "fct-type": "type",
        "title": "T3"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T3",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T4",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T4",
        "fct-type": "type",
        "title": "T4"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T4",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T5",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T5",
        "fct-type": "type",
        "title": "T5"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T5",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T6",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T6",
        "fct-type": "type",
        "title": "T6"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T6",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T7",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T7",
        "fct-type": "type",
        "title": "T7"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T7",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T8",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T8",
        "fct-type": "type",
        "title": "T8"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T8",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T9",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#T9",
        "fct-type": "type",
        "title": "T9"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "T9",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:ToNat",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "class",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#ToNat",
        "fct-type": "class",
        "title": "ToNat"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "ToNat",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "To Nat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:Ze",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#Ze",
        "fct-type": "data",
        "title": "Ze"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "Ze",
        "normalized": "",
        "package": "HarmTrace",
        "partial": "Ze",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#v:toNat",
      "description": {
        "fct-module": "HarmTrace.Models.TypeLevel",
        "fct-package": "HarmTrace",
        "fct-signature": "n -\u003e Int",
        "fct-source": "src/HarmTrace-Models-TypeLevel.html#toNat",
        "fct-type": "method",
        "title": "toNat"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Models TypeLevel",
        "module": "HarmTrace.Models.TypeLevel",
        "name": "toNat",
        "normalized": "a-\u003eInt",
        "package": "HarmTrace",
        "partial": "Nat",
        "signature": "n-\u003eInt"
      }
    }
  }
]