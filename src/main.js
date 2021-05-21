import App from './App.svelte';

const app = new App({
	target: document.getElementById('app-root'),
	props: {
		name: 'jouets'
	}
});

export default app;