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
        "word": "isohunt"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eImage\u003c/a\u003e\u003c/code\u003e data type. This should be imported qualified so as not\nto conflict with the accessors from the \u003ccode\u003eResponse\u003c/code\u003e and \u003ccode\u003eItem\u003c/code\u003e data types:\n\u003c/p\u003e\u003cpre\u003e import qualified IsoHunt.Response as Response\n import qualified IsoHunt.Item as Item\n import qualified IsoHunt.Image as Image\n\n ... Response.title r ... Item.title i ... Image.title im ...\n\u003c/pre\u003e\u003cp\u003eThese fields are mostly undocumented; see\n\u003ca\u003ehttp://ca.isohunt.com/js/json.php?ihq=ubuntu&start=1&rows=4\u003c/a\u003e for\nan example response.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "IsoHunt.Image",
          "name": "Image",
          "package": "isohunt",
          "source": "src/IsoHunt-Image.html",
          "type": "module"
        },
        "index": {
          "description": "The Image data type This should be imported qualified so as not to conflict with the accessors from the Response and Item data types import qualified IsoHunt.Response as Response import qualified IsoHunt.Item as Item import qualified IsoHunt.Image as Image Response.title Item.title Image.title im These fields are mostly undocumented see http ca.isohunt.com js json.php ihq ubuntu start rows for an example response",
          "hierarchy": "IsoHunt Image",
          "module": "IsoHunt.Image",
          "name": "Image",
          "package": "isohunt",
          "partial": "Image",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Image.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Image",
          "name": "Image",
          "package": "isohunt",
          "source": "src/IsoHunt-Image.html#Image",
          "type": "data"
        },
        "index": {
          "hierarchy": "IsoHunt Image",
          "module": "IsoHunt.Image",
          "name": "Image",
          "package": "isohunt",
          "partial": "Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Image.html#t:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Image",
          "name": "Image",
          "package": "isohunt",
          "signature": "Image",
          "source": "src/IsoHunt-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Image",
          "module": "IsoHunt.Image",
          "name": "Image",
          "package": "isohunt",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Image.html#v:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Image",
          "name": "height",
          "package": "isohunt",
          "signature": "Integer",
          "source": "src/IsoHunt-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Image",
          "module": "IsoHunt.Image",
          "name": "height",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Image.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Image",
          "name": "link",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Image",
          "module": "IsoHunt.Image",
          "name": "link",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Image.html#v:link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Image",
          "name": "title",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Image",
          "module": "IsoHunt.Image",
          "name": "title",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Image.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Image",
          "name": "url",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Image",
          "module": "IsoHunt.Image",
          "name": "url",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Image.html#v:url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Image",
          "name": "width",
          "package": "isohunt",
          "signature": "Integer",
          "source": "src/IsoHunt-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Image",
          "module": "IsoHunt.Image",
          "name": "width",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Image.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eItem\u003c/a\u003e\u003c/code\u003e data type. This should be imported qualified so as not\nto conflict with the accessors from the \u003ccode\u003eResponse\u003c/code\u003e and \u003ccode\u003eImage\u003c/code\u003e data types:\n\u003c/p\u003e\u003cpre\u003e import qualified IsoHunt.Response as Response\n import qualified IsoHunt.Item as Item\n import qualified IsoHunt.Image as Image\n\n ... Response.title r ... Item.title i ... Image.title im ...\n\u003c/pre\u003e\u003cp\u003eThese fields are mostly undocumented; see\n\u003ca\u003ehttp://ca.isohunt.com/js/json.php?ihq=ubuntu&start=1&rows=4\u003c/a\u003e for\nan example response.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "IsoHunt.Item",
          "name": "Item",
          "package": "isohunt",
          "source": "src/IsoHunt-Item.html",
          "type": "module"
        },
        "index": {
          "description": "The Item data type This should be imported qualified so as not to conflict with the accessors from the Response and Image data types import qualified IsoHunt.Response as Response import qualified IsoHunt.Item as Item import qualified IsoHunt.Image as Image Response.title Item.title Image.title im These fields are mostly undocumented see http ca.isohunt.com js json.php ihq ubuntu start rows for an example response",
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "Item",
          "package": "isohunt",
          "partial": "Item",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "Item",
          "package": "isohunt",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "data"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "Item",
          "package": "isohunt",
          "partial": "Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#t:Item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "Item",
          "package": "isohunt",
          "signature": "Item",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "Item",
          "package": "isohunt",
          "partial": "Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:Item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "category",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "category",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:category"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "comments",
          "package": "isohunt",
          "signature": "Integer",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "comments",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:comments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "downloads",
          "package": "isohunt",
          "signature": "Maybe Integer",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "downloads",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:downloads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe link for the *.torrent file on\n isohunt's website, eg \u003ca\u003ehttp://ca.isohunt.com/download/52510650/ubuntu.torrent\u003c/a\u003e\n\u003c/p\u003e",
          "module": "IsoHunt.Item",
          "name": "enclosureUrl",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "description": "The link for the torrent file on isohunt website eg http ca.isohunt.com download ubuntu.torrent",
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "enclosureUrl",
          "package": "isohunt",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:enclosureUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "exempts",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "exempts",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:exempts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "files",
          "package": "isohunt",
          "signature": "Integer",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "files",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:files"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "guid",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "guid",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:guid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "hash",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "hash",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "kws",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "kws",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:kws"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "leechers",
          "package": "isohunt",
          "signature": "Maybe Integer",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "leechers",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:leechers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize in bytes\n\u003c/p\u003e",
          "module": "IsoHunt.Item",
          "name": "length",
          "package": "isohunt",
          "signature": "Integer",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "description": "Size in bytes",
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "length",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "link",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "link",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "originalLink",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "originalLink",
          "package": "isohunt",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:originalLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "originalSite",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "originalSite",
          "package": "isohunt",
          "partial": "Site",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:originalSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "pubDate",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "pubDate",
          "package": "isohunt",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:pubDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "seeds",
          "package": "isohunt",
          "signature": "Maybe Integer",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "seeds",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:seeds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehuman-readable filesize (eg \"1.4GB\")\n\u003c/p\u003e",
          "module": "IsoHunt.Item",
          "name": "size",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "description": "human-readable filesize eg GB",
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "size",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "title",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "title",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "tracker",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "tracker",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:tracker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "trackerUrl",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "trackerUrl",
          "package": "isohunt",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:trackerUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Item",
          "name": "votes",
          "package": "isohunt",
          "signature": "Integer",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Item",
          "module": "IsoHunt.Item",
          "name": "votes",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Item.html#v:votes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e data type. This should be imported qualified so as not\nto conflict with the accessors from the \u003ccode\u003e\u003ca\u003eItem\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eImage\u003c/a\u003e\u003c/code\u003e data types:\n\u003c/p\u003e\u003cpre\u003e import qualified IsoHunt.Response as Response\n import qualified IsoHunt.Item as Item\n import qualified IsoHunt.Image as Image\n\n ... Response.title r ... Item.title i ... Image.title im ...\n\u003c/pre\u003e\u003cp\u003eThese fields are mostly undocumented; see\n\u003ca\u003ehttp://ca.isohunt.com/js/json.php?ihq=ubuntu&start=1&rows=4\u003c/a\u003e for\nan example response.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "IsoHunt.Response",
          "name": "Response",
          "package": "isohunt",
          "source": "src/IsoHunt-Response.html",
          "type": "module"
        },
        "index": {
          "description": "The Response data type This should be imported qualified so as not to conflict with the accessors from the Item and Image data types import qualified IsoHunt.Response as Response import qualified IsoHunt.Item as Item import qualified IsoHunt.Image as Image Response.title Item.title Image.title im These fields are mostly undocumented see http ca.isohunt.com js json.php ihq ubuntu start rows for an example response",
          "hierarchy": "IsoHunt Response",
          "module": "IsoHunt.Response",
          "name": "Response",
          "package": "isohunt",
          "partial": "Response",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Response.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Response",
          "name": "Response",
          "package": "isohunt",
          "source": "src/IsoHunt-Response.html#Response",
          "type": "data"
        },
        "index": {
          "hierarchy": "IsoHunt Response",
          "module": "IsoHunt.Response",
          "name": "Response",
          "package": "isohunt",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Response.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Response",
          "name": "Response",
          "package": "isohunt",
          "signature": "Response",
          "source": "src/IsoHunt-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Response",
          "module": "IsoHunt.Response",
          "name": "Response",
          "package": "isohunt",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Response.html#v:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Response",
          "name": "category",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Response",
          "module": "IsoHunt.Response",
          "name": "category",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Response.html#v:category"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Response",
          "name": "censored",
          "package": "isohunt",
          "signature": "Integer",
          "source": "src/IsoHunt-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Response",
          "module": "IsoHunt.Response",
          "name": "censored",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Response.html#v:censored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Response",
          "name": "description",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Response",
          "module": "IsoHunt.Response",
          "name": "description",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Response.html#v:description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Response",
          "name": "image",
          "package": "isohunt",
          "signature": "Image",
          "source": "src/IsoHunt-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Response",
          "module": "IsoHunt.Response",
          "name": "image",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Response.html#v:image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esearch results\n\u003c/p\u003e",
          "module": "IsoHunt.Response",
          "name": "items",
          "package": "isohunt",
          "signature": "Vector Item",
          "source": "src/IsoHunt-Response.html#Response",
          "type": "function"
        },
        "index": {
          "description": "search results",
          "hierarchy": "IsoHunt Response",
          "module": "IsoHunt.Response",
          "name": "items",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Response.html#v:items"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Response",
          "name": "language",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Response",
          "module": "IsoHunt.Response",
          "name": "language",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Response.html#v:language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Response",
          "name": "lastBuildDate",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Response",
          "module": "IsoHunt.Response",
          "name": "lastBuildDate",
          "package": "isohunt",
          "partial": "Build Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Response.html#v:lastBuildDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Response",
          "name": "link",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Response",
          "module": "IsoHunt.Response",
          "name": "link",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Response.html#v:link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Response",
          "name": "maxResults",
          "package": "isohunt",
          "signature": "Integer",
          "source": "src/IsoHunt-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Response",
          "module": "IsoHunt.Response",
          "name": "maxResults",
          "package": "isohunt",
          "partial": "Results",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Response.html#v:maxResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Response",
          "name": "pubDate",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Response",
          "module": "IsoHunt.Response",
          "name": "pubDate",
          "package": "isohunt",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Response.html#v:pubDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Response",
          "name": "title",
          "package": "isohunt",
          "signature": "Text",
          "source": "src/IsoHunt-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Response",
          "module": "IsoHunt.Response",
          "name": "title",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Response.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Response",
          "name": "totalResults",
          "package": "isohunt",
          "signature": "Integer",
          "source": "src/IsoHunt-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Response",
          "module": "IsoHunt.Response",
          "name": "totalResults",
          "package": "isohunt",
          "partial": "Results",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Response.html#v:totalResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Response",
          "name": "ttl",
          "package": "isohunt",
          "signature": "Integer",
          "source": "src/IsoHunt-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Response",
          "module": "IsoHunt.Response",
          "name": "ttl",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Response.html#v:ttl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIsoHunt API; see \u003ca\u003ehttp://ca.isohunt.com/forum/viewtopic.php?p=433527#433527\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSample use:\n\u003c/p\u003e\u003cpre\u003e resp \u003c- search (simpleQuery \"ubuntu\")\n\u003c/pre\u003e\u003cp\u003eThe following terms and conditions apply to the IsoHunt API, as stated\nin the above link:\n\u003c/p\u003e\u003cp\u003eIn using our search API, you are free to do with it as you wish on condition that if your app is available publicly to users, you must link to torrent details pages on isoHunt.com, whether you link to the .torrent files or not. We reserve the right to ban you from using our API if you don't follow this simple rule. Refer to Louish's iPhone app for a good example of including links to our torrent details pages. Our torrent details pages have URLs like this: \u003ca\u003ehttp://isohunt.com/torrent_details/28289948/ubuntu?tab=summary\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eWhile we don't require developer tokens or place hard limits on api calls usage, excessive calls will also result in bans. If you think your app will consistently sustain multiple calls per second to our api, email admin at this site's domain first. \n\u003c/p\u003e\u003cp\u003eYou are free to promote your app using our API, by replying under this post (\u003ca\u003ehttp://ca.isohunt.com/forum/viewtopic.php?p=433527#433527\u003c/a\u003e) or post under this forum (\u003ca\u003ehttp://isohunt.com/forum/viewforum.php?f=19\u003c/a\u003e). If your app is really good, we'll likely want to spotlight it on isoHunt's frontpage. Multiple posts to promote your app on our forum or comments is not allowed however, and will be treated as spam.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "IsoHunt.Search",
          "name": "Search",
          "package": "isohunt",
          "source": "src/IsoHunt-Search.html",
          "type": "module"
        },
        "index": {
          "description": "IsoHunt API see http ca.isohunt.com forum viewtopic.php Sample use resp search simpleQuery ubuntu The following terms and conditions apply to the IsoHunt API as stated in the above link In using our search API you are free to do with it as you wish on condition that if your app is available publicly to users you must link to torrent details pages on isoHunt.com whether you link to the torrent files or not We reserve the right to ban you from using our API if you don follow this simple rule Refer to Louish iPhone app for good example of including links to our torrent details pages Our torrent details pages have URLs like this http isohunt.com torrent details ubuntu tab summary While we don require developer tokens or place hard limits on api calls usage excessive calls will also result in bans If you think your app will consistently sustain multiple calls per second to our api email admin at this site domain first You are free to promote your app using our API by replying under this post http ca.isohunt.com forum viewtopic.php or post under this forum http isohunt.com forum viewforum.php If your app is really good we ll likely want to spotlight it on isoHunt frontpage Multiple posts to promote your app on our forum or comments is not allowed however and will be treated as spam",
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "Search",
          "package": "isohunt",
          "partial": "Search",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Search",
          "name": "Image",
          "package": "isohunt",
          "source": "src/IsoHunt-Image.html#Image",
          "type": "data"
        },
        "index": {
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "Image",
          "package": "isohunt",
          "partial": "Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#t:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Search",
          "name": "Item",
          "package": "isohunt",
          "source": "src/IsoHunt-Item.html#Item",
          "type": "data"
        },
        "index": {
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "Item",
          "package": "isohunt",
          "partial": "Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#t:Item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe response was invalid JSON. The unparsed contents are included.\n\u003c/p\u003e",
          "module": "IsoHunt.Search",
          "name": "MalformedJSON",
          "package": "isohunt",
          "source": "src/IsoHunt-Search.html#MalformedJSON",
          "type": "data"
        },
        "index": {
          "description": "The response was invalid JSON The unparsed contents are included",
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "MalformedJSON",
          "package": "isohunt",
          "partial": "Malformed JSON",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#t:MalformedJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe response was valid JSON, but not of the expected\n format. Error message and the JSON value are included.\n\u003c/p\u003e",
          "module": "IsoHunt.Search",
          "name": "MalformedResponse",
          "package": "isohunt",
          "source": "src/IsoHunt-Search.html#MalformedResponse",
          "type": "data"
        },
        "index": {
          "description": "The response was valid JSON but not of the expected format Error message and the JSON value are included",
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "MalformedResponse",
          "package": "isohunt",
          "partial": "Malformed Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#t:MalformedResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Search",
          "name": "Order",
          "package": "isohunt",
          "source": "src/IsoHunt-Search.html#Order",
          "type": "data"
        },
        "index": {
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "Order",
          "package": "isohunt",
          "partial": "Order",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#t:Order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003esimpleQuery\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e for constructing queries\n\u003c/p\u003e",
          "module": "IsoHunt.Search",
          "name": "Query",
          "package": "isohunt",
          "source": "src/IsoHunt-Search.html#Query",
          "type": "data"
        },
        "index": {
          "description": "See also simpleQuery and def for constructing queries",
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "Query",
          "package": "isohunt",
          "partial": "Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Search",
          "name": "Response",
          "package": "isohunt",
          "source": "src/IsoHunt-Response.html#Response",
          "type": "data"
        },
        "index": {
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "Response",
          "package": "isohunt",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Search",
          "name": "Sort",
          "package": "isohunt",
          "source": "src/IsoHunt-Search.html#Sort",
          "type": "data"
        },
        "index": {
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "Sort",
          "package": "isohunt",
          "partial": "Sort",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#t:Sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Search",
          "name": "Age",
          "package": "isohunt",
          "signature": "Age",
          "source": "src/IsoHunt-Search.html#Sort",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "Age",
          "package": "isohunt",
          "partial": "Age",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#v:Age"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Search",
          "name": "Ascending",
          "package": "isohunt",
          "signature": "Ascending",
          "source": "src/IsoHunt-Search.html#Order",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "Ascending",
          "package": "isohunt",
          "partial": "Ascending",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#v:Ascending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverall factors such as age, query relevance\n seed/leechers counts and vots\n\u003c/p\u003e",
          "module": "IsoHunt.Search",
          "name": "Composite",
          "package": "isohunt",
          "signature": "Composite",
          "source": "src/IsoHunt-Search.html#Sort",
          "type": "function"
        },
        "index": {
          "description": "Overall factors such as age query relevance seed leechers counts and vots",
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "Composite",
          "package": "isohunt",
          "partial": "Composite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#v:Composite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Search",
          "name": "Descending",
          "package": "isohunt",
          "signature": "Descending",
          "source": "src/IsoHunt-Search.html#Order",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "Descending",
          "package": "isohunt",
          "partial": "Descending",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#v:Descending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Search",
          "name": "MalformedJSON",
          "package": "isohunt",
          "signature": "MalformedJSON !ByteString",
          "source": "src/IsoHunt-Search.html#MalformedJSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "MalformedJSON",
          "package": "isohunt",
          "partial": "Malformed JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#v:MalformedJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Search",
          "name": "MalformedResponse",
          "package": "isohunt",
          "signature": "MalformedResponse !String !Value",
          "source": "src/IsoHunt-Search.html#MalformedResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "MalformedResponse",
          "package": "isohunt",
          "partial": "Malformed Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#v:MalformedResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Search",
          "name": "Query",
          "package": "isohunt",
          "signature": "Query",
          "source": "src/IsoHunt-Search.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "Query",
          "package": "isohunt",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#v:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeeds + leechers\n\u003c/p\u003e",
          "module": "IsoHunt.Search",
          "name": "Seeds",
          "package": "isohunt",
          "signature": "Seeds",
          "source": "src/IsoHunt-Search.html#Sort",
          "type": "function"
        },
        "index": {
          "description": "Seeds leechers",
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "Seeds",
          "package": "isohunt",
          "partial": "Seeds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#v:Seeds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Search",
          "name": "Size",
          "package": "isohunt",
          "signature": "Size",
          "source": "src/IsoHunt-Search.html#Sort",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "Size",
          "package": "isohunt",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#v:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Search",
          "name": "order",
          "package": "isohunt",
          "signature": "Order",
          "source": "src/IsoHunt-Search.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "order",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#v:order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003c= 100\n\u003c/p\u003e",
          "module": "IsoHunt.Search",
          "name": "rows",
          "package": "isohunt",
          "signature": "Int",
          "source": "src/IsoHunt-Search.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "rows",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#v:rows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch IsoHunt with the given query.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eMalformedJSON\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMalformedResponse\u003c/a\u003e\u003c/code\u003e if the result is of an\nexpected format.\n\u003c/p\u003e",
          "module": "IsoHunt.Search",
          "name": "search",
          "package": "isohunt",
          "signature": "Query -\u003e IO Response",
          "source": "src/IsoHunt-Search.html#search",
          "type": "function"
        },
        "index": {
          "description": "Search IsoHunt with the given query Throws MalformedJSON or MalformedResponse if the result is of an expected format",
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "search",
          "normalized": "Query-\u003eIO Response",
          "package": "isohunt",
          "signature": "Query-\u003eIO Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Search",
          "name": "searchTerm",
          "package": "isohunt",
          "signature": "String",
          "source": "src/IsoHunt-Search.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "searchTerm",
          "package": "isohunt",
          "partial": "Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#v:searchTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default query for the given search term\n\u003c/p\u003e",
          "module": "IsoHunt.Search",
          "name": "simpleQuery",
          "package": "isohunt",
          "signature": "String -\u003e Query",
          "source": "src/IsoHunt-Search.html#simpleQuery",
          "type": "function"
        },
        "index": {
          "description": "default query for the given search term",
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "simpleQuery",
          "normalized": "String-\u003eQuery",
          "package": "isohunt",
          "partial": "Query",
          "signature": "String-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#v:simpleQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IsoHunt.Search",
          "name": "sort",
          "package": "isohunt",
          "signature": "Sort",
          "source": "src/IsoHunt-Search.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "sort",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estart+rows \u003c= 1000\n\u003c/p\u003e",
          "module": "IsoHunt.Search",
          "name": "start",
          "package": "isohunt",
          "signature": "Int",
          "source": "src/IsoHunt-Search.html#Query",
          "type": "function"
        },
        "index": {
          "description": "start rows",
          "hierarchy": "IsoHunt Search",
          "module": "IsoHunt.Search",
          "name": "start",
          "package": "isohunt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isohunt/docs/IsoHunt-Search.html#v:start"
      }
    }
  ]
]