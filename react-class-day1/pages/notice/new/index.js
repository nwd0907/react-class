import { Root, Container, Title, Input, ButtonWrapper, Textarea } from '../../../styled-components/NoticeStyled'

export default function NoticeNew() {
    return (
        <Root>
            <Container>
                <Title>공지사항 등록</Title>
                글쓴이: <Input type="text" />
                비밀번호: <Input type="password" />
                제목: <Input type="text" />
                내용: <Textarea rows={10} />
                <ButtonWrapper>
                    <button>등록완료</button>
                </ButtonWrapper>
            </Container>
        </Root>
    )
}