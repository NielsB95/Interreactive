class Util {
    static FetchModule(module, url) {
        Util.Fetch(url, function (response) {
            let scriptToEval = "";
            scriptToEval += response;
            scriptToEval += "\nwindow['" + module + "'] = " + module + ";";

            eval(scriptToEval);
        });
    }

    static FetchTemplate(template, url, callback) {

    }

    static Fetch(url, callback) {
        fetch(url)
            .then(response => {
                // console.log('response', response);
                // console.log('response.status:', response.status);
                // console.log('response.statusText:', response.statusText);
                // console.log('response.ok:', response.ok);
                return response.text();
            })
            .then(responseBody => {
                // console.log(responseBody);
                callback(responseBody);
            })
            .catch(error => {
                console.error("Something went wrong!", error);
            });
    }
}