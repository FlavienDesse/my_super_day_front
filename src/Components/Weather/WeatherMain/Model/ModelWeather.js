export default class ModelWeather {
    constructor(nameTown, temperature, temperatureFeelse, humidity, cloud, uv, windSpeed) {
        this.nameTown = nameTown;
        this.temperature = temperature;
        this.temperatureFeelse = temperatureFeelse;
        this.humidity = humidity;
        this.cloud = cloud;
        this.uv = uv;
        this.windSpeed = windSpeed;
    }
}