import styled from "styled-components"
import { Button } from '@mantine/core'
import { ThumbDown } from "tabler-icons-react"
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import { db } from "../config/firebase"

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.875rem;
`

const DeleteBox = ({ uid }) => {
  const onDeletePress = async () => {
    const querySnapshot = await getDocs(collection(db, `users/${uid}/todos`));

    querySnapshot.forEach(async (docSnapshot) => {
      await deleteDoc(doc(db, `users/${uid}/todos`, docSnapshot.id));
      console.log(`Deleted doc: ${docSnapshot.id}`);
    });
  }

  return (
    <Container>
      <Button onClick={onDeletePress} variant="filled" color="red" leftIcon={<ThumbDown size={16} />}>Delete</Button>
    </Container>
  )
}

export default DeleteBox