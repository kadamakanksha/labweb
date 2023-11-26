class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = null;
    }

    start(callback) {
        this.intervalId = setInterval(() => {
            this.currentTime++;
            callback();
        }, 1000);
    }

    getMinutes() {
        return Math.floor(this.currentTime / 60);
    }

    getSeconds() {
        return this.currentTime % 60;
    }

    computeTwoDigitNumber(value) {
        return value < 10 ? `0${value}` : `${value}`;
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    reset() {
        this.currentTime = 0;
    }

    split() {
        const minutes = this.computeTwoDigitNumber(this.getMinutes());
        const seconds = this.computeTwoDigitNumber(this.getSeconds());

        return `${minutes}:${seconds}`;
    }
}