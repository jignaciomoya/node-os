import os from 'os';

const interfaces = os.networkInterfaces();
const networkInfo = {};

Object.keys(interfaces).forEach(interfaceName => {
    const interfaceDetails = interfaces[interfaceName];
    networkInfo[interfaceName] = [];

    interfaceDetails.forEach(details => {
        const { family, address, internal } = details;
        networkInfo[interfaceName].push({ Familia: family, Direccion: address, Interno: internal });
    });
});

export default networkInfo;