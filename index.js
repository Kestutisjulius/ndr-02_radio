class Radio {
    
    constructor(name, fmMhz) {
        this.name = name;
        this.turnedOn = false;
        this.volume = 0;
        this.successfullyCount = 0;
        if (fmMhz === undefined) {
            this.fmMhz = Math.floor((Math.random()*(201-30 + 1))*10 + 30*10)/10;
        } else {
            this.fmMhz = fmMhz; //106.8 , 89.6
        }
        this.stations = [{name: 'M_1', value: 106.8}, {name: 'Radiocentras', value: 89.6}, {name: 'Start_FM', value: 94.2}];
    }
    switchOn() {
        this.turnedOn = true;
        let current = '';
        const sh = 'shshshshshshshshshs!!!'

        for (let i = 0; i < this.stations.length; i++){
            if (this.fmMhz === this.stations[i].value) {
                current = this.stations[i].name;
            } else if (!current){
                current = sh;
            };
        }
        return console.log(`!!! Playng: ${current}`);
        
    }
    switchOff() {
        this.turnedOn = false;
    }
    volumeTurn(volume){
        if(!this.turnedOn) {
            this.volume = 0;
            return console.log( 'Radio is turned Off');
        }
        if ((this.volume + volume < 0 
            || this.volume + volume > 100)){
           return console.log('boom!!! - volume negative ');
        }
        this.volume += volume;
    }
    fmDiapazone(diapazone){
        console.log('diapazone from 60Mhz to 120 Mhz');
        if ((diapazone <= 70 || diapazone >= 150)) {
            return console.log('WRONG diapazone');
        }
        this.fmMhz = diapazone; 
        let current = '';
        const sh = 'shshshshshshshshshs!!!'
        
        for (let i = 0; i < this.stations.length; i++){
            if (this.fmMhz === this.stations[i].value) {
                current = this.stations[i].name;
                this.successfullyCount++;
            } else if (!current){
                current = sh;
            };
        }
        return console.log(`!!! Playng: ${current}, and successfully changed:${this.successfullyCount}`);   
    }
}

const radio = new Radio('Vilma');
        radio.switchOn();
        radio.volumeTurn(2);
        console.log(radio);
       // radio.switchOff();
        radio.volumeTurn(55);
        radio.volumeTurn(-3);
        radio.volumeTurn(-63);
        radio.volumeTurn(63);
        radio.fmDiapazone(94.2);
        radio.fmDiapazone(89.6);
        radio.fmDiapazone(106.8);

console.log(radio);