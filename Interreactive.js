window.addEventListener("load", function () {
    let modules = document.querySelectorAll("[module]");
    var interreactive = new Interreactive(modules);
    interreactive.Render();
});

const Mapping = {
    Renderer: "../Renderer.js",
    Module: "../Module.js",
    Files: "files.js"
}

class Interreactive {
    constructor(modules) {
        this.Modules = modules;

        Util.FetchScript(Mapping.Files);
        Util.FetchClass("Renderer", Mapping.Renderer);
        Util.FetchClass("Module", Mapping.Module);
    }

    Render() {
        for (let module of this.Modules) {
            let moduleName = module.getAttribute("module");
            console.log(moduleName);
            console.log(module);
        }
    }
}