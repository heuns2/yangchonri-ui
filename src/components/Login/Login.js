import React from "react";
import { Form, FormInput, FormGroup } from "shards-react";
import styled from 'styled-components';
import oc from 'open-color';
import './Login.css'

const Container = styled.div``;

// 화면의 중앙에 위치시킨다
const Positioner = styled.div``;

// Header
const Header = styled.div`
    background: ${oc.red[6]};
`;

// children 이 들어가는 곳
const ContentsWrapper  = styled.div``;

const JoinContent = styled.div``;

const ButtonInit = styled.button`
  display: inline-block;
  color: white;
  font-size: 1em;
  padding: 0.4em 1em;
  border: 2px solid;
  border-radius: 3px;
`;

const Button1 = styled(ButtonInit)`
    background: ${oc.red[6]};
`;
const Button2 = styled(ButtonInit)`
    background: ${oc.green[6]};
`;


export default class Product extends React.Component {
    render(){
        return (
            <Container className="containerWrap">
                <Positioner className="positioner">
                    <Header className="login-header">로그인</Header>
                    <ContentsWrapper className="contentsWrapper">
                        <Form>
                            <FormGroup>
                                <label htmlFor="#username">아이디</label>
                                <FormInput id="#username" />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#password">패스워드</label>
                                <FormInput type="password" id="#password"  />
                            </FormGroup>
                            <Button1 className="w-50">회원 로그인</Button1>
                            <Button2 className="w-50">네이버 로그인</Button2>
                        </Form>
                        <JoinContent className="join_wrap">
                            <span className="p5 join"><a href="/api/test">아이디 찾기</a></span>
                            <span className="p5 join"><a href="/">비밀번호 찾기</a></span>
                            <span className="p5 join"><a href="/">회원가입</a></span>
                        </JoinContent>
                    </ContentsWrapper>
                </Positioner>
            </Container>
        );
    }

}
