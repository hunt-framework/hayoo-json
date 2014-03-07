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
        "word": "language-c-comments"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Comments",
          "name": "Comments",
          "package": "language-c-comments",
          "source": "src/Language-C-Comments.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language C Comments",
          "module": "Language.C.Comments",
          "name": "Comments",
          "package": "language-c-comments",
          "partial": "Comments",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-c-comments/docs/Language-C-Comments.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComment positions use Language.C.Data.Position for compatibility with\n Language.C.\n\u003c/p\u003e",
          "module": "Language.C.Comments",
          "name": "Comment",
          "package": "language-c-comments",
          "source": "src/Language-C-Comments.html#Comment",
          "type": "data"
        },
        "index": {
          "description": "Comment positions use Language.C.Data.Position for compatibility with Language.C",
          "hierarchy": "Language C Comments",
          "module": "Language.C.Comments",
          "name": "Comment",
          "package": "language-c-comments",
          "partial": "Comment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-c-comments/docs/Language-C-Comments.html#t:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComments can be either single- or multi-line style.\n\u003c/p\u003e",
          "module": "Language.C.Comments",
          "name": "CommentFormat",
          "package": "language-c-comments",
          "source": "src/Language-C-Comments-Lexer.html#CommentFormat",
          "type": "data"
        },
        "index": {
          "description": "Comments can be either single or multi-line style",
          "hierarchy": "Language C Comments",
          "module": "Language.C.Comments",
          "name": "CommentFormat",
          "package": "language-c-comments",
          "partial": "Comment Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-c-comments/docs/Language-C-Comments.html#t:CommentFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Comments",
          "name": "MultiLine",
          "package": "language-c-comments",
          "signature": "MultiLine",
          "source": "src/Language-C-Comments-Lexer.html#CommentFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Comments",
          "module": "Language.C.Comments",
          "name": "MultiLine",
          "package": "language-c-comments",
          "partial": "Multi Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-c-comments/docs/Language-C-Comments.html#v:MultiLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.C.Comments",
          "name": "SingleLine",
          "package": "language-c-comments",
          "signature": "SingleLine",
          "source": "src/Language-C-Comments-Lexer.html#CommentFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language C Comments",
          "module": "Language.C.Comments",
          "name": "SingleLine",
          "package": "language-c-comments",
          "partial": "Single Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-c-comments/docs/Language-C-Comments.html#v:SingleLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe format of a comment (single- or multi-line).\n\u003c/p\u003e",
          "module": "Language.C.Comments",
          "name": "commentFormat",
          "package": "language-c-comments",
          "signature": "Comment -\u003e CommentFormat",
          "source": "src/Language-C-Comments.html#commentFormat",
          "type": "function"
        },
        "index": {
          "description": "The format of comment single or multi-line",
          "hierarchy": "Language C Comments",
          "module": "Language.C.Comments",
          "name": "commentFormat",
          "normalized": "Comment-\u003eCommentFormat",
          "package": "language-c-comments",
          "partial": "Format",
          "signature": "Comment-\u003eCommentFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-c-comments/docs/Language-C-Comments.html#v:commentFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe position of the comment within the source file.\n\u003c/p\u003e",
          "module": "Language.C.Comments",
          "name": "commentPosition",
          "package": "language-c-comments",
          "signature": "Comment -\u003e Position",
          "source": "src/Language-C-Comments.html#commentPosition",
          "type": "function"
        },
        "index": {
          "description": "The position of the comment within the source file",
          "hierarchy": "Language C Comments",
          "module": "Language.C.Comments",
          "name": "commentPosition",
          "normalized": "Comment-\u003ePosition",
          "package": "language-c-comments",
          "partial": "Position",
          "signature": "Comment-\u003ePosition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-c-comments/docs/Language-C-Comments.html#v:commentPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe text of a comment (including the comment marks).\n\u003c/p\u003e",
          "module": "Language.C.Comments",
          "name": "commentText",
          "package": "language-c-comments",
          "signature": "Comment -\u003e String",
          "source": "src/Language-C-Comments.html#commentText",
          "type": "function"
        },
        "index": {
          "description": "The text of comment including the comment marks",
          "hierarchy": "Language C Comments",
          "module": "Language.C.Comments",
          "name": "commentText",
          "normalized": "Comment-\u003eString",
          "package": "language-c-comments",
          "partial": "Text",
          "signature": "Comment-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-c-comments/docs/Language-C-Comments.html#v:commentText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe text of a comment, but with the comment marks removed.\n\u003c/p\u003e",
          "module": "Language.C.Comments",
          "name": "commentTextWithoutMarks",
          "package": "language-c-comments",
          "signature": "Comment -\u003e String",
          "source": "src/Language-C-Comments.html#commentTextWithoutMarks",
          "type": "function"
        },
        "index": {
          "description": "The text of comment but with the comment marks removed",
          "hierarchy": "Language C Comments",
          "module": "Language.C.Comments",
          "name": "commentTextWithoutMarks",
          "normalized": "Comment-\u003eString",
          "package": "language-c-comments",
          "partial": "Text Without Marks",
          "signature": "Comment-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-c-comments/docs/Language-C-Comments.html#v:commentTextWithoutMarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract comments from a C file.\n\u003c/p\u003e",
          "module": "Language.C.Comments",
          "name": "comments",
          "package": "language-c-comments",
          "signature": "FilePath -\u003e IO [Comment]",
          "source": "src/Language-C-Comments.html#comments",
          "type": "function"
        },
        "index": {
          "description": "Extract comments from file",
          "hierarchy": "Language C Comments",
          "module": "Language.C.Comments",
          "name": "comments",
          "normalized": "FilePath-\u003eIO[Comment]",
          "package": "language-c-comments",
          "signature": "FilePath-\u003eIO[Comment]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-c-comments/docs/Language-C-Comments.html#v:comments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract comments from a string.  A comment's position contains a\n filename; this method uses the empty string in its place.\n\u003c/p\u003e",
          "module": "Language.C.Comments",
          "name": "commentsFromString",
          "package": "language-c-comments",
          "signature": "String -\u003e [Comment]",
          "source": "src/Language-C-Comments.html#commentsFromString",
          "type": "function"
        },
        "index": {
          "description": "Extract comments from string comment position contains filename this method uses the empty string in its place",
          "hierarchy": "Language C Comments",
          "module": "Language.C.Comments",
          "name": "commentsFromString",
          "normalized": "String-\u003e[Comment]",
          "package": "language-c-comments",
          "partial": "From String",
          "signature": "String-\u003e[Comment]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-c-comments/docs/Language-C-Comments.html#v:commentsFromString"
      }
    }
  ]
]