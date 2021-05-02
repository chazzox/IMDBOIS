import { glob } from 'solid-styled-components';

import Header from './components/header';
import Movies from './components/movies';

glob`
  html,
  body {
    margin:0;
  }
  * {
	font-family: Roboto, sans-serif;
    box-sizing: border-box;
    letter-spacing: 0.5pt;
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
