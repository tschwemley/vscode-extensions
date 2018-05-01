'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
class Config {
    static get configuration() {
        return vscode_1.workspace.getConfiguration('liveServer.settings');
    }
    static getSettings(val) {
        return Config.configuration.get(val);
    }
    static get getHost() {
        return Config.getSettings('host');
    }
    static get getPort() {
        return Config.getSettings('port');
    }
    static get getRoot() {
        return Config.getSettings('root');
    }
    static get getNoBrowser() {
        return Config.getSettings('NoBrowser');
    }
    static get getAdvancedBrowserCmdline() {
        return Config.getSettings('AdvanceCustomBrowserCmdLine');
    }
    static get getChromeDebuggingAttachment() {
        return Config.getSettings('ChromeDebuggingAttachment');
    }
    static get getCustomBrowser() {
        return Config.getSettings('CustomBrowser');
    }
    static get getIgnoreFiles() {
        return Config.getSettings('ignoreFiles');
    }
    static get getDonotShowInfoMsg() {
        return Config.getSettings('donotShowInfoMsg');
    }
    static setDonotShowInfoMsg(val, isGlobal = false) {
        Config.configuration.update('donotShowInfoMsg', val, isGlobal);
    }
    static get getDonotVerifyTags() {
        return Config.getSettings('donotVerifyTags');
    }
    static setDonotVerifyTags(val, isGlobal = false) {
        Config.configuration.update('donotVerifyTags', val, isGlobal);
    }
    static get getUseWebExt() {
        return Config.getSettings('useWebExt') || false;
    }
    static get getProxy() {
        return Config.getSettings('proxy');
    }
    static get getHttps() {
        return Config.getSettings('https') || {};
    }
    static get getWait() {
        return Config.getSettings('wait');
    }
    static get getfullReload() {
        return Config.getSettings('fullReload');
    }
    static get getMount() {
        return Config.getSettings('mount');
    }
}
exports.Config = Config;
//# sourceMappingURL=Config.js.map