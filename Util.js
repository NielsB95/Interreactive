class Util {
    static async FetchClass(module, url, callback) {
        let responseBody = await Util.Fetch(url);
        let scriptToEval = "";
        scriptToEval += responseBody;
        scriptToEval += "\nwindow['" + module + "'] = " + module + ";";
        eval(scriptToEval);

        if (!!callback)
            callback(responseBody);

        return window[module];
    }

    static async FetchTemplate(url){
        let html = await Util.Fetch(url);
        return html;
    }

    static FetchScript(url) {
        return Util.Fetch(url, function (responseBody) {
            eval(responseBody);
        });
    }

    static async Fetch(url, callback) {
        return await (await fetch(url)
            .then(response => {
                // console.log('response', response);
                // console.log('response.status:', response.status);
                // console.log('response.statusText:', response.statusText);
                // console.log('response.ok:', response.ok);
                return response.text();
            })
            .then(responseBody => {
                return responseBody;
            })
            .catch(error => {
                console.error("Something went wrong!", error);
            }));
    }
}