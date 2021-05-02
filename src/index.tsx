import 'solid-js';
import { render } from 'solid-js/web';
import { ThemeProvider } from 'solid-styled-components';
import App from './App';

const theme = {
	colors: {
		pbg: 'rgb(30, 32, 44)',
		sbg: 'rgb(46, 51, 65)',
		tbg: 'rgb(40, 42, 54)',
		pab: 'rgb(179, 137, 239)',
		sab: 'rgb(56, 58, 89)',
		tab: 'rgb(104, 67, 155)',
		pt: 'rgb(255, 255, 255)',
		st: 'rgba(255, 255, 255,,0.66)',
		tt: 'rgb(100, 107, 132)',
		bc: 'rgb(52, 54, 84)',
		buttonColor: 'rgb(255, 255, 255)'
	},
	basic: {
		pbr: '8px'
	}
};

render(
	() => (
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	),
	document.getElementById('root') as Node
);
