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
        "word": "epub-metadata"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types for working with the metadata of epub documents\n\u003c/p\u003e\u003cp\u003eThis module helps to avoid circular imports for definitions needed by two or more other modules in this library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Data.Common",
          "name": "Common",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Common.html",
          "type": "module"
        },
        "index": {
          "description": "Data types for working with the metadata of epub documents This module helps to avoid circular imports for definitions needed by two or more other modules in this library",
          "hierarchy": "Codec Epub Data Common",
          "module": "Codec.Epub.Data.Common",
          "name": "Common",
          "package": "epub-metadata",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttribute value used to relate things to each other in the OPF data\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Common",
          "name": "MFItemId",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Common.html#MFItemId",
          "type": "type"
        },
        "index": {
          "description": "Attribute value used to relate things to each other in the OPF data",
          "hierarchy": "Codec Epub Data Common",
          "module": "Codec.Epub.Data.Common",
          "name": "MFItemId",
          "package": "epub-metadata",
          "partial": "MFItem Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Common.html#t:MFItemId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types for working with the metadata of epub documents\n\u003c/p\u003e\u003cp\u003eThis contains the guide section in an epub2 OPF document. It has been deprecated in the epub3 spec and should not be present in epub3 documents.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Data.Guide",
          "name": "Guide",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Guide.html",
          "type": "module"
        },
        "index": {
          "description": "Data types for working with the metadata of epub documents This contains the guide section in an epub2 OPF document It has been deprecated in the epub3 spec and should not be present in epub3 documents",
          "hierarchy": "Codec Epub Data Guide",
          "module": "Codec.Epub.Data.Guide",
          "name": "Guide",
          "package": "epub-metadata",
          "partial": "Guide",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Guide.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackage/guide/reference tag\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Guide",
          "name": "GuideRef",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Guide.html#GuideRef",
          "type": "data"
        },
        "index": {
          "description": "package guide reference tag",
          "hierarchy": "Codec Epub Data Guide",
          "module": "Codec.Epub.Data.Guide",
          "name": "GuideRef",
          "package": "epub-metadata",
          "partial": "Guide Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Guide.html#t:GuideRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Data.Guide",
          "name": "GuideRef",
          "package": "epub-metadata",
          "signature": "GuideRef",
          "source": "src/Codec-Epub-Data-Guide.html#GuideRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Data Guide",
          "module": "Codec.Epub.Data.Guide",
          "name": "GuideRef",
          "package": "epub-metadata",
          "partial": "Guide Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Guide.html#v:GuideRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehref attribute. Must reference an item in the manifest\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Guide",
          "name": "grHref",
          "package": "epub-metadata",
          "signature": "MFItemId",
          "source": "src/Codec-Epub-Data-Guide.html#GuideRef",
          "type": "function"
        },
        "index": {
          "description": "href attribute Must reference an item in the manifest",
          "hierarchy": "Codec Epub Data Guide",
          "module": "Codec.Epub.Data.Guide",
          "name": "grHref",
          "package": "epub-metadata",
          "partial": "Href",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Guide.html#v:grHref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etitle attribute\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Guide",
          "name": "grTitle",
          "package": "epub-metadata",
          "signature": "Maybe String",
          "source": "src/Codec-Epub-Data-Guide.html#GuideRef",
          "type": "function"
        },
        "index": {
          "description": "title attribute",
          "hierarchy": "Codec Epub Data Guide",
          "module": "Codec.Epub.Data.Guide",
          "name": "grTitle",
          "package": "epub-metadata",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Guide.html#v:grTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype attribute. Must follow 13th edition of the Chicago Manual of Style\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Guide",
          "name": "grType",
          "package": "epub-metadata",
          "signature": "String",
          "source": "src/Codec-Epub-Data-Guide.html#GuideRef",
          "type": "function"
        },
        "index": {
          "description": "type attribute Must follow th edition of the Chicago Manual of Style",
          "hierarchy": "Codec Epub Data Guide",
          "module": "Codec.Epub.Data.Guide",
          "name": "grType",
          "package": "epub-metadata",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Guide.html#v:grType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types for working with the metadata of epub documents\n\u003c/p\u003e\u003cp\u003eThis contains the manifest information from an epub document.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Data.Manifest",
          "name": "Manifest",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Manifest.html",
          "type": "module"
        },
        "index": {
          "description": "Data types for working with the metadata of epub documents This contains the manifest information from an epub document",
          "hierarchy": "Codec Epub Data Manifest",
          "module": "Codec.Epub.Data.Manifest",
          "name": "Manifest",
          "package": "epub-metadata",
          "partial": "Manifest",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Manifest.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Data.Manifest",
          "name": "Manifest",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Manifest.html#Manifest",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Codec Epub Data Manifest",
          "module": "Codec.Epub.Data.Manifest",
          "name": "Manifest",
          "package": "epub-metadata",
          "partial": "Manifest",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Manifest.html#t:Manifest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackage/manifest/item tag\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Manifest",
          "name": "ManifestItem",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Manifest.html#ManifestItem",
          "type": "data"
        },
        "index": {
          "description": "package manifest item tag",
          "hierarchy": "Codec Epub Data Manifest",
          "module": "Codec.Epub.Data.Manifest",
          "name": "ManifestItem",
          "package": "epub-metadata",
          "partial": "Manifest Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Manifest.html#t:ManifestItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Data.Manifest",
          "name": "Manifest",
          "package": "epub-metadata",
          "signature": "Manifest [ManifestItem]",
          "source": "src/Codec-Epub-Data-Manifest.html#Manifest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Data Manifest",
          "module": "Codec.Epub.Data.Manifest",
          "name": "Manifest",
          "normalized": "Manifest[ManifestItem]",
          "package": "epub-metadata",
          "partial": "Manifest",
          "signature": "Manifest[ManifestItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Manifest.html#v:Manifest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Data.Manifest",
          "name": "ManifestItem",
          "package": "epub-metadata",
          "signature": "ManifestItem",
          "source": "src/Codec-Epub-Data-Manifest.html#ManifestItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Data Manifest",
          "module": "Codec.Epub.Data.Manifest",
          "name": "ManifestItem",
          "package": "epub-metadata",
          "partial": "Manifest Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Manifest.html#v:ManifestItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehref attribute\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Manifest",
          "name": "mfiHref",
          "package": "epub-metadata",
          "signature": "MFItemHref",
          "source": "src/Codec-Epub-Data-Manifest.html#ManifestItem",
          "type": "function"
        },
        "index": {
          "description": "href attribute",
          "hierarchy": "Codec Epub Data Manifest",
          "module": "Codec.Epub.Data.Manifest",
          "name": "mfiHref",
          "package": "epub-metadata",
          "partial": "Href",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Manifest.html#v:mfiHref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eid attribute\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Manifest",
          "name": "mfiId",
          "package": "epub-metadata",
          "signature": "MFItemId",
          "source": "src/Codec-Epub-Data-Manifest.html#ManifestItem",
          "type": "function"
        },
        "index": {
          "description": "id attribute",
          "hierarchy": "Codec Epub Data Manifest",
          "module": "Codec.Epub.Data.Manifest",
          "name": "mfiId",
          "package": "epub-metadata",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Manifest.html#v:mfiId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emedia-type attribute\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Manifest",
          "name": "mfiMediaType",
          "package": "epub-metadata",
          "signature": "MFItemMediaType",
          "source": "src/Codec-Epub-Data-Manifest.html#ManifestItem",
          "type": "function"
        },
        "index": {
          "description": "media-type attribute",
          "hierarchy": "Codec Epub Data Manifest",
          "module": "Codec.Epub.Data.Manifest",
          "name": "mfiMediaType",
          "package": "epub-metadata",
          "partial": "Media Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Manifest.html#v:mfiMediaType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types for working with the metadata of epub documents\n\u003c/p\u003e\u003cp\u003eThis module defines the Metadata structure which contains most of the taxonomic information about the literary work. Metadata is probably the most important data structure in this library.\n\u003c/p\u003e\u003cp\u003eBoth commonly-used versions of epub (2.x and 3.x) are supported by these types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Metadata",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Metadata.html",
          "type": "module"
        },
        "index": {
          "description": "Data types for working with the metadata of epub documents This module defines the Metadata structure which contains most of the taxonomic information about the literary work Metadata is probably the most important data structure in this library Both commonly-used versions of epub and are supported by these types",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Metadata",
          "package": "epub-metadata",
          "partial": "Metadata",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackage/metadata/dc:creator or package/metadata/dc:contributor\n   tags\n\u003c/p\u003e\u003cp\u003eThis structure is used for both contributor and creator as they are exactly the same.\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Creator",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Metadata.html#Creator",
          "type": "data"
        },
        "index": {
          "description": "package metadata dc creator or package metadata dc contributor tags This structure is used for both contributor and creator as they are exactly the same",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Creator",
          "package": "epub-metadata",
          "partial": "Creator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#t:Creator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackage/metadata/dc:date tag, opf:event attribute, text\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Date",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Metadata.html#Date",
          "type": "data"
        },
        "index": {
          "description": "package metadata dc date tag opf event attribute text",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Date",
          "package": "epub-metadata",
          "partial": "Date",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#t:Date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackage/metadata/dc:description tag, xml:lang attribute, text\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Description",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Metadata.html#Description",
          "type": "data"
        },
        "index": {
          "description": "package metadata dc description tag xml lang attribute text",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Description",
          "package": "epub-metadata",
          "partial": "Description",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#t:Description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackage/metadata/dc:identifier tag\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Identifier",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Metadata.html#Identifier",
          "type": "data"
        },
        "index": {
          "description": "package metadata dc identifier tag",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Identifier",
          "package": "epub-metadata",
          "partial": "Identifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#t:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackage/metadata tag\n\u003c/p\u003e\u003cp\u003eThis is perhaps the most useful data structure in this library. It\n   contains most of the information tools will want to use to\n   organize epub documents.\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Metadata",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Metadata.html#Metadata",
          "type": "data"
        },
        "index": {
          "description": "package metadata tag This is perhaps the most useful data structure in this library It contains most of the information tools will want to use to organize epub documents",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Metadata",
          "package": "epub-metadata",
          "partial": "Metadata",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#t:Metadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRefinements represent meta tags within the metadata section\n   that refine other tags. These are used during the parsing phase\n   and are discarded as their information is slotted into the data\n   they refine (the types below like Creator, Title, etc..)\n\u003c/p\u003e\u003cp\u003eThis is specific to epub3\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Refinement",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Metadata.html#Refinement",
          "type": "data"
        },
        "index": {
          "description": "Refinements represent meta tags within the metadata section that refine other tags These are used during the parsing phase and are discarded as their information is slotted into the data they refine the types below like Creator Title etc This is specific to epub3",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Refinement",
          "package": "epub-metadata",
          "partial": "Refinement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#t:Refinement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackage/metadata/dc:title tag\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Title",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Metadata.html#Title",
          "type": "data"
        },
        "index": {
          "description": "package metadata dc title tag",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Title",
          "package": "epub-metadata",
          "partial": "Title",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#t:Title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Data.Metadata",
          "name": "Creator",
          "package": "epub-metadata",
          "signature": "Creator",
          "source": "src/Codec-Epub-Data-Metadata.html#Creator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Creator",
          "package": "epub-metadata",
          "partial": "Creator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:Creator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Data.Metadata",
          "name": "Date",
          "package": "epub-metadata",
          "signature": "Date (Maybe String) String",
          "source": "src/Codec-Epub-Data-Metadata.html#Date",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Date",
          "package": "epub-metadata",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:Date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Data.Metadata",
          "name": "Description",
          "package": "epub-metadata",
          "signature": "Description (Maybe String) String",
          "source": "src/Codec-Epub-Data-Metadata.html#Description",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Description",
          "package": "epub-metadata",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:Description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Data.Metadata",
          "name": "Identifier",
          "package": "epub-metadata",
          "signature": "Identifier",
          "source": "src/Codec-Epub-Data-Metadata.html#Identifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Identifier",
          "package": "epub-metadata",
          "partial": "Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Data.Metadata",
          "name": "Metadata",
          "package": "epub-metadata",
          "signature": "Metadata",
          "source": "src/Codec-Epub-Data-Metadata.html#Metadata",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Metadata",
          "package": "epub-metadata",
          "partial": "Metadata",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:Metadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Data.Metadata",
          "name": "Refinement",
          "package": "epub-metadata",
          "signature": "Refinement",
          "source": "src/Codec-Epub-Data-Metadata.html#Refinement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Refinement",
          "package": "epub-metadata",
          "partial": "Refinement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:Refinement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Data.Metadata",
          "name": "Title",
          "package": "epub-metadata",
          "signature": "Title",
          "source": "src/Codec-Epub-Data-Metadata.html#Title",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "Title",
          "package": "epub-metadata",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:Title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efile-as from attribute or meta tag\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "creatorFileAs",
          "package": "epub-metadata",
          "signature": "Maybe String",
          "source": "src/Codec-Epub-Data-Metadata.html#Creator",
          "type": "function"
        },
        "index": {
          "description": "file-as from attribute or meta tag",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "creatorFileAs",
          "package": "epub-metadata",
          "partial": "File As",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:creatorFileAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erole from attribute or meta tag\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "creatorRole",
          "package": "epub-metadata",
          "signature": "Maybe String",
          "source": "src/Codec-Epub-Data-Metadata.html#Creator",
          "type": "function"
        },
        "index": {
          "description": "role from attribute or meta tag",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "creatorRole",
          "package": "epub-metadata",
          "partial": "Role",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:creatorRole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edisplay-sequence property from meta\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "creatorSeq",
          "package": "epub-metadata",
          "signature": "Maybe Int",
          "source": "src/Codec-Epub-Data-Metadata.html#Creator",
          "type": "function"
        },
        "index": {
          "description": "display-sequence property from meta",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "creatorSeq",
          "package": "epub-metadata",
          "partial": "Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:creatorSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreator or contributor tag text\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "creatorText",
          "package": "epub-metadata",
          "signature": "String",
          "source": "src/Codec-Epub-Data-Metadata.html#Creator",
          "type": "function"
        },
        "index": {
          "description": "creator or contributor tag text",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "creatorText",
          "package": "epub-metadata",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:creatorText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote: This isn't valid as-is, some required values are empty lists!\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "emptyMetadata",
          "package": "epub-metadata",
          "signature": "Metadata",
          "source": "src/Codec-Epub-Data-Metadata.html#emptyMetadata",
          "type": "function"
        },
        "index": {
          "description": "Note This isn valid as-is some required values are empty lists",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "emptyMetadata",
          "package": "epub-metadata",
          "partial": "Metadata",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:emptyMetadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed internally by Codec.Epub.Parse.Metadata to populate the\n   metadata modified field with data extracted from the epub3 meta\n   tag with property dcterms:modified\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "getModified",
          "package": "epub-metadata",
          "signature": "[Refinement] -\u003e Maybe String",
          "source": "src/Codec-Epub-Data-Metadata.html#getModified",
          "type": "function"
        },
        "index": {
          "description": "Used internally by Codec.Epub.Parse.Metadata to populate the metadata modified field with data extracted from the epub3 meta tag with property dcterms modified",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "getModified",
          "normalized": "[Refinement]-\u003eMaybe String",
          "package": "epub-metadata",
          "partial": "Modified",
          "signature": "[Refinement]-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:getModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eid attribute\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "idId",
          "package": "epub-metadata",
          "signature": "Maybe String",
          "source": "src/Codec-Epub-Data-Metadata.html#Identifier",
          "type": "function"
        },
        "index": {
          "description": "id attribute",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "idId",
          "package": "epub-metadata",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:idId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003escheme from attribute or meta tag\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "idScheme",
          "package": "epub-metadata",
          "signature": "Maybe String",
          "source": "src/Codec-Epub-Data-Metadata.html#Identifier",
          "type": "function"
        },
        "index": {
          "description": "scheme from attribute or meta tag",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "idScheme",
          "package": "epub-metadata",
          "partial": "Scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:idScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eidentifier tag text\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "idText",
          "package": "epub-metadata",
          "signature": "String",
          "source": "src/Codec-Epub-Data-Metadata.html#Identifier",
          "type": "function"
        },
        "index": {
          "description": "identifier tag text",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "idText",
          "package": "epub-metadata",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:idText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eidentifier-type property from meta tag\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "idType",
          "package": "epub-metadata",
          "signature": "Maybe String",
          "source": "src/Codec-Epub-Data-Metadata.html#Identifier",
          "type": "function"
        },
        "index": {
          "description": "identifier-type property from meta tag",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "idType",
          "package": "epub-metadata",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:idType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaContributors",
          "package": "epub-metadata",
          "signature": "[Creator]",
          "source": "src/Codec-Epub-Data-Metadata.html#Metadata",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaContributors",
          "normalized": "[Creator]",
          "package": "epub-metadata",
          "partial": "Contributors",
          "signature": "[Creator]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:metaContributors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edc:coverage tags\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaCoverages",
          "package": "epub-metadata",
          "signature": "[String]",
          "source": "src/Codec-Epub-Data-Metadata.html#Metadata",
          "type": "function"
        },
        "index": {
          "description": "dc coverage tags",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaCoverages",
          "normalized": "[String]",
          "package": "epub-metadata",
          "partial": "Coverages",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:metaCoverages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaCreators",
          "package": "epub-metadata",
          "signature": "[Creator]",
          "source": "src/Codec-Epub-Data-Metadata.html#Metadata",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaCreators",
          "normalized": "[Creator]",
          "package": "epub-metadata",
          "partial": "Creators",
          "signature": "[Creator]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:metaCreators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaDates",
          "package": "epub-metadata",
          "signature": "[Date]",
          "source": "src/Codec-Epub-Data-Metadata.html#Metadata",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaDates",
          "normalized": "[Date]",
          "package": "epub-metadata",
          "partial": "Dates",
          "signature": "[Date]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:metaDates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaDescriptions",
          "package": "epub-metadata",
          "signature": "[Description]",
          "source": "src/Codec-Epub-Data-Metadata.html#Metadata",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaDescriptions",
          "normalized": "[Description]",
          "package": "epub-metadata",
          "partial": "Descriptions",
          "signature": "[Description]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:metaDescriptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edc:format tags\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaFormats",
          "package": "epub-metadata",
          "signature": "[String]",
          "source": "src/Codec-Epub-Data-Metadata.html#Metadata",
          "type": "function"
        },
        "index": {
          "description": "dc format tags",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaFormats",
          "normalized": "[String]",
          "package": "epub-metadata",
          "partial": "Formats",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:metaFormats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eat least one required\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaIds",
          "package": "epub-metadata",
          "signature": "[Identifier]",
          "source": "src/Codec-Epub-Data-Metadata.html#Metadata",
          "type": "function"
        },
        "index": {
          "description": "at least one required",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaIds",
          "normalized": "[Identifier]",
          "package": "epub-metadata",
          "partial": "Ids",
          "signature": "[Identifier]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:metaIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edc:language tags, at least one required\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaLangs",
          "package": "epub-metadata",
          "signature": "[String]",
          "source": "src/Codec-Epub-Data-Metadata.html#Metadata",
          "type": "function"
        },
        "index": {
          "description": "dc language tags at least one required",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaLangs",
          "normalized": "[String]",
          "package": "epub-metadata",
          "partial": "Langs",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:metaLangs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emeta tag with property dcterms:modified, present only in epub3 documents\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaModified",
          "package": "epub-metadata",
          "signature": "Maybe String",
          "source": "src/Codec-Epub-Data-Metadata.html#Metadata",
          "type": "function"
        },
        "index": {
          "description": "meta tag with property dcterms modified present only in epub3 documents",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaModified",
          "package": "epub-metadata",
          "partial": "Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:metaModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edc:publisher tags\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaPublishers",
          "package": "epub-metadata",
          "signature": "[String]",
          "source": "src/Codec-Epub-Data-Metadata.html#Metadata",
          "type": "function"
        },
        "index": {
          "description": "dc publisher tags",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaPublishers",
          "normalized": "[String]",
          "package": "epub-metadata",
          "partial": "Publishers",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:metaPublishers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edc:relation tags\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaRelations",
          "package": "epub-metadata",
          "signature": "[String]",
          "source": "src/Codec-Epub-Data-Metadata.html#Metadata",
          "type": "function"
        },
        "index": {
          "description": "dc relation tags",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaRelations",
          "normalized": "[String]",
          "package": "epub-metadata",
          "partial": "Relations",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:metaRelations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edc:rights tags\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaRights",
          "package": "epub-metadata",
          "signature": "[String]",
          "source": "src/Codec-Epub-Data-Metadata.html#Metadata",
          "type": "function"
        },
        "index": {
          "description": "dc rights tags",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaRights",
          "normalized": "[String]",
          "package": "epub-metadata",
          "partial": "Rights",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:metaRights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edc:source tags\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaSource",
          "package": "epub-metadata",
          "signature": "Maybe String",
          "source": "src/Codec-Epub-Data-Metadata.html#Metadata",
          "type": "function"
        },
        "index": {
          "description": "dc source tags",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaSource",
          "package": "epub-metadata",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:metaSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edc:subject tags\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaSubjects",
          "package": "epub-metadata",
          "signature": "[String]",
          "source": "src/Codec-Epub-Data-Metadata.html#Metadata",
          "type": "function"
        },
        "index": {
          "description": "dc subject tags",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaSubjects",
          "normalized": "[String]",
          "package": "epub-metadata",
          "partial": "Subjects",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:metaSubjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eat least one required\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaTitles",
          "package": "epub-metadata",
          "signature": "[Title]",
          "source": "src/Codec-Epub-Data-Metadata.html#Metadata",
          "type": "function"
        },
        "index": {
          "description": "at least one required",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaTitles",
          "normalized": "[Title]",
          "package": "epub-metadata",
          "partial": "Titles",
          "signature": "[Title]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:metaTitles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edc:type tags\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaType",
          "package": "epub-metadata",
          "signature": "Maybe String",
          "source": "src/Codec-Epub-Data-Metadata.html#Metadata",
          "type": "function"
        },
        "index": {
          "description": "dc type tags",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "metaType",
          "package": "epub-metadata",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:metaType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eid attribute\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "refId",
          "package": "epub-metadata",
          "signature": "String",
          "source": "src/Codec-Epub-Data-Metadata.html#Refinement",
          "type": "function"
        },
        "index": {
          "description": "id attribute",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "refId",
          "package": "epub-metadata",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:refId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eproperty attribute\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "refProp",
          "package": "epub-metadata",
          "signature": "String",
          "source": "src/Codec-Epub-Data-Metadata.html#Refinement",
          "type": "function"
        },
        "index": {
          "description": "property attribute",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "refProp",
          "package": "epub-metadata",
          "partial": "Prop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:refProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003escheme attribute\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "refScheme",
          "package": "epub-metadata",
          "signature": "String",
          "source": "src/Codec-Epub-Data-Metadata.html#Refinement",
          "type": "function"
        },
        "index": {
          "description": "scheme attribute",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "refScheme",
          "package": "epub-metadata",
          "partial": "Scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:refScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emeta tag text\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "refText",
          "package": "epub-metadata",
          "signature": "String",
          "source": "src/Codec-Epub-Data-Metadata.html#Refinement",
          "type": "function"
        },
        "index": {
          "description": "meta tag text",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "refText",
          "package": "epub-metadata",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:refText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed internally by Codec.Epub.Parse.Metadata to merge epub3 meta\n   tag info into the data gathered from contributor and creator tags\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "refineCreator",
          "package": "epub-metadata",
          "signature": "[Refinement] -\u003e (String, Creator) -\u003e Creator",
          "source": "src/Codec-Epub-Data-Metadata.html#refineCreator",
          "type": "function"
        },
        "index": {
          "description": "Used internally by Codec.Epub.Parse.Metadata to merge epub3 meta tag info into the data gathered from contributor and creator tags",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "refineCreator",
          "normalized": "[Refinement]-\u003e(String,Creator)-\u003eCreator",
          "package": "epub-metadata",
          "partial": "Creator",
          "signature": "[Refinement]-\u003e(String,Creator)-\u003eCreator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:refineCreator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed internally by Codec.Epub.Parse.Metadata to merge epub3 meta\n   tag info into the data gathered from an identifier tag\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "refineIdentifier",
          "package": "epub-metadata",
          "signature": "[Refinement] -\u003e Identifier -\u003e Identifier",
          "source": "src/Codec-Epub-Data-Metadata.html#refineIdentifier",
          "type": "function"
        },
        "index": {
          "description": "Used internally by Codec.Epub.Parse.Metadata to merge epub3 meta tag info into the data gathered from an identifier tag",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "refineIdentifier",
          "normalized": "[Refinement]-\u003eIdentifier-\u003eIdentifier",
          "package": "epub-metadata",
          "partial": "Identifier",
          "signature": "[Refinement]-\u003eIdentifier-\u003eIdentifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:refineIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed internally by Codec.Epub.Parse.Metadata to merge epub3 meta\n   tag info into the data gathered from a title tag\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "refineTitle",
          "package": "epub-metadata",
          "signature": "[Refinement] -\u003e (String, Title) -\u003e Title",
          "source": "src/Codec-Epub-Data-Metadata.html#refineTitle",
          "type": "function"
        },
        "index": {
          "description": "Used internally by Codec.Epub.Parse.Metadata to merge epub3 meta tag info into the data gathered from title tag",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "refineTitle",
          "normalized": "[Refinement]-\u003e(String,Title)-\u003eTitle",
          "package": "epub-metadata",
          "partial": "Title",
          "signature": "[Refinement]-\u003e(String,Title)-\u003eTitle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:refineTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elang attribute\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "titleLang",
          "package": "epub-metadata",
          "signature": "Maybe String",
          "source": "src/Codec-Epub-Data-Metadata.html#Title",
          "type": "function"
        },
        "index": {
          "description": "lang attribute",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "titleLang",
          "package": "epub-metadata",
          "partial": "Lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:titleLang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edisplay-sequence property from meta\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "titleSeq",
          "package": "epub-metadata",
          "signature": "Maybe Int",
          "source": "src/Codec-Epub-Data-Metadata.html#Title",
          "type": "function"
        },
        "index": {
          "description": "display-sequence property from meta",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "titleSeq",
          "package": "epub-metadata",
          "partial": "Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:titleSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etitle tag text\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "titleText",
          "package": "epub-metadata",
          "signature": "String",
          "source": "src/Codec-Epub-Data-Metadata.html#Title",
          "type": "function"
        },
        "index": {
          "description": "title tag text",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "titleText",
          "package": "epub-metadata",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:titleText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etitle-type property from meta tag\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Metadata",
          "name": "titleType",
          "package": "epub-metadata",
          "signature": "Maybe String",
          "source": "src/Codec-Epub-Data-Metadata.html#Title",
          "type": "function"
        },
        "index": {
          "description": "title-type property from meta tag",
          "hierarchy": "Codec Epub Data Metadata",
          "module": "Codec.Epub.Data.Metadata",
          "name": "titleType",
          "package": "epub-metadata",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Metadata.html#v:titleType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData type for working with epub package info\n\u003c/p\u003e\u003cp\u003eThis contains the package section from an epub document. In the\n   OPF XML document, this tag contains the other tags (metadata,\n   manifest...)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Data.Package",
          "name": "Package",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Package.html",
          "type": "module"
        },
        "index": {
          "description": "Data type for working with epub package info This contains the package section from an epub document In the OPF XML document this tag contains the other tags metadata manifest",
          "hierarchy": "Codec Epub Data Package",
          "module": "Codec.Epub.Data.Package",
          "name": "Package",
          "package": "epub-metadata",
          "partial": "Package",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Package.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackage tag\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Package",
          "name": "Package",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Package.html#Package",
          "type": "data"
        },
        "index": {
          "description": "package tag",
          "hierarchy": "Codec Epub Data Package",
          "module": "Codec.Epub.Data.Package",
          "name": "Package",
          "package": "epub-metadata",
          "partial": "Package",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Package.html#t:Package"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Data.Package",
          "name": "Package",
          "package": "epub-metadata",
          "signature": "Package",
          "source": "src/Codec-Epub-Data-Package.html#Package",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Data Package",
          "module": "Codec.Epub.Data.Package",
          "name": "Package",
          "package": "epub-metadata",
          "partial": "Package",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Package.html#v:Package"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunique-identifier attribute. This should relate to one metaIdentifier in the Metadata and is intended to represent this book's unique identifier.\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Package",
          "name": "pkgUniqueId",
          "package": "epub-metadata",
          "signature": "String",
          "source": "src/Codec-Epub-Data-Package.html#Package",
          "type": "function"
        },
        "index": {
          "description": "unique-identifier attribute This should relate to one metaIdentifier in the Metadata and is intended to represent this book unique identifier",
          "hierarchy": "Codec Epub Data Package",
          "module": "Codec.Epub.Data.Package",
          "name": "pkgUniqueId",
          "package": "epub-metadata",
          "partial": "Unique Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Package.html#v:pkgUniqueId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eversion attribute. This contains which epub specification version (2.x or 3.x) this document conforms to.\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Package",
          "name": "pkgVersion",
          "package": "epub-metadata",
          "signature": "String",
          "source": "src/Codec-Epub-Data-Package.html#Package",
          "type": "function"
        },
        "index": {
          "description": "version attribute This contains which epub specification version or this document conforms to",
          "hierarchy": "Codec Epub Data Package",
          "module": "Codec.Epub.Data.Package",
          "name": "pkgVersion",
          "package": "epub-metadata",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Package.html#v:pkgVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types for working with the metadata of epub documents\n\u003c/p\u003e\u003cp\u003eThe spine represents a default ordering of items in the manifest.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Data.Spine",
          "name": "Spine",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Spine.html",
          "type": "module"
        },
        "index": {
          "description": "Data types for working with the metadata of epub documents The spine represents default ordering of items in the manifest",
          "hierarchy": "Codec Epub Data Spine",
          "module": "Codec.Epub.Data.Spine",
          "name": "Spine",
          "package": "epub-metadata",
          "partial": "Spine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Spine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackage/spine tag\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Spine",
          "name": "Spine",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Spine.html#Spine",
          "type": "data"
        },
        "index": {
          "description": "package spine tag",
          "hierarchy": "Codec Epub Data Spine",
          "module": "Codec.Epub.Data.Spine",
          "name": "Spine",
          "package": "epub-metadata",
          "partial": "Spine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Spine.html#t:Spine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackage/spine/itemref tag\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Spine",
          "name": "SpineItemref",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Data-Spine.html#SpineItemref",
          "type": "data"
        },
        "index": {
          "description": "package spine itemref tag",
          "hierarchy": "Codec Epub Data Spine",
          "module": "Codec.Epub.Data.Spine",
          "name": "SpineItemref",
          "package": "epub-metadata",
          "partial": "Spine Itemref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Spine.html#t:SpineItemref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Data.Spine",
          "name": "Spine",
          "package": "epub-metadata",
          "signature": "Spine",
          "source": "src/Codec-Epub-Data-Spine.html#Spine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Data Spine",
          "module": "Codec.Epub.Data.Spine",
          "name": "Spine",
          "package": "epub-metadata",
          "partial": "Spine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Spine.html#v:Spine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Data.Spine",
          "name": "SpineItemref",
          "package": "epub-metadata",
          "signature": "SpineItemref",
          "source": "src/Codec-Epub-Data-Spine.html#SpineItemref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Data Spine",
          "module": "Codec.Epub.Data.Spine",
          "name": "SpineItemref",
          "package": "epub-metadata",
          "partial": "Spine Itemref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Spine.html#v:SpineItemref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eidref attribute. Must reference an item in the manifest\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Spine",
          "name": "siIdRef",
          "package": "epub-metadata",
          "signature": "MFItemId",
          "source": "src/Codec-Epub-Data-Spine.html#SpineItemref",
          "type": "function"
        },
        "index": {
          "description": "idref attribute Must reference an item in the manifest",
          "hierarchy": "Codec Epub Data Spine",
          "module": "Codec.Epub.Data.Spine",
          "name": "siIdRef",
          "package": "epub-metadata",
          "partial": "Id Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Spine.html#v:siIdRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elinear attribute\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Spine",
          "name": "siLinear",
          "package": "epub-metadata",
          "signature": "Maybe Bool",
          "source": "src/Codec-Epub-Data-Spine.html#SpineItemref",
          "type": "function"
        },
        "index": {
          "description": "linear attribute",
          "hierarchy": "Codec Epub Data Spine",
          "module": "Codec.Epub.Data.Spine",
          "name": "siLinear",
          "package": "epub-metadata",
          "partial": "Linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Spine.html#v:siLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eat least one required\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Spine",
          "name": "spineItemrefs",
          "package": "epub-metadata",
          "signature": "[SpineItemref]",
          "source": "src/Codec-Epub-Data-Spine.html#Spine",
          "type": "function"
        },
        "index": {
          "description": "at least one required",
          "hierarchy": "Codec Epub Data Spine",
          "module": "Codec.Epub.Data.Spine",
          "name": "spineItemrefs",
          "normalized": "[SpineItemref]",
          "package": "epub-metadata",
          "partial": "Itemrefs",
          "signature": "[SpineItemref]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Spine.html#v:spineItemrefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etoc attribute. Must reference the NCX in the manifest\n\u003c/p\u003e",
          "module": "Codec.Epub.Data.Spine",
          "name": "spineToc",
          "package": "epub-metadata",
          "signature": "MFItemId",
          "source": "src/Codec-Epub-Data-Spine.html#Spine",
          "type": "function"
        },
        "index": {
          "description": "toc attribute Must reference the NCX in the manifest",
          "hierarchy": "Codec Epub Data Spine",
          "module": "Codec.Epub.Data.Spine",
          "name": "spineToc",
          "package": "epub-metadata",
          "partial": "Toc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Data-Spine.html#v:spineToc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for pretty-printing epub guide info\n\u003c/p\u003e\u003cp\u003eUsed internally by Codec.Epub.Format\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Format.Guide",
          "name": "Guide",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Format-Guide.html",
          "type": "module"
        },
        "index": {
          "description": "Module for pretty-printing epub guide info Used internally by Codec.Epub.Format",
          "hierarchy": "Codec Epub Format Guide",
          "module": "Codec.Epub.Format.Guide",
          "name": "Guide",
          "package": "epub-metadata",
          "partial": "Guide",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Format-Guide.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat an epub Guide structure for pretty printing\n\u003c/p\u003e",
          "module": "Codec.Epub.Format.Guide",
          "name": "formatGuide",
          "package": "epub-metadata",
          "signature": "[GuideRef] -\u003e String",
          "source": "src/Codec-Epub-Format-Guide.html#formatGuide",
          "type": "function"
        },
        "index": {
          "description": "Format an epub Guide structure for pretty printing",
          "hierarchy": "Codec Epub Format Guide",
          "module": "Codec.Epub.Format.Guide",
          "name": "formatGuide",
          "normalized": "[GuideRef]-\u003eString",
          "package": "epub-metadata",
          "partial": "Guide",
          "signature": "[GuideRef]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Format-Guide.html#v:formatGuide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for pretty-printing epub manifest info\n\u003c/p\u003e\u003cp\u003eUsed internally by Codec.Epub.Format\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Format.Manifest",
          "name": "Manifest",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Format-Manifest.html",
          "type": "module"
        },
        "index": {
          "description": "Module for pretty-printing epub manifest info Used internally by Codec.Epub.Format",
          "hierarchy": "Codec Epub Format Manifest",
          "module": "Codec.Epub.Format.Manifest",
          "name": "Manifest",
          "package": "epub-metadata",
          "partial": "Manifest",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Format-Manifest.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat an epub Manifest structure for pretty printing\n\u003c/p\u003e",
          "module": "Codec.Epub.Format.Manifest",
          "name": "formatManifest",
          "package": "epub-metadata",
          "signature": "Manifest -\u003e String",
          "source": "src/Codec-Epub-Format-Manifest.html#formatManifest",
          "type": "function"
        },
        "index": {
          "description": "Format an epub Manifest structure for pretty printing",
          "hierarchy": "Codec Epub Format Manifest",
          "module": "Codec.Epub.Format.Manifest",
          "name": "formatManifest",
          "normalized": "Manifest-\u003eString",
          "package": "epub-metadata",
          "partial": "Manifest",
          "signature": "Manifest-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Format-Manifest.html#v:formatManifest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for pretty-printing epub metadata info\n\u003c/p\u003e\u003cp\u003eUsed internally by Codec.Epub.Format\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Format.Metadata",
          "name": "Metadata",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Format-Metadata.html",
          "type": "module"
        },
        "index": {
          "description": "Module for pretty-printing epub metadata info Used internally by Codec.Epub.Format",
          "hierarchy": "Codec Epub Format Metadata",
          "module": "Codec.Epub.Format.Metadata",
          "name": "Metadata",
          "package": "epub-metadata",
          "partial": "Metadata",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Format-Metadata.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat an epub Metadata structure for pretty printing\n\u003c/p\u003e",
          "module": "Codec.Epub.Format.Metadata",
          "name": "formatMetadata",
          "package": "epub-metadata",
          "signature": "Metadata -\u003e String",
          "source": "src/Codec-Epub-Format-Metadata.html#formatMetadata",
          "type": "function"
        },
        "index": {
          "description": "Format an epub Metadata structure for pretty printing",
          "hierarchy": "Codec Epub Format Metadata",
          "module": "Codec.Epub.Format.Metadata",
          "name": "formatMetadata",
          "normalized": "Metadata-\u003eString",
          "package": "epub-metadata",
          "partial": "Metadata",
          "signature": "Metadata-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Format-Metadata.html#v:formatMetadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for pretty-printing epub package info\n\u003c/p\u003e\u003cp\u003eUsed internally by Codec.Epub.Format\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Format.Package",
          "name": "Package",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Format-Package.html",
          "type": "module"
        },
        "index": {
          "description": "Module for pretty-printing epub package info Used internally by Codec.Epub.Format",
          "hierarchy": "Codec Epub Format Package",
          "module": "Codec.Epub.Format.Package",
          "name": "Package",
          "package": "epub-metadata",
          "partial": "Package",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Format-Package.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat an epub Package structure for pretty printing\n\u003c/p\u003e",
          "module": "Codec.Epub.Format.Package",
          "name": "formatPackage",
          "package": "epub-metadata",
          "signature": "Package -\u003e String",
          "source": "src/Codec-Epub-Format-Package.html#formatPackage",
          "type": "function"
        },
        "index": {
          "description": "Format an epub Package structure for pretty printing",
          "hierarchy": "Codec Epub Format Package",
          "module": "Codec.Epub.Format.Package",
          "name": "formatPackage",
          "normalized": "Package-\u003eString",
          "package": "epub-metadata",
          "partial": "Package",
          "signature": "Package-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Format-Package.html#v:formatPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for pretty-printing epub spine info\n\u003c/p\u003e\u003cp\u003eUsed internally by Codec.Epub.Format\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Format.Spine",
          "name": "Spine",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Format-Spine.html",
          "type": "module"
        },
        "index": {
          "description": "Module for pretty-printing epub spine info Used internally by Codec.Epub.Format",
          "hierarchy": "Codec Epub Format Spine",
          "module": "Codec.Epub.Format.Spine",
          "name": "Spine",
          "package": "epub-metadata",
          "partial": "Spine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Format-Spine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat an epub Spine structure for pretty printing\n\u003c/p\u003e",
          "module": "Codec.Epub.Format.Spine",
          "name": "formatSpine",
          "package": "epub-metadata",
          "signature": "Spine -\u003e String",
          "source": "src/Codec-Epub-Format-Spine.html#formatSpine",
          "type": "function"
        },
        "index": {
          "description": "Format an epub Spine structure for pretty printing",
          "hierarchy": "Codec Epub Format Spine",
          "module": "Codec.Epub.Format.Spine",
          "name": "formatSpine",
          "normalized": "Spine-\u003eString",
          "package": "epub-metadata",
          "partial": "Spine",
          "signature": "Spine-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Format-Spine.html#v:formatSpine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions shared by several formatting modules\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Format.Util",
          "name": "Util",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Format-Util.html",
          "type": "module"
        },
        "index": {
          "description": "Utility functions shared by several formatting modules",
          "hierarchy": "Codec Epub Format Util",
          "module": "Codec.Epub.Format.Util",
          "name": "Util",
          "package": "epub-metadata",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Format-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral-purpose finite sequences.\n\u003c/p\u003e",
          "module": "Codec.Epub.Format.Util",
          "name": "Seq",
          "package": "epub-metadata",
          "type": "data"
        },
        "index": {
          "description": "General-purpose finite sequences",
          "hierarchy": "Codec Epub Format Util",
          "module": "Codec.Epub.Format.Util",
          "name": "Seq",
          "package": "epub-metadata",
          "partial": "Seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Format-Util.html#t:Seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Format.Util",
          "name": "formatSubline",
          "package": "epub-metadata",
          "signature": "String -\u003e Maybe String -\u003e String",
          "source": "src/Codec-Epub-Format-Util.html#formatSubline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Format Util",
          "module": "Codec.Epub.Format.Util",
          "name": "formatSubline",
          "normalized": "String-\u003eMaybe String-\u003eString",
          "package": "epub-metadata",
          "partial": "Subline",
          "signature": "String-\u003eMaybe String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Format-Util.html#v:formatSubline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Format.Util",
          "name": "tellSeq",
          "package": "epub-metadata",
          "signature": "[a] -\u003e m ()",
          "source": "src/Codec-Epub-Format-Util.html#tellSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Format Util",
          "module": "Codec.Epub.Format.Util",
          "name": "tellSeq",
          "normalized": "[a]-\u003eb()",
          "package": "epub-metadata",
          "partial": "Seq",
          "signature": "[a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Format-Util.html#v:tellSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for pretty-printing epub meta-information\n\u003c/p\u003e\u003cp\u003eDefined here is the Formattable typeclass and instances for the\n   top-level epub data structures. The intention is that consumers\n   use the format function on any of these otherwise disparate types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Format",
          "name": "Format",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Format.html",
          "type": "module"
        },
        "index": {
          "description": "Module for pretty-printing epub meta-information Defined here is the Formattable typeclass and instances for the top-level epub data structures The intention is that consumers use the format function on any of these otherwise disparate types",
          "hierarchy": "Codec Epub Format",
          "module": "Codec.Epub.Format",
          "name": "Format",
          "package": "epub-metadata",
          "partial": "Format",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Format.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Format",
          "name": "Formattable",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Format.html#Formattable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Codec Epub Format",
          "module": "Codec.Epub.Format",
          "name": "Formattable",
          "package": "epub-metadata",
          "partial": "Formattable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Format.html#t:Formattable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Format",
          "name": "format",
          "package": "epub-metadata",
          "signature": "a -\u003e String",
          "source": "src/Codec-Epub-Format.html#format",
          "type": "method"
        },
        "index": {
          "hierarchy": "Codec Epub Format",
          "module": "Codec.Epub.Format",
          "name": "format",
          "normalized": "a-\u003eString",
          "package": "epub-metadata",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Format.html#v:format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for performing some IO operations on epub files\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.IO",
          "name": "IO",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for performing some IO operations on epub files",
          "hierarchy": "Codec Epub IO",
          "module": "Codec.Epub.IO",
          "name": "IO",
          "package": "epub-metadata",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the path and contents of the epub Package Document from\n   a ByteString representing an epub (zip) file\n\u003c/p\u003e",
          "module": "Codec.Epub.IO",
          "name": "getPkgPathXmlFromBS",
          "package": "epub-metadata",
          "signature": "ByteString-\u003e m (FilePath, String)",
          "type": "function"
        },
        "index": {
          "description": "Get the path and contents of the epub Package Document from ByteString representing an epub zip file",
          "hierarchy": "Codec Epub IO",
          "module": "Codec.Epub.IO",
          "name": "getPkgPathXmlFromBS",
          "normalized": "ByteString-\u003ea(FilePath,String)",
          "package": "epub-metadata",
          "partial": "Pkg Path Xml From BS",
          "signature": "ByteString-\u003em(FilePath,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-IO.html#v:getPkgPathXmlFromBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the path and contents of the epub Package Document from\n   a directory containing the files from an epub file (as in:\n   it's been unzipped into a dir)\n\u003c/p\u003e",
          "module": "Codec.Epub.IO",
          "name": "getPkgPathXmlFromDir",
          "package": "epub-metadata",
          "signature": "FilePath-\u003e m (FilePath, String)",
          "type": "function"
        },
        "index": {
          "description": "Get the path and contents of the epub Package Document from directory containing the files from an epub file as in it been unzipped into dir",
          "hierarchy": "Codec Epub IO",
          "module": "Codec.Epub.IO",
          "name": "getPkgPathXmlFromDir",
          "normalized": "FilePath-\u003ea(FilePath,String)",
          "package": "epub-metadata",
          "partial": "Pkg Path Xml From Dir",
          "signature": "FilePath-\u003em(FilePath,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-IO.html#v:getPkgPathXmlFromDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the path and contents of the epub Package Document from\n   an epub (zip) file\n\u003c/p\u003e",
          "module": "Codec.Epub.IO",
          "name": "getPkgPathXmlFromZip",
          "package": "epub-metadata",
          "signature": "FilePath-\u003e m (FilePath, String)",
          "type": "function"
        },
        "index": {
          "description": "Get the path and contents of the epub Package Document from an epub zip file",
          "hierarchy": "Codec Epub IO",
          "module": "Codec.Epub.IO",
          "name": "getPkgPathXmlFromZip",
          "normalized": "FilePath-\u003ea(FilePath,String)",
          "package": "epub-metadata",
          "partial": "Pkg Path Xml From Zip",
          "signature": "FilePath-\u003em(FilePath,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-IO.html#v:getPkgPathXmlFromZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the contents of the epub Package Document from an epub (zip) file\n\u003c/p\u003e",
          "module": "Codec.Epub.IO",
          "name": "getPkgXmlFromZip",
          "package": "epub-metadata",
          "signature": "FilePath-\u003e m String",
          "type": "function"
        },
        "index": {
          "description": "Get the contents of the epub Package Document from an epub zip file",
          "hierarchy": "Codec Epub IO",
          "module": "Codec.Epub.IO",
          "name": "getPkgXmlFromZip",
          "normalized": "FilePath-\u003ea String",
          "package": "epub-metadata",
          "partial": "Pkg Xml From Zip",
          "signature": "FilePath-\u003em String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-IO.html#v:getPkgXmlFromZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a zip Archive containing epub book data from the \n     specified directory\n\u003c/p\u003e",
          "module": "Codec.Epub.IO",
          "name": "mkEpubArchive",
          "package": "epub-metadata",
          "signature": "FilePath -\u003e IO Archive",
          "source": "src/Codec-Epub-IO.html#mkEpubArchive",
          "type": "function"
        },
        "index": {
          "description": "Construct zip Archive containing epub book data from the specified directory",
          "hierarchy": "Codec Epub IO",
          "module": "Codec.Epub.IO",
          "name": "mkEpubArchive",
          "normalized": "FilePath-\u003eIO Archive",
          "package": "epub-metadata",
          "partial": "Epub Archive",
          "signature": "FilePath-\u003eIO Archive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-IO.html#v:mkEpubArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a zip Archive from disk\n\u003c/p\u003e",
          "module": "Codec.Epub.IO",
          "name": "readArchive",
          "package": "epub-metadata",
          "signature": "FilePath -\u003e IO Archive",
          "source": "src/Codec-Epub-IO.html#readArchive",
          "type": "function"
        },
        "index": {
          "description": "Read zip Archive from disk",
          "hierarchy": "Codec Epub IO",
          "module": "Codec.Epub.IO",
          "name": "readArchive",
          "normalized": "FilePath-\u003eIO Archive",
          "package": "epub-metadata",
          "partial": "Archive",
          "signature": "FilePath-\u003eIO Archive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-IO.html#v:readArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a zip Archive to disk using the specified filename\n\u003c/p\u003e",
          "module": "Codec.Epub.IO",
          "name": "writeArchive",
          "package": "epub-metadata",
          "signature": "FilePath -\u003e Archive -\u003e IO ()",
          "source": "src/Codec-Epub-IO.html#writeArchive",
          "type": "function"
        },
        "index": {
          "description": "Write zip Archive to disk using the specified filename",
          "hierarchy": "Codec Epub IO",
          "module": "Codec.Epub.IO",
          "name": "writeArchive",
          "normalized": "FilePath-\u003eArchive-\u003eIO()",
          "package": "epub-metadata",
          "partial": "Archive",
          "signature": "FilePath-\u003eArchive-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-IO.html#v:writeArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing for the guide section of the OPF Package XML Document\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Parse.Guide",
          "name": "Guide",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Parse-Guide.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing for the guide section of the OPF Package XML Document",
          "hierarchy": "Codec Epub Parse Guide",
          "module": "Codec.Epub.Parse.Guide",
          "name": "Guide",
          "package": "epub-metadata",
          "partial": "Guide",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Guide.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Parse.Guide",
          "name": "guideP",
          "package": "epub-metadata",
          "signature": "a (NTree XNode) [GuideRef]",
          "source": "src/Codec-Epub-Parse-Guide.html#guideP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Parse Guide",
          "module": "Codec.Epub.Parse.Guide",
          "name": "guideP",
          "normalized": "a(NTree XNode)[GuideRef]",
          "package": "epub-metadata",
          "signature": "a(NTree XNode)[GuideRef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Guide.html#v:guideP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing for the manifest section of the OPF Package XML Document\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Parse.Manifest",
          "name": "Manifest",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Parse-Manifest.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing for the manifest section of the OPF Package XML Document",
          "hierarchy": "Codec Epub Parse Manifest",
          "module": "Codec.Epub.Parse.Manifest",
          "name": "Manifest",
          "package": "epub-metadata",
          "partial": "Manifest",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Manifest.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Parse.Manifest",
          "name": "manifestP",
          "package": "epub-metadata",
          "signature": "a (NTree XNode) Manifest",
          "source": "src/Codec-Epub-Parse-Manifest.html#manifestP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Parse Manifest",
          "module": "Codec.Epub.Parse.Manifest",
          "name": "manifestP",
          "package": "epub-metadata",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Manifest.html#v:manifestP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing for the metadata section of the OPF Package XML Document\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Parse.Metadata",
          "name": "Metadata",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Parse-Metadata.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing for the metadata section of the OPF Package XML Document",
          "hierarchy": "Codec Epub Parse Metadata",
          "module": "Codec.Epub.Parse.Metadata",
          "name": "Metadata",
          "package": "epub-metadata",
          "partial": "Metadata",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Metadata.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Parse.Metadata",
          "name": "metadataP",
          "package": "epub-metadata",
          "signature": "[Refinement] -\u003e a (NTree XNode) Metadata",
          "source": "src/Codec-Epub-Parse-Metadata.html#metadataP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Parse Metadata",
          "module": "Codec.Epub.Parse.Metadata",
          "name": "metadataP",
          "normalized": "[Refinement]-\u003ea(NTree XNode)Metadata",
          "package": "epub-metadata",
          "signature": "[Refinement]-\u003ea(NTree XNode)Metadata",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Metadata.html#v:metadataP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing for the package section of the OPF Package XML Document\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Parse.Package",
          "name": "Package",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Parse-Package.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing for the package section of the OPF Package XML Document",
          "hierarchy": "Codec Epub Parse Package",
          "module": "Codec.Epub.Parse.Package",
          "name": "Package",
          "package": "epub-metadata",
          "partial": "Package",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Package.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Parse.Package",
          "name": "packageP",
          "package": "epub-metadata",
          "signature": "a (NTree XNode) Package",
          "source": "src/Codec-Epub-Parse-Package.html#packageP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Parse Package",
          "module": "Codec.Epub.Parse.Package",
          "name": "packageP",
          "package": "epub-metadata",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Package.html#v:packageP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing for meta tags in the metadata section of the OPF\n   Package XML Document\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Parse.Refinements",
          "name": "Refinements",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Parse-Refinements.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing for meta tags in the metadata section of the OPF Package XML Document",
          "hierarchy": "Codec Epub Parse Refinements",
          "module": "Codec.Epub.Parse.Refinements",
          "name": "Refinements",
          "package": "epub-metadata",
          "partial": "Refinements",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Refinements.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Parse.Refinements",
          "name": "refinementsP",
          "package": "epub-metadata",
          "signature": "a (NTree XNode) [Refinement]",
          "source": "src/Codec-Epub-Parse-Refinements.html#refinementsP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Parse Refinements",
          "module": "Codec.Epub.Parse.Refinements",
          "name": "refinementsP",
          "normalized": "a(NTree XNode)[Refinement]",
          "package": "epub-metadata",
          "signature": "a(NTree XNode)[Refinement]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Refinements.html#v:refinementsP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing for the spine section of the OPF Package XML Document\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Parse.Spine",
          "name": "Spine",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Parse-Spine.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing for the spine section of the OPF Package XML Document",
          "hierarchy": "Codec Epub Parse Spine",
          "module": "Codec.Epub.Parse.Spine",
          "name": "Spine",
          "package": "epub-metadata",
          "partial": "Spine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Spine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Epub.Parse.Spine",
          "name": "spineP",
          "package": "epub-metadata",
          "signature": "a (NTree XNode) Spine",
          "source": "src/Codec-Epub-Parse-Spine.html#spineP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Epub Parse Spine",
          "module": "Codec.Epub.Parse.Spine",
          "name": "spineP",
          "package": "epub-metadata",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Spine.html#v:spineP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelper functions used by the other parsing modules\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Parse.Util",
          "name": "Util",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Parse-Util.html",
          "type": "module"
        },
        "index": {
          "description": "Helper functions used by the other parsing modules",
          "hierarchy": "Codec Epub Parse Util",
          "module": "Codec.Epub.Parse.Util",
          "name": "Util",
          "package": "epub-metadata",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShortcut arrow to drill down to a specific namespaced child\n   element\n\u003c/p\u003e",
          "module": "Codec.Epub.Parse.Util",
          "name": "atQTag",
          "package": "epub-metadata",
          "signature": "QName -\u003e a (NTree XNode) XmlTree",
          "source": "src/Codec-Epub-Parse-Util.html#atQTag",
          "type": "function"
        },
        "index": {
          "description": "Shortcut arrow to drill down to specific namespaced child element",
          "hierarchy": "Codec Epub Parse Util",
          "module": "Codec.Epub.Parse.Util",
          "name": "atQTag",
          "normalized": "QName-\u003ea(NTree XNode)XmlTree",
          "package": "epub-metadata",
          "partial": "QTag",
          "signature": "QName-\u003ea(NTree XNode)XmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Util.html#v:atQTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a qualified name in the Dublin Core namespace\n\u003c/p\u003e",
          "module": "Codec.Epub.Parse.Util",
          "name": "dcName",
          "package": "epub-metadata",
          "signature": "String -\u003e QName",
          "source": "src/Codec-Epub-Parse-Util.html#dcName",
          "type": "function"
        },
        "index": {
          "description": "Construct qualified name in the Dublin Core namespace",
          "hierarchy": "Codec Epub Parse Util",
          "module": "Codec.Epub.Parse.Util",
          "name": "dcName",
          "normalized": "String-\u003eQName",
          "package": "epub-metadata",
          "partial": "Name",
          "signature": "String-\u003eQName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Util.html#v:dcName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShortcut arrow to retrieve an attribute of an element as a\n   Maybe String\n\u003c/p\u003e",
          "module": "Codec.Epub.Parse.Util",
          "name": "mbGetAttrValue",
          "package": "epub-metadata",
          "signature": "String -\u003e a XmlTree (Maybe String)",
          "source": "src/Codec-Epub-Parse-Util.html#mbGetAttrValue",
          "type": "function"
        },
        "index": {
          "description": "Shortcut arrow to retrieve an attribute of an element as Maybe String",
          "hierarchy": "Codec Epub Parse Util",
          "module": "Codec.Epub.Parse.Util",
          "name": "mbGetAttrValue",
          "normalized": "String-\u003ea XmlTree(Maybe String)",
          "package": "epub-metadata",
          "partial": "Get Attr Value",
          "signature": "String-\u003ea XmlTree(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Util.html#v:mbGetAttrValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShortcut arrow to retrieve an attribute of a namespaced element\n   as a Maybe String\n\u003c/p\u003e",
          "module": "Codec.Epub.Parse.Util",
          "name": "mbGetQAttrValue",
          "package": "epub-metadata",
          "signature": "QName -\u003e a XmlTree (Maybe String)",
          "source": "src/Codec-Epub-Parse-Util.html#mbGetQAttrValue",
          "type": "function"
        },
        "index": {
          "description": "Shortcut arrow to retrieve an attribute of namespaced element as Maybe String",
          "hierarchy": "Codec Epub Parse Util",
          "module": "Codec.Epub.Parse.Util",
          "name": "mbGetQAttrValue",
          "normalized": "QName-\u003ea XmlTree(Maybe String)",
          "package": "epub-metadata",
          "partial": "Get QAttr Value",
          "signature": "QName-\u003ea XmlTree(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Util.html#v:mbGetQAttrValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShortcut arrow to retrieve the contents of a namespaced element\n   as a Maybe String\n\u003c/p\u003e",
          "module": "Codec.Epub.Parse.Util",
          "name": "mbQTagText",
          "package": "epub-metadata",
          "signature": "QName -\u003e a (NTree XNode) (Maybe String)",
          "source": "src/Codec-Epub-Parse-Util.html#mbQTagText",
          "type": "function"
        },
        "index": {
          "description": "Shortcut arrow to retrieve the contents of namespaced element as Maybe String",
          "hierarchy": "Codec Epub Parse Util",
          "module": "Codec.Epub.Parse.Util",
          "name": "mbQTagText",
          "normalized": "QName-\u003ea(NTree XNode)(Maybe String)",
          "package": "epub-metadata",
          "partial": "QTag Text",
          "signature": "QName-\u003ea(NTree XNode)(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Util.html#v:mbQTagText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArrow that succeeds if the input is not the empty list\n\u003c/p\u003e",
          "module": "Codec.Epub.Parse.Util",
          "name": "notNullA",
          "package": "epub-metadata",
          "signature": "a [b] [b]",
          "source": "src/Codec-Epub-Parse-Util.html#notNullA",
          "type": "function"
        },
        "index": {
          "description": "Arrow that succeeds if the input is not the empty list",
          "hierarchy": "Codec Epub Parse Util",
          "module": "Codec.Epub.Parse.Util",
          "name": "notNullA",
          "normalized": "a[b][b]",
          "package": "epub-metadata",
          "partial": "Null",
          "signature": "a[b][b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Util.html#v:notNullA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a qualified name in the epub OPF namespace\n\u003c/p\u003e",
          "module": "Codec.Epub.Parse.Util",
          "name": "opfName",
          "package": "epub-metadata",
          "signature": "String -\u003e QName",
          "source": "src/Codec-Epub-Parse-Util.html#opfName",
          "type": "function"
        },
        "index": {
          "description": "Construct qualified name in the epub OPF namespace",
          "hierarchy": "Codec Epub Parse Util",
          "module": "Codec.Epub.Parse.Util",
          "name": "opfName",
          "normalized": "String-\u003eQName",
          "package": "epub-metadata",
          "partial": "Name",
          "signature": "String-\u003eQName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Util.html#v:opfName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShortcut arrow to gather up the text part of all child nodes\n\u003c/p\u003e",
          "module": "Codec.Epub.Parse.Util",
          "name": "text",
          "package": "epub-metadata",
          "signature": "a (NTree XNode) String",
          "source": "src/Codec-Epub-Parse-Util.html#text",
          "type": "function"
        },
        "index": {
          "description": "Shortcut arrow to gather up the text part of all child nodes",
          "hierarchy": "Codec Epub Parse Util",
          "module": "Codec.Epub.Parse.Util",
          "name": "text",
          "package": "epub-metadata",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Util.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a qualified name in the XML namespace\n\u003c/p\u003e",
          "module": "Codec.Epub.Parse.Util",
          "name": "xmlName",
          "package": "epub-metadata",
          "signature": "String -\u003e QName",
          "source": "src/Codec-Epub-Parse-Util.html#xmlName",
          "type": "function"
        },
        "index": {
          "description": "Construct qualified name in the XML namespace",
          "hierarchy": "Codec Epub Parse Util",
          "module": "Codec.Epub.Parse.Util",
          "name": "xmlName",
          "normalized": "String-\u003eQName",
          "package": "epub-metadata",
          "partial": "Name",
          "signature": "String-\u003eQName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse-Util.html#v:xmlName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe main parsing interface, these get* functions are intended\n   to be used by consumers of this library\n\u003c/p\u003e\u003cp\u003eThis module is called Parse because it invokes the XML parsing\n   machinery of this library, but consumers of the library do not\n   have to interact with HXT, Arrows or XML directly.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub.Parse",
          "name": "Parse",
          "package": "epub-metadata",
          "source": "src/Codec-Epub-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "The main parsing interface these get functions are intended to be used by consumers of this library This module is called Parse because it invokes the XML parsing machinery of this library but consumers of the library do not have to interact with HXT Arrows or XML directly",
          "hierarchy": "Codec Epub Parse",
          "module": "Codec.Epub.Parse",
          "name": "Parse",
          "package": "epub-metadata",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse epub guide items from a String representing the epub XML\n   Package Document\n\u003c/p\u003e",
          "module": "Codec.Epub.Parse",
          "name": "getGuide",
          "package": "epub-metadata",
          "signature": "String -\u003e m [GuideRef]",
          "source": "src/Codec-Epub-Parse.html#getGuide",
          "type": "function"
        },
        "index": {
          "description": "Parse epub guide items from String representing the epub XML Package Document",
          "hierarchy": "Codec Epub Parse",
          "module": "Codec.Epub.Parse",
          "name": "getGuide",
          "normalized": "String-\u003ea[GuideRef]",
          "package": "epub-metadata",
          "partial": "Guide",
          "signature": "String-\u003em[GuideRef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse.html#v:getGuide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse epub manifest data from a String representing the epub XML\n   Package Document\n\u003c/p\u003e",
          "module": "Codec.Epub.Parse",
          "name": "getManifest",
          "package": "epub-metadata",
          "signature": "String -\u003e m Manifest",
          "source": "src/Codec-Epub-Parse.html#getManifest",
          "type": "function"
        },
        "index": {
          "description": "Parse epub manifest data from String representing the epub XML Package Document",
          "hierarchy": "Codec Epub Parse",
          "module": "Codec.Epub.Parse",
          "name": "getManifest",
          "normalized": "String-\u003ea Manifest",
          "package": "epub-metadata",
          "partial": "Manifest",
          "signature": "String-\u003em Manifest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse.html#v:getManifest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse epub metadata from a String representing the epub XML\n   Package Document\n\u003c/p\u003e",
          "module": "Codec.Epub.Parse",
          "name": "getMetadata",
          "package": "epub-metadata",
          "signature": "String -\u003e m Metadata",
          "source": "src/Codec-Epub-Parse.html#getMetadata",
          "type": "function"
        },
        "index": {
          "description": "Parse epub metadata from String representing the epub XML Package Document",
          "hierarchy": "Codec Epub Parse",
          "module": "Codec.Epub.Parse",
          "name": "getMetadata",
          "normalized": "String-\u003ea Metadata",
          "package": "epub-metadata",
          "partial": "Metadata",
          "signature": "String-\u003em Metadata",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse.html#v:getMetadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse epub package info from a String representing the epub XML\n   Package Document\n\u003c/p\u003e",
          "module": "Codec.Epub.Parse",
          "name": "getPackage",
          "package": "epub-metadata",
          "signature": "String -\u003e m Package",
          "source": "src/Codec-Epub-Parse.html#getPackage",
          "type": "function"
        },
        "index": {
          "description": "Parse epub package info from String representing the epub XML Package Document",
          "hierarchy": "Codec Epub Parse",
          "module": "Codec.Epub.Parse",
          "name": "getPackage",
          "normalized": "String-\u003ea Package",
          "package": "epub-metadata",
          "partial": "Package",
          "signature": "String-\u003em Package",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse.html#v:getPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse epub spine info from a String representing the epub XML\n   Package Document\n\u003c/p\u003e",
          "module": "Codec.Epub.Parse",
          "name": "getSpine",
          "package": "epub-metadata",
          "signature": "String -\u003e m Spine",
          "source": "src/Codec-Epub-Parse.html#getSpine",
          "type": "function"
        },
        "index": {
          "description": "Parse epub spine info from String representing the epub XML Package Document",
          "hierarchy": "Codec Epub Parse",
          "module": "Codec.Epub.Parse",
          "name": "getSpine",
          "normalized": "String-\u003ea Spine",
          "package": "epub-metadata",
          "partial": "Spine",
          "signature": "String-\u003em Spine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub-Parse.html#v:getSpine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a library for parsing and manipulating epub document metadata. Almost all of the data stored in the epub Package Document can be worked with using this API. This includes the most useful block of data, the epub metadata. This library supports epub versions 2 and 3.\n\u003c/p\u003e\u003cp\u003eThis library was constructed by studying the IDPF specifications for epub documents found here \u003ca\u003ehttp://www.idpf.org/epub/20/spec/OPF_2.0.1_draft.htm\u003c/a\u003e and here \u003ca\u003ehttp://www.idpf.org/epub/30/spec/epub30-publications.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eConsumers of epub-metadata will likely need this module, which re-exports the most useful parts concerning disk IO, parsing of the XML into Codec.Epub.Data.* data structures and formatting these data structures to be pretty-printed. Please also see Codec.Epub.Data.Metadata etc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Epub",
          "name": "Epub",
          "package": "epub-metadata",
          "source": "src/Codec-Epub.html",
          "type": "module"
        },
        "index": {
          "description": "This is library for parsing and manipulating epub document metadata Almost all of the data stored in the epub Package Document can be worked with using this API This includes the most useful block of data the epub metadata This library supports epub versions and This library was constructed by studying the IDPF specifications for epub documents found here http www.idpf.org epub spec OPF draft.htm and here http www.idpf.org epub spec epub30-publications.html Consumers of epub-metadata will likely need this module which re-exports the most useful parts concerning disk IO parsing of the XML into Codec.Epub.Data data structures and formatting these data structures to be pretty-printed Please also see Codec.Epub.Data.Metadata etc",
          "hierarchy": "Codec Epub",
          "module": "Codec.Epub",
          "name": "Epub",
          "package": "epub-metadata",
          "partial": "Epub",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epub-metadata/docs/Codec-Epub.html#"
      }
    }
  ]
]