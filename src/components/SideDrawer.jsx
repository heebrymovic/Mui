import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SubjectIcon from '@mui/icons-material/Subject';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import CloseIcon from '@mui/icons-material/Close';

const drawerWidth = 240;

const drawerStyled = {
	width: drawerWidth,
	padding: 0,
	flexShrink: 0,
	'& .MuiDrawer-paper': {
		padding: '10px 0 ',
		width: drawerWidth,
		boxSizing: 'border-box'
	},
	'& .MuiListItem-root': {
		padding: '0px'
	}
};

const navList = [
	{
		text: 'My Notes',
		path: '/',
		icon: <SubjectIcon color="secondary" />
	},
	{
		text: 'Create Notes',
		path: '/create',
		icon: <ControlPointIcon color="secondary" />
	}
];

const SideDrawer = ({ mobileOpen, handleDrawer }) => {
	const navigate = useNavigate();

	const location = useLocation();

	const nav = (
		<List>
			{navList.map((list, ind) => (
				<ListItem key={ind} sx={{ background: location.pathname === list.path ? '#f4f4f4' : '' }}>
					<ListItemButton onClick={() => navigate(list.path)}>
						<ListItemIcon>{list.icon}</ListItemIcon>
						<ListItemText sx={{ marginLeft: '-20px' }} primary={list.text} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
	);

	return (
		<>
			{/*Mobile Drawer*/}
			<Drawer
				sx={{
					display: { xs: 'block', md: 'none' },
					...drawerStyled
				}}
				anchor="left"
				open={mobileOpen}
			>
				<CloseIcon onClick={handleDrawer} sx={{ position: 'relative', left: '80%' }} />
				{nav}
			</Drawer>

			{/*Desktop Drawer*/}
			<Drawer
				sx={{
					display: { xs: 'none', md: 'block' },
					...drawerStyled
				}}
				variant="permanent"
				anchor="left"
			>
				{nav}
			</Drawer>
		</>
	);
};

export default SideDrawer;
