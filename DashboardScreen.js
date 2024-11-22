import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const DashboardScreen = () => {
  const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março'], // Exemplo de meses
    datasets: [
      {
        data: [503386, 26156, 100034], // Dados de exemplo para impressões
      },
    ],
  };

  return (
    <View style={styles.container}>
      <BarChart
        data={data}
        width={400}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#ff0000',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        verticalLabelRotation={30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashboardScreen;
