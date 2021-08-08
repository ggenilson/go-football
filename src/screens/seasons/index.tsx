import React, { FC, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { RouteStackParamList } from '../../@types/global';
import { ApplicationState, saveStandings } from '../../state';
import { LeagueType, SeasonInfoType } from '../home/types';
import Header from '../../components/header';
import { Seasontyle } from './styles';
import { getStandings } from '../home/utils';

const Seasons: FC<RouteStackParamList<'Seasons'>> = ({ navigation }) => {
  const seasonInfo: SeasonInfoType = useSelector(
    (state: ApplicationState) => state.seasonInfo
  );
  const dispatch = useDispatch();
  const { league, seasons } = seasonInfo;

  async function handleSeasonPress(year: number) {
    const leagueStandings: LeagueType = await getStandings(
      league?.id.toString(),
      year.toString()
    );

    dispatch(saveStandings(leagueStandings));

    navigation.navigate('Standings');
  }

  return (
    <View style={Seasontyle.container}>
      <Header />

      <View>
        <View style={Seasontyle.infoLeague}>
          <Image style={Seasontyle.imgLeague} source={{ uri: league?.logo }} />
          {/* <Image
            style={Seasontyle.imgLeague}
            source={require('../../../assets/defaultImages/bol.png')}
          /> */}
          <View>
            <Text style={Seasontyle.leagueName}>{league?.name}</Text>
            <Text>{league?.type}</Text>
          </View>
        </View>

        <View style={Seasontyle.seasonsStyle}>
          {seasons.map((value, index) => (
            <TouchableOpacity
              key={`seasons-${index}`}
              onPress={() => handleSeasonPress(value.year)}
            >
              <View style={Seasontyle.seasonItem}>
                <Text style={Seasontyle.seasonItemText}>{value.year}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={Seasontyle.backButtonContainer}
        >
          <View style={Seasontyle.backButton}>
            <Text style={Seasontyle.buttonText}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Seasons;
