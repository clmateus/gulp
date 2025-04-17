function funcaoPadrao(callback) {
    console.log("Executando via Gulp!");
    callback();
}

function dizOi(callback) {
    console.log("Oi!");
    dizTchau();
    callback();
}

function dizTchau() {
    console.log("Tchau!");
}

exports.default = funcaoPadrao;
exports.dizOi = dizOi;