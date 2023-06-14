function AHAHAAHAHAHAHAHAHAAH() {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ScrollView style={styles.container}>
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
            </ScrollView>
        </SafeAreaView>
    );
}