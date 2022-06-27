import { Stack, Typography } from '@mui/material';
import React from 'react';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
	return (
		<Stack
			type="button"
			alignItems="center"
			justifyContent="center"
			className="bodyPart-card"
			sx={{
				borderTop: bodyPart === item ? '4px solid #ff2625' : '',
				backgroundColor: '#fff',
				width: '270px',
				height: '280px',
				cursor: 'pointer',
				gap: '47px',
			}}
		>
			<img src={Icon} alt="dumbell" style={{ width: '40px', height: '40px' }} />
			<Typography
				fontSize="24px"
				fontWeight="bold"
				color="#3a1212"
				textTransform="capitalize"
			>
				{item}
			</Typography>
		</Stack>
	);
};

export default BodyPart;
