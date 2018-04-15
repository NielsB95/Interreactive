class Util {
    static FetchModule(module, url, callback) {
        fetch(url)
            .then(response => {
                // console.log('response', response);
                // console.log('response.status:', response.status);
                // console.log('response.statusText:', response.statusText);
                // console.log('response.ok:', response.ok);
                return response.text();
            })
            .then(responseBody => {
                let toEval = responseBody + "\nwindow['" + module + "'] = " + module + ";";
                // console.log('responseBody:', responseBody);
                // console.log(toEval);
                eval(toEval);
            })
            .catch(error => {
                console.error("Something went wrong!", error);
            });
    }
}