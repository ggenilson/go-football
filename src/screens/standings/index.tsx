import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { RouteStackParamList } from '../../@types/global';
import Header from '../../components/header';
import { Seasontyle } from '../seasons/styles';
import StandingsComponent from '../../components/standings';

const Standings: FC<RouteStackParamList<'Standings'>> = ({ navigation }) => (
  <View style={Seasontyle.container}>
    <Header />

    <StandingsComponent navigation={navigation} />

    <TouchableOpacity
      onPress={() => navigation.navigate('Seasons')}
      style={Seasontyle.backButtonContainer}
    >
      <View style={Seasontyle.backButton}>
        <Text style={Seasontyle.buttonText}>Back</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default Standings;
