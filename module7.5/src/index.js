class ElectricalAppliance {
    constructor(active) {
        this.device = 'electrical'
        this.active = {active}
    }
    getActive(active) {
        if(active === 'on') {
            console.log('The appliance is plugged into the socket')
        } else if (active === 'off') {
            console.log('The appliance is not plugged into the socket')
        }
    }
}

class Kettle extends ElectricalAppliance {
    constructor(active, power) {
        super(active);
        this.power = power;
    }
    getPower(power) {
        console.log(`Kettle power consumption: ${power} Vt`)
    }
}

class Trimmer extends ElectricalAppliance {
    constructor(active, power) {
        super(active);
        this.power = power;
    }
    getPower(power) {
        console.log(`Trimmer power consumption: ${power} Vt`)
    }
}

const kettle = new Kettle();
const trimmer = new Trimmer();

kettle.getActive('on')
kettle.getPower(220)

trimmer.getActive('off')
trimmer.getPower(100)

