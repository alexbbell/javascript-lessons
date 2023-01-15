let mb = {
    usbports: 8,
    chipset: 'Amd x57',
    socket: 'Am3/Am4'
}

let cpu = {
    coreCount: 9,
    cpuManufacturer: 'AMD',
    socket: 'Am4'
}

let videoCard = {
    videoCardModel : 'Nvidia GeForce GTX 1060',
    videoMemory: 4096
}

let ram = {
    ramType: 'DDR4',
    ramVolume: 8192,
    remFrequency: 3200
}

let computer = {
    price: 31000,
    ...mb,
    ...cpu,
    ...videoCard,
    ...ram
}

let compAssing = Object.assign(
    {
        price: 31000
    },
    mb, cpu, videoCard, ram
)
//console.log(computer);
//
console//console.values(compAssing);.log(compAssing);
//console.log(computer === compAssing);
console.log(Object.keys(computer));
console.log(Object.values(computer));
console.log(Object.entries(computer));