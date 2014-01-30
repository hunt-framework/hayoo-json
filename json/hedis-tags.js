[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-tags/docs/Database-Redis-Tags.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHedis tags helper.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Redis.Tags",
        "fct-package": "hedis-tags",
        "fct-signature": "module",
        "fct-source": "src/Database-Redis-Tags.html",
        "fct-type": "module",
        "title": "Tags"
      },
      "index": {
        "description": "Hedis tags helper",
        "hierarchy": "Database Redis Tags",
        "module": "Database.Redis.Tags",
        "name": "Tags",
        "normalized": "",
        "package": "hedis-tags",
        "partial": "Tags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-tags/docs/Database-Redis-Tags.html#v:markTags",
      "description": {
        "fct-descr": "\u003cp\u003eMark keys with tags. Keys may be absent. All tags named in next manner:\n\u003c/p\u003e\u003cpre\u003e tag-prefix:tag:tag-signature\n\u003c/pre\u003e\u003cp\u003eTags stored in Redis as sets with no expiration. Tags not related to \n   each other.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTime complexity\u003c/em\u003e \u003ccode\u003eO(K+T)\u003c/code\u003e where \u003ccode\u003eK\u003c/code\u003e and \u003ccode\u003eT\u003c/code\u003e is number of keys and tags.\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Tags",
        "fct-package": "hedis-tags",
        "fct-signature": "[ByteString]-\u003e ByteString-\u003e [ByteString]-\u003e m ()",
        "fct-type": "function",
        "title": "markTags"
      },
      "index": {
        "description": "Mark keys with tags Keys may be absent All tags named in next manner tag-prefix tag tag-signature Tags stored in Redis as sets with no expiration Tags not related to each other Time complexity where and is number of keys and tags",
        "hierarchy": "Database Redis Tags",
        "module": "Database.Redis.Tags",
        "name": "markTags",
        "normalized": "[ByteString]-\u003eByteString-\u003e[ByteString]-\u003ea()",
        "package": "hedis-tags",
        "partial": "Tags",
        "signature": "[ByteString]-\u003eByteString-\u003e[ByteString]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-tags/docs/Database-Redis-Tags.html#v:nestTags",
      "description": {
        "fct-descr": "\u003cp\u003eHelper for create list of nested tags.\n\u003c/p\u003e\u003cpre\u003e nestTags [\"one\", \"two\", \"three\"]\n [\"one\", \"one:two\", \"one:two:three\"]\n\u003c/pre\u003e",
        "fct-module": "Database.Redis.Tags",
        "fct-package": "hedis-tags",
        "fct-signature": "[ByteString] -\u003e [ByteString]",
        "fct-source": "src/Database-Redis-Tags.html#nestTags",
        "fct-type": "function",
        "title": "nestTags"
      },
      "index": {
        "description": "Helper for create list of nested tags nestTags one two three one one two one two three",
        "hierarchy": "Database Redis Tags",
        "module": "Database.Redis.Tags",
        "name": "nestTags",
        "normalized": "[ByteString]-\u003e[ByteString]",
        "package": "hedis-tags",
        "partial": "Tags",
        "signature": "[ByteString]-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-tags/docs/Database-Redis-Tags.html#v:purgeTags",
      "description": {
        "fct-descr": "\u003cp\u003ePurge tagged keys and tags. \n\u003c/p\u003e\u003cp\u003eBecause the tags are not related to each other, if key tagged with more \n   than one tags, remember the following. After removal of one of the tags, \n   may remain orphans. To avoid this, purge all needed tags or use \n   \u003ccode\u003ereconcileTags\u003c/code\u003e for stripping.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTime complexity\u003c/em\u003e \u003ccode\u003e~O(T+2K)\u003c/code\u003e where \u003ccode\u003eT\u003c/code\u003e is number tags and \u003ccode\u003eK\u003c/code\u003e is number \n   of tagged keys.\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Tags",
        "fct-package": "hedis-tags",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e m ()",
        "fct-type": "function",
        "title": "purgeTags"
      },
      "index": {
        "description": "Purge tagged keys and tags Because the tags are not related to each other if key tagged with more than one tags remember the following After removal of one of the tags may remain orphans To avoid this purge all needed tags or use reconcileTags for stripping Time complexity where is number tags and is number of tagged keys",
        "hierarchy": "Database Redis Tags",
        "module": "Database.Redis.Tags",
        "name": "purgeTags",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea()",
        "package": "hedis-tags",
        "partial": "Tags",
        "signature": "ByteString-\u003e[ByteString]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-tags/docs/Database-Redis-Tags.html#v:reconsileTags",
      "description": {
        "fct-descr": "\u003cp\u003eReconcile all tags with given prefix.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Remove noexistent keys from tags.\n\u003c/li\u003e\u003cli\u003e Remove empty tags.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis operation take huge time complexity. Use it only for maintenance. \n\u003c/p\u003e",
        "fct-module": "Database.Redis.Tags",
        "fct-package": "hedis-tags",
        "fct-signature": "ByteString-\u003e m ()",
        "fct-type": "function",
        "title": "reconsileTags"
      },
      "index": {
        "description": "Reconcile all tags with given prefix Remove noexistent keys from tags Remove empty tags This operation take huge time complexity Use it only for maintenance",
        "hierarchy": "Database Redis Tags",
        "module": "Database.Redis.Tags",
        "name": "reconsileTags",
        "normalized": "ByteString-\u003ea()",
        "package": "hedis-tags",
        "partial": "Tags",
        "signature": "ByteString-\u003em()"
      }
    }
  }
]