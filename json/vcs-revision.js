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
        "word": "vcs-revision"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.VcsRevision.Git",
          "name": "Git",
          "package": "vcs-revision",
          "source": "src/Distribution-VcsRevision-Git.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution VcsRevision Git",
          "module": "Distribution.VcsRevision.Git",
          "name": "Git",
          "package": "vcs-revision",
          "partial": "Git",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vcs-revision/docs/Distribution-VcsRevision-Git.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNothing if we're not in a git repo, Just (hash,modified) if we're in a repo.\n\u003c/p\u003e",
          "module": "Distribution.VcsRevision.Git",
          "name": "getRevision",
          "package": "vcs-revision",
          "signature": "IO (Maybe (String, Bool))",
          "source": "src/Distribution-VcsRevision-Git.html#getRevision",
          "type": "function"
        },
        "index": {
          "description": "Nothing if we re not in git repo Just hash modified if we re in repo",
          "hierarchy": "Distribution VcsRevision Git",
          "module": "Distribution.VcsRevision.Git",
          "name": "getRevision",
          "normalized": "IO(Maybe(String,Bool))",
          "package": "vcs-revision",
          "partial": "Revision",
          "signature": "IO(Maybe(String,Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcs-revision/docs/Distribution-VcsRevision-Git.html#v:getRevision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.VcsRevision.Mercurial",
          "name": "Mercurial",
          "package": "vcs-revision",
          "source": "src/Distribution-VcsRevision-Mercurial.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution VcsRevision Mercurial",
          "module": "Distribution.VcsRevision.Mercurial",
          "name": "Mercurial",
          "package": "vcs-revision",
          "partial": "Mercurial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vcs-revision/docs/Distribution-VcsRevision-Mercurial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNothing if we're not in a mercurial repo, Just (hash,modified) if we're in a repo.\n\u003c/p\u003e",
          "module": "Distribution.VcsRevision.Mercurial",
          "name": "getRevision",
          "package": "vcs-revision",
          "signature": "IO (Maybe (String, Bool))",
          "source": "src/Distribution-VcsRevision-Mercurial.html#getRevision",
          "type": "function"
        },
        "index": {
          "description": "Nothing if we re not in mercurial repo Just hash modified if we re in repo",
          "hierarchy": "Distribution VcsRevision Mercurial",
          "module": "Distribution.VcsRevision.Mercurial",
          "name": "getRevision",
          "normalized": "IO(Maybe(String,Bool))",
          "package": "vcs-revision",
          "partial": "Revision",
          "signature": "IO(Maybe(String,Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcs-revision/docs/Distribution-VcsRevision-Mercurial.html#v:getRevision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.VcsRevision.Svn",
          "name": "Svn",
          "package": "vcs-revision",
          "source": "src/Distribution-VcsRevision-Svn.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution VcsRevision Svn",
          "module": "Distribution.VcsRevision.Svn",
          "name": "Svn",
          "package": "vcs-revision",
          "partial": "Svn",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vcs-revision/docs/Distribution-VcsRevision-Svn.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNothing if we're not in a svn repo, Just (revision,modified) if we're in a repo.\n\u003c/p\u003e",
          "module": "Distribution.VcsRevision.Svn",
          "name": "getRevision",
          "package": "vcs-revision",
          "signature": "IO (Maybe (String, Bool))",
          "source": "src/Distribution-VcsRevision-Svn.html#getRevision",
          "type": "function"
        },
        "index": {
          "description": "Nothing if we re not in svn repo Just revision modified if we re in repo",
          "hierarchy": "Distribution VcsRevision Svn",
          "module": "Distribution.VcsRevision.Svn",
          "name": "getRevision",
          "normalized": "IO(Maybe(String,Bool))",
          "package": "vcs-revision",
          "partial": "Revision",
          "signature": "IO(Maybe(String,Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcs-revision/docs/Distribution-VcsRevision-Svn.html#v:getRevision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExample usage in a program that wants to access its own git version:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n import Distribution.VcsRevision.Git\n import Language.Haskell.TH.Syntax\n\n showMyGitVersion :: String\n showMyGitVersion = $(do\n   v \u003c- qRunIO getRevision\n   lift $ case v of\n     Nothing           -\u003e \"\u003cnone\u003e\"\n     Just (hash,True)  -\u003e hash ++ \" (with local modifications)\"\n     Just (hash,False) -\u003e hash)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Distribution.VcsRevision",
          "name": "VcsRevision",
          "package": "vcs-revision",
          "source": "src/Distribution-VcsRevision.html",
          "type": "module"
        },
        "index": {
          "description": "Example usage in program that wants to access its own git version LANGUAGE TemplateHaskell import Distribution.VcsRevision.Git import Language.Haskell.TH.Syntax showMyGitVersion String showMyGitVersion do qRunIO getRevision lift case of Nothing none Just hash True hash with local modifications Just hash False hash",
          "hierarchy": "Distribution VcsRevision",
          "module": "Distribution.VcsRevision",
          "name": "VcsRevision",
          "package": "vcs-revision",
          "partial": "Vcs Revision",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vcs-revision/docs/Distribution-VcsRevision.html#"
      }
    }
  ]
]