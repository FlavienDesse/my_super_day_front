export default class Share {
    constructor(name, lowPrice, highPrice, dayPercentChange, lastPrice) {
        this.name = name;
        this.lastPrice = lastPrice;
        this.lowPrice = lowPrice;
        this.highPrice = highPrice;
        this.dayPercentChange = dayPercentChange;
    }
}