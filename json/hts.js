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
        "word": "hts"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Ascribe",
          "name": "Ascribe",
          "package": "hts",
          "source": "src/Music-Typesetting-Ascribe.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Music Typesetting Ascribe",
          "module": "Music.Typesetting.Ascribe",
          "name": "Ascribe",
          "package": "hts",
          "partial": "Ascribe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Ascribe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003emm_ascribe_chd\u003c/a\u003e\u003c/code\u003e post-processed by \u003ccode\u003e\u003ca\u003eset_note_duration\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Typesetting.Ascribe",
          "name": "mm_ascribe",
          "package": "hts",
          "signature": "[[Duration_A]] -\u003e [Note] -\u003e [[Note]]",
          "source": "src/Music-Typesetting-Ascribe.html#mm_ascribe",
          "type": "function"
        },
        "index": {
          "description": "Variant of mm ascribe chd post-processed by set note duration",
          "hierarchy": "Music Typesetting Ascribe",
          "module": "Music.Typesetting.Ascribe",
          "name": "mm_ascribe",
          "normalized": "[[Duration_A]]-\u003e[Note]-\u003e[[Note]]",
          "package": "hts",
          "signature": "[[Duration_A]]-\u003e[Note]-\u003e[[Note]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Ascribe.html#v:mm_ascribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate \u003cem\u003eor\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Music.Typesetting.Ascribe",
          "name": "p_or",
          "package": "hts",
          "signature": "(t -\u003e Bool) -\u003e (t -\u003e Bool) -\u003e t -\u003e Bool",
          "source": "src/Music-Typesetting-Ascribe.html#p_or",
          "type": "function"
        },
        "index": {
          "description": "Predicate or",
          "hierarchy": "Music Typesetting Ascribe",
          "module": "Music.Typesetting.Ascribe",
          "name": "p_or",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003eBool)-\u003ea-\u003eBool",
          "package": "hts",
          "signature": "(t-\u003eBool)-\u003e(t-\u003eBool)-\u003et-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Ascribe.html#v:p_or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop annotation on repeated notes.\n\u003c/p\u003e",
          "module": "Music.Typesetting.Ascribe",
          "name": "set_note_duration",
          "package": "hts",
          "signature": "(Duration_A, Note) -\u003e Note",
          "source": "src/Music-Typesetting-Ascribe.html#set_note_duration",
          "type": "function"
        },
        "index": {
          "description": "Drop annotation on repeated notes",
          "hierarchy": "Music Typesetting Ascribe",
          "module": "Music.Typesetting.Ascribe",
          "name": "set_note_duration",
          "normalized": "(Duration_A,Note)-\u003eNote",
          "package": "hts",
          "signature": "(Duration_A,Note)-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Ascribe.html#v:set_note_duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDynamic mark literals.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "Dynamic",
          "package": "hts",
          "source": "src/Music-Typesetting-Literal-Dynamic.html",
          "type": "module"
        },
        "index": {
          "description": "Dynamic mark literals",
          "hierarchy": "Music Typesetting Literal Dynamic",
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "Dynamic",
          "package": "hts",
          "partial": "Dynamic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal-Dynamic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "cresc",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal-Dynamic.html#cresc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal Dynamic",
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "cresc",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal-Dynamic.html#v:cresc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "dim",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal-Dynamic.html#dim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal Dynamic",
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "dim",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal-Dynamic.html#v:dim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "dynamic_mark",
          "package": "hts",
          "signature": "Dynamic_Mark_T -\u003e N_Annotation",
          "source": "src/Music-Typesetting-Literal-Dynamic.html#dynamic_mark",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal Dynamic",
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "dynamic_mark",
          "normalized": "Dynamic_Mark_T-\u003eN_Annotation",
          "package": "hts",
          "signature": "Dynamic_Mark_T-\u003eN_Annotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal-Dynamic.html#v:dynamic_mark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "end_hairpin",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal-Dynamic.html#end_hairpin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal Dynamic",
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "end_hairpin",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal-Dynamic.html#v:end_hairpin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "f",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal-Dynamic.html#f",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal Dynamic",
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "f",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal-Dynamic.html#v:f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "ff",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal-Dynamic.html#ff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal Dynamic",
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "ff",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal-Dynamic.html#v:ff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "fff",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal-Dynamic.html#fff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal Dynamic",
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "fff",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal-Dynamic.html#v:fff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "ffff",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal-Dynamic.html#ffff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal Dynamic",
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "ffff",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal-Dynamic.html#v:ffff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "fp",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal-Dynamic.html#fp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal Dynamic",
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "fp",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal-Dynamic.html#v:fp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "mf",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal-Dynamic.html#mf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal Dynamic",
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "mf",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal-Dynamic.html#v:mf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "mp",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal-Dynamic.html#mp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal Dynamic",
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "mp",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal-Dynamic.html#v:mp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "niente",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal-Dynamic.html#niente",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal Dynamic",
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "niente",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal-Dynamic.html#v:niente"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "p",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal-Dynamic.html#p",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal Dynamic",
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "p",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal-Dynamic.html#v:p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "pp",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal-Dynamic.html#pp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal Dynamic",
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "pp",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal-Dynamic.html#v:pp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "ppp",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal-Dynamic.html#ppp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal Dynamic",
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "ppp",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal-Dynamic.html#v:ppp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "pppp",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal-Dynamic.html#pppp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal Dynamic",
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "pppp",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal-Dynamic.html#v:pppp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "sfz",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal-Dynamic.html#sfz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal Dynamic",
          "module": "Music.Typesetting.Literal.Dynamic",
          "name": "sfz",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal-Dynamic.html#v:sfz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "Literal",
          "package": "hts",
          "source": "src/Music-Typesetting-Literal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "Literal",
          "package": "hts",
          "partial": "Literal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "(&)",
          "package": "hts",
          "signature": "Note -\u003e N_Annotation -\u003e Note",
          "source": "src/Music-Typesetting-Literal.html#%26",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "(&) &",
          "normalized": "Note-\u003eN_Annotation-\u003eNote",
          "package": "hts",
          "signature": "Note-\u003eN_Annotation-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003em_annotate\u003c/a\u003e\u003c/code\u003e with reverse argument order.\n\u003c/p\u003e",
          "module": "Music.Typesetting.Literal",
          "name": "(&.)",
          "package": "hts",
          "signature": "Measure -\u003e M_Annotation -\u003e Measure",
          "source": "src/Music-Typesetting-Literal.html#%26.",
          "type": "function"
        },
        "index": {
          "description": "Infix variant of annotate with reverse argument order",
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "(&.) &.",
          "normalized": "Measure-\u003eM_Annotation-\u003eMeasure",
          "package": "hts",
          "signature": "Measure-\u003eM_Annotation-\u003eMeasure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:-38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "accent",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal.html#accent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "accent",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:accent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "alto_clef",
          "package": "hts",
          "signature": "M_Annotation",
          "source": "src/Music-Typesetting-Literal.html#alto_clef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "alto_clef",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:alto_clef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply function to first and last elements of list.\n\u003c/p\u003e\u003cpre\u003e annotate_bracket (+) (9,7) [1,2,3] == [10,2,10]\n\u003c/pre\u003e",
          "module": "Music.Typesetting.Literal",
          "name": "annotate_bracket",
          "package": "hts",
          "signature": "(a -\u003e x -\u003e x) -\u003e (a, a) -\u003e [x] -\u003e [x]",
          "source": "src/Music-Typesetting-Literal.html#annotate_bracket",
          "type": "function"
        },
        "index": {
          "description": "Apply function to first and last elements of list annotate bracket",
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "annotate_bracket",
          "normalized": "(a-\u003eb-\u003eb)-\u003e(a,a)-\u003e[b]-\u003e[b]",
          "package": "hts",
          "signature": "(a-\u003ex-\u003ex)-\u003e(a,a)-\u003e[x]-\u003e[x]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:annotate_bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply function to all but the last element of list.\n\u003c/p\u003e\u003cpre\u003e annotate_except_last (+) 7 [1,2,3] == [8,9,3]\n\u003c/pre\u003e",
          "module": "Music.Typesetting.Literal",
          "name": "annotate_except_last",
          "package": "hts",
          "signature": "(a -\u003e x -\u003e x) -\u003e a -\u003e [x] -\u003e [x]",
          "source": "src/Music-Typesetting-Literal.html#annotate_except_last",
          "type": "function"
        },
        "index": {
          "description": "Apply function to all but the last element of list annotate except last",
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "annotate_except_last",
          "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003e[b]-\u003e[b]",
          "package": "hts",
          "signature": "(a-\u003ex-\u003ex)-\u003ea-\u003e[x]-\u003e[x]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:annotate_except_last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply function to first element of list.\n\u003c/p\u003e\u003cpre\u003e annotate_first (+) 9 [1,2,3] == [10,2,3]\n\u003c/pre\u003e",
          "module": "Music.Typesetting.Literal",
          "name": "annotate_first",
          "package": "hts",
          "signature": "(a -\u003e x -\u003e x) -\u003e a -\u003e [x] -\u003e [x]",
          "source": "src/Music-Typesetting-Literal.html#annotate_first",
          "type": "function"
        },
        "index": {
          "description": "Apply function to first element of list annotate first",
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "annotate_first",
          "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003e[b]-\u003e[b]",
          "package": "hts",
          "signature": "(a-\u003ex-\u003ex)-\u003ea-\u003e[x]-\u003e[x]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:annotate_first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply function to last element of list.\n\u003c/p\u003e\u003cpre\u003e annotate_last (+) 7 [1,2,3] == [1,2,10]\n\u003c/pre\u003e",
          "module": "Music.Typesetting.Literal",
          "name": "annotate_last",
          "package": "hts",
          "signature": "(a -\u003e x -\u003e x) -\u003e a -\u003e [x] -\u003e [x]",
          "source": "src/Music-Typesetting-Literal.html#annotate_last",
          "type": "function"
        },
        "index": {
          "description": "Apply function to last element of list annotate last",
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "annotate_last",
          "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003e[b]-\u003e[b]",
          "package": "hts",
          "signature": "(a-\u003ex-\u003ex)-\u003ea-\u003e[x]-\u003e[x]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:annotate_last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply function to middle elements of list.\n\u003c/p\u003e\u003cpre\u003e annotate_middle (+) 9 [1,2,3,4] == [1,11,12,4]\n annotate_middle (+) 9 [1,4] == [1,4]\n\u003c/pre\u003e",
          "module": "Music.Typesetting.Literal",
          "name": "annotate_middle",
          "package": "hts",
          "signature": "(a -\u003e x -\u003e x) -\u003e a -\u003e [x] -\u003e [x]",
          "source": "src/Music-Typesetting-Literal.html#annotate_middle",
          "type": "function"
        },
        "index": {
          "description": "Apply function to middle elements of list annotate middle annotate middle",
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "annotate_middle",
          "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003e[b]-\u003e[b]",
          "package": "hts",
          "signature": "(a-\u003ex-\u003ex)-\u003ea-\u003e[x]-\u003e[x]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:annotate_middle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "arpeggiate",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal.html#arpeggiate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "arpeggiate",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:arpeggiate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "bass_8vb_clef",
          "package": "hts",
          "signature": "M_Annotation",
          "source": "src/Music-Typesetting-Literal.html#bass_8vb_clef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "bass_8vb_clef",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:bass_8vb_clef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "bass_clef",
          "package": "hts",
          "signature": "M_Annotation",
          "source": "src/Music-Typesetting-Literal.html#bass_clef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "bass_clef",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:bass_clef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "begin_slide",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal.html#begin_slide",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "begin_slide",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:begin_slide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "begin_slur",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal.html#begin_slur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "begin_slur",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:begin_slur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "empty_measure",
          "package": "hts",
          "signature": "(Integer, Integer) -\u003e Measure",
          "source": "src/Music-Typesetting-Literal.html#empty_measure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "empty_measure",
          "normalized": "(Integer,Integer)-\u003eMeasure",
          "package": "hts",
          "signature": "(Integer,Integer)-\u003eMeasure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:empty_measure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "end_slide",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal.html#end_slide",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "end_slide",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:end_slide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "end_slur",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal.html#end_slur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "end_slur",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:end_slur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "fermata",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal.html#fermata",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "fermata",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:fermata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate from \u003ccode\u003e\u003ca\u003eD_Annotation\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eN_Annotation\u003c/a\u003e\u003c/code\u003e.  Note: does not\n necessarily translate \u003ccode\u003e\u003ca\u003eBegin_Tuplet\u003c/a\u003e\u003c/code\u003e correctly.\n\u003c/p\u003e",
          "module": "Music.Typesetting.Literal",
          "name": "from_d_annotation",
          "package": "hts",
          "signature": "D_Annotation -\u003e N_Annotation",
          "source": "src/Music-Typesetting-Literal.html#from_d_annotation",
          "type": "function"
        },
        "index": {
          "description": "Translate from Annotation to Annotation Note does not necessarily translate Begin Tuplet correctly",
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "from_d_annotation",
          "normalized": "D_Annotation-\u003eN_Annotation",
          "package": "hts",
          "signature": "D_Annotation-\u003eN_Annotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:from_d_annotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "group",
          "package": "hts",
          "signature": "Name -\u003e [Part] -\u003e Part",
          "source": "src/Music-Typesetting-Literal.html#group",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "group",
          "normalized": "Name-\u003e[Part]-\u003ePart",
          "package": "hts",
          "signature": "Name-\u003e[Part]-\u003ePart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "laissez_vibrer",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal.html#laissez_vibrer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "laissez_vibrer",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:laissez_vibrer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "m_annotate",
          "package": "hts",
          "signature": "M_Annotation -\u003e Measure -\u003e Measure",
          "source": "src/Music-Typesetting-Literal.html#m_annotate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "m_annotate",
          "normalized": "M_Annotation-\u003eMeasure-\u003eMeasure",
          "package": "hts",
          "signature": "M_Annotation-\u003eMeasure-\u003eMeasure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:m_annotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "m_annotate_bracket",
          "package": "hts",
          "signature": "(M_Annotation, M_Annotation) -\u003e [Measure] -\u003e [Measure]",
          "source": "src/Music-Typesetting-Literal.html#m_annotate_bracket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "m_annotate_bracket",
          "normalized": "(M_Annotation,M_Annotation)-\u003e[Measure]-\u003e[Measure]",
          "package": "hts",
          "signature": "(M_Annotation,M_Annotation)-\u003e[Measure]-\u003e[Measure]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:m_annotate_bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "m_annotate_first",
          "package": "hts",
          "signature": "[M_Annotation] -\u003e [Measure] -\u003e [Measure]",
          "source": "src/Music-Typesetting-Literal.html#m_annotate_first",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "m_annotate_first",
          "normalized": "[M_Annotation]-\u003e[Measure]-\u003e[Measure]",
          "package": "hts",
          "signature": "[M_Annotation]-\u003e[Measure]-\u003e[Measure]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:m_annotate_first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "m_annotate_l",
          "package": "hts",
          "signature": "[M_Annotation] -\u003e Measure -\u003e Measure",
          "source": "src/Music-Typesetting-Literal.html#m_annotate_l",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "m_annotate_l",
          "normalized": "[M_Annotation]-\u003eMeasure-\u003eMeasure",
          "package": "hts",
          "signature": "[M_Annotation]-\u003eMeasure-\u003eMeasure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:m_annotate_l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "m_annotate_last",
          "package": "hts",
          "signature": "[M_Annotation] -\u003e [Measure] -\u003e [Measure]",
          "source": "src/Music-Typesetting-Literal.html#m_annotate_last",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "m_annotate_last",
          "normalized": "[M_Annotation]-\u003e[Measure]-\u003e[Measure]",
          "package": "hts",
          "signature": "[M_Annotation]-\u003e[Measure]-\u003e[Measure]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:m_annotate_last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "m_duration",
          "package": "hts",
          "signature": "Measure -\u003e [Duration]",
          "source": "src/Music-Typesetting-Literal.html#m_duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "m_duration",
          "normalized": "Measure-\u003e[Duration]",
          "package": "hts",
          "signature": "Measure-\u003e[Duration]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:m_duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "m_duration_rq",
          "package": "hts",
          "signature": "Measure -\u003e Rational",
          "source": "src/Music-Typesetting-Literal.html#m_duration_rq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "m_duration_rq",
          "normalized": "Measure-\u003eRational",
          "package": "hts",
          "signature": "Measure-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:m_duration_rq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "n_annotate",
          "package": "hts",
          "signature": "N_Annotation -\u003e Note -\u003e Note",
          "source": "src/Music-Typesetting-Literal.html#n_annotate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "n_annotate",
          "normalized": "N_Annotation-\u003eNote-\u003eNote",
          "package": "hts",
          "signature": "N_Annotation-\u003eNote-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:n_annotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "n_annotate_bracket",
          "package": "hts",
          "signature": "(N_Annotation, N_Annotation) -\u003e [Note] -\u003e [Note]",
          "source": "src/Music-Typesetting-Literal.html#n_annotate_bracket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "n_annotate_bracket",
          "normalized": "(N_Annotation,N_Annotation)-\u003e[Note]-\u003e[Note]",
          "package": "hts",
          "signature": "(N_Annotation,N_Annotation)-\u003e[Note]-\u003e[Note]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:n_annotate_bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "n_annotate_first",
          "package": "hts",
          "signature": "[N_Annotation] -\u003e [Note] -\u003e [Note]",
          "source": "src/Music-Typesetting-Literal.html#n_annotate_first",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "n_annotate_first",
          "normalized": "[N_Annotation]-\u003e[Note]-\u003e[Note]",
          "package": "hts",
          "signature": "[N_Annotation]-\u003e[Note]-\u003e[Note]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:n_annotate_first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "n_annotate_l",
          "package": "hts",
          "signature": "[N_Annotation] -\u003e Note -\u003e Note",
          "source": "src/Music-Typesetting-Literal.html#n_annotate_l",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "n_annotate_l",
          "normalized": "[N_Annotation]-\u003eNote-\u003eNote",
          "package": "hts",
          "signature": "[N_Annotation]-\u003eNote-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:n_annotate_l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "n_annotate_last",
          "package": "hts",
          "signature": "[N_Annotation] -\u003e [Note] -\u003e [Note]",
          "source": "src/Music-Typesetting-Literal.html#n_annotate_last",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "n_annotate_last",
          "normalized": "[N_Annotation]-\u003e[Note]-\u003e[Note]",
          "package": "hts",
          "signature": "[N_Annotation]-\u003e[Note]-\u003e[Note]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:n_annotate_last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply annotations to the start and end points of each tied note.\n\u003c/p\u003e",
          "module": "Music.Typesetting.Literal",
          "name": "n_annotate_tie_endpoints",
          "package": "hts",
          "signature": "([N_Annotation], [N_Annotation]) -\u003e Note -\u003e Note",
          "source": "src/Music-Typesetting-Literal.html#n_annotate_tie_endpoints",
          "type": "function"
        },
        "index": {
          "description": "Apply annotations to the start and end points of each tied note",
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "n_annotate_tie_endpoints",
          "normalized": "([N_Annotation],[N_Annotation])-\u003eNote-\u003eNote",
          "package": "hts",
          "signature": "([N_Annotation],[N_Annotation])-\u003eNote-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:n_annotate_tie_endpoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "n_edit_duration",
          "package": "hts",
          "signature": "(Duration -\u003e Duration) -\u003e Note -\u003e Note",
          "source": "src/Music-Typesetting-Literal.html#n_edit_duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "n_edit_duration",
          "normalized": "(Duration-\u003eDuration)-\u003eNote-\u003eNote",
          "package": "hts",
          "signature": "(Duration-\u003eDuration)-\u003eNote-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:n_edit_duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "part",
          "package": "hts",
          "signature": "Name -\u003e [Measure] -\u003e Part",
          "source": "src/Music-Typesetting-Literal.html#part",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "part",
          "normalized": "Name-\u003e[Measure]-\u003ePart",
          "package": "hts",
          "signature": "Name-\u003e[Measure]-\u003ePart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "pedal_change",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal.html#pedal_change",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "pedal_change",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:pedal_change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "pedal_continue",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal.html#pedal_continue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "pedal_continue",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:pedal_continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "pedal_down",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal.html#pedal_down",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "pedal_down",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:pedal_down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "pedal_down_mark",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal.html#pedal_down_mark",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "pedal_down_mark",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:pedal_down_mark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "pedal_up",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal.html#pedal_up",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "pedal_up",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:pedal_up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "pedal_up_mark",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal.html#pedal_up_mark",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "pedal_up_mark",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:pedal_up_mark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "percussion_clef",
          "package": "hts",
          "signature": "M_Annotation",
          "source": "src/Music-Typesetting-Literal.html#percussion_clef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "percussion_clef",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:percussion_clef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "stem_tremolo",
          "package": "hts",
          "signature": "Integer -\u003e Note -\u003e Note",
          "source": "src/Music-Typesetting-Literal.html#stem_tremolo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "stem_tremolo",
          "normalized": "Integer-\u003eNote-\u003eNote",
          "package": "hts",
          "signature": "Integer-\u003eNote-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:stem_tremolo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "tenor_clef",
          "package": "hts",
          "signature": "M_Annotation",
          "source": "src/Music-Typesetting-Literal.html#tenor_clef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "tenor_clef",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:tenor_clef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "treble_15ma_clef",
          "package": "hts",
          "signature": "M_Annotation",
          "source": "src/Music-Typesetting-Literal.html#treble_15ma_clef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "treble_15ma_clef",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:treble_15ma_clef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "treble_8va_clef",
          "package": "hts",
          "signature": "M_Annotation",
          "source": "src/Music-Typesetting-Literal.html#treble_8va_clef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "treble_8va_clef",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:treble_8va_clef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "treble_8vb_clef",
          "package": "hts",
          "signature": "M_Annotation",
          "source": "src/Music-Typesetting-Literal.html#treble_8vb_clef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "treble_8vb_clef",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:treble_8vb_clef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "treble_clef",
          "package": "hts",
          "signature": "M_Annotation",
          "source": "src/Music-Typesetting-Literal.html#treble_clef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "treble_clef",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:treble_clef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "trill_mark",
          "package": "hts",
          "signature": "N_Annotation",
          "source": "src/Music-Typesetting-Literal.html#trill_mark",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "trill_mark",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:trill_mark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Literal",
          "name": "tuplet",
          "package": "hts",
          "signature": "(Integer, Integer) -\u003e [Note] -\u003e [Note]",
          "source": "src/Music-Typesetting-Literal.html#tuplet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "tuplet",
          "normalized": "(Integer,Integer)-\u003e[Note]-\u003e[Note]",
          "package": "hts",
          "signature": "(Integer,Integer)-\u003e[Note]-\u003e[Note]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:tuplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge parallel voices\n\u003c/p\u003e",
          "module": "Music.Typesetting.Literal",
          "name": "voices",
          "package": "hts",
          "signature": "[[Measure]] -\u003e [Measure]",
          "source": "src/Music-Typesetting-Literal.html#voices",
          "type": "function"
        },
        "index": {
          "description": "Merge parallel voices",
          "hierarchy": "Music Typesetting Literal",
          "module": "Music.Typesetting.Literal",
          "name": "voices",
          "normalized": "[[Measure]]-\u003e[Measure]",
          "package": "hts",
          "signature": "[[Measure]]-\u003e[Measure]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Literal.html#v:voices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Model",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Model",
          "package": "hts",
          "partial": "Model",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Articulation_T",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Articulation_T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Articulation_T",
          "package": "hts",
          "partial": "Articulation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Articulation_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Beam_T",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Beam_T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Beam_T",
          "package": "hts",
          "partial": "Beam",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Beam_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Direction_T",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Direction_T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Direction_T",
          "package": "hts",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Direction_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Font_Family_T",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Font_Family_T",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Font_Family_T",
          "package": "hts",
          "partial": "Font Family",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Font_Family_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Font_Size_T",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Font_Size_T",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Font_Size_T",
          "package": "hts",
          "partial": "Font Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Font_Size_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Font_Style_T",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Font_Style_T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Font_Style_T",
          "package": "hts",
          "partial": "Font Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Font_Style_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Font_T",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Font_T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Font_T",
          "package": "hts",
          "partial": "Font",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Font_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Font_Weight_T",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Font_Weight_T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Font_Weight_T",
          "package": "hts",
          "partial": "Font Weight",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Font_Weight_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "G_Annotation",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#G_Annotation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "G_Annotation",
          "package": "hts",
          "partial": "Annotation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:G_Annotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Group_Symbol_T",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Group_Symbol_T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Group_Symbol_T",
          "package": "hts",
          "partial": "Group Symbol",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Group_Symbol_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Harmonic_T",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Harmonic_T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Harmonic_T",
          "package": "hts",
          "partial": "Harmonic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Harmonic_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "ID",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#ID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "ID",
          "package": "hts",
          "partial": "ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:ID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "M_Annotation",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#M_Annotation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "M_Annotation",
          "package": "hts",
          "partial": "Annotation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:M_Annotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Measure",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Measure",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Measure",
          "package": "hts",
          "partial": "Measure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Measure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdered to meet musicxml requirements.\n\u003c/p\u003e",
          "module": "Music.Typesetting.Model",
          "name": "N_Annotation",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "data"
        },
        "index": {
          "description": "Ordered to meet musicxml requirements",
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Annotation",
          "package": "hts",
          "partial": "Annotation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:N_Annotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Name",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Name",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Name",
          "package": "hts",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Note",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Note",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Note",
          "package": "hts",
          "partial": "Note",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Notehead_T",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Notehead_T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Notehead_T",
          "package": "hts",
          "partial": "Notehead",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Notehead_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Ornament_T",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Ornament_T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Ornament_T",
          "package": "hts",
          "partial": "Ornament",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Ornament_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "P_Annotation",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#P_Annotation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "P_Annotation",
          "package": "hts",
          "partial": "Annotation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:P_Annotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Part",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Part",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Part",
          "package": "hts",
          "partial": "Part",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Pedal_T",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Pedal_T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Pedal_T",
          "package": "hts",
          "partial": "Pedal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Pedal_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Placement_T",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Placement_T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Placement_T",
          "package": "hts",
          "partial": "Placement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Placement_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Score",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Score",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Score",
          "package": "hts",
          "partial": "Score",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Sound_T",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Sound_T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Sound_T",
          "package": "hts",
          "partial": "Sound",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Sound_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Technical_T",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Technical_T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Technical_T",
          "package": "hts",
          "partial": "Technical",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Technical_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Tuplet_T",
          "package": "hts",
          "source": "src/Music-Typesetting-Model.html#Tuplet_T",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Tuplet_T",
          "package": "hts",
          "partial": "Tuplet",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#t:Tuplet_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Above",
          "package": "hts",
          "signature": "Above",
          "source": "src/Music-Typesetting-Model.html#Placement_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Above",
          "package": "hts",
          "partial": "Above",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Above"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Accent",
          "package": "hts",
          "signature": "Accent",
          "source": "src/Music-Typesetting-Model.html#Articulation_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Accent",
          "package": "hts",
          "partial": "Accent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Accent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Artifical_Harmonic",
          "package": "hts",
          "signature": "Artifical_Harmonic",
          "source": "src/Music-Typesetting-Model.html#Harmonic_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Artifical_Harmonic",
          "package": "hts",
          "partial": "Artifical Harmonic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Artifical_Harmonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Beam_Begin",
          "package": "hts",
          "signature": "Beam_Begin",
          "source": "src/Music-Typesetting-Model.html#Beam_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Beam_Begin",
          "package": "hts",
          "partial": "Beam Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Beam_Begin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Beam_Continue",
          "package": "hts",
          "signature": "Beam_Continue",
          "source": "src/Music-Typesetting-Model.html#Beam_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Beam_Continue",
          "package": "hts",
          "partial": "Beam Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Beam_Continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Beam_End",
          "package": "hts",
          "signature": "Beam_End",
          "source": "src/Music-Typesetting-Model.html#Beam_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Beam_End",
          "package": "hts",
          "partial": "Beam End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Beam_End"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Below",
          "package": "hts",
          "signature": "Below",
          "source": "src/Music-Typesetting-Model.html#Placement_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Below",
          "package": "hts",
          "partial": "Below",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Below"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Brace",
          "package": "hts",
          "signature": "Brace",
          "source": "src/Music-Typesetting-Model.html#Group_Symbol_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Brace",
          "package": "hts",
          "partial": "Brace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Brace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Bracket",
          "package": "hts",
          "signature": "Bracket",
          "source": "src/Music-Typesetting-Model.html#Group_Symbol_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Bracket",
          "package": "hts",
          "partial": "Bracket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "D_Dynamic_Mark",
          "package": "hts",
          "signature": "D_Dynamic_Mark Dynamic_Mark_T",
          "source": "src/Music-Typesetting-Model.html#Direction_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "D_Dynamic_Mark",
          "package": "hts",
          "partial": "Dynamic Mark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:D_Dynamic_Mark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "D_Hairpin",
          "package": "hts",
          "signature": "D_Hairpin Hairpin_T",
          "source": "src/Music-Typesetting-Model.html#Direction_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "D_Hairpin",
          "package": "hts",
          "partial": "Hairpin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:D_Hairpin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "D_Laissez_Vibrer",
          "package": "hts",
          "signature": "D_Laissez_Vibrer",
          "source": "src/Music-Typesetting-Model.html#Direction_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "D_Laissez_Vibrer",
          "package": "hts",
          "partial": "Laissez Vibrer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:D_Laissez_Vibrer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "D_Pedal",
          "package": "hts",
          "signature": "D_Pedal",
          "source": "src/Music-Typesetting-Model.html#Direction_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "D_Pedal",
          "package": "hts",
          "partial": "Pedal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:D_Pedal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "D_Tempo_Marking",
          "package": "hts",
          "signature": "D_Tempo_Marking Tempo_Marking",
          "source": "src/Music-Typesetting-Model.html#Direction_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "D_Tempo_Marking",
          "package": "hts",
          "partial": "Tempo Marking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:D_Tempo_Marking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Down_Bow",
          "package": "hts",
          "signature": "Down_Bow",
          "source": "src/Music-Typesetting-Model.html#Technical_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Down_Bow",
          "package": "hts",
          "partial": "Down Bow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Down_Bow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Font",
          "package": "hts",
          "signature": "Font Font_Family_T Font_Style_T Font_Size_T Font_Weight_T",
          "source": "src/Music-Typesetting-Model.html#Font_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Font",
          "package": "hts",
          "partial": "Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Font"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Font_Style_Italic",
          "package": "hts",
          "signature": "Font_Style_Italic",
          "source": "src/Music-Typesetting-Model.html#Font_Style_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Font_Style_Italic",
          "package": "hts",
          "partial": "Font Style Italic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Font_Style_Italic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Font_Style_Normal",
          "package": "hts",
          "signature": "Font_Style_Normal",
          "source": "src/Music-Typesetting-Model.html#Font_Style_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Font_Style_Normal",
          "package": "hts",
          "partial": "Font Style Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Font_Style_Normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Font_Weight_Bold",
          "package": "hts",
          "signature": "Font_Weight_Bold",
          "source": "src/Music-Typesetting-Model.html#Font_Weight_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Font_Weight_Bold",
          "package": "hts",
          "partial": "Font Weight Bold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Font_Weight_Bold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Font_Weight_Normal",
          "package": "hts",
          "signature": "Font_Weight_Normal",
          "source": "src/Music-Typesetting-Model.html#Font_Weight_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Font_Weight_Normal",
          "package": "hts",
          "partial": "Font Weight Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Font_Weight_Normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "G_Name",
          "package": "hts",
          "signature": "G_Name Name",
          "source": "src/Music-Typesetting-Model.html#G_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "G_Name",
          "package": "hts",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:G_Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "G_Symbol",
          "package": "hts",
          "signature": "G_Symbol Group_Symbol_T",
          "source": "src/Music-Typesetting-Model.html#G_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "G_Symbol",
          "package": "hts",
          "partial": "Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:G_Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Group",
          "package": "hts",
          "signature": "Group (Maybe ID) [G_Annotation] [Part]",
          "source": "src/Music-Typesetting-Model.html#Part",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Group",
          "normalized": "Group(Maybe ID)[G_Annotation][Part]",
          "package": "hts",
          "partial": "Group",
          "signature": "Group(Maybe ID)[G_Annotation][Part]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Harmonic",
          "package": "hts",
          "signature": "Harmonic Harmonic_T",
          "source": "src/Music-Typesetting-Model.html#Technical_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Harmonic",
          "package": "hts",
          "partial": "Harmonic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Harmonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Line",
          "package": "hts",
          "signature": "Line",
          "source": "src/Music-Typesetting-Model.html#Group_Symbol_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Line",
          "package": "hts",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "M_Clef",
          "package": "hts",
          "signature": "M_Clef (Clef Integer) Integer",
          "source": "src/Music-Typesetting-Model.html#M_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "M_Clef",
          "package": "hts",
          "partial": "Clef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:M_Clef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "M_Direction",
          "package": "hts",
          "signature": "M_Direction Direction_T",
          "source": "src/Music-Typesetting-Model.html#M_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "M_Direction",
          "package": "hts",
          "partial": "Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:M_Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "M_Division",
          "package": "hts",
          "signature": "M_Division Integer",
          "source": "src/Music-Typesetting-Model.html#M_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "M_Division",
          "package": "hts",
          "partial": "Division",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:M_Division"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "M_Key",
          "package": "hts",
          "signature": "M_Key Note_T (Maybe Alteration_T) Mode_T",
          "source": "src/Music-Typesetting-Model.html#M_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "M_Key",
          "package": "hts",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:M_Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "M_Staves",
          "package": "hts",
          "signature": "M_Staves Integer",
          "source": "src/Music-Typesetting-Model.html#M_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "M_Staves",
          "package": "hts",
          "partial": "Staves",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:M_Staves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "M_Time_Signature",
          "package": "hts",
          "signature": "M_Time_Signature Time_Signature",
          "source": "src/Music-Typesetting-Model.html#M_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "M_Time_Signature",
          "package": "hts",
          "partial": "Time Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:M_Time_Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Measure",
          "package": "hts",
          "signature": "Measure",
          "source": "src/Music-Typesetting-Model.html#Measure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Measure",
          "package": "hts",
          "partial": "Measure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Measure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Arpeggiate",
          "package": "hts",
          "signature": "N_Arpeggiate",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Arpeggiate",
          "package": "hts",
          "partial": "Arpeggiate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Arpeggiate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Articulation",
          "package": "hts",
          "signature": "N_Articulation Articulation_T",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Articulation",
          "package": "hts",
          "partial": "Articulation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Articulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Backup",
          "package": "hts",
          "signature": "N_Backup [Duration]",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Backup",
          "normalized": "N_Backup[Duration]",
          "package": "hts",
          "partial": "Backup",
          "signature": "N_Backup[Duration]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Backup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Beam",
          "package": "hts",
          "signature": "N_Beam Integer Beam_T",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Beam",
          "package": "hts",
          "partial": "Beam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Beam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Begin_Glissando",
          "package": "hts",
          "signature": "N_Begin_Glissando",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Begin_Glissando",
          "package": "hts",
          "partial": "Begin Glissando",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Begin_Glissando"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Begin_Slide",
          "package": "hts",
          "signature": "N_Begin_Slide",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Begin_Slide",
          "package": "hts",
          "partial": "Begin Slide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Begin_Slide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Begin_Slur",
          "package": "hts",
          "signature": "N_Begin_Slur",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Begin_Slur",
          "package": "hts",
          "partial": "Begin Slur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Begin_Slur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Begin_Tied",
          "package": "hts",
          "signature": "N_Begin_Tied",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Begin_Tied",
          "package": "hts",
          "partial": "Begin Tied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Begin_Tied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Begin_Tuplet",
          "package": "hts",
          "signature": "N_Begin_Tuplet (Maybe Tuplet_T)",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Begin_Tuplet",
          "package": "hts",
          "partial": "Begin Tuplet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Begin_Tuplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Chord",
          "package": "hts",
          "signature": "N_Chord",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Chord",
          "package": "hts",
          "partial": "Chord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Chord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Direction",
          "package": "hts",
          "signature": "N_Direction Direction_T",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Direction",
          "package": "hts",
          "partial": "Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_End_Glissando",
          "package": "hts",
          "signature": "N_End_Glissando",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_End_Glissando",
          "package": "hts",
          "partial": "End Glissando",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_End_Glissando"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_End_Slide",
          "package": "hts",
          "signature": "N_End_Slide",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_End_Slide",
          "package": "hts",
          "partial": "End Slide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_End_Slide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_End_Slur",
          "package": "hts",
          "signature": "N_End_Slur",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_End_Slur",
          "package": "hts",
          "partial": "End Slur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_End_Slur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_End_Tied",
          "package": "hts",
          "signature": "N_End_Tied",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_End_Tied",
          "package": "hts",
          "partial": "End Tied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_End_Tied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_End_Tuplet",
          "package": "hts",
          "signature": "N_End_Tuplet",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_End_Tuplet",
          "package": "hts",
          "partial": "End Tuplet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_End_Tuplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Fermata",
          "package": "hts",
          "signature": "N_Fermata",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Fermata",
          "package": "hts",
          "partial": "Fermata",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Fermata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Grace",
          "package": "hts",
          "signature": "N_Grace",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Grace",
          "package": "hts",
          "partial": "Grace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Grace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Notehead",
          "package": "hts",
          "signature": "N_Notehead Notehead_T",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Notehead",
          "package": "hts",
          "partial": "Notehead",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Notehead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Ornament",
          "package": "hts",
          "signature": "N_Ornament Ornament_T",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Ornament",
          "package": "hts",
          "partial": "Ornament",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Ornament"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Pitch",
          "package": "hts",
          "signature": "N_Pitch Pitch",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Pitch",
          "package": "hts",
          "partial": "Pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Pitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Rest",
          "package": "hts",
          "signature": "N_Rest",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Rest",
          "package": "hts",
          "partial": "Rest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Rest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Staff",
          "package": "hts",
          "signature": "N_Staff Integer",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Staff",
          "package": "hts",
          "partial": "Staff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Staff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Stem_Tremolo",
          "package": "hts",
          "signature": "N_Stem_Tremolo Integer",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Stem_Tremolo",
          "package": "hts",
          "partial": "Stem Tremolo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Stem_Tremolo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Technical",
          "package": "hts",
          "signature": "N_Technical Technical_T",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Technical",
          "package": "hts",
          "partial": "Technical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Technical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Unpitched",
          "package": "hts",
          "signature": "N_Unpitched",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Unpitched",
          "package": "hts",
          "partial": "Unpitched",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Unpitched"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "N_Voice",
          "package": "hts",
          "signature": "N_Voice Integer",
          "source": "src/Music-Typesetting-Model.html#N_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "N_Voice",
          "package": "hts",
          "partial": "Voice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:N_Voice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Natural_Harmonic",
          "package": "hts",
          "signature": "Natural_Harmonic",
          "source": "src/Music-Typesetting-Model.html#Harmonic_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Natural_Harmonic",
          "package": "hts",
          "partial": "Natural Harmonic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Natural_Harmonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "None",
          "package": "hts",
          "signature": "None",
          "source": "src/Music-Typesetting-Model.html#Group_Symbol_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "None",
          "package": "hts",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Note",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Model.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Note",
          "package": "hts",
          "partial": "Note",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Notehead_Cross",
          "package": "hts",
          "signature": "Notehead_Cross",
          "source": "src/Music-Typesetting-Model.html#Notehead_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Notehead_Cross",
          "package": "hts",
          "partial": "Notehead Cross",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Notehead_Cross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Notehead_Diamond",
          "package": "hts",
          "signature": "Notehead_Diamond",
          "source": "src/Music-Typesetting-Model.html#Notehead_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Notehead_Diamond",
          "package": "hts",
          "partial": "Notehead Diamond",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Notehead_Diamond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Notehead_Square",
          "package": "hts",
          "signature": "Notehead_Square",
          "source": "src/Music-Typesetting-Model.html#Notehead_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Notehead_Square",
          "package": "hts",
          "partial": "Notehead Square",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Notehead_Square"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Notehead_Triangle",
          "package": "hts",
          "signature": "Notehead_Triangle",
          "source": "src/Music-Typesetting-Model.html#Notehead_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Notehead_Triangle",
          "package": "hts",
          "partial": "Notehead Triangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Notehead_Triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Open_String",
          "package": "hts",
          "signature": "Open_String",
          "source": "src/Music-Typesetting-Model.html#Technical_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Open_String",
          "package": "hts",
          "partial": "Open String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Open_String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Other_Technical",
          "package": "hts",
          "signature": "Other_Technical (Maybe Font_T) String",
          "source": "src/Music-Typesetting-Model.html#Technical_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Other_Technical",
          "package": "hts",
          "partial": "Other Technical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Other_Technical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "P_Name",
          "package": "hts",
          "signature": "P_Name Name",
          "source": "src/Music-Typesetting-Model.html#P_Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "P_Name",
          "package": "hts",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:P_Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Part",
          "package": "hts",
          "signature": "Part (Maybe ID) [P_Annotation] [Measure]",
          "source": "src/Music-Typesetting-Model.html#Part",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Part",
          "normalized": "Part(Maybe ID)[P_Annotation][Measure]",
          "package": "hts",
          "partial": "Part",
          "signature": "Part(Maybe ID)[P_Annotation][Measure]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Pedal_Change",
          "package": "hts",
          "signature": "Pedal_Change",
          "source": "src/Music-Typesetting-Model.html#Pedal_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Pedal_Change",
          "package": "hts",
          "partial": "Pedal Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Pedal_Change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Pedal_Continue",
          "package": "hts",
          "signature": "Pedal_Continue",
          "source": "src/Music-Typesetting-Model.html#Pedal_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Pedal_Continue",
          "package": "hts",
          "partial": "Pedal Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Pedal_Continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Pedal_Start",
          "package": "hts",
          "signature": "Pedal_Start",
          "source": "src/Music-Typesetting-Model.html#Pedal_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Pedal_Start",
          "package": "hts",
          "partial": "Pedal Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Pedal_Start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Pedal_Stop",
          "package": "hts",
          "signature": "Pedal_Stop",
          "source": "src/Music-Typesetting-Model.html#Pedal_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Pedal_Stop",
          "package": "hts",
          "partial": "Pedal Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Pedal_Stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Score",
          "package": "hts",
          "signature": "Score [Part]",
          "source": "src/Music-Typesetting-Model.html#Score",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Score",
          "normalized": "Score[Part]",
          "package": "hts",
          "partial": "Score",
          "signature": "Score[Part]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Snap_Pizzicato",
          "package": "hts",
          "signature": "Snap_Pizzicato",
          "source": "src/Music-Typesetting-Model.html#Technical_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Snap_Pizzicato",
          "package": "hts",
          "partial": "Snap Pizzicato",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Snap_Pizzicato"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Sound_Dynamics",
          "package": "hts",
          "signature": "Sound_Dynamics Double",
          "source": "src/Music-Typesetting-Model.html#Sound_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Sound_Dynamics",
          "package": "hts",
          "partial": "Sound Dynamics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Sound_Dynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Sound_Tempo",
          "package": "hts",
          "signature": "Sound_Tempo Double",
          "source": "src/Music-Typesetting-Model.html#Sound_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Sound_Tempo",
          "package": "hts",
          "partial": "Sound Tempo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Sound_Tempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Staccato",
          "package": "hts",
          "signature": "Staccato",
          "source": "src/Music-Typesetting-Model.html#Articulation_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Staccato",
          "package": "hts",
          "partial": "Staccato",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Staccato"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Stopped",
          "package": "hts",
          "signature": "Stopped",
          "source": "src/Music-Typesetting-Model.html#Technical_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Stopped",
          "package": "hts",
          "partial": "Stopped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Stopped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Strong_Accent",
          "package": "hts",
          "signature": "Strong_Accent",
          "source": "src/Music-Typesetting-Model.html#Articulation_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Strong_Accent",
          "package": "hts",
          "partial": "Strong Accent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Strong_Accent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Tenuto",
          "package": "hts",
          "signature": "Tenuto",
          "source": "src/Music-Typesetting-Model.html#Articulation_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Tenuto",
          "package": "hts",
          "partial": "Tenuto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Tenuto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Trill_Mark",
          "package": "hts",
          "signature": "Trill_Mark",
          "source": "src/Music-Typesetting-Model.html#Ornament_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Trill_Mark",
          "package": "hts",
          "partial": "Trill Mark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Trill_Mark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "Up_Bow",
          "package": "hts",
          "signature": "Up_Bow",
          "source": "src/Music-Typesetting-Model.html#Technical_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "Up_Bow",
          "package": "hts",
          "partial": "Up Bow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:Up_Bow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "m_annotations",
          "package": "hts",
          "signature": "[M_Annotation]",
          "source": "src/Music-Typesetting-Model.html#Measure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "m_annotations",
          "normalized": "[M_Annotation]",
          "package": "hts",
          "signature": "[M_Annotation]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:m_annotations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "m_notes",
          "package": "hts",
          "signature": "[Note]",
          "source": "src/Music-Typesetting-Model.html#Measure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "m_notes",
          "normalized": "[Note]",
          "package": "hts",
          "signature": "[Note]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:m_notes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "n_annotations",
          "package": "hts",
          "signature": "[N_Annotation]",
          "source": "src/Music-Typesetting-Model.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "n_annotations",
          "normalized": "[N_Annotation]",
          "package": "hts",
          "signature": "[N_Annotation]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:n_annotations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "n_duration",
          "package": "hts",
          "signature": "Duration",
          "source": "src/Music-Typesetting-Model.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "n_duration",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:n_duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "pedal_line",
          "package": "hts",
          "signature": "Bool",
          "source": "src/Music-Typesetting-Model.html#Direction_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "pedal_line",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:pedal_line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "pedal_sign",
          "package": "hts",
          "signature": "Bool",
          "source": "src/Music-Typesetting-Model.html#Direction_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "pedal_sign",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:pedal_sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Model",
          "name": "pedal_type",
          "package": "hts",
          "signature": "Pedal_T",
          "source": "src/Music-Typesetting-Model.html#Direction_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Model",
          "module": "Music.Typesetting.Model",
          "name": "pedal_type",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Model.html#v:pedal_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003ePitch\u003c/code\u003e names lifted to \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Music.Typesetting.Note.Name",
          "name": "Name",
          "package": "hts",
          "source": "src/Music-Typesetting-Note-Name.html",
          "type": "module"
        },
        "index": {
          "description": "Pitch names lifted to Note values",
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "Name",
          "package": "hts",
          "partial": "Name",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "a0",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#a0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "a0",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:a0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "a1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#a1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "a1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:a1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "a2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#a2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "a2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:a2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "a3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#a3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "a3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:a3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "a4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#a4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "a4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:a4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "a5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#a5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "a5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:a5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "a6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#a6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "a6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:a6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "a7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#a7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "a7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:a7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aeh3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aeh3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aeh3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aeh3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aeh4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aeh4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aeh4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aeh4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aeh5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aeh5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aeh5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aeh5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aeh6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aeh6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aeh6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aeh6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aes1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aes1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aes1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aes1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aes2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aes2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aes2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aes2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aes3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aes3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aes3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aes3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aes4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aes4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aes4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aes4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aes5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aes5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aes5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aes5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aes6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aes6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aes6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aes6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aes7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aes7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aes7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aes7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aeseh3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aeseh3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aeseh3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aeseh3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aeseh4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aeseh4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aeseh4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aeseh4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aeseh5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aeseh5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aeseh5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aeseh5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aeseh6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aeseh6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aeseh6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aeseh6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aeses4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aeses4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aeses4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aeses4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aeses5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aeses5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aeses5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aeses5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aih3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aih3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aih3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aih3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aih4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aih4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aih4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aih4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aih5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aih5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aih5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aih5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aih6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aih6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aih6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aih6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ais0",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ais0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ais0",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ais0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ais1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ais1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ais1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ais1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ais2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ais2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ais2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ais2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ais3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ais3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ais3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ais3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ais4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ais4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ais4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ais4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ais5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ais5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ais5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ais5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ais6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ais6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ais6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ais6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ais7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ais7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ais7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ais7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aisih3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aisih3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aisih3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aisih3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aisih4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aisih4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aisih4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aisih4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aisih5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aisih5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aisih5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aisih5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aisih6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aisih6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aisih6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aisih6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aisis2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aisis2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aisis2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aisis2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aisis3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aisis3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aisis3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aisis3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aisis4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aisis4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aisis4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aisis4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "aisis5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#aisis5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "aisis5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:aisis5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "b0",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#b0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "b0",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:b0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "b1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#b1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "b1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:b1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "b2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#b2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "b2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:b2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "b3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#b3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "b3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:b3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "b4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#b4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "b4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:b4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "b5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#b5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "b5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:b5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "b6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#b6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "b6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:b6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "b7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#b7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "b7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:b7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "beh3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#beh3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "beh3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:beh3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "beh4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#beh4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "beh4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:beh4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "beh5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#beh5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "beh5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:beh5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "beh6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#beh6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "beh6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:beh6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bes0",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bes0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bes0",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bes0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bes1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bes1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bes1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bes1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bes2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bes2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bes2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bes2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bes3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bes3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bes3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bes3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bes4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bes4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bes4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bes4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bes5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bes5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bes5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bes5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bes6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bes6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bes6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bes6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bes7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bes7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bes7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bes7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "beseh3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#beseh3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "beseh3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:beseh3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "beseh4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#beseh4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "beseh4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:beseh4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "beseh5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#beseh5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "beseh5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:beseh5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "beseh6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#beseh6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "beseh6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:beseh6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "beses4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#beses4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "beses4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:beses4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "beses5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#beses5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "beses5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:beses5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bih3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bih3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bih3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bih3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bih4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bih4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bih4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bih4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bih5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bih5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bih5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bih5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bih6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bih6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bih6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bih6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bis0",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bis0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bis0",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bis0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bis1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bis1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bis1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bis1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bis2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bis2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bis2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bis2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bis3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bis3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bis3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bis3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bis4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bis4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bis4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bis4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bis5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bis5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bis5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bis5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bis6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bis6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bis6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bis6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bis7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bis7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bis7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bis7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bisih3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bisih3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bisih3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bisih3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bisih4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bisih4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bisih4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bisih4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bisih5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bisih5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bisih5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bisih5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bisih6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bisih6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bisih6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bisih6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bisis2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bisis2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bisis2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bisis2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bisis3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bisis3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bisis3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bisis3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bisis4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bisis4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bisis4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bisis4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "bisis5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#bisis5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "bisis5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:bisis5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "c1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#c1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "c1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:c1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "c2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#c2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "c2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:c2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "c3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#c3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "c3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:c3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "c4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#c4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "c4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:c4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "c5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#c5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "c5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:c5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "c6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#c6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "c6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:c6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "c7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#c7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "c7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:c7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "c8",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#c8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "c8",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:c8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ceh3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ceh3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ceh3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ceh3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ceh4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ceh4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ceh4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ceh4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ceh5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ceh5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ceh5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ceh5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ceh6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ceh6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ceh6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ceh6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ces1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ces1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ces1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ces1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ces2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ces2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ces2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ces2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ces3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ces3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ces3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ces3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ces4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ces4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ces4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ces4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ces5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ces5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ces5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ces5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ces6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ces6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ces6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ces6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ces7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ces7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ces7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ces7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ceseh3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ceseh3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ceseh3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ceseh3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ceseh4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ceseh4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ceseh4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ceseh4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ceseh5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ceseh5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ceseh5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ceseh5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ceseh6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ceseh6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ceseh6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ceseh6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ceses4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ceses4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ceses4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ceses4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ceses5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ceses5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ceses5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ceses5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cih3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cih3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cih3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cih3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cih4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cih4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cih4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cih4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cih5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cih5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cih5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cih5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cih6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cih6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cih6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cih6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cis1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cis1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cis1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cis1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cis2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cis2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cis2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cis2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cis3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cis3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cis3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cis3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cis4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cis4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cis4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cis4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cis5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cis5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cis5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cis5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cis6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cis6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cis6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cis6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cis7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cis7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cis7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cis7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cis8",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cis8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cis8",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cis8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cisih3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cisih3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cisih3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cisih3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cisih4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cisih4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cisih4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cisih4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cisih5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cisih5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cisih5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cisih5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cisih6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cisih6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cisih6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cisih6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cisis2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cisis2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cisis2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cisis2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cisis3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cisis3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cisis3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cisis3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cisis4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cisis4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cisis4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cisis4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "cisis5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#cisis5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "cisis5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:cisis5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "d1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#d1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "d1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:d1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "d2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#d2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "d2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:d2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "d3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#d3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "d3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:d3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "d4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#d4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "d4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:d4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "d5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#d5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "d5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:d5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "d6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#d6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "d6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:d6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "d7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#d7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "d7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:d7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "d8",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#d8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "d8",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:d8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "deh3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#deh3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "deh3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:deh3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "deh4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#deh4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "deh4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:deh4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "deh5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#deh5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "deh5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:deh5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "deh6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#deh6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "deh6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:deh6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "des1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#des1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "des1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:des1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "des2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#des2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "des2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:des2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "des3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#des3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "des3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:des3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "des4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#des4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "des4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:des4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "des5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#des5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "des5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:des5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "des6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#des6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "des6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:des6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "des7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#des7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "des7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:des7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "deseh3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#deseh3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "deseh3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:deseh3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "deseh4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#deseh4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "deseh4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:deseh4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "deseh5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#deseh5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "deseh5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:deseh5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "deseh6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#deseh6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "deseh6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:deseh6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "deses4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#deses4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "deses4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:deses4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "deses5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#deses5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "deses5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:deses5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "dih3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#dih3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "dih3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:dih3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "dih4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#dih4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "dih4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:dih4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "dih5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#dih5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "dih5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:dih5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "dih6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#dih6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "dih6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:dih6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "dis1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#dis1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "dis1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:dis1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "dis2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#dis2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "dis2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:dis2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "dis3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#dis3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "dis3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:dis3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "dis4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#dis4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "dis4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:dis4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "dis5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#dis5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "dis5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:dis5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "dis6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#dis6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "dis6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:dis6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "dis7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#dis7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "dis7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:dis7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "disih3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#disih3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "disih3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:disih3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "disih4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#disih4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "disih4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:disih4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "disih5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#disih5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "disih5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:disih5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "disih6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#disih6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "disih6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:disih6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "disis2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#disis2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "disis2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:disis2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "disis3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#disis3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "disis3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:disis3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "disis4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#disis4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "disis4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:disis4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "disis5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#disis5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "disis5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:disis5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "e1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#e1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "e1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:e1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "e2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#e2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "e2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:e2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "e3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#e3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "e3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:e3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "e4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#e4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "e4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:e4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "e5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#e5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "e5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:e5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "e6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#e6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "e6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:e6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "e7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#e7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "e7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:e7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eeh3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eeh3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eeh3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eeh3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eeh4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eeh4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eeh4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eeh4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eeh5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eeh5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eeh5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eeh5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eeh6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eeh6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eeh6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eeh6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ees1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ees1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ees1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ees1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ees2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ees2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ees2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ees2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ees3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ees3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ees3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ees3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ees4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ees4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ees4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ees4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ees5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ees5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ees5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ees5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ees6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ees6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ees6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ees6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ees7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ees7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ees7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ees7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eeseh3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eeseh3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eeseh3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eeseh3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eeseh4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eeseh4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eeseh4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eeseh4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eeseh5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eeseh5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eeseh5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eeseh5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eeseh6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eeseh6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eeseh6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eeseh6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eeses4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eeses4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eeses4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eeses4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eeses5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eeses5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eeses5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eeses5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eih3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eih3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eih3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eih3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eih4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eih4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eih4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eih4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eih5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eih5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eih5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eih5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eih6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eih6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eih6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eih6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eis1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eis1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eis1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eis1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eis2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eis2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eis2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eis2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eis3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eis3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eis3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eis3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eis4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eis4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eis4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eis4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eis5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eis5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eis5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eis5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eis6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eis6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eis6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eis6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eis7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eis7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eis7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eis7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eisih3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eisih3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eisih3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eisih3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eisih4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eisih4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eisih4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eisih4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eisih5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eisih5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eisih5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eisih5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eisih6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eisih6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eisih6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eisih6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eisis2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eisis2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eisis2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eisis2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eisis3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eisis3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eisis3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eisis3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eisis4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eisis4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eisis4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eisis4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "eisis5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#eisis5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "eisis5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:eisis5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "f1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#f1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "f1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:f1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "f2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#f2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "f2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:f2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "f3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#f3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "f3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:f3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "f4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#f4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "f4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:f4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "f5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#f5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "f5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:f5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "f6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#f6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "f6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:f6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "f7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#f7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "f7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:f7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "feh3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#feh3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "feh3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:feh3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "feh4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#feh4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "feh4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:feh4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "feh5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#feh5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "feh5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:feh5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "feh6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#feh6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "feh6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:feh6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fes1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fes1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fes1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fes1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fes2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fes2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fes2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fes2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fes3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fes3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fes3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fes3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fes4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fes4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fes4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fes4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fes5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fes5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fes5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fes5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fes6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fes6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fes6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fes6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fes7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fes7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fes7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fes7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "feseh3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#feseh3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "feseh3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:feseh3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "feseh4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#feseh4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "feseh4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:feseh4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "feseh5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#feseh5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "feseh5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:feseh5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "feseh6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#feseh6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "feseh6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:feseh6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "feses4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#feses4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "feses4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:feses4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "feses5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#feses5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "feses5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:feses5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fih3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fih3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fih3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fih3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fih4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fih4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fih4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fih4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fih5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fih5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fih5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fih5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fih6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fih6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fih6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fih6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fis1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fis1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fis1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fis1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fis2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fis2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fis2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fis2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fis3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fis3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fis3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fis3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fis4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fis4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fis4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fis4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fis5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fis5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fis5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fis5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fis6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fis6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fis6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fis6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fis7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fis7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fis7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fis7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fisih3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fisih3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fisih3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fisih3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fisih4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fisih4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fisih4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fisih4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fisih5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fisih5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fisih5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fisih5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fisih6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fisih6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fisih6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fisih6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fisis2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fisis2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fisis2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fisis2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fisis3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fisis3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fisis3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fisis3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fisis4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fisis4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fisis4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fisis4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "fisis5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#fisis5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "fisis5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:fisis5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "g1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#g1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "g1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:g1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "g2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#g2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "g2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:g2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "g3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#g3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "g3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:g3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "g4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#g4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "g4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:g4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "g5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#g5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "g5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:g5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "g6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#g6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "g6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:g6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "g7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#g7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "g7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:g7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "geh3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#geh3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "geh3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:geh3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "geh4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#geh4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "geh4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:geh4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "geh5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#geh5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "geh5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:geh5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "geh6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#geh6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "geh6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:geh6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ges1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ges1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ges1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ges1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ges2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ges2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ges2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ges2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ges3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ges3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ges3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ges3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ges4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ges4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ges4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ges4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ges5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ges5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ges5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ges5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ges6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ges6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ges6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ges6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "ges7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#ges7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "ges7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:ges7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "geseh3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#geseh3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "geseh3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:geseh3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "geseh4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#geseh4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "geseh4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:geseh4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "geseh5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#geseh5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "geseh5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:geseh5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "geseh6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#geseh6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "geseh6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:geseh6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "geses4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#geses4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "geses4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:geses4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "geses5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#geses5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "geses5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:geses5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "gih3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#gih3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "gih3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:gih3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "gih4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#gih4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "gih4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:gih4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "gih5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#gih5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "gih5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:gih5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "gih6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#gih6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "gih6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:gih6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "gis1",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#gis1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "gis1",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:gis1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "gis2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#gis2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "gis2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:gis2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "gis3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#gis3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "gis3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:gis3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "gis4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#gis4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "gis4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:gis4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "gis5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#gis5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "gis5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:gis5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "gis6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#gis6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "gis6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:gis6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "gis7",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#gis7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "gis7",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:gis7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "gisih3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#gisih3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "gisih3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:gisih3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "gisih4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#gisih4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "gisih4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:gisih4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "gisih5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#gisih5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "gisih5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:gisih5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "gisih6",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#gisih6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "gisih6",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:gisih6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "gisis2",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#gisis2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "gisis2",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:gisis2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "gisis3",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#gisis3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "gisis3",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:gisis3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "gisis4",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#gisis4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "gisis4",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:gisis4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "gisis5",
          "package": "hts",
          "signature": "Note",
          "source": "src/Music-Typesetting-Note-Name.html#gisis5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "gisis5",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:gisis5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Note.Name",
          "name": "pitch_to_note",
          "package": "hts",
          "signature": "Pitch -\u003e Note",
          "source": "src/Music-Typesetting-Note-Name.html#pitch_to_note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Note Name",
          "module": "Music.Typesetting.Note.Name",
          "name": "pitch_to_note",
          "normalized": "Pitch-\u003eNote",
          "package": "hts",
          "signature": "Pitch-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Note-Name.html#v:pitch_to_note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "Binding",
          "package": "hts",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "Binding",
          "package": "hts",
          "partial": "Binding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "ATTR",
          "package": "hts",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#ATTR",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "ATTR",
          "package": "hts",
          "partial": "ATTR",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#t:ATTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "DocType",
          "package": "hts",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#DocType",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "DocType",
          "package": "hts",
          "partial": "Doc Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#t:DocType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "ELEM",
          "package": "hts",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#ELEM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "ELEM",
          "package": "hts",
          "partial": "ELEM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#t:ELEM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "EMPTY_ELEM",
          "package": "hts",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#EMPTY_ELEM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "EMPTY_ELEM",
          "package": "hts",
          "partial": "EMPTY ELEM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#t:EMPTY_ELEM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "NUMERICAL_ELEM",
          "package": "hts",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#NUMERICAL_ELEM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "NUMERICAL_ELEM",
          "package": "hts",
          "partial": "NUMERICAL ELEM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#t:NUMERICAL_ELEM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "PCDATA_ELEM",
          "package": "hts",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#PCDATA_ELEM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "PCDATA_ELEM",
          "package": "hts",
          "partial": "PCDATA ELEM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#t:PCDATA_ELEM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "accent",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#accent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "accent",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:accent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "accidental",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#accidental",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "accidental",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:accidental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "actual_notes",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#actual_notes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "actual_notes",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:actual_notes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "alter",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#alter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "alter",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:alter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "arpeggiate",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#arpeggiate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "arpeggiate",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:arpeggiate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "articulations",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#articulations",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "articulations",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:articulations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "artificial",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#artificial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "artificial",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:artificial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "attributes",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#attributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "attributes",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "backup",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#backup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "backup",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:backup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "beam",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#beam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "beam",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:beam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "beat_type",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#beat_type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "beat_type",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:beat_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "beat_unit",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#beat_unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "beat_unit",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:beat_unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "beat_unit_dot",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#beat_unit_dot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "beat_unit_dot",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:beat_unit_dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "beats",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#beats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "beats",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:beats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "bracket",
          "package": "hts",
          "signature": "ATTR",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#bracket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "bracket",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdinary character data, subject to escaping.\n\u003c/p\u003e",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "cdata",
          "package": "hts",
          "signature": "String -\u003e Content",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#cdata",
          "type": "function"
        },
        "index": {
          "description": "Ordinary character data subject to escaping",
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "cdata",
          "normalized": "String-\u003eContent",
          "package": "hts",
          "signature": "String-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:cdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "chord",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#chord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "chord",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:chord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "clef",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#clef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "clef",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:clef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "clef_octave_change",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#clef_octave_change",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "clef_octave_change",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:clef_octave_change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "creator",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#creator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "creator",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:creator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "credit",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#credit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "credit",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:credit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "credit_words",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#credit_words",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "credit_words",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:credit_words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "cue",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#cue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "cue",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:cue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "direction",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "direction",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "direction_type",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#direction_type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "direction_type",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:direction_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "divisions",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#divisions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "divisions",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:divisions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "dot",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#dot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "dot",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "down_bow",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#down_bow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "down_bow",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:down_bow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "duration",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "duration",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "dynamics",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#dynamics",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "dynamics",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:dynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "dynamics'",
          "package": "hts",
          "signature": "ATTR",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#dynamics%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "dynamics'",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:dynamics-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "fermata",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#fermata",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "fermata",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:fermata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "fifths",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#fifths",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "fifths",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:fifths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "font_family",
          "package": "hts",
          "signature": "ATTR",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#font_family",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "font_family",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:font_family"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "font_size",
          "package": "hts",
          "signature": "ATTR",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#font_size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "font_size",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:font_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "font_style",
          "package": "hts",
          "signature": "ATTR",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#font_style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "font_style",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:font_style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "font_weight",
          "package": "hts",
          "signature": "ATTR",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#font_weight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "font_weight",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:font_weight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "forward",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#forward",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "forward",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "glissando",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#glissando",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "glissando",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:glissando"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "grace",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#grace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "grace",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:grace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "group_abbreviation",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#group_abbreviation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "group_abbreviation",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:group_abbreviation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "group_barline",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#group_barline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "group_barline",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:group_barline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "group_name",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#group_name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "group_name",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:group_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "group_symbol",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#group_symbol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "group_symbol",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:group_symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "harmonic",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#harmonic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "harmonic",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:harmonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "id_A",
          "package": "hts",
          "signature": "ATTR",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#id_A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "id_A",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:id_A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "identification",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#identification",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "identification",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:identification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "implicit",
          "package": "hts",
          "signature": "ATTR",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#implicit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "implicit",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:implicit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "instrument_name",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#instrument_name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "instrument_name",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:instrument_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "key",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "key",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "line",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#line",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "line",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "measure",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#measure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "measure",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:measure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "metronome",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#metronome",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "metronome",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:metronome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "mk_attr",
          "package": "hts",
          "signature": "String -\u003e ATTR",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#mk_attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "mk_attr",
          "normalized": "String-\u003eATTR",
          "package": "hts",
          "signature": "String-\u003eATTR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:mk_attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "mk_elem",
          "package": "hts",
          "signature": "String -\u003e ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#mk_elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "mk_elem",
          "normalized": "String-\u003eELEM",
          "package": "hts",
          "signature": "String-\u003eELEM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:mk_elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "mk_empty_elem",
          "package": "hts",
          "signature": "String -\u003e EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#mk_empty_elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "mk_empty_elem",
          "normalized": "String-\u003eEMPTY_ELEM",
          "package": "hts",
          "signature": "String-\u003eEMPTY_ELEM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:mk_empty_elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "mk_empty_elem_no_attr",
          "package": "hts",
          "signature": "String -\u003e Content",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#mk_empty_elem_no_attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "mk_empty_elem_no_attr",
          "normalized": "String-\u003eContent",
          "package": "hts",
          "signature": "String-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:mk_empty_elem_no_attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "mk_numerical_elem",
          "package": "hts",
          "signature": "String -\u003e NUMERICAL_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#mk_numerical_elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "mk_numerical_elem",
          "normalized": "String-\u003eNUMERICAL_ELEM",
          "package": "hts",
          "signature": "String-\u003eNUMERICAL_ELEM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:mk_numerical_elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "mk_pcdata_elem",
          "package": "hts",
          "signature": "String -\u003e PCDATA_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#mk_pcdata_elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "mk_pcdata_elem",
          "normalized": "String-\u003ePCDATA_ELEM",
          "package": "hts",
          "signature": "String-\u003ePCDATA_ELEM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:mk_pcdata_elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "mode",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "mode",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "musicxml_partwise",
          "package": "hts",
          "signature": "DocType",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#musicxml_partwise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "musicxml_partwise",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:musicxml_partwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "musicxml_xml",
          "package": "hts",
          "signature": "String",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#musicxml_xml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "musicxml_xml",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:musicxml_xml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "natural",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#natural",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "natural",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "normal_dot",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#normal_dot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "normal_dot",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:normal_dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "normal_notes",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#normal_notes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "normal_notes",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:normal_notes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "normal_type",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#normal_type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "normal_type",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:normal_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "notations",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#notations",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "notations",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:notations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "note",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "note",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "notehead",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#notehead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "notehead",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:notehead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "number",
          "package": "hts",
          "signature": "ATTR",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "number",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "octave",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#octave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "octave",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:octave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "offset",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#offset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "offset",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "open_string",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#open_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "open_string",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:open_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "ornaments",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#ornaments",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "ornaments",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:ornaments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "other_technical",
          "package": "hts",
          "signature": "PCDATA_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#other_technical",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "other_technical",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:other_technical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "part",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#part",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "part",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "part_abbreviation",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#part_abbreviation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "part_abbreviation",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:part_abbreviation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "part_group",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#part_group",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "part_group",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:part_group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "part_list",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#part_list",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "part_list",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:part_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "part_name",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#part_name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "part_name",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:part_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "pedal",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#pedal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "pedal",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:pedal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "per_minute",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#per_minute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "per_minute",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:per_minute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "pitch",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "pitch",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:pitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "placement",
          "package": "hts",
          "signature": "ATTR",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#placement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "placement",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:placement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "rest",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#rest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "rest",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:rest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "rights",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#rights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "rights",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:rights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "score_instrument",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#score_instrument",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "score_instrument",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:score_instrument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "score_part",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#score_part",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "score_part",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:score_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "score_partwise",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#score_partwise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "score_partwise",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:score_partwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "show_number",
          "package": "hts",
          "signature": "ATTR",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#show_number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "show_number",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:show_number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "show_type",
          "package": "hts",
          "signature": "ATTR",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#show_type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "show_type",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:show_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "sign",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#sign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "sign",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "slash",
          "package": "hts",
          "signature": "ATTR",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#slash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "slash",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:slash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "slide",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#slide",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "slide",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:slide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "slur",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#slur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "slur",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:slur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "snap_pizzicato",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#snap_pizzicato",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "snap_pizzicato",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:snap_pizzicato"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "sound",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#sound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "sound",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:sound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "spread",
          "package": "hts",
          "signature": "ATTR",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#spread",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "spread",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:spread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "staff",
          "package": "hts",
          "signature": "NUMERICAL_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#staff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "staff",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:staff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "staves",
          "package": "hts",
          "signature": "NUMERICAL_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#staves",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "staves",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:staves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "stem",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#stem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "stem",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:stem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "step",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "step",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "stopped",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#stopped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "stopped",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:stopped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "technical",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#technical",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "technical",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:technical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tempo",
          "package": "hts",
          "signature": "ATTR",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#tempo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tempo",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:tempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tie",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#tie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tie",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:tie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tied",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#tied",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tied",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:tied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "time",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#time",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "time",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "time_modification",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#time_modification",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "time_modification",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:time_modification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tremolo",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#tremolo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tremolo",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:tremolo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tuplet",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#tuplet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tuplet",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:tuplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tuplet_actual",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#tuplet_actual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tuplet_actual",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:tuplet_actual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tuplet_dot",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#tuplet_dot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tuplet_dot",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:tuplet_dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tuplet_normal",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#tuplet_normal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tuplet_normal",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:tuplet_normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tuplet_number",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#tuplet_number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tuplet_number",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:tuplet_number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tuplet_type",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#tuplet_type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "tuplet_type",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:tuplet_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "type_A",
          "package": "hts",
          "signature": "ATTR",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#type_A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "type_A",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:type_A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "type_E",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#type_E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "type_E",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:type_E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "up_bow",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#up_bow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "up_bow",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:up_bow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "voice",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#voice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "voice",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:voice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "wedge",
          "package": "hts",
          "signature": "EMPTY_ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#wedge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "wedge",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:wedge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "words'",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#words%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "words'",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:words-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "work",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#work",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "work",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:work"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "work_number",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#work_number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "work_number",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:work_number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "work_title",
          "package": "hts",
          "signature": "ELEM",
          "source": "src/Music-Typesetting-Output-MusicXML-Binding.html#work_title",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML Binding",
          "module": "Music.Typesetting.Output.MusicXML.Binding",
          "name": "work_title",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML-Binding.html#v:work_title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "MusicXML",
          "package": "hts",
          "source": "src/Music-Typesetting-Output-MusicXML.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "MusicXML",
          "package": "hts",
          "partial": "Music XML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "c_hs_to_xml",
          "package": "hts",
          "signature": "Char -\u003e Char",
          "source": "src/Music-Typesetting-Output-MusicXML.html#c_hs_to_xml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "c_hs_to_xml",
          "normalized": "Char-\u003eChar",
          "package": "hts",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:c_hs_to_xml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "c_underscore_to_hyphen",
          "package": "hts",
          "signature": "Char -\u003e Char",
          "source": "src/Music-Typesetting-Output-MusicXML.html#c_underscore_to_hyphen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "c_underscore_to_hyphen",
          "normalized": "Char-\u003eChar",
          "package": "hts",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:c_underscore_to_hyphen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "duration_rq_to_dv",
          "package": "hts",
          "signature": "Rational -\u003e Integer",
          "source": "src/Music-Typesetting-Output-MusicXML.html#duration_rq_to_dv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "duration_rq_to_dv",
          "normalized": "Rational-\u003eInteger",
          "package": "hts",
          "signature": "Rational-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:duration_rq_to_dv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "dynamic_mark_to_sound_value",
          "package": "hts",
          "signature": "Dynamic_Mark_T -\u003e Maybe Double",
          "source": "src/Music-Typesetting-Output-MusicXML.html#dynamic_mark_to_sound_value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "dynamic_mark_to_sound_value",
          "normalized": "Dynamic_Mark_T-\u003eMaybe Double",
          "package": "hts",
          "signature": "Dynamic_Mark_T-\u003eMaybe Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:dynamic_mark_to_sound_value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "key_mode_t",
          "package": "hts",
          "signature": "Mode_T -\u003e String",
          "source": "src/Music-Typesetting-Output-MusicXML.html#key_mode_t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "key_mode_t",
          "normalized": "Mode_T-\u003eString",
          "package": "hts",
          "signature": "Mode_T-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:key_mode_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "part_set_id",
          "package": "hts",
          "signature": "(ID, Part) -\u003e (ID, Part)",
          "source": "src/Music-Typesetting-Output-MusicXML.html#part_set_id",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "part_set_id",
          "normalized": "(ID,Part)-\u003e(ID,Part)",
          "package": "hts",
          "signature": "(ID,Part)-\u003e(ID,Part)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:part_set_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "renderMusicXML",
          "package": "hts",
          "signature": "[Content] -\u003e String",
          "source": "src/Music-Typesetting-Output-MusicXML.html#renderMusicXML",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "renderMusicXML",
          "normalized": "[Content]-\u003eString",
          "package": "hts",
          "partial": "Music XML",
          "signature": "[Content]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:renderMusicXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "score_partwise'",
          "package": "hts",
          "signature": "[Attr] -\u003e [Content] -\u003e Element",
          "source": "src/Music-Typesetting-Output-MusicXML.html#score_partwise%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "score_partwise'",
          "normalized": "[Attr]-\u003e[Content]-\u003eElement",
          "package": "hts",
          "signature": "[Attr]-\u003e[Content]-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:score_partwise-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "score_set_ids",
          "package": "hts",
          "signature": "Score -\u003e Score",
          "source": "src/Music-Typesetting-Output-MusicXML.html#score_set_ids",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "score_set_ids",
          "normalized": "Score-\u003eScore",
          "package": "hts",
          "signature": "Score-\u003eScore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:score_set_ids"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "set_divisions",
          "package": "hts",
          "signature": "[Measure] -\u003e [Measure]",
          "source": "src/Music-Typesetting-Output-MusicXML.html#set_divisions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "set_divisions",
          "normalized": "[Measure]-\u003e[Measure]",
          "package": "hts",
          "signature": "[Measure]-\u003e[Measure]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:set_divisions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_accidental",
          "package": "hts",
          "signature": "[N_Annotation] -\u003e [Content]",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_accidental",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_accidental",
          "normalized": "[N_Annotation]-\u003e[Content]",
          "package": "hts",
          "signature": "[N_Annotation]-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_accidental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_alteration_t",
          "package": "hts",
          "signature": "Alteration_T -\u003e String",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_alteration_t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_alteration_t",
          "normalized": "Alteration_T-\u003eString",
          "package": "hts",
          "signature": "Alteration_T-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_alteration_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_articulation",
          "package": "hts",
          "signature": "N_Annotation -\u003e Maybe Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_articulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_articulation",
          "normalized": "N_Annotation-\u003eMaybe Content",
          "package": "hts",
          "signature": "N_Annotation-\u003eMaybe Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_articulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_articulation_t",
          "package": "hts",
          "signature": "Articulation_T -\u003e Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_articulation_t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_articulation_t",
          "normalized": "Articulation_T-\u003eContent",
          "package": "hts",
          "signature": "Articulation_T-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_articulation_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_articulations",
          "package": "hts",
          "signature": "[N_Annotation] -\u003e Maybe Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_articulations",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_articulations",
          "normalized": "[N_Annotation]-\u003eMaybe Content",
          "package": "hts",
          "signature": "[N_Annotation]-\u003eMaybe Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_articulations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_attribute",
          "package": "hts",
          "signature": "M_Annotation -\u003e Maybe Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_attribute",
          "normalized": "M_Annotation-\u003eMaybe Content",
          "package": "hts",
          "signature": "M_Annotation-\u003eMaybe Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_attributes",
          "package": "hts",
          "signature": "[M_Annotation] -\u003e Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_attributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_attributes",
          "normalized": "[M_Annotation]-\u003eContent",
          "package": "hts",
          "signature": "[M_Annotation]-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_beam",
          "package": "hts",
          "signature": "[N_Annotation] -\u003e [Content]",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_beam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_beam",
          "normalized": "[N_Annotation]-\u003e[Content]",
          "package": "hts",
          "signature": "[N_Annotation]-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_beam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_beam_t",
          "package": "hts",
          "signature": "Beam_T -\u003e [Content]",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_beam_t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_beam_t",
          "normalized": "Beam_T-\u003e[Content]",
          "package": "hts",
          "signature": "Beam_T-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_beam_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_clef",
          "package": "hts",
          "signature": "Clef Integer -\u003e Integer -\u003e Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_clef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_clef",
          "normalized": "Clef Integer-\u003eInteger-\u003eContent",
          "package": "hts",
          "signature": "Clef Integer-\u003eInteger-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_clef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_clef_t",
          "package": "hts",
          "signature": "Clef_T -\u003e (String, Integer)",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_clef_t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_clef_t",
          "normalized": "Clef_T-\u003e(String,Integer)",
          "package": "hts",
          "signature": "Clef_T-\u003e(String,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_clef_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_direction",
          "package": "hts",
          "signature": "Direction_T -\u003e Maybe Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_direction",
          "normalized": "Direction_T-\u003eMaybe Content",
          "package": "hts",
          "signature": "Direction_T-\u003eMaybe Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_divisions",
          "package": "hts",
          "signature": "Integer",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_divisions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_divisions",
          "package": "hts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_divisions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_duration",
          "package": "hts",
          "signature": "Duration -\u003e (Content, [Content], Maybe Content)",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_duration",
          "normalized": "Duration-\u003e(Content,[Content],Maybe Content)",
          "package": "hts",
          "signature": "Duration-\u003e(Content,[Content],Maybe Content)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_dynamic_mark_t",
          "package": "hts",
          "signature": "Dynamic_Mark_T -\u003e Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_dynamic_mark_t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_dynamic_mark_t",
          "normalized": "Dynamic_Mark_T-\u003eContent",
          "package": "hts",
          "signature": "Dynamic_Mark_T-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_dynamic_mark_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_font_attr",
          "package": "hts",
          "signature": "Maybe Font_T -\u003e [Attr]",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_font_attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_font_attr",
          "normalized": "Maybe Font_T-\u003e[Attr]",
          "package": "hts",
          "signature": "Maybe Font_T-\u003e[Attr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_font_attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_font_style",
          "package": "hts",
          "signature": "Font_Style_T -\u003e String",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_font_style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_font_style",
          "normalized": "Font_Style_T-\u003eString",
          "package": "hts",
          "signature": "Font_Style_T-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_font_style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_font_weight",
          "package": "hts",
          "signature": "Font_Weight_T -\u003e String",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_font_weight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_font_weight",
          "normalized": "Font_Weight_T-\u003eString",
          "package": "hts",
          "signature": "Font_Weight_T-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_font_weight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_g_annotation",
          "package": "hts",
          "signature": "G_Annotation -\u003e [Content]",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_g_annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_g_annotation",
          "normalized": "G_Annotation-\u003e[Content]",
          "package": "hts",
          "signature": "G_Annotation-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_g_annotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_group_name",
          "package": "hts",
          "signature": "Name -\u003e [Content]",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_group_name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_group_name",
          "normalized": "Name-\u003e[Content]",
          "package": "hts",
          "signature": "Name-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_group_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_group_symbol_t",
          "package": "hts",
          "signature": "Group_Symbol_T -\u003e Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_group_symbol_t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_group_symbol_t",
          "normalized": "Group_Symbol_T-\u003eContent",
          "package": "hts",
          "signature": "Group_Symbol_T-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_group_symbol_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake header from tuple of \u003cem\u003etitle\u003c/em\u003e, \u003cem\u003enumber\u003c/em\u003e, \u003cem\u003ededication\u003c/em\u003e and\n \u003cem\u003ecomposer\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_header",
          "package": "hts",
          "signature": "(String, String, String, String) -\u003e [Content]",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_header",
          "type": "function"
        },
        "index": {
          "description": "Make header from tuple of title number dedication and composer",
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_header",
          "normalized": "(String,String,String,String)-\u003e[Content]",
          "package": "hts",
          "signature": "(String,String,String,String)-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_key",
          "package": "hts",
          "signature": "(Note_T, Maybe Alteration_T, Mode_T) -\u003e Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_key",
          "normalized": "(Note_T,Maybe Alteration_T,Mode_T)-\u003eContent",
          "package": "hts",
          "signature": "(Note_T,Maybe Alteration_T,Mode_T)-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_m_direction",
          "package": "hts",
          "signature": "M_Annotation -\u003e Maybe Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_m_direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_m_direction",
          "normalized": "M_Annotation-\u003eMaybe Content",
          "package": "hts",
          "signature": "M_Annotation-\u003eMaybe Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_m_direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_measure",
          "package": "hts",
          "signature": "(Integer, Measure) -\u003e Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_measure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_measure",
          "normalized": "(Integer,Measure)-\u003eContent",
          "package": "hts",
          "signature": "(Integer,Measure)-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_measure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_metronome",
          "package": "hts",
          "signature": "Tempo_Marking -\u003e Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_metronome",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_metronome",
          "normalized": "Tempo_Marking-\u003eContent",
          "package": "hts",
          "signature": "Tempo_Marking-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_metronome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_multiplier",
          "package": "hts",
          "signature": "Rational -\u003e Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_multiplier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_multiplier",
          "normalized": "Rational-\u003eContent",
          "package": "hts",
          "signature": "Rational-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_multiplier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_n_direction",
          "package": "hts",
          "signature": "N_Annotation -\u003e Maybe Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_n_direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_n_direction",
          "normalized": "N_Annotation-\u003eMaybe Content",
          "package": "hts",
          "signature": "N_Annotation-\u003eMaybe Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_n_direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_notation",
          "package": "hts",
          "signature": "N_Annotation -\u003e Maybe Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_notation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_notation",
          "normalized": "N_Annotation-\u003eMaybe Content",
          "package": "hts",
          "signature": "N_Annotation-\u003eMaybe Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_notation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_notations",
          "package": "hts",
          "signature": "[N_Annotation] -\u003e Maybe Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_notations",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_notations",
          "normalized": "[N_Annotation]-\u003eMaybe Content",
          "package": "hts",
          "signature": "[N_Annotation]-\u003eMaybe Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_notations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_note",
          "package": "hts",
          "signature": "Note -\u003e [Content]",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_note",
          "normalized": "Note-\u003e[Content]",
          "package": "hts",
          "signature": "Note-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_note_elem",
          "package": "hts",
          "signature": "N_Annotation -\u003e Maybe Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_note_elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_note_elem",
          "normalized": "N_Annotation-\u003eMaybe Content",
          "package": "hts",
          "signature": "N_Annotation-\u003eMaybe Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_note_elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_notehead",
          "package": "hts",
          "signature": "[N_Annotation] -\u003e [Content]",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_notehead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_notehead",
          "normalized": "[N_Annotation]-\u003e[Content]",
          "package": "hts",
          "signature": "[N_Annotation]-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_notehead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_notehead_t",
          "package": "hts",
          "signature": "Notehead_T -\u003e [Content]",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_notehead_t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_notehead_t",
          "normalized": "Notehead_T-\u003e[Content]",
          "package": "hts",
          "signature": "Notehead_T-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_notehead_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_ornament",
          "package": "hts",
          "signature": "N_Annotation -\u003e Maybe Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_ornament",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_ornament",
          "normalized": "N_Annotation-\u003eMaybe Content",
          "package": "hts",
          "signature": "N_Annotation-\u003eMaybe Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_ornament"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_ornament_t",
          "package": "hts",
          "signature": "Ornament_T -\u003e Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_ornament_t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_ornament_t",
          "normalized": "Ornament_T-\u003eContent",
          "package": "hts",
          "signature": "Ornament_T-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_ornament_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_ornaments",
          "package": "hts",
          "signature": "[N_Annotation] -\u003e Maybe Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_ornaments",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_ornaments",
          "normalized": "[N_Annotation]-\u003eMaybe Content",
          "package": "hts",
          "signature": "[N_Annotation]-\u003eMaybe Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_ornaments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_p_annotation",
          "package": "hts",
          "signature": "P_Annotation -\u003e [Content]",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_p_annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_p_annotation",
          "normalized": "P_Annotation-\u003e[Content]",
          "package": "hts",
          "signature": "P_Annotation-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_p_annotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_part",
          "package": "hts",
          "signature": "Part -\u003e Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_part",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_part",
          "normalized": "Part-\u003eContent",
          "package": "hts",
          "signature": "Part-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_part_group",
          "package": "hts",
          "signature": "Part -\u003e [Content]",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_part_group",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_part_group",
          "normalized": "Part-\u003e[Content]",
          "package": "hts",
          "signature": "Part-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_part_group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_part_list",
          "package": "hts",
          "signature": "[Part] -\u003e Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_part_list",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_part_list",
          "normalized": "[Part]-\u003eContent",
          "package": "hts",
          "signature": "[Part]-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_part_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_part_name",
          "package": "hts",
          "signature": "Name -\u003e [Content]",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_part_name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_part_name",
          "normalized": "Name-\u003e[Content]",
          "package": "hts",
          "signature": "Name-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_part_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_pedal_type",
          "package": "hts",
          "signature": "Pedal_T -\u003e Attr",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_pedal_type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_pedal_type",
          "normalized": "Pedal_T-\u003eAttr",
          "package": "hts",
          "signature": "Pedal_T-\u003eAttr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_pedal_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_pitch",
          "package": "hts",
          "signature": "Pitch -\u003e Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_pitch",
          "normalized": "Pitch-\u003eContent",
          "package": "hts",
          "signature": "Pitch-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_pitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_pitch_accidental",
          "package": "hts",
          "signature": "Pitch -\u003e Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_pitch_accidental",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_pitch_accidental",
          "normalized": "Pitch-\u003eContent",
          "package": "hts",
          "signature": "Pitch-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_pitch_accidental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_placement_t",
          "package": "hts",
          "signature": "Placement_T -\u003e Attr",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_placement_t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_placement_t",
          "normalized": "Placement_T-\u003eAttr",
          "package": "hts",
          "signature": "Placement_T-\u003eAttr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_placement_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_score",
          "package": "hts",
          "signature": "Score -\u003e [Content]",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_score",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_score",
          "normalized": "Score-\u003e[Content]",
          "package": "hts",
          "signature": "Score-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_score_part",
          "package": "hts",
          "signature": "Part -\u003e Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_score_part",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_score_part",
          "normalized": "Part-\u003eContent",
          "package": "hts",
          "signature": "Part-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_score_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_sound",
          "package": "hts",
          "signature": "Sound_T -\u003e Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_sound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_sound",
          "normalized": "Sound_T-\u003eContent",
          "package": "hts",
          "signature": "Sound_T-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_sound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_staff",
          "package": "hts",
          "signature": "[N_Annotation] -\u003e [Content]",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_staff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_staff",
          "normalized": "[N_Annotation]-\u003e[Content]",
          "package": "hts",
          "signature": "[N_Annotation]-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_staff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_technical",
          "package": "hts",
          "signature": "[N_Annotation] -\u003e Maybe Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_technical",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_technical",
          "normalized": "[N_Annotation]-\u003eMaybe Content",
          "package": "hts",
          "signature": "[N_Annotation]-\u003eMaybe Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_technical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_technical_el",
          "package": "hts",
          "signature": "N_Annotation -\u003e Maybe Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_technical_el",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_technical_el",
          "normalized": "N_Annotation-\u003eMaybe Content",
          "package": "hts",
          "signature": "N_Annotation-\u003eMaybe Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_technical_el"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_time",
          "package": "hts",
          "signature": "Time_Signature -\u003e Content",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_time",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_time",
          "normalized": "Time_Signature-\u003eContent",
          "package": "hts",
          "signature": "Time_Signature-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_tuplet_t",
          "package": "hts",
          "signature": "Maybe Tuplet_T -\u003e [Content]",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_tuplet_t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_tuplet_t",
          "normalized": "Maybe Tuplet_T-\u003e[Content]",
          "package": "hts",
          "signature": "Maybe Tuplet_T-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_tuplet_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_tuplet_t_elem",
          "package": "hts",
          "signature": "(Integer, Duration) -\u003e [Content]",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_tuplet_t_elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_tuplet_t_elem",
          "normalized": "(Integer,Duration)-\u003e[Content]",
          "package": "hts",
          "signature": "(Integer,Duration)-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_tuplet_t_elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_voice",
          "package": "hts",
          "signature": "[N_Annotation] -\u003e [Content]",
          "source": "src/Music-Typesetting-Output-MusicXML.html#x_voice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Output MusicXML",
          "module": "Music.Typesetting.Output.MusicXML",
          "name": "x_voice",
          "normalized": "[N_Annotation]-\u003e[Content]",
          "package": "hts",
          "signature": "[N_Annotation]-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Output-MusicXML.html#v:x_voice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Process",
          "name": "Process",
          "package": "hts",
          "source": "src/Music-Typesetting-Process.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Music Typesetting Process",
          "module": "Music.Typesetting.Process",
          "name": "Process",
          "package": "hts",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eM_Annotation\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eM_Clef\u003c/a\u003e\u003c/code\u003e set the staff number.\n\u003c/p\u003e",
          "module": "Music.Typesetting.Process",
          "name": "m_clef_set_staff",
          "package": "hts",
          "signature": "Integer -\u003e M_Annotation -\u003e Maybe M_Annotation",
          "source": "src/Music-Typesetting-Process.html#m_clef_set_staff",
          "type": "function"
        },
        "index": {
          "description": "If Annotation is Clef set the staff number",
          "hierarchy": "Music Typesetting Process",
          "module": "Music.Typesetting.Process",
          "name": "m_clef_set_staff",
          "normalized": "Integer-\u003eM_Annotation-\u003eMaybe M_Annotation",
          "package": "hts",
          "signature": "Integer-\u003eM_Annotation-\u003eMaybe M_Annotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Process.html#v:m_clef_set_staff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Process",
          "name": "m_delete_annotation",
          "package": "hts",
          "signature": "M_Annotation -\u003e Measure -\u003e Measure",
          "source": "src/Music-Typesetting-Process.html#m_delete_annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Process",
          "module": "Music.Typesetting.Process",
          "name": "m_delete_annotation",
          "normalized": "M_Annotation-\u003eMeasure-\u003eMeasure",
          "package": "hts",
          "signature": "M_Annotation-\u003eMeasure-\u003eMeasure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Process.html#v:m_delete_annotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Process",
          "name": "m_remove_duplicate_tempo_marking",
          "package": "hts",
          "signature": "[Measure] -\u003e [Measure]",
          "source": "src/Music-Typesetting-Process.html#m_remove_duplicate_tempo_marking",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Process",
          "module": "Music.Typesetting.Process",
          "name": "m_remove_duplicate_tempo_marking",
          "normalized": "[Measure]-\u003e[Measure]",
          "package": "hts",
          "signature": "[Measure]-\u003e[Measure]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Process.html#v:m_remove_duplicate_tempo_marking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Process",
          "name": "m_remove_duplicate_ts",
          "package": "hts",
          "signature": "[Measure] -\u003e [Measure]",
          "source": "src/Music-Typesetting-Process.html#m_remove_duplicate_ts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Process",
          "module": "Music.Typesetting.Process",
          "name": "m_remove_duplicate_ts",
          "normalized": "[Measure]-\u003e[Measure]",
          "package": "hts",
          "signature": "[Measure]-\u003e[Measure]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Process.html#v:m_remove_duplicate_ts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e sequence adding \u003ccode\u003eD_End_Hairpin\u003c/code\u003e annotations as\n required, ie. where there is an open hairpin annotation and a\n \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e has a dyamic annotation without a close hairpin annotation.\n\u003c/p\u003e",
          "module": "Music.Typesetting.Process",
          "name": "n_add_end_hairpins",
          "package": "hts",
          "signature": "[Note] -\u003e [Note]",
          "source": "src/Music-Typesetting-Process.html#n_add_end_hairpins",
          "type": "function"
        },
        "index": {
          "description": "Process Note sequence adding End Hairpin annotations as required ie where there is an open hairpin annotation and Note has dyamic annotation without close hairpin annotation",
          "hierarchy": "Music Typesetting Process",
          "module": "Music.Typesetting.Process",
          "name": "n_add_end_hairpins",
          "normalized": "[Note]-\u003e[Note]",
          "package": "hts",
          "signature": "[Note]-\u003e[Note]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Process.html#v:n_add_end_hairpins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete persistent annotations or like.\n\u003c/p\u003e",
          "module": "Music.Typesetting.Process",
          "name": "prune",
          "package": "hts",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (b -\u003e Maybe a) -\u003e (a -\u003e b -\u003e b) -\u003e [b] -\u003e [b]",
          "source": "src/Music-Typesetting-Process.html#prune",
          "type": "function"
        },
        "index": {
          "description": "Delete persistent annotations or like",
          "hierarchy": "Music Typesetting Process",
          "module": "Music.Typesetting.Process",
          "name": "prune",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(b-\u003eMaybe a)-\u003e(a-\u003eb-\u003eb)-\u003e[b]-\u003e[b]",
          "package": "hts",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(b-\u003eMaybe a)-\u003e(a-\u003eb-\u003eb)-\u003e[b]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Process.html#v:prune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "Query",
          "package": "hts",
          "source": "src/Music-Typesetting-Query.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "Query",
          "package": "hts",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "At_Tied",
          "package": "hts",
          "source": "src/Music-Typesetting-Query.html#At_Tied",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "At_Tied",
          "package": "hts",
          "partial": "At Tied",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#t:At_Tied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "SI_Map",
          "package": "hts",
          "source": "src/Music-Typesetting-Query.html#SI_Map",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "SI_Map",
          "package": "hts",
          "partial": "SI Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#t:SI_Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "Tempo_Marking_Map",
          "package": "hts",
          "source": "src/Music-Typesetting-Query.html#Tempo_Marking_Map",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "Tempo_Marking_Map",
          "package": "hts",
          "partial": "Tempo Marking Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#t:Tempo_Marking_Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "Temporal_Map",
          "package": "hts",
          "source": "src/Music-Typesetting-Query.html#Temporal_Map",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "Temporal_Map",
          "package": "hts",
          "partial": "Temporal Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#t:Temporal_Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "Time_Signature_Map",
          "package": "hts",
          "source": "src/Music-Typesetting-Query.html#Time_Signature_Map",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "Time_Signature_Map",
          "package": "hts",
          "partial": "Time Signature Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#t:Time_Signature_Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "At_Begin_Tied",
          "package": "hts",
          "signature": "At_Begin_Tied",
          "source": "src/Music-Typesetting-Query.html#At_Tied",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "At_Begin_Tied",
          "package": "hts",
          "partial": "At Begin Tied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:At_Begin_Tied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "At_Either_Tied",
          "package": "hts",
          "signature": "At_Either_Tied",
          "source": "src/Music-Typesetting-Query.html#At_Tied",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "At_Either_Tied",
          "package": "hts",
          "partial": "At Either Tied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:At_Either_Tied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "At_End_Tied",
          "package": "hts",
          "signature": "At_End_Tied",
          "source": "src/Music-Typesetting-Query.html#At_Tied",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "At_End_Tied",
          "package": "hts",
          "partial": "At End Tied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:At_End_Tied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edx -\u003e d\n\u003c/p\u003e\u003cpre\u003e integrate [1,3,6,10] == [1,4,10,20]\n\u003c/pre\u003e",
          "module": "Music.Typesetting.Query",
          "name": "integrate",
          "package": "hts",
          "signature": "[a] -\u003e [a]",
          "source": "src/Music-Typesetting-Query.html#integrate",
          "type": "function"
        },
        "index": {
          "description": "dx integrate",
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "integrate",
          "normalized": "[a]-\u003e[a]",
          "package": "hts",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:integrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003cem\u003ea\u003c/em\u003e for singleton list, else \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Typesetting.Query",
          "name": "list_to_maybe",
          "package": "hts",
          "signature": "[a] -\u003e Maybe a",
          "source": "src/Music-Typesetting-Query.html#list_to_maybe",
          "type": "function"
        },
        "index": {
          "description": "Just for singleton list else Nothing",
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "list_to_maybe",
          "normalized": "[a]-\u003eMaybe a",
          "package": "hts",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:list_to_maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "locate_notes",
          "package": "hts",
          "signature": "[[Measure]] -\u003e [(Rational, Note)]",
          "source": "src/Music-Typesetting-Query.html#locate_notes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "locate_notes",
          "normalized": "[[Measure]]-\u003e[(Rational,Note)]",
          "package": "hts",
          "signature": "[[Measure]]-\u003e[(Rational,Note)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:locate_notes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "m_tempo_marking",
          "package": "hts",
          "signature": "Measure -\u003e [M_Annotation]",
          "source": "src/Music-Typesetting-Query.html#m_tempo_marking",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "m_tempo_marking",
          "normalized": "Measure-\u003e[M_Annotation]",
          "package": "hts",
          "signature": "Measure-\u003e[M_Annotation]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:m_tempo_marking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "m_tempo_marking'",
          "package": "hts",
          "signature": "Measure -\u003e Maybe M_Annotation",
          "source": "src/Music-Typesetting-Query.html#m_tempo_marking%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "m_tempo_marking'",
          "normalized": "Measure-\u003eMaybe M_Annotation",
          "package": "hts",
          "signature": "Measure-\u003eMaybe M_Annotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:m_tempo_marking-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "m_tempo_marking_t",
          "package": "hts",
          "signature": "Measure -\u003e [Tempo_Marking]",
          "source": "src/Music-Typesetting-Query.html#m_tempo_marking_t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "m_tempo_marking_t",
          "normalized": "Measure-\u003e[Tempo_Marking]",
          "package": "hts",
          "signature": "Measure-\u003e[Tempo_Marking]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:m_tempo_marking_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "m_time_signature",
          "package": "hts",
          "signature": "Measure -\u003e [M_Annotation]",
          "source": "src/Music-Typesetting-Query.html#m_time_signature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "m_time_signature",
          "normalized": "Measure-\u003e[M_Annotation]",
          "package": "hts",
          "signature": "Measure-\u003e[M_Annotation]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:m_time_signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "m_time_signature'",
          "package": "hts",
          "signature": "Measure -\u003e Maybe M_Annotation",
          "source": "src/Music-Typesetting-Query.html#m_time_signature%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "m_time_signature'",
          "normalized": "Measure-\u003eMaybe M_Annotation",
          "package": "hts",
          "signature": "Measure-\u003eMaybe M_Annotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:m_time_signature-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "m_time_signature_t",
          "package": "hts",
          "signature": "Measure -\u003e [Time_Signature]",
          "source": "src/Music-Typesetting-Query.html#m_time_signature_t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "m_time_signature_t",
          "normalized": "Measure-\u003e[Time_Signature]",
          "package": "hts",
          "signature": "Measure-\u003e[Time_Signature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:m_time_signature_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "ma_tempo_marking_t",
          "package": "hts",
          "signature": "M_Annotation -\u003e Maybe Tempo_Marking",
          "source": "src/Music-Typesetting-Query.html#ma_tempo_marking_t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "ma_tempo_marking_t",
          "normalized": "M_Annotation-\u003eMaybe Tempo_Marking",
          "package": "hts",
          "signature": "M_Annotation-\u003eMaybe Tempo_Marking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:ma_tempo_marking_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "ma_time_signature_t",
          "package": "hts",
          "signature": "M_Annotation -\u003e Maybe Time_Signature",
          "source": "src/Music-Typesetting-Query.html#ma_time_signature_t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "ma_time_signature_t",
          "normalized": "M_Annotation-\u003eMaybe Time_Signature",
          "package": "hts",
          "signature": "M_Annotation-\u003eMaybe Time_Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:ma_time_signature_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "mm_tempo_marking_map",
          "package": "hts",
          "signature": "[Measure] -\u003e Tempo_Marking_Map",
          "source": "src/Music-Typesetting-Query.html#mm_tempo_marking_map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "mm_tempo_marking_map",
          "normalized": "[Measure]-\u003eTempo_Marking_Map",
          "package": "hts",
          "signature": "[Measure]-\u003eTempo_Marking_Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:mm_tempo_marking_map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "mm_temporal_map",
          "package": "hts",
          "signature": "[Measure] -\u003e Temporal_Map",
          "source": "src/Music-Typesetting-Query.html#mm_temporal_map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "mm_temporal_map",
          "normalized": "[Measure]-\u003eTemporal_Map",
          "package": "hts",
          "signature": "[Measure]-\u003eTemporal_Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:mm_temporal_map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "mm_time_signature_map",
          "package": "hts",
          "signature": "[Measure] -\u003e Time_Signature_Map",
          "source": "src/Music-Typesetting-Query.html#mm_time_signature_map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "mm_time_signature_map",
          "normalized": "[Measure]-\u003eTime_Signature_Map",
          "package": "hts",
          "signature": "[Measure]-\u003eTime_Signature_Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:mm_time_signature_map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "n_duration_forward",
          "package": "hts",
          "signature": "Note -\u003e Maybe Duration",
          "source": "src/Music-Typesetting-Query.html#n_duration_forward",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "n_duration_forward",
          "normalized": "Note-\u003eMaybe Duration",
          "package": "hts",
          "signature": "Note-\u003eMaybe Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:n_duration_forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "n_dynamic_mark",
          "package": "hts",
          "signature": "Note -\u003e Maybe Dynamic_Mark_T",
          "source": "src/Music-Typesetting-Query.html#n_dynamic_mark",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "n_dynamic_mark",
          "normalized": "Note-\u003eMaybe Dynamic_Mark_T",
          "package": "hts",
          "signature": "Note-\u003eMaybe Dynamic_Mark_T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:n_dynamic_mark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "n_has_annotation",
          "package": "hts",
          "signature": "N_Annotation -\u003e Note -\u003e Bool",
          "source": "src/Music-Typesetting-Query.html#n_has_annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "n_has_annotation",
          "normalized": "N_Annotation-\u003eNote-\u003eBool",
          "package": "hts",
          "signature": "N_Annotation-\u003eNote-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:n_has_annotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "n_has_dynamic_mark",
          "package": "hts",
          "signature": "Note -\u003e Bool",
          "source": "src/Music-Typesetting-Query.html#n_has_dynamic_mark",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "n_has_dynamic_mark",
          "normalized": "Note-\u003eBool",
          "package": "hts",
          "signature": "Note-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:n_has_dynamic_mark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "n_has_pitch",
          "package": "hts",
          "signature": "Note -\u003e Bool",
          "source": "src/Music-Typesetting-Query.html#n_has_pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "n_has_pitch",
          "normalized": "Note-\u003eBool",
          "package": "hts",
          "signature": "Note-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:n_has_pitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "n_is_chord_elem",
          "package": "hts",
          "signature": "Note -\u003e Bool",
          "source": "src/Music-Typesetting-Query.html#n_is_chord_elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "n_is_chord_elem",
          "normalized": "Note-\u003eBool",
          "package": "hts",
          "signature": "Note-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:n_is_chord_elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "n_is_final_tie",
          "package": "hts",
          "signature": "Note -\u003e Bool",
          "source": "src/Music-Typesetting-Query.html#n_is_final_tie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "n_is_final_tie",
          "normalized": "Note-\u003eBool",
          "package": "hts",
          "signature": "Note-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:n_is_final_tie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "n_is_initial_tie",
          "package": "hts",
          "signature": "Note -\u003e Bool",
          "source": "src/Music-Typesetting-Query.html#n_is_initial_tie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "n_is_initial_tie",
          "normalized": "Note-\u003eBool",
          "package": "hts",
          "signature": "Note-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:n_is_initial_tie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "n_is_rest",
          "package": "hts",
          "signature": "Note -\u003e Bool",
          "source": "src/Music-Typesetting-Query.html#n_is_rest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "n_is_rest",
          "normalized": "Note-\u003eBool",
          "package": "hts",
          "signature": "Note-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:n_is_rest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "n_is_untied",
          "package": "hts",
          "signature": "Note -\u003e Bool",
          "source": "src/Music-Typesetting-Query.html#n_is_untied",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "n_is_untied",
          "normalized": "Note-\u003eBool",
          "package": "hts",
          "signature": "Note-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:n_is_untied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "n_locate",
          "package": "hts",
          "signature": "(Rational, Rational, Tempo_Marking) -\u003e [Note] -\u003e [(Rational, Note)]",
          "source": "src/Music-Typesetting-Query.html#n_locate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "n_locate",
          "normalized": "(Rational,Rational,Tempo_Marking)-\u003e[Note]-\u003e[(Rational,Note)]",
          "package": "hts",
          "signature": "(Rational,Rational,Tempo_Marking)-\u003e[Note]-\u003e[(Rational,Note)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:n_locate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "n_pitch",
          "package": "hts",
          "signature": "Note -\u003e Maybe Pitch",
          "source": "src/Music-Typesetting-Query.html#n_pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "n_pitch",
          "normalized": "Note-\u003eMaybe Pitch",
          "package": "hts",
          "signature": "Note-\u003eMaybe Pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:n_pitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "na_annotated_tied_lr",
          "package": "hts",
          "signature": "[N_Annotation] -\u003e (Bool, Bool)",
          "source": "src/Music-Typesetting-Query.html#na_annotated_tied_lr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "na_annotated_tied_lr",
          "normalized": "[N_Annotation]-\u003e(Bool,Bool)",
          "package": "hts",
          "signature": "[N_Annotation]-\u003e(Bool,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:na_annotated_tied_lr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "na_annotation_at_end_tied_only",
          "package": "hts",
          "signature": "N_Annotation -\u003e Bool",
          "source": "src/Music-Typesetting-Query.html#na_annotation_at_end_tied_only",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "na_annotation_at_end_tied_only",
          "normalized": "N_Annotation-\u003eBool",
          "package": "hts",
          "signature": "N_Annotation-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:na_annotation_at_end_tied_only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "na_annotation_at_tied",
          "package": "hts",
          "signature": "N_Annotation -\u003e At_Tied",
          "source": "src/Music-Typesetting-Query.html#na_annotation_at_tied",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "na_annotation_at_tied",
          "normalized": "N_Annotation-\u003eAt_Tied",
          "package": "hts",
          "signature": "N_Annotation-\u003eAt_Tied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:na_annotation_at_tied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "na_annotation_at_tied_either",
          "package": "hts",
          "signature": "N_Annotation -\u003e Bool",
          "source": "src/Music-Typesetting-Query.html#na_annotation_at_tied_either",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "na_annotation_at_tied_either",
          "normalized": "N_Annotation-\u003eBool",
          "package": "hts",
          "signature": "N_Annotation-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:na_annotation_at_tied_either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "na_dynamic_mark",
          "package": "hts",
          "signature": "N_Annotation -\u003e Maybe Dynamic_Mark_T",
          "source": "src/Music-Typesetting-Query.html#na_dynamic_mark",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "na_dynamic_mark",
          "normalized": "N_Annotation-\u003eMaybe Dynamic_Mark_T",
          "package": "hts",
          "signature": "N_Annotation-\u003eMaybe Dynamic_Mark_T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:na_dynamic_mark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "na_is_begin_dynamic",
          "package": "hts",
          "signature": "N_Annotation -\u003e Bool",
          "source": "src/Music-Typesetting-Query.html#na_is_begin_dynamic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "na_is_begin_dynamic",
          "normalized": "N_Annotation-\u003eBool",
          "package": "hts",
          "signature": "N_Annotation-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:na_is_begin_dynamic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "na_is_begin_hairpin",
          "package": "hts",
          "signature": "N_Annotation -\u003e Bool",
          "source": "src/Music-Typesetting-Query.html#na_is_begin_hairpin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "na_is_begin_hairpin",
          "normalized": "N_Annotation-\u003eBool",
          "package": "hts",
          "signature": "N_Annotation-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:na_is_begin_hairpin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "na_is_dynamic_annotation",
          "package": "hts",
          "signature": "N_Annotation -\u003e Bool",
          "source": "src/Music-Typesetting-Query.html#na_is_dynamic_annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "na_is_dynamic_annotation",
          "normalized": "N_Annotation-\u003eBool",
          "package": "hts",
          "signature": "N_Annotation-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:na_is_dynamic_annotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "na_is_dynamic_mark",
          "package": "hts",
          "signature": "N_Annotation -\u003e Bool",
          "source": "src/Music-Typesetting-Query.html#na_is_dynamic_mark",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "na_is_dynamic_mark",
          "normalized": "N_Annotation-\u003eBool",
          "package": "hts",
          "signature": "N_Annotation-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:na_is_dynamic_mark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "na_pitch",
          "package": "hts",
          "signature": "N_Annotation -\u003e Maybe Pitch",
          "source": "src/Music-Typesetting-Query.html#na_pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "na_pitch",
          "normalized": "N_Annotation-\u003eMaybe Pitch",
          "package": "hts",
          "signature": "N_Annotation-\u003eMaybe Pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:na_pitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "si_map_to_sequence",
          "package": "hts",
          "signature": "Integer -\u003e a -\u003e SI_Map a -\u003e [a]",
          "source": "src/Music-Typesetting-Query.html#si_map_to_sequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "si_map_to_sequence",
          "normalized": "Integer-\u003ea-\u003eSI_Map a-\u003e[a]",
          "package": "hts",
          "signature": "Integer-\u003ea-\u003eSI_Map a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:si_map_to_sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Typesetting.Query",
          "name": "temporal_map_locate",
          "package": "hts",
          "signature": "Temporal_Map -\u003e [(Rational, Rational, Tempo_Marking)]",
          "source": "src/Music-Typesetting-Query.html#temporal_map_locate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Typesetting Query",
          "module": "Music.Typesetting.Query",
          "name": "temporal_map_locate",
          "normalized": "Temporal_Map-\u003e[(Rational,Rational,Tempo_Marking)]",
          "package": "hts",
          "signature": "Temporal_Map-\u003e[(Rational,Rational,Tempo_Marking)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hts/docs/Music-Typesetting-Query.html#v:temporal_map_locate"
      }
    }
  ]
]