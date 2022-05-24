import { Button } from '@chakra-ui/react';

export default function RemoveNoteButton({ noteName, onClick }) {

    return (
        <Button
            colorScheme="red"
            variant="outline"
            _focus={{
                boxShadow: '0px 0px 0px 4px #fcc'
            }}
            onClick={() => onClick(noteName)}
        >
            Delete
        </Button>
    )
}