import { writable, derived } from 'svelte/store';


export const lieu = writable('');
export const util = writable('');
export const type = writable('');
export const nombre = writable('');
export const items = writable([]);
export const filtered = derived(
	[util, lieu, type, nombre, items], 
	([$util, $lieu, $type, $nombre, $items]) => $items.filter(x => x.acf.lieu.includes($lieu) && x.acf.tranche_dage.includes($util) && x.acf.type.includes($type) && x.acf.combien.includes($nombre) )
);