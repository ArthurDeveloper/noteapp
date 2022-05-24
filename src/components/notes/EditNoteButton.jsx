import { Button } from '@chakra-ui/react';

export default function EditNoteButton({ onClick }) {
    return (
        <Button colorScheme="blue" variant="outline" onClick={onClick}>
            Edit
        </Button>
    )
}