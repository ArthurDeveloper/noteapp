import { Flex, Box, Grid, Heading, Input } from '@chakra-ui/react'
import Note from './components/notes/Note';
import AddNoteButton from './components/notes/AddNoteButton';
import { useState, useEffect } from 'react';
import NoteEditingModal from './components/notes/NoteEditingModal';

function App() {

	const [notes, setNotes]	= useState([]); 

	useEffect(() => {
		setupNotes();
	}, []);

	function setupNotes() {
		setNotes([]);
		const notesOnStorage = localStorage;

		const keys = Object.keys(notesOnStorage);
		const values = Object.values(notesOnStorage);

		for (let i = 0; i < keys.length-2; i++) {
			if (keys[i].startsWith('noteapp_')) {
				setNotes(state => [
					...state,
					{
						name: keys[i].replace('noteapp_', ''),
						content: values[i]
					}
				]);
			}
		}
	}

	function getNote(name) {
		return localStorage.getItem('noteapp_' + name);
	}

	function addNote({ name, content }) {
		if (name.trim() !== '' && !getNote(name)) {
			localStorage.setItem('noteapp_' + name.trimStart().trimEnd(), content);
			setNotes(state => [
				...state,
				{
					name,
					content
				}
			]);
		}
	}

	function removeNote(name) {
		localStorage.removeItem('noteapp_' + name);
		setNotes(state => state.filter(note => note.name !== name));
	}

	function updateNote(oldName, newName, content) {
		localStorage.removeItem('noteapp_' + oldName.trimStart().trimEnd());
		localStorage.setItem('noteapp_' + newName.trimStart().trimEnd(), content);
		setNotes(state => state.filter(note => note.name !== oldName));
		setNotes(state => [
			...state,
			{
				name: newName.replace('noteapp_', ''),
				content
			}
		]);
	}

	return (
		<Box>
			<Heading size="2xl" mt="0.25em" mb="1em" align="center">
				Your Notes
			</Heading>

			<Flex justifyContent="center" mb="2em">
				<Input
					placeholder="Search..."
					w="26em"
					onChange={(evt) => {
						setupNotes();
						setNotes(
							state => state.filter(note => note.name.includes(evt.target.value)
						));
					}}
				/>
			</Flex>

			<Grid 
				templateColumns="repeat(auto-fill, minmax(10em, 21em))"
				justifyContent="center"
				gap="0.8em"
				mb="2em"
			>
				{
					notes.map((note, i) => {
						return (
							<Note
								key={i}
								name={note.name}
								content={note.content}
								onRemove={() => removeNote(note.name)}
								onSave={updateNote}
							/>
						)
					})
				}
				<Box alignSelf="end">
					<AddNoteButton onClick={addNote} />
				</Box>
			</Grid>
		</Box>
	)
}

export default App;
