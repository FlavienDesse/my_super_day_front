export default class Share {
    constructor(id,name, lowPrice, highPrice, dayPercentChange, lastPrice) {
        this.id=id;
        this.name = name;
        this.lastPrice = lastPrice;
        this.lowPrice = lowPrice;
        this.highPrice = highPrice;
        this.dayPercentChange = dayPercentChange;
    }
}