var Car = function ({
    id,
    marca,
    modelo,
    placa,
    conductor,
    estado,
    combustible,
    kilometraje,
    urlFoto,
    ubicacion,
    mantenimiento
}) {
    Car.fromJson = function (json) {
        var obj = JSON.parse(json);
        return new Car(
            (id = obj.id),
            (marca = obj.marca),
            (modelo = obj.modelo),
            (placa = obj.placa),
            (conductor = obj.conductor),
            (estado = obj.estado),
            (combustible = obj.combustible),
            (kilometraje = obj.kilometraje),
            (urlFoto = obj.urlFoto),
            (ubicacion = obj.ubicacion),
            (mantenimiento = obj.mantenimiento)
        );
    };
};

export default Car
