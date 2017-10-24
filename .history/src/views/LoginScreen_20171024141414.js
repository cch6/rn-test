import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

class LoginScreen extends Component {
  render() {
    return (
      <Container>
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
            <Button block success>
              <Text>Success</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
export default LoginScreen