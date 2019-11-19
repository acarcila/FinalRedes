import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Button
          title="Home"
          onPress={() =>
            this.props.navigation.navigate('Home', {})
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});