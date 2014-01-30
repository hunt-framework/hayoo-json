[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcs-revision/docs/Distribution-VcsRevision-Git.html#",
      "description": {
        "fct-module": "Distribution.VcsRevision.Git",
        "fct-package": "vcs-revision",
        "fct-signature": "module",
        "fct-source": "src/Distribution-VcsRevision-Git.html",
        "fct-type": "module",
        "title": "Git"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution VcsRevision Git",
        "module": "Distribution.VcsRevision.Git",
        "name": "Git",
        "normalized": "",
        "package": "vcs-revision",
        "partial": "Git",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcs-revision/docs/Distribution-VcsRevision-Git.html#v:getRevision",
      "description": {
        "fct-descr": "\u003cp\u003eNothing if we're not in a git repo, Just (hash,modified) if we're in a repo.\n\u003c/p\u003e",
        "fct-module": "Distribution.VcsRevision.Git",
        "fct-package": "vcs-revision",
        "fct-signature": "IO (Maybe (String, Bool))",
        "fct-source": "src/Distribution-VcsRevision-Git.html#getRevision",
        "fct-type": "function",
        "title": "getRevision"
      },
      "index": {
        "description": "Nothing if we re not in git repo Just hash modified if we re in repo",
        "hierarchy": "Distribution VcsRevision Git",
        "module": "Distribution.VcsRevision.Git",
        "name": "getRevision",
        "normalized": "IO(Maybe(String,Bool))",
        "package": "vcs-revision",
        "partial": "Revision",
        "signature": "IO(Maybe(String,Bool))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcs-revision/docs/Distribution-VcsRevision-Mercurial.html#",
      "description": {
        "fct-module": "Distribution.VcsRevision.Mercurial",
        "fct-package": "vcs-revision",
        "fct-signature": "module",
        "fct-source": "src/Distribution-VcsRevision-Mercurial.html",
        "fct-type": "module",
        "title": "Mercurial"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution VcsRevision Mercurial",
        "module": "Distribution.VcsRevision.Mercurial",
        "name": "Mercurial",
        "normalized": "",
        "package": "vcs-revision",
        "partial": "Mercurial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcs-revision/docs/Distribution-VcsRevision-Mercurial.html#v:getRevision",
      "description": {
        "fct-descr": "\u003cp\u003eNothing if we're not in a mercurial repo, Just (hash,modified) if we're in a repo.\n\u003c/p\u003e",
        "fct-module": "Distribution.VcsRevision.Mercurial",
        "fct-package": "vcs-revision",
        "fct-signature": "IO (Maybe (String, Bool))",
        "fct-source": "src/Distribution-VcsRevision-Mercurial.html#getRevision",
        "fct-type": "function",
        "title": "getRevision"
      },
      "index": {
        "description": "Nothing if we re not in mercurial repo Just hash modified if we re in repo",
        "hierarchy": "Distribution VcsRevision Mercurial",
        "module": "Distribution.VcsRevision.Mercurial",
        "name": "getRevision",
        "normalized": "IO(Maybe(String,Bool))",
        "package": "vcs-revision",
        "partial": "Revision",
        "signature": "IO(Maybe(String,Bool))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcs-revision/docs/Distribution-VcsRevision-Svn.html#",
      "description": {
        "fct-module": "Distribution.VcsRevision.Svn",
        "fct-package": "vcs-revision",
        "fct-signature": "module",
        "fct-source": "src/Distribution-VcsRevision-Svn.html",
        "fct-type": "module",
        "title": "Svn"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution VcsRevision Svn",
        "module": "Distribution.VcsRevision.Svn",
        "name": "Svn",
        "normalized": "",
        "package": "vcs-revision",
        "partial": "Svn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcs-revision/docs/Distribution-VcsRevision-Svn.html#v:getRevision",
      "description": {
        "fct-descr": "\u003cp\u003eNothing if we're not in a svn repo, Just (revision,modified) if we're in a repo.\n\u003c/p\u003e",
        "fct-module": "Distribution.VcsRevision.Svn",
        "fct-package": "vcs-revision",
        "fct-signature": "IO (Maybe (String, Bool))",
        "fct-source": "src/Distribution-VcsRevision-Svn.html#getRevision",
        "fct-type": "function",
        "title": "getRevision"
      },
      "index": {
        "description": "Nothing if we re not in svn repo Just revision modified if we re in repo",
        "hierarchy": "Distribution VcsRevision Svn",
        "module": "Distribution.VcsRevision.Svn",
        "name": "getRevision",
        "normalized": "IO(Maybe(String,Bool))",
        "package": "vcs-revision",
        "partial": "Revision",
        "signature": "IO(Maybe(String,Bool))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vcs-revision/docs/Distribution-VcsRevision.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExample usage in a program that wants to access its own git version:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n import Distribution.VcsRevision.Git\n import Language.Haskell.TH.Syntax\n\n showMyGitVersion :: String\n showMyGitVersion = $(do\n   v \u003c- qRunIO getRevision\n   lift $ case v of\n     Nothing           -\u003e \"\u003cnone\u003e\"\n     Just (hash,True)  -\u003e hash ++ \" (with local modifications)\"\n     Just (hash,False) -\u003e hash)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Distribution.VcsRevision",
        "fct-package": "vcs-revision",
        "fct-signature": "module",
        "fct-source": "src/Distribution-VcsRevision.html",
        "fct-type": "module",
        "title": "VcsRevision"
      },
      "index": {
        "description": "Example usage in program that wants to access its own git version LANGUAGE TemplateHaskell import Distribution.VcsRevision.Git import Language.Haskell.TH.Syntax showMyGitVersion String showMyGitVersion do qRunIO getRevision lift case of Nothing none Just hash True hash with local modifications Just hash False hash",
        "hierarchy": "Distribution VcsRevision",
        "module": "Distribution.VcsRevision",
        "name": "VcsRevision",
        "normalized": "",
        "package": "vcs-revision",
        "partial": "Vcs Revision",
        "signature": ""
      }
    }
  }
]