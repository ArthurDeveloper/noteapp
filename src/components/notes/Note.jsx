import { Heading, Text, Flex, Box } from '@chakra-ui/react';
import RemoveNoteButton from './RemoveNoteButton';
import EditNoteButton from './EditNoteButton';
import NoteEditingModal from './NoteEditingModal';
import { useState } from 'react';

export default function Note({ name, content, onRemove, onSave }) {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <Flex 
            as="button"
            direction="column"
            alignItems="flex-start"
            border="1px solid #ccc"
            borderRadius="0.50em"
            p="1em 1em 1em 1em"
            w="19em"
            h="11em"
            transition="all 0.3s ease-in-out"
            _hover={{
                boxShadow: '0px 0px 0px 7px #bde'
            }}
        >
            <NoteEditingModal 
                isOpen={modalOpen}
                onCloseButtonClick={() => setModalOpen(false)}
                onSave={onSave}
                noteName={name}
                noteContent={content}
            />
            <Heading 
                size="xl"
            >
                {name.length > 10 ? name.substring(0, 10)+'...' : name}
            </Heading>
            <Text
                noOfLines={1}
                maxWidth="80%"
            >
                {content}
            </Text>

            <Flex mt="auto" gap="0.5em">
                <RemoveNoteButton noteName={name} onClick={onRemove} />
                <EditNoteButton onClick={() => setModalOpen(true)} />
            </Flex>
        </Flex>
    )
}