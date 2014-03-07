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
        "word": "bindings-hdf5"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "HighLevelAPI",
          "package": "bindings-hdf5",
          "source": "src/Bindings-HDF5-HighLevelAPI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "HighLevelAPI",
          "package": "bindings-hdf5",
          "partial": "High Level API",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSattach_scale",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e C'hid_t -\u003e CUInt -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5DSattach_scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSattach_scale",
          "normalized": "C'hid_t-\u003eC'hid_t-\u003eCUInt-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "DSattach",
          "signature": "C'hid_t-\u003eC'hid_t-\u003eCUInt-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5DSattach_scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSdetach_scale",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e C'hid_t -\u003e CUInt -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5DSdetach_scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSdetach_scale",
          "normalized": "C'hid_t-\u003eC'hid_t-\u003eCUInt-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "DSdetach",
          "signature": "C'hid_t-\u003eC'hid_t-\u003eCUInt-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5DSdetach_scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSget_label",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CUInt -\u003e CString -\u003e CSize -\u003e IO C'ssize_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5DSget_label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSget_label",
          "normalized": "C'hid_t-\u003eCUInt-\u003eCString-\u003eCSize-\u003eIO C'ssize_t",
          "package": "bindings-hdf5",
          "partial": "DSget",
          "signature": "C'hid_t-\u003eCUInt-\u003eCString-\u003eCSize-\u003eIO C'ssize_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5DSget_label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSget_num_scales",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CUInt -\u003e IO CInt",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5DSget_num_scales",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSget_num_scales",
          "normalized": "C'hid_t-\u003eCUInt-\u003eIO CInt",
          "package": "bindings-hdf5",
          "partial": "DSget",
          "signature": "C'hid_t-\u003eCUInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5DSget_num_scales"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSget_scale_name",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CSize -\u003e IO C'ssize_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5DSget_scale_name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSget_scale_name",
          "normalized": "C'hid_t-\u003eCString-\u003eCSize-\u003eIO C'ssize_t",
          "package": "bindings-hdf5",
          "partial": "DSget",
          "signature": "C'hid_t-\u003eCString-\u003eCSize-\u003eIO C'ssize_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5DSget_scale_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSis_attached",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e C'hid_t -\u003e CUInt -\u003e IO C'htri_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5DSis_attached",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSis_attached",
          "normalized": "C'hid_t-\u003eC'hid_t-\u003eCUInt-\u003eIO C'htri_t",
          "package": "bindings-hdf5",
          "partial": "DSis",
          "signature": "C'hid_t-\u003eC'hid_t-\u003eCUInt-\u003eIO C'htri_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5DSis_attached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSis_scale",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e IO C'htri_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5DSis_scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSis_scale",
          "normalized": "C'hid_t-\u003eIO C'htri_t",
          "package": "bindings-hdf5",
          "partial": "DSis",
          "signature": "C'hid_t-\u003eIO C'htri_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5DSis_scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSiterate_scales",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CUInt -\u003e Ptr CInt -\u003e C'H5DS_iterate_t -\u003e Ptr () -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5DSiterate_scales",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSiterate_scales",
          "normalized": "C'hid_t-\u003eCUInt-\u003ePtr CInt-\u003eC'H DS_iterate_t-\u003ePtr()-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "DSiterate",
          "signature": "C'hid_t-\u003eCUInt-\u003ePtr CInt-\u003eC'H DS_iterate_t-\u003ePtr()-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5DSiterate_scales"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSset_label",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CUInt -\u003e CString -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5DSset_label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSset_label",
          "normalized": "C'hid_t-\u003eCUInt-\u003eCString-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "DSset",
          "signature": "C'hid_t-\u003eCUInt-\u003eCString-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5DSset_label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSset_scale",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5DSset_scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5DSset_scale",
          "normalized": "C'hid_t-\u003eCString-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "DSset",
          "signature": "C'hid_t-\u003eCString-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5DSset_scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMget_image_info",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CString -\u003e Ptr C'hssize_t -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5IMget_image_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMget_image_info",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCString-\u003ePtr C'hssize_t-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "IMget",
          "signature": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCString-\u003ePtr C'hssize_t-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5IMget_image_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMget_npalettes",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr C'hssize_t -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5IMget_npalettes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMget_npalettes",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr C'hssize_t-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "IMget",
          "signature": "C'hid_t-\u003eCString-\u003ePtr C'hssize_t-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5IMget_npalettes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMget_palette",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr CUChar -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5IMget_palette",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMget_palette",
          "normalized": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr CUChar-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "IMget",
          "signature": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr CUChar-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5IMget_palette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMget_palette_info",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr C'hsize_t -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5IMget_palette_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMget_palette_info",
          "normalized": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "IMget",
          "signature": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5IMget_palette_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMis_image",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5IMis_image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMis_image",
          "normalized": "C'hid_t-\u003eCString-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "IMis",
          "signature": "C'hid_t-\u003eCString-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5IMis_image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMis_palette",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5IMis_palette",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMis_palette",
          "normalized": "C'hid_t-\u003eCString-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "IMis",
          "signature": "C'hid_t-\u003eCString-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5IMis_palette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMlink_palette",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5IMlink_palette",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMlink_palette",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "IMlink",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5IMlink_palette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMmake_image_24bit",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CString -\u003e Ptr CUChar -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5IMmake_image_24bit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMmake_image_24bit",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCString-\u003ePtr CUChar-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "IMmake",
          "signature": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCString-\u003ePtr CUChar-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5IMmake_image_24bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMmake_image_8bit",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e Ptr CUChar -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5IMmake_image_8bit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMmake_image_8bit",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003ePtr CUChar-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "IMmake",
          "signature": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003ePtr CUChar-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5IMmake_image_8bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMmake_palette",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr CUChar -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5IMmake_palette",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMmake_palette",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr CUChar-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "IMmake",
          "signature": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr CUChar-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5IMmake_palette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMread_image",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr CUChar -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5IMread_image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMread_image",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr CUChar-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "IMread",
          "signature": "C'hid_t-\u003eCString-\u003ePtr CUChar-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5IMread_image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMunlink_palette",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5IMunlink_palette",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5IMunlink_palette",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "IMunlink",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5IMunlink_palette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTdtype_to_text",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e C'H5LT_lang_t -\u003e Ptr CSize -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTdtype_to_text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTdtype_to_text",
          "normalized": "C'hid_t-\u003eCString-\u003eC'H LT_lang_t-\u003ePtr CSize-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTdtype",
          "signature": "C'hid_t-\u003eCString-\u003eC'H LT_lang_t-\u003ePtr CSize-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTdtype_to_text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTfind_attribute",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTfind_attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTfind_attribute",
          "normalized": "C'hid_t-\u003eCString-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTfind",
          "signature": "C'hid_t-\u003eCString-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTfind_attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTfind_dataset",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTfind_dataset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTfind_dataset",
          "normalized": "C'hid_t-\u003eCString-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTfind",
          "signature": "C'hid_t-\u003eCString-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTfind_dataset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e C'hid_t -\u003e Ptr () -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTget_attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003eC'hid_t-\u003ePtr()-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003eC'hid_t-\u003ePtr()-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTget_attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_char",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e Ptr Char -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTget_attribute_char",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_char",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr Char-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr Char-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTget_attribute_char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_double",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CDouble -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTget_attribute_double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_double",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CDouble-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CDouble-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTget_attribute_double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_float",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CFloat -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTget_attribute_float",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_float",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CFloat-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CFloat-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTget_attribute_float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_info",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'H5T_class_t -\u003e Ptr CSize -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTget_attribute_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_info",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'H T_class_t-\u003ePtr CSize-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'H T_class_t-\u003ePtr CSize-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTget_attribute_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_int",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CInt -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTget_attribute_int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_int",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CInt-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CInt-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTget_attribute_int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_long",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CLong -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTget_attribute_long",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_long",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CLong-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CLong-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTget_attribute_long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_long_long",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CLLong -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTget_attribute_long_long",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_long_long",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CLLong-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CLLong-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTget_attribute_long_long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_ndims",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CInt -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTget_attribute_ndims",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_ndims",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CInt-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CInt-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTget_attribute_ndims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_short",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CShort -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTget_attribute_short",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_short",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CShort-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CShort-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTget_attribute_short"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_string",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e CString -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTget_attribute_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_string",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003eCString-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003eCString-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTget_attribute_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_uchar",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CUChar -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTget_attribute_uchar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_attribute_uchar",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CUChar-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CUChar-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTget_attribute_uchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_dataset_info",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'H5T_class_t -\u003e Ptr CSize -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTget_dataset_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_dataset_info",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'H T_class_t-\u003ePtr CSize-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'H T_class_t-\u003ePtr CSize-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTget_dataset_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_dataset_ndims",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr CInt -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTget_dataset_ndims",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTget_dataset_ndims",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr CInt-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "C'hid_t-\u003eCString-\u003ePtr CInt-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTget_dataset_ndims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTmake_dataset",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr C'hsize_t -\u003e C'hid_t -\u003e Ptr () -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTmake_dataset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTmake_dataset",
          "normalized": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003eC'hid_t-\u003ePtr()-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTmake",
          "signature": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003eC'hid_t-\u003ePtr()-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTmake_dataset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTmake_dataset_char",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr C'hsize_t -\u003e CString -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTmake_dataset_char",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTmake_dataset_char",
          "normalized": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003eCString-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTmake",
          "signature": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003eCString-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTmake_dataset_char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTmake_dataset_double",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr C'hsize_t -\u003e Ptr CDouble -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTmake_dataset_double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTmake_dataset_double",
          "normalized": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CDouble-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTmake",
          "signature": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CDouble-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTmake_dataset_double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTmake_dataset_float",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr C'hsize_t -\u003e Ptr CFloat -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTmake_dataset_float",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTmake_dataset_float",
          "normalized": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CFloat-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTmake",
          "signature": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CFloat-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTmake_dataset_float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTmake_dataset_int",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr C'hsize_t -\u003e Ptr CInt -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTmake_dataset_int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTmake_dataset_int",
          "normalized": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CInt-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTmake",
          "signature": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CInt-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTmake_dataset_int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTmake_dataset_long",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr C'hsize_t -\u003e Ptr CLong -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTmake_dataset_long",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTmake_dataset_long",
          "normalized": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CLong-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTmake",
          "signature": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CLong-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTmake_dataset_long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTmake_dataset_short",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr C'hsize_t -\u003e Ptr CShort -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTmake_dataset_short",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTmake_dataset_short",
          "normalized": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CShort-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTmake",
          "signature": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CShort-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTmake_dataset_short"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTmake_dataset_string",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTmake_dataset_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTmake_dataset_string",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTmake",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTmake_dataset_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTopen_file_image",
          "package": "bindings-hdf5",
          "signature": "Ptr () -\u003e CSize -\u003e CUInt -\u003e IO C'hid_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTopen_file_image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTopen_file_image",
          "normalized": "Ptr()-\u003eCSize-\u003eCUInt-\u003eIO C'hid_t",
          "package": "bindings-hdf5",
          "partial": "LTopen",
          "signature": "Ptr()-\u003eCSize-\u003eCUInt-\u003eIO C'hid_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTopen_file_image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTpath_valid",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e C'hbool_t -\u003e IO C'htri_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTpath_valid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTpath_valid",
          "normalized": "C'hid_t-\u003eCString-\u003eC'hbool_t-\u003eIO C'htri_t",
          "package": "bindings-hdf5",
          "partial": "LTpath",
          "signature": "C'hid_t-\u003eCString-\u003eC'hbool_t-\u003eIO C'htri_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTpath_valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTread_dataset",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e C'hid_t -\u003e Ptr () -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTread_dataset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTread_dataset",
          "normalized": "C'hid_t-\u003eCString-\u003eC'hid_t-\u003ePtr()-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTread",
          "signature": "C'hid_t-\u003eCString-\u003eC'hid_t-\u003ePtr()-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTread_dataset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTread_dataset_char",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTread_dataset_char",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTread_dataset_char",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTread",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTread_dataset_char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTread_dataset_double",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr CDouble -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTread_dataset_double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTread_dataset_double",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr CDouble-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTread",
          "signature": "C'hid_t-\u003eCString-\u003ePtr CDouble-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTread_dataset_double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTread_dataset_float",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr CFloat -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTread_dataset_float",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTread_dataset_float",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr CFloat-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTread",
          "signature": "C'hid_t-\u003eCString-\u003ePtr CFloat-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTread_dataset_float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTread_dataset_int",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr CInt -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTread_dataset_int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTread_dataset_int",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr CInt-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTread",
          "signature": "C'hid_t-\u003eCString-\u003ePtr CInt-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTread_dataset_int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTread_dataset_long",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr CLong -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTread_dataset_long",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTread_dataset_long",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr CLong-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTread",
          "signature": "C'hid_t-\u003eCString-\u003ePtr CLong-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTread_dataset_long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTread_dataset_short",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr CShort -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTread_dataset_short",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTread_dataset_short",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr CShort-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTread",
          "signature": "C'hid_t-\u003eCString-\u003ePtr CShort-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTread_dataset_short"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTread_dataset_string",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTread_dataset_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTread_dataset_string",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTread",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTread_dataset_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTset_attribute_char",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e CString -\u003e Ptr C'hsize_t -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTset_attribute_char",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTset_attribute_char",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003eCString-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTset",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003eCString-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTset_attribute_char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTset_attribute_double",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CDouble -\u003e CSize -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTset_attribute_double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTset_attribute_double",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CDouble-\u003eCSize-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTset",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CDouble-\u003eCSize-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTset_attribute_double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTset_attribute_float",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CFloat -\u003e Ptr C'hsize_t -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTset_attribute_float",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTset_attribute_float",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CFloat-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTset",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CFloat-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTset_attribute_float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTset_attribute_int",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CInt -\u003e CSize -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTset_attribute_int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTset_attribute_int",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CInt-\u003eCSize-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTset",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CInt-\u003eCSize-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTset_attribute_int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTset_attribute_long",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CLong -\u003e Ptr C'hsize_t -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTset_attribute_long",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTset_attribute_long",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CLong-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTset",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CLong-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTset_attribute_long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTset_attribute_long_long",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CLLong -\u003e CSize -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTset_attribute_long_long",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTset_attribute_long_long",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CLLong-\u003eCSize-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTset",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CLLong-\u003eCSize-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTset_attribute_long_long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTset_attribute_short",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CShort -\u003e Ptr C'hsize_t -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTset_attribute_short",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTset_attribute_short",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CShort-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTset",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr CShort-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTset_attribute_short"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTset_attribute_string",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e CString -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTset_attribute_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTset_attribute_string",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003eCString-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "LTset",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003eCString-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTset_attribute_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTtext_to_dtype",
          "package": "bindings-hdf5",
          "signature": "CString -\u003e C'H5LT_lang_t -\u003e IO C'hid_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5LTtext_to_dtype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5LTtext_to_dtype",
          "normalized": "CString-\u003eC'H LT_lang_t-\u003eIO C'hid_t",
          "package": "bindings-hdf5",
          "partial": "LTtext",
          "signature": "CString-\u003eC'H LT_lang_t-\u003eIO C'hid_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5LTtext_to_dtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTappend",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CSize -\u003e Ptr () -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5PTappend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTappend",
          "normalized": "C'hid_t-\u003eCSize-\u003ePtr()-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "PTappend",
          "signature": "C'hid_t-\u003eCSize-\u003ePtr()-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5PTappend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTclose",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5PTclose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTclose",
          "normalized": "C'hid_t-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "PTclose",
          "signature": "C'hid_t-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5PTclose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTcreate_fl",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e C'hid_t -\u003e Ptr C'hsize_t -\u003e CInt -\u003e IO C'hid_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5PTcreate_fl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTcreate_fl",
          "normalized": "C'hid_t-\u003eCString-\u003eC'hid_t-\u003ePtr C'hsize_t-\u003eCInt-\u003eIO C'hid_t",
          "package": "bindings-hdf5",
          "partial": "PTcreate",
          "signature": "C'hid_t-\u003eCString-\u003eC'hid_t-\u003ePtr C'hsize_t-\u003eCInt-\u003eIO C'hid_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5PTcreate_fl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTcreate_index",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5PTcreate_index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTcreate_index",
          "normalized": "C'hid_t-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "PTcreate",
          "signature": "C'hid_t-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5PTcreate_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTget_next",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CSize -\u003e Ptr () -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5PTget_next",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTget_next",
          "normalized": "C'hid_t-\u003eCSize-\u003ePtr()-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "PTget",
          "signature": "C'hid_t-\u003eCSize-\u003ePtr()-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5PTget_next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTget_num_packets",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e Ptr C'hsize_t -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5PTget_num_packets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTget_num_packets",
          "normalized": "C'hid_t-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "PTget",
          "signature": "C'hid_t-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5PTget_num_packets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTis_valid",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5PTis_valid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTis_valid",
          "normalized": "C'hid_t-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "PTis",
          "signature": "C'hid_t-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5PTis_valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTopen",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e IO C'hid_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5PTopen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTopen",
          "normalized": "C'hid_t-\u003eCString-\u003eIO C'hid_t",
          "package": "bindings-hdf5",
          "partial": "PTopen",
          "signature": "C'hid_t-\u003eCString-\u003eIO C'hid_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5PTopen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTread_packets",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr () -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5PTread_packets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTread_packets",
          "normalized": "C'hid_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr()-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "PTread",
          "signature": "C'hid_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr()-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5PTread_packets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTset_index",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e Ptr C'hsize_t -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5PTset_index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5PTset_index",
          "normalized": "C'hid_t-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "PTset",
          "signature": "C'hid_t-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5PTset_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBadd_records_from",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5TBadd_records_from",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBadd_records_from",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCString-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "TBadd",
          "signature": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCString-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5TBadd_records_from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBappend_records",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr CSize -\u003e Ptr CSize -\u003e Ptr () -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5TBappend_records",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBappend_records",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "TBappend",
          "signature": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5TBappend_records"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBcombine_tables",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e C'hid_t -\u003e CString -\u003e CString -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5TBcombine_tables",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBcombine_tables",
          "normalized": "C'hid_t-\u003eCString-\u003eC'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "TBcombine",
          "signature": "C'hid_t-\u003eCString-\u003eC'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5TBcombine_tables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBdelete_field",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5TBdelete_field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBdelete_field",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "TBdelete",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5TBdelete_field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBdelete_record",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5TBdelete_record",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBdelete_record",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "TBdelete",
          "signature": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5TBdelete_record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBget_field_info",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr CString -\u003e Ptr CSize -\u003e Ptr CSize -\u003e Ptr CSize -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5TBget_field_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBget_field_info",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr CString-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr CSize-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "TBget",
          "signature": "C'hid_t-\u003eCString-\u003ePtr CString-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr CSize-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5TBget_field_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBget_table_info",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5TBget_table_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBget_table_info",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "TBget",
          "signature": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5TBget_table_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBinsert_field",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e C'hid_t -\u003e Ptr C'hsize_t -\u003e Ptr () -\u003e Ptr () -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5TBinsert_field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBinsert_field",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003eC'hid_t-\u003ePtr C'hsize_t-\u003ePtr()-\u003ePtr()-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "TBinsert",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003eC'hid_t-\u003ePtr C'hsize_t-\u003ePtr()-\u003ePtr()-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5TBinsert_field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBinsert_record",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr CSize -\u003e Ptr () -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5TBinsert_record",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBinsert_record",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "TBinsert",
          "signature": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5TBinsert_record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBmake_table",
          "package": "bindings-hdf5",
          "signature": "CString -\u003e C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr CString -\u003e Ptr CSize -\u003e Ptr C'hid_t -\u003e Ptr C'hsize_t -\u003e Ptr () -\u003e CInt -\u003e Ptr () -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5TBmake_table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBmake_table",
          "normalized": "CString-\u003eC'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CString-\u003ePtr CSize-\u003ePtr C'hid_t-\u003ePtr C'hsize_t-\u003ePtr()-\u003eCInt-\u003ePtr()-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "TBmake",
          "signature": "CString-\u003eC'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CString-\u003ePtr CSize-\u003ePtr C'hid_t-\u003ePtr C'hsize_t-\u003ePtr()-\u003eCInt-\u003ePtr()-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5TBmake_table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBread_fields_index",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr CInt -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr CSize -\u003e Ptr CSize -\u003e Ptr () -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5TBread_fields_index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBread_fields_index",
          "normalized": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr CInt-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "TBread",
          "signature": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr CInt-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5TBread_fields_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBread_fields_name",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr CSize -\u003e Ptr CSize -\u003e Ptr () -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5TBread_fields_name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBread_fields_name",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "TBread",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5TBread_fields_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBread_records",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr CSize -\u003e Ptr CSize -\u003e Ptr () -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5TBread_records",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBread_records",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "TBread",
          "signature": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5TBread_records"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBread_table",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CSize -\u003e Ptr CSize -\u003e Ptr CSize -\u003e Ptr () -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5TBread_table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBread_table",
          "normalized": "C'hid_t-\u003eCString-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "TBread",
          "signature": "C'hid_t-\u003eCString-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5TBread_table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBwrite_fields_index",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr CInt -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr CSize -\u003e Ptr CSize -\u003e Ptr () -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5TBwrite_fields_index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBwrite_fields_index",
          "normalized": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr CInt-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "TBwrite",
          "signature": "C'hid_t-\u003eCString-\u003eCInt-\u003ePtr CInt-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5TBwrite_fields_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBwrite_fields_name",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr CSize -\u003e Ptr CSize -\u003e Ptr () -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5TBwrite_fields_name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBwrite_fields_name",
          "normalized": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "TBwrite",
          "signature": "C'hid_t-\u003eCString-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5TBwrite_fields_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBwrite_records",
          "package": "bindings-hdf5",
          "signature": "C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr CSize -\u003e Ptr CSize -\u003e Ptr () -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#c%27H5TBwrite_records",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "c'H5TBwrite_records",
          "normalized": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "TBwrite",
          "signature": "C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:c-39-H5TBwrite_records"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSattach_scale",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e C'hid_t -\u003e CUInt -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5DSattach_scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSattach_scale",
          "normalized": "FunPtr(C'hid_t-\u003eC'hid_t-\u003eCUInt-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "DSattach",
          "signature": "FunPtr(C'hid_t-\u003eC'hid_t-\u003eCUInt-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5DSattach_scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSdetach_scale",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e C'hid_t -\u003e CUInt -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5DSdetach_scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSdetach_scale",
          "normalized": "FunPtr(C'hid_t-\u003eC'hid_t-\u003eCUInt-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "DSdetach",
          "signature": "FunPtr(C'hid_t-\u003eC'hid_t-\u003eCUInt-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5DSdetach_scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSget_label",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CUInt -\u003e CString -\u003e CSize -\u003e IO C'ssize_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5DSget_label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSget_label",
          "normalized": "FunPtr(C'hid_t-\u003eCUInt-\u003eCString-\u003eCSize-\u003eIO C'ssize_t)",
          "package": "bindings-hdf5",
          "partial": "DSget",
          "signature": "FunPtr(C'hid_t-\u003eCUInt-\u003eCString-\u003eCSize-\u003eIO C'ssize_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5DSget_label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSget_num_scales",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CUInt -\u003e IO CInt)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5DSget_num_scales",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSget_num_scales",
          "normalized": "FunPtr(C'hid_t-\u003eCUInt-\u003eIO CInt)",
          "package": "bindings-hdf5",
          "partial": "DSget",
          "signature": "FunPtr(C'hid_t-\u003eCUInt-\u003eIO CInt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5DSget_num_scales"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSget_scale_name",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CSize -\u003e IO C'ssize_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5DSget_scale_name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSget_scale_name",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCSize-\u003eIO C'ssize_t)",
          "package": "bindings-hdf5",
          "partial": "DSget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCSize-\u003eIO C'ssize_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5DSget_scale_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSis_attached",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e C'hid_t -\u003e CUInt -\u003e IO C'htri_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5DSis_attached",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSis_attached",
          "normalized": "FunPtr(C'hid_t-\u003eC'hid_t-\u003eCUInt-\u003eIO C'htri_t)",
          "package": "bindings-hdf5",
          "partial": "DSis",
          "signature": "FunPtr(C'hid_t-\u003eC'hid_t-\u003eCUInt-\u003eIO C'htri_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5DSis_attached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSis_scale",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e IO C'htri_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5DSis_scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSis_scale",
          "normalized": "FunPtr(C'hid_t-\u003eIO C'htri_t)",
          "package": "bindings-hdf5",
          "partial": "DSis",
          "signature": "FunPtr(C'hid_t-\u003eIO C'htri_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5DSis_scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSiterate_scales",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CUInt -\u003e Ptr CInt -\u003e C'H5DS_iterate_t -\u003e Ptr () -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5DSiterate_scales",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSiterate_scales",
          "normalized": "FunPtr(C'hid_t-\u003eCUInt-\u003ePtr CInt-\u003eC'H DS_iterate_t-\u003ePtr()-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "DSiterate",
          "signature": "FunPtr(C'hid_t-\u003eCUInt-\u003ePtr CInt-\u003eC'H DS_iterate_t-\u003ePtr()-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5DSiterate_scales"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSset_label",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CUInt -\u003e CString -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5DSset_label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSset_label",
          "normalized": "FunPtr(C'hid_t-\u003eCUInt-\u003eCString-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "DSset",
          "signature": "FunPtr(C'hid_t-\u003eCUInt-\u003eCString-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5DSset_label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSset_scale",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5DSset_scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5DSset_scale",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "DSset",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5DSset_scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMget_image_info",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CString -\u003e Ptr C'hssize_t -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5IMget_image_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMget_image_info",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCString-\u003ePtr C'hssize_t-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "IMget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCString-\u003ePtr C'hssize_t-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5IMget_image_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMget_npalettes",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr C'hssize_t -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5IMget_npalettes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMget_npalettes",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hssize_t-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "IMget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hssize_t-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5IMget_npalettes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMget_palette",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr CUChar -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5IMget_palette",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMget_palette",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr CUChar-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "IMget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr CUChar-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5IMget_palette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMget_palette_info",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr C'hsize_t -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5IMget_palette_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMget_palette_info",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "IMget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5IMget_palette_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMis_image",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5IMis_image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMis_image",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "IMis",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5IMis_image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMis_palette",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5IMis_palette",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMis_palette",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "IMis",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5IMis_palette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMlink_palette",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5IMlink_palette",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMlink_palette",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "IMlink",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5IMlink_palette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMmake_image_24bit",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CString -\u003e Ptr CUChar -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5IMmake_image_24bit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMmake_image_24bit",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCString-\u003ePtr CUChar-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "IMmake",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCString-\u003ePtr CUChar-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5IMmake_image_24bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMmake_image_8bit",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e Ptr CUChar -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5IMmake_image_8bit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMmake_image_8bit",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003ePtr CUChar-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "IMmake",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003ePtr CUChar-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5IMmake_image_8bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMmake_palette",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr CUChar -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5IMmake_palette",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMmake_palette",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr CUChar-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "IMmake",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr CUChar-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5IMmake_palette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMread_image",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr CUChar -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5IMread_image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMread_image",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr CUChar-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "IMread",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr CUChar-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5IMread_image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMunlink_palette",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5IMunlink_palette",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5IMunlink_palette",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "IMunlink",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5IMunlink_palette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTdtype_to_text",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e C'H5LT_lang_t -\u003e Ptr CSize -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTdtype_to_text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTdtype_to_text",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eC'H LT_lang_t-\u003ePtr CSize-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTdtype",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eC'H LT_lang_t-\u003ePtr CSize-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTdtype_to_text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTfind_attribute",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTfind_attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTfind_attribute",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTfind",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTfind_attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTfind_dataset",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTfind_dataset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTfind_dataset",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTfind",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTfind_dataset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e C'hid_t -\u003e Ptr () -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTget_attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eC'hid_t-\u003ePtr()-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eC'hid_t-\u003ePtr()-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTget_attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_char",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e Ptr Char -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTget_attribute_char",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_char",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr Char-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr Char-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTget_attribute_char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_double",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CDouble -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTget_attribute_double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_double",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CDouble-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CDouble-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTget_attribute_double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_float",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CFloat -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTget_attribute_float",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_float",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CFloat-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CFloat-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTget_attribute_float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_info",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'H5T_class_t -\u003e Ptr CSize -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTget_attribute_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_info",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'H T_class_t-\u003ePtr CSize-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'H T_class_t-\u003ePtr CSize-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTget_attribute_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_int",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CInt -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTget_attribute_int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_int",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CInt-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CInt-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTget_attribute_int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_long",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CLong -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTget_attribute_long",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_long",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CLong-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CLong-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTget_attribute_long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_long_long",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CLLong -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTget_attribute_long_long",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_long_long",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CLLong-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CLLong-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTget_attribute_long_long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_ndims",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CInt -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTget_attribute_ndims",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_ndims",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CInt-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CInt-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTget_attribute_ndims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_short",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CShort -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTget_attribute_short",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_short",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CShort-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CShort-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTget_attribute_short"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_string",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e CString -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTget_attribute_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_string",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eCString-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eCString-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTget_attribute_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_uchar",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CUChar -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTget_attribute_uchar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_attribute_uchar",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CUChar-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CUChar-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTget_attribute_uchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_dataset_info",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'H5T_class_t -\u003e Ptr CSize -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTget_dataset_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_dataset_info",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'H T_class_t-\u003ePtr CSize-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'H T_class_t-\u003ePtr CSize-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTget_dataset_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_dataset_ndims",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr CInt -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTget_dataset_ndims",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTget_dataset_ndims",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr CInt-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr CInt-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTget_dataset_ndims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTmake_dataset",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr C'hsize_t -\u003e C'hid_t -\u003e Ptr () -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTmake_dataset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTmake_dataset",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003eC'hid_t-\u003ePtr()-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTmake",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003eC'hid_t-\u003ePtr()-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTmake_dataset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTmake_dataset_char",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr C'hsize_t -\u003e CString -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTmake_dataset_char",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTmake_dataset_char",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003eCString-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTmake",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003eCString-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTmake_dataset_char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTmake_dataset_double",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr C'hsize_t -\u003e Ptr CDouble -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTmake_dataset_double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTmake_dataset_double",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CDouble-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTmake",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CDouble-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTmake_dataset_double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTmake_dataset_float",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr C'hsize_t -\u003e Ptr CFloat -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTmake_dataset_float",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTmake_dataset_float",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CFloat-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTmake",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CFloat-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTmake_dataset_float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTmake_dataset_int",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr C'hsize_t -\u003e Ptr CInt -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTmake_dataset_int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTmake_dataset_int",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CInt-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTmake",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CInt-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTmake_dataset_int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTmake_dataset_long",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr C'hsize_t -\u003e Ptr CLong -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTmake_dataset_long",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTmake_dataset_long",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CLong-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTmake",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CLong-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTmake_dataset_long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTmake_dataset_short",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr C'hsize_t -\u003e Ptr CShort -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTmake_dataset_short",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTmake_dataset_short",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CShort-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTmake",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr C'hsize_t-\u003ePtr CShort-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTmake_dataset_short"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTmake_dataset_string",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTmake_dataset_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTmake_dataset_string",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTmake",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTmake_dataset_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTopen_file_image",
          "package": "bindings-hdf5",
          "signature": "FunPtr (Ptr () -\u003e CSize -\u003e CUInt -\u003e IO C'hid_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTopen_file_image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTopen_file_image",
          "normalized": "FunPtr(Ptr()-\u003eCSize-\u003eCUInt-\u003eIO C'hid_t)",
          "package": "bindings-hdf5",
          "partial": "LTopen",
          "signature": "FunPtr(Ptr()-\u003eCSize-\u003eCUInt-\u003eIO C'hid_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTopen_file_image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTpath_valid",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e C'hbool_t -\u003e IO C'htri_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTpath_valid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTpath_valid",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eC'hbool_t-\u003eIO C'htri_t)",
          "package": "bindings-hdf5",
          "partial": "LTpath",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eC'hbool_t-\u003eIO C'htri_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTpath_valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTread_dataset",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e C'hid_t -\u003e Ptr () -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTread_dataset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTread_dataset",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eC'hid_t-\u003ePtr()-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTread",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eC'hid_t-\u003ePtr()-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTread_dataset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTread_dataset_char",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTread_dataset_char",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTread_dataset_char",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTread",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTread_dataset_char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTread_dataset_double",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr CDouble -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTread_dataset_double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTread_dataset_double",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr CDouble-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTread",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr CDouble-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTread_dataset_double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTread_dataset_float",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr CFloat -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTread_dataset_float",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTread_dataset_float",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr CFloat-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTread",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr CFloat-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTread_dataset_float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTread_dataset_int",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr CInt -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTread_dataset_int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTread_dataset_int",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr CInt-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTread",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr CInt-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTread_dataset_int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTread_dataset_long",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr CLong -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTread_dataset_long",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTread_dataset_long",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr CLong-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTread",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr CLong-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTread_dataset_long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTread_dataset_short",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr CShort -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTread_dataset_short",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTread_dataset_short",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr CShort-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTread",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr CShort-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTread_dataset_short"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTread_dataset_string",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTread_dataset_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTread_dataset_string",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTread",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTread_dataset_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTset_attribute_char",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e CString -\u003e Ptr C'hsize_t -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTset_attribute_char",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTset_attribute_char",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eCString-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTset",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eCString-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTset_attribute_char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTset_attribute_double",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CDouble -\u003e CSize -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTset_attribute_double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTset_attribute_double",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CDouble-\u003eCSize-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTset",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CDouble-\u003eCSize-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTset_attribute_double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTset_attribute_float",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CFloat -\u003e Ptr C'hsize_t -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTset_attribute_float",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTset_attribute_float",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CFloat-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTset",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CFloat-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTset_attribute_float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTset_attribute_int",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CInt -\u003e CSize -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTset_attribute_int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTset_attribute_int",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CInt-\u003eCSize-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTset",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CInt-\u003eCSize-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTset_attribute_int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTset_attribute_long",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CLong -\u003e Ptr C'hsize_t -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTset_attribute_long",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTset_attribute_long",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CLong-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTset",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CLong-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTset_attribute_long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTset_attribute_long_long",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CLLong -\u003e CSize -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTset_attribute_long_long",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTset_attribute_long_long",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CLLong-\u003eCSize-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTset",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CLLong-\u003eCSize-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTset_attribute_long_long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTset_attribute_short",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e Ptr CShort -\u003e Ptr C'hsize_t -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTset_attribute_short",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTset_attribute_short",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CShort-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTset",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr CShort-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTset_attribute_short"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTset_attribute_string",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e CString -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTset_attribute_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTset_attribute_string",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eCString-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "LTset",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eCString-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTset_attribute_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTtext_to_dtype",
          "package": "bindings-hdf5",
          "signature": "FunPtr (CString -\u003e C'H5LT_lang_t -\u003e IO C'hid_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5LTtext_to_dtype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5LTtext_to_dtype",
          "normalized": "FunPtr(CString-\u003eC'H LT_lang_t-\u003eIO C'hid_t)",
          "package": "bindings-hdf5",
          "partial": "LTtext",
          "signature": "FunPtr(CString-\u003eC'H LT_lang_t-\u003eIO C'hid_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5LTtext_to_dtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTappend",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CSize -\u003e Ptr () -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5PTappend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTappend",
          "normalized": "FunPtr(C'hid_t-\u003eCSize-\u003ePtr()-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "PTappend",
          "signature": "FunPtr(C'hid_t-\u003eCSize-\u003ePtr()-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5PTappend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTclose",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5PTclose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTclose",
          "normalized": "FunPtr(C'hid_t-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "PTclose",
          "signature": "FunPtr(C'hid_t-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5PTclose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTcreate_fl",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e C'hid_t -\u003e Ptr C'hsize_t -\u003e CInt -\u003e IO C'hid_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5PTcreate_fl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTcreate_fl",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eC'hid_t-\u003ePtr C'hsize_t-\u003eCInt-\u003eIO C'hid_t)",
          "package": "bindings-hdf5",
          "partial": "PTcreate",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eC'hid_t-\u003ePtr C'hsize_t-\u003eCInt-\u003eIO C'hid_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5PTcreate_fl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTcreate_index",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5PTcreate_index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTcreate_index",
          "normalized": "FunPtr(C'hid_t-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "PTcreate",
          "signature": "FunPtr(C'hid_t-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5PTcreate_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTget_next",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CSize -\u003e Ptr () -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5PTget_next",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTget_next",
          "normalized": "FunPtr(C'hid_t-\u003eCSize-\u003ePtr()-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "PTget",
          "signature": "FunPtr(C'hid_t-\u003eCSize-\u003ePtr()-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5PTget_next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTget_num_packets",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e Ptr C'hsize_t -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5PTget_num_packets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTget_num_packets",
          "normalized": "FunPtr(C'hid_t-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "PTget",
          "signature": "FunPtr(C'hid_t-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5PTget_num_packets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTis_valid",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5PTis_valid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTis_valid",
          "normalized": "FunPtr(C'hid_t-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "PTis",
          "signature": "FunPtr(C'hid_t-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5PTis_valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTopen",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e IO C'hid_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5PTopen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTopen",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eIO C'hid_t)",
          "package": "bindings-hdf5",
          "partial": "PTopen",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eIO C'hid_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5PTopen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTread_packets",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr () -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5PTread_packets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTread_packets",
          "normalized": "FunPtr(C'hid_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr()-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "PTread",
          "signature": "FunPtr(C'hid_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr()-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5PTread_packets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTset_index",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e Ptr C'hsize_t -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5PTset_index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5PTset_index",
          "normalized": "FunPtr(C'hid_t-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "PTset",
          "signature": "FunPtr(C'hid_t-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5PTset_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBadd_records_from",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5TBadd_records_from",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBadd_records_from",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCString-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "TBadd",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCString-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5TBadd_records_from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBappend_records",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr CSize -\u003e Ptr CSize -\u003e Ptr () -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5TBappend_records",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBappend_records",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "TBappend",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5TBappend_records"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBcombine_tables",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e C'hid_t -\u003e CString -\u003e CString -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5TBcombine_tables",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBcombine_tables",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eC'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "TBcombine",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eC'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5TBcombine_tables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBdelete_field",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5TBdelete_field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBdelete_field",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "TBdelete",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5TBdelete_field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBdelete_record",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5TBdelete_record",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBdelete_record",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "TBdelete",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5TBdelete_record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBget_field_info",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr CString -\u003e Ptr CSize -\u003e Ptr CSize -\u003e Ptr CSize -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5TBget_field_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBget_field_info",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr CString-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr CSize-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "TBget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr CString-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr CSize-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5TBget_field_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBget_table_info",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5TBget_table_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBget_table_info",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "TBget",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5TBget_table_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBinsert_field",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e C'hid_t -\u003e Ptr C'hsize_t -\u003e Ptr () -\u003e Ptr () -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5TBinsert_field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBinsert_field",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eC'hid_t-\u003ePtr C'hsize_t-\u003ePtr()-\u003ePtr()-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "TBinsert",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003eC'hid_t-\u003ePtr C'hsize_t-\u003ePtr()-\u003ePtr()-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5TBinsert_field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBinsert_record",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr CSize -\u003e Ptr () -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5TBinsert_record",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBinsert_record",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "TBinsert",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5TBinsert_record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBmake_table",
          "package": "bindings-hdf5",
          "signature": "FunPtr (CString -\u003e C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr CString -\u003e Ptr CSize -\u003e Ptr C'hid_t -\u003e Ptr C'hsize_t -\u003e Ptr () -\u003e CInt -\u003e Ptr () -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5TBmake_table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBmake_table",
          "normalized": "FunPtr(CString-\u003eC'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CString-\u003ePtr CSize-\u003ePtr C'hid_t-\u003ePtr C'hsize_t-\u003ePtr()-\u003eCInt-\u003ePtr()-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "TBmake",
          "signature": "FunPtr(CString-\u003eC'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CString-\u003ePtr CSize-\u003ePtr C'hid_t-\u003ePtr C'hsize_t-\u003ePtr()-\u003eCInt-\u003ePtr()-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5TBmake_table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBread_fields_index",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr CInt -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr CSize -\u003e Ptr CSize -\u003e Ptr () -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5TBread_fields_index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBread_fields_index",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr CInt-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "TBread",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr CInt-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5TBread_fields_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBread_fields_name",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr CSize -\u003e Ptr CSize -\u003e Ptr () -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5TBread_fields_name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBread_fields_name",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "TBread",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5TBread_fields_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBread_records",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr CSize -\u003e Ptr CSize -\u003e Ptr () -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5TBread_records",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBread_records",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "TBread",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5TBread_records"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBread_table",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CSize -\u003e Ptr CSize -\u003e Ptr CSize -\u003e Ptr () -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5TBread_table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBread_table",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "TBread",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5TBread_table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBwrite_fields_index",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CInt -\u003e Ptr CInt -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr CSize -\u003e Ptr CSize -\u003e Ptr () -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5TBwrite_fields_index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBwrite_fields_index",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr CInt-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "TBwrite",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCInt-\u003ePtr CInt-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5TBwrite_fields_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBwrite_fields_name",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr CSize -\u003e Ptr CSize -\u003e Ptr () -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5TBwrite_fields_name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBwrite_fields_name",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "TBwrite",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5TBwrite_fields_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBwrite_records",
          "package": "bindings-hdf5",
          "signature": "FunPtr (C'hid_t -\u003e CString -\u003e Ptr C'hsize_t -\u003e Ptr C'hsize_t -\u003e CSize -\u003e Ptr CSize -\u003e Ptr CSize -\u003e Ptr () -\u003e IO C'herr_t)",
          "source": "src/Bindings-HDF5-HighLevelAPI.html#p%27H5TBwrite_records",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 HighLevelAPI",
          "module": "Bindings.HDF5.HighLevelAPI",
          "name": "p'H5TBwrite_records",
          "normalized": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t)",
          "package": "bindings-hdf5",
          "partial": "TBwrite",
          "signature": "FunPtr(C'hid_t-\u003eCString-\u003ePtr C'hsize_t-\u003ePtr C'hsize_t-\u003eCSize-\u003ePtr CSize-\u003ePtr CSize-\u003ePtr()-\u003eIO C'herr_t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-HighLevelAPI.html#v:p-39-H5TBwrite_records"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "Types",
          "package": "bindings-hdf5",
          "source": "src/Bindings-HDF5-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "Types",
          "package": "bindings-hdf5",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "C'H5DS_iterate_t",
          "package": "bindings-hdf5",
          "source": "src/Bindings-HDF5-Types.html#C%27H5DS_iterate_t",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "C'H5DS_iterate_t",
          "package": "bindings-hdf5",
          "partial": "C' DS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#t:C-39-H5DS_iterate_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "C'H5LT_lang_t",
          "package": "bindings-hdf5",
          "source": "src/Bindings-HDF5-Types.html#C%27H5LT_lang_t",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "C'H5LT_lang_t",
          "package": "bindings-hdf5",
          "partial": "C' LT",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#t:C-39-H5LT_lang_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "C'H5T_class_t",
          "package": "bindings-hdf5",
          "source": "src/Bindings-HDF5-Types.html#C%27H5T_class_t",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "C'H5T_class_t",
          "package": "bindings-hdf5",
          "partial": "C'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#t:C-39-H5T_class_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "C'hbool_t",
          "package": "bindings-hdf5",
          "source": "src/Bindings-HDF5-Types.html#C%27hbool_t",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "C'hbool_t",
          "package": "bindings-hdf5",
          "partial": "C'hbool",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#t:C-39-hbool_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "C'herr_t",
          "package": "bindings-hdf5",
          "source": "src/Bindings-HDF5-Types.html#C%27herr_t",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "C'herr_t",
          "package": "bindings-hdf5",
          "partial": "C'herr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#t:C-39-herr_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "C'hid_t",
          "package": "bindings-hdf5",
          "source": "src/Bindings-HDF5-Types.html#C%27hid_t",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "C'hid_t",
          "package": "bindings-hdf5",
          "partial": "C'hid",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#t:C-39-hid_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "C'hsize_t",
          "package": "bindings-hdf5",
          "source": "src/Bindings-HDF5-Types.html#C%27hsize_t",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "C'hsize_t",
          "package": "bindings-hdf5",
          "partial": "C'hsize",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#t:C-39-hsize_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "C'hssize_t",
          "package": "bindings-hdf5",
          "source": "src/Bindings-HDF5-Types.html#C%27hssize_t",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "C'hssize_t",
          "package": "bindings-hdf5",
          "partial": "C'hssize",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#t:C-39-hssize_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "C'htri_t",
          "package": "bindings-hdf5",
          "source": "src/Bindings-HDF5-Types.html#C%27htri_t",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "C'htri_t",
          "package": "bindings-hdf5",
          "partial": "C'htri",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#t:C-39-htri_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "C'ssize_t",
          "package": "bindings-hdf5",
          "source": "src/Bindings-HDF5-Types.html#C%27ssize_t",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "C'ssize_t",
          "package": "bindings-hdf5",
          "partial": "C'ssize",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#t:C-39-ssize_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "c'H5LT_C",
          "package": "bindings-hdf5",
          "signature": "a",
          "source": "src/Bindings-HDF5-Types.html#c%27H5LT_C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "c'H5LT_C",
          "package": "bindings-hdf5",
          "partial": "LT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:c-39-H5LT_C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "c'H5LT_DDL",
          "package": "bindings-hdf5",
          "signature": "a",
          "source": "src/Bindings-HDF5-Types.html#c%27H5LT_DDL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "c'H5LT_DDL",
          "package": "bindings-hdf5",
          "partial": "LT DDL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:c-39-H5LT_DDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "c'H5LT_FORTRAN",
          "package": "bindings-hdf5",
          "signature": "a",
          "source": "src/Bindings-HDF5-Types.html#c%27H5LT_FORTRAN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "c'H5LT_FORTRAN",
          "package": "bindings-hdf5",
          "partial": "LT FORTRAN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:c-39-H5LT_FORTRAN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "c'H5LT_LANG_ERR",
          "package": "bindings-hdf5",
          "signature": "a",
          "source": "src/Bindings-HDF5-Types.html#c%27H5LT_LANG_ERR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "c'H5LT_LANG_ERR",
          "package": "bindings-hdf5",
          "partial": "LT LANG ERR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:c-39-H5LT_LANG_ERR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "c'H5LT_NO_LANG",
          "package": "bindings-hdf5",
          "signature": "a",
          "source": "src/Bindings-HDF5-Types.html#c%27H5LT_NO_LANG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "c'H5LT_NO_LANG",
          "package": "bindings-hdf5",
          "partial": "LT NO LANG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:c-39-H5LT_NO_LANG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_ARRAY",
          "package": "bindings-hdf5",
          "signature": "a",
          "source": "src/Bindings-HDF5-Types.html#c%27H5T_ARRAY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_ARRAY",
          "package": "bindings-hdf5",
          "partial": "ARRAY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:c-39-H5T_ARRAY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_BITFIELD",
          "package": "bindings-hdf5",
          "signature": "a",
          "source": "src/Bindings-HDF5-Types.html#c%27H5T_BITFIELD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_BITFIELD",
          "package": "bindings-hdf5",
          "partial": "BITFIELD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:c-39-H5T_BITFIELD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_COMPOUND",
          "package": "bindings-hdf5",
          "signature": "a",
          "source": "src/Bindings-HDF5-Types.html#c%27H5T_COMPOUND",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_COMPOUND",
          "package": "bindings-hdf5",
          "partial": "COMPOUND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:c-39-H5T_COMPOUND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_ENUM",
          "package": "bindings-hdf5",
          "signature": "a",
          "source": "src/Bindings-HDF5-Types.html#c%27H5T_ENUM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_ENUM",
          "package": "bindings-hdf5",
          "partial": "ENUM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:c-39-H5T_ENUM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_FLOAT",
          "package": "bindings-hdf5",
          "signature": "a",
          "source": "src/Bindings-HDF5-Types.html#c%27H5T_FLOAT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_FLOAT",
          "package": "bindings-hdf5",
          "partial": "FLOAT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:c-39-H5T_FLOAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_INTEGER",
          "package": "bindings-hdf5",
          "signature": "a",
          "source": "src/Bindings-HDF5-Types.html#c%27H5T_INTEGER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_INTEGER",
          "package": "bindings-hdf5",
          "partial": "INTEGER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:c-39-H5T_INTEGER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_NCLASSES",
          "package": "bindings-hdf5",
          "signature": "a",
          "source": "src/Bindings-HDF5-Types.html#c%27H5T_NCLASSES",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_NCLASSES",
          "package": "bindings-hdf5",
          "partial": "NCLASSES",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:c-39-H5T_NCLASSES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_NO_CLASS",
          "package": "bindings-hdf5",
          "signature": "a",
          "source": "src/Bindings-HDF5-Types.html#c%27H5T_NO_CLASS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_NO_CLASS",
          "package": "bindings-hdf5",
          "partial": "NO CLASS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:c-39-H5T_NO_CLASS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_OPAQUE",
          "package": "bindings-hdf5",
          "signature": "a",
          "source": "src/Bindings-HDF5-Types.html#c%27H5T_OPAQUE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_OPAQUE",
          "package": "bindings-hdf5",
          "partial": "OPAQUE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:c-39-H5T_OPAQUE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_REFERENCE",
          "package": "bindings-hdf5",
          "signature": "a",
          "source": "src/Bindings-HDF5-Types.html#c%27H5T_REFERENCE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_REFERENCE",
          "package": "bindings-hdf5",
          "partial": "REFERENCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:c-39-H5T_REFERENCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_STRING",
          "package": "bindings-hdf5",
          "signature": "a",
          "source": "src/Bindings-HDF5-Types.html#c%27H5T_STRING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_STRING",
          "package": "bindings-hdf5",
          "partial": "STRING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:c-39-H5T_STRING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_TIME",
          "package": "bindings-hdf5",
          "signature": "a",
          "source": "src/Bindings-HDF5-Types.html#c%27H5T_TIME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_TIME",
          "package": "bindings-hdf5",
          "partial": "TIME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:c-39-H5T_TIME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_VLEN",
          "package": "bindings-hdf5",
          "signature": "a",
          "source": "src/Bindings-HDF5-Types.html#c%27H5T_VLEN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "c'H5T_VLEN",
          "package": "bindings-hdf5",
          "partial": "VLEN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:c-39-H5T_VLEN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "mK'H5DS_iterate_t",
          "package": "bindings-hdf5",
          "signature": "C'H5DS_iterate_t -\u003e C'hid_t -\u003e CUInt -\u003e C'hid_t -\u003e Ptr () -\u003e IO C'herr_t",
          "source": "src/Bindings-HDF5-Types.html#mK%27H5DS_iterate_t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "mK'H5DS_iterate_t",
          "normalized": "C'H DS_iterate_t-\u003eC'hid_t-\u003eCUInt-\u003eC'hid_t-\u003ePtr()-\u003eIO C'herr_t",
          "package": "bindings-hdf5",
          "partial": "K' DS",
          "signature": "C'H DS_iterate_t-\u003eC'hid_t-\u003eCUInt-\u003eC'hid_t-\u003ePtr()-\u003eIO C'herr_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:mK-39-H5DS_iterate_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.HDF5.Types",
          "name": "mk'H5DS_iterate_t",
          "package": "bindings-hdf5",
          "signature": "(C'hid_t -\u003e CUInt -\u003e C'hid_t -\u003e Ptr () -\u003e IO C'herr_t) -\u003e IO C'H5DS_iterate_t",
          "source": "src/Bindings-HDF5-Types.html#mk%27H5DS_iterate_t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings HDF5 Types",
          "module": "Bindings.HDF5.Types",
          "name": "mk'H5DS_iterate_t",
          "normalized": "(C'hid_t-\u003eCUInt-\u003eC'hid_t-\u003ePtr()-\u003eIO C'herr_t)-\u003eIO C'H DS_iterate_t",
          "package": "bindings-hdf5",
          "partial": "DS",
          "signature": "(C'hid_t-\u003eCUInt-\u003eC'hid_t-\u003ePtr()-\u003eIO C'herr_t)-\u003eIO C'H DS_iterate_t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5-Types.html#v:mk-39-H5DS_iterate_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003ehttp://www.hdfgroup.org/HDF5/doc/RM/RM_H5Front.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bindings.HDF5",
          "name": "HDF5",
          "package": "bindings-hdf5",
          "source": "src/Bindings-HDF5.html",
          "type": "module"
        },
        "index": {
          "description": "http www.hdfgroup.org HDF5 doc RM RM H5Front.html",
          "hierarchy": "Bindings HDF5",
          "module": "Bindings.HDF5",
          "name": "HDF5",
          "package": "bindings-hdf5",
          "partial": "HDF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bindings-hdf5/docs/Bindings-HDF5.html#"
      }
    }
  ]
]