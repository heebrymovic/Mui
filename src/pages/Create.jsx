import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
	const [title, setTitle] = useState('');

	const [description, setDescription] = useState('');

	const [titleError, setTitleError] = useState(false);

	const [categoryError, setCategoryError] = useState(false);

	const [descriptionError, setDescriptionError] = useState(false);

	const [category, setCategory] = useState('');

	const [categoryRadioError, setCategoryRadioError] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		setTitleError(false);

		setDescriptionError(false);

		setCategoryError(false);

		setCategoryRadioError('');

		if (!title) setTitleError('Title Field is Required');

		if (!description) setDescriptionError('Description field is Required');

		if (!category) {
			setCategoryError('Category Field is Required');

			setCategoryRadioError({ color: 'red' });
		}

		if (title && description && category) {
			axios.post('http://localhost:4500/notes', {
				title,
				category,
				body: description
			});

			navigate('/');
		}
	};

	const handleSelect = (e) => setCategory(e.target.value);

	return (
		<Container sx={{ mw: '100%!important' }}>
			<Typography variant="h5" sx={{ fontWeight: 700 }} component="h2">
				Create a New Note
			</Typography>

			<Box my={3} sx={{ mw: '600px' }}>
				<form onSubmit={handleSubmit}>
					<FormControl fullWidth margin="normal">
						<TextField
							onChange={(e) => setTitle(e.target.value)}
							size="small"
							label="Note Title"
							color="secondary"
							fullWidth
							value={title}
							error={titleError && true}
						/>
						<Typography color="error">{titleError}</Typography>
					</FormControl>

					<FormControl fullWidth margin="normal">
						<TextField
							size="small"
							onChange={(e) => setDescription(e.target.value)}
							multiline
							value={description}
							rows="5"
							label="Details"
							color="secondary"
							fullWidth
							error={descriptionError && true}
						/>
						<Typography color="error">{descriptionError}</Typography>
					</FormControl>

					<FormControl fullWidth margin="normal">
						<RadioGroup value={category} onChange={handleSelect}>
							<FormControlLabel
								value="money"
								control={<Radio sx={{ ...categoryRadioError }} color="secondary" />}
								label="Money"
							/>

							<FormControlLabel
								value="todos"
								control={<Radio sx={{ ...categoryRadioError }} color="secondary" />}
								label="Todos"
							/>

							<FormControlLabel
								value="reminder"
								control={<Radio sx={{ ...categoryRadioError }} color="secondary" />}
								label="Reminder"
							/>

							<FormControlLabel
								value="work"
								control={<Radio sx={{ ...categoryRadioError }} color="secondary" />}
								label="Work"
							/>
						</RadioGroup>
						<Typography color="error">{categoryError}</Typography>
					</FormControl>

					<Button type="submit" variant="contained" color="secondary" endIcon={<KeyboardArrowRightIcon />}>
						Create
					</Button>
				</form>
			</Box>
		</Container>
	);
};

export default Create;
