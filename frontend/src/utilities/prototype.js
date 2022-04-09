String.prototype.capitalize = function () {
    return this.toString().charAt(0).toUpperCase() + this.slice(1);
}
String.prototype.getDegreeSymbol = function () {
    if (this.toString() === "celsius") {
        return "°C";
    } else {
        return "°F";
    }
}

