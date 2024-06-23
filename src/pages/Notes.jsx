import { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Note from '../components/Note';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
	const [notes, setNotes] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		const fetchNotes = async () => {
			try {
				const res = await axios.get('http://localhost:4500/notes');

				setNotes(res.data);
			} catch (err) {
				console.log(err);
			}
		};

		fetchNotes();
	}, []);

	const handleDelete = async (id) => {
		await axios.delete(`http://localhost:4500/notes/${id}`);
		setNotes((notes) => notes.filter((note) => note.id !== id));
	};

	return (
		<Container maxWidth="1024px" sx={{ marginTop: '20px' }}>
			{notes.length === 0 ? (
				<Box>
					<Typography variant="h5" color="error">
						You don't have any notes yet.
					</Typography>
					<Button variant="contained" onClick={() => navigate('/create')} mt={5} color="primary">
						Add Notes
					</Button>
				</Box>
			) : (
				<Grid container spacing={2}>
					{notes.map((note) => (
						<Note key={note.id} handleDelete={handleDelete} note={note} />
					))}
				</Grid>
			)}
		</Container>
	);
};

export default Notes;
