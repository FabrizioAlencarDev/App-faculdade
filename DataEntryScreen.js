import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const DataEntryScreen = () => {
  const [impressions, setImpressions] = useState('');
  const [clicks, setClicks] = useState('');
  const [revenue, setRevenue] = useState('');
  const [ctr, setCtr] = useState('');

  const handleSave = () => {
    const data = {
      impressions,
      clicks,
      revenue,
      ctr
    };
    console.log('Dados salvos:', data);
    // Aqui você pode salvar os dados em um banco de dados ou storage
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Total Impressions"
        keyboardType="numeric"
        value={impressions}
        onChangeText={setImpressions}
      />
      <TextInput
        style={styles.input}
        placeholder="Total Clicks"
        keyboardType="numeric"
        value={clicks}
        onChangeText={setClicks}
      />
      <TextInput
        style={styles.input}
        placeholder="Total Revenue (R$)"
        value={revenue}
        onChangeText={setRevenue}
      />
      <TextInput
        style={styles.input}
        placeholder="Total CTR"
        value={ctr}
        onChangeText={setCtr}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default DataEntryScreen;
