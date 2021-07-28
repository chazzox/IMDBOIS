import { glob } from 'solid-styled-components';

import Header from './components/header';
import Movies from './components/movies';

glob`
	html,
	body {
		margin: 0;
	}
	* {
		font-family: Roboto, sans-serif;
		box-sizing: border-box;
		letter-spacing: 0.5pt;
	}
	::-webkit-scrollbar {
		width: 9px;
		height: 9px;
	}
	::-webkit-scrollbar-track {
		background: rgba(255,255,255,0.08);
		border-radius: 10px;
	}
	::-webkit-scrollbar-thumb {
		background: rgba(255,255,255,0.20);
		border-radius: 10px;
	}
	::-webkit-scrollbar-thumb:hover {
		background: rgba(255,255,255,0.25);;
	}
`;

/**
 * @todo
 * make login screen
 * design database structure
 * learn graphql
 */

function App() {
	return (
		<>
			<Header />
			<Movies />
		</>
	);
}

export default App;
