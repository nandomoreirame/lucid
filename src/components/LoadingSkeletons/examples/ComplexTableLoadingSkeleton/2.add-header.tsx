import React from 'react';
import createClass from 'create-react-class';
import { ComplexTableLoadingSkeleton } from '../../../../index';

export default createClass({
	render() {
		return (
			<ComplexTableLoadingSkeleton
				isLoading={true}
				width={800}
				height={200}
				header='Added Header'
			/>
		);
	},
});