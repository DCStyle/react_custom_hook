import React from 'react';
import ReactDOM from 'react-dom/client';

import { useValueCheck } from './useValueCheck';

const ValueDisplay = () => {
	const title =  useValueCheck() ? 'even' : 'odd';

	return (
		<>
			<h1>Current second is {title}. Check console log.</h1>
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ValueDisplay />);