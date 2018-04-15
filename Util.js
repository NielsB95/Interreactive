class Util {
    static FetchClass(module, url) {
        Util.Fetch(url, function (responseBody) {
            let scriptToEval = "";
            scriptToEval += responseBody;
            scriptToEval += "\nwindow['" + module + "'] = " + module + ";";

            eval(scriptToEval);
        });
    }

    static FetchScript(url) {
        Util.Fetch(url, function(responseBody) {
            //console.log(responseBody);
            eval(responseBody);
        });
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