import styled from "styled-components";
import { Checkbox } from "@mantine/core"

const Container = styled.div`
  margin-top: 2rem
`

const TodoItems = ({ show }) => {
  return (
    <Container>
      <Checkbox
          checked
          styles={{
            label: { textDecoration: 'line-through' }
          }}
          size="md"
          label="I agree to sell my privacy"
        />
    </Container>
  )
}

export default TodoItems;