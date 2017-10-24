import React, { Component } from 'react';
import {
  Container, Header, Content, Form, Item, Input, Label, Button, Text, Thumbnail
} from 'native-base';
import {
  View
} from 'react-native';
import style from '../style/LoginScreen'

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: ''
    }
  }
  static navigationOptions = {
    title: '登 录',
  };
  login() {
    const userName = this.state.userName
    const password = this.state.password
    alert('userName:' + userName + 'password:' + password)
  }
  render() {
    return (
      <Container>
        <View style={style.logoContainer}>
          <Thumbnail style={style.logo} square source={require('../assets/image/demo.png')} />
        </View>
        <View style={style.formContainer}>
          <Form >
            <Item floatingLabel>
              <Label>用户名</Label>
              <Input onChange={(val) => this.setState({ userName: val })} />
            </Item>
            <Item floatingLabel >
              <Label>密码</Label>
              <Input secureTextEntry onChange={(val) => this.setState({ userName: val })} />
            </Item>
            <Button style={style.loginBtn} block success onPress={()=>this.login()}>
              <Text>登录</Text>
            </Button>
          </Form>
        </View>
      </Container>
    );
  }
}
export default LoginScreen