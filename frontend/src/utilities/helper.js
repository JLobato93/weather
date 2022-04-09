export default {
    threeHourForecast(array) {
        return array.filter((item, index) => {
            if (index !== 0 && index % 3 === 0 && index < 19)
                return item;
        });
    },
    extractProperty(array, property, limit) {
        let newArray = [];
        array.forEach((item, index) => {
            if (index <= limit) newArray.push(item[property])
        });
        return newArray;
    },
    transformChartTemp(data, unit) {
        if (unit === 'celsius') {
            return data.map(item => Math.round(item - 273.15));
        }
        else
            return data.map(item => Math.round((item - 273.15) * 1.8 + 32));
    },
    alertNotification(message, type) {
        alert(`An error occured with status: ${type} and message:${message}. Please try again.`);
    },
}

String.prototype.getDegreeSymbol = function () {
    if (this === "celsius") {
        return "°C";
    } else if (this === "fahrenheit") {
        return "°F";
    }
}

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}