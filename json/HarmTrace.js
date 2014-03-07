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
        "word": "HarmTrace"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Combining low-level features (VAMP plug-ins) with high-level\n knowledge (the HarmTrace harmony model)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HarmTrace.Audio.Annotate",
          "name": "Annotate",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Audio-Annotate.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Combining low-level features VAMP plug-ins with high-level knowledge the HarmTrace harmony model",
          "hierarchy": "HarmTrace Audio Annotate",
          "module": "HarmTrace.Audio.Annotate",
          "name": "Annotate",
          "package": "HarmTrace",
          "partial": "Annotate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Annotate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an annotation out of a Chord candidate list by just picking the \n first chord. This annotator does smart grouping \n (see \u003ccode\u003e\u003ca\u003emergeByBeat\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Annotate",
          "name": "groupAnnotator",
          "package": "HarmTrace",
          "signature": "GrammarEx -\u003e Maybe [TimedData Key] -\u003e AudioFeat -\u003e ChordAnnotation",
          "source": "src/HarmTrace-Audio-Annotate.html#groupAnnotator",
          "type": "function"
        },
        "index": {
          "description": "Creates an annotation out of Chord candidate list by just picking the first chord This annotator does smart grouping see mergeByBeat",
          "hierarchy": "HarmTrace Audio Annotate",
          "module": "HarmTrace.Audio.Annotate",
          "name": "groupAnnotator",
          "normalized": "GrammarEx-\u003eMaybe[TimedData Key]-\u003eAudioFeat-\u003eChordAnnotation",
          "package": "HarmTrace",
          "partial": "Annotator",
          "signature": "GrammarEx-\u003eMaybe[TimedData Key]-\u003eAudioFeat-\u003eChordAnnotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Annotate.html#v:groupAnnotator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMPTrEE (Model Propelled Transcription of Euphonic Enitities): \n a sophisticated, harmony and beat informed chord annotator\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Annotate",
          "name": "mptreeAnnotator",
          "package": "HarmTrace",
          "signature": "GrammarEx -\u003e Maybe [TimedData Key] -\u003e AudioFeat -\u003e ChordAnnotation",
          "source": "src/HarmTrace-Audio-Annotate.html#mptreeAnnotator",
          "type": "function"
        },
        "index": {
          "description": "MPTrEE Model Propelled Transcription of Euphonic Enitities sophisticated harmony and beat informed chord annotator",
          "hierarchy": "HarmTrace Audio Annotate",
          "module": "HarmTrace.Audio.Annotate",
          "name": "mptreeAnnotator",
          "normalized": "GrammarEx-\u003eMaybe[TimedData Key]-\u003eAudioFeat-\u003eChordAnnotation",
          "package": "HarmTrace",
          "partial": "Annotator",
          "signature": "GrammarEx-\u003eMaybe[TimedData Key]-\u003eAudioFeat-\u003eChordAnnotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Annotate.html#v:mptreeAnnotator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Audio.Annotate",
          "name": "mptreeAnnotatorSTG",
          "package": "HarmTrace",
          "signature": "GrammarEx -\u003e Maybe [TimedData Key] -\u003e AudioFeat -\u003e ChordAnnotation",
          "source": "src/HarmTrace-Audio-Annotate.html#mptreeAnnotatorSTG",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Audio Annotate",
          "module": "HarmTrace.Audio.Annotate",
          "name": "mptreeAnnotatorSTG",
          "normalized": "GrammarEx-\u003eMaybe[TimedData Key]-\u003eAudioFeat-\u003eChordAnnotation",
          "package": "HarmTrace",
          "partial": "Annotator STG",
          "signature": "GrammarEx-\u003eMaybe[TimedData Key]-\u003eAudioFeat-\u003eChordAnnotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Annotate.html#v:mptreeAnnotatorSTG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epreprocesses the raw audio data before using chord harmony model based\n chord selection. First, the beats and chroma are synchronised. Second, \n chord candidate lists are created. Third, smart, beat informed grouping of \n the chord candidates is performed. Fourth, the chord candidate lists are \n grouped in segments based on the key (obtained\n as provided by the user or as derived from the audio data). Last, the \n chord candidate lists are further segmented based on the occurrences of \n I and V chords.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Annotate",
          "name": "preProcessData",
          "package": "HarmTrace",
          "signature": "Maybe [TimedData Key] -\u003e AudioFeat -\u003e [ProbChordSeg]",
          "source": "src/HarmTrace-Audio-Annotate.html#preProcessData",
          "type": "function"
        },
        "index": {
          "description": "preprocesses the raw audio data before using chord harmony model based chord selection First the beats and chroma are synchronised Second chord candidate lists are created Third smart beat informed grouping of the chord candidates is performed Fourth the chord candidate lists are grouped in segments based on the key obtained as provided by the user or as derived from the audio data Last the chord candidate lists are further segmented based on the occurrences of and chords",
          "hierarchy": "HarmTrace Audio Annotate",
          "module": "HarmTrace.Audio.Annotate",
          "name": "preProcessData",
          "normalized": "Maybe[TimedData Key]-\u003eAudioFeat-\u003e[ProbChordSeg]",
          "package": "HarmTrace",
          "partial": "Process Data",
          "signature": "Maybe[TimedData Key]-\u003eAudioFeat-\u003e[ProbChordSeg]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Annotate.html#v:preProcessData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprints Segmetation statistics\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Annotate",
          "name": "putSegStats",
          "package": "HarmTrace",
          "signature": "Maybe [TimedData Key] -\u003e AudioFeat -\u003e IO ()",
          "source": "src/HarmTrace-Audio-Annotate.html#putSegStats",
          "type": "function"
        },
        "index": {
          "description": "prints Segmetation statistics",
          "hierarchy": "HarmTrace Audio Annotate",
          "module": "HarmTrace.Audio.Annotate",
          "name": "putSegStats",
          "normalized": "Maybe[TimedData Key]-\u003eAudioFeat-\u003eIO()",
          "package": "HarmTrace",
          "partial": "Seg Stats",
          "signature": "Maybe[TimedData Key]-\u003eAudioFeat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Annotate.html#v:putSegStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most simple annotator, no grouping, no matching, \n just pick the best matching chord\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Annotate",
          "name": "simpleAnnotator",
          "package": "HarmTrace",
          "signature": "GrammarEx -\u003e Maybe [TimedData Key] -\u003e AudioFeat -\u003e ChordAnnotation",
          "source": "src/HarmTrace-Audio-Annotate.html#simpleAnnotator",
          "type": "function"
        },
        "index": {
          "description": "The most simple annotator no grouping no matching just pick the best matching chord",
          "hierarchy": "HarmTrace Audio Annotate",
          "module": "HarmTrace.Audio.Annotate",
          "name": "simpleAnnotator",
          "normalized": "GrammarEx-\u003eMaybe[TimedData Key]-\u003eAudioFeat-\u003eChordAnnotation",
          "package": "HarmTrace",
          "partial": "Annotator",
          "signature": "GrammarEx-\u003eMaybe[TimedData Key]-\u003eAudioFeat-\u003eChordAnnotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Annotate.html#v:simpleAnnotator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Parses textual ground-truth Chord annotations, such as the ones\n found at: \u003ca\u003ehttp://isophonics.net/content/reference-annotations\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HarmTrace.Audio.AnnotationParser",
          "name": "AnnotationParser",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Audio-AnnotationParser.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Parses textual ground-truth Chord annotations such as the ones found at http isophonics.net content reference-annotations",
          "hierarchy": "HarmTrace Audio AnnotationParser",
          "module": "HarmTrace.Audio.AnnotationParser",
          "name": "AnnotationParser",
          "package": "HarmTrace",
          "partial": "Annotation Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-AnnotationParser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a chord annotation.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.AnnotationParser",
          "name": "parseAnnotationData",
          "package": "HarmTrace",
          "signature": "Parser [TimedData ChordLabel]",
          "source": "src/HarmTrace-Audio-AnnotationParser.html#parseAnnotationData",
          "type": "function"
        },
        "index": {
          "description": "Parses chord annotation",
          "hierarchy": "HarmTrace Audio AnnotationParser",
          "module": "HarmTrace.Audio.AnnotationParser",
          "name": "parseAnnotationData",
          "normalized": "Parser[TimedData ChordLabel]",
          "package": "HarmTrace",
          "partial": "Annotation Data",
          "signature": "Parser[TimedData ChordLabel]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-AnnotationParser.html#v:parseAnnotationData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e annotation.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.AnnotationParser",
          "name": "parseKeyAnnotationData",
          "package": "HarmTrace",
          "signature": "Parser [TimedData Key]",
          "source": "src/HarmTrace-Audio-AnnotationParser.html#parseKeyAnnotationData",
          "type": "function"
        },
        "index": {
          "description": "Parses Key annotation",
          "hierarchy": "HarmTrace Audio AnnotationParser",
          "module": "HarmTrace.Audio.AnnotationParser",
          "name": "parseKeyAnnotationData",
          "normalized": "Parser[TimedData Key]",
          "package": "HarmTrace",
          "partial": "Key Annotation Data",
          "signature": "Parser[TimedData Key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-AnnotationParser.html#v:parseKeyAnnotationData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Recognise audio chroma vectors into textual chord descriptions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HarmTrace.Audio.ChromaChord",
          "name": "ChromaChord",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Audio-ChromaChord.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Recognise audio chroma vectors into textual chord descriptions",
          "hierarchy": "HarmTrace Audio ChromaChord",
          "module": "HarmTrace.Audio.ChromaChord",
          "name": "ChromaChord",
          "package": "HarmTrace",
          "partial": "Chroma Chord",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-ChromaChord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynchronises the \u003ccode\u003e\u003ca\u003eChordinoData\u003c/a\u003e\u003c/code\u003e with the list of beats \n by grouping the \u003ccode\u003eChordinoLines\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eChordinoData\u003c/a\u003e\u003c/code\u003e in separate lists.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.ChromaChord",
          "name": "beatSync",
          "package": "HarmTrace",
          "signature": "BarTimeTrackData -\u003e [ChordinoLine] -\u003e [BeatChroma]",
          "source": "src/HarmTrace-Audio-ChromaChord.html#beatSync",
          "type": "function"
        },
        "index": {
          "description": "Synchronises the ChordinoData with the list of beats by grouping the ChordinoLines of the ChordinoData in separate lists",
          "hierarchy": "HarmTrace Audio ChromaChord",
          "module": "HarmTrace.Audio.ChromaChord",
          "name": "beatSync",
          "normalized": "BarTimeTrackData-\u003e[ChordinoLine]-\u003e[BeatChroma]",
          "package": "HarmTrace",
          "partial": "Sync",
          "signature": "BarTimeTrackData-\u003e[ChordinoLine]-\u003e[BeatChroma]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-ChromaChord.html#v:beatSync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaving a matrix of beat-synchronised bass and treble chromagrams and a \n chord dictionary, the probability of a chord sounding at a particular beat is\n estimated by calculating the Euclidean distance between the chord structures \n and the chroma feature. These distances are calculated for every chord \n candidate at every beat. Next, we sort the chord candidates by descending \n Euclidean distance. To obtain a relative measure of the fit \n between a chord candidate and the chroma vector in the range [0,1],\n the distances are normalised by dividing them by distance of the best \n matching chord candidate. \n\u003c/p\u003e",
          "module": "HarmTrace.Audio.ChromaChord",
          "name": "createChordRanks",
          "package": "HarmTrace",
          "signature": "[BeatChroma] -\u003e [TimedData [ProbChord]]",
          "source": "src/HarmTrace-Audio-ChromaChord.html#createChordRanks",
          "type": "function"
        },
        "index": {
          "description": "Having matrix of beat-synchronised bass and treble chromagrams and chord dictionary the probability of chord sounding at particular beat is estimated by calculating the Euclidean distance between the chord structures and the chroma feature These distances are calculated for every chord candidate at every beat Next we sort the chord candidates by descending Euclidean distance To obtain relative measure of the fit between chord candidate and the chroma vector in the range the distances are normalised by dividing them by distance of the best matching chord candidate",
          "hierarchy": "HarmTrace Audio ChromaChord",
          "module": "HarmTrace.Audio.ChromaChord",
          "name": "createChordRanks",
          "normalized": "[BeatChroma]-\u003e[TimedData[ProbChord]]",
          "package": "HarmTrace",
          "partial": "Chord Ranks",
          "signature": "[BeatChroma]-\u003e[TimedData[ProbChord]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-ChromaChord.html#v:createChordRanks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Audio.ChromaChord",
          "name": "meanBeatSyncVectors",
          "package": "HarmTrace",
          "signature": "[BeatChroma] -\u003e [TimedData (Vector NumData)]",
          "source": "src/HarmTrace-Audio-ChromaChord.html#meanBeatSyncVectors",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Audio ChromaChord",
          "module": "HarmTrace.Audio.ChromaChord",
          "name": "meanBeatSyncVectors",
          "normalized": "[BeatChroma]-\u003e[TimedData(Vector NumData)]",
          "package": "HarmTrace",
          "partial": "Beat Sync Vectors",
          "signature": "[BeatChroma]-\u003e[TimedData(Vector NumData)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-ChromaChord.html#v:meanBeatSyncVectors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges chord segments, adding a bias toward merging at the first\n and the third \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "HarmTrace.Audio.ChromaChord",
          "name": "mergeByOneAndThree",
          "package": "HarmTrace",
          "signature": "[TimedData [ProbChord]] -\u003e [TimedData [ProbChord]]",
          "source": "src/HarmTrace-Audio-ChromaChord.html#mergeByOneAndThree",
          "type": "function"
        },
        "index": {
          "description": "Merges chord segments adding bias toward merging at the first and the third Beat",
          "hierarchy": "HarmTrace Audio ChromaChord",
          "module": "HarmTrace.Audio.ChromaChord",
          "name": "mergeByOneAndThree",
          "normalized": "[TimedData[ProbChord]]-\u003e[TimedData[ProbChord]]",
          "package": "HarmTrace",
          "partial": "By One And Three",
          "signature": "[TimedData[ProbChord]]-\u003e[TimedData[ProbChord]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-ChromaChord.html#v:mergeByOneAndThree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Low-processing of chroma features for key-finding\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HarmTrace.Audio.ChromaKey",
          "name": "ChromaKey",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Audio-ChromaKey.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Low-processing of chroma features for key-finding",
          "hierarchy": "HarmTrace Audio ChromaKey",
          "module": "HarmTrace.Audio.ChromaKey",
          "name": "ChromaKey",
          "package": "HarmTrace",
          "partial": "Chroma Key",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-ChromaKey.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the beat synchronised key strenght for all \n 24 keys (ordered by \u003ccode\u003eKeyMap\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.ChromaKey",
          "name": "beatSyncKeyStrength",
          "package": "HarmTrace",
          "signature": "BarTimeTrackData -\u003e ChordinoData -\u003e [TimedData [NumData]]",
          "source": "src/HarmTrace-Audio-ChromaKey.html#beatSyncKeyStrength",
          "type": "function"
        },
        "index": {
          "description": "Calculates the beat synchronised key strenght for all keys ordered by KeyMap",
          "hierarchy": "HarmTrace Audio ChromaKey",
          "module": "HarmTrace.Audio.ChromaKey",
          "name": "beatSyncKeyStrength",
          "normalized": "BarTimeTrackData-\u003eChordinoData-\u003e[TimedData[NumData]]",
          "package": "HarmTrace",
          "partial": "Sync Key Strength",
          "signature": "BarTimeTrackData-\u003eChordinoData-\u003e[TimedData[NumData]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-ChromaKey.html#v:beatSyncKeyStrength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA key chroma map using a circle of fifths based ordering.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.ChromaKey",
          "name": "keyMap",
          "package": "HarmTrace",
          "signature": "[Key]",
          "source": "src/HarmTrace-Audio-ChromaKey.html#keyMap",
          "type": "function"
        },
        "index": {
          "description": "key chroma map using circle of fifths based ordering",
          "hierarchy": "HarmTrace Audio ChromaKey",
          "module": "HarmTrace.Audio.ChromaKey",
          "name": "keyMap",
          "normalized": "[Key]",
          "package": "HarmTrace",
          "partial": "Map",
          "signature": "[Key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-ChromaKey.html#v:keyMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Basic parsers for parsing VAMP csv files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HarmTrace.Audio.DataParser",
          "name": "DataParser",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Audio-DataParser.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Basic parsers for parsing VAMP csv files",
          "hierarchy": "HarmTrace Audio DataParser",
          "module": "HarmTrace.Audio.DataParser",
          "name": "DataParser",
          "package": "HarmTrace",
          "partial": "Data Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.DataParser",
          "name": "pBeat",
          "package": "HarmTrace",
          "signature": "Parser Beat",
          "source": "src/HarmTrace-Audio-DataParser.html#pBeat",
          "type": "function"
        },
        "index": {
          "description": "Parses Beat",
          "hierarchy": "HarmTrace Audio DataParser",
          "module": "HarmTrace.Audio.DataParser",
          "name": "pBeat",
          "package": "HarmTrace",
          "partial": "Beat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:pBeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Audio.DataParser",
          "name": "pComma",
          "package": "HarmTrace",
          "signature": "Parser Char",
          "source": "src/HarmTrace-Audio-DataParser.html#pComma",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Audio DataParser",
          "module": "HarmTrace.Audio.DataParser",
          "name": "pComma",
          "package": "HarmTrace",
          "partial": "Comma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:pComma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Audio.DataParser",
          "name": "pLabel",
          "package": "HarmTrace",
          "signature": "Parser String",
          "source": "src/HarmTrace-Audio-DataParser.html#pLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Audio DataParser",
          "module": "HarmTrace.Audio.DataParser",
          "name": "pLabel",
          "package": "HarmTrace",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:pLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Audio.DataParser",
          "name": "pNumData",
          "package": "HarmTrace",
          "signature": "Parser NumData",
          "source": "src/HarmTrace-Audio-DataParser.html#pNumData",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Audio DataParser",
          "module": "HarmTrace.Audio.DataParser",
          "name": "pNumData",
          "package": "HarmTrace",
          "partial": "Num Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:pNumData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Audio.DataParser",
          "name": "pParentheticalString",
          "package": "HarmTrace",
          "signature": "Char -\u003e Parser String",
          "source": "src/HarmTrace-Audio-DataParser.html#pParentheticalString",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Audio DataParser",
          "module": "HarmTrace.Audio.DataParser",
          "name": "pParentheticalString",
          "normalized": "Char-\u003eParser String",
          "package": "HarmTrace",
          "partial": "Parenthetical String",
          "signature": "Char-\u003eParser String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:pParentheticalString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Audio.DataParser",
          "name": "pQuotedString",
          "package": "HarmTrace",
          "signature": "Parser String",
          "source": "src/HarmTrace-Audio-DataParser.html#pQuotedString",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Audio DataParser",
          "module": "HarmTrace.Audio.DataParser",
          "name": "pQuotedString",
          "package": "HarmTrace",
          "partial": "Quoted String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:pQuotedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses \u003ccode\u003e\u003ca\u003eBarTime\u003c/a\u003e\u003c/code\u003e data.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.DataParser",
          "name": "parseBarTimeData",
          "package": "HarmTrace",
          "signature": "Parser BarTimeTrackData",
          "source": "src/HarmTrace-Audio-DataParser.html#parseBarTimeData",
          "type": "function"
        },
        "index": {
          "description": "Parses BarTime data",
          "hierarchy": "HarmTrace Audio DataParser",
          "module": "HarmTrace.Audio.DataParser",
          "name": "parseBarTimeData",
          "package": "HarmTrace",
          "partial": "Bar Time Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:parseBarTimeData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing beat time stamps.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.DataParser",
          "name": "parseBeatData",
          "package": "HarmTrace",
          "signature": "Parser BeatTrackerData",
          "source": "src/HarmTrace-Audio-DataParser.html#parseBeatData",
          "type": "function"
        },
        "index": {
          "description": "Parsing beat time stamps",
          "hierarchy": "HarmTrace Audio DataParser",
          "module": "HarmTrace.Audio.DataParser",
          "name": "parseBeatData",
          "package": "HarmTrace",
          "partial": "Beat Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:parseBeatData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChroma parsing.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.DataParser",
          "name": "parseChordinoData",
          "package": "HarmTrace",
          "signature": "Parser ChordinoData",
          "source": "src/HarmTrace-Audio-DataParser.html#parseChordinoData",
          "type": "function"
        },
        "index": {
          "description": "Chroma parsing",
          "hierarchy": "HarmTrace Audio DataParser",
          "module": "HarmTrace.Audio.DataParser",
          "name": "parseChordinoData",
          "package": "HarmTrace",
          "partial": "Chordino Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:parseChordinoData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Audio.DataParser",
          "name": "parseChromaData",
          "package": "HarmTrace",
          "signature": "Parser [ChordinoLine]",
          "source": "src/HarmTrace-Audio-DataParser.html#parseChromaData",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Audio DataParser",
          "module": "HarmTrace.Audio.DataParser",
          "name": "parseChromaData",
          "normalized": "Parser[ChordinoLine]",
          "package": "HarmTrace",
          "partial": "Chroma Data",
          "signature": "Parser[ChordinoLine]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:parseChromaData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Audio.DataParser",
          "name": "shift",
          "package": "HarmTrace",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/HarmTrace-Audio-DataParser.html#shift",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Audio DataParser",
          "module": "HarmTrace.Audio.DataParser",
          "name": "shift",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "HarmTrace",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-DataParser.html#v:shift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: A module for evaluating chord and key annotations\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "Evaluation",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Audio-Evaluation.html",
          "type": "module"
        },
        "index": {
          "description": "Summary module for evaluating chord and key annotations",
          "hierarchy": "HarmTrace Audio Evaluation",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "Evaluation",
          "package": "HarmTrace",
          "partial": "Evaluation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecalculates the maximal achievable score given a ground truth annotation\n and a chord candidate list.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "achievScore",
          "package": "HarmTrace",
          "signature": "[TimedData ChordLabel] -\u003e [TimedData [ChordLabel]] -\u003e Double",
          "source": "src/HarmTrace-Audio-Evaluation.html#achievScore",
          "type": "function"
        },
        "index": {
          "description": "calculates the maximal achievable score given ground truth annotation and chord candidate list",
          "hierarchy": "HarmTrace Audio Evaluation",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "achievScore",
          "normalized": "[TimedData ChordLabel]-\u003e[TimedData[ChordLabel]]-\u003eDouble",
          "package": "HarmTrace",
          "partial": "Score",
          "signature": "[TimedData ChordLabel]-\u003e[TimedData[ChordLabel]]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:achievScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003echordChangeRatio\u003c/a\u003e\u003c/code\u003e is optimal if it is one, but it can be larger or \n smaller than 1. Therefore, calculating the average blurs the actual result.\n \u003ccode\u003e\u003ca\u003eavgDistToOne\u003c/a\u003e\u003c/code\u003e takes the absolute difference to 1.0 and averages these for a\n list of Doubles.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "avgDistToOne",
          "package": "HarmTrace",
          "signature": "[Double] -\u003e Double",
          "source": "src/HarmTrace-Audio-Evaluation.html#avgDistToOne",
          "type": "function"
        },
        "index": {
          "description": "The chordChangeRatio is optimal if it is one but it can be larger or smaller than Therefore calculating the average blurs the actual result avgDistToOne takes the absolute difference to and averages these for list of Doubles",
          "hierarchy": "HarmTrace Audio Evaluation",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "avgDistToOne",
          "normalized": "[Double]-\u003eDouble",
          "package": "HarmTrace",
          "partial": "Dist To One",
          "signature": "[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:avgDistToOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Audio.Evaluation",
          "name": "chordChangeRatio",
          "package": "HarmTrace",
          "signature": "(ChordLabel -\u003e ChordLabel -\u003e Bool) -\u003e [TimedData ChordLabel] -\u003e [TimedData ChordLabel] -\u003e Double",
          "source": "src/HarmTrace-Audio-Evaluation.html#chordChangeRatio",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Audio Evaluation",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "chordChangeRatio",
          "normalized": "(ChordLabel-\u003eChordLabel-\u003eBool)-\u003e[TimedData ChordLabel]-\u003e[TimedData ChordLabel]-\u003eDouble",
          "package": "HarmTrace",
          "partial": "Change Ratio",
          "signature": "(ChordLabel-\u003eChordLabel-\u003eBool)-\u003e[TimedData ChordLabel]-\u003e[TimedData ChordLabel]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:chordChangeRatio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if both \u003ccode\u003e\u003ca\u003eChordLabel\u003c/a\u003e\u003c/code\u003es are equal at the chord class level: \n A chord is classified as being major, minor, dominant seventh, or dimished\n seventh. \u003ccode\u003e\u003ca\u003echordClassEq\u003c/a\u003e\u003c/code\u003e only returns True if the class of compared chords\n is the same. \u003ca\u003eNone Chords\u003c/a\u003e match only with other None Chords and \n with nothing else\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "chordClassEq",
          "package": "HarmTrace",
          "signature": "ChordLabel -\u003e ChordLabel -\u003e Bool",
          "source": "src/HarmTrace-Audio-Evaluation.html#chordClassEq",
          "type": "function"
        },
        "index": {
          "description": "Returns True if both ChordLabel are equal at the chord class level chord is classified as being major minor dominant seventh or dimished seventh chordClassEq only returns True if the class of compared chords is the same None Chords match only with other None Chords and with nothing else",
          "hierarchy": "HarmTrace Audio Evaluation",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "chordClassEq",
          "normalized": "ChordLabel-\u003eChordLabel-\u003eBool",
          "package": "HarmTrace",
          "partial": "Class Eq",
          "signature": "ChordLabel-\u003eChordLabel-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:chordClassEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if both \u003ccode\u003e\u003ca\u003eChordLabel\u003c/a\u003e\u003c/code\u003es are equal at the triad level: they are\n either moth major or both minor. \u003ca\u003eNone Chords\u003c/a\u003e match only with other \u003ca\u003eNone\n Chords\u003c/a\u003e and with nothing else\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "chordTriadEq",
          "package": "HarmTrace",
          "signature": "ChordLabel -\u003e ChordLabel -\u003e Bool",
          "source": "src/HarmTrace-Audio-Evaluation.html#chordTriadEq",
          "type": "function"
        },
        "index": {
          "description": "Returns True if both ChordLabel are equal at the triad level they are either moth major or both minor None Chords match only with other None Chords and with nothing else",
          "hierarchy": "HarmTrace Audio Evaluation",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "chordTriadEq",
          "normalized": "ChordLabel-\u003eChordLabel-\u003eBool",
          "package": "HarmTrace",
          "partial": "Triad Eq",
          "signature": "ChordLabel-\u003eChordLabel-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:chordTriadEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the \u003ccode\u003e\u003ca\u003eRoot\u003c/a\u003e\u003c/code\u003es of the \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003es are equal, but the one chord\n is Major and the other chord is Minor.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "majMinEq",
          "package": "HarmTrace",
          "signature": "ChordLabel -\u003e ChordLabel -\u003e Bool",
          "source": "src/HarmTrace-Audio-Evaluation.html#majMinEq",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the Root of the Chord are equal but the one chord is Major and the other chord is Minor",
          "hierarchy": "HarmTrace Audio Evaluation",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "majMinEq",
          "normalized": "ChordLabel-\u003eChordLabel-\u003eBool",
          "package": "HarmTrace",
          "partial": "Min Eq",
          "signature": "ChordLabel-\u003eChordLabel-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:majMinEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edoes the same thing as relCorrectOverlap, but it also prints the\n chords and uses a lower sample rate. N.B. the number output by \n \u003ccode\u003eprintRelCorrectOverlap\u003c/code\u003e might differ from the output of \n \u003ccode\u003e\u003ca\u003erelCorrectOverlap\u003c/a\u003e\u003c/code\u003e, because a different sample rate might be used (see\n \u003ccode\u003eConstants\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "printChordRCO",
          "package": "HarmTrace",
          "signature": "(AudioFeat -\u003e ChordAnnotation) -\u003e [TimedData Key] -\u003e AudioFeat -\u003e [TimedData ChordLabel] -\u003e IO Double",
          "source": "src/HarmTrace-Audio-Evaluation.html#printChordRCO",
          "type": "function"
        },
        "index": {
          "description": "does the same thing as relCorrectOverlap but it also prints the chords and uses lower sample rate N.B the number output by printRelCorrectOverlap might differ from the output of relCorrectOverlap because different sample rate might be used see Constants",
          "hierarchy": "HarmTrace Audio Evaluation",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "printChordRCO",
          "normalized": "(AudioFeat-\u003eChordAnnotation)-\u003e[TimedData Key]-\u003eAudioFeat-\u003e[TimedData ChordLabel]-\u003eIO Double",
          "package": "HarmTrace",
          "partial": "Chord RCO",
          "signature": "(AudioFeat-\u003eChordAnnotation)-\u003e[TimedData Key]-\u003eAudioFeat-\u003e[TimedData ChordLabel]-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:printChordRCO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the relative correct overlap, which is the recall\n of matching frames, and defined as the nr of matching frames (sampled at\n an interval set in \u003ccode\u003e\u003ca\u003eConstants\u003c/a\u003e\u003c/code\u003e divided by all frames.\n This functions difers from \u003ccode\u003e\u003ca\u003erelCorrectOverlap\u003c/a\u003e\u003c/code\u003e in that it uses an\n equality function that is in IO.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "printRCO",
          "package": "HarmTrace",
          "signature": "(a -\u003e a -\u003e IO Bool) -\u003e [TimedData a] -\u003e [TimedData a] -\u003e IO Double",
          "source": "src/HarmTrace-Audio-Evaluation.html#printRCO",
          "type": "function"
        },
        "index": {
          "description": "Calculates the relative correct overlap which is the recall of matching frames and defined as the nr of matching frames sampled at an interval set in Constants divided by all frames This functions difers from relCorrectOverlap in that it uses an equality function that is in IO",
          "hierarchy": "HarmTrace Audio Evaluation",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "printRCO",
          "normalized": "(a-\u003ea-\u003eIO Bool)-\u003e[TimedData a]-\u003e[TimedData a]-\u003eIO Double",
          "package": "HarmTrace",
          "partial": "RCO",
          "signature": "(a-\u003ea-\u003eIO Bool)-\u003e[TimedData a]-\u003e[TimedData a]-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:printRCO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the relative correct overlap, which is the recall\n of matching frames, and defined as the nr of matching frames (sampled at\n an 10 milisecond interval) divided by all frames.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "relCorrectOverlap",
          "package": "HarmTrace",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [TimedData a] -\u003e [TimedData a] -\u003e Double",
          "source": "src/HarmTrace-Audio-Evaluation.html#relCorrectOverlap",
          "type": "function"
        },
        "index": {
          "description": "Calculates the relative correct overlap which is the recall of matching frames and defined as the nr of matching frames sampled at an milisecond interval divided by all frames",
          "hierarchy": "HarmTrace Audio Evaluation",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "relCorrectOverlap",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[TimedData a]-\u003e[TimedData a]-\u003eDouble",
          "package": "HarmTrace",
          "partial": "Correct Overlap",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[TimedData a]-\u003e[TimedData a]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:relCorrectOverlap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a chord annotation sample the chord label at every 10 ms\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "sample",
          "package": "HarmTrace",
          "signature": "[TimedData a] -\u003e [a]",
          "source": "src/HarmTrace-Audio-Evaluation.html#sample",
          "type": "function"
        },
        "index": {
          "description": "Given chord annotation sample the chord label at every ms",
          "hierarchy": "HarmTrace Audio Evaluation",
          "module": "HarmTrace.Audio.Evaluation",
          "name": "sample",
          "normalized": "[TimedData a]-\u003e[a]",
          "package": "HarmTrace",
          "signature": "[TimedData a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Evaluation.html#v:sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Key-finding from musical audio.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HarmTrace.Audio.Key",
          "name": "Key",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Audio-Key.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Key-finding from musical audio",
          "hierarchy": "HarmTrace Audio Key",
          "module": "HarmTrace.Audio.Key",
          "name": "Key",
          "package": "HarmTrace",
          "partial": "Key",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Key.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e key assignment, given \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e and chroma information.\n N.B. The beats and chroma do not have to be synchronised, they will be\n sychronised in the process of finding the key \n (see \u003ccode\u003e\u003ca\u003eChromaKey\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eBeatSync\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Key",
          "name": "getBeatSyncKeyFromChroma",
          "package": "HarmTrace",
          "signature": "AudioFeat -\u003e [TimedData Key]",
          "source": "src/HarmTrace-Audio-Key.html#getBeatSyncKeyFromChroma",
          "type": "function"
        },
        "index": {
          "description": "Returns Key key assignment given Beat and chroma information N.B The beats and chroma do not have to be synchronised they will be sychronised in the process of finding the key see ChromaKey and BeatSync",
          "hierarchy": "HarmTrace Audio Key",
          "module": "HarmTrace.Audio.Key",
          "name": "getBeatSyncKeyFromChroma",
          "normalized": "AudioFeat-\u003e[TimedData Key]",
          "package": "HarmTrace",
          "partial": "Beat Sync Key From Chroma",
          "signature": "AudioFeat-\u003e[TimedData Key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Key.html#v:getBeatSyncKeyFromChroma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Some statistical functions used in processing audio.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HarmTrace.Audio.Statistical",
          "name": "Statistical",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Audio-Statistical.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Some statistical functions used in processing audio",
          "hierarchy": "HarmTrace Audio Statistical",
          "module": "HarmTrace.Audio.Statistical",
          "name": "Statistical",
          "package": "HarmTrace",
          "partial": "Statistical",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Statistical.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list with all \u003ca\u003esliding windows\u003c/a\u003e of a particular size.\n The left and right edge of the list are filled with the first and last (size \n \u003cem\u003e2) items, respectively and the remainder is filled with the mode\u003c/em\u003emedian of\n the complete list.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Statistical",
          "name": "getWindows",
          "package": "HarmTrace",
          "signature": "Int -\u003e [a] -\u003e [[a]]",
          "source": "src/HarmTrace-Audio-Statistical.html#getWindows",
          "type": "function"
        },
        "index": {
          "description": "Returns list with all sliding windows of particular size The left and right edge of the list are filled with the first and last size items respectively and the remainder is filled with the mode median of the complete list",
          "hierarchy": "HarmTrace Audio Statistical",
          "module": "HarmTrace.Audio.Statistical",
          "name": "getWindows",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "HarmTrace",
          "partial": "Windows",
          "signature": "Int-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Statistical.html#v:getWindows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to group, but in case a group is smaller than s, \n the group is filled with the same number of a's:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egroupMinSize 3 0 [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]\n\u003c/code\u003e\u003c/strong\u003e[[0],[0,0],[0,0,0],[4,4,4,4],[5,5,5,5,5]]\n\u003c/pre\u003e",
          "module": "HarmTrace.Audio.Statistical",
          "name": "groupMinSize",
          "package": "HarmTrace",
          "signature": "Int -\u003e a -\u003e [a] -\u003e [[a]]",
          "source": "src/HarmTrace-Audio-Statistical.html#groupMinSize",
          "type": "function"
        },
        "index": {
          "description": "Similar to group but in case group is smaller than the group is filled with the same number of groupMinSize",
          "hierarchy": "HarmTrace Audio Statistical",
          "module": "HarmTrace.Audio.Statistical",
          "name": "groupMinSize",
          "normalized": "Int-\u003ea-\u003e[a]-\u003e[[a]]",
          "package": "HarmTrace",
          "partial": "Min Size",
          "signature": "Int-\u003ea-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Statistical.html#v:groupMinSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Audio.Statistical",
          "name": "hasSize",
          "package": "HarmTrace",
          "signature": "Int -\u003e [a] -\u003e Bool",
          "source": "src/HarmTrace-Audio-Statistical.html#hasSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Audio Statistical",
          "module": "HarmTrace.Audio.Statistical",
          "name": "hasSize",
          "normalized": "Int-\u003e[a]-\u003eBool",
          "package": "HarmTrace",
          "partial": "Size",
          "signature": "Int-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Statistical.html#v:hasSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the mean of list.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Statistical",
          "name": "listMean",
          "package": "HarmTrace",
          "signature": "[NumData] -\u003e NumData",
          "source": "src/HarmTrace-Audio-Statistical.html#listMean",
          "type": "function"
        },
        "index": {
          "description": "Returns the mean of list",
          "hierarchy": "HarmTrace Audio Statistical",
          "module": "HarmTrace.Audio.Statistical",
          "name": "listMean",
          "normalized": "[NumData]-\u003eNumData",
          "package": "HarmTrace",
          "partial": "Mean",
          "signature": "[NumData]-\u003eNumData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Statistical.html#v:listMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the index of th maximal element of a list.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Statistical",
          "name": "maxListIndex",
          "package": "HarmTrace",
          "signature": "[a] -\u003e Int",
          "source": "src/HarmTrace-Audio-Statistical.html#maxListIndex",
          "type": "function"
        },
        "index": {
          "description": "Returns the index of th maximal element of list",
          "hierarchy": "HarmTrace Audio Statistical",
          "module": "HarmTrace.Audio.Statistical",
          "name": "maxListIndex",
          "normalized": "[a]-\u003eInt",
          "package": "HarmTrace",
          "partial": "List Index",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Statistical.html#v:maxListIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the median of a list.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Statistical",
          "name": "median",
          "package": "HarmTrace",
          "signature": "[a] -\u003e a",
          "source": "src/HarmTrace-Audio-Statistical.html#median",
          "type": "function"
        },
        "index": {
          "description": "Returns the median of list",
          "hierarchy": "HarmTrace Audio Statistical",
          "module": "HarmTrace.Audio.Statistical",
          "name": "median",
          "normalized": "[a]-\u003ea",
          "package": "HarmTrace",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Statistical.html#v:median"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea median filter: see \u003ca\u003ehttp://en.wikipedia.org/wiki/Median_filter\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Statistical",
          "name": "medianFilter",
          "package": "HarmTrace",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/HarmTrace-Audio-Statistical.html#medianFilter",
          "type": "function"
        },
        "index": {
          "description": "median filter see http en.wikipedia.org wiki Median filter",
          "hierarchy": "HarmTrace Audio Statistical",
          "module": "HarmTrace.Audio.Statistical",
          "name": "medianFilter",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "HarmTrace",
          "partial": "Filter",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Statistical.html#v:medianFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe mode: the element that occurs most often in the collection.\n\u003c/p\u003e",
          "module": "HarmTrace.Audio.Statistical",
          "name": "mode",
          "package": "HarmTrace",
          "signature": "[a] -\u003e a",
          "source": "src/HarmTrace-Audio-Statistical.html#mode",
          "type": "function"
        },
        "index": {
          "description": "The mode the element that occurs most often in the collection",
          "hierarchy": "HarmTrace Audio Statistical",
          "module": "HarmTrace.Audio.Statistical",
          "name": "mode",
          "normalized": "[a]-\u003ea",
          "package": "HarmTrace",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Audio-Statistical.html#v:mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.Instances",
          "name": "Instances",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Base-Instances.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HarmTrace Base Instances",
          "module": "HarmTrace.Base.Instances",
          "name": "Instances",
          "package": "HarmTrace",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Base-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "HAn",
          "package": "HarmTrace",
          "source": "src/HarmTrace-HAnTree-HAn.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "HAn",
          "package": "HarmTrace",
          "partial": "HAn",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "GetDur",
          "package": "HarmTrace",
          "source": "src/HarmTrace-HAnTree-HAn.html#GetDur",
          "type": "class"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "GetDur",
          "package": "HarmTrace",
          "partial": "Get Dur",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#t:GetDur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "HAn",
          "package": "HarmTrace",
          "source": "src/HarmTrace-HAnTree-HAn.html#HAn",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "HAn",
          "package": "HarmTrace",
          "partial": "HAn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#t:HAn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "HFunc",
          "package": "HarmTrace",
          "source": "src/HarmTrace-HAnTree-HAn.html#HFunc",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "HFunc",
          "package": "HarmTrace",
          "partial": "HFunc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#t:HFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "Prep",
          "package": "HarmTrace",
          "source": "src/HarmTrace-HAnTree-HAn.html#Prep",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "Prep",
          "package": "HarmTrace",
          "partial": "Prep",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#t:Prep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "SetDur",
          "package": "HarmTrace",
          "source": "src/HarmTrace-HAnTree-HAn.html#SetDur",
          "type": "class"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "SetDur",
          "package": "HarmTrace",
          "partial": "Set Dur",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#t:SetDur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "Spec",
          "package": "HarmTrace",
          "source": "src/HarmTrace-HAnTree-HAn.html#Spec",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "Spec",
          "package": "HarmTrace",
          "partial": "Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#t:Spec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "Trans",
          "package": "HarmTrace",
          "source": "src/HarmTrace-HAnTree-HAn.html#Trans",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "Trans",
          "package": "HarmTrace",
          "partial": "Trans",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#t:Trans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "Blues",
          "package": "HarmTrace",
          "signature": "Blues",
          "source": "src/HarmTrace-HAnTree-HAn.html#Spec",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "Blues",
          "package": "HarmTrace",
          "partial": "Blues",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:Blues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "DiatDom",
          "package": "HarmTrace",
          "signature": "DiatDom !Int !ScaleDegree",
          "source": "src/HarmTrace-HAnTree-HAn.html#Prep",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "DiatDom",
          "package": "HarmTrace",
          "partial": "Diat Dom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:DiatDom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "DimTrans",
          "package": "HarmTrace",
          "signature": "DimTrans !Int !ScaleDegree",
          "source": "src/HarmTrace-HAnTree-HAn.html#Trans",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "DimTrans",
          "package": "HarmTrace",
          "partial": "Dim Trans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:DimTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "DimTrit",
          "package": "HarmTrace",
          "signature": "DimTrit !Int !ScaleDegree",
          "source": "src/HarmTrace-HAnTree-HAn.html#Trans",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "DimTrit",
          "package": "HarmTrace",
          "partial": "Dim Trit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:DimTrit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "Dom",
          "package": "HarmTrace",
          "signature": "Dom !Int !Mode !Int !(Maybe Spec)",
          "source": "src/HarmTrace-HAnTree-HAn.html#HFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "Dom",
          "package": "HarmTrace",
          "partial": "Dom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:Dom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"HarmTrace.HAnTree.HAn\",\"HarmTrace.HAnTree.ToHAnTree\"]",
          "name": "HAn",
          "package": "HarmTrace",
          "signature": "HAn !Int !String",
          "source": "src/HarmTrace-HAnTree-HAn.html#HAn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:HAn\",\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#v:HAn\"]"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "HAn",
          "package": "HarmTrace",
          "partial": "HAn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:HAn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"HarmTrace.HAnTree.HAn\",\"HarmTrace.HAnTree.ToHAnTree\"]",
          "name": "HAnChord",
          "package": "HarmTrace",
          "signature": "HAnChord !ChordToken",
          "source": "src/HarmTrace-HAnTree-HAn.html#HAn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:HAnChord\",\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#v:HAnChord\"]"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "HAnChord",
          "package": "HarmTrace",
          "partial": "HAn Chord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:HAnChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"HarmTrace.HAnTree.HAn\",\"HarmTrace.HAnTree.ToHAnTree\"]",
          "name": "HAnFunc",
          "package": "HarmTrace",
          "signature": "HAnFunc !HFunc",
          "source": "src/HarmTrace-HAnTree-HAn.html#HAn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:HAnFunc\",\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#v:HAnFunc\"]"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "HAnFunc",
          "package": "HarmTrace",
          "partial": "HAn Func",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:HAnFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"HarmTrace.HAnTree.HAn\",\"HarmTrace.HAnTree.ToHAnTree\"]",
          "name": "HAnPrep",
          "package": "HarmTrace",
          "signature": "HAnPrep !Prep",
          "source": "src/HarmTrace-HAnTree-HAn.html#HAn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:HAnPrep\",\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#v:HAnPrep\"]"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "HAnPrep",
          "package": "HarmTrace",
          "partial": "HAn Prep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:HAnPrep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"HarmTrace.HAnTree.HAn\",\"HarmTrace.HAnTree.ToHAnTree\"]",
          "name": "HAnTrans",
          "package": "HarmTrace",
          "signature": "HAnTrans !Trans",
          "source": "src/HarmTrace-HAnTree-HAn.html#HAn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:HAnTrans\",\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#v:HAnTrans\"]"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "HAnTrans",
          "package": "HarmTrace",
          "partial": "HAn Trans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:HAnTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "MinBorrow",
          "package": "HarmTrace",
          "signature": "MinBorrow",
          "source": "src/HarmTrace-HAnTree-HAn.html#Spec",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "MinBorrow",
          "package": "HarmTrace",
          "partial": "Min Borrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:MinBorrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "NoPrep",
          "package": "HarmTrace",
          "signature": "NoPrep",
          "source": "src/HarmTrace-HAnTree-HAn.html#Prep",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "NoPrep",
          "package": "HarmTrace",
          "partial": "No Prep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:NoPrep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "NoTrans",
          "package": "HarmTrace",
          "signature": "NoTrans",
          "source": "src/HarmTrace-HAnTree-HAn.html#Trans",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "NoTrans",
          "package": "HarmTrace",
          "partial": "No Trans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:NoTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "P",
          "package": "HarmTrace",
          "signature": "P",
          "source": "src/HarmTrace-HAnTree-HAn.html#HFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "P",
          "package": "HarmTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "PD",
          "package": "HarmTrace",
          "signature": "PD",
          "source": "src/HarmTrace-HAnTree-HAn.html#HFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "PD",
          "package": "HarmTrace",
          "partial": "PD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:PD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "PT",
          "package": "HarmTrace",
          "signature": "PT",
          "source": "src/HarmTrace-HAnTree-HAn.html#HFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "PT",
          "package": "HarmTrace",
          "partial": "PT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:PT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "Parallel",
          "package": "HarmTrace",
          "signature": "Parallel",
          "source": "src/HarmTrace-HAnTree-HAn.html#Spec",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "Parallel",
          "package": "HarmTrace",
          "partial": "Parallel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:Parallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "SecDom",
          "package": "HarmTrace",
          "signature": "SecDom !Int !ScaleDegree",
          "source": "src/HarmTrace-HAnTree-HAn.html#Prep",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "SecDom",
          "package": "HarmTrace",
          "partial": "Sec Dom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:SecDom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "SecMin",
          "package": "HarmTrace",
          "signature": "SecMin !Int !ScaleDegree",
          "source": "src/HarmTrace-HAnTree-HAn.html#Prep",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "SecMin",
          "package": "HarmTrace",
          "partial": "Sec Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:SecMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "Sub",
          "package": "HarmTrace",
          "signature": "Sub !Int !Mode !Int !(Maybe Spec)",
          "source": "src/HarmTrace-HAnTree-HAn.html#HFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "Sub",
          "package": "HarmTrace",
          "partial": "Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "Ton",
          "package": "HarmTrace",
          "signature": "Ton !Int !Mode !Int !(Maybe Spec)",
          "source": "src/HarmTrace-HAnTree-HAn.html#HFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "Ton",
          "package": "HarmTrace",
          "partial": "Ton",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:Ton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "Trit",
          "package": "HarmTrace",
          "signature": "Trit !Int !ScaleDegree",
          "source": "src/HarmTrace-HAnTree-HAn.html#Trans",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "Trit",
          "package": "HarmTrace",
          "partial": "Trit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:Trit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "getDur",
          "package": "HarmTrace",
          "signature": "a -\u003e Int",
          "source": "src/HarmTrace-HAnTree-HAn.html#getDur",
          "type": "method"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "getDur",
          "normalized": "a-\u003eInt",
          "package": "HarmTrace",
          "partial": "Dur",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:getDur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAn",
          "name": "setDur",
          "package": "HarmTrace",
          "signature": "a -\u003e Int -\u003e a",
          "source": "src/HarmTrace-HAnTree-HAn.html#setDur",
          "type": "method"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAn",
          "module": "HarmTrace.HAnTree.HAn",
          "name": "setDur",
          "normalized": "a-\u003eInt-\u003ea",
          "package": "HarmTrace",
          "partial": "Dur",
          "signature": "a-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAn.html#v:setDur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAnParser",
          "name": "HAnParser",
          "package": "HarmTrace",
          "source": "src/HarmTrace-HAnTree-HAnParser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAnParser",
          "module": "HarmTrace.HAnTree.HAnParser",
          "name": "HAnParser",
          "package": "HarmTrace",
          "partial": "HAn Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAnParser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAnParser",
          "name": "pAnyStr",
          "package": "HarmTrace",
          "signature": "Parser String",
          "source": "src/HarmTrace-HAnTree-HAnParser.html#pAnyStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAnParser",
          "module": "HarmTrace.HAnTree.HAnParser",
          "name": "pAnyStr",
          "package": "HarmTrace",
          "partial": "Any Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAnParser.html#v:pAnyStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAnParser",
          "name": "pHFunc",
          "package": "HarmTrace",
          "signature": "Parser HFunc",
          "source": "src/HarmTrace-HAnTree-HAnParser.html#pHFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAnParser",
          "module": "HarmTrace.HAnTree.HAnParser",
          "name": "pHFunc",
          "package": "HarmTrace",
          "partial": "HFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAnParser.html#v:pHFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAnParser",
          "name": "pMode",
          "package": "HarmTrace",
          "signature": "Parser Mode",
          "source": "src/HarmTrace-HAnTree-HAnParser.html#pMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAnParser",
          "module": "HarmTrace.HAnTree.HAnParser",
          "name": "pMode",
          "package": "HarmTrace",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAnParser.html#v:pMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAnParser",
          "name": "pSpec",
          "package": "HarmTrace",
          "signature": "Parser Spec",
          "source": "src/HarmTrace-HAnTree-HAnParser.html#pSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAnParser",
          "module": "HarmTrace.HAnTree.HAnParser",
          "name": "pSpec",
          "package": "HarmTrace",
          "partial": "Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAnParser.html#v:pSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.HAnParser",
          "name": "parseHAn",
          "package": "HarmTrace",
          "signature": "state -\u003e HAn",
          "source": "src/HarmTrace-HAnTree-HAnParser.html#parseHAn",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree HAnParser",
          "module": "HarmTrace.HAnTree.HAnParser",
          "name": "parseHAn",
          "normalized": "a-\u003eHAn",
          "package": "HarmTrace",
          "partial": "HAn",
          "signature": "state-\u003eHAn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-HAnParser.html#v:parseHAn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "PostProcess",
          "package": "HarmTrace",
          "source": "src/HarmTrace-HAnTree-PostProcess.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree PostProcess",
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "PostProcess",
          "package": "HarmTrace",
          "partial": "Post Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "PPOption",
          "package": "HarmTrace",
          "source": "src/HarmTrace-HAnTree-PostProcess.html#PPOption",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree PostProcess",
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "PPOption",
          "package": "HarmTrace",
          "partial": "PPOption",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#t:PPOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "ExpandChordDurations",
          "package": "HarmTrace",
          "signature": "ExpandChordDurations",
          "source": "src/HarmTrace-HAnTree-PostProcess.html#PPOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree PostProcess",
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "ExpandChordDurations",
          "package": "HarmTrace",
          "partial": "Expand Chord Durations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#v:ExpandChordDurations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "MergeDelChords",
          "package": "HarmTrace",
          "signature": "MergeDelChords",
          "source": "src/HarmTrace-HAnTree-PostProcess.html#PPOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree PostProcess",
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "MergeDelChords",
          "package": "HarmTrace",
          "partial": "Merge Del Chords",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#v:MergeDelChords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "RemoveInsertions",
          "package": "HarmTrace",
          "signature": "RemoveInsertions",
          "source": "src/HarmTrace-HAnTree-PostProcess.html#PPOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree PostProcess",
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "RemoveInsertions",
          "package": "HarmTrace",
          "partial": "Remove Insertions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#v:RemoveInsertions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "RemovePDPT",
          "package": "HarmTrace",
          "signature": "RemovePDPT",
          "source": "src/HarmTrace-HAnTree-PostProcess.html#PPOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree PostProcess",
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "RemovePDPT",
          "package": "HarmTrace",
          "partial": "Remove PDPT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#v:RemovePDPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "expandChordDurations",
          "package": "HarmTrace",
          "signature": "Tree HAn -\u003e Tree HAn",
          "source": "src/HarmTrace-HAnTree-PostProcess.html#expandChordDurations",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree PostProcess",
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "expandChordDurations",
          "normalized": "Tree HAn-\u003eTree HAn",
          "package": "HarmTrace",
          "partial": "Chord Durations",
          "signature": "Tree HAn-\u003eTree HAn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#v:expandChordDurations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "mergeDelChords",
          "package": "HarmTrace",
          "signature": "Key -\u003e [Error Int] -\u003e [ChordLabel] -\u003e Tree HAn -\u003e Tree HAn",
          "source": "src/HarmTrace-HAnTree-PostProcess.html#mergeDelChords",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree PostProcess",
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "mergeDelChords",
          "normalized": "Key-\u003e[Error Int]-\u003e[ChordLabel]-\u003eTree HAn-\u003eTree HAn",
          "package": "HarmTrace",
          "partial": "Del Chords",
          "signature": "Key-\u003e[Error Int]-\u003e[ChordLabel]-\u003eTree HAn-\u003eTree HAn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#v:mergeDelChords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "removeInsertions",
          "package": "HarmTrace",
          "signature": "Tree HAn -\u003e Tree HAn",
          "source": "src/HarmTrace-HAnTree-PostProcess.html#removeInsertions",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree PostProcess",
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "removeInsertions",
          "normalized": "Tree HAn-\u003eTree HAn",
          "package": "HarmTrace",
          "partial": "Insertions",
          "signature": "Tree HAn-\u003eTree HAn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#v:removeInsertions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "removePDPT",
          "package": "HarmTrace",
          "signature": "Tree HAn -\u003e Tree HAn",
          "source": "src/HarmTrace-HAnTree-PostProcess.html#removePDPT",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree PostProcess",
          "module": "HarmTrace.HAnTree.PostProcess",
          "name": "removePDPT",
          "normalized": "Tree HAn-\u003eTree HAn",
          "package": "HarmTrace",
          "partial": "PDPT",
          "signature": "Tree HAn-\u003eTree HAn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-PostProcess.html#v:removePDPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.ToHAnTree",
          "name": "ToHAnTree",
          "package": "HarmTrace",
          "source": "src/HarmTrace-HAnTree-ToHAnTree.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree ToHAnTree",
          "module": "HarmTrace.HAnTree.ToHAnTree",
          "name": "ToHAnTree",
          "package": "HarmTrace",
          "partial": "To HAn Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.ToHAnTree",
          "name": "GTree",
          "package": "HarmTrace",
          "source": "src/HarmTrace-HAnTree-ToHAnTree.html#GTree",
          "type": "class"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree ToHAnTree",
          "module": "HarmTrace.HAnTree.ToHAnTree",
          "name": "GTree",
          "package": "HarmTrace",
          "partial": "GTree",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#t:GTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.ToHAnTree",
          "name": "HAn",
          "package": "HarmTrace",
          "source": "src/HarmTrace-HAnTree-HAn.html#HAn",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree ToHAnTree",
          "module": "HarmTrace.HAnTree.ToHAnTree",
          "name": "HAn",
          "package": "HarmTrace",
          "partial": "HAn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#t:HAn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.ToHAnTree",
          "name": "emptyHAnTree",
          "package": "HarmTrace",
          "signature": "Tree HAn",
          "source": "src/HarmTrace-HAnTree-ToHAnTree.html#emptyHAnTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree ToHAnTree",
          "module": "HarmTrace.HAnTree.ToHAnTree",
          "name": "emptyHAnTree",
          "package": "HarmTrace",
          "partial": "HAn Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#v:emptyHAnTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.ToHAnTree",
          "name": "gTree",
          "package": "HarmTrace",
          "signature": "a -\u003e [Tree HAn]",
          "source": "src/HarmTrace-HAnTree-ToHAnTree.html#gTree",
          "type": "method"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree ToHAnTree",
          "module": "HarmTrace.HAnTree.ToHAnTree",
          "name": "gTree",
          "normalized": "a-\u003e[Tree HAn]",
          "package": "HarmTrace",
          "partial": "Tree",
          "signature": "a-\u003e[Tree HAn]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#v:gTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.ToHAnTree",
          "name": "gTreeDefault",
          "package": "HarmTrace",
          "signature": "a -\u003e [Tree HAn]",
          "source": "src/HarmTrace-HAnTree-ToHAnTree.html#gTreeDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree ToHAnTree",
          "module": "HarmTrace.HAnTree.ToHAnTree",
          "name": "gTreeDefault",
          "normalized": "a-\u003e[Tree HAn]",
          "package": "HarmTrace",
          "partial": "Tree Default",
          "signature": "a-\u003e[Tree HAn]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#v:gTreeDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.ToHAnTree",
          "name": "gTreeHead",
          "package": "HarmTrace",
          "signature": "a -\u003e Tree HAn",
          "source": "src/HarmTrace-HAnTree-ToHAnTree.html#gTreeHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree ToHAnTree",
          "module": "HarmTrace.HAnTree.ToHAnTree",
          "name": "gTreeHead",
          "normalized": "a-\u003eTree HAn",
          "package": "HarmTrace",
          "partial": "Tree Head",
          "signature": "a-\u003eTree HAn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-ToHAnTree.html#v:gTreeHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "Tree",
          "package": "HarmTrace",
          "source": "src/HarmTrace-HAnTree-Tree.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "Tree",
          "package": "HarmTrace",
          "partial": "Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "Tree",
          "package": "HarmTrace",
          "source": "src/HarmTrace-HAnTree-Tree.html#Tree",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "Tree",
          "package": "HarmTrace",
          "partial": "Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#t:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "Node",
          "package": "HarmTrace",
          "signature": "Node",
          "source": "src/HarmTrace-HAnTree-Tree.html#Tree",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "Node",
          "package": "HarmTrace",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "avgDepth",
          "package": "HarmTrace",
          "signature": "Tree t -\u003e Float",
          "source": "src/HarmTrace-HAnTree-Tree.html#avgDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "avgDepth",
          "normalized": "Tree a-\u003eFloat",
          "package": "HarmTrace",
          "partial": "Depth",
          "signature": "Tree t-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:avgDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "avgDepthF",
          "package": "HarmTrace",
          "signature": "[Tree t] -\u003e Float",
          "source": "src/HarmTrace-HAnTree-Tree.html#avgDepthF",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "avgDepthF",
          "normalized": "[Tree a]-\u003eFloat",
          "package": "HarmTrace",
          "partial": "Depth",
          "signature": "[Tree t]-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:avgDepthF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "collectLeafs",
          "package": "HarmTrace",
          "signature": "Tree t -\u003e [Tree t]",
          "source": "src/HarmTrace-HAnTree-Tree.html#collectLeafs",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "collectLeafs",
          "normalized": "Tree a-\u003e[Tree a]",
          "package": "HarmTrace",
          "partial": "Leafs",
          "signature": "Tree t-\u003e[Tree t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:collectLeafs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "depth",
          "package": "HarmTrace",
          "signature": "Tree t -\u003e Int",
          "source": "src/HarmTrace-HAnTree-Tree.html#depth",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "depth",
          "normalized": "Tree a-\u003eInt",
          "package": "HarmTrace",
          "signature": "Tree t-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "depth'",
          "package": "HarmTrace",
          "signature": "Int -\u003e Tree t -\u003e [Int]",
          "source": "src/HarmTrace-HAnTree-Tree.html#depth%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "depth'",
          "normalized": "Int-\u003eTree a-\u003e[Int]",
          "package": "HarmTrace",
          "signature": "Int-\u003eTree t-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:depth-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "depthF",
          "package": "HarmTrace",
          "signature": "[Tree t] -\u003e Int",
          "source": "src/HarmTrace-HAnTree-Tree.html#depthF",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "depthF",
          "normalized": "[Tree a]-\u003eInt",
          "package": "HarmTrace",
          "signature": "[Tree t]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:depthF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "findClose",
          "package": "HarmTrace",
          "signature": "String -\u003e Int",
          "source": "src/HarmTrace-HAnTree-Tree.html#findClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "findClose",
          "normalized": "String-\u003eInt",
          "package": "HarmTrace",
          "partial": "Close",
          "signature": "String-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:findClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "findClose'",
          "package": "HarmTrace",
          "signature": "String -\u003e Int -\u003e Int -\u003e Int",
          "source": "src/HarmTrace-HAnTree-Tree.html#findClose%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "findClose'",
          "normalized": "String-\u003eInt-\u003eInt-\u003eInt",
          "package": "HarmTrace",
          "partial": "Close'",
          "signature": "String-\u003eInt-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:findClose-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "getChild",
          "package": "HarmTrace",
          "signature": "[Tree a]",
          "source": "src/HarmTrace-HAnTree-Tree.html#Tree",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "getChild",
          "normalized": "[Tree a]",
          "package": "HarmTrace",
          "partial": "Child",
          "signature": "[Tree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:getChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "getChildPns",
          "package": "HarmTrace",
          "signature": "Tree a -\u003e [Int]",
          "source": "src/HarmTrace-HAnTree-Tree.html#getChildPns",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "getChildPns",
          "normalized": "Tree a-\u003e[Int]",
          "package": "HarmTrace",
          "partial": "Child Pns",
          "signature": "Tree a-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:getChildPns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "getLabel",
          "package": "HarmTrace",
          "signature": "a",
          "source": "src/HarmTrace-HAnTree-Tree.html#Tree",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "getLabel",
          "package": "HarmTrace",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:getLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "getPn",
          "package": "HarmTrace",
          "signature": "(Maybe Int)",
          "source": "src/HarmTrace-HAnTree-Tree.html#Tree",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "getPn",
          "package": "HarmTrace",
          "partial": "Pn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:getPn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "getPns",
          "package": "HarmTrace",
          "signature": "[Tree t] -\u003e [Int]",
          "source": "src/HarmTrace-HAnTree-Tree.html#getPns",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "getPns",
          "normalized": "[Tree a]-\u003e[Int]",
          "package": "HarmTrace",
          "partial": "Pns",
          "signature": "[Tree t]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:getPns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "getSubTree",
          "package": "HarmTrace",
          "signature": "Tree t -\u003e Int -\u003e Tree t",
          "source": "src/HarmTrace-HAnTree-Tree.html#getSubTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "getSubTree",
          "normalized": "Tree a-\u003eInt-\u003eTree a",
          "package": "HarmTrace",
          "partial": "Sub Tree",
          "signature": "Tree t-\u003eInt-\u003eTree t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:getSubTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "isLf",
          "package": "HarmTrace",
          "signature": "Tree t -\u003e Bool",
          "source": "src/HarmTrace-HAnTree-Tree.html#isLf",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "isLf",
          "normalized": "Tree a-\u003eBool",
          "package": "HarmTrace",
          "partial": "Lf",
          "signature": "Tree t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:isLf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "matchToTree",
          "package": "HarmTrace",
          "signature": "Tree t -\u003e [Int] -\u003e [Tree t]",
          "source": "src/HarmTrace-HAnTree-Tree.html#matchToTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "matchToTree",
          "normalized": "Tree a-\u003e[Int]-\u003e[Tree a]",
          "package": "HarmTrace",
          "partial": "To Tree",
          "signature": "Tree t-\u003e[Int]-\u003e[Tree t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:matchToTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "pot",
          "package": "HarmTrace",
          "signature": "Tree t -\u003e [Tree t]",
          "source": "src/HarmTrace-HAnTree-Tree.html#pot",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "pot",
          "normalized": "Tree a-\u003e[Tree a]",
          "package": "HarmTrace",
          "signature": "Tree t-\u003e[Tree t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:pot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "pot'",
          "package": "HarmTrace",
          "signature": "Tree t -\u003e [Tree t]",
          "source": "src/HarmTrace-HAnTree-Tree.html#pot%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "pot'",
          "normalized": "Tree a-\u003e[Tree a]",
          "package": "HarmTrace",
          "signature": "Tree t-\u003e[Tree t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:pot-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "potPret",
          "package": "HarmTrace",
          "signature": "Tree t -\u003e [Tree t]",
          "source": "src/HarmTrace-HAnTree-Tree.html#potPret",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "potPret",
          "normalized": "Tree a-\u003e[Tree a]",
          "package": "HarmTrace",
          "partial": "Pret",
          "signature": "Tree t-\u003e[Tree t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:potPret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "preToPost",
          "package": "HarmTrace",
          "signature": "Tree t -\u003e Int -\u003e Int",
          "source": "src/HarmTrace-HAnTree-Tree.html#preToPost",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "preToPost",
          "normalized": "Tree a-\u003eInt-\u003eInt",
          "package": "HarmTrace",
          "partial": "To Post",
          "signature": "Tree t-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:preToPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "pret",
          "package": "HarmTrace",
          "signature": "Tree t -\u003e [Tree t]",
          "source": "src/HarmTrace-HAnTree-Tree.html#pret",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "pret",
          "normalized": "Tree a-\u003e[Tree a]",
          "package": "HarmTrace",
          "signature": "Tree t-\u003e[Tree t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:pret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "pret'",
          "package": "HarmTrace",
          "signature": "Tree t -\u003e [Tree t]",
          "source": "src/HarmTrace-HAnTree-Tree.html#pret%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "pret'",
          "normalized": "Tree a-\u003e[Tree a]",
          "package": "HarmTrace",
          "signature": "Tree t-\u003e[Tree t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:pret-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "remove",
          "package": "HarmTrace",
          "signature": "t -\u003e Tree t -\u003e Tree t",
          "source": "src/HarmTrace-HAnTree-Tree.html#remove",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "remove",
          "normalized": "a-\u003eTree a-\u003eTree a",
          "package": "HarmTrace",
          "signature": "t-\u003eTree t-\u003eTree t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "removeBy",
          "package": "HarmTrace",
          "signature": "(t -\u003e Bool) -\u003e Tree t -\u003e Tree t",
          "source": "src/HarmTrace-HAnTree-Tree.html#removeBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "removeBy",
          "normalized": "(a-\u003eBool)-\u003eTree a-\u003eTree a",
          "package": "HarmTrace",
          "partial": "By",
          "signature": "(t-\u003eBool)-\u003eTree t-\u003eTree t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:removeBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "removeBy'",
          "package": "HarmTrace",
          "signature": "(t -\u003e Bool) -\u003e Tree t -\u003e [Tree t]",
          "source": "src/HarmTrace-HAnTree-Tree.html#removeBy%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "removeBy'",
          "normalized": "(a-\u003eBool)-\u003eTree a-\u003e[Tree a]",
          "package": "HarmTrace",
          "partial": "By'",
          "signature": "(t-\u003eBool)-\u003eTree t-\u003e[Tree t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:removeBy-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "setPost",
          "package": "HarmTrace",
          "signature": "Tree t -\u003e Tree t",
          "source": "src/HarmTrace-HAnTree-Tree.html#setPost",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "setPost",
          "normalized": "Tree a-\u003eTree a",
          "package": "HarmTrace",
          "partial": "Post",
          "signature": "Tree t-\u003eTree t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:setPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "setPre",
          "package": "HarmTrace",
          "signature": "Tree t -\u003e Tree t",
          "source": "src/HarmTrace-HAnTree-Tree.html#setPre",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "setPre",
          "normalized": "Tree a-\u003eTree a",
          "package": "HarmTrace",
          "partial": "Pre",
          "signature": "Tree t-\u003eTree t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:setPre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "size",
          "package": "HarmTrace",
          "signature": "Tree t -\u003e Int",
          "source": "src/HarmTrace-HAnTree-Tree.html#size",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "size",
          "normalized": "Tree a-\u003eInt",
          "package": "HarmTrace",
          "signature": "Tree t-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "sizeF",
          "package": "HarmTrace",
          "signature": "[Tree t] -\u003e Int",
          "source": "src/HarmTrace-HAnTree-Tree.html#sizeF",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "sizeF",
          "normalized": "[Tree a]-\u003eInt",
          "package": "HarmTrace",
          "signature": "[Tree t]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:sizeF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.HAnTree.Tree",
          "name": "strTree",
          "package": "HarmTrace",
          "signature": "String -\u003e Tree String",
          "source": "src/HarmTrace-HAnTree-Tree.html#strTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace HAnTree Tree",
          "module": "HarmTrace.HAnTree.Tree",
          "name": "strTree",
          "normalized": "String-\u003eTree String",
          "package": "HarmTrace",
          "partial": "Tree",
          "signature": "String-\u003eTree String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-HAnTree-Tree.html#v:strTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.Alignment",
          "name": "Alignment",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Matching-Alignment.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HarmTrace Matching Alignment",
          "module": "HarmTrace.Matching.Alignment",
          "name": "Alignment",
          "package": "HarmTrace",
          "partial": "Alignment",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Alignment.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.Alignment",
          "name": "alignChordLab",
          "package": "HarmTrace",
          "signature": "Key -\u003e Key -\u003e [ChordLabel] -\u003e [ChordLabel] -\u003e ([SimChord], Float, Vector (Vector Int))",
          "source": "src/HarmTrace-Matching-Alignment.html#alignChordLab",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Matching Alignment",
          "module": "HarmTrace.Matching.Alignment",
          "name": "alignChordLab",
          "normalized": "Key-\u003eKey-\u003e[ChordLabel]-\u003e[ChordLabel]-\u003e([SimChord],Float,Vector(Vector Int))",
          "package": "HarmTrace",
          "partial": "Chord Lab",
          "signature": "Key-\u003eKey-\u003e[ChordLabel]-\u003e[ChordLabel]-\u003e([SimChord],Float,Vector(Vector Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Alignment.html#v:alignChordLab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.Alignment",
          "name": "alignHAnChord",
          "package": "HarmTrace",
          "signature": "Tree HAn -\u003e Tree HAn -\u003e ([HChord], Float, Vector (Vector Int))",
          "source": "src/HarmTrace-Matching-Alignment.html#alignHAnChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Matching Alignment",
          "module": "HarmTrace.Matching.Alignment",
          "name": "alignHAnChord",
          "normalized": "Tree HAn-\u003eTree HAn-\u003e([HChord],Float,Vector(Vector Int))",
          "package": "HarmTrace",
          "partial": "HAn Chord",
          "signature": "Tree HAn-\u003eTree HAn-\u003e([HChord],Float,Vector(Vector Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Alignment.html#v:alignHAnChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.Alignment",
          "name": "getAlignDist",
          "package": "HarmTrace",
          "signature": "Key -\u003e Key -\u003e [ChordLabel] -\u003e [ChordLabel] -\u003e Float",
          "source": "src/HarmTrace-Matching-Alignment.html#getAlignDist",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Matching Alignment",
          "module": "HarmTrace.Matching.Alignment",
          "name": "getAlignDist",
          "normalized": "Key-\u003eKey-\u003e[ChordLabel]-\u003e[ChordLabel]-\u003eFloat",
          "package": "HarmTrace",
          "partial": "Align Dist",
          "signature": "Key-\u003eKey-\u003e[ChordLabel]-\u003e[ChordLabel]-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Alignment.html#v:getAlignDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.Alignment",
          "name": "getHAnDist",
          "package": "HarmTrace",
          "signature": "Tree HAn -\u003e Tree HAn -\u003e Float",
          "source": "src/HarmTrace-Matching-Alignment.html#getHAnDist",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Matching Alignment",
          "module": "HarmTrace.Matching.Alignment",
          "name": "getHAnDist",
          "normalized": "Tree HAn-\u003eTree HAn-\u003eFloat",
          "package": "HarmTrace",
          "partial": "HAn Dist",
          "signature": "Tree HAn-\u003eTree HAn-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Alignment.html#v:getHAnDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.Alignment",
          "name": "pPrintV",
          "package": "HarmTrace",
          "signature": "Vector (Vector a) -\u003e IO ()",
          "source": "src/HarmTrace-Matching-Alignment.html#pPrintV",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Matching Alignment",
          "module": "HarmTrace.Matching.Alignment",
          "name": "pPrintV",
          "normalized": "Vector(Vector a)-\u003eIO()",
          "package": "HarmTrace",
          "partial": "Print",
          "signature": "Vector(Vector a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Alignment.html#v:pPrintV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.GuptaNishimura",
          "name": "GuptaNishimura",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Matching-GuptaNishimura.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HarmTrace Matching GuptaNishimura",
          "module": "HarmTrace.Matching.GuptaNishimura",
          "name": "GuptaNishimura",
          "package": "HarmTrace",
          "partial": "Gupta Nishimura",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-GuptaNishimura.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.GuptaNishimura",
          "name": "getLCES",
          "package": "HarmTrace",
          "signature": "Tree HAn -\u003e Tree HAn -\u003e ([Tree HAn], Int)",
          "source": "src/HarmTrace-Matching-GuptaNishimura.html#getLCES",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Matching GuptaNishimura",
          "module": "HarmTrace.Matching.GuptaNishimura",
          "name": "getLCES",
          "normalized": "Tree HAn-\u003eTree HAn-\u003e([Tree HAn],Int)",
          "package": "HarmTrace",
          "partial": "LCES",
          "signature": "Tree HAn-\u003eTree HAn-\u003e([Tree HAn],Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-GuptaNishimura.html#v:getLCES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.GuptaNishimura",
          "name": "getLCESdepth",
          "package": "HarmTrace",
          "signature": "Tree HAn -\u003e Tree HAn -\u003e Float",
          "source": "src/HarmTrace-Matching-GuptaNishimura.html#getLCESdepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Matching GuptaNishimura",
          "module": "HarmTrace.Matching.GuptaNishimura",
          "name": "getLCESdepth",
          "normalized": "Tree HAn-\u003eTree HAn-\u003eFloat",
          "package": "HarmTrace",
          "partial": "LCESdepth",
          "signature": "Tree HAn-\u003eTree HAn-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-GuptaNishimura.html#v:getLCESdepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.GuptaNishimura",
          "name": "getLCESsim",
          "package": "HarmTrace",
          "signature": "Tree HAn -\u003e Tree HAn -\u003e Float",
          "source": "src/HarmTrace-Matching-GuptaNishimura.html#getLCESsim",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Matching GuptaNishimura",
          "module": "HarmTrace.Matching.GuptaNishimura",
          "name": "getLCESsim",
          "normalized": "Tree HAn-\u003eTree HAn-\u003eFloat",
          "package": "HarmTrace",
          "partial": "LCESsim",
          "signature": "Tree HAn-\u003eTree HAn-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-GuptaNishimura.html#v:getLCESsim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.GuptaNishimura",
          "name": "getLCESsize",
          "package": "HarmTrace",
          "signature": "Tree HAn -\u003e Tree HAn -\u003e Float",
          "source": "src/HarmTrace-Matching-GuptaNishimura.html#getLCESsize",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Matching GuptaNishimura",
          "module": "HarmTrace.Matching.GuptaNishimura",
          "name": "getLCESsize",
          "normalized": "Tree HAn-\u003eTree HAn-\u003eFloat",
          "package": "HarmTrace",
          "partial": "LCESsize",
          "signature": "Tree HAn-\u003eTree HAn-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-GuptaNishimura.html#v:getLCESsize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.HChord",
          "name": "HChord",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Matching-HChord.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HarmTrace Matching HChord",
          "module": "HarmTrace.Matching.HChord",
          "name": "HChord",
          "package": "HarmTrace",
          "partial": "HChord",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-HChord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.HChord",
          "name": "HChord",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Matching-HChord.html#HChord",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Matching HChord",
          "module": "HarmTrace.Matching.HChord",
          "name": "HChord",
          "package": "HarmTrace",
          "partial": "HChord",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-HChord.html#t:HChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.HChord",
          "name": "Sim",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Matching-Sim.html#Sim",
          "type": "class"
        },
        "index": {
          "hierarchy": "HarmTrace Matching HChord",
          "module": "HarmTrace.Matching.HChord",
          "name": "Sim",
          "package": "HarmTrace",
          "partial": "Sim",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-HChord.html#t:Sim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.HChord",
          "name": "toHChords",
          "package": "HarmTrace",
          "signature": "Tree HAn -\u003e [HChord]",
          "source": "src/HarmTrace-Matching-HChord.html#toHChords",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Matching HChord",
          "module": "HarmTrace.Matching.HChord",
          "name": "toHChords",
          "normalized": "Tree HAn-\u003e[HChord]",
          "package": "HarmTrace",
          "partial": "HChords",
          "signature": "Tree HAn-\u003e[HChord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-HChord.html#v:toHChords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.Sim",
          "name": "Sim",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Matching-Sim.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HarmTrace Matching Sim",
          "module": "HarmTrace.Matching.Sim",
          "name": "Sim",
          "package": "HarmTrace",
          "partial": "Sim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Sim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.Sim",
          "name": "Sim",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Matching-Sim.html#Sim",
          "type": "class"
        },
        "index": {
          "hierarchy": "HarmTrace Matching Sim",
          "module": "HarmTrace.Matching.Sim",
          "name": "Sim",
          "package": "HarmTrace",
          "partial": "Sim",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Sim.html#t:Sim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.Sim",
          "name": "div1",
          "package": "HarmTrace",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/HarmTrace-Matching-Sim.html#div1",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Matching Sim",
          "module": "HarmTrace.Matching.Sim",
          "name": "div1",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "HarmTrace",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Sim.html#v:div1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.Sim",
          "name": "maxSim",
          "package": "HarmTrace",
          "signature": "[a] -\u003e Int",
          "source": "src/HarmTrace-Matching-Sim.html#maxSim",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Matching Sim",
          "module": "HarmTrace.Matching.Sim",
          "name": "maxSim",
          "normalized": "[a]-\u003eInt",
          "package": "HarmTrace",
          "partial": "Sim",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Sim.html#v:maxSim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.Sim",
          "name": "sim",
          "package": "HarmTrace",
          "signature": "a -\u003e a -\u003e Int",
          "source": "src/HarmTrace-Matching-Sim.html#sim",
          "type": "method"
        },
        "index": {
          "hierarchy": "HarmTrace Matching Sim",
          "module": "HarmTrace.Matching.Sim",
          "name": "sim",
          "normalized": "a-\u003ea-\u003eInt",
          "package": "HarmTrace",
          "signature": "a-\u003ea-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Sim.html#v:sim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.SimpleChord",
          "name": "SimpleChord",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Matching-SimpleChord.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HarmTrace Matching SimpleChord",
          "module": "HarmTrace.Matching.SimpleChord",
          "name": "SimpleChord",
          "package": "HarmTrace",
          "partial": "Simple Chord",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-SimpleChord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.SimpleChord",
          "name": "Sim",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Matching-Sim.html#Sim",
          "type": "class"
        },
        "index": {
          "hierarchy": "HarmTrace Matching SimpleChord",
          "module": "HarmTrace.Matching.SimpleChord",
          "name": "Sim",
          "package": "HarmTrace",
          "partial": "Sim",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-SimpleChord.html#t:Sim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.SimpleChord",
          "name": "SimChord",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Matching-SimpleChord.html#SimChord",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Matching SimpleChord",
          "module": "HarmTrace.Matching.SimpleChord",
          "name": "SimChord",
          "package": "HarmTrace",
          "partial": "Sim Chord",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-SimpleChord.html#t:SimChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.SimpleChord",
          "name": "toSimChords",
          "package": "HarmTrace",
          "signature": "ChordDegree -\u003e [SimChord]",
          "source": "src/HarmTrace-Matching-SimpleChord.html#toSimChords",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Matching SimpleChord",
          "module": "HarmTrace.Matching.SimpleChord",
          "name": "toSimChords",
          "normalized": "ChordDegree-\u003e[SimChord]",
          "package": "HarmTrace",
          "partial": "Sim Chords",
          "signature": "ChordDegree-\u003e[SimChord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-SimpleChord.html#v:toSimChords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.Standard",
          "name": "Standard",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Matching-Standard.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HarmTrace Matching Standard",
          "module": "HarmTrace.Matching.Standard",
          "name": "Standard",
          "package": "HarmTrace",
          "partial": "Standard",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Standard.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.Standard",
          "name": "diffChords",
          "package": "HarmTrace",
          "signature": "[a] -\u003e [a] -\u003e String",
          "source": "src/HarmTrace-Matching-Standard.html#diffChords",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Matching Standard",
          "module": "HarmTrace.Matching.Standard",
          "name": "diffChords",
          "normalized": "[a]-\u003e[a]-\u003eString",
          "package": "HarmTrace",
          "partial": "Chords",
          "signature": "[a]-\u003e[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Standard.html#v:diffChords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Matching.Standard",
          "name": "diffChordsLen",
          "package": "HarmTrace",
          "signature": "[a] -\u003e [a] -\u003e Float",
          "source": "src/HarmTrace-Matching-Standard.html#diffChordsLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Matching Standard",
          "module": "HarmTrace.Matching.Standard",
          "name": "diffChordsLen",
          "normalized": "[a]-\u003e[a]-\u003eFloat",
          "package": "HarmTrace",
          "partial": "Chords Len",
          "signature": "[a]-\u003e[a]-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Matching-Standard.html#v:diffChordsLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.ChordTokens",
          "name": "ChordTokens",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-ChordTokens.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HarmTrace Models ChordTokens",
          "module": "HarmTrace.Models.ChordTokens",
          "name": "ChordTokens",
          "package": "HarmTrace",
          "partial": "Chord Tokens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.ChordTokens",
          "name": "ChordToken",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-ChordTokens.html#ChordToken",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models ChordTokens",
          "module": "HarmTrace.Models.ChordTokens",
          "name": "ChordToken",
          "package": "HarmTrace",
          "partial": "Chord Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#t:ChordToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.ChordTokens",
          "name": "ParseStatus",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-ChordTokens.html#ParseStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models ChordTokens",
          "module": "HarmTrace.Models.ChordTokens",
          "name": "ParseStatus",
          "package": "HarmTrace",
          "partial": "Parse Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#t:ParseStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.ChordTokens",
          "name": "PieceToken",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-ChordTokens.html#PieceToken",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models ChordTokens",
          "module": "HarmTrace.Models.ChordTokens",
          "name": "PieceToken",
          "package": "HarmTrace",
          "partial": "Piece Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#t:PieceToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.ChordTokens",
          "name": "ChordToken",
          "package": "HarmTrace",
          "signature": "ChordToken",
          "source": "src/HarmTrace-Models-ChordTokens.html#ChordToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models ChordTokens",
          "module": "HarmTrace.Models.ChordTokens",
          "name": "ChordToken",
          "package": "HarmTrace",
          "partial": "Chord Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:ChordToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.ChordTokens",
          "name": "Deleted",
          "package": "HarmTrace",
          "signature": "Deleted",
          "source": "src/HarmTrace-Models-ChordTokens.html#ParseStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models ChordTokens",
          "module": "HarmTrace.Models.ChordTokens",
          "name": "Deleted",
          "package": "HarmTrace",
          "partial": "Deleted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:Deleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.ChordTokens",
          "name": "Inserted",
          "package": "HarmTrace",
          "signature": "Inserted",
          "source": "src/HarmTrace-Models-ChordTokens.html#ParseStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models ChordTokens",
          "module": "HarmTrace.Models.ChordTokens",
          "name": "Inserted",
          "package": "HarmTrace",
          "partial": "Inserted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:Inserted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.ChordTokens",
          "name": "NotParsed",
          "package": "HarmTrace",
          "signature": "NotParsed",
          "source": "src/HarmTrace-Models-ChordTokens.html#ParseStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models ChordTokens",
          "module": "HarmTrace.Models.ChordTokens",
          "name": "NotParsed",
          "package": "HarmTrace",
          "partial": "Not Parsed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:NotParsed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.ChordTokens",
          "name": "Parsed",
          "package": "HarmTrace",
          "signature": "Parsed",
          "source": "src/HarmTrace-Models-ChordTokens.html#ParseStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models ChordTokens",
          "module": "HarmTrace.Models.ChordTokens",
          "name": "Parsed",
          "package": "HarmTrace",
          "partial": "Parsed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:Parsed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.ChordTokens",
          "name": "PieceToken",
          "package": "HarmTrace",
          "signature": "PieceToken Key [ChordToken]",
          "source": "src/HarmTrace-Models-ChordTokens.html#PieceToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models ChordTokens",
          "module": "HarmTrace.Models.ChordTokens",
          "name": "PieceToken",
          "normalized": "PieceToken Key[ChordToken]",
          "package": "HarmTrace",
          "partial": "Piece Token",
          "signature": "PieceToken Key[ChordToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:PieceToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.ChordTokens",
          "name": "chordNumReps",
          "package": "HarmTrace",
          "signature": "Int",
          "source": "src/HarmTrace-Models-ChordTokens.html#ChordToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models ChordTokens",
          "module": "HarmTrace.Models.ChordTokens",
          "name": "chordNumReps",
          "package": "HarmTrace",
          "partial": "Num Reps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:chordNumReps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.ChordTokens",
          "name": "chords",
          "package": "HarmTrace",
          "signature": "[ChordLabel]",
          "source": "src/HarmTrace-Models-ChordTokens.html#ChordToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models ChordTokens",
          "module": "HarmTrace.Models.ChordTokens",
          "name": "chords",
          "normalized": "[ChordLabel]",
          "package": "HarmTrace",
          "signature": "[ChordLabel]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:chords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.ChordTokens",
          "name": "classType",
          "package": "HarmTrace",
          "signature": "ClassType",
          "source": "src/HarmTrace-Models-ChordTokens.html#ChordToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models ChordTokens",
          "module": "HarmTrace.Models.ChordTokens",
          "name": "classType",
          "package": "HarmTrace",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:classType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.ChordTokens",
          "name": "dur",
          "package": "HarmTrace",
          "signature": "Int",
          "source": "src/HarmTrace-Models-ChordTokens.html#ChordToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models ChordTokens",
          "module": "HarmTrace.Models.ChordTokens",
          "name": "dur",
          "package": "HarmTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:dur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.ChordTokens",
          "name": "root",
          "package": "HarmTrace",
          "signature": "ScaleDegree",
          "source": "src/HarmTrace-Models-ChordTokens.html#ChordToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models ChordTokens",
          "module": "HarmTrace.Models.ChordTokens",
          "name": "root",
          "package": "HarmTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.ChordTokens",
          "name": "status",
          "package": "HarmTrace",
          "signature": "ParseStatus",
          "source": "src/HarmTrace-Models-ChordTokens.html#ChordToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models ChordTokens",
          "module": "HarmTrace.Models.ChordTokens",
          "name": "status",
          "package": "HarmTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges duplicate chords and transforms absolute chord labels into key\n relative tokens that can be parsed by the HarmTrace model \n\u003c/p\u003e",
          "module": "HarmTrace.Models.ChordTokens",
          "name": "toKeyRelTok",
          "package": "HarmTrace",
          "signature": "Key -\u003e [ChordLabel] -\u003e [ChordToken]",
          "source": "src/HarmTrace-Models-ChordTokens.html#toKeyRelTok",
          "type": "function"
        },
        "index": {
          "description": "Merges duplicate chords and transforms absolute chord labels into key relative tokens that can be parsed by the HarmTrace model",
          "hierarchy": "HarmTrace Models ChordTokens",
          "module": "HarmTrace.Models.ChordTokens",
          "name": "toKeyRelTok",
          "normalized": "Key-\u003e[ChordLabel]-\u003e[ChordToken]",
          "package": "HarmTrace",
          "partial": "Key Rel Tok",
          "signature": "Key-\u003e[ChordLabel]-\u003e[ChordToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-ChordTokens.html#v:toKeyRelTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Adhoc instances for the jazz model\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Instances",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Adhoc instances for the jazz model",
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Instances",
          "package": "HarmTrace",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "DMajBorrow_D_24_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#DMajBorrow_D_24_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "DMajBorrow_D_24_bor_",
          "package": "HarmTrace",
          "partial": "DMaj Borrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:DMajBorrow_D_24_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "DMinBorrow_Dm_24_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#DMinBorrow_Dm_24_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "DMinBorrow_Dm_24_bor_",
          "package": "HarmTrace",
          "partial": "DMin Borrow Dm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:DMinBorrow_Dm_24_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Dom_D_1_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#Dom_D_1_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Dom_D_1_",
          "package": "HarmTrace",
          "partial": "Dom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Dom_D_1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Dom_D_2_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#Dom_D_2_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Dom_D_2_",
          "package": "HarmTrace",
          "partial": "Dom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Dom_D_2_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Dom_D_3_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#Dom_D_3_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Dom_D_3_",
          "package": "HarmTrace",
          "partial": "Dom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Dom_D_3_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Dom_D_4_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#Dom_D_4_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Dom_D_4_",
          "package": "HarmTrace",
          "partial": "Dom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Dom_D_4_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Dom_D_8_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#Dom_D_8_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Dom_D_8_bor_",
          "package": "HarmTrace",
          "partial": "Dom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Dom_D_8_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Dom_Dm_4_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#Dom_Dm_4_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Dom_Dm_4_",
          "package": "HarmTrace",
          "partial": "Dom Dm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Dom_Dm_4_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Dom_Dm_8_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#Dom_Dm_8_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Dom_Dm_8_bor_",
          "package": "HarmTrace",
          "partial": "Dom Dm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Dom_Dm_8_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "GetDegree",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#GetDegree",
          "type": "class"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "GetDegree",
          "package": "HarmTrace",
          "partial": "Get Degree",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:GetDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Phrase_PD_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#Phrase_PD_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Phrase_PD_",
          "package": "HarmTrace",
          "partial": "Phrase PD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Phrase_PD_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Phrase_PT_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#Phrase_PT_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Phrase_PT_",
          "package": "HarmTrace",
          "partial": "Phrase PT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Phrase_PT_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepDMajBorrow_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#RepDMajBorrow_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepDMajBorrow_",
          "package": "HarmTrace",
          "partial": "Rep DMaj Borrow",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepDMajBorrow_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepDMinBorrow_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#RepDMinBorrow_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepDMinBorrow_",
          "package": "HarmTrace",
          "partial": "Rep DMin Borrow",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepDMinBorrow_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepDom_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#RepDom_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepDom_",
          "package": "HarmTrace",
          "partial": "Rep Dom",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepDom_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepPhrase_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#RepPhrase_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepPhrase_",
          "package": "HarmTrace",
          "partial": "Rep Phrase",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepPhrase_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepSDom_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#RepSDom_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepSDom_",
          "package": "HarmTrace",
          "partial": "Rep SDom",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepSDom_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepSMajBorrow_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#RepSMajBorrow_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepSMajBorrow_",
          "package": "HarmTrace",
          "partial": "Rep SMaj Borrow",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepSMajBorrow_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepSMinBorrow_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#RepSMinBorrow_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepSMinBorrow_",
          "package": "HarmTrace",
          "partial": "Rep SMin Borrow",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepSMinBorrow_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepTMajBorrow_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#RepTMajBorrow_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepTMajBorrow_",
          "package": "HarmTrace",
          "partial": "Rep TMaj Borrow",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepTMajBorrow_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepTMinBorrow_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#RepTMinBorrow_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepTMinBorrow_",
          "package": "HarmTrace",
          "partial": "Rep TMin Borrow",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepTMinBorrow_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepTon_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#RepTon_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "RepTon_",
          "package": "HarmTrace",
          "partial": "Rep Ton",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:RepTon_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SDom_S_1_par_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#SDom_S_1_par_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SDom_S_1_par_",
          "package": "HarmTrace",
          "partial": "SDom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SDom_S_1_par_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SDom_S_2_par_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#SDom_S_2_par_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SDom_S_2_par_",
          "package": "HarmTrace",
          "partial": "SDom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SDom_S_2_par_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SDom_S_3_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#SDom_S_3_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SDom_S_3_",
          "package": "HarmTrace",
          "partial": "SDom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SDom_S_3_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SDom_S_4_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#SDom_S_4_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SDom_S_4_",
          "package": "HarmTrace",
          "partial": "SDom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SDom_S_4_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SDom_S_5_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#SDom_S_5_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SDom_S_5_bor_",
          "package": "HarmTrace",
          "partial": "SDom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SDom_S_5_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SDom_Sm_3_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#SDom_Sm_3_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SDom_Sm_3_",
          "package": "HarmTrace",
          "partial": "SDom Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SDom_Sm_3_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SDom_Sm_4_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#SDom_Sm_4_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SDom_Sm_4_",
          "package": "HarmTrace",
          "partial": "SDom Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SDom_Sm_4_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SDom_Sm_5_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#SDom_Sm_5_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SDom_Sm_5_bor_",
          "package": "HarmTrace",
          "partial": "SDom Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SDom_Sm_5_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SDom_Sm_6_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#SDom_Sm_6_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SDom_Sm_6_",
          "package": "HarmTrace",
          "partial": "SDom Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SDom_Sm_6_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SMajBorrow_S_20_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#SMajBorrow_S_20_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SMajBorrow_S_20_bor_",
          "package": "HarmTrace",
          "partial": "SMaj Borrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SMajBorrow_S_20_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SMinBorrow_Sm_20_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#SMinBorrow_Sm_20_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SMinBorrow_Sm_20_bor_",
          "package": "HarmTrace",
          "partial": "SMin Borrow Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SMinBorrow_Sm_20_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SMinBorrow_Sm_22_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#SMinBorrow_Sm_22_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "SMinBorrow_Sm_22_bor_",
          "package": "HarmTrace",
          "partial": "SMin Borrow Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:SMinBorrow_Sm_22_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "TMajBorrow_T_21_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#TMajBorrow_T_21_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "TMajBorrow_T_21_bor_",
          "package": "HarmTrace",
          "partial": "TMaj Borrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:TMajBorrow_T_21_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "TMajBorrow_T_23_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#TMajBorrow_T_23_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "TMajBorrow_T_23_bor_",
          "package": "HarmTrace",
          "partial": "TMaj Borrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:TMajBorrow_T_23_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "TMinBorrow_Tm_21_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#TMinBorrow_Tm_21_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "TMinBorrow_Tm_21_bor_",
          "package": "HarmTrace",
          "partial": "TMin Borrow Tm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:TMinBorrow_Tm_21_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "TMinBorrow_Tm_23_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#TMinBorrow_Tm_23_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "TMinBorrow_Tm_23_bor_",
          "package": "HarmTrace",
          "partial": "TMin Borrow Tm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:TMinBorrow_Tm_23_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Ton_T_1_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#Ton_T_1_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Ton_T_1_",
          "package": "HarmTrace",
          "partial": "Ton",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Ton_T_1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Ton_T_2_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#Ton_T_2_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Ton_T_2_",
          "package": "HarmTrace",
          "partial": "Ton",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Ton_T_2_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Ton_T_3_par_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#Ton_T_3_par_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Ton_T_3_par_",
          "package": "HarmTrace",
          "partial": "Ton",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Ton_T_3_par_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Ton_T_6_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#Ton_T_6_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Ton_T_6_bor_",
          "package": "HarmTrace",
          "partial": "Ton",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Ton_T_6_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Ton_Tm_1_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#Ton_Tm_1_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Ton_Tm_1_",
          "package": "HarmTrace",
          "partial": "Ton Tm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Ton_Tm_1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Ton_Tm_2_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#Ton_Tm_2_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Ton_Tm_2_",
          "package": "HarmTrace",
          "partial": "Ton Tm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Ton_Tm_2_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Ton_Tm_3_par_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#Ton_Tm_3_par_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Ton_Tm_3_par_",
          "package": "HarmTrace",
          "partial": "Ton Tm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Ton_Tm_3_par_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Ton_Tm_6_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#Ton_Tm_6_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "Ton_Tm_6_bor_",
          "package": "HarmTrace",
          "partial": "Ton Tm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#t:Ton_Tm_6_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "getDeg",
          "package": "HarmTrace",
          "signature": "a -\u003e (ScaleDegree, Int)",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#getDeg",
          "type": "method"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "getDeg",
          "normalized": "a-\u003e(ScaleDegree,Int)",
          "package": "HarmTrace",
          "partial": "Deg",
          "signature": "a-\u003e(ScaleDegree,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#v:getDeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "pChord",
          "package": "HarmTrace",
          "signature": "ScaleDegree -\u003e ClassType -\u003e PMusic (Surface_Chord deg clss (Su n))",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#pChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "pChord",
          "normalized": "ScaleDegree-\u003eClassType-\u003ePMusic(Surface_Chord a b(Su c))",
          "package": "HarmTrace",
          "partial": "Chord",
          "signature": "ScaleDegree-\u003eClassType-\u003ePMusic(Surface_Chord deg clss(Su n))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#v:pChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "toGTree",
          "package": "HarmTrace",
          "signature": "(Int -\u003e ScaleDegree -\u003e Trans) -\u003e Int -\u003e a -\u003e [Tree HAn]",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#toGTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "toGTree",
          "normalized": "(Int-\u003eScaleDegree-\u003eTrans)-\u003eInt-\u003ea-\u003e[Tree HAn]",
          "package": "HarmTrace",
          "partial": "GTree",
          "signature": "(Int-\u003eScaleDegree-\u003eTrans)-\u003eInt-\u003ea-\u003e[Tree HAn]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#v:toGTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "toGTreeSplit",
          "package": "HarmTrace",
          "signature": "(Int -\u003e ScaleDegree -\u003e Prep) -\u003e b -\u003e a -\u003e [Tree HAn]",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#toGTreeSplit",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "toGTreeSplit",
          "normalized": "(Int-\u003eScaleDegree-\u003ePrep)-\u003ea-\u003eb-\u003e[Tree HAn]",
          "package": "HarmTrace",
          "partial": "GTree Split",
          "signature": "(Int-\u003eScaleDegree-\u003ePrep)-\u003eb-\u003ea-\u003e[Tree HAn]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#v:toGTreeSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "toSDVal",
          "package": "HarmTrace",
          "signature": "a -\u003e ScaleDegree",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#toSDVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "toSDVal",
          "normalized": "a-\u003eScaleDegree",
          "package": "HarmTrace",
          "partial": "SDVal",
          "signature": "a-\u003eScaleDegree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#v:toSDVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "toTransSDVal",
          "package": "HarmTrace",
          "signature": "Int -\u003e a -\u003e ScaleDegree",
          "source": "src/HarmTrace-Models-Jazz-Instances.html#toTransSDVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Instances",
          "module": "HarmTrace.Models.Jazz.Instances",
          "name": "toTransSDVal",
          "normalized": "Int-\u003ea-\u003eScaleDegree",
          "package": "HarmTrace",
          "partial": "Trans SDVal",
          "signature": "Int-\u003ea-\u003eScaleDegree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Instances.html#v:toTransSDVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: The jazz parser\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HarmTrace.Models.Jazz.Main",
          "name": "Main",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Main.html",
          "type": "module"
        },
        "index": {
          "description": "Summary The jazz parser",
          "hierarchy": "HarmTrace Models Jazz Main",
          "module": "HarmTrace.Models.Jazz.Main",
          "name": "Main",
          "package": "HarmTrace",
          "partial": "Main",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Main.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Main",
          "name": "pJazz",
          "package": "HarmTrace",
          "signature": "Key -\u003e PMusic [Piece]",
          "source": "src/HarmTrace-Models-Jazz-Main.html#pJazz",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Main",
          "module": "HarmTrace.Models.Jazz.Main",
          "name": "pJazz",
          "normalized": "Key-\u003ePMusic[Piece]",
          "package": "HarmTrace",
          "partial": "Jazz",
          "signature": "Key-\u003ePMusic[Piece]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Main.html#v:pJazz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: The jazz model\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Model",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html",
          "type": "module"
        },
        "index": {
          "description": "Summary The jazz model",
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Model",
          "package": "HarmTrace",
          "partial": "Model",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Base_Final",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Base_Final",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Base_Final",
          "package": "HarmTrace",
          "partial": "Base Final",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Base_Final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Base_SD",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Base_SD",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Base_SD",
          "package": "HarmTrace",
          "partial": "Base SD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Base_SD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "DMajBorrow",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#DMajBorrow",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "DMajBorrow",
          "package": "HarmTrace",
          "partial": "DMaj Borrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:DMajBorrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "DMinBorrow",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#DMinBorrow",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "DMinBorrow",
          "package": "HarmTrace",
          "partial": "DMin Borrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:DMinBorrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"HarmTrace.Models.Jazz.Model\",\"HarmTrace.Models.Pop.Model\"]",
          "name": "DiatV",
          "package": "HarmTrace",
          "signature": "DiatV",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:DiatV\",\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:DiatV\"]"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "DiatV",
          "package": "HarmTrace",
          "partial": "Diat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:DiatV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"HarmTrace.Models.Jazz.Model\",\"HarmTrace.Models.Pop.Model\"]",
          "name": "DiatVM",
          "package": "HarmTrace",
          "signature": "DiatVM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:DiatVM\",\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:DiatVM\"]"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "DiatVM",
          "package": "HarmTrace",
          "partial": "Diat VM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:DiatVM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "DimClass",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#DimClass",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "DimClass",
          "package": "HarmTrace",
          "partial": "Dim Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:DimClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Dom",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Dom",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Dom",
          "package": "HarmTrace",
          "partial": "Dom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Dom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "DomClass",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#DomClass",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "DomClass",
          "package": "HarmTrace",
          "partial": "Dom Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:DomClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Final",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Final",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Final",
          "package": "HarmTrace",
          "partial": "Final",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "FinalDimTrans",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#FinalDimTrans",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "FinalDimTrans",
          "package": "HarmTrace",
          "partial": "Final Dim Trans",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:FinalDimTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "I",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#I",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "I",
          "package": "HarmTrace",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "II",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#II",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "II",
          "package": "HarmTrace",
          "partial": "II",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:II"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "III",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#III",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "III",
          "package": "HarmTrace",
          "partial": "III",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:III"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "IIIb",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#IIIb",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "IIIb",
          "package": "HarmTrace",
          "partial": "IIIb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:IIIb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "IIIs",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#IIIs",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "IIIs",
          "package": "HarmTrace",
          "partial": "IIIs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:IIIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "IIb",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#IIb",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "IIb",
          "package": "HarmTrace",
          "partial": "IIb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:IIb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"HarmTrace.Models.Jazz.Model\",\"HarmTrace.Models.Pop.Model\"]",
          "name": "IIbDim",
          "package": "HarmTrace",
          "signature": "IIbDim",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:IIbDim\",\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:IIbDim\"]"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "IIbDim",
          "package": "HarmTrace",
          "partial": "IIb Dim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:IIbDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "IIs",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#IIs",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "IIs",
          "package": "HarmTrace",
          "partial": "IIs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:IIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "IV",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#IV",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "IV",
          "package": "HarmTrace",
          "partial": "IV",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:IV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "IVb",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#IVb",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "IVb",
          "package": "HarmTrace",
          "partial": "IVb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:IVb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "IVs",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#IVs",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "IVs",
          "package": "HarmTrace",
          "partial": "IVs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:IVs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Ib",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Ib",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Ib",
          "package": "HarmTrace",
          "partial": "Ib",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Ib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Imp",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Imp",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Imp",
          "package": "HarmTrace",
          "partial": "Imp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Imp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Is",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Is",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Is",
          "package": "HarmTrace",
          "partial": "Is",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Is"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "MajClass",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#MajClass",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "MajClass",
          "package": "HarmTrace",
          "partial": "Maj Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:MajClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "MajMode",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#MajMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "MajMode",
          "package": "HarmTrace",
          "partial": "Maj Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:MajMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "MinClass",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#MinClass",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "MinClass",
          "package": "HarmTrace",
          "partial": "Min Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:MinClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "MinMode",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#MinMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "MinMode",
          "package": "HarmTrace",
          "partial": "Min Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:MinMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"HarmTrace.Models.Jazz.Model\",\"HarmTrace.Models.Pop.Model\"]",
          "name": "MinThird",
          "package": "HarmTrace",
          "signature": "MinThird",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:MinThird\",\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:MinThird\"]"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "MinThird",
          "package": "HarmTrace",
          "partial": "Min Third",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:MinThird"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Phrase",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Phrase",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Phrase",
          "package": "HarmTrace",
          "partial": "Phrase",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Phrase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Piece",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Piece",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Piece",
          "package": "HarmTrace",
          "partial": "Piece",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Piece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "SD",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#SD",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "SD",
          "package": "HarmTrace",
          "partial": "SD",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:SD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "SDom",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "SDom",
          "package": "HarmTrace",
          "partial": "SDom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:SDom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "SMajBorrow",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#SMajBorrow",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "SMajBorrow",
          "package": "HarmTrace",
          "partial": "SMaj Borrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:SMajBorrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "SMinBorrow",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#SMinBorrow",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "SMinBorrow",
          "package": "HarmTrace",
          "partial": "SMin Borrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:SMinBorrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Surface_Chord",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Surface_Chord",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Surface_Chord",
          "package": "HarmTrace",
          "partial": "Surface Chord",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Surface_Chord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "TMajBorrow",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#TMajBorrow",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "TMajBorrow",
          "package": "HarmTrace",
          "partial": "TMaj Borrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:TMajBorrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "TMinBorrow",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#TMinBorrow",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "TMinBorrow",
          "package": "HarmTrace",
          "partial": "TMin Borrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:TMinBorrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "ToClass",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#ToClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "ToClass",
          "package": "HarmTrace",
          "partial": "To Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:ToClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "ToDegree",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#ToDegree",
          "type": "class"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "ToDegree",
          "package": "HarmTrace",
          "partial": "To Degree",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:ToDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Ton",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Ton",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Ton",
          "package": "HarmTrace",
          "partial": "Ton",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Ton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "TritMinVSub",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#TritMinVSub",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "TritMinVSub",
          "package": "HarmTrace",
          "partial": "Trit Min VSub",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:TritMinVSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"HarmTrace.Models.Jazz.Model\",\"HarmTrace.Models.Pop.Model\"]",
          "name": "Tritone",
          "package": "HarmTrace",
          "signature": "Tritone",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Tritone\",\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Tritone\"]"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Tritone",
          "package": "HarmTrace",
          "partial": "Tritone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Tritone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "V",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#V",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "V",
          "package": "HarmTrace",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"HarmTrace.Models.Jazz.Model\",\"HarmTrace.Models.Pop.Model\"]",
          "name": "VDom",
          "package": "HarmTrace",
          "signature": "VDom",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:VDom\",\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:VDom\"]"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "VDom",
          "package": "HarmTrace",
          "partial": "VDom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:VDom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "VI",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#VI",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "VI",
          "package": "HarmTrace",
          "partial": "VI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:VI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "VII",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#VII",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "VII",
          "package": "HarmTrace",
          "partial": "VII",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:VII"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "VIIb",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#VIIb",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "VIIb",
          "package": "HarmTrace",
          "partial": "VIIb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:VIIb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "VIIs",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#VIIs",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "VIIs",
          "package": "HarmTrace",
          "partial": "VIIs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:VIIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "VIb",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#VIb",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "VIb",
          "package": "HarmTrace",
          "partial": "VIb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:VIb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "VIs",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#VIs",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "VIs",
          "package": "HarmTrace",
          "partial": "VIs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:VIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"HarmTrace.Models.Jazz.Model\",\"HarmTrace.Models.Pop.Model\"]",
          "name": "VMin",
          "package": "HarmTrace",
          "signature": "VMin",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:VMin\",\"http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:VMin\"]"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "VMin",
          "package": "HarmTrace",
          "partial": "VMin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:VMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Vb",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Vb",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Vb",
          "package": "HarmTrace",
          "partial": "Vb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Vb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Vs",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Vs",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Vs",
          "package": "HarmTrace",
          "partial": "Vs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#t:Vs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Base_Final",
          "package": "HarmTrace",
          "signature": "FinalDimTrans deg clss -\u003e Base_Final deg clss (Su n)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Base_Final",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Base_Final",
          "normalized": "FinalDimTrans a b-\u003eBase_Final a b(Su c)",
          "package": "HarmTrace",
          "partial": "Base Final",
          "signature": "FinalDimTrans deg clss-\u003eBase_Final deg clss(Su n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Base_Final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Base_SD",
          "package": "HarmTrace",
          "signature": "TritMinVSub deg clss -\u003e Base_SD deg clss (Su n)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Base_SD",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Base_SD",
          "normalized": "TritMinVSub a b-\u003eBase_SD a b(Su c)",
          "package": "HarmTrace",
          "partial": "Base SD",
          "signature": "TritMinVSub deg clss-\u003eBase_SD deg clss(Su n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Base_SD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Cons_Diat",
          "package": "HarmTrace",
          "signature": "Base_SD (DiatV deg) MinClass n -\u003e Base_SD deg MinClass n -\u003e Base_SD deg MinClass (Su n)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Base_SD",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Cons_Diat",
          "normalized": "Base_SD(DiatV a)MinClass b-\u003eBase_SD a MinClass b-\u003eBase_SD a MinClass(Su b)",
          "package": "HarmTrace",
          "partial": "Cons Diat",
          "signature": "Base_SD(DiatV deg)MinClass n-\u003eBase_SD deg MinClass n-\u003eBase_SD deg MinClass(Su n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Cons_Diat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Cons_DiatM",
          "package": "HarmTrace",
          "signature": "Base_SD (DiatVM deg) MajClass n -\u003e Base_SD deg MajClass n -\u003e Base_SD deg MajClass (Su n)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Base_SD",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Cons_DiatM",
          "normalized": "Base_SD(DiatVM a)MajClass b-\u003eBase_SD a MajClass b-\u003eBase_SD a MajClass(Su b)",
          "package": "HarmTrace",
          "partial": "Cons Diat",
          "signature": "Base_SD(DiatVM deg)MajClass n-\u003eBase_SD deg MajClass n-\u003eBase_SD deg MajClass(Su n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Cons_DiatM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Cons_DiatM'",
          "package": "HarmTrace",
          "signature": "Base_SD (DiatVM deg) MajClass n -\u003e Base_SD deg MinClass n -\u003e Base_SD deg MinClass (Su n)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Base_SD",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Cons_DiatM'",
          "normalized": "Base_SD(DiatVM a)MajClass b-\u003eBase_SD a MinClass b-\u003eBase_SD a MinClass(Su b)",
          "package": "HarmTrace",
          "partial": "Cons Diat M'",
          "signature": "Base_SD(DiatVM deg)MajClass n-\u003eBase_SD deg MinClass n-\u003eBase_SD deg MinClass(Su n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Cons_DiatM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Cons_Vdom",
          "package": "HarmTrace",
          "signature": "Base_SD (VDom deg) DomClass n -\u003e Base_SD deg clss n -\u003e Base_SD deg clss (Su n)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Base_SD",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Cons_Vdom",
          "normalized": "Base_SD(VDom a)DomClass b-\u003eBase_SD a c b-\u003eBase_SD a c(Su b)",
          "package": "HarmTrace",
          "partial": "Cons Vdom",
          "signature": "Base_SD(VDom deg)DomClass n-\u003eBase_SD deg clss n-\u003eBase_SD deg clss(Su n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Cons_Vdom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Cons_Vmin",
          "package": "HarmTrace",
          "signature": "Base_SD (VMin deg) MinClass n -\u003e Base_SD deg DomClass n -\u003e Base_SD deg DomClass (Su n)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Base_SD",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Cons_Vmin",
          "normalized": "Base_SD(VMin a)MinClass b-\u003eBase_SD a DomClass b-\u003eBase_SD a DomClass(Su b)",
          "package": "HarmTrace",
          "partial": "Cons Vmin",
          "signature": "Base_SD(VMin deg)MinClass n-\u003eBase_SD deg DomClass n-\u003eBase_SD deg DomClass(Su n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Cons_Vmin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "D_1",
          "package": "HarmTrace",
          "signature": "SDom mode -\u003e Dom mode -\u003e Dom mode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Dom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "D_1",
          "normalized": "SDom a-\u003eDom a-\u003eDom a",
          "package": "HarmTrace",
          "signature": "SDom mode-\u003eDom mode-\u003eDom mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:D_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "D_2",
          "package": "HarmTrace",
          "signature": "SD mode V DomClass -\u003e Dom mode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Dom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "D_2",
          "normalized": "SD a V DomClass-\u003eDom a",
          "package": "HarmTrace",
          "signature": "SD mode V DomClass-\u003eDom mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:D_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "D_24_bor",
          "package": "HarmTrace",
          "signature": "D_24_bor (SD MajMode VII MinClass)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#DMajBorrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "D_24_bor",
          "package": "HarmTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:D_24_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "D_3",
          "package": "HarmTrace",
          "signature": "SD mode V MajClass -\u003e Dom mode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Dom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "D_3",
          "normalized": "SD a V MajClass-\u003eDom a",
          "package": "HarmTrace",
          "signature": "SD mode V MajClass-\u003eDom mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:D_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "D_4",
          "package": "HarmTrace",
          "signature": "SD MajMode VII MinClass -\u003e Dom MajMode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Dom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "D_4",
          "normalized": "SD MajMode VII MinClass-\u003eDom MajMode",
          "package": "HarmTrace",
          "signature": "SD MajMode VII MinClass-\u003eDom MajMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:D_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "D_8_bor",
          "package": "HarmTrace",
          "signature": "DMinBorrow -\u003e Dom MajMode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Dom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "D_8_bor",
          "normalized": "DMinBorrow-\u003eDom MajMode",
          "package": "HarmTrace",
          "signature": "DMinBorrow-\u003eDom MajMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:D_8_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Dim_Chord_Trns",
          "package": "HarmTrace",
          "signature": "Surface_Chord (MinThird deg) DimClass n -\u003e Surface_Chord deg DimClass (Su n)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Surface_Chord",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Dim_Chord_Trns",
          "normalized": "Surface_Chord(MinThird a)DimClass b-\u003eSurface_Chord a DimClass(Su b)",
          "package": "HarmTrace",
          "partial": "Dim Chord Trns",
          "signature": "Surface_Chord(MinThird deg)DimClass n-\u003eSurface_Chord deg DimClass(Su n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Dim_Chord_Trns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Dm_24_bor",
          "package": "HarmTrace",
          "signature": "Dm_24_bor (SD MinMode VIIb MajClass)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#DMinBorrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Dm_24_bor",
          "package": "HarmTrace",
          "partial": "Dm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Dm_24_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Dm_4",
          "package": "HarmTrace",
          "signature": "SD MinMode VIIb MajClass -\u003e Dom MinMode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Dom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Dm_4",
          "normalized": "SD MinMode VIIb MajClass-\u003eDom MinMode",
          "package": "HarmTrace",
          "partial": "Dm",
          "signature": "SD MinMode VIIb MajClass-\u003eDom MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Dm_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Dm_8_bor",
          "package": "HarmTrace",
          "signature": "DMajBorrow -\u003e Dom MinMode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Dom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Dm_8_bor",
          "normalized": "DMajBorrow-\u003eDom MinMode",
          "package": "HarmTrace",
          "partial": "Dm",
          "signature": "DMajBorrow-\u003eDom MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Dm_8_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Final_Dim_V",
          "package": "HarmTrace",
          "signature": "Base_Final (IIbDim deg) DimClass n -\u003e Base_Final deg DomClass (Su n)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Base_Final",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Final_Dim_V",
          "normalized": "Base_Final(IIbDim a)DimClass b-\u003eBase_Final a DomClass(Su b)",
          "package": "HarmTrace",
          "partial": "Final Dim",
          "signature": "Base_Final(IIbDim deg)DimClass n-\u003eBase_Final deg DomClass(Su n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Final_Dim_V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Final_Tritone",
          "package": "HarmTrace",
          "signature": "Base_Final (Tritone deg) DomClass n -\u003e Base_Final deg DomClass (Su n)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Base_Final",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Final_Tritone",
          "normalized": "Base_Final(Tritone a)DomClass b-\u003eBase_Final a DomClass(Su b)",
          "package": "HarmTrace",
          "partial": "Final Tritone",
          "signature": "Base_Final(Tritone deg)DomClass n-\u003eBase_Final deg DomClass(Su n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Final_Tritone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "PD",
          "package": "HarmTrace",
          "signature": "Dom mode -\u003e Phrase mode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Phrase",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "PD",
          "normalized": "Dom a-\u003ePhrase a",
          "package": "HarmTrace",
          "partial": "PD",
          "signature": "Dom mode-\u003ePhrase mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:PD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "PT",
          "package": "HarmTrace",
          "signature": "Ton mode -\u003e Phrase mode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Phrase",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "PT",
          "normalized": "Ton a-\u003ePhrase a",
          "package": "HarmTrace",
          "partial": "PT",
          "signature": "Ton mode-\u003ePhrase mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:PT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Piece",
          "package": "HarmTrace",
          "signature": "forall mode . Piece [Phrase mode]",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Piece",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Piece",
          "normalized": "a b Piece[Phrase b]",
          "package": "HarmTrace",
          "partial": "Piece",
          "signature": "forall mode Piece[Phrase mode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Piece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "S_1_par",
          "package": "HarmTrace",
          "signature": "SD mode II MinClass -\u003e SDom mode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "S_1_par",
          "normalized": "SD a II MinClass-\u003eSDom a",
          "package": "HarmTrace",
          "signature": "SD mode II MinClass-\u003eSDom mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:S_1_par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "S_20_bor",
          "package": "HarmTrace",
          "signature": "S_20_bor (SD MajMode IV MajClass)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#SMajBorrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "S_20_bor",
          "package": "HarmTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:S_20_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "S_2_par",
          "package": "HarmTrace",
          "signature": "SD mode II DomClass -\u003e Final II MinClass -\u003e SDom mode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "S_2_par",
          "normalized": "SD a II DomClass-\u003eFinal II MinClass-\u003eSDom a",
          "package": "HarmTrace",
          "signature": "SD mode II DomClass-\u003eFinal II MinClass-\u003eSDom mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:S_2_par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "S_3",
          "package": "HarmTrace",
          "signature": "SD MajMode IV MajClass -\u003e SDom MajMode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "S_3",
          "normalized": "SD MajMode IV MajClass-\u003eSDom MajMode",
          "package": "HarmTrace",
          "signature": "SD MajMode IV MajClass-\u003eSDom MajMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:S_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "S_4",
          "package": "HarmTrace",
          "signature": "SD MajMode III MinClass -\u003e Final IV MajClass -\u003e SDom MajMode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "S_4",
          "normalized": "SD MajMode III MinClass-\u003eFinal IV MajClass-\u003eSDom MajMode",
          "package": "HarmTrace",
          "signature": "SD MajMode III MinClass-\u003eFinal IV MajClass-\u003eSDom MajMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:S_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "S_5_bor",
          "package": "HarmTrace",
          "signature": "SMinBorrow -\u003e SDom MajMode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "S_5_bor",
          "normalized": "SMinBorrow-\u003eSDom MajMode",
          "package": "HarmTrace",
          "signature": "SMinBorrow-\u003eSDom MajMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:S_5_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Sm_20_bor",
          "package": "HarmTrace",
          "signature": "Sm_20_bor (SD MinMode IV MinClass)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#SMinBorrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Sm_20_bor",
          "package": "HarmTrace",
          "partial": "Sm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Sm_20_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Sm_22_bor",
          "package": "HarmTrace",
          "signature": "Sm_22_bor (SD MinMode IIb MajClass)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#SMinBorrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Sm_22_bor",
          "package": "HarmTrace",
          "partial": "Sm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Sm_22_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Sm_3",
          "package": "HarmTrace",
          "signature": "SD MinMode IV MinClass -\u003e SDom MinMode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Sm_3",
          "normalized": "SD MinMode IV MinClass-\u003eSDom MinMode",
          "package": "HarmTrace",
          "partial": "Sm",
          "signature": "SD MinMode IV MinClass-\u003eSDom MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Sm_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Sm_4",
          "package": "HarmTrace",
          "signature": "SD MinMode IIIb MajClass -\u003e Final IV MinClass -\u003e SDom MinMode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Sm_4",
          "normalized": "SD MinMode IIIb MajClass-\u003eFinal IV MinClass-\u003eSDom MinMode",
          "package": "HarmTrace",
          "partial": "Sm",
          "signature": "SD MinMode IIIb MajClass-\u003eFinal IV MinClass-\u003eSDom MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Sm_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Sm_5_bor",
          "package": "HarmTrace",
          "signature": "SMajBorrow -\u003e SDom MinMode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Sm_5_bor",
          "normalized": "SMajBorrow-\u003eSDom MinMode",
          "package": "HarmTrace",
          "partial": "Sm",
          "signature": "SMajBorrow-\u003eSDom MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Sm_5_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Sm_6",
          "package": "HarmTrace",
          "signature": "SD MinMode IIb MajClass -\u003e SDom MinMode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Sm_6",
          "normalized": "SD MinMode IIb MajClass-\u003eSDom MinMode",
          "package": "HarmTrace",
          "partial": "Sm",
          "signature": "SD MinMode IIb MajClass-\u003eSDom MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Sm_6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Surface_Chord",
          "package": "HarmTrace",
          "signature": "ChordToken -\u003e Surface_Chord deg clss (Su n)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Surface_Chord",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Surface_Chord",
          "normalized": "ChordToken-\u003eSurface_Chord a b(Su c)",
          "package": "HarmTrace",
          "partial": "Surface Chord",
          "signature": "ChordToken-\u003eSurface_Chord deg clss(Su n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Surface_Chord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "T_1",
          "package": "HarmTrace",
          "signature": "Final I MajClass -\u003e Ton MajMode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Ton",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "T_1",
          "normalized": "Final I MajClass-\u003eTon MajMode",
          "package": "HarmTrace",
          "signature": "Final I MajClass-\u003eTon MajMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:T_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "T_2",
          "package": "HarmTrace",
          "signature": "Final I MajClass -\u003e Final IV MajClass -\u003e Final I MajClass -\u003e Ton MajMode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Ton",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "T_2",
          "normalized": "Final I MajClass-\u003eFinal IV MajClass-\u003eFinal I MajClass-\u003eTon MajMode",
          "package": "HarmTrace",
          "signature": "Final I MajClass-\u003eFinal IV MajClass-\u003eFinal I MajClass-\u003eTon MajMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:T_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "T_21_bor",
          "package": "HarmTrace",
          "signature": "T_21_bor (SD MajMode I MajClass)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#TMajBorrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "T_21_bor",
          "package": "HarmTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:T_21_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "T_23_bor",
          "package": "HarmTrace",
          "signature": "T_23_bor (SD MajMode III MinClass)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#TMajBorrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "T_23_bor",
          "package": "HarmTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:T_23_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "T_3_par",
          "package": "HarmTrace",
          "signature": "Final III MinClass -\u003e Ton MajMode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Ton",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "T_3_par",
          "normalized": "Final III MinClass-\u003eTon MajMode",
          "package": "HarmTrace",
          "signature": "Final III MinClass-\u003eTon MajMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:T_3_par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "T_6_bor",
          "package": "HarmTrace",
          "signature": "TMinBorrow -\u003e Ton MajMode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Ton",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "T_6_bor",
          "normalized": "TMinBorrow-\u003eTon MajMode",
          "package": "HarmTrace",
          "signature": "TMinBorrow-\u003eTon MajMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:T_6_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Tm_1",
          "package": "HarmTrace",
          "signature": "SD MinMode I MinClass -\u003e Ton MinMode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Ton",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Tm_1",
          "normalized": "SD MinMode I MinClass-\u003eTon MinMode",
          "package": "HarmTrace",
          "partial": "Tm",
          "signature": "SD MinMode I MinClass-\u003eTon MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Tm_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Tm_2",
          "package": "HarmTrace",
          "signature": "Final I MinClass -\u003e Final IV MinClass -\u003e Final I MinClass -\u003e Ton MinMode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Ton",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Tm_2",
          "normalized": "Final I MinClass-\u003eFinal IV MinClass-\u003eFinal I MinClass-\u003eTon MinMode",
          "package": "HarmTrace",
          "partial": "Tm",
          "signature": "Final I MinClass-\u003eFinal IV MinClass-\u003eFinal I MinClass-\u003eTon MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Tm_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Tm_21_bor",
          "package": "HarmTrace",
          "signature": "Tm_21_bor (SD MinMode I MinClass)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#TMinBorrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Tm_21_bor",
          "package": "HarmTrace",
          "partial": "Tm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Tm_21_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Tm_23_bor",
          "package": "HarmTrace",
          "signature": "Tm_23_bor (SD MinMode IIIb MajClass)",
          "source": "src/HarmTrace-Models-Jazz-Model.html#TMinBorrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Tm_23_bor",
          "package": "HarmTrace",
          "partial": "Tm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Tm_23_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Tm_3_par",
          "package": "HarmTrace",
          "signature": "Final IIIb MajClass -\u003e Ton MinMode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Ton",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Tm_3_par",
          "normalized": "Final IIIb MajClass-\u003eTon MinMode",
          "package": "HarmTrace",
          "partial": "Tm",
          "signature": "Final IIIb MajClass-\u003eTon MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Tm_3_par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Tm_6_bor",
          "package": "HarmTrace",
          "signature": "TMajBorrow -\u003e Ton MinMode",
          "source": "src/HarmTrace-Models-Jazz-Model.html#Ton",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "Tm_6_bor",
          "normalized": "TMajBorrow-\u003eTon MinMode",
          "package": "HarmTrace",
          "partial": "Tm",
          "signature": "TMajBorrow-\u003eTon MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:Tm_6_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "allTypes",
          "package": "HarmTrace",
          "signature": "[Name]",
          "source": "src/HarmTrace-Models-Jazz-Model.html#allTypes",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "allTypes",
          "normalized": "[Name]",
          "package": "HarmTrace",
          "partial": "Types",
          "signature": "[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:allTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "toClass",
          "package": "HarmTrace",
          "signature": "clss -\u003e ClassType",
          "source": "src/HarmTrace-Models-Jazz-Model.html#toClass",
          "type": "method"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "toClass",
          "normalized": "a-\u003eClassType",
          "package": "HarmTrace",
          "partial": "Class",
          "signature": "clss-\u003eClassType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:toClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "toDegree",
          "package": "HarmTrace",
          "signature": "deg -\u003e ScaleDegree",
          "source": "src/HarmTrace-Models-Jazz-Model.html#toDegree",
          "type": "method"
        },
        "index": {
          "hierarchy": "HarmTrace Models Jazz Model",
          "module": "HarmTrace.Models.Jazz.Model",
          "name": "toDegree",
          "normalized": "a-\u003eScaleDegree",
          "package": "HarmTrace",
          "partial": "Degree",
          "signature": "deg-\u003eScaleDegree",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Jazz-Model.html#v:toDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: All the models\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HarmTrace.Models.Models",
          "name": "Models",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Models.html",
          "type": "module"
        },
        "index": {
          "description": "Summary All the models",
          "hierarchy": "HarmTrace Models Models",
          "module": "HarmTrace.Models.Models",
          "name": "Models",
          "package": "HarmTrace",
          "partial": "Models",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Models.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Models",
          "name": "Grammar",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Models.html#Grammar",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Models",
          "module": "HarmTrace.Models.Models",
          "name": "Grammar",
          "package": "HarmTrace",
          "partial": "Grammar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Models.html#t:Grammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Models",
          "name": "GrammarEx",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Models.html#GrammarEx",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Models",
          "module": "HarmTrace.Models.Models",
          "name": "GrammarEx",
          "package": "HarmTrace",
          "partial": "Grammar Ex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Models.html#t:GrammarEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Models",
          "name": "GrammarEx",
          "package": "HarmTrace",
          "signature": "Grammar g -\u003e GrammarEx",
          "source": "src/HarmTrace-Models-Models.html#GrammarEx",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Models",
          "module": "HarmTrace.Models.Models",
          "name": "GrammarEx",
          "normalized": "Grammar a-\u003eGrammarEx",
          "package": "HarmTrace",
          "partial": "Grammar Ex",
          "signature": "Grammar g-\u003eGrammarEx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Models.html#v:GrammarEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Models",
          "name": "Jazz",
          "package": "HarmTrace",
          "signature": "Grammar Piece",
          "source": "src/HarmTrace-Models-Models.html#Grammar",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Models",
          "module": "HarmTrace.Models.Models",
          "name": "Jazz",
          "package": "HarmTrace",
          "partial": "Jazz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Models.html#v:Jazz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Models",
          "name": "Pop",
          "package": "HarmTrace",
          "signature": "Grammar Piece",
          "source": "src/HarmTrace-Models-Models.html#Grammar",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Models",
          "module": "HarmTrace.Models.Models",
          "name": "Pop",
          "package": "HarmTrace",
          "partial": "Pop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Models.html#v:Pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Semi-generic parser for chords\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HarmTrace.Models.Parser",
          "name": "Parser",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Semi-generic parser for chords",
          "hierarchy": "HarmTrace Models Parser",
          "module": "HarmTrace.Models.Parser",
          "name": "Parser",
          "package": "HarmTrace",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea type synoniome for a harmonic analysis of a piece of music\n\u003c/p\u003e",
          "module": "HarmTrace.Models.Parser",
          "name": "PMusic",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Parser.html#PMusic",
          "type": "type"
        },
        "index": {
          "description": "type synoniome for harmonic analysis of piece of music",
          "hierarchy": "HarmTrace Models Parser",
          "module": "HarmTrace.Models.Parser",
          "name": "PMusic",
          "package": "HarmTrace",
          "partial": "PMusic",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Parser.html#t:PMusic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Parser",
          "name": "ParseG",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Parser.html#ParseG",
          "type": "class"
        },
        "index": {
          "hierarchy": "HarmTrace Models Parser",
          "module": "HarmTrace.Models.Parser",
          "name": "ParseG",
          "package": "HarmTrace",
          "partial": "Parse",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Parser.html#t:ParseG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Parser",
          "name": "parseG",
          "package": "HarmTrace",
          "signature": "PMusic a",
          "source": "src/HarmTrace-Models-Parser.html#parseG",
          "type": "method"
        },
        "index": {
          "hierarchy": "HarmTrace Models Parser",
          "module": "HarmTrace.Models.Parser",
          "name": "parseG",
          "package": "HarmTrace",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Parser.html#v:parseG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault generic parser\n\u003c/p\u003e",
          "module": "HarmTrace.Models.Parser",
          "name": "parseGdefault",
          "package": "HarmTrace",
          "signature": "PMusic a",
          "source": "src/HarmTrace-Models-Parser.html#parseGdefault",
          "type": "function"
        },
        "index": {
          "description": "default generic parser",
          "hierarchy": "HarmTrace Models Parser",
          "module": "HarmTrace.Models.Parser",
          "name": "parseGdefault",
          "package": "HarmTrace",
          "partial": "Gdefault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Parser.html#v:parseGdefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Instances",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Instances",
          "package": "HarmTrace",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "DMajBorrow_D_24_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#DMajBorrow_D_24_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "DMajBorrow_D_24_bor_",
          "package": "HarmTrace",
          "partial": "DMaj Borrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:DMajBorrow_D_24_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "DMinBorrow_Dm_24_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#DMinBorrow_Dm_24_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "DMinBorrow_Dm_24_bor_",
          "package": "HarmTrace",
          "partial": "DMin Borrow Dm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:DMinBorrow_Dm_24_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Dom_D_1_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#Dom_D_1_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Dom_D_1_",
          "package": "HarmTrace",
          "partial": "Dom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Dom_D_1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Dom_D_2_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#Dom_D_2_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Dom_D_2_",
          "package": "HarmTrace",
          "partial": "Dom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Dom_D_2_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Dom_D_3_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#Dom_D_3_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Dom_D_3_",
          "package": "HarmTrace",
          "partial": "Dom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Dom_D_3_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Dom_D_4_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#Dom_D_4_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Dom_D_4_",
          "package": "HarmTrace",
          "partial": "Dom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Dom_D_4_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Dom_D_8_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#Dom_D_8_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Dom_D_8_bor_",
          "package": "HarmTrace",
          "partial": "Dom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Dom_D_8_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Dom_Dm_4_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#Dom_Dm_4_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Dom_Dm_4_",
          "package": "HarmTrace",
          "partial": "Dom Dm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Dom_Dm_4_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Dom_Dm_8_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#Dom_Dm_8_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Dom_Dm_8_bor_",
          "package": "HarmTrace",
          "partial": "Dom Dm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Dom_Dm_8_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "GetDegree",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#GetDegree",
          "type": "class"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "GetDegree",
          "package": "HarmTrace",
          "partial": "Get Degree",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:GetDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Phrase_PD_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#Phrase_PD_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Phrase_PD_",
          "package": "HarmTrace",
          "partial": "Phrase PD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Phrase_PD_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Phrase_PT_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#Phrase_PT_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Phrase_PT_",
          "package": "HarmTrace",
          "partial": "Phrase PT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Phrase_PT_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepDMajBorrow_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#RepDMajBorrow_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepDMajBorrow_",
          "package": "HarmTrace",
          "partial": "Rep DMaj Borrow",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepDMajBorrow_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepDMinBorrow_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#RepDMinBorrow_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepDMinBorrow_",
          "package": "HarmTrace",
          "partial": "Rep DMin Borrow",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepDMinBorrow_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepDom_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#RepDom_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepDom_",
          "package": "HarmTrace",
          "partial": "Rep Dom",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepDom_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepPhrase_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#RepPhrase_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepPhrase_",
          "package": "HarmTrace",
          "partial": "Rep Phrase",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepPhrase_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepSDom_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#RepSDom_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepSDom_",
          "package": "HarmTrace",
          "partial": "Rep SDom",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepSDom_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepSMajBorrow_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#RepSMajBorrow_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepSMajBorrow_",
          "package": "HarmTrace",
          "partial": "Rep SMaj Borrow",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepSMajBorrow_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepSMinBorrow_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#RepSMinBorrow_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepSMinBorrow_",
          "package": "HarmTrace",
          "partial": "Rep SMin Borrow",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepSMinBorrow_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepTMajBorrow_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#RepTMajBorrow_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepTMajBorrow_",
          "package": "HarmTrace",
          "partial": "Rep TMaj Borrow",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepTMajBorrow_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepTMinBorrow_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#RepTMinBorrow_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepTMinBorrow_",
          "package": "HarmTrace",
          "partial": "Rep TMin Borrow",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepTMinBorrow_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepTon_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#RepTon_",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "RepTon_",
          "package": "HarmTrace",
          "partial": "Rep Ton",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:RepTon_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_S_1_par_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#SDom_S_1_par_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_S_1_par_",
          "package": "HarmTrace",
          "partial": "SDom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_S_1_par_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_S_2_par_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#SDom_S_2_par_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_S_2_par_",
          "package": "HarmTrace",
          "partial": "SDom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_S_2_par_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_S_3_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#SDom_S_3_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_S_3_",
          "package": "HarmTrace",
          "partial": "SDom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_S_3_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_S_3_bls_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#SDom_S_3_bls_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_S_3_bls_",
          "package": "HarmTrace",
          "partial": "SDom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_S_3_bls_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_S_4_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#SDom_S_4_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_S_4_",
          "package": "HarmTrace",
          "partial": "SDom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_S_4_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_S_5_par_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#SDom_S_5_par_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_S_5_par_",
          "package": "HarmTrace",
          "partial": "SDom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_S_5_par_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_S_7_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#SDom_S_7_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_S_7_",
          "package": "HarmTrace",
          "partial": "SDom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_S_7_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_S_9_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#SDom_S_9_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_S_9_bor_",
          "package": "HarmTrace",
          "partial": "SDom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_S_9_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_Sm_3_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#SDom_Sm_3_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_Sm_3_",
          "package": "HarmTrace",
          "partial": "SDom Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_Sm_3_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_Sm_4_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#SDom_Sm_4_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_Sm_4_",
          "package": "HarmTrace",
          "partial": "SDom Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_Sm_4_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_Sm_5_par_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#SDom_Sm_5_par_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_Sm_5_par_",
          "package": "HarmTrace",
          "partial": "SDom Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_Sm_5_par_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_Sm_6_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#SDom_Sm_6_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_Sm_6_",
          "package": "HarmTrace",
          "partial": "SDom Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_Sm_6_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_Sm_7_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#SDom_Sm_7_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_Sm_7_",
          "package": "HarmTrace",
          "partial": "SDom Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_Sm_7_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_Sm_9_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#SDom_Sm_9_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SDom_Sm_9_bor_",
          "package": "HarmTrace",
          "partial": "SDom Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SDom_Sm_9_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SMajBorrow_S_20_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#SMajBorrow_S_20_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SMajBorrow_S_20_bor_",
          "package": "HarmTrace",
          "partial": "SMaj Borrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SMajBorrow_S_20_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SMinBorrow_Sm_20_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#SMinBorrow_Sm_20_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SMinBorrow_Sm_20_bor_",
          "package": "HarmTrace",
          "partial": "SMin Borrow Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SMinBorrow_Sm_20_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SMinBorrow_Sm_22_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#SMinBorrow_Sm_22_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "SMinBorrow_Sm_22_bor_",
          "package": "HarmTrace",
          "partial": "SMin Borrow Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:SMinBorrow_Sm_22_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "TMajBorrow_T_21_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#TMajBorrow_T_21_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "TMajBorrow_T_21_bor_",
          "package": "HarmTrace",
          "partial": "TMaj Borrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:TMajBorrow_T_21_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "TMinBorrow_Tm_21_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#TMinBorrow_Tm_21_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "TMinBorrow_Tm_21_bor_",
          "package": "HarmTrace",
          "partial": "TMin Borrow Tm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:TMinBorrow_Tm_21_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Ton_T_0_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#Ton_T_0_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Ton_T_0_",
          "package": "HarmTrace",
          "partial": "Ton",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Ton_T_0_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Ton_T_1_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#Ton_T_1_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Ton_T_1_",
          "package": "HarmTrace",
          "partial": "Ton",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Ton_T_1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Ton_T_4_bls_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#Ton_T_4_bls_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Ton_T_4_bls_",
          "package": "HarmTrace",
          "partial": "Ton",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Ton_T_4_bls_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Ton_T_6_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#Ton_T_6_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Ton_T_6_bor_",
          "package": "HarmTrace",
          "partial": "Ton",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Ton_T_6_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Ton_Tm_1_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#Ton_Tm_1_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Ton_Tm_1_",
          "package": "HarmTrace",
          "partial": "Ton Tm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Ton_Tm_1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Ton_Tm_6_bor_",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Instances.html#Ton_Tm_6_bor_",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "Ton_Tm_6_bor_",
          "package": "HarmTrace",
          "partial": "Ton Tm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#t:Ton_Tm_6_bor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "getDeg",
          "package": "HarmTrace",
          "signature": "a -\u003e (ScaleDegree, Int)",
          "source": "src/HarmTrace-Models-Pop-Instances.html#getDeg",
          "type": "method"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "getDeg",
          "normalized": "a-\u003e(ScaleDegree,Int)",
          "package": "HarmTrace",
          "partial": "Deg",
          "signature": "a-\u003e(ScaleDegree,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#v:getDeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "pChord",
          "package": "HarmTrace",
          "signature": "ScaleDegree -\u003e ClassType -\u003e PMusic (Surface_Chord deg clss (Su n))",
          "source": "src/HarmTrace-Models-Pop-Instances.html#pChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "pChord",
          "normalized": "ScaleDegree-\u003eClassType-\u003ePMusic(Surface_Chord a b(Su c))",
          "package": "HarmTrace",
          "partial": "Chord",
          "signature": "ScaleDegree-\u003eClassType-\u003ePMusic(Surface_Chord deg clss(Su n))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#v:pChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "toGTree",
          "package": "HarmTrace",
          "signature": "(Int -\u003e ScaleDegree -\u003e Trans) -\u003e Int -\u003e a -\u003e [Tree HAn]",
          "source": "src/HarmTrace-Models-Pop-Instances.html#toGTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "toGTree",
          "normalized": "(Int-\u003eScaleDegree-\u003eTrans)-\u003eInt-\u003ea-\u003e[Tree HAn]",
          "package": "HarmTrace",
          "partial": "GTree",
          "signature": "(Int-\u003eScaleDegree-\u003eTrans)-\u003eInt-\u003ea-\u003e[Tree HAn]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#v:toGTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "toGTreeSplit",
          "package": "HarmTrace",
          "signature": "(Int -\u003e ScaleDegree -\u003e Prep) -\u003e b -\u003e a -\u003e [Tree HAn]",
          "source": "src/HarmTrace-Models-Pop-Instances.html#toGTreeSplit",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "toGTreeSplit",
          "normalized": "(Int-\u003eScaleDegree-\u003ePrep)-\u003ea-\u003eb-\u003e[Tree HAn]",
          "package": "HarmTrace",
          "partial": "GTree Split",
          "signature": "(Int-\u003eScaleDegree-\u003ePrep)-\u003eb-\u003ea-\u003e[Tree HAn]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#v:toGTreeSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "toSDVal",
          "package": "HarmTrace",
          "signature": "a -\u003e ScaleDegree",
          "source": "src/HarmTrace-Models-Pop-Instances.html#toSDVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "toSDVal",
          "normalized": "a-\u003eScaleDegree",
          "package": "HarmTrace",
          "partial": "SDVal",
          "signature": "a-\u003eScaleDegree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#v:toSDVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "toTransSDVal",
          "package": "HarmTrace",
          "signature": "Int -\u003e a -\u003e ScaleDegree",
          "source": "src/HarmTrace-Models-Pop-Instances.html#toTransSDVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Instances",
          "module": "HarmTrace.Models.Pop.Instances",
          "name": "toTransSDVal",
          "normalized": "Int-\u003ea-\u003eScaleDegree",
          "package": "HarmTrace",
          "partial": "Trans SDVal",
          "signature": "Int-\u003ea-\u003eScaleDegree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Instances.html#v:toTransSDVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Main",
          "name": "Main",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Main.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Main",
          "module": "HarmTrace.Models.Pop.Main",
          "name": "Main",
          "package": "HarmTrace",
          "partial": "Main",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Main.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Main",
          "name": "pPop",
          "package": "HarmTrace",
          "signature": "Key -\u003e PMusic [Piece]",
          "source": "src/HarmTrace-Models-Pop-Main.html#pPop",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Main",
          "module": "HarmTrace.Models.Pop.Main",
          "name": "pPop",
          "normalized": "Key-\u003ePMusic[Piece]",
          "package": "HarmTrace",
          "partial": "Pop",
          "signature": "Key-\u003ePMusic[Piece]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Main.html#v:pPop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Model",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Model",
          "package": "HarmTrace",
          "partial": "Model",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Base_Final",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#Base_Final",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Base_Final",
          "package": "HarmTrace",
          "partial": "Base Final",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Base_Final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Base_SD",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#Base_SD",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Base_SD",
          "package": "HarmTrace",
          "partial": "Base SD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Base_SD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "DMajBorrow",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#DMajBorrow",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "DMajBorrow",
          "package": "HarmTrace",
          "partial": "DMaj Borrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:DMajBorrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "DMinBorrow",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#DMinBorrow",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "DMinBorrow",
          "package": "HarmTrace",
          "partial": "DMin Borrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:DMinBorrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "DimClass",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#DimClass",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "DimClass",
          "package": "HarmTrace",
          "partial": "Dim Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:DimClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Dom",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#Dom",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Dom",
          "package": "HarmTrace",
          "partial": "Dom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Dom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "DomClass",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#DomClass",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "DomClass",
          "package": "HarmTrace",
          "partial": "Dom Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:DomClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Final",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#Final",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Final",
          "package": "HarmTrace",
          "partial": "Final",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "FinalDimTrans",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#FinalDimTrans",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "FinalDimTrans",
          "package": "HarmTrace",
          "partial": "Final Dim Trans",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:FinalDimTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "I",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#I",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "I",
          "package": "HarmTrace",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "II",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#II",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "II",
          "package": "HarmTrace",
          "partial": "II",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:II"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "III",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#III",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "III",
          "package": "HarmTrace",
          "partial": "III",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:III"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "IIIb",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#IIIb",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "IIIb",
          "package": "HarmTrace",
          "partial": "IIIb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:IIIb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "IIIs",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#IIIs",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "IIIs",
          "package": "HarmTrace",
          "partial": "IIIs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:IIIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "IIb",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#IIb",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "IIb",
          "package": "HarmTrace",
          "partial": "IIb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:IIb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "IIs",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#IIs",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "IIs",
          "package": "HarmTrace",
          "partial": "IIs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:IIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "IV",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#IV",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "IV",
          "package": "HarmTrace",
          "partial": "IV",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:IV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "IVb",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#IVb",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "IVb",
          "package": "HarmTrace",
          "partial": "IVb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:IVb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "IVs",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#IVs",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "IVs",
          "package": "HarmTrace",
          "partial": "IVs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:IVs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Ib",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#Ib",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Ib",
          "package": "HarmTrace",
          "partial": "Ib",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Ib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Imp",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#Imp",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Imp",
          "package": "HarmTrace",
          "partial": "Imp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Imp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Is",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#Is",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Is",
          "package": "HarmTrace",
          "partial": "Is",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Is"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "MajClass",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#MajClass",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "MajClass",
          "package": "HarmTrace",
          "partial": "Maj Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:MajClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "MajMode",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#MajMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "MajMode",
          "package": "HarmTrace",
          "partial": "Maj Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:MajMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "MinClass",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#MinClass",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "MinClass",
          "package": "HarmTrace",
          "partial": "Min Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:MinClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "MinMode",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#MinMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "MinMode",
          "package": "HarmTrace",
          "partial": "Min Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:MinMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Phrase",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#Phrase",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Phrase",
          "package": "HarmTrace",
          "partial": "Phrase",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Phrase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Piece",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#Piece",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Piece",
          "package": "HarmTrace",
          "partial": "Piece",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Piece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "SD",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#SD",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "SD",
          "package": "HarmTrace",
          "partial": "SD",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:SD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "SDom",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#SDom",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "SDom",
          "package": "HarmTrace",
          "partial": "SDom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:SDom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "SMajBorrow",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#SMajBorrow",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "SMajBorrow",
          "package": "HarmTrace",
          "partial": "SMaj Borrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:SMajBorrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "SMinBorrow",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#SMinBorrow",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "SMinBorrow",
          "package": "HarmTrace",
          "partial": "SMin Borrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:SMinBorrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Surface_Chord",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#Surface_Chord",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Surface_Chord",
          "package": "HarmTrace",
          "partial": "Surface Chord",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Surface_Chord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "TMajBorrow",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#TMajBorrow",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "TMajBorrow",
          "package": "HarmTrace",
          "partial": "TMaj Borrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:TMajBorrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "TMinBorrow",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#TMinBorrow",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "TMinBorrow",
          "package": "HarmTrace",
          "partial": "TMin Borrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:TMinBorrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "ToClass",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#ToClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "ToClass",
          "package": "HarmTrace",
          "partial": "To Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:ToClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "ToDegree",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#ToDegree",
          "type": "class"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "ToDegree",
          "package": "HarmTrace",
          "partial": "To Degree",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:ToDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Ton",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#Ton",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Ton",
          "package": "HarmTrace",
          "partial": "Ton",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Ton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "TritMinVSub",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#TritMinVSub",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "TritMinVSub",
          "package": "HarmTrace",
          "partial": "Trit Min VSub",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:TritMinVSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "V",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#V",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "V",
          "package": "HarmTrace",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "VI",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#VI",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "VI",
          "package": "HarmTrace",
          "partial": "VI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:VI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "VII",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#VII",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "VII",
          "package": "HarmTrace",
          "partial": "VII",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:VII"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "VIIb",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#VIIb",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "VIIb",
          "package": "HarmTrace",
          "partial": "VIIb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:VIIb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "VIIs",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#VIIs",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "VIIs",
          "package": "HarmTrace",
          "partial": "VIIs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:VIIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "VIb",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#VIb",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "VIb",
          "package": "HarmTrace",
          "partial": "VIb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:VIb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "VIs",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#VIs",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "VIs",
          "package": "HarmTrace",
          "partial": "VIs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:VIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Vb",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#Vb",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Vb",
          "package": "HarmTrace",
          "partial": "Vb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Vb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Vs",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-Pop-Model.html#Vs",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Vs",
          "package": "HarmTrace",
          "partial": "Vs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#t:Vs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Base_Final",
          "package": "HarmTrace",
          "signature": "FinalDimTrans deg clss -\u003e Base_Final deg clss (Su n)",
          "source": "src/HarmTrace-Models-Pop-Model.html#Base_Final",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Base_Final",
          "normalized": "FinalDimTrans a b-\u003eBase_Final a b(Su c)",
          "package": "HarmTrace",
          "partial": "Base Final",
          "signature": "FinalDimTrans deg clss-\u003eBase_Final deg clss(Su n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Base_Final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Base_SD",
          "package": "HarmTrace",
          "signature": "TritMinVSub deg clss -\u003e Base_SD deg clss (Su n)",
          "source": "src/HarmTrace-Models-Pop-Model.html#Base_SD",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Base_SD",
          "normalized": "TritMinVSub a b-\u003eBase_SD a b(Su c)",
          "package": "HarmTrace",
          "partial": "Base SD",
          "signature": "TritMinVSub deg clss-\u003eBase_SD deg clss(Su n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Base_SD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Cons_Diat",
          "package": "HarmTrace",
          "signature": "Base_SD (DiatV deg) MinClass n -\u003e Base_SD deg MinClass n -\u003e Base_SD deg MinClass (Su n)",
          "source": "src/HarmTrace-Models-Pop-Model.html#Base_SD",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Cons_Diat",
          "normalized": "Base_SD(DiatV a)MinClass b-\u003eBase_SD a MinClass b-\u003eBase_SD a MinClass(Su b)",
          "package": "HarmTrace",
          "partial": "Cons Diat",
          "signature": "Base_SD(DiatV deg)MinClass n-\u003eBase_SD deg MinClass n-\u003eBase_SD deg MinClass(Su n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Cons_Diat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Cons_DiatM",
          "package": "HarmTrace",
          "signature": "Base_SD (DiatVM deg) MajClass n -\u003e Base_SD deg MajClass n -\u003e Base_SD deg MajClass (Su n)",
          "source": "src/HarmTrace-Models-Pop-Model.html#Base_SD",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Cons_DiatM",
          "normalized": "Base_SD(DiatVM a)MajClass b-\u003eBase_SD a MajClass b-\u003eBase_SD a MajClass(Su b)",
          "package": "HarmTrace",
          "partial": "Cons Diat",
          "signature": "Base_SD(DiatVM deg)MajClass n-\u003eBase_SD deg MajClass n-\u003eBase_SD deg MajClass(Su n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Cons_DiatM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Cons_DiatM'",
          "package": "HarmTrace",
          "signature": "Base_SD (DiatVM deg) MajClass n -\u003e Base_SD deg MinClass n -\u003e Base_SD deg MinClass (Su n)",
          "source": "src/HarmTrace-Models-Pop-Model.html#Base_SD",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Cons_DiatM'",
          "normalized": "Base_SD(DiatVM a)MajClass b-\u003eBase_SD a MinClass b-\u003eBase_SD a MinClass(Su b)",
          "package": "HarmTrace",
          "partial": "Cons Diat M'",
          "signature": "Base_SD(DiatVM deg)MajClass n-\u003eBase_SD deg MinClass n-\u003eBase_SD deg MinClass(Su n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Cons_DiatM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Cons_Vdom",
          "package": "HarmTrace",
          "signature": "Base_SD (VDom deg) DomClass n -\u003e Base_SD deg clss n -\u003e Base_SD deg clss (Su n)",
          "source": "src/HarmTrace-Models-Pop-Model.html#Base_SD",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Cons_Vdom",
          "normalized": "Base_SD(VDom a)DomClass b-\u003eBase_SD a c b-\u003eBase_SD a c(Su b)",
          "package": "HarmTrace",
          "partial": "Cons Vdom",
          "signature": "Base_SD(VDom deg)DomClass n-\u003eBase_SD deg clss n-\u003eBase_SD deg clss(Su n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Cons_Vdom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Cons_Vmin",
          "package": "HarmTrace",
          "signature": "Base_SD (VMin deg) MinClass n -\u003e Base_SD deg DomClass n -\u003e Base_SD deg DomClass (Su n)",
          "source": "src/HarmTrace-Models-Pop-Model.html#Base_SD",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Cons_Vmin",
          "normalized": "Base_SD(VMin a)MinClass b-\u003eBase_SD a DomClass b-\u003eBase_SD a DomClass(Su b)",
          "package": "HarmTrace",
          "partial": "Cons Vmin",
          "signature": "Base_SD(VMin deg)MinClass n-\u003eBase_SD deg DomClass n-\u003eBase_SD deg DomClass(Su n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Cons_Vmin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "D_1",
          "package": "HarmTrace",
          "signature": "SDom mode -\u003e Dom mode -\u003e Dom mode",
          "source": "src/HarmTrace-Models-Pop-Model.html#Dom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "D_1",
          "normalized": "SDom a-\u003eDom a-\u003eDom a",
          "package": "HarmTrace",
          "signature": "SDom mode-\u003eDom mode-\u003eDom mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:D_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "D_2",
          "package": "HarmTrace",
          "signature": "SD mode V DomClass -\u003e Dom mode",
          "source": "src/HarmTrace-Models-Pop-Model.html#Dom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "D_2",
          "normalized": "SD a V DomClass-\u003eDom a",
          "package": "HarmTrace",
          "signature": "SD mode V DomClass-\u003eDom mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:D_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "D_24_bor",
          "package": "HarmTrace",
          "signature": "D_24_bor (SD MajMode VII MinClass)",
          "source": "src/HarmTrace-Models-Pop-Model.html#DMajBorrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "D_24_bor",
          "package": "HarmTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:D_24_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "D_3",
          "package": "HarmTrace",
          "signature": "SD mode V MajClass -\u003e Dom mode",
          "source": "src/HarmTrace-Models-Pop-Model.html#Dom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "D_3",
          "normalized": "SD a V MajClass-\u003eDom a",
          "package": "HarmTrace",
          "signature": "SD mode V MajClass-\u003eDom mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:D_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "D_4",
          "package": "HarmTrace",
          "signature": "SD MajMode VII MinClass -\u003e Dom MajMode",
          "source": "src/HarmTrace-Models-Pop-Model.html#Dom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "D_4",
          "normalized": "SD MajMode VII MinClass-\u003eDom MajMode",
          "package": "HarmTrace",
          "signature": "SD MajMode VII MinClass-\u003eDom MajMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:D_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "D_8_bor",
          "package": "HarmTrace",
          "signature": "DMinBorrow -\u003e Dom MajMode",
          "source": "src/HarmTrace-Models-Pop-Model.html#Dom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "D_8_bor",
          "normalized": "DMinBorrow-\u003eDom MajMode",
          "package": "HarmTrace",
          "signature": "DMinBorrow-\u003eDom MajMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:D_8_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Dm_24_bor",
          "package": "HarmTrace",
          "signature": "Dm_24_bor (SD MinMode VIIb MajClass)",
          "source": "src/HarmTrace-Models-Pop-Model.html#DMinBorrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Dm_24_bor",
          "package": "HarmTrace",
          "partial": "Dm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Dm_24_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Dm_4",
          "package": "HarmTrace",
          "signature": "SD MinMode VIIb MajClass -\u003e Dom MinMode",
          "source": "src/HarmTrace-Models-Pop-Model.html#Dom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Dm_4",
          "normalized": "SD MinMode VIIb MajClass-\u003eDom MinMode",
          "package": "HarmTrace",
          "partial": "Dm",
          "signature": "SD MinMode VIIb MajClass-\u003eDom MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Dm_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Dm_8_bor",
          "package": "HarmTrace",
          "signature": "DMajBorrow -\u003e Dom MinMode",
          "source": "src/HarmTrace-Models-Pop-Model.html#Dom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Dm_8_bor",
          "normalized": "DMajBorrow-\u003eDom MinMode",
          "package": "HarmTrace",
          "partial": "Dm",
          "signature": "DMajBorrow-\u003eDom MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Dm_8_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "PD",
          "package": "HarmTrace",
          "signature": "Dom mode -\u003e Phrase mode",
          "source": "src/HarmTrace-Models-Pop-Model.html#Phrase",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "PD",
          "normalized": "Dom a-\u003ePhrase a",
          "package": "HarmTrace",
          "partial": "PD",
          "signature": "Dom mode-\u003ePhrase mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:PD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "PT",
          "package": "HarmTrace",
          "signature": "Ton mode -\u003e Phrase mode",
          "source": "src/HarmTrace-Models-Pop-Model.html#Phrase",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "PT",
          "normalized": "Ton a-\u003ePhrase a",
          "package": "HarmTrace",
          "partial": "PT",
          "signature": "Ton mode-\u003ePhrase mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:PT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Piece",
          "package": "HarmTrace",
          "signature": "forall mode . Piece [Phrase mode]",
          "source": "src/HarmTrace-Models-Pop-Model.html#Piece",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Piece",
          "normalized": "a b Piece[Phrase b]",
          "package": "HarmTrace",
          "partial": "Piece",
          "signature": "forall mode Piece[Phrase mode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Piece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "S_1_par",
          "package": "HarmTrace",
          "signature": "SD mode II MinClass -\u003e SDom mode",
          "source": "src/HarmTrace-Models-Pop-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "S_1_par",
          "normalized": "SD a II MinClass-\u003eSDom a",
          "package": "HarmTrace",
          "signature": "SD mode II MinClass-\u003eSDom mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:S_1_par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "S_20_bor",
          "package": "HarmTrace",
          "signature": "S_20_bor (SD MajMode IV MajClass)",
          "source": "src/HarmTrace-Models-Pop-Model.html#SMajBorrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "S_20_bor",
          "package": "HarmTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:S_20_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "S_2_par",
          "package": "HarmTrace",
          "signature": "SD mode II DomClass -\u003e Final II MinClass -\u003e SDom mode",
          "source": "src/HarmTrace-Models-Pop-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "S_2_par",
          "normalized": "SD a II DomClass-\u003eFinal II MinClass-\u003eSDom a",
          "package": "HarmTrace",
          "signature": "SD mode II DomClass-\u003eFinal II MinClass-\u003eSDom mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:S_2_par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "S_3",
          "package": "HarmTrace",
          "signature": "SD MajMode IV MajClass -\u003e SDom MajMode",
          "source": "src/HarmTrace-Models-Pop-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "S_3",
          "normalized": "SD MajMode IV MajClass-\u003eSDom MajMode",
          "package": "HarmTrace",
          "signature": "SD MajMode IV MajClass-\u003eSDom MajMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:S_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "S_3_bls",
          "package": "HarmTrace",
          "signature": "Final IV DomClass -\u003e SDom mode",
          "source": "src/HarmTrace-Models-Pop-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "S_3_bls",
          "normalized": "Final IV DomClass-\u003eSDom a",
          "package": "HarmTrace",
          "signature": "Final IV DomClass-\u003eSDom mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:S_3_bls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "S_4",
          "package": "HarmTrace",
          "signature": "SD MajMode III MinClass -\u003e Final IV MajClass -\u003e SDom MajMode",
          "source": "src/HarmTrace-Models-Pop-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "S_4",
          "normalized": "SD MajMode III MinClass-\u003eFinal IV MajClass-\u003eSDom MajMode",
          "package": "HarmTrace",
          "signature": "SD MajMode III MinClass-\u003eFinal IV MajClass-\u003eSDom MajMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:S_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "S_5_par",
          "package": "HarmTrace",
          "signature": "SD MajMode VI MinClass -\u003e SDom MajMode",
          "source": "src/HarmTrace-Models-Pop-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "S_5_par",
          "normalized": "SD MajMode VI MinClass-\u003eSDom MajMode",
          "package": "HarmTrace",
          "signature": "SD MajMode VI MinClass-\u003eSDom MajMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:S_5_par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "S_7",
          "package": "HarmTrace",
          "signature": "SD MajMode III MinClass -\u003e Final II MinClass -\u003e SDom MajMode",
          "source": "src/HarmTrace-Models-Pop-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "S_7",
          "normalized": "SD MajMode III MinClass-\u003eFinal II MinClass-\u003eSDom MajMode",
          "package": "HarmTrace",
          "signature": "SD MajMode III MinClass-\u003eFinal II MinClass-\u003eSDom MajMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:S_7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "S_9_bor",
          "package": "HarmTrace",
          "signature": "SMinBorrow -\u003e SDom MajMode",
          "source": "src/HarmTrace-Models-Pop-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "S_9_bor",
          "normalized": "SMinBorrow-\u003eSDom MajMode",
          "package": "HarmTrace",
          "signature": "SMinBorrow-\u003eSDom MajMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:S_9_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Sm_20_bor",
          "package": "HarmTrace",
          "signature": "Sm_20_bor (SD MinMode IV MinClass)",
          "source": "src/HarmTrace-Models-Pop-Model.html#SMinBorrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Sm_20_bor",
          "package": "HarmTrace",
          "partial": "Sm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Sm_20_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Sm_22_bor",
          "package": "HarmTrace",
          "signature": "Sm_22_bor (SD MinMode IIb MajClass)",
          "source": "src/HarmTrace-Models-Pop-Model.html#SMinBorrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Sm_22_bor",
          "package": "HarmTrace",
          "partial": "Sm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Sm_22_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Sm_3",
          "package": "HarmTrace",
          "signature": "SD MinMode IV MinClass -\u003e SDom MinMode",
          "source": "src/HarmTrace-Models-Pop-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Sm_3",
          "normalized": "SD MinMode IV MinClass-\u003eSDom MinMode",
          "package": "HarmTrace",
          "partial": "Sm",
          "signature": "SD MinMode IV MinClass-\u003eSDom MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Sm_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Sm_4",
          "package": "HarmTrace",
          "signature": "SD MinMode IIIb MajClass -\u003e Final IV MinClass -\u003e SDom MinMode",
          "source": "src/HarmTrace-Models-Pop-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Sm_4",
          "normalized": "SD MinMode IIIb MajClass-\u003eFinal IV MinClass-\u003eSDom MinMode",
          "package": "HarmTrace",
          "partial": "Sm",
          "signature": "SD MinMode IIIb MajClass-\u003eFinal IV MinClass-\u003eSDom MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Sm_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Sm_5_par",
          "package": "HarmTrace",
          "signature": "SD MinMode VIb MajClass -\u003e SDom MinMode",
          "source": "src/HarmTrace-Models-Pop-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Sm_5_par",
          "normalized": "SD MinMode VIb MajClass-\u003eSDom MinMode",
          "package": "HarmTrace",
          "partial": "Sm",
          "signature": "SD MinMode VIb MajClass-\u003eSDom MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Sm_5_par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Sm_6",
          "package": "HarmTrace",
          "signature": "SD MinMode IIb MajClass -\u003e SDom MinMode",
          "source": "src/HarmTrace-Models-Pop-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Sm_6",
          "normalized": "SD MinMode IIb MajClass-\u003eSDom MinMode",
          "package": "HarmTrace",
          "partial": "Sm",
          "signature": "SD MinMode IIb MajClass-\u003eSDom MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Sm_6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Sm_7",
          "package": "HarmTrace",
          "signature": "SD MinMode IIIb MajClass -\u003e Final II MinClass -\u003e SDom MinMode",
          "source": "src/HarmTrace-Models-Pop-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Sm_7",
          "normalized": "SD MinMode IIIb MajClass-\u003eFinal II MinClass-\u003eSDom MinMode",
          "package": "HarmTrace",
          "partial": "Sm",
          "signature": "SD MinMode IIIb MajClass-\u003eFinal II MinClass-\u003eSDom MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Sm_7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Sm_9_bor",
          "package": "HarmTrace",
          "signature": "SMajBorrow -\u003e SDom MinMode",
          "source": "src/HarmTrace-Models-Pop-Model.html#SDom",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Sm_9_bor",
          "normalized": "SMajBorrow-\u003eSDom MinMode",
          "package": "HarmTrace",
          "partial": "Sm",
          "signature": "SMajBorrow-\u003eSDom MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Sm_9_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Surface_Chord",
          "package": "HarmTrace",
          "signature": "ChordToken -\u003e Surface_Chord deg clss (Su n)",
          "source": "src/HarmTrace-Models-Pop-Model.html#Surface_Chord",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Surface_Chord",
          "normalized": "ChordToken-\u003eSurface_Chord a b(Su c)",
          "package": "HarmTrace",
          "partial": "Surface Chord",
          "signature": "ChordToken-\u003eSurface_Chord deg clss(Su n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Surface_Chord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "T_0",
          "package": "HarmTrace",
          "signature": "SDom mode -\u003e Ton mode -\u003e Ton mode",
          "source": "src/HarmTrace-Models-Pop-Model.html#Ton",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "T_0",
          "normalized": "SDom a-\u003eTon a-\u003eTon a",
          "package": "HarmTrace",
          "signature": "SDom mode-\u003eTon mode-\u003eTon mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:T_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "T_1",
          "package": "HarmTrace",
          "signature": "Final I MajClass -\u003e Ton MajMode",
          "source": "src/HarmTrace-Models-Pop-Model.html#Ton",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "T_1",
          "normalized": "Final I MajClass-\u003eTon MajMode",
          "package": "HarmTrace",
          "signature": "Final I MajClass-\u003eTon MajMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:T_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "T_21_bor",
          "package": "HarmTrace",
          "signature": "T_21_bor (SD MajMode I MajClass)",
          "source": "src/HarmTrace-Models-Pop-Model.html#TMajBorrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "T_21_bor",
          "package": "HarmTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:T_21_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "T_4_bls",
          "package": "HarmTrace",
          "signature": "Final I DomClass -\u003e Ton mode",
          "source": "src/HarmTrace-Models-Pop-Model.html#Ton",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "T_4_bls",
          "normalized": "Final I DomClass-\u003eTon a",
          "package": "HarmTrace",
          "signature": "Final I DomClass-\u003eTon mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:T_4_bls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "T_6_bor",
          "package": "HarmTrace",
          "signature": "TMinBorrow -\u003e Ton MajMode",
          "source": "src/HarmTrace-Models-Pop-Model.html#Ton",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "T_6_bor",
          "normalized": "TMinBorrow-\u003eTon MajMode",
          "package": "HarmTrace",
          "signature": "TMinBorrow-\u003eTon MajMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:T_6_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Tm_1",
          "package": "HarmTrace",
          "signature": "SD MinMode I MinClass -\u003e Ton MinMode",
          "source": "src/HarmTrace-Models-Pop-Model.html#Ton",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Tm_1",
          "normalized": "SD MinMode I MinClass-\u003eTon MinMode",
          "package": "HarmTrace",
          "partial": "Tm",
          "signature": "SD MinMode I MinClass-\u003eTon MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Tm_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Tm_21_bor",
          "package": "HarmTrace",
          "signature": "Tm_21_bor (SD MinMode I MinClass)",
          "source": "src/HarmTrace-Models-Pop-Model.html#TMinBorrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Tm_21_bor",
          "package": "HarmTrace",
          "partial": "Tm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Tm_21_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Tm_6_bor",
          "package": "HarmTrace",
          "signature": "TMajBorrow -\u003e Ton MinMode",
          "source": "src/HarmTrace-Models-Pop-Model.html#Ton",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "Tm_6_bor",
          "normalized": "TMajBorrow-\u003eTon MinMode",
          "package": "HarmTrace",
          "partial": "Tm",
          "signature": "TMajBorrow-\u003eTon MinMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:Tm_6_bor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "allTypes",
          "package": "HarmTrace",
          "signature": "[Name]",
          "source": "src/HarmTrace-Models-Pop-Model.html#allTypes",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "allTypes",
          "normalized": "[Name]",
          "package": "HarmTrace",
          "partial": "Types",
          "signature": "[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:allTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "toClass",
          "package": "HarmTrace",
          "signature": "clss -\u003e ClassType",
          "source": "src/HarmTrace-Models-Pop-Model.html#toClass",
          "type": "method"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "toClass",
          "normalized": "a-\u003eClassType",
          "package": "HarmTrace",
          "partial": "Class",
          "signature": "clss-\u003eClassType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:toClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.Pop.Model",
          "name": "toDegree",
          "package": "HarmTrace",
          "signature": "deg -\u003e ScaleDegree",
          "source": "src/HarmTrace-Models-Pop-Model.html#toDegree",
          "type": "method"
        },
        "index": {
          "hierarchy": "HarmTrace Models Pop Model",
          "module": "HarmTrace.Models.Pop.Model",
          "name": "toDegree",
          "normalized": "a-\u003eScaleDegree",
          "package": "HarmTrace",
          "partial": "Degree",
          "signature": "deg-\u003eScaleDegree",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-Pop-Model.html#v:toDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "TypeLevel",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "TypeLevel",
          "package": "HarmTrace",
          "partial": "Type Level",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "Su",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#Su",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "Su",
          "package": "HarmTrace",
          "partial": "Su",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:Su"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T0",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T0",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T0",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T1",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T1",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T1",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T10",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T10",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T10",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T11",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T11",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T11",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T12",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T12",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T12",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T13",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T13",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T13",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T14",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T14",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T14",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T15",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T15",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T15",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T16",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T16",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T16",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T17",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T17",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T17",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T17"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T18",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T18",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T18",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T18"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T19",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T19",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T19",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T19"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T2",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T2",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T2",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T20",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T20",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T20",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T3",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T3",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T3",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T4",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T4",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T4",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T5",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T5",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T5",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T6",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T6",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T6",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T7",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T7",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T7",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T8",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T8",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T8",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T9",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#T9",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "T9",
          "package": "HarmTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:T9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "ToNat",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#ToNat",
          "type": "class"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "ToNat",
          "package": "HarmTrace",
          "partial": "To Nat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:ToNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "Ze",
          "package": "HarmTrace",
          "source": "src/HarmTrace-Models-TypeLevel.html#Ze",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "Ze",
          "package": "HarmTrace",
          "partial": "Ze",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#t:Ze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Models.TypeLevel",
          "name": "toNat",
          "package": "HarmTrace",
          "signature": "n -\u003e Int",
          "source": "src/HarmTrace-Models-TypeLevel.html#toNat",
          "type": "method"
        },
        "index": {
          "hierarchy": "HarmTrace Models TypeLevel",
          "module": "HarmTrace.Models.TypeLevel",
          "name": "toNat",
          "normalized": "a-\u003eInt",
          "package": "HarmTrace",
          "partial": "Nat",
          "signature": "n-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace/docs/HarmTrace-Models-TypeLevel.html#v:toNat"
      }
    }
  ]
]