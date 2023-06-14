
import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking, SafeAreaView, FlatList } from 'react-native';
import SvgTimer from './svgs/SvgTimer';
import SvgBolo from './svgs/SvgBolo';
import SvgInfo from './svgs/SvgInfo';
import ListaIngredientes from './ingredientes/ListaIngredientes';
import AppBar from './AppBar';

function teste({ titulo, categoria, img, infoAdd, dif, rende, tempo, ing, prep, montagem, fonte }) {
  const receita =[
    {
      titulo: titulo,
      categoria: categoria,
      img: img,
      infoAdd: infoAdd,
      dif: dif,
      rende: rende,
      tempo: tempo,
      ing: ing,
      prep: prep,
      montagem: montagem,
      fonte: fonte,
    }
  ]
  return (
    <FlatList
      data={receita}
      renderItem={(item) =>
        <View>
          <Text style={[styles.texto, styles.titulos]}>{titulo}</Text>
          <Text style={[styles.texto, styles.subtitulos, styles.cat]}>{categoria}</Text>
          <Image source={{ uri: img }} style={styles.imagem} />
          {infoAdd != null ?
            <View style={{ marginBottom: 10 }}>
              <Text style={[styles.texto, styles.subtitulos, styles.infoAdd]}>Informações Adicionais:</Text>
              <Text style={[styles.texto, styles.informacoes]}>{infoAdd}</Text>
            </View>
            : null}
          <Text style={[styles.texto, styles.subtitulos, { alignSelf: 'center', marginBottom: 5, color: 'dimgray', fontWeight: 'normal' }]}><SvgInfo /> {dif}</Text>
          <View style={[styles.container, { flexDirection: 'row', paddingLeft: '10%', marginBottom: 20 }]}>
            <Text style={[styles.texto, styles.subtitulos, styles.metade]}><SvgBolo /> {rende}</Text>
            <Text style={[styles.texto, styles.subtitulos, styles.metade]}><SvgTimer /> {tempo}</Text>
          </View>
          <View style={[styles.container, styles.contIng]}>
            <Text style={[styles.texto, styles.subtitulos]}>Ingredientes:</Text>
            <ListaIngredientes
              ingredientes={ing} />
          </View>
          <View style={styles.contPrep}>
            <Text style={[styles.texto, styles.subtitulos]}>Modo de Preparo:</Text>
            <Text style={styles.texto}>{prep}</Text>
          </View>
          {montagem != null ?
            <View style={styles.contPrep}>
              <Text style={[styles.texto, styles.subtitulos]}>Montagem:</Text>
              <Text style={styles.texto}>{montagem}</Text>
            </View>
            : null}
          <TouchableOpacity style={styles.botao} onPress={() => Linking.openURL(fonte)}>
            <Text style={[styles.texto, styles.fonte]}>Fonte</Text>
          </TouchableOpacity>
        </View>}
    />
  );
}

function PagReceita({ titulo, categoria, img, infoAdd, dif, rende, tempo, ing, prep, montagem, fonte }) {
  const receita =[
    {
      titulo: titulo,
      categoria: categoria,
      img: img,
      infoAdd: infoAdd,
      dif: dif,
      rende: rende,
      tempo: tempo,
      ing: ing,
      prep: prep,
      montagem: montagem,
      fonte: fonte,
    }
  ]
  return (
    <FlatList
      style={ styles.container }
      data={receita}
      renderItem={(item) =>
        <View>
          <Text style={[styles.texto, styles.titulos]}>{titulo}</Text>
          <Text style={[styles.texto, styles.subtitulos, styles.cat]}>{categoria}</Text>
          <Image source={{ uri: img }} style={styles.imagem} />
          {infoAdd != null ?
            <View style={{ marginBottom: 10 }}>
              <Text style={[styles.texto, styles.subtitulos, styles.infoAdd]}>Informações Adicionais:</Text>
              <Text style={[styles.texto, styles.informacoes]}>{infoAdd}</Text>
            </View>
            : null}
          <Text style={[styles.texto, styles.subtitulos, { alignSelf: 'center', marginBottom: 5, color: 'dimgray', fontWeight: 'normal' }]}><SvgInfo /> {dif}</Text>
          <View style={[styles.container, { flexDirection: 'row', paddingLeft: '10%', marginBottom: 20 }]}>
            <Text style={[styles.texto, styles.subtitulos, styles.metade]}><SvgBolo /> {rende}</Text>
            <Text style={[styles.texto, styles.subtitulos, styles.metade]}><SvgTimer /> {tempo}</Text>
          </View>
          <View style={[styles.container, styles.contIng]}>
            <Text style={[styles.texto, styles.subtitulos]}>Ingredientes:</Text>
            <ListaIngredientes
              ingredientes={ing} />
          </View>
          <View style={styles.contPrep}>
            <Text style={[styles.texto, styles.subtitulos]}>Modo de Preparo:</Text>
            <Text style={styles.texto}>{prep}</Text>
          </View>
          {montagem != null ?
            <View style={styles.contPrep}>
              <Text style={[styles.texto, styles.subtitulos]}>Montagem:</Text>
              <Text style={styles.texto}>{montagem}</Text>
            </View>
            : null}
          <TouchableOpacity style={styles.botao} onPress={() => Linking.openURL(fonte)}>
            <Text style={[styles.texto, styles.fonte]}>Fonte</Text>
          </TouchableOpacity>
        </View>}
    />
  );
}

export default PagReceita;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'floralwhite',
    flex: 1,
  },
  titulos: {
    fontSize: 26,
    color: 'black',
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  subtitulos: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  texto: {
    fontSize: 14,
  },
  cat: {
    paddingLeft: '10%',
    marginBottom: 10,
    color: 'dimgray',
  },
  imagem: {
    borderRadius: 50,
    width: '75%',
    height: 200,
    alignSelf: 'center',
    marginBottom: 10,
  },
  infoAdd: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'indianred',
  },
  informacoes: {
    alignSelf: 'center',
    width: '75%',
  },
  metade: {
    width: '50%',
    color: 'dimgray',
    fontWeight: 'normal'
  },
  contIng: {
    paddingLeft: '10%',
    flex: 1,
    marginBottom: 10
  },
  contPrep: {
    paddingLeft: '10%',
    paddingRight: '10%',
    marginBottom: 10,
    // flex: 1, não funciona com flex não sei porque
  },
  botao: {
    alignSelf: 'center',
    backgroundColor: '#656AD3',
    borderRadius: 50,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  fonte: {
    fontWeight: 600,
    color: 'white',
    fontSize: 18,
  },

});

// titulo, categoria, img, infoAdd, dif, rende, tempo, ing, prep, montagem, fonte