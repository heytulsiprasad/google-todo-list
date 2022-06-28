import styled from "styled-components"

const InputContainer = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`

const StyledInput = styled.input`
  width: 476px;
  height: 56px;
  border: 1px solid #BDBDBD;
  border-radius: 12px;

  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #828282;  
    padding-left: 20px;  
  }
`

const StyledButton = styled.button`
  width: 109px;
  height: 56px;
  background: #2F80ED;
  box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
  border-radius: 12px;
  border: none;

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #fff;
  }
`

const Input = () => {
  return (
    <InputContainer>
      <StyledInput type="text" placeholder="add details" />
      <StyledButton type="submit">
        <span>Add</span>
      </StyledButton>
    </InputContainer>
  )
}

export default Input;