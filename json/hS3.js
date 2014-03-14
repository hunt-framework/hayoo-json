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
        "word": "hS3"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConnection and authentication info for an Amazon AWS request.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.AWS.AWSConnection",
          "name": "AWSConnection",
          "package": "hS3",
          "source": "src/Network-AWS-AWSConnection.html",
          "type": "module"
        },
        "index": {
          "description": "Connection and authentication info for an Amazon AWS request",
          "hierarchy": "Network AWS AWSConnection",
          "module": "Network.AWS.AWSConnection",
          "name": "AWSConnection",
          "package": "hS3",
          "partial": "AWSConnection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-AWSConnection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Amazon Web Services connection.  Everything needed to connect\n   and authenticate requests.\n\u003c/p\u003e",
          "module": "Network.AWS.AWSConnection",
          "name": "AWSConnection",
          "package": "hS3",
          "source": "src/Network-AWS-AWSConnection.html#AWSConnection",
          "type": "data"
        },
        "index": {
          "description": "An Amazon Web Services connection Everything needed to connect and authenticate requests",
          "hierarchy": "Network AWS AWSConnection",
          "module": "Network.AWS.AWSConnection",
          "name": "AWSConnection",
          "package": "hS3",
          "partial": "AWSConnection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-AWSConnection.html#t:AWSConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.AWSConnection",
          "name": "AWSConnection",
          "package": "hS3",
          "signature": "AWSConnection",
          "source": "src/Network-AWS-AWSConnection.html#AWSConnection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS AWSConnection",
          "module": "Network.AWS.AWSConnection",
          "name": "AWSConnection",
          "package": "hS3",
          "partial": "AWSConnection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-AWSConnection.html#v:AWSConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an AWSConnection to Amazon from credentials.  Uses the\n   production service.\n\u003c/p\u003e",
          "module": "Network.AWS.AWSConnection",
          "name": "amazonS3Connection",
          "package": "hS3",
          "signature": "String-\u003e String-\u003e AWSConnection",
          "type": "function"
        },
        "index": {
          "description": "Create an AWSConnection to Amazon from credentials Uses the production service",
          "hierarchy": "Network AWS AWSConnection",
          "module": "Network.AWS.AWSConnection",
          "name": "amazonS3Connection",
          "normalized": "String-\u003eString-\u003eAWSConnection",
          "package": "hS3",
          "partial": "Connection",
          "signature": "String-\u003eString-\u003eAWSConnection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-AWSConnection.html#v:amazonS3Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve Access and Secret keys from environment variables\n   AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY, respectively.\n   Either variable being undefined or empty will result in\n   \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.AWS.AWSConnection",
          "name": "amazonS3ConnectionFromEnv",
          "package": "hS3",
          "signature": "IO (Maybe AWSConnection)",
          "source": "src/Network-AWS-AWSConnection.html#amazonS3ConnectionFromEnv",
          "type": "function"
        },
        "index": {
          "description": "Retrieve Access and Secret keys from environment variables AWS ACCESS KEY ID and AWS SECRET ACCESS KEY respectively Either variable being undefined or empty will result in Nothing",
          "hierarchy": "Network AWS AWSConnection",
          "module": "Network.AWS.AWSConnection",
          "name": "amazonS3ConnectionFromEnv",
          "package": "hS3",
          "partial": "Connection From Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-AWSConnection.html#v:amazonS3ConnectionFromEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess Key ID\n\u003c/p\u003e",
          "module": "Network.AWS.AWSConnection",
          "name": "awsAccessKey",
          "package": "hS3",
          "signature": "String",
          "source": "src/Network-AWS-AWSConnection.html#AWSConnection",
          "type": "function"
        },
        "index": {
          "description": "Access Key ID",
          "hierarchy": "Network AWS AWSConnection",
          "module": "Network.AWS.AWSConnection",
          "name": "awsAccessKey",
          "package": "hS3",
          "partial": "Access Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-AWSConnection.html#v:awsAccessKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eService provider hostname\n\u003c/p\u003e",
          "module": "Network.AWS.AWSConnection",
          "name": "awsHost",
          "package": "hS3",
          "signature": "String",
          "source": "src/Network-AWS-AWSConnection.html#AWSConnection",
          "type": "function"
        },
        "index": {
          "description": "Service provider hostname",
          "hierarchy": "Network AWS AWSConnection",
          "module": "Network.AWS.AWSConnection",
          "name": "awsHost",
          "package": "hS3",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-AWSConnection.html#v:awsHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eService provider port number\n\u003c/p\u003e",
          "module": "Network.AWS.AWSConnection",
          "name": "awsPort",
          "package": "hS3",
          "signature": "Int",
          "source": "src/Network-AWS-AWSConnection.html#AWSConnection",
          "type": "function"
        },
        "index": {
          "description": "Service provider port number",
          "hierarchy": "Network AWS AWSConnection",
          "module": "Network.AWS.AWSConnection",
          "name": "awsPort",
          "package": "hS3",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-AWSConnection.html#v:awsPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecret Access Key\n\u003c/p\u003e",
          "module": "Network.AWS.AWSConnection",
          "name": "awsSecretKey",
          "package": "hS3",
          "signature": "String",
          "source": "src/Network-AWS-AWSConnection.html#AWSConnection",
          "type": "function"
        },
        "index": {
          "description": "Secret Access Key",
          "hierarchy": "Network AWS AWSConnection",
          "module": "Network.AWS.AWSConnection",
          "name": "awsSecretKey",
          "package": "hS3",
          "partial": "Secret Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-AWSConnection.html#v:awsSecretKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHostname used for connecting to Amazon's production S3 service (\u003ccode\u003es3.amazonaws.com\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Network.AWS.AWSConnection",
          "name": "defaultAmazonS3Host",
          "package": "hS3",
          "signature": "String",
          "source": "src/Network-AWS-AWSConnection.html#defaultAmazonS3Host",
          "type": "function"
        },
        "index": {
          "description": "Hostname used for connecting to Amazon production S3 service s3.amazonaws.com",
          "hierarchy": "Network AWS AWSConnection",
          "module": "Network.AWS.AWSConnection",
          "name": "defaultAmazonS3Host",
          "package": "hS3",
          "partial": "Amazon Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-AWSConnection.html#v:defaultAmazonS3Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePort number used for connecting to Amazon's production S3 service (\u003ccode\u003e80\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Network.AWS.AWSConnection",
          "name": "defaultAmazonS3Port",
          "package": "hS3",
          "signature": "Int",
          "source": "src/Network-AWS-AWSConnection.html#defaultAmazonS3Port",
          "type": "function"
        },
        "index": {
          "description": "Port number used for connecting to Amazon production S3 service",
          "hierarchy": "Network AWS AWSConnection",
          "module": "Network.AWS.AWSConnection",
          "name": "defaultAmazonS3Port",
          "package": "hS3",
          "partial": "Amazon Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-AWSConnection.html#v:defaultAmazonS3Port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eResults from a query to Amazon Web Services.\n API Version 2006-03-01\n \u003ca\u003ehttp://docs.amazonwebservices.com/AmazonS3/2006-03-01/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.AWS.AWSResult",
          "name": "AWSResult",
          "package": "hS3",
          "source": "src/Network-AWS-AWSResult.html",
          "type": "module"
        },
        "index": {
          "description": "Results from query to Amazon Web Services API Version http docs.amazonwebservices.com AmazonS3",
          "hierarchy": "Network AWS AWSResult",
          "module": "Network.AWS.AWSResult",
          "name": "AWSResult",
          "package": "hS3",
          "partial": "AWSResult",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-AWSResult.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA result from processing a request to S3.  Either some success\n   value, or a \u003ccode\u003e\u003ca\u003eReqError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.AWS.AWSResult",
          "name": "AWSResult",
          "package": "hS3",
          "source": "src/Network-AWS-AWSResult.html#AWSResult",
          "type": "type"
        },
        "index": {
          "description": "result from processing request to S3 Either some success value or ReqError",
          "hierarchy": "Network AWS AWSResult",
          "module": "Network.AWS.AWSResult",
          "name": "AWSResult",
          "package": "hS3",
          "partial": "AWSResult",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-AWSResult.html#t:AWSResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error from an S3 request, either at the network layer, or from\n   S3 itself.\n\u003c/p\u003e",
          "module": "Network.AWS.AWSResult",
          "name": "ReqError",
          "package": "hS3",
          "source": "src/Network-AWS-AWSResult.html#ReqError",
          "type": "data"
        },
        "index": {
          "description": "An error from an S3 request either at the network layer or from S3 itself",
          "hierarchy": "Network AWS AWSResult",
          "module": "Network.AWS.AWSResult",
          "name": "ReqError",
          "package": "hS3",
          "partial": "Req Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-AWSResult.html#t:ReqError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eAWSError code message\u003c/code\u003e constructs an error message from S3\n   itself.  See\n   \u003ca\u003ehttp://docs.amazonwebservices.com/AmazonS3/2006-03-01/ErrorCodeList.html\u003c/a\u003e\n   for a detailed list of possible codes.\n\u003c/p\u003e",
          "module": "Network.AWS.AWSResult",
          "name": "AWSError",
          "package": "hS3",
          "signature": "AWSError String String",
          "source": "src/Network-AWS-AWSResult.html#ReqError",
          "type": "function"
        },
        "index": {
          "description": "AWSError code message constructs an error message from S3 itself See http docs.amazonwebservices.com AmazonS3 ErrorCodeList.html for detailed list of possible codes",
          "hierarchy": "Network AWS AWSResult",
          "module": "Network.AWS.AWSResult",
          "name": "AWSError",
          "package": "hS3",
          "partial": "AWSError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-AWSResult.html#v:AWSError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection error at the network layer.\n\u003c/p\u003e",
          "module": "Network.AWS.AWSResult",
          "name": "NetworkError",
          "package": "hS3",
          "signature": "NetworkError ConnError",
          "source": "src/Network-AWS-AWSResult.html#ReqError",
          "type": "function"
        },
        "index": {
          "description": "Connection error at the network layer",
          "hierarchy": "Network AWS AWSResult",
          "module": "Network.AWS.AWSResult",
          "name": "NetworkError",
          "package": "hS3",
          "partial": "Network Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-AWSResult.html#v:NetworkError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print an error message.\n\u003c/p\u003e",
          "module": "Network.AWS.AWSResult",
          "name": "prettyReqError",
          "package": "hS3",
          "signature": "ReqError -\u003e String",
          "source": "src/Network-AWS-AWSResult.html#prettyReqError",
          "type": "function"
        },
        "index": {
          "description": "Pretty print an error message",
          "hierarchy": "Network AWS AWSResult",
          "module": "Network.AWS.AWSResult",
          "name": "prettyReqError",
          "normalized": "ReqError-\u003eString",
          "package": "hS3",
          "partial": "Req Error",
          "signature": "ReqError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-AWSResult.html#v:prettyReqError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelper functions for working with HXT.  Scraped from \u003ca\u003ehaskell.org\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.AWS.ArrowUtils",
          "name": "ArrowUtils",
          "package": "hS3",
          "source": "src/Network-AWS-ArrowUtils.html",
          "type": "module"
        },
        "index": {
          "description": "Helper functions for working with HXT Scraped from haskell.org",
          "hierarchy": "Network AWS ArrowUtils",
          "module": "Network.AWS.ArrowUtils",
          "name": "ArrowUtils",
          "package": "hS3",
          "partial": "Arrow Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-ArrowUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.ArrowUtils",
          "name": "atTag",
          "package": "hS3",
          "signature": "String -\u003e a (NTree XNode) XmlTree",
          "source": "src/Network-AWS-ArrowUtils.html#atTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS ArrowUtils",
          "module": "Network.AWS.ArrowUtils",
          "name": "atTag",
          "normalized": "String-\u003ea(NTree XNode)XmlTree",
          "package": "hS3",
          "partial": "Tag",
          "signature": "String-\u003ea(NTree XNode)XmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-ArrowUtils.html#v:atTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.ArrowUtils",
          "name": "split",
          "package": "hS3",
          "signature": "a b (b, b)",
          "source": "src/Network-AWS-ArrowUtils.html#split",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS ArrowUtils",
          "module": "Network.AWS.ArrowUtils",
          "name": "split",
          "normalized": "a b(b,b)",
          "package": "hS3",
          "signature": "a b(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-ArrowUtils.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.ArrowUtils",
          "name": "text",
          "package": "hS3",
          "signature": "cat (NTree XNode) String",
          "source": "src/Network-AWS-ArrowUtils.html#text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS ArrowUtils",
          "module": "Network.AWS.ArrowUtils",
          "name": "text",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-ArrowUtils.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.ArrowUtils",
          "name": "unsplit",
          "package": "hS3",
          "signature": "(b -\u003e c -\u003e d) -\u003e a (b, c) d",
          "source": "src/Network-AWS-ArrowUtils.html#unsplit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS ArrowUtils",
          "module": "Network.AWS.ArrowUtils",
          "name": "unsplit",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed(a,b)c",
          "package": "hS3",
          "signature": "(b-\u003ec-\u003ed)-\u003ea(b,c)d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-ArrowUtils.html#v:unsplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements authentication and low-level communication with Amazon\n Web Services, such as S3, EC2, and others.\n API Version 2006-03-01\n \u003ca\u003ehttp://docs.amazonwebservices.com/AmazonS3/2006-03-01/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.AWS.Authentication",
          "name": "Authentication",
          "package": "hS3",
          "source": "src/Network-AWS-Authentication.html",
          "type": "module"
        },
        "index": {
          "description": "Implements authentication and low-level communication with Amazon Web Services such as S3 EC2 and others API Version http docs.amazonwebservices.com AmazonS3",
          "hierarchy": "Network AWS Authentication",
          "module": "Network.AWS.Authentication",
          "name": "Authentication",
          "package": "hS3",
          "partial": "Authentication",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-Authentication.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn action to be performed using S3.\n\u003c/p\u003e",
          "module": "Network.AWS.Authentication",
          "name": "S3Action",
          "package": "hS3",
          "source": "src/Network-AWS-Authentication.html#S3Action",
          "type": "data"
        },
        "index": {
          "description": "An action to be performed using S3",
          "hierarchy": "Network AWS Authentication",
          "module": "Network.AWS.Authentication",
          "name": "S3Action",
          "package": "hS3",
          "partial": "Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-Authentication.html#t:S3Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.Authentication",
          "name": "S3Action",
          "package": "hS3",
          "signature": "S3Action",
          "source": "src/Network-AWS-Authentication.html#S3Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS Authentication",
          "module": "Network.AWS.Authentication",
          "name": "S3Action",
          "package": "hS3",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-Authentication.html#v:S3Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if a header belongs in the StringToSign\n\u003c/p\u003e",
          "module": "Network.AWS.Authentication",
          "name": "isAmzHeader",
          "package": "hS3",
          "signature": "Header -\u003e Bool",
          "source": "src/Network-AWS-Authentication.html#isAmzHeader",
          "type": "function"
        },
        "index": {
          "description": "Determine if header belongs in the StringToSign",
          "hierarchy": "Network AWS Authentication",
          "module": "Network.AWS.Authentication",
          "name": "isAmzHeader",
          "normalized": "Header-\u003eBool",
          "package": "hS3",
          "partial": "Amz Header",
          "signature": "Header-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-Authentication.html#v:isAmzHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a mime string, we know about quoted printable and base64 encoded UTF-8\n S3 may convert quoted printable to base64\n\u003c/p\u003e",
          "module": "Network.AWS.Authentication",
          "name": "mimeDecode",
          "package": "hS3",
          "signature": "String -\u003e String",
          "source": "src/Network-AWS-Authentication.html#mimeDecode",
          "type": "function"
        },
        "index": {
          "description": "Decode mime string we know about quoted printable and base64 encoded UTF-8 S3 may convert quoted printable to base64",
          "hierarchy": "Network AWS Authentication",
          "module": "Network.AWS.Authentication",
          "name": "mimeDecode",
          "normalized": "String-\u003eString",
          "package": "hS3",
          "partial": "Decode",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-Authentication.html#v:mimeDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.Authentication",
          "name": "mimeEncodeQP",
          "package": "hS3",
          "signature": "String -\u003e String",
          "source": "src/Network-AWS-Authentication.html#mimeEncodeQP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS Authentication",
          "module": "Network.AWS.Authentication",
          "name": "mimeEncodeQP",
          "normalized": "String-\u003eString",
          "package": "hS3",
          "partial": "Encode QP",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-Authentication.html#v:mimeEncodeQP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a pre-signed URI, but don't act on it.  This is useful\n   for when an expiration date has been set, and the URI needs to be\n   passed on to a client.\n\u003c/p\u003e",
          "module": "Network.AWS.Authentication",
          "name": "preSignedURI",
          "package": "hS3",
          "signature": "S3Action-\u003e Integer-\u003e URI",
          "type": "function"
        },
        "index": {
          "description": "Construct pre-signed URI but don act on it This is useful for when an expiration date has been set and the URI needs to be passed on to client",
          "hierarchy": "Network AWS Authentication",
          "module": "Network.AWS.Authentication",
          "name": "preSignedURI",
          "normalized": "S Action-\u003eInteger-\u003eURI",
          "package": "hS3",
          "partial": "Signed URI",
          "signature": "S Action-\u003eInteger-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-Authentication.html#v:preSignedURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the request specified by an S3Action, send to Amazon,\n   and return the response.  Todo: add MD5 signature.\n\u003c/p\u003e",
          "module": "Network.AWS.Authentication",
          "name": "runAction",
          "package": "hS3",
          "signature": "S3Action -\u003e IO (AWSResult (HTTPResponse ByteString))",
          "source": "src/Network-AWS-Authentication.html#runAction",
          "type": "function"
        },
        "index": {
          "description": "Construct the request specified by an S3Action send to Amazon and return the response Todo add MD5 signature",
          "hierarchy": "Network AWS Authentication",
          "module": "Network.AWS.Authentication",
          "name": "runAction",
          "normalized": "S Action-\u003eIO(AWSResult(HTTPResponse ByteString))",
          "package": "hS3",
          "partial": "Action",
          "signature": "S Action-\u003eIO(AWSResult(HTTPResponse ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-Authentication.html#v:runAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBody of action, if sending data\n\u003c/p\u003e",
          "module": "Network.AWS.Authentication",
          "name": "s3body",
          "package": "hS3",
          "signature": "ByteString",
          "source": "src/Network-AWS-Authentication.html#S3Action",
          "type": "function"
        },
        "index": {
          "description": "Body of action if sending data",
          "hierarchy": "Network AWS Authentication",
          "module": "Network.AWS.Authentication",
          "name": "s3body",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-Authentication.html#v:s3body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of bucket to act on (URL encoded)\n\u003c/p\u003e",
          "module": "Network.AWS.Authentication",
          "name": "s3bucket",
          "package": "hS3",
          "signature": "String",
          "source": "src/Network-AWS-Authentication.html#S3Action",
          "type": "function"
        },
        "index": {
          "description": "Name of bucket to act on URL encoded",
          "hierarchy": "Network AWS Authentication",
          "module": "Network.AWS.Authentication",
          "name": "s3bucket",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-Authentication.html#v:s3bucket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection and authentication information\n\u003c/p\u003e",
          "module": "Network.AWS.Authentication",
          "name": "s3conn",
          "package": "hS3",
          "signature": "AWSConnection",
          "source": "src/Network-AWS-Authentication.html#S3Action",
          "type": "function"
        },
        "index": {
          "description": "Connection and authentication information",
          "hierarchy": "Network AWS Authentication",
          "module": "Network.AWS.Authentication",
          "name": "s3conn",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-Authentication.html#v:s3conn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional header fields to send\n\u003c/p\u003e",
          "module": "Network.AWS.Authentication",
          "name": "s3metadata",
          "package": "hS3",
          "signature": "[(String, String)]",
          "source": "src/Network-AWS-Authentication.html#S3Action",
          "type": "function"
        },
        "index": {
          "description": "Additional header fields to send",
          "hierarchy": "Network AWS Authentication",
          "module": "Network.AWS.Authentication",
          "name": "s3metadata",
          "normalized": "[(String,String)]",
          "package": "hS3",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-Authentication.html#v:s3metadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of object to act on (URL encoded)\n\u003c/p\u003e",
          "module": "Network.AWS.Authentication",
          "name": "s3object",
          "package": "hS3",
          "signature": "String",
          "source": "src/Network-AWS-Authentication.html#S3Action",
          "type": "function"
        },
        "index": {
          "description": "Name of object to act on URL encoded",
          "hierarchy": "Network AWS Authentication",
          "module": "Network.AWS.Authentication",
          "name": "s3object",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-Authentication.html#v:s3object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of action, \u003ccode\u003ePUT\u003c/code\u003e, \u003ccode\u003eGET\u003c/code\u003e, etc.\n\u003c/p\u003e",
          "module": "Network.AWS.Authentication",
          "name": "s3operation",
          "package": "hS3",
          "signature": "RequestMethod",
          "source": "src/Network-AWS-Authentication.html#S3Action",
          "type": "function"
        },
        "index": {
          "description": "Type of action PUT GET etc",
          "hierarchy": "Network AWS Authentication",
          "module": "Network.AWS.Authentication",
          "name": "s3operation",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-Authentication.html#v:s3operation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery parameters (requires a prefix of \u003ccode\u003e?\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Network.AWS.Authentication",
          "name": "s3query",
          "package": "hS3",
          "signature": "String",
          "source": "src/Network-AWS-Authentication.html#S3Action",
          "type": "function"
        },
        "index": {
          "description": "Query parameters requires prefix of",
          "hierarchy": "Network AWS Authentication",
          "module": "Network.AWS.Authentication",
          "name": "s3query",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-Authentication.html#v:s3query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBucket interface for Amazon S3\n API Version 2006-03-01\n \u003ca\u003ehttp://docs.amazonwebservices.com/AmazonS3/2006-03-01/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "S3Bucket",
          "package": "hS3",
          "source": "src/Network-AWS-S3Bucket.html",
          "type": "module"
        },
        "index": {
          "description": "Bucket interface for Amazon S3 API Version http docs.amazonwebservices.com AmazonS3",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "S3Bucket",
          "package": "hS3",
          "partial": "Bucket",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a result set response truncated?\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "IsTruncated",
          "package": "hS3",
          "source": "src/Network-AWS-S3Bucket.html#IsTruncated",
          "type": "type"
        },
        "index": {
          "description": "Is result set response truncated",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "IsTruncated",
          "package": "hS3",
          "partial": "Is Truncated",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#t:IsTruncated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList request parameters\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "ListRequest",
          "package": "hS3",
          "source": "src/Network-AWS-S3Bucket.html#ListRequest",
          "type": "data"
        },
        "index": {
          "description": "List request parameters",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "ListRequest",
          "package": "hS3",
          "partial": "List Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#t:ListRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult from listing objects.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "ListResult",
          "package": "hS3",
          "source": "src/Network-AWS-S3Bucket.html#ListResult",
          "type": "data"
        },
        "index": {
          "description": "Result from listing objects",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "ListResult",
          "package": "hS3",
          "partial": "List Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#t:ListResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Bucket",
          "name": "S3Bucket",
          "package": "hS3",
          "source": "src/Network-AWS-S3Bucket.html#S3Bucket",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "S3Bucket",
          "package": "hS3",
          "partial": "Bucket",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#t:S3Bucket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Bucket",
          "name": "VersioningConfiguration",
          "package": "hS3",
          "source": "src/Network-AWS-S3Bucket.html#VersioningConfiguration",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "VersioningConfiguration",
          "package": "hS3",
          "partial": "Versioning Configuration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#t:VersioningConfiguration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Bucket",
          "name": "VersioningStatus",
          "package": "hS3",
          "source": "src/Network-AWS-S3Bucket.html#VersioningStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "VersioningStatus",
          "package": "hS3",
          "partial": "Versioning Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#t:VersioningStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Bucket",
          "name": "ListRequest",
          "package": "hS3",
          "signature": "ListRequest",
          "source": "src/Network-AWS-S3Bucket.html#ListRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "ListRequest",
          "package": "hS3",
          "partial": "List Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:ListRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Bucket",
          "name": "ListResult",
          "package": "hS3",
          "signature": "ListResult",
          "source": "src/Network-AWS-S3Bucket.html#ListResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "ListResult",
          "package": "hS3",
          "partial": "List Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:ListResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Bucket",
          "name": "S3Bucket",
          "package": "hS3",
          "signature": "S3Bucket",
          "source": "src/Network-AWS-S3Bucket.html#S3Bucket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "S3Bucket",
          "package": "hS3",
          "partial": "Bucket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:S3Bucket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Bucket",
          "name": "VersioningConfiguration",
          "package": "hS3",
          "signature": "VersioningConfiguration",
          "source": "src/Network-AWS-S3Bucket.html#VersioningConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "VersioningConfiguration",
          "package": "hS3",
          "partial": "Versioning Configuration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:VersioningConfiguration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Bucket",
          "name": "VersioningDisabled",
          "package": "hS3",
          "signature": "VersioningDisabled",
          "source": "src/Network-AWS-S3Bucket.html#VersioningStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "VersioningDisabled",
          "package": "hS3",
          "partial": "Versioning Disabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:VersioningDisabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Bucket",
          "name": "VersioningEnabled",
          "package": "hS3",
          "signature": "VersioningEnabled",
          "source": "src/Network-AWS-S3Bucket.html#VersioningStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "VersioningEnabled",
          "package": "hS3",
          "partial": "Versioning Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:VersioningEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Bucket",
          "name": "VersioningSuspended",
          "package": "hS3",
          "signature": "VersioningSuspended",
          "source": "src/Network-AWS-S3Bucket.html#VersioningStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "VersioningSuspended",
          "package": "hS3",
          "partial": "Versioning Suspended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:VersioningSuspended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Bucket",
          "name": "bucket_creation_date",
          "package": "hS3",
          "signature": "String",
          "source": "src/Network-AWS-S3Bucket.html#S3Bucket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "bucket_creation_date",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:bucket_creation_date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Bucket",
          "name": "bucket_name",
          "package": "hS3",
          "signature": "String",
          "source": "src/Network-AWS-S3Bucket.html#S3Bucket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "bucket_name",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:bucket_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new bucket on S3 with the given name.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "createBucket",
          "package": "hS3",
          "signature": "AWSConnection-\u003e String-\u003e IO (AWSResult ())",
          "type": "function"
        },
        "index": {
          "description": "Create new bucket on S3 with the given name",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "createBucket",
          "normalized": "AWSConnection-\u003eString-\u003eIO(AWSResult())",
          "package": "hS3",
          "partial": "Bucket",
          "signature": "AWSConnection-\u003eString-\u003eIO(AWSResult())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:createBucket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new bucket on S3 with the given name.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "createBucketIn",
          "package": "hS3",
          "signature": "AWSConnection-\u003e String-\u003e String-\u003e IO (AWSResult ())",
          "type": "function"
        },
        "index": {
          "description": "Create new bucket on S3 with the given name",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "createBucketIn",
          "normalized": "AWSConnection-\u003eString-\u003eString-\u003eIO(AWSResult())",
          "package": "hS3",
          "partial": "Bucket In",
          "signature": "AWSConnection-\u003eString-\u003eString-\u003eIO(AWSResult())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:createBucketIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee createBucketWithPrefixIn, but hardcoded for the US\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "createBucketWithPrefix",
          "package": "hS3",
          "signature": "AWSConnection-\u003e String-\u003e IO (AWSResult String)",
          "type": "function"
        },
        "index": {
          "description": "see createBucketWithPrefixIn but hardcoded for the US",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "createBucketWithPrefix",
          "normalized": "AWSConnection-\u003eString-\u003eIO(AWSResult String)",
          "package": "hS3",
          "partial": "Bucket With Prefix",
          "signature": "AWSConnection-\u003eString-\u003eIO(AWSResult String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:createBucketWithPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new bucket on S3 with the given prefix, and a random\n   suffix.  This can be used to programatically create buckets\n   without of naming conflicts.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "createBucketWithPrefixIn",
          "package": "hS3",
          "signature": "AWSConnection-\u003e String-\u003e String-\u003e IO (AWSResult String)",
          "type": "function"
        },
        "index": {
          "description": "Create new bucket on S3 with the given prefix and random suffix This can be used to programatically create buckets without of naming conflicts",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "createBucketWithPrefixIn",
          "normalized": "AWSConnection-\u003eString-\u003eString-\u003eIO(AWSResult String)",
          "package": "hS3",
          "partial": "Bucket With Prefix In",
          "signature": "AWSConnection-\u003eString-\u003eString-\u003eIO(AWSResult String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:createBucketWithPrefixIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a bucket with the given name on S3.  The bucket must be\n   empty for deletion to succeed.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "deleteBucket",
          "package": "hS3",
          "signature": "AWSConnection-\u003e String-\u003e IO (AWSResult ())",
          "type": "function"
        },
        "index": {
          "description": "Delete bucket with the given name on S3 The bucket must be empty for deletion to succeed",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "deleteBucket",
          "normalized": "AWSConnection-\u003eString-\u003eIO(AWSResult())",
          "package": "hS3",
          "partial": "Bucket",
          "signature": "AWSConnection-\u003eString-\u003eIO(AWSResult())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:deleteBucket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Bucket",
          "name": "delimiter",
          "package": "hS3",
          "signature": "String",
          "source": "src/Network-AWS-S3Bucket.html#ListRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "delimiter",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:delimiter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty a bucket of all objects.  Iterates through all objects\n   issuing delete commands, so time is proportional to number of\n   objects in the bucket.  At this time, delete requests are free\n   from Amazon.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "emptyBucket",
          "package": "hS3",
          "signature": "AWSConnection-\u003e String-\u003e IO (AWSResult ())",
          "type": "function"
        },
        "index": {
          "description": "Empty bucket of all objects Iterates through all objects issuing delete commands so time is proportional to number of objects in the bucket At this time delete requests are free from Amazon",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "emptyBucket",
          "normalized": "AWSConnection-\u003eString-\u003eIO(AWSResult())",
          "package": "hS3",
          "partial": "Bucket",
          "signature": "AWSConnection-\u003eString-\u003eIO(AWSResult())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:emptyBucket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMD5\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "etag",
          "package": "hS3",
          "signature": "String",
          "source": "src/Network-AWS-S3Bucket.html#ListResult",
          "type": "function"
        },
        "index": {
          "description": "MD5",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "etag",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:etag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePhysical location of the bucket. \u003ca\u003eUS\u003c/a\u003e or \u003ca\u003eEU\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "getBucketLocation",
          "package": "hS3",
          "signature": "AWSConnection-\u003e String-\u003e IO (AWSResult String)",
          "type": "function"
        },
        "index": {
          "description": "Physical location of the bucket US or EU",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "getBucketLocation",
          "normalized": "AWSConnection-\u003eString-\u003eIO(AWSResult String)",
          "package": "hS3",
          "partial": "Bucket Location",
          "signature": "AWSConnection-\u003eString-\u003eIO(AWSResult String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:getBucketLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the storage class of an object from S3.\n   For checking more than one object's storage class efficiently,\n   use listObjects.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "getObjectStorageClass",
          "package": "hS3",
          "signature": "AWSConnection -\u003e S3Object -\u003e IO (AWSResult StorageClass)",
          "source": "src/Network-AWS-S3Bucket.html#getObjectStorageClass",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the storage class of an object from S3 For checking more than one object storage class efficiently use listObjects",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "getObjectStorageClass",
          "normalized": "AWSConnection-\u003eS Object-\u003eIO(AWSResult StorageClass)",
          "package": "hS3",
          "partial": "Object Storage Class",
          "signature": "AWSConnection-\u003eS Object-\u003eIO(AWSResult StorageClass)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:getObjectStorageClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck versioning and MFA configuration of a bucket.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "getVersioningConfiguration",
          "package": "hS3",
          "signature": "AWSConnection-\u003e String-\u003e IO (AWSResult VersioningConfiguration)",
          "type": "function"
        },
        "index": {
          "description": "Check versioning and MFA configuration of bucket",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "getVersioningConfiguration",
          "normalized": "AWSConnection-\u003eString-\u003eIO(AWSResult VersioningConfiguration)",
          "package": "hS3",
          "partial": "Versioning Configuration",
          "signature": "AWSConnection-\u003eString-\u003eIO(AWSResult VersioningConfiguration)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:getVersioningConfiguration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck Amazon guidelines on bucket naming.  (missing test for IP-like names)\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "isBucketNameValid",
          "package": "hS3",
          "signature": "String -\u003e Bool",
          "source": "src/Network-AWS-S3Bucket.html#isBucketNameValid",
          "type": "function"
        },
        "index": {
          "description": "Check Amazon guidelines on bucket naming missing test for IP-like names",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "isBucketNameValid",
          "normalized": "String-\u003eBool",
          "package": "hS3",
          "partial": "Bucket Name Valid",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:isBucketNameValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of object\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "key",
          "package": "hS3",
          "signature": "String",
          "source": "src/Network-AWS-S3Bucket.html#ListResult",
          "type": "function"
        },
        "index": {
          "description": "Name of object",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "key",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLast modification date\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "last_modified",
          "package": "hS3",
          "signature": "String",
          "source": "src/Network-AWS-S3Bucket.html#ListResult",
          "type": "function"
        },
        "index": {
          "description": "Last modification date",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "last_modified",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:last_modified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly query the server for all objects in a bucket, ignoring the \u003ccode\u003emax_keys\u003c/code\u003e field.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "listAllObjects",
          "package": "hS3",
          "signature": "AWSConnection-\u003e String-\u003e ListRequest-\u003e IO (AWSResult [ListResult])",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly query the server for all objects in bucket ignoring the max keys field",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "listAllObjects",
          "normalized": "AWSConnection-\u003eString-\u003eListRequest-\u003eIO(AWSResult[ListResult])",
          "package": "hS3",
          "partial": "All Objects",
          "signature": "AWSConnection-\u003eString-\u003eListRequest-\u003eIO(AWSResult[ListResult])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:listAllObjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of all bucket names and creation dates.  S3\n   allows a maximum of 100 buckets per user.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "listBuckets",
          "package": "hS3",
          "signature": "AWSConnection-\u003e IO (AWSResult [S3Bucket])",
          "type": "function"
        },
        "index": {
          "description": "Return list of all bucket names and creation dates S3 allows maximum of buckets per user",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "listBuckets",
          "normalized": "AWSConnection-\u003eIO(AWSResult[S Bucket])",
          "package": "hS3",
          "partial": "Buckets",
          "signature": "AWSConnection-\u003eIO(AWSResult[S Bucket])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:listBuckets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList objects in a bucket, based on parameters from \u003ccode\u003e\u003ca\u003eListRequest\u003c/a\u003e\u003c/code\u003e.  See\n   the Amazon S3 developer resources for in depth explanation of how\n   the fields in \u003ccode\u003e\u003ca\u003eListRequest\u003c/a\u003e\u003c/code\u003e can be used to query for objects.\n   \u003ca\u003ehttp://docs.amazonwebservices.com/AmazonS3/2006-03-01/ListingKeysRequest.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "listObjects",
          "package": "hS3",
          "signature": "AWSConnection-\u003e String-\u003e ListRequest-\u003e IO (AWSResult (IsTruncated, [ListResult]))",
          "type": "function"
        },
        "index": {
          "description": "List objects in bucket based on parameters from ListRequest See the Amazon S3 developer resources for in depth explanation of how the fields in ListRequest can be used to query for objects http docs.amazonwebservices.com AmazonS3 ListingKeysRequest.html",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "listObjects",
          "normalized": "AWSConnection-\u003eString-\u003eListRequest-\u003eIO(AWSResult(IsTruncated,[ListResult]))",
          "package": "hS3",
          "partial": "Objects",
          "signature": "AWSConnection-\u003eString-\u003eListRequest-\u003eIO(AWSResult(IsTruncated,[ListResult]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:listObjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Bucket",
          "name": "marker",
          "package": "hS3",
          "signature": "String",
          "source": "src/Network-AWS-S3Bucket.html#ListRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "marker",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:marker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Bucket",
          "name": "max_keys",
          "package": "hS3",
          "signature": "Int",
          "source": "src/Network-AWS-S3Bucket.html#ListRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "max_keys",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:max_keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Bucket",
          "name": "mfaDeleteEnabled",
          "package": "hS3",
          "signature": "Bool",
          "source": "src/Network-AWS-S3Bucket.html#VersioningConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "mfaDeleteEnabled",
          "package": "hS3",
          "partial": "Delete Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:mfaDeleteEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Bucket",
          "name": "prefix",
          "package": "hS3",
          "signature": "String",
          "source": "src/Network-AWS-S3Bucket.html#ListRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "prefix",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the versioning configuration of a bucket (MFA not yet supported).\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "setVersioningConfiguration",
          "package": "hS3",
          "signature": "AWSConnection-\u003e String-\u003e VersioningConfiguration-\u003e IO (AWSResult ())",
          "type": "function"
        },
        "index": {
          "description": "Set the versioning configuration of bucket MFA not yet supported",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "setVersioningConfiguration",
          "normalized": "AWSConnection-\u003eString-\u003eVersioningConfiguration-\u003eIO(AWSResult())",
          "package": "hS3",
          "partial": "Versioning Configuration",
          "signature": "AWSConnection-\u003eString-\u003eVersioningConfiguration-\u003eIO(AWSResult())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:setVersioningConfiguration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBytes of object data\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "size",
          "package": "hS3",
          "signature": "Integer",
          "source": "src/Network-AWS-S3Bucket.html#ListResult",
          "type": "function"
        },
        "index": {
          "description": "Bytes of object data",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "size",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStorage class of the object\n\u003c/p\u003e",
          "module": "Network.AWS.S3Bucket",
          "name": "storageClass",
          "package": "hS3",
          "signature": "StorageClass",
          "source": "src/Network-AWS-S3Bucket.html#ListResult",
          "type": "function"
        },
        "index": {
          "description": "Storage class of the object",
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "storageClass",
          "package": "hS3",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:storageClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Bucket",
          "name": "versioningStatus",
          "package": "hS3",
          "signature": "VersioningStatus",
          "source": "src/Network-AWS-S3Bucket.html#VersioningConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS S3Bucket",
          "module": "Network.AWS.S3Bucket",
          "name": "versioningStatus",
          "package": "hS3",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Bucket.html#v:versioningStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eObject interface for Amazon S3\n API Version 2006-03-01\n \u003ca\u003ehttp://docs.amazonwebservices.com/AmazonS3/2006-03-01/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.AWS.S3Object",
          "name": "S3Object",
          "package": "hS3",
          "source": "src/Network-AWS-S3Object.html",
          "type": "module"
        },
        "index": {
          "description": "Object interface for Amazon S3 API Version http docs.amazonwebservices.com AmazonS3",
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "S3Object",
          "package": "hS3",
          "partial": "Object",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn object that can be stored and retrieved from S3.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Object",
          "name": "S3Object",
          "package": "hS3",
          "source": "src/Network-AWS-S3Object.html#S3Object",
          "type": "data"
        },
        "index": {
          "description": "An object that can be stored and retrieved from S3",
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "S3Object",
          "package": "hS3",
          "partial": "Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#t:S3Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Object",
          "name": "StorageClass",
          "package": "hS3",
          "source": "src/Network-AWS-S3Object.html#StorageClass",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "StorageClass",
          "package": "hS3",
          "partial": "Storage Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#t:StorageClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Object",
          "name": "REDUCED_REDUNDANCY",
          "package": "hS3",
          "signature": "REDUCED_REDUNDANCY",
          "source": "src/Network-AWS-S3Object.html#StorageClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "REDUCED_REDUNDANCY",
          "package": "hS3",
          "partial": "REDUCED REDUNDANCY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:REDUCED_REDUNDANCY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Object",
          "name": "S3Object",
          "package": "hS3",
          "signature": "S3Object",
          "source": "src/Network-AWS-S3Object.html#S3Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "S3Object",
          "package": "hS3",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:S3Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AWS.S3Object",
          "name": "STANDARD",
          "package": "hS3",
          "signature": "STANDARD",
          "source": "src/Network-AWS-S3Object.html#StorageClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "STANDARD",
          "package": "hS3",
          "partial": "STANDARD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:STANDARD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA standard MIME type describing the format of the\n   contents.  If not specified, \u003ccode\u003ebinary/octet-stream\u003c/code\u003e is\n   used.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Object",
          "name": "content_type",
          "package": "hS3",
          "signature": "String",
          "source": "src/Network-AWS-S3Object.html#S3Object",
          "type": "function"
        },
        "index": {
          "description": "standard MIME type describing the format of the contents If not specified binary octet-stream is used",
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "content_type",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:content_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy object from one bucket to another (or the same bucket), preserving the original headers.\n   Headers from \u003ccode\u003edestobj\u003c/code\u003e are sent, while only the\n   bucket and name of \u003ccode\u003esrcobj\u003c/code\u003e are used.  For the best\n   performance, when changing headers during a copy, use the\n   \u003ccode\u003e\u003ca\u003ecopyObjectWithReplace\u003c/a\u003e\u003c/code\u003e function.  For conditional copying, the\n   following headers set on the destination object may be used:\n   \u003ccode\u003ex-amz-copy-source-if-match\u003c/code\u003e, \u003ccode\u003ex-amz-copy-source-if-none-match\u003c/code\u003e,\n   \u003ccode\u003ex-amz-copy-source-if-unmodified-since\u003c/code\u003e, or\n   \u003ccode\u003ex-amz-copy-source-if-modified-since\u003c/code\u003e.  See\n   \u003ca\u003ehttp://docs.amazonwebservices.com/AmazonS3/2006-03-01/API/index.html?RESTObjectCOPY.html\u003c/a\u003e\n   for more details.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Object",
          "name": "copyObject",
          "package": "hS3",
          "signature": "AWSConnection-\u003e S3Object-\u003e S3Object-\u003e IO (AWSResult S3Object)",
          "type": "function"
        },
        "index": {
          "description": "Copy object from one bucket to another or the same bucket preserving the original headers Headers from destobj are sent while only the bucket and name of srcobj are used For the best performance when changing headers during copy use the copyObjectWithReplace function For conditional copying the following headers set on the destination object may be used x-amz-copy-source-if-match x-amz-copy-source-if-none-match x-amz-copy-source-if-unmodified-since or x-amz-copy-source-if-modified-since See http docs.amazonwebservices.com AmazonS3 API index.html RESTObjectCOPY.html for more details",
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "copyObject",
          "normalized": "AWSConnection-\u003eS Object-\u003eS Object-\u003eIO(AWSResult S Object)",
          "package": "hS3",
          "partial": "Object",
          "signature": "AWSConnection-\u003eS Object-\u003eS Object-\u003eIO(AWSResult S Object)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:copyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy object from one bucket to another (or the same bucket), replacing headers.\n   Any headers from \u003ccode\u003esrcobj\u003c/code\u003e are ignored, and only those\n   set in \u003ccode\u003edestobj\u003c/code\u003e are used.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Object",
          "name": "copyObjectWithReplace",
          "package": "hS3",
          "signature": "AWSConnection-\u003e S3Object-\u003e S3Object-\u003e IO (AWSResult S3Object)",
          "type": "function"
        },
        "index": {
          "description": "Copy object from one bucket to another or the same bucket replacing headers Any headers from srcobj are ignored and only those set in destobj are used",
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "copyObjectWithReplace",
          "normalized": "AWSConnection-\u003eS Object-\u003eS Object-\u003eIO(AWSResult S Object)",
          "package": "hS3",
          "partial": "Object With Replace",
          "signature": "AWSConnection-\u003eS Object-\u003eS Object-\u003eIO(AWSResult S Object)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:copyObjectWithReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete an object.  Only bucket and object name need to be\n   specified in the S3Object.  Deletion of a non-existent object\n   does not return an error.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Object",
          "name": "deleteObject",
          "package": "hS3",
          "signature": "AWSConnection-\u003e S3Object-\u003e IO (AWSResult ())",
          "type": "function"
        },
        "index": {
          "description": "Delete an object Only bucket and object name need to be specified in the S3Object Deletion of non-existent object does not return an error",
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "deleteObject",
          "normalized": "AWSConnection-\u003eS Object-\u003eIO(AWSResult())",
          "package": "hS3",
          "partial": "Object",
          "signature": "AWSConnection-\u003eS Object-\u003eIO(AWSResult())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:deleteObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve an object.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Object",
          "name": "getObject",
          "package": "hS3",
          "signature": "AWSConnection-\u003e S3Object-\u003e IO (AWSResult S3Object)",
          "type": "function"
        },
        "index": {
          "description": "Retrieve an object",
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "getObject",
          "normalized": "AWSConnection-\u003eS Object-\u003eIO(AWSResult S Object)",
          "package": "hS3",
          "partial": "Object",
          "signature": "AWSConnection-\u003eS Object-\u003eIO(AWSResult S Object)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:getObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet object info without retrieving content body from server.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Object",
          "name": "getObjectInfo",
          "package": "hS3",
          "signature": "AWSConnection-\u003e S3Object-\u003e IO (AWSResult S3Object)",
          "type": "function"
        },
        "index": {
          "description": "Get object info without retrieving content body from server",
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "getObjectInfo",
          "normalized": "AWSConnection-\u003eS Object-\u003eIO(AWSResult S Object)",
          "package": "hS3",
          "partial": "Object Info",
          "signature": "AWSConnection-\u003eS Object-\u003eIO(AWSResult S Object)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:getObjectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the storage class of a local S3Object.\n   Does not work for objects retrieved with \u003ccode\u003e\u003ca\u003egetObject\u003c/a\u003e\u003c/code\u003e, since the\n   required header values are not returned.  Use\n   \u003ccode\u003egetObjectStorageClass\u003c/code\u003e or \u003ccode\u003elistObjects\u003c/code\u003e from S3Bucket module to\n   determine storage class of existing objects.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Object",
          "name": "getStorageClass",
          "package": "hS3",
          "signature": "S3Object-\u003e Maybe StorageClass",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the storage class of local S3Object Does not work for objects retrieved with getObject since the required header values are not returned Use getObjectStorageClass or listObjects from S3Bucket module to determine storage class of existing objects",
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "getStorageClass",
          "normalized": "S Object-\u003eMaybe StorageClass",
          "package": "hS3",
          "partial": "Storage Class",
          "signature": "S Object-\u003eMaybe StorageClass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:getStorageClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the bucket containing this object\n\u003c/p\u003e",
          "module": "Network.AWS.S3Object",
          "name": "obj_bucket",
          "package": "hS3",
          "signature": "String",
          "source": "src/Network-AWS-S3Object.html#S3Object",
          "type": "function"
        },
        "index": {
          "description": "Name of the bucket containing this object",
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "obj_bucket",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:obj_bucket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObject data.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Object",
          "name": "obj_data",
          "package": "hS3",
          "signature": "ByteString",
          "source": "src/Network-AWS-S3Object.html#S3Object",
          "type": "function"
        },
        "index": {
          "description": "Object data",
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "obj_data",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:obj_data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObject metadata in (key,value) pairs.  Key names\n   should use the prefix \u003ccode\u003ex-amz-meta-\u003c/code\u003e to be stored with\n   the object.  The total HTTP request must be under 4KB,\n   including these headers.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Object",
          "name": "obj_headers",
          "package": "hS3",
          "signature": "[(String, String)]",
          "source": "src/Network-AWS-S3Object.html#S3Object",
          "type": "function"
        },
        "index": {
          "description": "Object metadata in key value pairs Key names should use the prefix x-amz-meta to be stored with the object The total HTTP request must be under KB including these headers",
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "obj_headers",
          "normalized": "[(String,String)]",
          "package": "hS3",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:obj_headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURI of the object.  Subresources (\u003ca\u003e?acl\u003c/a\u003e or\n | \u003ca\u003e?torrent\u003c/a\u003e) should be suffixed onto this name.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Object",
          "name": "obj_name",
          "package": "hS3",
          "signature": "String",
          "source": "src/Network-AWS-S3Object.html#S3Object",
          "type": "function"
        },
        "index": {
          "description": "URI of the object Subresources acl or torrent should be suffixed onto this name",
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "obj_name",
          "package": "hS3",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:obj_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a pre-signed request URI.  Anyone can use this to request\n   an object for the number of seconds specified.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Object",
          "name": "publicUriForSeconds",
          "package": "hS3",
          "signature": "AWSConnection-\u003e S3Object-\u003e Integer-\u003e IO URI",
          "type": "function"
        },
        "index": {
          "description": "Create pre-signed request URI Anyone can use this to request an object for the number of seconds specified",
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "publicUriForSeconds",
          "normalized": "AWSConnection-\u003eS Object-\u003eInteger-\u003eIO URI",
          "package": "hS3",
          "partial": "Uri For Seconds",
          "signature": "AWSConnection-\u003eS Object-\u003eInteger-\u003eIO URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:publicUriForSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a pre-signed request URI.  Anyone can use this to request\n   an object until the specified date.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Object",
          "name": "publicUriUntilTime",
          "package": "hS3",
          "signature": "AWSConnection-\u003e S3Object-\u003e Integer-\u003e URI",
          "type": "function"
        },
        "index": {
          "description": "Create pre-signed request URI Anyone can use this to request an object until the specified date",
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "publicUriUntilTime",
          "normalized": "AWSConnection-\u003eS Object-\u003eInteger-\u003eURI",
          "package": "hS3",
          "partial": "Uri Until Time",
          "signature": "AWSConnection-\u003eS Object-\u003eInteger-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:publicUriUntilTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the storage class (and only the storage class) of an existing object.\n   This actually performs a copy to the same location, preserving metadata.\n   It is not clear to me whether ACLs are preserved when copying to the same location.\n   For best performance, we must not change other headers during storage class\n   changes.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Object",
          "name": "rewriteStorageClass",
          "package": "hS3",
          "signature": "AWSConnection-\u003e StorageClass-\u003e S3Object-\u003e IO (AWSResult S3Object)",
          "type": "function"
        },
        "index": {
          "description": "Change the storage class and only the storage class of an existing object This actually performs copy to the same location preserving metadata It is not clear to me whether ACLs are preserved when copying to the same location For best performance we must not change other headers during storage class changes",
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "rewriteStorageClass",
          "normalized": "AWSConnection-\u003eStorageClass-\u003eS Object-\u003eIO(AWSResult S Object)",
          "package": "hS3",
          "partial": "Storage Class",
          "signature": "AWSConnection-\u003eStorageClass-\u003eS Object-\u003eIO(AWSResult S Object)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:rewriteStorageClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend data for an object.\n   If the header \u003ca\u003eContent-Length\u003c/a\u003e is not set, all content must be read into\n   memory prior to sending.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Object",
          "name": "sendObject",
          "package": "hS3",
          "signature": "AWSConnection-\u003e S3Object-\u003e IO (AWSResult ())",
          "type": "function"
        },
        "index": {
          "description": "Send data for an object If the header Content-Length is not set all content must be read into memory prior to sending",
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "sendObject",
          "normalized": "AWSConnection-\u003eS Object-\u003eIO(AWSResult())",
          "package": "hS3",
          "partial": "Object",
          "signature": "AWSConnection-\u003eS Object-\u003eIO(AWSResult())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:sendObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend data for an object, with message integrity check.  This\n   version of sendObject will add an MD5 message integrity check so\n   that transmission errors will be detected, but requires the message\n   be read into memory before being sent.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Object",
          "name": "sendObjectMIC",
          "package": "hS3",
          "signature": "AWSConnection-\u003e S3Object-\u003e IO (AWSResult ())",
          "type": "function"
        },
        "index": {
          "description": "Send data for an object with message integrity check This version of sendObject will add an MD5 message integrity check so that transmission errors will be detected but requires the message be read into memory before being sent",
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "sendObjectMIC",
          "normalized": "AWSConnection-\u003eS Object-\u003eIO(AWSResult())",
          "package": "hS3",
          "partial": "Object MIC",
          "signature": "AWSConnection-\u003eS Object-\u003eIO(AWSResult())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:sendObjectMIC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd required headers for the storage class.\n   Use this in combination with \u003ccode\u003e\u003ca\u003esendObject\u003c/a\u003e\u003c/code\u003e for new objects.  To\n   modify the storage class of existing objects, use\n   \u003ccode\u003e\u003ca\u003erewriteStorageClass\u003c/a\u003e\u003c/code\u003e.  Using reduced redundancy for object storage\n   trades off redundancy for storage costs.\n\u003c/p\u003e",
          "module": "Network.AWS.S3Object",
          "name": "setStorageClass",
          "package": "hS3",
          "signature": "StorageClass-\u003e S3Object-\u003e S3Object",
          "type": "function"
        },
        "index": {
          "description": "Add required headers for the storage class Use this in combination with sendObject for new objects To modify the storage class of existing objects use rewriteStorageClass Using reduced redundancy for object storage trades off redundancy for storage costs",
          "hierarchy": "Network AWS S3Object",
          "module": "Network.AWS.S3Object",
          "name": "setStorageClass",
          "normalized": "StorageClass-\u003eS Object-\u003eS Object",
          "package": "hS3",
          "partial": "Storage Class",
          "signature": "StorageClass-\u003eS Object-\u003eS Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hS3/docs/Network-AWS-S3Object.html#v:setStorageClass"
      }
    }
  ]
]