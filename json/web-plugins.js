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
        "word": "web-plugins"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eweb-plugins\u003c/code\u003e is a very general purpose plugin system for web applications.\n\u003c/p\u003e\u003cp\u003eIt provides facilities for loading multiple plugins and a single\ntheme. In the future, the \u003ccode\u003eweb-plugins-dynamic\u003c/code\u003e library will allow\nplugins and themes to be loaded and unloaded at runtime.\n\u003c/p\u003e\u003cp\u003eA key aspect of \u003ccode\u003eweb-plugins\u003c/code\u003e is that all plugins for a particular system\nhave the same type signature. This is what makes it possible to load\nnew plugins at runtime.\n\u003c/p\u003e\u003cp\u003eThis plugin system is not tied to any particular web server framework\nor template engine.\n\u003c/p\u003e\u003cp\u003eThere are four steps to using \u003ccode\u003eweb-plugins\u003c/code\u003e:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e initialize the plugins system\n\u003c/li\u003e\u003cli\u003e initialize the individual plugins\n\u003c/li\u003e\u003cli\u003e set the theme\n\u003c/li\u003e\u003cli\u003e route incoming requests to the correct plugin\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eTo use \u003ccode\u003eweb-plugins\u003c/code\u003e, you first initialize a \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e handle.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e handle is heavily parameterized:\n\u003c/p\u003e\u003cpre\u003e newtype Plugins theme m hook config st = ...\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003etheme\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is (not suprisingly) the type for you theme.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003em\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is the monad that your plugin handlers will run in. (e.g., \u003ccode\u003eServerPart\u003c/code\u003e)\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ehook\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is additional actions that should be called after the plugins have been initialized\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003econfig\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e provides read-only configuration information\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003est\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e provides mutable state that is shared between all plugins. (There is a separate mechanism for plugin-local state.)\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe plugin system is typically started by using \u003ccode\u003e\u003ca\u003ewithPlugins\u003c/a\u003e\u003c/code\u003e. Though,\nif needed, you can call \u003ccode\u003e\u003ca\u003einitPlugins\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edestroyPlugins\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePlugin\u003c/a\u003e\u003c/code\u003e record is used to create a plugin:\n\u003c/p\u003e\u003cpre\u003e\ndata Plugin url theme n hook config st = Plugin\n    { pluginName         :: PluginName\n    , pluginInit         :: Plugins theme n hook config st -\u003e IO (Maybe Text)\n    , pluginDepends      :: [PluginName]   -- ^ plugins which much be initialized before this one can be\n    , pluginToPathInfo   :: url -\u003e Text\n    , pluginPostHook     :: hook\n    }\n\u003c/pre\u003e\u003cp\u003eYou will note that it has the same type parameters as \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e plus an additional \u003ccode\u003eurl\u003c/code\u003e parameter.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003epluginName\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is a simple \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value which should uniquely identify the plugin.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003epluginInit\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e will be called automatically when the plugin is loaded.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003epluginDepends\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is a list of plugins which must be loaded before this plugin can be initialized.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003epluginToPathInfo\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is the function that is used to convert the \u003ccode\u003eurl\u003c/code\u003e type to an actual URL.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003epluginPostHook\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is the hook that you want called after the system has been initialized.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePlugin\u003c/a\u003e\u003c/code\u003e is initialized using the \u003ccode\u003e\u003ca\u003einitPlugin\u003c/a\u003e\u003c/code\u003e function (which calls the \u003ccode\u003e\u003ca\u003epluginInit\u003c/a\u003e\u003c/code\u003e field among other things).\n\u003c/p\u003e\u003cpre\u003e\n-- | initialize a plugin\ninitPlugin :: (Typeable url) =\u003e\n              Plugins theme n hook config st    -- ^ \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e handle\n           -\u003e Text                              -- ^ base URI to prepend to generated URLs\n           -\u003e Plugin url theme n hook config st -- ^ \u003ccode\u003e\u003ca\u003ePlugin\u003c/a\u003e\u003c/code\u003e to initialize\n           -\u003e IO (Maybe Text)                   -- ^ possible error message\n\u003c/pre\u003e\u003cp\u003eA lot of the magic happens in the \u003ccode\u003e\u003ca\u003epluginInit\u003c/a\u003e\u003c/code\u003e function in the\n\u003ccode\u003e\u003ca\u003ePlugin\u003c/a\u003e\u003c/code\u003e record. Let's look at a simple example. We will use the\nfollowing type aliases to parameterize the \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePlugin\u003c/a\u003e\u003c/code\u003e\ntype:\n\u003c/p\u003e\u003cpre\u003e\ntype ExamplePlugins    = Plugins    Theme (ServerPart Response) (IO ()) () ()\ntype ExamplePlugin url = Plugin url Theme (ServerPart Response) (IO ()) () ()\n\u003c/pre\u003e\u003cp\u003eHere is the initialization function for \u003ccode\u003emyPlugin\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\nmyInit :: ExamplePlugins -\u003e IO (Maybe Text)\nmyInit plugins =\n    do (Just clckShowFn) \u003c- getPluginRouteFn plugins (pluginName clckPlugin)\n       (Just myShowFn)   \u003c- getPluginRouteFn plugins (pluginName myPlugin)\n       acid \u003c- liftIO $ openLocalState MyState\n       addCleanup plugins OnNormal  (putStrLn \u003ca\u003emyPlugin: normal shutdown\u003c/a\u003e  \u003e\u003e createCheckpointAndClose acid)\n       addCleanup plugins OnFailure (putStrLn \u003ca\u003emyPlugin: failure shutdown\u003c/a\u003e \u003e\u003e closeAcidState acid)\n       addHandler plugins (pluginName myPlugin) (myPluginHandler acid clckShowFn myShowFn)\n       putStrLn \u003ca\u003emyInit completed.\u003c/a\u003e\n       return Nothing\n\u003c/pre\u003e\u003cp\u003eThere are a few things to note here:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003egetPluginRouteFn\u003c/a\u003e\u003c/code\u003e is used to retrieve the the URL route showing\nfunction for various plugins. In this case, the plugin needs to\ngenerate routes for itself and also routes in the \u003ccode\u003eclckPlugin\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNext it opens up an \u003ccode\u003eAcidState\u003c/code\u003e. It then registers two different\ncleanup functions. The \u003ccode\u003e\u003ca\u003eOnNormal\u003c/a\u003e\u003c/code\u003e cleanup will only be called if the\nsystem is shutdown normally. The \u003ccode\u003e\u003ca\u003eOnFailure\u003c/a\u003e\u003c/code\u003e will be called if the\nsystem is shutdown due to some error condition. If we wanted to\nperform the same shutdown procedure regardless of termination cause,\nwe could use the \u003ccode\u003e\u003ca\u003eAlways\u003c/a\u003e\u003c/code\u003e condition instead.\n\u003c/p\u003e\u003cp\u003ethe \u003ccode\u003e\u003ca\u003eaddHandler\u003c/a\u003e\u003c/code\u003e then registers the function which route requests for\nthis plugin:\n\u003c/p\u003e\u003cpre\u003e\naddHandler :: MonadIO m =\u003e\n              Plugins theme n hook config st\n            -\u003e PluginName -- plugin name / prefix\n            -\u003e (Plugins theme n hook config st -\u003e [Text] -\u003e n)\n            -\u003e m ()\n\u003c/pre\u003e\u003cp\u003eEach plugin should be registered using a unique prefix. When\nthe handler is called it will be passed the \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e handle and a\nlist of \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values. In practice, the list \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values is\ntypically the unconsumed path segments from the URL.\n\u003c/p\u003e\u003cp\u003eSetting the theme is done by calling the \u003ccode\u003e\u003ca\u003esetTheme\u003c/a\u003e\u003c/code\u003e function:\n\u003c/p\u003e\u003cpre\u003e\n-- | set the current \u003ccode\u003etheme\u003c/code\u003e\nsetTheme :: (MonadIO m) =\u003e\n            Plugins theme n hook config st\n         -\u003e Maybe theme\n         -\u003e m ()\n\u003c/pre\u003e\u003cp\u003eSetting the theme to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e will unload the theme but not load a new one.\n\u003c/p\u003e\u003cp\u003eIncoming requests are routed to the various plugins via the \u003ccode\u003e\u003ca\u003eserve\u003c/a\u003e\u003c/code\u003e function:\n\u003c/p\u003e\u003cpre\u003e\n-- | serve requests using the \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e handle\nserve :: Plugins theme n hook config st -- ^ \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e handle\n      -\u003e PluginName -- ^ name of the plugin to handle this request\n      -\u003e [Text]     -- ^ unconsume path segments to pass to handler\n      -\u003e IO (Either String n)\n\u003c/pre\u003e\u003cp\u003eThe expected usage is that you are going to have request with a url such as:\n\u003c/p\u003e\u003cpre\u003e /my/extra/path/segments\n\u003c/pre\u003e\u003cp\u003eThe code will treat the first path segment as the plugin to be called and pass in the remaining segments as the \u003ccode\u003e[Text]\u003c/code\u003e arguments:\n\u003c/p\u003e\u003cpre\u003e serve plugins \"my\" [\"extra\",\"path\",\"segments\"]\n\u003c/pre\u003e\u003cp\u003ethe \u003ccode\u003e\u003ca\u003eserve\u003c/a\u003e\u003c/code\u003e function itself knows nothing about the web -- it is\nframework agnostic. Here is a simple \u003ccode\u003emain\u003c/code\u003e function that shows how to\ntie everything together:\n\u003c/p\u003e\u003cpre\u003e main :: IO ()\n main =\n   withPlugins () () $ \\plugins -\u003e\n     do initPlugin plugins \"\" clckPlugin\n        initPlugin plugins \"\" myPlugin\n        setTheme plugins (Just theme)\n        hooks \u003c- getPostHooks plugins\n        sequence_ hooks\n        simpleHTTP nullConf $ path $ \\p -\u003e do\n          ps \u003c- fmap rqPaths askRq\n          r \u003c- liftIO $ serve plugins p (map Text.pack ps)\n          case r of\n            (Left e) -\u003e internalServerError $ toResponse e\n            (Right sp) -\u003e sp\n\u003c/pre\u003e\u003cp\u003eIn this example, we do not use the \u003ccode\u003econfig\u003c/code\u003e or \u003ccode\u003est\u003c/code\u003e parameters so we just set them to \u003ccode\u003e()\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that we are responsible for calling the hooks after we have initialized all the plugins.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Web.Plugins.Core",
          "name": "Core",
          "package": "web-plugins",
          "source": "src/Web-Plugins-Core.html",
          "type": "module"
        },
        "index": {
          "description": "web-plugins is very general purpose plugin system for web applications It provides facilities for loading multiple plugins and single theme In the future the web-plugins-dynamic library will allow plugins and themes to be loaded and unloaded at runtime key aspect of web-plugins is that all plugins for particular system have the same type signature This is what makes it possible to load new plugins at runtime This plugin system is not tied to any particular web server framework or template engine There are four steps to using web-plugins initialize the plugins system initialize the individual plugins set the theme route incoming requests to the correct plugin To use web-plugins you first initialize Plugins handle The Plugins handle is heavily parameterized newtype Plugins theme hook config st theme is not suprisingly the type for you theme is the monad that your plugin handlers will run in e.g ServerPart hook is additional actions that should be called after the plugins have been initialized config provides read-only configuration information st provides mutable state that is shared between all plugins There is separate mechanism for plugin-local state The plugin system is typically started by using withPlugins Though if needed you can call initPlugins and destroyPlugins instead The Plugin record is used to create plugin data Plugin url theme hook config st Plugin pluginName PluginName pluginInit Plugins theme hook config st IO Maybe Text pluginDepends PluginName plugins which much be initialized before this one can be pluginToPathInfo url Text pluginPostHook hook You will note that it has the same type parameters as Plugins plus an additional url parameter pluginName is simple Text value which should uniquely identify the plugin pluginInit will be called automatically when the plugin is loaded pluginDepends is list of plugins which must be loaded before this plugin can be initialized pluginToPathInfo is the function that is used to convert the url type to an actual URL pluginPostHook is the hook that you want called after the system has been initialized Plugin is initialized using the initPlugin function which calls the pluginInit field among other things initialize plugin initPlugin Typeable url Plugins theme hook config st Plugins handle Text base URI to prepend to generated URLs Plugin url theme hook config st Plugin to initialize IO Maybe Text possible error message lot of the magic happens in the pluginInit function in the Plugin record Let look at simple example We will use the following type aliases to parameterize the Plugins and Plugin type type ExamplePlugins Plugins Theme ServerPart Response IO type ExamplePlugin url Plugin url Theme ServerPart Response IO Here is the initialization function for myPlugin myInit ExamplePlugins IO Maybe Text myInit plugins do Just clckShowFn getPluginRouteFn plugins pluginName clckPlugin Just myShowFn getPluginRouteFn plugins pluginName myPlugin acid liftIO openLocalState MyState addCleanup plugins OnNormal putStrLn myPlugin normal shutdown createCheckpointAndClose acid addCleanup plugins OnFailure putStrLn myPlugin failure shutdown closeAcidState acid addHandler plugins pluginName myPlugin myPluginHandler acid clckShowFn myShowFn putStrLn myInit completed return Nothing There are few things to note here getPluginRouteFn is used to retrieve the the URL route showing function for various plugins In this case the plugin needs to generate routes for itself and also routes in the clckPlugin Next it opens up an AcidState It then registers two different cleanup functions The OnNormal cleanup will only be called if the system is shutdown normally The OnFailure will be called if the system is shutdown due to some error condition If we wanted to perform the same shutdown procedure regardless of termination cause we could use the Always condition instead the addHandler then registers the function which route requests for this plugin addHandler MonadIO Plugins theme hook config st PluginName plugin name prefix Plugins theme hook config st Text Each plugin should be registered using unique prefix When the handler is called it will be passed the Plugins handle and list of Text values In practice the list Text values is typically the unconsumed path segments from the URL Setting the theme is done by calling the setTheme function set the current theme setTheme MonadIO Plugins theme hook config st Maybe theme Setting the theme to Nothing will unload the theme but not load new one Incoming requests are routed to the various plugins via the serve function serve requests using the Plugins handle serve Plugins theme hook config st Plugins handle PluginName name of the plugin to handle this request Text unconsume path segments to pass to handler IO Either String The expected usage is that you are going to have request with url such as my extra path segments The code will treat the first path segment as the plugin to be called and pass in the remaining segments as the Text arguments serve plugins my extra path segments the serve function itself knows nothing about the web it is framework agnostic Here is simple main function that shows how to tie everything together main IO main withPlugins plugins do initPlugin plugins clckPlugin initPlugin plugins myPlugin setTheme plugins Just theme hooks getPostHooks plugins sequence hooks simpleHTTP nullConf path do ps fmap rqPaths askRq liftIO serve plugins map Text.pack ps case of Left internalServerError toResponse Right sp sp In this example we do not use the config or st parameters so we just set them to Note that we are responsible for calling the hooks after we have initialized all the plugins",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "Core",
          "package": "web-plugins",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCleanup\u003c/a\u003e\u003c/code\u003e is an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action to run when the server shuts\n down. The server can either shutdown normally or due to a\n failure. The \u003ccode\u003e\u003ca\u003eWhen\u003c/a\u003e\u003c/code\u003e parameter indicates when an action should run.\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "Cleanup",
          "package": "web-plugins",
          "source": "src/Web-Plugins-Core.html#Cleanup",
          "type": "data"
        },
        "index": {
          "description": "Cleanup is an IO action to run when the server shuts down The server can either shutdown normally or due to failure The When parameter indicates when an action should run",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "Cleanup",
          "package": "web-plugins",
          "partial": "Cleanup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#t:Cleanup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNOTE: it is possible to set the URL type incorrectly here and not get a type error. How can we fix that ?\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "Plugin",
          "package": "web-plugins",
          "source": "src/Web-Plugins-Core.html#Plugin",
          "type": "data"
        },
        "index": {
          "description": "NOTE it is possible to set the URL type incorrectly here and not get type error How can we fix that",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "Plugin",
          "package": "web-plugins",
          "partial": "Plugin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#t:Plugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePluginName\u003c/a\u003e\u003c/code\u003e should uniquely identify a plugin -- though we\n currently have no way to enforce that.\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "PluginName",
          "package": "web-plugins",
          "source": "src/Web-Plugins-Core.html#PluginName",
          "type": "type"
        },
        "index": {
          "description": "The PluginName should uniquely identify plugin though we currently have no way to enforce that",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "PluginName",
          "package": "web-plugins",
          "partial": "Plugin Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#t:PluginName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e type is the handle to the plugins system. Generally\n you will have exactly one \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e value in your app.\n\u003c/p\u003e\u003cp\u003esee also \u003ccode\u003e\u003ca\u003ewithPlugins\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "Plugins",
          "package": "web-plugins",
          "source": "src/Web-Plugins-Core.html#Plugins",
          "type": "newtype"
        },
        "index": {
          "description": "The Plugins type is the handle to the plugins system Generally you will have exactly one Plugins value in your app see also withPlugins",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "Plugins",
          "package": "web-plugins",
          "partial": "Plugins",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#t:Plugins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePluginsState\u003c/a\u003e\u003c/code\u003e record holds all the record keeping\n information needed for loading, unloading, and invoking plugins. In\n theory you should not be modifying or inspecting this structure\n directly -- only calling the helper functions that modify or read\n it.\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "PluginsState",
          "package": "web-plugins",
          "source": "src/Web-Plugins-Core.html#PluginsState",
          "type": "data"
        },
        "index": {
          "description": "The PluginsState record holds all the record keeping information needed for loading unloading and invoking plugins In theory you should not be modifying or inspecting this structure directly only calling the helper functions that modify or read it",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "PluginsState",
          "package": "web-plugins",
          "partial": "Plugins State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#t:PluginsState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eWhen\u003c/a\u003e\u003c/code\u003e indicates when a clean up action should be run\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "When",
          "package": "web-plugins",
          "source": "src/Web-Plugins-Core.html#When",
          "type": "data"
        },
        "index": {
          "description": "When indicates when clean up action should be run",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "When",
          "package": "web-plugins",
          "partial": "When",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#t:When"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealways run this action when \u003ccode\u003e\u003ca\u003edestroyPlugins\u003c/a\u003e\u003c/code\u003e is called\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "Always",
          "package": "web-plugins",
          "signature": "Always",
          "source": "src/Web-Plugins-Core.html#When",
          "type": "function"
        },
        "index": {
          "description": "always run this action when destroyPlugins is called",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "Always",
          "package": "web-plugins",
          "partial": "Always",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:Always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Plugins.Core",
          "name": "Cleanup",
          "package": "web-plugins",
          "signature": "Cleanup When (IO ())",
          "source": "src/Web-Plugins-Core.html#Cleanup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "Cleanup",
          "normalized": "Cleanup When(IO())",
          "package": "web-plugins",
          "partial": "Cleanup",
          "signature": "Cleanup When(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:Cleanup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eonly run this action if \u003ccode\u003e\u003ca\u003edestroyPlugins\u003c/a\u003e\u003c/code\u003e is called with a failure present\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "OnFailure",
          "package": "web-plugins",
          "signature": "OnFailure",
          "source": "src/Web-Plugins-Core.html#When",
          "type": "function"
        },
        "index": {
          "description": "only run this action if destroyPlugins is called with failure present",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "OnFailure",
          "package": "web-plugins",
          "partial": "On Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:OnFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eonly run this action when \u003ccode\u003e\u003ca\u003edestroyPlugins\u003c/a\u003e\u003c/code\u003e is called with a normal shutdown\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "OnNormal",
          "package": "web-plugins",
          "signature": "OnNormal",
          "source": "src/Web-Plugins-Core.html#When",
          "type": "function"
        },
        "index": {
          "description": "only run this action when destroyPlugins is called with normal shutdown",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "OnNormal",
          "package": "web-plugins",
          "partial": "On Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:OnNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Plugins.Core",
          "name": "Plugin",
          "package": "web-plugins",
          "signature": "Plugin",
          "source": "src/Web-Plugins-Core.html#Plugin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "Plugin",
          "package": "web-plugins",
          "partial": "Plugin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:Plugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Plugins.Core",
          "name": "Plugins",
          "package": "web-plugins",
          "signature": "Plugins",
          "source": "src/Web-Plugins-Core.html#Plugins",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "Plugins",
          "package": "web-plugins",
          "partial": "Plugins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:Plugins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Plugins.Core",
          "name": "PluginsState",
          "package": "web-plugins",
          "signature": "PluginsState",
          "source": "src/Web-Plugins-Core.html#PluginsState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "PluginsState",
          "package": "web-plugins",
          "partial": "Plugins State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:PluginsState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a new cleanup action to the top of the stack\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "addCleanup",
          "package": "web-plugins",
          "signature": "Plugins theme n hook config st -\u003e When -\u003e IO () -\u003e m ()",
          "source": "src/Web-Plugins-Core.html#addCleanup",
          "type": "function"
        },
        "index": {
          "description": "add new cleanup action to the top of the stack",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "addCleanup",
          "normalized": "Plugins a b c d e-\u003eWhen-\u003eIO()-\u003ef()",
          "package": "web-plugins",
          "partial": "Cleanup",
          "signature": "Plugins theme n hook config st-\u003eWhen-\u003eIO()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:addCleanup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a new route handler\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "addHandler",
          "package": "web-plugins",
          "signature": "Plugins theme n hook config st-\u003e PluginName-\u003e (Plugins theme n hook config st -\u003e [Text] -\u003e n)-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "add new route handler",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "addHandler",
          "normalized": "Plugins a b c d e-\u003ePluginName-\u003e(Plugins a b c d e-\u003e[Text]-\u003eb)-\u003ef()",
          "package": "web-plugins",
          "partial": "Handler",
          "signature": "Plugins theme n hook config st-\u003ePluginName-\u003e(Plugins theme n hook config st-\u003e[Text]-\u003en)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:addHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd the routing function for a plugin\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003egetPluginRouteFn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "addPluginRouteFn",
          "package": "web-plugins",
          "signature": "Plugins theme n hook config st -\u003e PluginName -\u003e (url -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e m ()",
          "source": "src/Web-Plugins-Core.html#addPluginRouteFn",
          "type": "function"
        },
        "index": {
          "description": "add the routing function for plugin see also getPluginRouteFn",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "addPluginRouteFn",
          "normalized": "Plugins a b c d e-\u003ePluginName-\u003e(f-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eg()",
          "package": "web-plugins",
          "partial": "Plugin Route Fn",
          "signature": "Plugins theme n hook config st-\u003ePluginName-\u003e(url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:addPluginRouteFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a new plugin-local state\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "addPluginState",
          "package": "web-plugins",
          "signature": "Plugins theme n hook config st -\u003e PluginName -\u003e state -\u003e m ()",
          "source": "src/Web-Plugins-Core.html#addPluginState",
          "type": "function"
        },
        "index": {
          "description": "add new plugin-local state",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "addPluginState",
          "normalized": "Plugins a b c d e-\u003ePluginName-\u003ef-\u003eg()",
          "package": "web-plugins",
          "partial": "Plugin State",
          "signature": "Plugins theme n hook config st-\u003ePluginName-\u003estate-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:addPluginState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a new post initialization hook\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "addPostHook",
          "package": "web-plugins",
          "signature": "Plugins theme n hook config st -\u003e hook -\u003e m ()",
          "source": "src/Web-Plugins-Core.html#addPostHook",
          "type": "function"
        },
        "index": {
          "description": "add new post initialization hook",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "addPostHook",
          "normalized": "Plugins a b c d e-\u003ec-\u003ef()",
          "package": "web-plugins",
          "partial": "Post Hook",
          "signature": "Plugins theme n hook config st-\u003ehook-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:addPostHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshutdown the plugins system\n\u003c/p\u003e\u003cp\u003esee also \u003ccode\u003e\u003ca\u003ewithPlugins\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "destroyPlugins",
          "package": "web-plugins",
          "signature": "When-\u003e Plugins theme m hook config st-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "shutdown the plugins system see also withPlugins",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "destroyPlugins",
          "normalized": "When-\u003ePlugins a b c d e-\u003eIO()",
          "package": "web-plugins",
          "partial": "Plugins",
          "signature": "When-\u003ePlugins theme m hook config st-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:destroyPlugins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the \u003ccode\u003econfig\u003c/code\u003e value from the \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e type\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "getConfig",
          "package": "web-plugins",
          "signature": "Plugins theme n hook config st -\u003e m config",
          "source": "src/Web-Plugins-Core.html#getConfig",
          "type": "function"
        },
        "index": {
          "description": "get the config value from the Plugins type",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "getConfig",
          "normalized": "Plugins a b c d e-\u003ef d",
          "package": "web-plugins",
          "partial": "Config",
          "signature": "Plugins theme n hook config st-\u003em config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:getConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the plugin routing function for the named plugin\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eaddPluginRouteFn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "getPluginRouteFn",
          "package": "web-plugins",
          "signature": "Plugins theme n hook config st-\u003e PluginName-\u003e m (Maybe (url -\u003e [(Text, Maybe Text)] -\u003e Text))",
          "type": "function"
        },
        "index": {
          "description": "get the plugin routing function for the named plugin see also addPluginRouteFn",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "getPluginRouteFn",
          "normalized": "Plugins a b c d e-\u003ePluginName-\u003ef(Maybe(g-\u003e[(Text,Maybe Text)]-\u003eText))",
          "package": "web-plugins",
          "partial": "Plugin Route Fn",
          "signature": "Plugins theme n hook config st-\u003ePluginName-\u003em(Maybe(url-\u003e[(Text,Maybe Text)]-\u003eText))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:getPluginRouteFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the state for a particular plugin\n\u003c/p\u003e\u003cp\u003eper-plugin state is optional. This will return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n plugin did not register any local state.\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "getPluginState",
          "package": "web-plugins",
          "signature": "Plugins theme n hook config st -\u003e Text -\u003e m (Maybe state)",
          "source": "src/Web-Plugins-Core.html#getPluginState",
          "type": "function"
        },
        "index": {
          "description": "Get the state for particular plugin per-plugin state is optional This will return Nothing if the plugin did not register any local state",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "getPluginState",
          "normalized": "Plugins a b c d e-\u003eText-\u003ef(Maybe g)",
          "package": "web-plugins",
          "partial": "Plugin State",
          "signature": "Plugins theme n hook config st-\u003eText-\u003em(Maybe state)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:getPluginState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the current \u003ccode\u003est\u003c/code\u003e value from \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "getPluginsSt",
          "package": "web-plugins",
          "signature": "Plugins theme n hook config st -\u003e m st",
          "source": "src/Web-Plugins-Core.html#getPluginsSt",
          "type": "function"
        },
        "index": {
          "description": "get the current st value from Plugins",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "getPluginsSt",
          "normalized": "Plugins a b c d e-\u003ef e",
          "package": "web-plugins",
          "partial": "Plugins St",
          "signature": "Plugins theme n hook config st-\u003em st",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:getPluginsSt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget all the post initialization hooks\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "getPostHooks",
          "package": "web-plugins",
          "signature": "Plugins theme n hook config st -\u003e m [hook]",
          "source": "src/Web-Plugins-Core.html#getPostHooks",
          "type": "function"
        },
        "index": {
          "description": "get all the post initialization hooks",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "getPostHooks",
          "normalized": "Plugins a b c d e-\u003ef[c]",
          "package": "web-plugins",
          "partial": "Post Hooks",
          "signature": "Plugins theme n hook config st-\u003em[hook]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:getPostHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the current \u003ccode\u003etheme\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "getTheme",
          "package": "web-plugins",
          "signature": "Plugins theme n hook config st -\u003e m (Maybe theme)",
          "source": "src/Web-Plugins-Core.html#getTheme",
          "type": "function"
        },
        "index": {
          "description": "get the current theme",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "getTheme",
          "normalized": "Plugins a b c d e-\u003ef(Maybe a)",
          "package": "web-plugins",
          "partial": "Theme",
          "signature": "Plugins theme n hook config st-\u003em(Maybe theme)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:getTheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einitialize a plugin\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "initPlugin",
          "package": "web-plugins",
          "signature": "Plugins theme n hook config st-\u003e Text-\u003e Plugin url theme n hook config st-\u003e IO (Maybe Text)",
          "type": "function"
        },
        "index": {
          "description": "initialize plugin",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "initPlugin",
          "normalized": "Plugins a b c d e-\u003eText-\u003ePlugin f a b c d e-\u003eIO(Maybe Text)",
          "package": "web-plugins",
          "partial": "Plugin",
          "signature": "Plugins theme n hook config st-\u003eText-\u003ePlugin url theme n hook config st-\u003eIO(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:initPlugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einitialize the plugins system\n\u003c/p\u003e\u003cp\u003esee also \u003ccode\u003e\u003ca\u003ewithPlugins\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "initPlugins",
          "package": "web-plugins",
          "signature": "config-\u003e st-\u003e IO (Plugins theme n hook config st)",
          "type": "function"
        },
        "index": {
          "description": "initialize the plugins system see also withPlugins",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "initPlugins",
          "normalized": "a-\u003eb-\u003eIO(Plugins c d e a b)",
          "package": "web-plugins",
          "partial": "Plugins",
          "signature": "config-\u003est-\u003eIO(Plugins theme n hook config st)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:initPlugins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodify the current st value from \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "modifyPluginsSt",
          "package": "web-plugins",
          "signature": "Plugins theme n hook config st -\u003e (st -\u003e st) -\u003e m ()",
          "source": "src/Web-Plugins-Core.html#modifyPluginsSt",
          "type": "function"
        },
        "index": {
          "description": "modify the current st value from Plugins",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "modifyPluginsSt",
          "normalized": "Plugins a b c d e-\u003e(e-\u003ee)-\u003ef()",
          "package": "web-plugins",
          "partial": "Plugins St",
          "signature": "Plugins theme n hook config st-\u003e(st-\u003est)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:modifyPluginsSt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eplugins which much be initialized before this one can be\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "pluginDepends",
          "package": "web-plugins",
          "signature": "[PluginName]",
          "source": "src/Web-Plugins-Core.html#Plugin",
          "type": "function"
        },
        "index": {
          "description": "plugins which much be initialized before this one can be",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "pluginDepends",
          "normalized": "[PluginName]",
          "package": "web-plugins",
          "partial": "Depends",
          "signature": "[PluginName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginDepends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Plugins.Core",
          "name": "pluginInit",
          "package": "web-plugins",
          "signature": "Plugins theme n hook config st -\u003e IO (Maybe Text)",
          "source": "src/Web-Plugins-Core.html#Plugin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "pluginInit",
          "normalized": "Plugins a b c d e-\u003eIO(Maybe Text)",
          "package": "web-plugins",
          "partial": "Init",
          "signature": "Plugins theme n hook config st-\u003eIO(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Plugins.Core",
          "name": "pluginName",
          "package": "web-plugins",
          "signature": "PluginName",
          "source": "src/Web-Plugins-Core.html#Plugin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "pluginName",
          "package": "web-plugins",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Plugins.Core",
          "name": "pluginPostHook",
          "package": "web-plugins",
          "signature": "hook",
          "source": "src/Web-Plugins-Core.html#Plugin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "pluginPostHook",
          "package": "web-plugins",
          "partial": "Post Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginPostHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Plugins.Core",
          "name": "pluginToPathInfo",
          "package": "web-plugins",
          "signature": "url -\u003e Text",
          "source": "src/Web-Plugins-Core.html#Plugin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "pluginToPathInfo",
          "normalized": "a-\u003eText",
          "package": "web-plugins",
          "partial": "To Path Info",
          "signature": "url-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginToPathInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Plugins.Core",
          "name": "pluginsConfig",
          "package": "web-plugins",
          "signature": "config",
          "source": "src/Web-Plugins-Core.html#PluginsState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "pluginsConfig",
          "package": "web-plugins",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginsConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Plugins.Core",
          "name": "pluginsHandler",
          "package": "web-plugins",
          "signature": "Map PluginName (Plugins theme n hook config st -\u003e [Text] -\u003e n)",
          "source": "src/Web-Plugins-Core.html#PluginsState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "pluginsHandler",
          "normalized": "Map PluginName(Plugins a b c d e-\u003e[Text]-\u003eb)",
          "package": "web-plugins",
          "partial": "Handler",
          "signature": "Map PluginName(Plugins theme n hook config st-\u003e[Text]-\u003en)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginsHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Plugins.Core",
          "name": "pluginsOnShutdown",
          "package": "web-plugins",
          "signature": "[Cleanup]",
          "source": "src/Web-Plugins-Core.html#PluginsState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "pluginsOnShutdown",
          "normalized": "[Cleanup]",
          "package": "web-plugins",
          "partial": "On Shutdown",
          "signature": "[Cleanup]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginsOnShutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eper-plugin state\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "pluginsPluginState",
          "package": "web-plugins",
          "signature": "Map PluginName (TVar Dynamic)",
          "source": "src/Web-Plugins-Core.html#PluginsState",
          "type": "function"
        },
        "index": {
          "description": "per-plugin state",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "pluginsPluginState",
          "package": "web-plugins",
          "partial": "Plugin State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginsPluginState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Plugins.Core",
          "name": "pluginsPostHooks",
          "package": "web-plugins",
          "signature": "[hook]",
          "source": "src/Web-Plugins-Core.html#PluginsState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "pluginsPostHooks",
          "normalized": "[a]",
          "package": "web-plugins",
          "partial": "Post Hooks",
          "signature": "[hook]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginsPostHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Plugins.Core",
          "name": "pluginsRouteFn",
          "package": "web-plugins",
          "signature": "Map PluginName Dynamic",
          "source": "src/Web-Plugins-Core.html#PluginsState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "pluginsRouteFn",
          "package": "web-plugins",
          "partial": "Route Fn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginsRouteFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Plugins.Core",
          "name": "pluginsState",
          "package": "web-plugins",
          "signature": "st",
          "source": "src/Web-Plugins-Core.html#PluginsState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "pluginsState",
          "package": "web-plugins",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginsState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Plugins.Core",
          "name": "pluginsTheme",
          "package": "web-plugins",
          "signature": "Maybe theme",
          "source": "src/Web-Plugins-Core.html#PluginsState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "pluginsTheme",
          "package": "web-plugins",
          "partial": "Theme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:pluginsTheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Plugins.Core",
          "name": "ptv",
          "package": "web-plugins",
          "signature": "TVar (PluginsState theme m hook config st)",
          "source": "src/Web-Plugins-Core.html#Plugins",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "ptv",
          "package": "web-plugins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:ptv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eput the current st value from \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "putPluginsSt",
          "package": "web-plugins",
          "signature": "Plugins theme n hook config st -\u003e st -\u003e m ()",
          "source": "src/Web-Plugins-Core.html#putPluginsSt",
          "type": "function"
        },
        "index": {
          "description": "put the current st value from Plugins",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "putPluginsSt",
          "normalized": "Plugins a b c d e-\u003ee-\u003ef()",
          "package": "web-plugins",
          "partial": "Plugins St",
          "signature": "Plugins theme n hook config st-\u003est-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:putPluginsSt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eserve requests using the \u003ccode\u003e\u003ca\u003ePlugins\u003c/a\u003e\u003c/code\u003e handle\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "serve",
          "package": "web-plugins",
          "signature": "Plugins theme n hook config st-\u003e PluginName-\u003e [Text]-\u003e IO (Either String n)",
          "type": "function"
        },
        "index": {
          "description": "serve requests using the Plugins handle",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "serve",
          "normalized": "Plugins a b c d e-\u003ePluginName-\u003e[Text]-\u003eIO(Either String b)",
          "package": "web-plugins",
          "signature": "Plugins theme n hook config st-\u003ePluginName-\u003e[Text]-\u003eIO(Either String n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:serve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the current \u003ccode\u003etheme\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "setTheme",
          "package": "web-plugins",
          "signature": "Plugins theme n hook config st -\u003e Maybe theme -\u003e m ()",
          "source": "src/Web-Plugins-Core.html#setTheme",
          "type": "function"
        },
        "index": {
          "description": "set the current theme",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "setTheme",
          "normalized": "Plugins a b c d e-\u003eMaybe a-\u003ef()",
          "package": "web-plugins",
          "partial": "Theme",
          "signature": "Plugins theme n hook config st-\u003eMaybe theme-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:setTheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea bracketed combination of \u003ccode\u003e\u003ca\u003einitPlugins\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edestroyPlugins\u003c/a\u003e\u003c/code\u003e. Takes care of passing the correct termination condition.\n\u003c/p\u003e",
          "module": "Web.Plugins.Core",
          "name": "withPlugins",
          "package": "web-plugins",
          "signature": "config-\u003e st-\u003e (Plugins theme m hook config st -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "bracketed combination of initPlugins and destroyPlugins Takes care of passing the correct termination condition",
          "hierarchy": "Web Plugins Core",
          "module": "Web.Plugins.Core",
          "name": "withPlugins",
          "normalized": "a-\u003eb-\u003e(Plugins c d e a b-\u003eIO f)-\u003eIO f",
          "package": "web-plugins",
          "partial": "Plugins",
          "signature": "config-\u003est-\u003e(Plugins theme m hook config st-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-plugins/docs/Web-Plugins-Core.html#v:withPlugins"
      }
    }
  ]
]