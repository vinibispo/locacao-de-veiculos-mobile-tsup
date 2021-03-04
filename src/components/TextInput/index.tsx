import React, {ComponentProps, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput as Input} from 'react-native-paper';
import theme from '../../utils/theme';

type TextInputProps = ComponentProps<typeof Input> & {errorText?: string};

function TextInput({errorText, ...props}: TextInputProps) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {!!errorText && !!props.error ? (
        <Text style={styles.error}>{errorText}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default memo(TextInput);