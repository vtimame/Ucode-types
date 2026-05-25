import { readfile, writefile, stat, lsdir } from 'fs';
import { cursor } from 'uci';
import { connect } from 'ubus';

const CONFIG_PATH = '/etc/config/network';

function get_interfaces() {
	let uci = cursor();
	uci.load('network');

	let ifaces = [];

	uci.foreach('network', 'interface', (s) => {
		push(ifaces, {
			name: s['.name'],
			proto: s.proto,
			device: s.device
		});
	});

	return ifaces;
}

function get_system_info() {
	let ubus = connect();
	if (!ubus) {
		warn("ubus connect failed\n");
		return null;
	}

	let info = ubus.call('system', 'info');
	ubus.disconnect();
	return info;
}

function list_config_files(dir) {
	let files = lsdir(dir);
	if (!files) {
		warn(sprintf("cannot list %s\n", dir));
		return [];
	}

	return filter(files, (f) => {
		let st = stat(sprintf("%s/%s", dir, f));
		return st && st.type == 'file';
	});
}

let ifaces = get_interfaces();
printf("Interfaces: %d\n", ifaces.length);

for (let iface of ifaces)
	printf("  %s: proto=%s device=%s\n", iface.name, iface.proto, iface.device);

let info = get_system_info();
if (info)
	printf("Uptime: %ds, Load: %s\n", info.uptime, join(' ', info.load));

let configs = list_config_files('/etc/config');
printf("Config files: %s\n", join(', ', configs));
