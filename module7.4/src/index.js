function ElectricalAppliance(active) {
    this.device = 'electrical'
    this.active = {active}
    if(active === 'on') {
        console.log('The appliance is plugged into the socket')
    } else if (active === 'off') {
        console.log('The appliance is not plugged into the socket')
    }
}

function Kettle(power) {
    this.power = function () {
        console.log(`Kettle power consumption: ${power} Vt`)
    }
}

Kettle.prototype = new ElectricalAppliance('on');

function Trimmer (power) {
    this.power = function () {
        console.log(`Trimmer power consumption: ${power} Vt`)
    }
}

Trimmer.prototype = new ElectricalAppliance('off');

const kettle = new Kettle('2220');
const trimmer = new Trimmer('400');

kettle.power()
trimmer.power()