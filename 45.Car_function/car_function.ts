function store_CarInfo(manufacturer: string, modelName: string, ...extras: { [key: string]: any }[]): object {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extras)
    };
    return carInfo;
}

const car = store_CarInfo('Toyota', 'Camry', {color: 'blue'}, {features: ['navigation', 'sunroof']});
console.log(car);