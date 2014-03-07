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
        "word": "partly"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for dealing with the old-fasioned and modern Master Boot Records.\n This does not cover things like the GUID partition table or any of the\n weird variations like AAP or NEWLDR.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "MBR",
          "package": "partly",
          "source": "src/System-Disk-Partitions-MBR.html",
          "type": "module"
        },
        "index": {
          "description": "Types for dealing with the old-fasioned and modern Master Boot Records This does not cover things like the GUID partition table or any of the weird variations like AAP or NEWLDR",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "MBR",
          "package": "partly",
          "partial": "MBR",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe structure of a Master Boot Record is as follows...\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "BootRecord",
          "package": "partly",
          "source": "src/System-Disk-Partitions-MBR.html#BootRecord",
          "type": "data"
        },
        "index": {
          "description": "The structure of Master Boot Record is as follows",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "BootRecord",
          "package": "partly",
          "partial": "Boot Record",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#t:BootRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA representation of the cylinder\u003cem\u003ehead\u003c/em\u003esector address in MBRs.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "CHS",
          "package": "partly",
          "source": "src/System-Disk-Partitions-MBR.html#CHS",
          "type": "data"
        },
        "index": {
          "description": "representation of the cylinder head sector address in MBRs",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "CHS",
          "package": "partly",
          "partial": "CHS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#t:CHS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartition entries themselves are somewhat intricate.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "PartitionEntry",
          "package": "partly",
          "source": "src/System-Disk-Partitions-MBR.html#PartitionEntry",
          "type": "data"
        },
        "index": {
          "description": "Partition entries themselves are somewhat intricate",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "PartitionEntry",
          "package": "partly",
          "partial": "Partition Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#t:PartitionEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn MBR partition table consists of (up to?) four partition entries.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "PartitionTable",
          "package": "partly",
          "source": "src/System-Disk-Partitions-MBR.html#PartitionTable",
          "type": "data"
        },
        "index": {
          "description": "An MBR partition table consists of up to four partition entries",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "PartitionTable",
          "package": "partly",
          "partial": "Partition Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#t:PartitionTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe so-called mystery bytes on Windows 95B, 98, 98SE, and Me --\n in fact, they're a timestamp and a drive number. \n See http:\u003cem/\u003ethestarman.pcministry.com\u003cem\u003easm\u003c/em\u003embr/mystery.htm .\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "Timestamp",
          "package": "partly",
          "source": "src/System-Disk-Partitions-MBR.html#Timestamp",
          "type": "data"
        },
        "index": {
          "description": "The so-called mystery bytes on Windows SE and Me in fact they re timestamp and drive number See http thestarman.pcministry.com asm mbr mystery.htm",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "Timestamp",
          "package": "partly",
          "partial": "Timestamp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#t:Timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Disk.Partitions.MBR",
          "name": "BootRecord",
          "package": "partly",
          "signature": "BootRecord",
          "source": "src/System-Disk-Partitions-MBR.html#BootRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "BootRecord",
          "package": "partly",
          "partial": "Boot Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:BootRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Disk.Partitions.MBR",
          "name": "CHS",
          "package": "partly",
          "signature": "CHS",
          "source": "src/System-Disk-Partitions-MBR.html#CHS",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "CHS",
          "package": "partly",
          "partial": "CHS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:CHS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Disk.Partitions.MBR",
          "name": "PartitionEntry",
          "package": "partly",
          "signature": "PartitionEntry",
          "source": "src/System-Disk-Partitions-MBR.html#PartitionEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "PartitionEntry",
          "package": "partly",
          "partial": "Partition Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:PartitionEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Disk.Partitions.MBR",
          "name": "PartitionTable",
          "package": "partly",
          "signature": "PartitionTable",
          "source": "src/System-Disk-Partitions-MBR.html#PartitionTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "PartitionTable",
          "package": "partly",
          "partial": "Partition Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:PartitionTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Disk.Partitions.MBR",
          "name": "Timestamp",
          "package": "partly",
          "signature": "Timestamp",
          "source": "src/System-Disk-Partitions-MBR.html#Timestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "Timestamp",
          "package": "partly",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:Timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinally, the boot signature. \n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "bootSig",
          "package": "partly",
          "signature": "Word16",
          "source": "src/System-Disk-Partitions-MBR.html#BootRecord",
          "type": "function"
        },
        "index": {
          "description": "Finally the boot signature",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "bootSig",
          "package": "partly",
          "partial": "Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:bootSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether this partition entry is marked bootable.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "bootable",
          "package": "partly",
          "signature": "PartitionEntry -\u003e Bool",
          "source": "src/System-Disk-Partitions-MBR.html#bootable",
          "type": "function"
        },
        "index": {
          "description": "Whether this partition entry is marked bootable",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "bootable",
          "normalized": "PartitionEntry-\u003eBool",
          "package": "partly",
          "signature": "PartitionEntry-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:bootable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first piece of data on a disk with a Master Boot Record is some\n bootloader code that gets loaded to address 0x7c00 in memory. N.B:\n this may include the data for the Windows timestamp, if it exists. It\n will also include the optional disk signature, if it exists -- thus this\n field is always 446 bytes long.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "bootloader",
          "package": "partly",
          "signature": "ByteString",
          "source": "src/System-Disk-Partitions-MBR.html#BootRecord",
          "type": "function"
        },
        "index": {
          "description": "The first piece of data on disk with Master Boot Record is some bootloader code that gets loaded to address x7c00 in memory N.B this may include the data for the Windows timestamp if it exists It will also include the optional disk signature if it exists thus this field is always bytes long",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "bootloader",
          "package": "partly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:bootloader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe CHS address of the first absolute sector of the partition.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "chsFirst",
          "package": "partly",
          "signature": "CHS",
          "source": "src/System-Disk-Partitions-MBR.html#PartitionEntry",
          "type": "function"
        },
        "index": {
          "description": "The CHS address of the first absolute sector of the partition",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "chsFirst",
          "package": "partly",
          "partial": "First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:chsFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe CHS address of the last absolute sector of the partition.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "chsLast",
          "package": "partly",
          "signature": "CHS",
          "source": "src/System-Disk-Partitions-MBR.html#PartitionEntry",
          "type": "function"
        },
        "index": {
          "description": "The CHS address of the last absolute sector of the partition",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "chsLast",
          "package": "partly",
          "partial": "Last",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:chsLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe cylinder number; likewise, this is actually a 10-bit number.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "cylinder",
          "package": "partly",
          "signature": "Word16",
          "source": "src/System-Disk-Partitions-MBR.html#CHS",
          "type": "function"
        },
        "index": {
          "description": "The cylinder number likewise this is actually bit number",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "cylinder",
          "package": "partly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:cylinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty bootloader -- 446 empty bytes.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "emptyBootloader",
          "package": "partly",
          "signature": "ByteString",
          "source": "src/System-Disk-Partitions-MBR.html#emptyBootloader",
          "type": "function"
        },
        "index": {
          "description": "The empty bootloader empty bytes",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "emptyBootloader",
          "package": "partly",
          "partial": "Bootloader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:emptyBootloader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Disk.Partitions.MBR",
          "name": "first",
          "package": "partly",
          "signature": "PartitionEntry",
          "source": "src/System-Disk-Partitions-MBR.html#PartitionTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "first",
          "package": "partly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Disk.Partitions.MBR",
          "name": "fourth",
          "package": "partly",
          "signature": "PartitionEntry",
          "source": "src/System-Disk-Partitions-MBR.html#PartitionTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "fourth",
          "package": "partly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:fourth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the optional disk signature from a Bootrecord's bootloader.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "getDiskSignature",
          "package": "partly",
          "signature": "BootRecord -\u003e Maybe Word32",
          "source": "src/System-Disk-Partitions-MBR.html#getDiskSignature",
          "type": "function"
        },
        "index": {
          "description": "Get the optional disk signature from Bootrecord bootloader",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "getDiskSignature",
          "normalized": "BootRecord-\u003eMaybe Word",
          "package": "partly",
          "partial": "Disk Signature",
          "signature": "BootRecord-\u003eMaybe Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:getDiskSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the completely-optional, obsolete disk timestamp used by some old\n versions of Windows.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "getTimestamp",
          "package": "partly",
          "signature": "BootRecord -\u003e Maybe Timestamp",
          "source": "src/System-Disk-Partitions-MBR.html#getTimestamp",
          "type": "function"
        },
        "index": {
          "description": "Get the completely-optional obsolete disk timestamp used by some old versions of Windows",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "getTimestamp",
          "normalized": "BootRecord-\u003eMaybe Timestamp",
          "package": "partly",
          "partial": "Timestamp",
          "signature": "BootRecord-\u003eMaybe Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:getTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe head number.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "head",
          "package": "partly",
          "signature": "Word8",
          "source": "src/System-Disk-Partitions-MBR.html#CHS",
          "type": "function"
        },
        "index": {
          "description": "The head number",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "head",
          "package": "partly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Disk.Partitions.MBR",
          "name": "hours",
          "package": "partly",
          "signature": "Word8",
          "source": "src/System-Disk-Partitions-MBR.html#Timestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "hours",
          "package": "partly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:hours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe logical block address of the first absolute sector.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "lbaFirst",
          "package": "partly",
          "signature": "Word32",
          "source": "src/System-Disk-Partitions-MBR.html#PartitionEntry",
          "type": "function"
        },
        "index": {
          "description": "The logical block address of the first absolute sector",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "lbaFirst",
          "package": "partly",
          "partial": "First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:lbaFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Disk.Partitions.MBR",
          "name": "minutes",
          "package": "partly",
          "signature": "Word8",
          "source": "src/System-Disk-Partitions-MBR.html#Timestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "minutes",
          "package": "partly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:minutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty boot record.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "nullBootRecord",
          "package": "partly",
          "signature": "BootRecord",
          "source": "src/System-Disk-Partitions-MBR.html#nullBootRecord",
          "type": "function"
        },
        "index": {
          "description": "The empty boot record",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "nullBootRecord",
          "package": "partly",
          "partial": "Boot Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:nullBootRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty partition table entry.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "nullPartition",
          "package": "partly",
          "signature": "PartitionEntry",
          "source": "src/System-Disk-Partitions-MBR.html#nullPartition",
          "type": "function"
        },
        "index": {
          "description": "The empty partition table entry",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "nullPartition",
          "package": "partly",
          "partial": "Partition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:nullPartition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty partition table.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "nullPartitionTable",
          "package": "partly",
          "signature": "PartitionTable",
          "source": "src/System-Disk-Partitions-MBR.html#nullPartitionTable",
          "type": "function"
        },
        "index": {
          "description": "The empty partition table",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "nullPartitionTable",
          "package": "partly",
          "partial": "Partition Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:nullPartitionTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA partition type; for specifics, see the following document:\n http:\u003cem/\u003ewww.win.tue.nl\u003cem\u003e~aeb\u003c/em\u003epartitions/partition_types-1.html\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "partitionType",
          "package": "partly",
          "signature": "Word8",
          "source": "src/System-Disk-Partitions-MBR.html#PartitionEntry",
          "type": "function"
        },
        "index": {
          "description": "partition type for specifics see the following document http www.win.tue.nl aeb partitions partition types-1.html",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "partitionType",
          "package": "partly",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:partitionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFour partition table entries.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "partitions",
          "package": "partly",
          "signature": "PartitionTable",
          "source": "src/System-Disk-Partitions-MBR.html#BootRecord",
          "type": "function"
        },
        "index": {
          "description": "Four partition table entries",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "partitions",
          "package": "partly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:partitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Disk.Partitions.MBR",
          "name": "physicalDrive",
          "package": "partly",
          "signature": "Word8",
          "source": "src/System-Disk-Partitions-MBR.html#Timestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "physicalDrive",
          "package": "partly",
          "partial": "Drive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:physicalDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Disk.Partitions.MBR",
          "name": "second",
          "package": "partly",
          "signature": "PartitionEntry",
          "source": "src/System-Disk-Partitions-MBR.html#PartitionTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "second",
          "package": "partly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Disk.Partitions.MBR",
          "name": "seconds",
          "package": "partly",
          "signature": "Word8",
          "source": "src/System-Disk-Partitions-MBR.html#Timestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "seconds",
          "package": "partly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:seconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sector number; this is actually a six-bit number, but\n Haskell doesn't have a convenient way to deal with those.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "sector",
          "package": "partly",
          "signature": "Word8",
          "source": "src/System-Disk-Partitions-MBR.html#CHS",
          "type": "function"
        },
        "index": {
          "description": "The sector number this is actually six-bit number but Haskell doesn have convenient way to deal with those",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "sector",
          "package": "partly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:sector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of sectors in the partition.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "sectors",
          "package": "partly",
          "signature": "Word32",
          "source": "src/System-Disk-Partitions-MBR.html#PartitionEntry",
          "type": "function"
        },
        "index": {
          "description": "The number of sectors in the partition",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "sectors",
          "package": "partly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:sectors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bitfield describing this partition. An 0x00 here means it's inactive;\n having bit 7 set (i.e. \u003e 0x80) means bootable; anything less is invalid.\n\u003c/p\u003e",
          "module": "System.Disk.Partitions.MBR",
          "name": "status",
          "package": "partly",
          "signature": "Word8",
          "source": "src/System-Disk-Partitions-MBR.html#PartitionEntry",
          "type": "function"
        },
        "index": {
          "description": "bitfield describing this partition An x00 here means it inactive having bit set i.e x80 means bootable anything less is invalid",
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "status",
          "package": "partly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Disk.Partitions.MBR",
          "name": "third",
          "package": "partly",
          "signature": "PartitionEntry",
          "source": "src/System-Disk-Partitions-MBR.html#PartitionTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Disk Partitions MBR",
          "module": "System.Disk.Partitions.MBR",
          "name": "third",
          "package": "partly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/partly/docs/System-Disk-Partitions-MBR.html#v:third"
      }
    }
  ]
]