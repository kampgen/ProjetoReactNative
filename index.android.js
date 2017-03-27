import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  Picker
} from 'react-native';

import {Tab, Tabs } from 'native-base';

class AreaTag extends Component {
  render() {
    return (
      <View style={styles.pickerline}>
      <Text style={[styles.font, {color: 'black'}]}>Área</Text>
      <Picker style={{width:160}}>
        <Picker.Item label="Área Azul" value="az" />
        <Picker.Item label="teste" value="js" />
      </Picker>
      </View>
    );
  }
}

class TempoTag extends Component {
  render() {
    return (
      <View style={styles.pickerline}>
        <Text style={[styles.font, {color: 'black'}]}>Tempo</Text>
        <Picker style={{width:250}}>
          <Picker.Item label="60 Minutos - (R$2.50)" value="az" />
          <Picker.Item label="teste" value="js" />
        </Picker>
      </View>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <TouchableNativeFeedback onPress={this._onPressButton} background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.touchableButton}>
              <Image source={require("./img/circle-filled.png")} style={{width: 250, height: 250}}/>
          </View>
      </TouchableNativeFeedback>
    );
  }
}

export default class ProjetoTeste extends Component {
  render() {
    return (
      <View style={styles.container}>
      {/*primeira linha do Header*/}
          <View style={styles.header}>
              <View style={{borderColor: 'white', borderWidth: 2, left: 10, padding: 5, borderTopWidth: 0, borderColor: '#ffd700'}}>
                  <Image source={require("./img/white-car.png")} style={styles.iconCar}/>
              </View>
              <Text style={styles.title}>Minha vaga - Florianópolis</Text>
              <View style={{width: 50}}></View>
          </View>
      {/*segunda linha do Header*/}
          <View style={[styles.header, styles.secondHeader]}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 135}}>
                  <Image source={require("./img/white-car.png")} style={{width: 30, height: 30}}/>
                  <Text style={styles.font}>NPH-3106</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 125}}>
                  <Text style={styles.font}>R$123,50</Text>
                  <Image source={require("./img/refresh.png")} style={{width: 30, height: 30}}/>
              </View>
          </View>
      {/*Menu*/}
                <Tabs>
                    <Tab heading="ATIVAR" tabStyle={{backgroundColor: '#6495ed'}}
                    activeTabStyle={{backgroundColor: '#387ef5'}}>
                        <AreaTag></AreaTag>
                        <TempoTag></TempoTag>
                        <Button></Button>
                    </Tab>
                    <Tab heading="DESATIVAR" tabStyle={{backgroundColor: '#6495ed'}}
                    activeTabStyle={{backgroundColor: '#387ef5'}}>
                        <Text>Testinho 1</Text>
                    </Tab>
                    <Tab heading="RECARGA" tabStyle={{backgroundColor: '#6495ed'}}
                    activeTabStyle={{backgroundColor: '#387ef5'}}>
                        <Text>Testonho 2
                        </Text>
                    </Tab>
                    <Tab heading="GERAIS" tabStyle={{backgroundColor: '#6495ed'}}
                    activeTabStyle={{backgroundColor: '#387ef5'}}>
                        <Text>teste2
                        </Text>
                    </Tab>
                </Tabs>
      {/*Linha Área*/}
      {/*Linha Tempo*/}

      {/*Botão*/}

      </View>
    );
  }
}


const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  font: {
    color: 'white',
    fontSize: 20
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#387ef5',
    height: 60
  },

  iconCar: {
    width: 20,
    height: 20,
  },

  title: {
    fontSize: 18,
    color: 'white'
  },

  tabs: {
    backgroundColor: 'black'
  },

  secondHeader: {
    paddingHorizontal: 10,
  },

  pickerline: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20
  },

  button: {
    justifyContent: 'center',
  },

  touchableButton: {
    marginTop: 30,
    width: 250,
    height: 250,
    alignSelf: 'center'
  }
});

AppRegistry.registerComponent('ProjetoTeste', () => ProjetoTeste);
