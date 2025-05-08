import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { estilos } from './styles'; 


type PropsCalculadora = {
  numeroA: number;
  numeroB: number;
  operacion: number; 
};

const ComponenteCalculadora: React.FC<PropsCalculadora> = ({ numeroA, numeroB, operacion }) => {
  const calcular = (): number | string => {
    switch (operacion) {
      case 1: return numeroA + numeroB;
      case 2: return numeroA - numeroB;
      case 3: return numeroA * numeroB;
      case 4: 
        if (numeroB === 0) {
          Alert.alert("Error", "No se puede dividir entre cero");
          return "Error";
        }
        return parseFloat((numeroA / numeroB).toFixed(2));
      default: return "Operación no válida";
    }
  };

  return (
    <View style={estilos.contenedorResultado}>
      <Text style={estilos.textoResultado}>Resultado: {calcular()}</Text>
    </View>
  );
};

export default function App() {
  const [numeroA, setNumeroA] = useState<string>('');
  const [numeroB, setNumeroB] = useState<string>('');
  const [operacion, setOperacion] = useState<number>(1);

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Calculadora Lila</Text>

      <TextInput
        style={estilos.entrada}
        placeholder="Número A"
        keyboardType="numeric"
        value={numeroA}
        onChangeText={setNumeroA}
      />

      <TextInput
        style={estilos.entrada}
        placeholder="Número B"
        keyboardType="numeric"
        value={numeroB}
        onChangeText={setNumeroB}
      />

      <View style={estilos.filaBotones}>
        <Button title="Sumar (1)" onPress={() => setOperacion(1)} color="#6A0DAD" />
        <Button title="Restar (2)" onPress={() => setOperacion(2)} color="#6A0DAD" />
      </View>
      <View style={estilos.filaBotones}>
        <Button title="Multiplicar (3)" onPress={() => setOperacion(3)} color="#8A2BE2" />
        <Button title="Dividir (4)" onPress={() => setOperacion(4)} color="#8A2BE2" />
      </View>

      <ComponenteCalculadora 
        numeroA={parseFloat(numeroA) || 0} 
        numeroB={parseFloat(numeroB) || 0} 
        operacion={operacion} 
      />
    </View>
  );
}