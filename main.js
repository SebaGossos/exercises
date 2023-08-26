"use strict";
var LenguajeFrontend;
(function (LenguajeFrontend) {
    LenguajeFrontend["HTML"] = "HTML";
    LenguajeFrontend["CSS"] = "CSS";
    LenguajeFrontend["JAVASCRIPT"] = "JAVASCRIPT";
})(LenguajeFrontend || (LenguajeFrontend = {}));
var LenguajeBackend;
(function (LenguajeBackend) {
    LenguajeBackend["PHP"] = "PHP";
    LenguajeBackend["PYTHON"] = "PYTHON";
    LenguajeBackend["RUBY"] = "RUBY";
    LenguajeBackend["NODE"] = "NODE";
    LenguajeBackend["CSHARP"] = "CSHARP";
    LenguajeBackend["RUST"] = "RUST";
    LenguajeBackend["GO"] = "GO";
    LenguajeBackend["JAVA"] = "JAVA";
})(LenguajeBackend || (LenguajeBackend = {}));
function isASupportedLenguage(lenguages, lenguageTwo) {
    if (Array.isArray(lenguages) && (lenguageTwo === '' || !!lenguageTwo))
        throw `Din´t send an array of lenguages and a second argument, it's only array or two arguments in string`;
    if (Array.isArray(lenguages)) {
        console.log((lenguages[1] in LenguajeBackend));
        if ((lenguages[0] in LenguajeBackend && lenguages[1] in LenguajeFrontend) ||
            (lenguages[0] in LenguajeFrontend && lenguages[1] in LenguajeBackend))
            return true;
    }
    return false;
}
console.log(isASupportedLenguage([LenguajeFrontend.HTML, LenguajeBackend.CSHARP]));
