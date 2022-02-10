import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter(counter + 1);

  const decrementCounter = () => {
    if (counter - 1 >= 0) setCounter(counter - 1);
  };

  return (
    <View>
      <Text testID="counterTitle">COUNTER APP</Text>
      <Text testID="counterText">{counter}</Text>
      <Button
        testID="incrementButton"
        title="Increment"
        onPress={incrementCounter}
      />
      <Button
        testID="decrementButton"
        title="Decrement"
        onPress={decrementCounter}
      />
    </View>
  );
}
