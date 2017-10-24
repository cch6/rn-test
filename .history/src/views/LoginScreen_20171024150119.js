import React, { Component } from 'react';
import {
  Container, Header, Content, Form, Item, Input, Label, Button, Text, Thumbnail
} from 'native-base';
import {
  View
} from 'react-native';
import style from '../style/LoginScreen'

class LoginScreen extends Component {
  static navigationOptions = {
    title: '登 录',
  };
  render() {
    return (
      <Container>
        <View style={style.logoContainer}>
          <Thumbnail style={style.logo} square source={require('../assets/image/demo.png')} />
        </View>
        <Content>
          <Form >
            <Item floatingLabel>
              <Label>用户名</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>密码</Label>
              <Input password={true} />
            </Item>
            <Button style={style.loginBtn} block success>
              <Text>登录</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
export default LoginScreen