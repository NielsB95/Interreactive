window.addEventListener("load", function () {
    let modules = document.querySelectorAll("[module]");
    window.interreactive = new Interreactive(modules);
    interreactive.Render();
});

const Mapping = {
    Renderer: "../CoreModules/Renderer.js",
    Module: "../CoreModules/Module.js",
    Files: "files.js",
    FileManager: "../CoreModules/FileManager.js"
}

class Interreactive {
    constructor(modules) {
        this.Modules = modules;
        this.CoreModulesLoaded = false;
    }

    async Render() {
        if (!this.CoreModulesLoaded) {
            await this.LoadCoreModules();
            this.CoreModulesLoaded = true;
        }

        for (let module of this.Modules) {
            let moduleName = module.getAttribute("module");

            // Get module class
            let moduleClass = await FileManager.GetScript(moduleName);
            if (!moduleClass) continue;

            let classInstance = new moduleClass();

            module.innerHTML = await classInstance.Render();
        }
    }

    async LoadCoreModules() {
        await Util.FetchClass("FileManager", Mapping.FileManager);
        await Util.FetchClass("Renderer", Mapping.Renderer);
        await Util.FetchClass("Module", Mapping.Module);
    }
}