import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ handleDrawer }) => {
	return (
		<AppBar sx={{ width: { md: 'calc(100% - 240px)' }, background: 'white' }} elevation={1}>
			<Toolbar>
				<MenuIcon onClick={handleDrawer} sx={{ color: 'black', display: { md: 'none' } }} />
				<Typography color="secondary" variant="h5" sx={{ flexGrow: 1, ml: { xs: 2, md: 0 } }}>
					Ninja Notes
				</Typography>

				<Typography sx={{ color: 'black' }}>Mario</Typography>
				<Avatar sx={{ ml: 2 }} src="https://mui.com/static/images/avatar/1.jpg" />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
