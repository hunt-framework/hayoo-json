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
        "word": "markdown"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Markdown",
          "name": "Markdown",
          "package": "markdown",
          "source": "src/Text-Markdown.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Markdown",
          "module": "Text.Markdown",
          "name": "Markdown",
          "package": "markdown",
          "partial": "Markdown",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/markdown/docs/Text-Markdown.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee 'msFencedHandlers.\n\u003c/p\u003e\u003cp\u003eSince 0.1.2\n\u003c/p\u003e",
          "module": "Text.Markdown",
          "name": "FencedHandler",
          "package": "markdown",
          "source": "src/Text-Markdown-Types.html#FencedHandler",
          "type": "data"
        },
        "index": {
          "description": "See msFencedHandlers Since",
          "hierarchy": "Text Markdown",
          "module": "Text.Markdown",
          "name": "FencedHandler",
          "package": "markdown",
          "partial": "Fenced Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/markdown/docs/Text-Markdown.html#t:FencedHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA newtype wrapper providing a \u003ccode\u003eToHtml\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Text.Markdown",
          "name": "Markdown",
          "package": "markdown",
          "source": "src/Text-Markdown.html#Markdown",
          "type": "newtype"
        },
        "index": {
          "description": "newtype wrapper providing ToHtml instance",
          "hierarchy": "Text Markdown",
          "module": "Text.Markdown",
          "name": "Markdown",
          "package": "markdown",
          "partial": "Markdown",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/markdown/docs/Text-Markdown.html#t:Markdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA settings type providing various configuration options.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://www.yesodweb.com/book/settings-types\u003c/a\u003e for more information on\n settings types. In general, you can use \u003ccode\u003edef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Markdown",
          "name": "MarkdownSettings",
          "package": "markdown",
          "source": "src/Text-Markdown-Types.html#MarkdownSettings",
          "type": "data"
        },
        "index": {
          "description": "settings type providing various configuration options See http www.yesodweb.com book settings-types for more information on settings types In general you can use def",
          "hierarchy": "Text Markdown",
          "module": "Text.Markdown",
          "name": "MarkdownSettings",
          "package": "markdown",
          "partial": "Markdown Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/markdown/docs/Text-Markdown.html#t:MarkdownSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap up the given parsed content.\n\u003c/p\u003e",
          "module": "Text.Markdown",
          "name": "FHParsed",
          "package": "markdown",
          "signature": "FHParsed ([Block Text] -\u003e [Block Text])",
          "source": "src/Text-Markdown-Types.html#FencedHandler",
          "type": "function"
        },
        "index": {
          "description": "Wrap up the given parsed content",
          "hierarchy": "Text Markdown",
          "module": "Text.Markdown",
          "name": "FHParsed",
          "normalized": "FHParsed([Block Text]-\u003e[Block Text])",
          "package": "markdown",
          "partial": "FHParsed",
          "signature": "FHParsed([Block Text]-\u003e[Block Text])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markdown/docs/Text-Markdown.html#v:FHParsed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap up the given raw content.\n\u003c/p\u003e",
          "module": "Text.Markdown",
          "name": "FHRaw",
          "package": "markdown",
          "signature": "FHRaw (Text -\u003e [Block Text])",
          "source": "src/Text-Markdown-Types.html#FencedHandler",
          "type": "function"
        },
        "index": {
          "description": "Wrap up the given raw content",
          "hierarchy": "Text Markdown",
          "module": "Text.Markdown",
          "name": "FHRaw",
          "normalized": "FHRaw(Text-\u003e[Block Text])",
          "package": "markdown",
          "partial": "FHRaw",
          "signature": "FHRaw(Text-\u003e[Block Text])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markdown/docs/Text-Markdown.html#v:FHRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Markdown",
          "name": "Markdown",
          "package": "markdown",
          "signature": "Markdown Text",
          "source": "src/Text-Markdown.html#Markdown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Markdown",
          "module": "Text.Markdown",
          "name": "Markdown",
          "package": "markdown",
          "partial": "Markdown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markdown/docs/Text-Markdown.html#v:Markdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper for creating a \u003ccode\u003e\u003ca\u003eFHRaw\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.2\n\u003c/p\u003e",
          "module": "Text.Markdown",
          "name": "codeFencedHandler",
          "package": "markdown",
          "signature": "Text-\u003e Map Text (Text -\u003e FencedHandler)",
          "type": "function"
        },
        "index": {
          "description": "Helper for creating FHRaw Since",
          "hierarchy": "Text Markdown",
          "module": "Text.Markdown",
          "name": "codeFencedHandler",
          "normalized": "Text-\u003eMap Text(Text-\u003eFencedHandler)",
          "package": "markdown",
          "partial": "Fenced Handler",
          "signature": "Text-\u003eMap Text(Text-\u003eFencedHandler)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markdown/docs/Text-Markdown.html#v:codeFencedHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default value for this type.\n\u003c/p\u003e",
          "module": "Text.Markdown",
          "name": "def",
          "package": "markdown",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "description": "The default value for this type",
          "hierarchy": "Text Markdown",
          "module": "Text.Markdown",
          "name": "def",
          "package": "markdown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markdown/docs/Text-Markdown.html#v:def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper for creating a \u003ccode\u003e\u003ca\u003eFHParsed\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the start and end parameters take a \u003ccode\u003eText\u003c/code\u003e parameter; this is the\n text following the delimiter. For example, with the markdown:\n\u003c/p\u003e\u003cpre\u003e @@@ foo\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003efoo\u003c/code\u003e would be passed to start and end.\n\u003c/p\u003e\u003cp\u003eSince 0.1.2\n\u003c/p\u003e",
          "module": "Text.Markdown",
          "name": "htmlFencedHandler",
          "package": "markdown",
          "signature": "Text-\u003e (Text -\u003e Text)-\u003e (Text -\u003e Text)-\u003e Map Text (Text -\u003e FencedHandler)",
          "type": "function"
        },
        "index": {
          "description": "Helper for creating FHParsed Note that the start and end parameters take Text parameter this is the text following the delimiter For example with the markdown foo foo would be passed to start and end Since",
          "hierarchy": "Text Markdown",
          "module": "Text.Markdown",
          "name": "htmlFencedHandler",
          "normalized": "Text-\u003e(Text-\u003eText)-\u003e(Text-\u003eText)-\u003eMap Text(Text-\u003eFencedHandler)",
          "package": "markdown",
          "partial": "Fenced Handler",
          "signature": "Text-\u003e(Text-\u003eText)-\u003e(Text-\u003eText)-\u003eMap Text(Text-\u003eFencedHandler)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markdown/docs/Text-Markdown.html#v:htmlFencedHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the given textual markdown content to HTML.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:set -XOverloadedStrings\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Text.Blaze.Html.Renderer.Text\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erenderHtml $ markdown def \"# Hello World!\"\n\u003c/code\u003e\u003c/strong\u003e\"\u003ch1\u003eHello World!\u003c/h1\u003e\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erenderHtml $ markdown def { msXssProtect = False } \"\u003cscript\u003ealert('evil')\u003c/script\u003e\"\n\u003c/code\u003e\u003c/strong\u003e\"\u003cscript\u003ealert('evil')\u003c/script\u003e\"\n\u003c/pre\u003e",
          "module": "Text.Markdown",
          "name": "markdown",
          "package": "markdown",
          "signature": "MarkdownSettings -\u003e Text -\u003e Html",
          "source": "src/Text-Markdown.html#markdown",
          "type": "function"
        },
        "index": {
          "description": "Convert the given textual markdown content to HTML set XOverloadedStrings import Text.Blaze.Html.Renderer.Text renderHtml markdown def Hello World h1 Hello World h1 renderHtml markdown def msXssProtect False script alert evil script script alert evil script",
          "hierarchy": "Text Markdown",
          "module": "Text.Markdown",
          "name": "markdown",
          "normalized": "MarkdownSettings-\u003eText-\u003eHtml",
          "package": "markdown",
          "signature": "MarkdownSettings-\u003eText-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markdown/docs/Text-Markdown.html#v:markdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003eTrue\u003c/code\u003e, a blank line is required before the start of a blockquote.  Standard\n markdown syntax does not require a blank line before a blockquote, but it is all\n too easy for a \u003e to end up at the beginning of a line by accident.\n\u003c/p\u003e\u003cp\u003eDefault: \u003ccode\u003eTrue\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince 0.1.5\n\u003c/p\u003e",
          "module": "Text.Markdown",
          "name": "msBlankBeforeBlockquote",
          "package": "markdown",
          "signature": "MarkdownSettings -\u003e Bool",
          "source": "src/Text-Markdown-Types.html#msBlankBeforeBlockquote",
          "type": "function"
        },
        "index": {
          "description": "If True blank line is required before the start of blockquote Standard markdown syntax does not require blank line before blockquote but it is all too easy for to end up at the beginning of line by accident Default True Since",
          "hierarchy": "Text Markdown",
          "module": "Text.Markdown",
          "name": "msBlankBeforeBlockquote",
          "normalized": "MarkdownSettings-\u003eBool",
          "package": "markdown",
          "partial": "Blank Before Blockquote",
          "signature": "MarkdownSettings-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markdown/docs/Text-Markdown.html#v:msBlankBeforeBlockquote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rendering function through which code blocks are passed.\n\u003c/p\u003e\u003cp\u003eThe arguments are the block's language, if any, and the tuple\n \u003ccode\u003e(unrendered content, rendered content)\u003c/code\u003e. For example, if you wanted to pass\n code blocks in your markdown text through a highlighter like \u003ccode\u003ehighlighting-kate\u003c/code\u003e,\n you might do something like:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:set -XOverloadedStrings\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet renderer lang (src,_) = formatHtmlBlock defaultFormatOpts $ highlightAs (maybe \"text\" unpack lang) $ unpack src\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet md = markdown def { msBlockCodeRenderer = renderer } \"``` haskell\\nmain = putStrLn \\\"Hello world!\\\"\\n```\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputStrLn $ renderHtml md\n\u003c/code\u003e\u003c/strong\u003e\u003cpre class=\"sourceCode\"\u003e\u003ccode class=\"sourceCode\"\u003emain \u003cspan class=\"fu\"\u003e=\u003c/span\u003e \u003cspan class=\"fu\"\u003eputStrLn\u003c/span\u003e \u003cspan class=\"st\"\u003e&quot;Hello world!&quot;\u003c/span\u003e\u003c/code\u003e\u003c/pre\u003e\n\u003c/pre\u003e\u003cp\u003eSince: 0.1.2.1\n\u003c/p\u003e",
          "module": "Text.Markdown",
          "name": "msBlockCodeRenderer",
          "package": "markdown",
          "signature": "MarkdownSettings -\u003e Maybe Text -\u003e (Text, Html) -\u003e Html",
          "source": "src/Text-Markdown-Types.html#msBlockCodeRenderer",
          "type": "function"
        },
        "index": {
          "description": "rendering function through which code blocks are passed The arguments are the block language if any and the tuple unrendered content rendered content For example if you wanted to pass code blocks in your markdown text through highlighter like highlighting-kate you might do something like set XOverloadedStrings let renderer lang src formatHtmlBlock defaultFormatOpts highlightAs maybe text unpack lang unpack src let md markdown def msBlockCodeRenderer renderer haskell nmain putStrLn Hello world putStrLn renderHtml md pre class sourceCode code class sourceCode main span class fu span span class fu putStrLn span span class st quot Hello world quot span code pre Since",
          "hierarchy": "Text Markdown",
          "module": "Text.Markdown",
          "name": "msBlockCodeRenderer",
          "normalized": "MarkdownSettings-\u003eMaybe Text-\u003e(Text,Html)-\u003eHtml",
          "package": "markdown",
          "partial": "Block Code Renderer",
          "signature": "MarkdownSettings-\u003eMaybe Text-\u003e(Text,Html)-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markdown/docs/Text-Markdown.html#v:msBlockCodeRenderer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to filter and/or modify parsed blocks before they are\n written to Html\n\u003c/p\u003e\u003cp\u003eDefault: \u003ccode\u003eid\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince 0.1.7\n\u003c/p\u003e",
          "module": "Text.Markdown",
          "name": "msBlockFilter",
          "package": "markdown",
          "signature": "MarkdownSettings -\u003e [Block [Inline]] -\u003e [Block [Inline]]",
          "source": "src/Text-Markdown-Types.html#msBlockFilter",
          "type": "function"
        },
        "index": {
          "description": "function to filter and or modify parsed blocks before they are written to Html Default id Since",
          "hierarchy": "Text Markdown",
          "module": "Text.Markdown",
          "name": "msBlockFilter",
          "normalized": "MarkdownSettings-\u003e[Block[Inline]]-\u003e[Block[Inline]]",
          "package": "markdown",
          "partial": "Block Filter",
          "signature": "MarkdownSettings-\u003e[Block[Inline]]-\u003e[Block[Inline]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markdown/docs/Text-Markdown.html#v:msBlockFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandlers for the special \"fenced\" format. This is most commonly\n used for fenced code, e.g.:\n\u003c/p\u003e\u003cpre\u003e ```haskell\n main = putStrLn \"Hello\"\n ```\n\u003c/pre\u003e\u003cp\u003eThis is an extension of Markdown, but a fairly commonly used one.\n\u003c/p\u003e\u003cp\u003eThis setting allows you to create new kinds of fencing. Fencing goes\n into two categories: parsed and raw. Code fencing would be in the raw\n category, where the contents are not treated as Markdown. Parsed will\n treat the contents as Markdown and allow you to perform some kind of\n modifcation to it.\n\u003c/p\u003e\u003cp\u003eFor example, to create a new \u003ccode\u003e@@@\u003c/code\u003e fencing which wraps up the\n contents in an \u003ccode\u003earticle\u003c/code\u003e tag, you could use:\n\u003c/p\u003e\u003cpre\u003e def { msFencedHandlers = htmlFencedHandler \"@@@\" (const \"\u003carticle\u003e\") (const \"\u003c/article\")\n              `Map.union` msFencedHandlers def\n     }\n\u003c/pre\u003e\u003cp\u003eDefault: code fencing for \u003ccode\u003e```\u003c/code\u003e and \u003ccode\u003e~~~\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.2\n\u003c/p\u003e",
          "module": "Text.Markdown",
          "name": "msFencedHandlers",
          "package": "markdown",
          "signature": "MarkdownSettings -\u003e Map Text (Text -\u003e FencedHandler)",
          "source": "src/Text-Markdown-Types.html#msFencedHandlers",
          "type": "function"
        },
        "index": {
          "description": "Handlers for the special fenced format This is most commonly used for fenced code e.g haskell main putStrLn Hello This is an extension of Markdown but fairly commonly used one This setting allows you to create new kinds of fencing Fencing goes into two categories parsed and raw Code fencing would be in the raw category where the contents are not treated as Markdown Parsed will treat the contents as Markdown and allow you to perform some kind of modifcation to it For example to create new fencing which wraps up the contents in an article tag you could use def msFencedHandlers htmlFencedHandler const article const article Map.union msFencedHandlers def Default code fencing for and Since",
          "hierarchy": "Text Markdown",
          "module": "Text.Markdown",
          "name": "msFencedHandlers",
          "normalized": "MarkdownSettings-\u003eMap Text(Text-\u003eFencedHandler)",
          "package": "markdown",
          "partial": "Fenced Handlers",
          "signature": "MarkdownSettings-\u003eMap Text(Text-\u003eFencedHandler)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markdown/docs/Text-Markdown.html#v:msFencedHandlers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003eTrue\u003c/code\u003e, all generated links have the attribute target=_blank set,\n causing them to be opened in a new tab or window.\n\u003c/p\u003e\u003cp\u003eDefault: \u003ccode\u003eFalse\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince 0.1.4\n\u003c/p\u003e",
          "module": "Text.Markdown",
          "name": "msLinkNewTab",
          "package": "markdown",
          "signature": "MarkdownSettings -\u003e Bool",
          "source": "src/Text-Markdown-Types.html#msLinkNewTab",
          "type": "function"
        },
        "index": {
          "description": "If True all generated links have the attribute target blank set causing them to be opened in new tab or window Default False Since",
          "hierarchy": "Text Markdown",
          "module": "Text.Markdown",
          "name": "msLinkNewTab",
          "normalized": "MarkdownSettings-\u003eBool",
          "package": "markdown",
          "partial": "Link New Tab",
          "signature": "MarkdownSettings-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markdown/docs/Text-Markdown.html#v:msLinkNewTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTML snippets which stand on their own. We do not require a blank line following these pieces of HTML.\n\u003c/p\u003e\u003cp\u003eDefault: empty set.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.2\n\u003c/p\u003e",
          "module": "Text.Markdown",
          "name": "msStandaloneHtml",
          "package": "markdown",
          "signature": "MarkdownSettings -\u003e Set Text",
          "source": "src/Text-Markdown-Types.html#msStandaloneHtml",
          "type": "function"
        },
        "index": {
          "description": "HTML snippets which stand on their own We do not require blank line following these pieces of HTML Default empty set Since",
          "hierarchy": "Text Markdown",
          "module": "Text.Markdown",
          "name": "msStandaloneHtml",
          "normalized": "MarkdownSettings-\u003eSet Text",
          "package": "markdown",
          "partial": "Standalone Html",
          "signature": "MarkdownSettings-\u003eSet Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markdown/docs/Text-Markdown.html#v:msStandaloneHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to automatically apply XSS protection to embedded HTML. Default: \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Markdown",
          "name": "msXssProtect",
          "package": "markdown",
          "signature": "MarkdownSettings -\u003e Bool",
          "source": "src/Text-Markdown-Types.html#msXssProtect",
          "type": "function"
        },
        "index": {
          "description": "Whether to automatically apply XSS protection to embedded HTML Default True",
          "hierarchy": "Text Markdown",
          "module": "Text.Markdown",
          "name": "msXssProtect",
          "normalized": "MarkdownSettings-\u003eBool",
          "package": "markdown",
          "partial": "Xss Protect",
          "signature": "MarkdownSettings-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markdown/docs/Text-Markdown.html#v:msXssProtect"
      }
    }
  ]
]