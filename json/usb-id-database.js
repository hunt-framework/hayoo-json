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
        "word": "usb-id-database"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions to acquire a database from \u003ca\u003ehttp://linux-usb.org\u003c/a\u003e. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.USB.IDDB.LinuxUsbIdRepo",
          "name": "LinuxUsbIdRepo",
          "package": "usb-id-database",
          "source": "src/System-USB-IDDB-LinuxUsbIdRepo.html",
          "type": "module"
        },
        "index": {
          "description": "Functions to acquire database from http linux-usb.org",
          "hierarchy": "System USB IDDB LinuxUsbIdRepo",
          "module": "System.USB.IDDB.LinuxUsbIdRepo",
          "name": "LinuxUsbIdRepo",
          "package": "usb-id-database",
          "partial": "Linux Usb Id Repo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB-LinuxUsbIdRepo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://linux-usb.org/usb.ids\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThe source of the database. Download this file for the most up-to-date\n version.\n\u003c/p\u003e",
          "module": "System.USB.IDDB.LinuxUsbIdRepo",
          "name": "dbURL",
          "package": "usb-id-database",
          "signature": "String",
          "source": "src/System-USB-IDDB-LinuxUsbIdRepo.html#dbURL",
          "type": "function"
        },
        "index": {
          "description": "http linux-usb.org usb.ids The source of the database Download this file for the most up-to-date version",
          "hierarchy": "System USB IDDB LinuxUsbIdRepo",
          "module": "System.USB.IDDB.LinuxUsbIdRepo",
          "name": "dbURL",
          "package": "usb-id-database",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB-LinuxUsbIdRepo.html#v:dbURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a database from file. If the file can not be read for some reason an\n error will be thrown.\n\u003c/p\u003e",
          "module": "System.USB.IDDB.LinuxUsbIdRepo",
          "name": "fromFile",
          "package": "usb-id-database",
          "signature": "FilePath -\u003e IO (Maybe IDDB)",
          "source": "src/System-USB-IDDB-LinuxUsbIdRepo.html#fromFile",
          "type": "function"
        },
        "index": {
          "description": "Load database from file If the file can not be read for some reason an error will be thrown",
          "hierarchy": "System USB IDDB LinuxUsbIdRepo",
          "module": "System.USB.IDDB.LinuxUsbIdRepo",
          "name": "fromFile",
          "normalized": "FilePath-\u003eIO(Maybe IDDB)",
          "package": "usb-id-database",
          "partial": "File",
          "signature": "FilePath-\u003eIO(Maybe IDDB)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB-LinuxUsbIdRepo.html#v:fromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a database from a string in the format used by\n \u003ca\u003ehttp://linux-usb.org\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "System.USB.IDDB.LinuxUsbIdRepo",
          "name": "parseDb",
          "package": "usb-id-database",
          "signature": "String -\u003e Maybe IDDB",
          "source": "src/System-USB-IDDB-LinuxUsbIdRepo.html#parseDb",
          "type": "function"
        },
        "index": {
          "description": "Construct database from string in the format used by http linux-usb.org",
          "hierarchy": "System USB IDDB LinuxUsbIdRepo",
          "module": "System.USB.IDDB.LinuxUsbIdRepo",
          "name": "parseDb",
          "normalized": "String-\u003eMaybe IDDB",
          "package": "usb-id-database",
          "partial": "Db",
          "signature": "String-\u003eMaybe IDDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB-LinuxUsbIdRepo.html#v:parseDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a database from a snapshot of the linux-usb.org database which is\n supplied with the package.\n\u003c/p\u003e",
          "module": "System.USB.IDDB.LinuxUsbIdRepo",
          "name": "staticDb",
          "package": "usb-id-database",
          "signature": "IO IDDB",
          "source": "src/System-USB-IDDB-LinuxUsbIdRepo.html#staticDb",
          "type": "function"
        },
        "index": {
          "description": "Load database from snapshot of the linux-usb.org database which is supplied with the package",
          "hierarchy": "System USB IDDB LinuxUsbIdRepo",
          "module": "System.USB.IDDB.LinuxUsbIdRepo",
          "name": "staticDb",
          "package": "usb-id-database",
          "partial": "Db",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB-LinuxUsbIdRepo.html#v:staticDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions to acquire a database from \u003ca\u003ehttp://www.usb.org\u003c/a\u003e. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.USB.IDDB.UsbDotOrg",
          "name": "UsbDotOrg",
          "package": "usb-id-database",
          "source": "src/System-USB-IDDB-UsbDotOrg.html",
          "type": "module"
        },
        "index": {
          "description": "Functions to acquire database from http www.usb.org",
          "hierarchy": "System USB IDDB UsbDotOrg",
          "module": "System.USB.IDDB.UsbDotOrg",
          "name": "UsbDotOrg",
          "package": "usb-id-database",
          "partial": "Usb Dot Org",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB-UsbDotOrg.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://www.usb.org/developers/tools/comp_dump\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThe source of the database. Download this file for the most up-to-date\n version.\n\u003c/p\u003e",
          "module": "System.USB.IDDB.UsbDotOrg",
          "name": "dbURL",
          "package": "usb-id-database",
          "signature": "String",
          "source": "src/System-USB-IDDB-UsbDotOrg.html#dbURL",
          "type": "function"
        },
        "index": {
          "description": "http www.usb.org developers tools comp dump The source of the database Download this file for the most up-to-date version",
          "hierarchy": "System USB IDDB UsbDotOrg",
          "module": "System.USB.IDDB.UsbDotOrg",
          "name": "dbURL",
          "package": "usb-id-database",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB-UsbDotOrg.html#v:dbURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a vendor database from file. If the file can not be read for\n  some reason an error will be thrown.\n\u003c/p\u003e",
          "module": "System.USB.IDDB.UsbDotOrg",
          "name": "fromFile",
          "package": "usb-id-database",
          "signature": "FilePath -\u003e IO (Maybe IDDB)",
          "source": "src/System-USB-IDDB-UsbDotOrg.html#fromFile",
          "type": "function"
        },
        "index": {
          "description": "Load vendor database from file If the file can not be read for some reason an error will be thrown",
          "hierarchy": "System USB IDDB UsbDotOrg",
          "module": "System.USB.IDDB.UsbDotOrg",
          "name": "fromFile",
          "normalized": "FilePath-\u003eIO(Maybe IDDB)",
          "package": "usb-id-database",
          "partial": "File",
          "signature": "FilePath-\u003eIO(Maybe IDDB)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB-UsbDotOrg.html#v:fromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a database from a string in the format used by usb.org.\n\u003c/p\u003e",
          "module": "System.USB.IDDB.UsbDotOrg",
          "name": "parseDb",
          "package": "usb-id-database",
          "signature": "String -\u003e Maybe IDDB",
          "source": "src/System-USB-IDDB-UsbDotOrg.html#parseDb",
          "type": "function"
        },
        "index": {
          "description": "Construct database from string in the format used by usb.org",
          "hierarchy": "System USB IDDB UsbDotOrg",
          "module": "System.USB.IDDB.UsbDotOrg",
          "name": "parseDb",
          "normalized": "String-\u003eMaybe IDDB",
          "package": "usb-id-database",
          "partial": "Db",
          "signature": "String-\u003eMaybe IDDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB-UsbDotOrg.html#v:parseDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a database from a snapshot of the usb.org database which is\n  supplied with the package.\n\u003c/p\u003e",
          "module": "System.USB.IDDB.UsbDotOrg",
          "name": "staticDb",
          "package": "usb-id-database",
          "signature": "IO IDDB",
          "source": "src/System-USB-IDDB-UsbDotOrg.html#staticDb",
          "type": "function"
        },
        "index": {
          "description": "Load database from snapshot of the usb.org database which is supplied with the package",
          "hierarchy": "System USB IDDB UsbDotOrg",
          "module": "System.USB.IDDB.UsbDotOrg",
          "name": "staticDb",
          "package": "usb-id-database",
          "partial": "Db",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB-UsbDotOrg.html#v:staticDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA database of USB identifiers.\n\u003c/p\u003e\u003cp\u003eDatabases with vendor names and identifiers can be loaded from string or file.\n\u003c/p\u003e\u003cp\u003eTo get the most up-to-date database download the files directly from\n\u003ca\u003ehttp://www.usb.org\u003c/a\u003e\nor\n\u003ca\u003ehttp://linux-usb.org\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eEach database's module contains an URL to the database file.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e\nimport System.USB.IDDB\nimport System.USB.IDDB.LinuxUsbIdRepo (staticDb)\nimport Text.Printf (printf)\n\nmain :: IO ()\nmain = do -- Load a snapshot from the linux-usb.org database.\n          db \u003c- \u003ccode\u003estaticDb\u003c/code\u003e\n\u003c/pre\u003e\u003cpre\u003e\n          -- Print the name of vendor 0x1d6b\n          putStrLn $ maybe \"unknown VID!\" id\n                   $ \u003ccode\u003e\u003ca\u003evendorName\u003c/a\u003e\u003c/code\u003e db 0x1d6b\n\u003c/pre\u003e\u003cpre\u003e\n          -- Print the ID of \"Linux Foundation\"\n          putStrLn $ maybe \"unknown vendor name!\" (\u003ccode\u003eprintf\u003c/code\u003e \"0x%04x\")\n                   $ \u003ccode\u003e\u003ca\u003evendorId\u003c/a\u003e\u003c/code\u003e db \"Linux Foundation\"\n\u003c/pre\u003e\u003cpre\u003e\n          -- Print the name of the product with ID 0x0101 from the\n          -- vendor with ID 0x1d6b.\n          putStrLn $ maybe \"unknown PID!\" id\n                   $ \u003ccode\u003e\u003ca\u003eproductName\u003c/a\u003e\u003c/code\u003e db 0x1d6b 0x0101\n\u003c/pre\u003e\u003cpre\u003e\n          -- Print the ID of the product with the name \"Audio Gadget\"\n          -- from the vendor with ID 0x1d6b.\n          putStrLn $ maybe \"unknown product name!\" (\u003ccode\u003eprintf\u003c/code\u003e \"0x%04x\")\n                   $ \u003ccode\u003e\u003ca\u003eproductId\u003c/a\u003e\u003c/code\u003e db 0x1d6b \"Audio Gadget\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.USB.IDDB",
          "name": "IDDB",
          "package": "usb-id-database",
          "source": "src/System-USB-IDDB.html",
          "type": "module"
        },
        "index": {
          "description": "database of USB identifiers Databases with vendor names and identifiers can be loaded from string or file To get the most up-to-date database download the files directly from http www.usb.org or http linux-usb.org Each database module contains an URL to the database file Example usage import System.USB.IDDB import System.USB.IDDB.LinuxUsbIdRepo staticDb import Text.Printf printf main IO main do Load snapshot from the linux-usb.org database db staticDb Print the name of vendor x1d6b putStrLn maybe unknown VID id vendorName db x1d6b Print the ID of Linux Foundation putStrLn maybe unknown vendor name printf vendorId db Linux Foundation Print the name of the product with ID x0101 from the vendor with ID x1d6b putStrLn maybe unknown PID id productName db x1d6b x0101 Print the ID of the product with the name Audio Gadget from the vendor with ID x1d6b putStrLn maybe unknown product name printf productId db x1d6b Audio Gadget",
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "IDDB",
          "package": "usb-id-database",
          "partial": "IDDB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA database of USB identifiers. Contains both vendor identifiers and product\n identifiers.\n\u003c/p\u003e",
          "module": "System.USB.IDDB",
          "name": "IDDB",
          "package": "usb-id-database",
          "source": "src/System-USB-IDDB-Base.html#IDDB",
          "type": "data"
        },
        "index": {
          "description": "database of USB identifiers Contains both vendor identifiers and product identifiers",
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "IDDB",
          "package": "usb-id-database",
          "partial": "IDDB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#t:IDDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IDDB",
          "name": "audioClassTerminalTypeName",
          "package": "usb-id-database",
          "signature": "IDDB-\u003e Int-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "audioClassTerminalTypeName",
          "normalized": "IDDB-\u003eInt-\u003eMaybe String",
          "package": "usb-id-database",
          "partial": "Class Terminal Type Name",
          "signature": "IDDB-\u003eInt-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#v:audioClassTerminalTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IDDB",
          "name": "className",
          "package": "usb-id-database",
          "signature": "IDDB-\u003e Int-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "className",
          "normalized": "IDDB-\u003eInt-\u003eMaybe String",
          "package": "usb-id-database",
          "partial": "Name",
          "signature": "IDDB-\u003eInt-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#v:className"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty database.\n\u003c/p\u003e",
          "module": "System.USB.IDDB",
          "name": "emptyDb",
          "package": "usb-id-database",
          "signature": "IDDB",
          "source": "src/System-USB-IDDB-Base.html#emptyDb",
          "type": "function"
        },
        "index": {
          "description": "An empty database",
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "emptyDb",
          "package": "usb-id-database",
          "partial": "Db",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#v:emptyDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IDDB",
          "name": "hidDescCountryCodeName",
          "package": "usb-id-database",
          "signature": "IDDB-\u003e Int-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "hidDescCountryCodeName",
          "normalized": "IDDB-\u003eInt-\u003eMaybe String",
          "package": "usb-id-database",
          "partial": "Desc Country Code Name",
          "signature": "IDDB-\u003eInt-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#v:hidDescCountryCodeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IDDB",
          "name": "hidDescItemName",
          "package": "usb-id-database",
          "signature": "IDDB-\u003e Int-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "hidDescItemName",
          "normalized": "IDDB-\u003eInt-\u003eMaybe String",
          "package": "usb-id-database",
          "partial": "Desc Item Name",
          "signature": "IDDB-\u003eInt-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#v:hidDescItemName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IDDB",
          "name": "hidDescTypeName",
          "package": "usb-id-database",
          "signature": "IDDB-\u003e Int-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "hidDescTypeName",
          "normalized": "IDDB-\u003eInt-\u003eMaybe String",
          "package": "usb-id-database",
          "partial": "Desc Type Name",
          "signature": "IDDB-\u003eInt-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#v:hidDescTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IDDB",
          "name": "hidUsageName",
          "package": "usb-id-database",
          "signature": "IDDB-\u003e Int-\u003e Int-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "hidUsageName",
          "normalized": "IDDB-\u003eInt-\u003eInt-\u003eMaybe String",
          "package": "usb-id-database",
          "partial": "Usage Name",
          "signature": "IDDB-\u003eInt-\u003eInt-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#v:hidUsageName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IDDB",
          "name": "hidUsagePageName",
          "package": "usb-id-database",
          "signature": "IDDB-\u003e Int-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "hidUsagePageName",
          "normalized": "IDDB-\u003eInt-\u003eMaybe String",
          "package": "usb-id-database",
          "partial": "Usage Page Name",
          "signature": "IDDB-\u003eInt-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#v:hidUsagePageName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IDDB",
          "name": "langName",
          "package": "usb-id-database",
          "signature": "IDDB-\u003e Int-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "langName",
          "normalized": "IDDB-\u003eInt-\u003eMaybe String",
          "package": "usb-id-database",
          "partial": "Name",
          "signature": "IDDB-\u003eInt-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#v:langName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IDDB",
          "name": "physicalDescBiasName",
          "package": "usb-id-database",
          "signature": "IDDB-\u003e Int-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "physicalDescBiasName",
          "normalized": "IDDB-\u003eInt-\u003eMaybe String",
          "package": "usb-id-database",
          "partial": "Desc Bias Name",
          "signature": "IDDB-\u003eInt-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#v:physicalDescBiasName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IDDB",
          "name": "physicalDescItemName",
          "package": "usb-id-database",
          "signature": "IDDB-\u003e Int-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "physicalDescItemName",
          "normalized": "IDDB-\u003eInt-\u003eMaybe String",
          "package": "usb-id-database",
          "partial": "Desc Item Name",
          "signature": "IDDB-\u003eInt-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#v:physicalDescItemName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IDDB",
          "name": "productId",
          "package": "usb-id-database",
          "signature": "IDDB-\u003e Int-\u003e String-\u003e Maybe Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "productId",
          "normalized": "IDDB-\u003eInt-\u003eString-\u003eMaybe Int",
          "package": "usb-id-database",
          "partial": "Id",
          "signature": "IDDB-\u003eInt-\u003eString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#v:productId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IDDB",
          "name": "productName",
          "package": "usb-id-database",
          "signature": "IDDB-\u003e Int-\u003e Int-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "productName",
          "normalized": "IDDB-\u003eInt-\u003eInt-\u003eMaybe String",
          "package": "usb-id-database",
          "partial": "Name",
          "signature": "IDDB-\u003eInt-\u003eInt-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#v:productName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IDDB",
          "name": "protocolName",
          "package": "usb-id-database",
          "signature": "IDDB-\u003e Int-\u003e Int-\u003e Int-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "protocolName",
          "normalized": "IDDB-\u003eInt-\u003eInt-\u003eInt-\u003eMaybe String",
          "package": "usb-id-database",
          "partial": "Name",
          "signature": "IDDB-\u003eInt-\u003eInt-\u003eInt-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#v:protocolName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IDDB",
          "name": "subClassName",
          "package": "usb-id-database",
          "signature": "IDDB-\u003e Int-\u003e Int-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "subClassName",
          "normalized": "IDDB-\u003eInt-\u003eInt-\u003eMaybe String",
          "package": "usb-id-database",
          "partial": "Class Name",
          "signature": "IDDB-\u003eInt-\u003eInt-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#v:subClassName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IDDB",
          "name": "subLangName",
          "package": "usb-id-database",
          "signature": "IDDB-\u003e Int-\u003e Int-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "subLangName",
          "normalized": "IDDB-\u003eInt-\u003eInt-\u003eMaybe String",
          "package": "usb-id-database",
          "partial": "Lang Name",
          "signature": "IDDB-\u003eInt-\u003eInt-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#v:subLangName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IDDB",
          "name": "vendorId",
          "package": "usb-id-database",
          "signature": "IDDB-\u003e String-\u003e Maybe Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "vendorId",
          "normalized": "IDDB-\u003eString-\u003eMaybe Int",
          "package": "usb-id-database",
          "partial": "Id",
          "signature": "IDDB-\u003eString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#v:vendorId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IDDB",
          "name": "vendorName",
          "package": "usb-id-database",
          "signature": "IDDB-\u003e Int-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "vendorName",
          "normalized": "IDDB-\u003eInt-\u003eMaybe String",
          "package": "usb-id-database",
          "partial": "Name",
          "signature": "IDDB-\u003eInt-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#v:vendorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IDDB",
          "name": "videoClassTerminalTypeName",
          "package": "usb-id-database",
          "signature": "IDDB-\u003e Int-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IDDB",
          "module": "System.USB.IDDB",
          "name": "videoClassTerminalTypeName",
          "normalized": "IDDB-\u003eInt-\u003eMaybe String",
          "package": "usb-id-database",
          "partial": "Class Terminal Type Name",
          "signature": "IDDB-\u003eInt-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-id-database/docs/System-USB-IDDB.html#v:videoClassTerminalTypeName"
      }
    }
  ]
]