import { useState } from 'react'
import {
    Root,
    Container,
    Title,
    Input,
    ButtonWrapper,
    Textarea
} from '../../../styled-components/NoticeStyled'
import { useMutation, gql } from '@apollo/client'

const CREATE_NOTICE = gql`
    mutation noticeCRUD($writerVariable: String, $passwordVariable: String, $titleVariable: String, $contentsVariable: String) {
        createNotice(writerBack: $writerVariable, passwordBack: $passwordVariable, titleBack: $titleVariable, contentsBack: $contentsVariable) {
            id
            message
        }
    }
`

export default function NoticeNew() {
    const [writer, setWriter] = useState()
    const [password, setPassword] = useState()
    const [title, setTitle] = useState()
    const [contents, setContents] = useState()
    const [createNoticeMutation] = useMutation(CREATE_NOTICE)

    function handleChangeWriter(event) {
        const finalWriter = event.target.value
        setWriter(finalWriter)
        // console.log(event.target.value)
    }

    function handleChangePassword(event) {
        const finalPassword = event.target.value
        setPassword(finalPassword)
        // console.log(event.target.value)
    }

    function handleChangeTitle(event) {
        const finalTitle = event.target.value
        setTitle(finalTitle)
    }

    function handleChangeContents(event) {
        const finalContents = event.target.value
        setContents(finalContents)
    }

    function handleClickButton(event) {
        createNoticeMutation({
            variables: {
                writerVariable: writer,
                passwordVariable: password,
                titleVariable: title,
                contentsVariable: contents
            }
        })
    }

    return (
        <Root>
            <Container>
                <Title>공지사항 등록</Title>
                글쓴이: <Input type="text" onChange={handleChangeWriter} />
                비밀번호: <Input type="password" onChange={handleChangePassword} />
                제목: <Input type="text" onChange={handleChangeTitle} />
                내용: <Textarea rows={10} onChange={handleChangeContents} />
                <ButtonWrapper>
                    <button onClick={handleClickButton}>등록완료</button>
                </ButtonWrapper>
            </Container>
        </Root>
    )
}