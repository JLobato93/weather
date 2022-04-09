export default {
    methods: {
        getDayOfWeek(date) {
            const day = date.getDay();
            const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            return dayOfWeek[day];
        },
        getDate(timestamp) {
            return new Date(timestamp * 1000);
        },
        
    }
};