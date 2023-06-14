
import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView, SafeAreaView, Modal, TouchableOpacity, Image } from 'react-native';
import PagReceita from './components/pagReceita';
import Lasanha from './components/receitas/lasanha';
import Macarronada from './components/receitas/macarronada';
import AppBar from './components/AppBar';
import SvgSeta from './components/svgs/SvgSeta';

function App() {
  const [verModalLas, setVerModalLas] = useState(false);
  const [verModalMac, setVerModalMac] = useState(false);

  return (
    <ScrollView style={{ backgroundColor: 'floralwhite' }}>
      <AppBar />
      <View style={styles.card}>
        <Text style={styles.nome}>{Lasanha.titulo}</Text>
        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={() => setVerModalLas(true)}>
            <Image source={{ uri: Lasanha.img }} style={styles.foto} />
          </TouchableOpacity>
        </View>

        <Modal animationType='slide' visible={verModalLas}>
          <TouchableOpacity style={styles.btnVoltar} onPress={() => setVerModalLas(false)}>
            <Text style={styles.texto}><SvgSeta /></Text>
          </TouchableOpacity>
          <PagReceita
            {...Lasanha}
          />
        </Modal>
      </View>

      <View style={styles.card}>
        <Text style={styles.nome}>{Macarronada.titulo}</Text>
        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={() => setVerModalMac(true)}>
            <Image source={{ uri: Macarronada.img }} style={styles.foto} />
          </TouchableOpacity>
        </View>

        <Modal animationType='slide' visible={verModalMac}>
          <TouchableOpacity style={styles.btnVoltar} onPress={() => setVerModalMac(false)}>
            <Text style={styles.texto}><SvgSeta /></Text>
          </TouchableOpacity>
          <PagReceita
            {...Macarronada}
          />
        </Modal>
      </View>

    </ScrollView>
  );

}

export default App;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    paddingTop: 40,
  },

  nome: {
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
    fontSize: 20,
  },

  areaBotao: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    borderRadius: 50,
    width: '75%',
    height: 200,
    alignSelf: 'center',
    elevation: 2,
  },

  foto: {
    borderRadius: 50,
    width: '100%',
    height: 200,
    alignSelf: 'center',
    marginBottom: 10,
  },
  btnVoltar: {
    backgroundColor: 'floralwhite',
  },
  texto: {
    padding: 5,
  }
})