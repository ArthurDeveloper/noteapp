import {
    Input,
    Button,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function AddNoteButton({ onClick }) {

    const [noteName, setNoteName] = useState('');
    const [noteContent, setNoteContent] = useState('');

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button colorScheme="blue" variant="outline" onClick={onOpen}>Add</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>New Note</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input placeholder="Name" mb="1em" onChange={
                            (evt) => setNoteName(evt.target.value)
                        }/>
                        <Input placeholder="Content" mb="1em" onChange={
                            (evt) => setNoteContent(evt.target.value)
                        }/>

                        <Button 
                            colorScheme="blue"
                            variant="outline"
                            mb="1em"
                            onClick={() => {
                                onClick({
                                    name: noteName,
                                    content: noteContent
                                });
                                onClose();
                            }}
                        >
                            Create
                        </Button>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}