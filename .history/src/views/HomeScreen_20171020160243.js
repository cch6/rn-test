import React, { Component } from 'react';
import { Root, Container, Header, Content, Toast, Button, Text, Icon } from "native-base";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showToast: false
    }
  }
  const navigationOptions = {
    title: 'Welcome'
  };
  render() {

    return (
      <Container>
        <Content padder>
          <Button onPress={() => Toast.show({
            text: 'Wrong password!',
            position: 'bottom',
            buttonText: 'Okay'
          })}>
            <Text>Toast</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
export default HomeScreen