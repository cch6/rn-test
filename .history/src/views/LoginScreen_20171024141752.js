import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

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
            <Item floatingLabel>
              <Label>密码</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Button block success>
                <Text>Success</Text>
              </Button>
            </Item>

          </Form>
        </Content>
      </Container>
    );
  }
}
export default LoginScreen