import { 
    Modal,
    ModalOverlay,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
    Input,
    Textarea,
    Button
} from '@chakra-ui/react';
import { useState } from 'react';

export default function NoteEditingModal({ 
    isOpen, onCloseButtonClick, onSave, noteName, noteContent }) {

    const { onClose } = useDisclosure();

    const [lastName, setLastName] = useState(noteName);
    const [name, setName] = useState(noteName);
    const [content, setContent] = useState(noteContent);

    return (
        <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit note</ModalHeader>
                <ModalCloseButton onClick={onCloseButtonClick} />
                <ModalBody>
                    <Input 
                        placeholder="Title"
                        mb="1em"
                        defaultValue={name}
                        onChange={(evt) => {
                            setName(evt.target.value);
                        }}
                    />
                    <Textarea
                        placeholder="Content"
                        mb="2em"
                        h="20em"
                        defaultValue={content}
                        onChange={(evt) => setContent(evt.target.value)}
                    />

                    <Button
                        mb="0.60em"
                        colorScheme="blue"
                        onClick={() => {
                            onSave(lastName, name, content)
                            setLastName(name);
                        }}
                    >Save</Button>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}