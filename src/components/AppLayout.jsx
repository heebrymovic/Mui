import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import SideDrawer from './SideDrawer';
import Header from './Header';

const AppLayout = () => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawer = () => setMobileOpen((open) => !open);

	return (
		<Box sx={{ display: 'flex' }}>
			<SideDrawer mobileOpen={mobileOpen} handleDrawer={handleDrawer} />

			<div>
				<Header handleDrawer={handleDrawer} />
				<Box sx={{ mt: '80px' }}>
					<Outlet />
				</Box>
			</div>
		</Box>
	);
};

export default AppLayout;
