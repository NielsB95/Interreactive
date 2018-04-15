class Module {
    constructor() {
        this.Template = null;
        this.Model = null;
    }

    async Render() {
        let template = await FileManager.GetTemplate(this.Template);
        return Renderer.Render(template, this.Model);
    }
}