import mitt from 'mitt';

export const emitter = mitt();

export enum Events {
	upload = 'upload',
	tabIdle = 'tab-idle',
	tabActive = 'tab-active'
}

export default emitter;
