import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';

class LoginScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>用户名</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>密码</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
export default LoginScreen