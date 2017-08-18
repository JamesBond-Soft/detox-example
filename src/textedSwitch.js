import React from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingLeft: 10,
    backgroundColor: '#f4f4f4',
  },
  main: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
  },
});

class TextedSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
  }

  onValueChange = () => {
    const isChecked = !this.state.isChecked;
    this.setState({ isChecked });
    this.props.onSwitch(isChecked);
  }

  render() {
    const content = this.props.content;
    const isChecked = this.state.isChecked;

    return (
      <View style={styles.container}>
        <Switch
          onValueChange={this.onValueChange}
          value={isChecked}
        />
        <Text style={styles.main}>{content}</Text>
      </View>
    );
  }
}

TextedSwitch.propTypes = {
  content: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default TextedSwitch;
