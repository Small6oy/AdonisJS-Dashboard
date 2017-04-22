'use strict'

/*
|--------------------------------------------------------------------------
| Application Providers
|--------------------------------------------------------------------------
*/
const providers = [
    'adonis-framework/providers/ConfigProvider',
    'adonis-framework/providers/EnvProvider',
    'adonis-framework/providers/EventProvider',
    'adonis-framework/providers/HelpersProvider',
    'adonis-framework/providers/EncryptionProvider',
    'adonis-framework/providers/HashProvider',
    'adonis-framework/providers/MiddlewareProvider',
    'adonis-framework/providers/RequestProvider',
    'adonis-framework/providers/ResponseProvider',
    'adonis-framework/providers/RouteProvider',
    'adonis-framework/providers/ServerProvider',
    'adonis-framework/providers/SessionProvider',
    'adonis-framework/providers/StaticProvider',
    'adonis-framework/providers/ViewProvider',
    'adonis-lucid/providers/DatabaseProvider',
    'adonis-lucid/providers/LucidProvider',
    'adonis-lucid/providers/FactoryProvider',
    'adonis-middleware/providers/AppMiddlewareProvider',
    'adonis-auth/providers/AuthManagerProvider',
    'adonis-websocket/providers/WsProvider'
]

/*
|--------------------------------------------------------------------------
| Ace Providers
|--------------------------------------------------------------------------
*/
const aceProviders = [
    'adonis-lucid/providers/CommandsProvider',
    'adonis-lucid/providers/MigrationsProvider',
    'adonis-lucid/providers/SchemaProvider',
    'adonis-lucid/providers/SeederProvider',
    'adonis-ace/providers/CommandProvider',
    'adonis-commands/providers/GeneratorsProvider',
    'adonis-commands/providers/HelperCommandsProvider',
    'adonis-commands/providers/ReplProvider'
]

/*
|--------------------------------------------------------------------------
| Namespace Aliases
|--------------------------------------------------------------------------
*/
const aliases = {
    Command: 'Adonis/Src/Command',
    Config: 'Adonis/Src/Config',
    Database: 'Adonis/Src/Database',
    Env: 'Adonis/Src/Env',
    Event: 'Adonis/Src/Event',
    Factory: 'Adonis/Src/Factory',
    Encryption: 'Adonis/Src/Encryption',
    Hash: 'Adonis/Src/Hash',
    Helpers: 'Adonis/Src/Helpers',
    Lucid: 'Adonis/Src/Lucid',
    Middleware: 'Adonis/Src/Middleware',
    Route: 'Adonis/Src/Route',
    Schema: 'Adonis/Src/Schema',
    View: 'Adonis/Src/View',
    Ws: 'Adonis/Addons/Ws'
}

/*
|--------------------------------------------------------------------------
| Ace Commands
|--------------------------------------------------------------------------
*/
const commands = [
    'App/Commands/Greet',
    'Adonis/Commands/Auth:Setup',
    'Adonis/Commands/Repl',
    'Adonis/Commands/Make:Controller',
    'Adonis/Commands/Route:List',
    'Adonis/Commands/Make:Migration',
    'Adonis/Commands/Make:Model',
    'Adonis/Commands/Make:View',
    'Adonis/Commands/Make:Command',
    'Adonis/Commands/Make:Hook',
    'Adonis/Commands/Make:Middleware',
    'Adonis/Commands/Make:Seed',
    'Adonis/Commands/Make:Listener',
    'Adonis/Commands/Migration:Run',
    'Adonis/Commands/Migration:Rollback',
    'Adonis/Commands/Migration:Refresh',
    'Adonis/Commands/Migration:Reset',
    'Adonis/Commands/DB:Seed',
    'Adonis/Commands/Migration:Status',
    'Adonis/Commands/Key:Generate'
]

module.exports = { providers, aceProviders, aliases, commands }