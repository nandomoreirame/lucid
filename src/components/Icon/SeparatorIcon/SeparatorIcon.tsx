import _ from 'lodash';
import React from 'react';
import Icon, { IIconProps } from '../Icon';
import { lucidClassNames } from '../../../util/style-helpers';
import { FC, omitProps } from '../../../util/component-types';

const cx = lucidClassNames.bind('&-SeparatorIcon');

interface ISeparatorIconProps extends IIconProps {}

const SeparatorIcon: FC<ISeparatorIconProps> = ({
	className,
	...passThroughs
}): React.ReactElement => {

	return (
		<Icon
			{...omitProps(passThroughs, undefined, _.keys(SeparatorIcon.propTypes), false)}
			{..._.pick(passThroughs, _.keys(Icon.propTypes))}
			className={cx('&', className)}
		>
			<path d='M5.2 0h1.5l4 8-4 8H5.2l4-8-4-8z' />
		</Icon>
	);
};

SeparatorIcon._isPrivate = true,
SeparatorIcon.displayName = 'SeparatorIcon',
SeparatorIcon.peek = {
	description: `
		A separator icon.
	`,
	categories: ['visual design', 'icons'],
	extend: 'Icon',
	madeFrom: ['Icon'],
};
SeparatorIcon.propTypes = {
	...Icon.propTypes,
};

export default SeparatorIcon;