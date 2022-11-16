class sh {
	constructor(name) {
		this.name= name;
		this.devices= {};
	}

	addDevice(devType, devName) {
		switch (devType) {
			case 'lamp':
				this.devices[devName]= new lamp(devName);
				break;
			case 'tv':
				this.devices[devName]= new tv(devName);
				break;
			case 'heater':
				this.devices[devName]= new heater(devName);
				break;
			default:
				console.log('Unknown device type');
		}
		return;
	}

	getName() {
		return(this.name);
	}

	getDevicesList() {
		return(this.devices);
	}

	getDevice(deviceName) {
		return(this.devices[deviceName]);
	}

	offAllDevices() {
		for (var key in this.devices) {
			this.devices[key].state= false;
		}
		return;
	}

	deleteDevice(deviceName) {
		delete this.devices[deviceName];
		return;
	}
}

class device {
	constructor(name) {
		this.name= name;
		this.state= true;
	}

	getName() {
		return(this.name);
	}

	getState() {
		return(this.state);
	}

	on() {
		this.state= true;
		return;
	}

	off() {
		this.state= false;
		return;
	}
}

class lamp extends device {
	constructor(name) {
		super(name);
		this.brightness= 5;
	}

	getBrightness() {
		return(this.brightness);
	}

	setBrightness(level) {
		if (level >= 0 && level <= 10) {
			this.brightness= level;
		}
		else {
			console.log('Invalid brightness parameter (0-10)');
		}
		return;
	}
}

class tv extends device {
	constructor(name) {
		super(name);
		this.channel= 1;
		this.volume= 50;
	}

	getChannel() {
		return(this.channel);
	}

	SetChannel(selectedChannel) {
		if (selectedChannel >= 1 && selectedChannel <= 100) {
			this.channel= selectedChannel;
		}
		else {
			console.log('Invalid channel parameter (1-100)');
		}
		return;
	}

	getVolume() {
		return(this.channel);
	}

	SetVolume(selectedVolume) {
		if (selectedVolume >= 1 && selectedVolume <= 100) {
			this.volume= selectedVolume;
		}
		else {
			console.log('Invalid volume parameter (1-100)');
		}
		return;
	}
}

class heater extends device {
	constructor(name) {
		super(name);
		this.heat= 50;
	}
	SetHeat(heatlevel) {
		this.heat= heatlevel;
		return;
	}
}

let sh1= new sh('sh1');
sh1.addDevice("lamp","lamp1")
sh1.addDevice("lamp","lamp2");
sh1.addDevice("tv","tv1");
sh1.addDevice("heater","heater1");