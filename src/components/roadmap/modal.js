import React from 'react'
import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalFooter,
} from '@mattjennings/react-modal'
import { Text, Button } from 'theme-ui'

export function MyModal(props) {
  return (
    <Modal {...props}>
      {({ onClose }) => (
        <>
          <ModalTitle>
            <Text
              sx={{
                fontSize: 2,
                fontWeight: 'medium',
              }}
            >
              Hello!
            </Text>
          </ModalTitle>
          <ModalContent>
            <Text>This is a modal example</Text>
          </ModalContent>
          <ModalFooter>
            <Button onClick={onClose}>OK</Button>
          </ModalFooter>
        </>
      )}
    </Modal>
  )
}
