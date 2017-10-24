import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';

class LoginScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
export default LoginScreen