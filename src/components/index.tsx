import * as React from 'react'
import MessageIcon from '@material-ui/icons/Message'
import Modal, { closeStyle } from 'simple-react-modal'
import { useState } from 'react'

interface Props {
  username: string
}

export const Chat = (props: Props) => {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => setVisible(!visible)

  return (
    <div
      style={{
        width: `100px`,
        height: `100px`,
        cursor: 'pointer',
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      }}
    >
      <MessageIcon onClick={() => toggleVisible()} />
      <Modal
        style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
        containerStyle={{
          border: '2px solid black',
          padding: '15px',
          width: '70vw',
          cursor: 'auto',
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }}
        closeOnOuterClick
        show={visible}
        onClose={() => setVisible(false)}
      >
        modale di messaggi
      </Modal>
    </div>
  )
}
