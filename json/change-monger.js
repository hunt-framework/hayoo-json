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
        "word": "change-monger"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ChangeMonger.CVS",
          "name": "CVS",
          "package": "change-monger",
          "source": "src/Text-ChangeMonger-CVS.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text ChangeMonger CVS",
          "module": "Text.ChangeMonger.CVS",
          "name": "CVS",
          "package": "change-monger",
          "partial": "CVS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-CVS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsk CVS for changes in general; we accept an options argument which\n will be passed onto CVS, so you can customize by using any of the many\n options to \u003ccode\u003echanges\u003c/code\u003e which CVS understands.\n WARNING: This seems to be broken.\n\u003c/p\u003e",
          "module": "Text.ChangeMonger.CVS",
          "name": "cvsChanges",
          "package": "change-monger",
          "signature": "String -\u003e IO String",
          "source": "src/Text-ChangeMonger-CVS.html#cvsChanges",
          "type": "function"
        },
        "index": {
          "description": "Ask CVS for changes in general we accept an options argument which will be passed onto CVS so you can customize by using any of the many options to changes which CVS understands WARNING This seems to be broken",
          "hierarchy": "Text ChangeMonger CVS",
          "module": "Text.ChangeMonger.CVS",
          "name": "cvsChanges",
          "normalized": "String-\u003eIO String",
          "package": "change-monger",
          "partial": "Changes",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-CVS.html#v:cvsChanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNothing fancy: just get the entire repository history.\n\u003c/p\u003e",
          "module": "Text.ChangeMonger.CVS",
          "name": "cvsChangesAll",
          "package": "change-monger",
          "signature": "IO String",
          "source": "src/Text-ChangeMonger-CVS.html#cvsChangesAll",
          "type": "function"
        },
        "index": {
          "description": "Nothing fancy just get the entire repository history",
          "hierarchy": "Text ChangeMonger CVS",
          "module": "Text.ChangeMonger.CVS",
          "name": "cvsChangesAll",
          "package": "change-monger",
          "partial": "Changes All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-CVS.html#v:cvsChangesAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ChangeMonger.Darcs",
          "name": "Darcs",
          "package": "change-monger",
          "source": "src/Text-ChangeMonger-Darcs.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text ChangeMonger Darcs",
          "module": "Text.ChangeMonger.Darcs",
          "name": "Darcs",
          "package": "change-monger",
          "partial": "Darcs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-Darcs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsk Darcs for changes in general; we accept an options argument which\n will be passed onto Darcs, so you can customize by using any of the many\n options to \u003ccode\u003echanges\u003c/code\u003e which Darcs understands.\n\u003c/p\u003e",
          "module": "Text.ChangeMonger.Darcs",
          "name": "darcsChanges",
          "package": "change-monger",
          "signature": "String -\u003e IO String",
          "source": "src/Text-ChangeMonger-Darcs.html#darcsChanges",
          "type": "function"
        },
        "index": {
          "description": "Ask Darcs for changes in general we accept an options argument which will be passed onto Darcs so you can customize by using any of the many options to changes which Darcs understands",
          "hierarchy": "Text ChangeMonger Darcs",
          "module": "Text.ChangeMonger.Darcs",
          "name": "darcsChanges",
          "normalized": "String-\u003eIO String",
          "package": "change-monger",
          "partial": "Changes",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-Darcs.html#v:darcsChanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNothing fancy: just get the entire repository history.\n\u003c/p\u003e",
          "module": "Text.ChangeMonger.Darcs",
          "name": "darcsChangesAll",
          "package": "change-monger",
          "signature": "IO String",
          "source": "src/Text-ChangeMonger-Darcs.html#darcsChangesAll",
          "type": "function"
        },
        "index": {
          "description": "Nothing fancy just get the entire repository history",
          "hierarchy": "Text ChangeMonger Darcs",
          "module": "Text.ChangeMonger.Darcs",
          "name": "darcsChangesAll",
          "package": "change-monger",
          "partial": "Changes All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-Darcs.html#v:darcsChangesAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsk Darcs for all changes, since the last tag. Conscientious folks\n tag at every release, so this is a good heuristic.\n\u003c/p\u003e",
          "module": "Text.ChangeMonger.Darcs",
          "name": "darcsChangesSince",
          "package": "change-monger",
          "signature": "IO String",
          "source": "src/Text-ChangeMonger-Darcs.html#darcsChangesSince",
          "type": "function"
        },
        "index": {
          "description": "Ask Darcs for all changes since the last tag Conscientious folks tag at every release so this is good heuristic",
          "hierarchy": "Text ChangeMonger Darcs",
          "module": "Text.ChangeMonger.Darcs",
          "name": "darcsChangesSince",
          "package": "change-monger",
          "partial": "Changes Since",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-Darcs.html#v:darcsChangesSince"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ChangeMonger.Git",
          "name": "Git",
          "package": "change-monger",
          "source": "src/Text-ChangeMonger-Git.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text ChangeMonger Git",
          "module": "Text.ChangeMonger.Git",
          "name": "Git",
          "package": "change-monger",
          "partial": "Git",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-Git.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsk Git for changes in general; we accept an options argument which\n will be passed onto Git, so you can customize by using any of the many\n options to \u003ccode\u003e\u003ca\u003elog\u003c/a\u003e\u003c/code\u003e which Git understands.\n Tricky bits: we can't pass Git \"\", because it won't treat it as non-existent,\n so the implementation needs to reflect this.\n\u003c/p\u003e",
          "module": "Text.ChangeMonger.Git",
          "name": "gitChanges",
          "package": "change-monger",
          "signature": "String -\u003e IO String",
          "source": "src/Text-ChangeMonger-Git.html#gitChanges",
          "type": "function"
        },
        "index": {
          "description": "Ask Git for changes in general we accept an options argument which will be passed onto Git so you can customize by using any of the many options to log which Git understands Tricky bits we can pass Git because it won treat it as non-existent so the implementation needs to reflect this",
          "hierarchy": "Text ChangeMonger Git",
          "module": "Text.ChangeMonger.Git",
          "name": "gitChanges",
          "normalized": "String-\u003eIO String",
          "package": "change-monger",
          "partial": "Changes",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-Git.html#v:gitChanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNothing fancy: just get the entire repository history.\n\u003c/p\u003e",
          "module": "Text.ChangeMonger.Git",
          "name": "gitChangesAll",
          "package": "change-monger",
          "signature": "IO String",
          "source": "src/Text-ChangeMonger-Git.html#gitChangesAll",
          "type": "function"
        },
        "index": {
          "description": "Nothing fancy just get the entire repository history",
          "hierarchy": "Text ChangeMonger Git",
          "module": "Text.ChangeMonger.Git",
          "name": "gitChangesAll",
          "package": "change-monger",
          "partial": "Changes All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-Git.html#v:gitChangesAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsk Git for all changes, since the last tag. Conscientious folks\n tag at every release, so this is a good heuristic.\n Tricky bits: \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e returns the name of the last tag with '\\n' included,\n so we use \u003ccode\u003e\u003ca\u003einit\u003c/a\u003e\u003c/code\u003e to drop the last character and remove '\\n'.\n Then, we ask \u003ca\u003egit log\u003c/a\u003e  'tag-name..', which is its syntax for \u003ca\u003eall commits\u003c/a\u003e\n since a particular tag. In this case, our tag-name is the last tag, so we're good.\n\u003c/p\u003e",
          "module": "Text.ChangeMonger.Git",
          "name": "gitChangesSince",
          "package": "change-monger",
          "signature": "IO String",
          "source": "src/Text-ChangeMonger-Git.html#gitChangesSince",
          "type": "function"
        },
        "index": {
          "description": "Ask Git for all changes since the last tag Conscientious folks tag at every release so this is good heuristic Tricky bits run returns the name of the last tag with included so we use init to drop the last character and remove Then we ask git log tag-name which is its syntax for all commits since particular tag In this case our tag-name is the last tag so we re good",
          "hierarchy": "Text ChangeMonger Git",
          "module": "Text.ChangeMonger.Git",
          "name": "gitChangesSince",
          "package": "change-monger",
          "partial": "Changes Since",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-Git.html#v:gitChangesSince"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ChangeMonger.Mercurial",
          "name": "Mercurial",
          "package": "change-monger",
          "source": "src/Text-ChangeMonger-Mercurial.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text ChangeMonger Mercurial",
          "module": "Text.ChangeMonger.Mercurial",
          "name": "Mercurial",
          "package": "change-monger",
          "partial": "Mercurial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-Mercurial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsk Mercurial for changes in general; we accept an options argument which\n will be passed onto Mercurial, so you can customize by using any of the many\n options to \u003ccode\u003e\u003ca\u003elog\u003c/a\u003e\u003c/code\u003e which Mercurial understands.\n\u003c/p\u003e",
          "module": "Text.ChangeMonger.Mercurial",
          "name": "hgChanges",
          "package": "change-monger",
          "signature": "String -\u003e IO String",
          "source": "src/Text-ChangeMonger-Mercurial.html#hgChanges",
          "type": "function"
        },
        "index": {
          "description": "Ask Mercurial for changes in general we accept an options argument which will be passed onto Mercurial so you can customize by using any of the many options to log which Mercurial understands",
          "hierarchy": "Text ChangeMonger Mercurial",
          "module": "Text.ChangeMonger.Mercurial",
          "name": "hgChanges",
          "normalized": "String-\u003eIO String",
          "package": "change-monger",
          "partial": "Changes",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-Mercurial.html#v:hgChanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNothing fancy: just get the entire repository history.\n\u003c/p\u003e",
          "module": "Text.ChangeMonger.Mercurial",
          "name": "hgChangesAll",
          "package": "change-monger",
          "signature": "IO String",
          "source": "src/Text-ChangeMonger-Mercurial.html#hgChangesAll",
          "type": "function"
        },
        "index": {
          "description": "Nothing fancy just get the entire repository history",
          "hierarchy": "Text ChangeMonger Mercurial",
          "module": "Text.ChangeMonger.Mercurial",
          "name": "hgChangesAll",
          "package": "change-monger",
          "partial": "Changes All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-Mercurial.html#v:hgChangesAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsk Mercurial for all changes, since the last tag. Conscientious folks\n tag at every release, so this is a good heuristic.\n\u003c/p\u003e",
          "module": "Text.ChangeMonger.Mercurial",
          "name": "hgChangesSince",
          "package": "change-monger",
          "signature": "IO String",
          "source": "src/Text-ChangeMonger-Mercurial.html#hgChangesSince",
          "type": "function"
        },
        "index": {
          "description": "Ask Mercurial for all changes since the last tag Conscientious folks tag at every release so this is good heuristic",
          "hierarchy": "Text ChangeMonger Mercurial",
          "module": "Text.ChangeMonger.Mercurial",
          "name": "hgChangesSince",
          "package": "change-monger",
          "partial": "Changes Since",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-Mercurial.html#v:hgChangesSince"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ChangeMonger.Parse",
          "name": "Parse",
          "package": "change-monger",
          "source": "src/Text-ChangeMonger-Parse.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text ChangeMonger Parse",
          "module": "Text.ChangeMonger.Parse",
          "name": "Parse",
          "package": "change-monger",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall out to the shell, and collect the result as a String.\n\u003c/p\u003e",
          "module": "Text.ChangeMonger.Parse",
          "name": "run",
          "package": "change-monger",
          "signature": "String-\u003e [String]-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Call out to the shell and collect the result as String",
          "hierarchy": "Text ChangeMonger Parse",
          "module": "Text.ChangeMonger.Parse",
          "name": "run",
          "normalized": "String-\u003e[String]-\u003eIO String",
          "package": "change-monger",
          "signature": "String-\u003e[String]-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-Parse.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ChangeMonger.Subversion",
          "name": "Subversion",
          "package": "change-monger",
          "source": "src/Text-ChangeMonger-Subversion.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text ChangeMonger Subversion",
          "module": "Text.ChangeMonger.Subversion",
          "name": "Subversion",
          "package": "change-monger",
          "partial": "Subversion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-Subversion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsk Subversion for changes in general; we accept an options argument which\n will be passed onto Subversion, so you can customize by using any of the many\n options to \u003ccode\u003e\u003ca\u003elog\u003c/a\u003e\u003c/code\u003e which Subversion understands.\n\u003c/p\u003e",
          "module": "Text.ChangeMonger.Subversion",
          "name": "svnChanges",
          "package": "change-monger",
          "signature": "String -\u003e IO String",
          "source": "src/Text-ChangeMonger-Subversion.html#svnChanges",
          "type": "function"
        },
        "index": {
          "description": "Ask Subversion for changes in general we accept an options argument which will be passed onto Subversion so you can customize by using any of the many options to log which Subversion understands",
          "hierarchy": "Text ChangeMonger Subversion",
          "module": "Text.ChangeMonger.Subversion",
          "name": "svnChanges",
          "normalized": "String-\u003eIO String",
          "package": "change-monger",
          "partial": "Changes",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-Subversion.html#v:svnChanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNothing fancy: just get the entire repository history.\n Unfortunately, Subversion doesn't have a very useful notion of\n tags, so we merely get the full history.\n\u003c/p\u003e",
          "module": "Text.ChangeMonger.Subversion",
          "name": "svnChangesAll",
          "package": "change-monger",
          "signature": "IO String",
          "source": "src/Text-ChangeMonger-Subversion.html#svnChangesAll",
          "type": "function"
        },
        "index": {
          "description": "Nothing fancy just get the entire repository history Unfortunately Subversion doesn have very useful notion of tags so we merely get the full history",
          "hierarchy": "Text ChangeMonger Subversion",
          "module": "Text.ChangeMonger.Subversion",
          "name": "svnChangesAll",
          "package": "change-monger",
          "partial": "Changes All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/change-monger/docs/Text-ChangeMonger-Subversion.html#v:svnChangesAll"
      }
    }
  ]
]