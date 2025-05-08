import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F5E6FF', 
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#6A0DAD', 
  },
  entrada: {
    height: 50,
    borderColor: '#C9A0FF', 
    borderWidth: 2,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  filaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    gap: 10,
  },
  contenedorResultado: {
    marginTop: 20,
    alignItems: 'center',
  },
  textoResultado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8A2BE2', 
  },
});