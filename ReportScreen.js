import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const ReportScreen = () => {
  const [data, setData] = useState([
    { id: '1', month: 'Janeiro de 2023', impressions: 503386, clicks: 860, revenue: 'R$3.146,16', ctr: '0.17%' },
    // Adicione mais dados conforme necessário
  ]);

  const handleExport = () => {
    // Implemente a exportação dos dados, por exemplo, usando uma biblioteca para gerar PDFs ou Excel
    console.log('Exporting data...');
  };

  return (
    <View style={styles.container}>
      <Button title="Export Data" onPress={handleExport} />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.month}</Text>
            <Text>{item.impressions}</Text>
            <Text>{item.clicks}</Text>
            <Text>{item.revenue}</Text>
            <Text>{item.ctr}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
});

export default ReportScreen;
