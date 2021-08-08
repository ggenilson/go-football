import React, { FC, useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { StandingsStyle } from '../../components/standings/styles';
import { RouteStackParamList } from '../../@types/global';
import { Seasontyle } from '../seasons/styles';
import Header from '../../components/header';
import { TeamContext } from '../../contexts';
import { TeamStyle } from './styles';

const Team: FC<RouteStackParamList<'Team'>> = ({ navigation }) => {
  const { teamInfo } = useContext(TeamContext);

  const {
    team: { name, country, founded, logo },
    venue: { name: venueName, address, city, capacity, image },
  } = teamInfo;

  return (
    <View style={TeamStyle.container}>
      <Header />

      <View style={TeamStyle.infoTeam}>
        <View style={[StandingsStyle.item, StandingsStyle.itemHeader]}>
          <Image style={TeamStyle.imgVenue} source={{ uri: image }} />
          {/* <Image
            style={TeamStyle.imgVenue}
            source={require('../../../assets/defaultImages/default.png')}
          /> */}
        </View>

        <View style={TeamStyle.secondItemTeamInfo}>
          <View style={StandingsStyle.item}>
            <View style={TeamStyle.teamInfo}>
              <Image style={TeamStyle.imgTeam} source={{ uri: logo }} />
              {/* <Image
                style={TeamStyle.imgTeam}
                source={require('../../../assets/defaultImages/default.png')}
              /> */}
              <Text style={StandingsStyle.itemHeaderText}>{name}</Text>
            </View>
            <Text style={TeamStyle.info}>Country: {country}</Text>
            <Text style={TeamStyle.info}>Founded: {founded}</Text>
          </View>

          <View style={StandingsStyle.item}>
            <Text style={TeamStyle.info}>Venue Name: {venueName}</Text>
            <Text style={TeamStyle.info}>Adress: {address}</Text>
            <Text style={TeamStyle.info}>City: {city}</Text>
            <Text style={TeamStyle.info}>Capacity: {capacity}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Standings')}
        style={Seasontyle.backButtonContainer}
      >
        <View style={Seasontyle.backButton}>
          <Text style={Seasontyle.buttonText}>Back</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Team;
