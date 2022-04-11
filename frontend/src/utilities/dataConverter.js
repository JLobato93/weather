export default {
    threeHourForecast(array, limit) {
        return array.filter((item, index) => {
            if (index % 3 === 0 && index < limit *3)
                return item;
        });
    },
    extractProperty(array, property, limit) {
        let newArray = [];
        array.forEach((item, index) => {
            if (index < limit) newArray.push(item[property])
        });
        return newArray;
    },
    transformChartTemp(data, unit) {
        if (unit === 'celsius') return data.map(item => Math.round(item - 273.15));

        else return data.map(item => Math.round((item - 273.15) * 1.8 + 32));
    }
}