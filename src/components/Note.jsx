import axios from 'axios';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { purple, yellow, pink, blue } from '@mui/material/colors';

const StyledAvatar = styled(Avatar)`
	background: ${(props) => {
		if (props.note.category === 'work') return purple[500];
		if (props.note.category === 'money') return yellow[500];
		if (props.note.category === 'todos') return pink[500];
		return blue[500];
	}};
`;

const Note = ({ note, handleDelete }) => {
	return (
		<Grid
			item
			xs={12}
			sm={6}
			md={4}
			sx={{
				'& .MuiPaper-root': {
					height: '100%!important'
				}
			}}
		>
			<Card sx={{ maxWidth: 345 }}>
				<CardHeader
					avatar={<StyledAvatar note={note}>{note.category[0].toUpperCase()}</StyledAvatar>}
					action={
						<IconButton onClick={() => handleDelete(note.id)}>
							<DeleteIcon />
						</IconButton>
					}
					title={note.title}
					subheader={note.category}
				/>
				<CardContent>
					<Typography variant="body2">{note.body}</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Note;
