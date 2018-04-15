const SessionStorage_templates = "templates";
const SessionStorage_scripts = "scripts";

var Scripts = {};
var Templates = {};

class FileManager {
    static GetTemplate(url) {
        if (!Templates[url]) {
            let html = Util.FetchTemplate(url);
            FileManager.SetTemplate(url, html);
        }


        return Templates[url];
    }

    static GetScript(name) {
        if (!Files[name]) {
            console.error("This file is unknown to us: " + name);
            return;
        }

        if (!Scripts[name]) {
            let moduleClass = Util.FetchClass(name, Files[name]);
            Scripts[name] = moduleClass;
        }

        return Scripts[name];
    }

    static SetScript(name, source) {
        Scripts[name] = source;
        sessionStorage.setItem(SessionStorage_scripts, Scripts);
    }

    static SetTemplate(name, source) {
        Templates[name] = source;
        sessionStorage.setItem(SessionStorage_templates, Templates);
    }
}