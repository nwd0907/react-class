import styled from 'styled-components'

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    border: 2px solid black;
    padding: 50px;
`;

export const Title = styled.h1`
    text-align: center;
`

export const Input = styled.input`
    margin-bottom: 10px;
`

export const Textarea = styled.textarea`
    margin-bottom: 10px;
`

export const ButtonWrapper = styled.div`
    text-align: center;
    margin-top: 15px;
`