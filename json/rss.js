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
        "word": "rss"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA libary for generating RSS 2.0 feeds.\n\u003c/p\u003e\u003cp\u003eOriginal module by Jeremy Shaw.\n\u003c/p\u003e\u003cp\u003eChanges by Bjorn Bringert:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e showXml just converts the RSS to a String, does not print it.\n\u003c/li\u003e\u003cli\u003e Added XML escaping.\n\u003c/li\u003e\u003cli\u003e Use RFC 2822 format for dates.\n\u003c/li\u003e\u003cli\u003e Added all elements from RSS 2.0.1-rv-6,\n   \u003ca\u003ehttp://www.rssboard.org/rss-2-0-1-rv-6\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Use HaXml.Verbatim instead of HaXml.Pretty, since\n   HaXml.Pretty seems to introduce spaces around entities.\n\u003c/li\u003e\u003cli\u003e Removed the use of content:encoded, since the description\n   tag is the recommented way to include HTML content in RSS 2.0.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eChanges by Bas van Dijk:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Use \u003ccode\u003eUTCTime\u003c/code\u003e from \u003ccode\u003etime\u003c/code\u003e instead of \u003ccode\u003eCalendarTime\u003c/code\u003e from \u003ccode\u003eold-time\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Add our own \u003ccode\u003eWeekday\u003c/code\u003e type instead of using the \u003ccode\u003eDay\u003c/code\u003e type from \u003ccode\u003eold-time\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Text.RSS",
          "name": "RSS",
          "package": "rss",
          "source": "src/Text-RSS.html",
          "type": "module"
        },
        "index": {
          "description": "libary for generating RSS feeds Original module by Jeremy Shaw Changes by Bjorn Bringert showXml just converts the RSS to String does not print it Added XML escaping Use RFC format for dates Added all elements from RSS rv-6 http www.rssboard.org rss-2-0-1-rv-6 Use HaXml.Verbatim instead of HaXml.Pretty since HaXml.Pretty seems to introduce spaces around entities Removed the use of content encoded since the description tag is the recommented way to include HTML content in RSS Changes by Bas van Dijk Use UTCTime from time instead of CalendarTime from old-time Add our own Weekday type instead of using the Day type from old-time",
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "RSS",
          "package": "rss",
          "partial": "RSS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "ChannelElem",
          "package": "rss",
          "source": "src/Text-RSS.html#ChannelElem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "ChannelElem",
          "package": "rss",
          "partial": "Channel Elem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:ChannelElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "CloudHost",
          "package": "rss",
          "source": "src/Text-RSS.html#CloudHost",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "CloudHost",
          "package": "rss",
          "partial": "Cloud Host",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:CloudHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "CloudPath",
          "package": "rss",
          "source": "src/Text-RSS.html#CloudPath",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "CloudPath",
          "package": "rss",
          "partial": "Cloud Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:CloudPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "CloudPort",
          "package": "rss",
          "source": "src/Text-RSS.html#CloudPort",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "CloudPort",
          "package": "rss",
          "partial": "Cloud Port",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:CloudPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "CloudProcedure",
          "package": "rss",
          "source": "src/Text-RSS.html#CloudProcedure",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "CloudProcedure",
          "package": "rss",
          "partial": "Cloud Procedure",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:CloudProcedure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "CloudProtocol",
          "package": "rss",
          "source": "src/Text-RSS.html#CloudProtocol",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "CloudProtocol",
          "package": "rss",
          "partial": "Cloud Protocol",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:CloudProtocol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Description",
          "package": "rss",
          "source": "src/Text-RSS.html#Description",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Description",
          "package": "rss",
          "partial": "Description",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:Description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Domain",
          "package": "rss",
          "source": "src/Text-RSS.html#Domain",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Domain",
          "package": "rss",
          "partial": "Domain",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:Domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Email",
          "package": "rss",
          "source": "src/Text-RSS.html#Email",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Email",
          "package": "rss",
          "partial": "Email",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:Email"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Height",
          "package": "rss",
          "source": "src/Text-RSS.html#Height",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Height",
          "package": "rss",
          "partial": "Height",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:Height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Hour",
          "package": "rss",
          "source": "src/Text-RSS.html#Hour",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Hour",
          "package": "rss",
          "partial": "Hour",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:Hour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "InputName",
          "package": "rss",
          "source": "src/Text-RSS.html#InputName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "InputName",
          "package": "rss",
          "partial": "Input Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:InputName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Item",
          "package": "rss",
          "source": "src/Text-RSS.html#Item",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Item",
          "package": "rss",
          "partial": "Item",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:Item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "ItemElem",
          "package": "rss",
          "source": "src/Text-RSS.html#ItemElem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "ItemElem",
          "package": "rss",
          "partial": "Item Elem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:ItemElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Link",
          "package": "rss",
          "source": "src/Text-RSS.html#Link",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Link",
          "package": "rss",
          "partial": "Link",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:Link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "MIME_Type",
          "package": "rss",
          "source": "src/Text-RSS.html#MIME_Type",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "MIME_Type",
          "package": "rss",
          "partial": "MIME Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:MIME_Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Minutes",
          "package": "rss",
          "source": "src/Text-RSS.html#Minutes",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Minutes",
          "package": "rss",
          "partial": "Minutes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:Minutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "RSS",
          "package": "rss",
          "source": "src/Text-RSS.html#RSS",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "RSS",
          "package": "rss",
          "partial": "RSS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:RSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Title",
          "package": "rss",
          "source": "src/Text-RSS.html#Title",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Title",
          "package": "rss",
          "partial": "Title",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:Title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA day of the week.\n\u003c/p\u003e",
          "module": "Text.RSS",
          "name": "Weekday",
          "package": "rss",
          "source": "src/Text-RSS.html#Weekday",
          "type": "data"
        },
        "index": {
          "description": "day of the week",
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Weekday",
          "package": "rss",
          "partial": "Weekday",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:Weekday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Width",
          "package": "rss",
          "source": "src/Text-RSS.html#Width",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Width",
          "package": "rss",
          "partial": "Width",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#t:Width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Author",
          "package": "rss",
          "signature": "Author Email",
          "source": "src/Text-RSS.html#ItemElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Author",
          "package": "rss",
          "partial": "Author",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Author"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Category",
          "package": "rss",
          "signature": "Category (Maybe Domain) String",
          "source": "src/Text-RSS.html#ItemElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Category",
          "package": "rss",
          "partial": "Category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Category"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "ChannelCategory",
          "package": "rss",
          "signature": "ChannelCategory (Maybe Domain) String",
          "source": "src/Text-RSS.html#ChannelElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "ChannelCategory",
          "package": "rss",
          "partial": "Channel Category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:ChannelCategory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "ChannelPubDate",
          "package": "rss",
          "signature": "ChannelPubDate UTCTime",
          "source": "src/Text-RSS.html#ChannelElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "ChannelPubDate",
          "package": "rss",
          "partial": "Channel Pub Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:ChannelPubDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Cloud",
          "package": "rss",
          "signature": "Cloud CloudHost CloudPort CloudPath CloudProcedure CloudProtocol",
          "source": "src/Text-RSS.html#ChannelElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Cloud",
          "package": "rss",
          "partial": "Cloud",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Cloud"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "CloudProtocolSOAP",
          "package": "rss",
          "signature": "CloudProtocolSOAP",
          "source": "src/Text-RSS.html#CloudProtocol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "CloudProtocolSOAP",
          "package": "rss",
          "partial": "Cloud Protocol SOAP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:CloudProtocolSOAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "CloudProtocolXmlRpc",
          "package": "rss",
          "signature": "CloudProtocolXmlRpc",
          "source": "src/Text-RSS.html#CloudProtocol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "CloudProtocolXmlRpc",
          "package": "rss",
          "partial": "Cloud Protocol Xml Rpc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:CloudProtocolXmlRpc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Comments",
          "package": "rss",
          "signature": "Comments URI",
          "source": "src/Text-RSS.html#ItemElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Comments",
          "package": "rss",
          "partial": "Comments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Comments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Copyright",
          "package": "rss",
          "signature": "Copyright String",
          "source": "src/Text-RSS.html#ChannelElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Copyright",
          "package": "rss",
          "partial": "Copyright",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Copyright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Description",
          "package": "rss",
          "signature": "Description Description",
          "source": "src/Text-RSS.html#ItemElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Description",
          "package": "rss",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Enclosure",
          "package": "rss",
          "signature": "Enclosure URI Int MIME_Type",
          "source": "src/Text-RSS.html#ItemElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Enclosure",
          "package": "rss",
          "partial": "Enclosure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Enclosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Friday",
          "package": "rss",
          "signature": "Friday",
          "source": "src/Text-RSS.html#Weekday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Friday",
          "package": "rss",
          "partial": "Friday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Friday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Generator",
          "package": "rss",
          "signature": "Generator String",
          "source": "src/Text-RSS.html#ChannelElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Generator",
          "package": "rss",
          "partial": "Generator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Generator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Guid",
          "package": "rss",
          "signature": "Guid Bool String",
          "source": "src/Text-RSS.html#ItemElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Guid",
          "package": "rss",
          "partial": "Guid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Guid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Image",
          "package": "rss",
          "signature": "Image URI Title Link (Maybe Width) (Maybe Height) (Maybe Description)",
          "source": "src/Text-RSS.html#ChannelElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Image",
          "package": "rss",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Language",
          "package": "rss",
          "signature": "Language String",
          "source": "src/Text-RSS.html#ChannelElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Language",
          "package": "rss",
          "partial": "Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "LastBuildDate",
          "package": "rss",
          "signature": "LastBuildDate UTCTime",
          "source": "src/Text-RSS.html#ChannelElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "LastBuildDate",
          "package": "rss",
          "partial": "Last Build Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:LastBuildDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Link",
          "package": "rss",
          "signature": "Link Link",
          "source": "src/Text-RSS.html#ItemElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Link",
          "package": "rss",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "ManagingEditor",
          "package": "rss",
          "signature": "ManagingEditor Email",
          "source": "src/Text-RSS.html#ChannelElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "ManagingEditor",
          "package": "rss",
          "partial": "Managing Editor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:ManagingEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Monday",
          "package": "rss",
          "signature": "Monday",
          "source": "src/Text-RSS.html#Weekday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Monday",
          "package": "rss",
          "partial": "Monday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Monday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "PubDate",
          "package": "rss",
          "signature": "PubDate UTCTime",
          "source": "src/Text-RSS.html#ItemElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "PubDate",
          "package": "rss",
          "partial": "Pub Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:PubDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "RSS",
          "package": "rss",
          "signature": "RSS Title Link Description [ChannelElem] [Item]",
          "source": "src/Text-RSS.html#RSS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "RSS",
          "normalized": "RSS Title Link Description[ChannelElem][Item]",
          "package": "rss",
          "partial": "RSS",
          "signature": "RSS Title Link Description[ChannelElem][Item]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:RSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Rating",
          "package": "rss",
          "signature": "Rating String",
          "source": "src/Text-RSS.html#ChannelElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Rating",
          "package": "rss",
          "partial": "Rating",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Rating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Saturday",
          "package": "rss",
          "signature": "Saturday",
          "source": "src/Text-RSS.html#Weekday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Saturday",
          "package": "rss",
          "partial": "Saturday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Saturday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "SkipDays",
          "package": "rss",
          "signature": "SkipDays [Weekday]",
          "source": "src/Text-RSS.html#ChannelElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "SkipDays",
          "normalized": "SkipDays[Weekday]",
          "package": "rss",
          "partial": "Skip Days",
          "signature": "SkipDays[Weekday]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:SkipDays"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "SkipHours",
          "package": "rss",
          "signature": "SkipHours [Hour]",
          "source": "src/Text-RSS.html#ChannelElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "SkipHours",
          "normalized": "SkipHours[Hour]",
          "package": "rss",
          "partial": "Skip Hours",
          "signature": "SkipHours[Hour]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:SkipHours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Source",
          "package": "rss",
          "signature": "Source URI Title",
          "source": "src/Text-RSS.html#ItemElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Source",
          "package": "rss",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Sunday",
          "package": "rss",
          "signature": "Sunday",
          "source": "src/Text-RSS.html#Weekday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Sunday",
          "package": "rss",
          "partial": "Sunday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Sunday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "TTL",
          "package": "rss",
          "signature": "TTL Minutes",
          "source": "src/Text-RSS.html#ChannelElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "TTL",
          "package": "rss",
          "partial": "TTL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:TTL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "TextInput",
          "package": "rss",
          "signature": "TextInput Title Description InputName Link",
          "source": "src/Text-RSS.html#ChannelElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "TextInput",
          "package": "rss",
          "partial": "Text Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:TextInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Thursday",
          "package": "rss",
          "signature": "Thursday",
          "source": "src/Text-RSS.html#Weekday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Thursday",
          "package": "rss",
          "partial": "Thursday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Thursday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Title",
          "package": "rss",
          "signature": "Title Title",
          "source": "src/Text-RSS.html#ItemElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Title",
          "package": "rss",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Tuesday",
          "package": "rss",
          "signature": "Tuesday",
          "source": "src/Text-RSS.html#Weekday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Tuesday",
          "package": "rss",
          "partial": "Tuesday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Tuesday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "WebMaster",
          "package": "rss",
          "signature": "WebMaster Email",
          "source": "src/Text-RSS.html#ChannelElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "WebMaster",
          "package": "rss",
          "partial": "Web Master",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:WebMaster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RSS",
          "name": "Wednesday",
          "package": "rss",
          "signature": "Wednesday",
          "source": "src/Text-RSS.html#Weekday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "Wednesday",
          "package": "rss",
          "partial": "Wednesday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:Wednesday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts RSS to XML.\n\u003c/p\u003e",
          "module": "Text.RSS",
          "name": "rssToXML",
          "package": "rss",
          "signature": "RSS -\u003e CFilter ()",
          "source": "src/Text-RSS.html#rssToXML",
          "type": "function"
        },
        "index": {
          "description": "Converts RSS to XML",
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "rssToXML",
          "normalized": "RSS-\u003eCFilter()",
          "package": "rss",
          "partial": "To XML",
          "signature": "RSS-\u003eCFilter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:rssToXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender XML as a string.\n\u003c/p\u003e",
          "module": "Text.RSS",
          "name": "showXML",
          "package": "rss",
          "signature": "CFilter () -\u003e String",
          "source": "src/Text-RSS.html#showXML",
          "type": "function"
        },
        "index": {
          "description": "Render XML as string",
          "hierarchy": "Text RSS",
          "module": "Text.RSS",
          "name": "showXML",
          "normalized": "CFilter()-\u003eString",
          "package": "rss",
          "partial": "XML",
          "signature": "CFilter()-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rss/docs/Text-RSS.html#v:showXML"
      }
    }
  ]
]