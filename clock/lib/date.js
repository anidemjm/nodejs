let date = {
    dateString: function() {
        const timeNow = new Date();
        const hour = timeNow.getHours().toString();
        const minutes = timeNow.getMinutes().toString();
        const seconds = timeNow.getSeconds().toString();
        return `${hour}:${minutes}:${seconds}`;
    }
};

module.exports = date;