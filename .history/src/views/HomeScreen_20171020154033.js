import React, { Component } from 'react';
import { Root, Container, Header, Content, Toast, Button, Text, Icon } from "native-base";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    return (
      <Container>
        <Header />
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