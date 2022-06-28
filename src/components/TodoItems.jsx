import styled from "styled-components";
import { Checkbox } from "@mantine/core"
import { onSnapshot, collection, updateDoc, doc, deleteDoc  } from "firebase/firestore"
import { useEffect, useState } from "react"
import { ThumbDown } from "tabler-icons-react"
import { showNotification } from "@mantine/notifications"

import { db } from "../config/firebase";

const Container = styled.div`
  margin-top: 2rem
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
`

const TodoItems = ({ show, uid }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, `users/${uid}/todos`), (querySnapshot) => {
      const newTodos = []

      querySnapshot.forEach(doc => {
        if (show === "active") {
          if (!doc.data().completed) {
            newTodos.push({ id: doc.id, ...doc.data() })
          }
        } else if (show === "completed") {
          if (doc.data().completed) {
            newTodos.push({ id: doc.id, ...doc.data() })
          }
        } else {
            newTodos.push({ id: doc.id, ...doc.data() })
        }
      });

      setTodos(newTodos);
    })

    return () => unsubscribe();
  }, [uid, show])

  const updateTodoCheck = async (id, status) => {
    const docRef = doc(db, `users/${uid}/todos/${id}`);

    await updateDoc(docRef, {
      completed: status
    })
  }

  const deleteTodo = async (id) => {
    const docRef = doc(db, `users/${uid}/todos/${id}`)

    await deleteDoc(docRef);

    showNotification({
      title: "Delete Successful",
      color: "blue"
    })
  }

  return (
    <Container>
      {todos.map(todo => (
        <CheckboxContainer key={todo.id}>
          <Checkbox
            checked={todo.completed}
            onChange={() => updateTodoCheck(todo.id, !todo.completed)}
            styles={{
              label: { textDecoration: todo.completed ? 'line-through' : 'none' }
            }}
            size="md"
            label={todo.title}
          />
          <ThumbDown
            size={24}
            strokeWidth={1}
            color={'black'}
            onClick={() => deleteTodo(todo.id)}
            sx={{ cursor: "pointer" }}
          />
        </CheckboxContainer>
      ))}
    </Container>
  )
}

export default TodoItems;