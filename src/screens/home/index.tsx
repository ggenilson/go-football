import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';

import Header from '../../components/header';

import { RouteStackParamList } from '../../@types/global';
import { LeaguesType, SeasonInfoType } from './types';
import { getLeagues } from './utils';
import { HomeStyle } from './styles';

import { paginateData } from '../../utils';
import { saveSeasons } from '../../state';

const Home: FC<RouteStackParamList<'Home'>> = ({ navigation }) => {
  const [page, setPage] = useState<number>(0);
  const [type, setType] = useState<string>('');
  const [pageText, setPageText] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const [disabledBack, setDisabledBack] = useState<boolean>(false);
  const [disabledNext, setDisabledNext] = useState<boolean>(false);
  const [leagues, setLeagues] = useState<Array<LeaguesType[]>>([]);
  const [oldLeagues, setOldLeagues] = useState<Array<LeaguesType[]>>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getLeagues().then(res => {
      const newRes = paginateData(res, 10);
      setLeagues(newRes);
      setOldLeagues(newRes);

      
    });
  }, []);

  function handleInputSearchBlur(value: string) {
    let result = oldLeagues
      ?.map(val =>
        val.filter(
          v => v?.league?.name?.toLowerCase()?.indexOf(value.toLowerCase()) > -1
        )
      )
      .filter(val => val.length);

    let newResult: any = [];

    for (let item of result) {
      newResult = [...newResult, ...item?.map(val => val)];
    }

    newResult = paginateData(newResult, 10);

    setPage(0);
    setLeagues(newResult);
    setType('searched');
  }

  function handleLeagueClick(value: SeasonInfoType) {
    dispatch(saveSeasons(value));

    navigation.navigate('Seasons');
  }

  function handlePaginatePress(type: string) {
    if (type === 'back') {
      page !== 0 && setPage(page - 1);

      return;
    }

    page !== leagues.length - 1 && setPage(page + 1);
  }

  function handleBlurInputPage(page: string) {
    const newPage = parseInt(page);

    if (newPage >= 0 && newPage <= leagues.length - 1) {
      setPage(newPage);
    }
  }

  useEffect(() => {
    if (page === 0) {
      setDisabledBack(true);
      setDisabledNext(false);

      return;
    }

    if (page === leagues.length - 1) {
      setDisabledNext(true);
      setDisabledBack(false);

      return;
    }

    setDisabledBack(false);
    setDisabledNext(false);
  }, [page]);

  useEffect(() => {
    setTimeout(() => {
      if (!oldLeagues.length) {
        setType('searched');
      }
    }, 5000);
  }, []);

  return (
    <ScrollView style={HomeStyle.container}>
      <Header />

      <View style={HomeStyle.searchInputContainer}>
        <TextInput
          style={HomeStyle.searchInput}
          placeholder="Pesquise por uma liga"
          value={searchText}
          onBlur={() => handleInputSearchBlur(searchText)}
          onChangeText={e => setSearchText(e)}
        />
      </View>

      {!leagues?.length && type !== 'searched' ? (
        <Text style={HomeStyle.loader}>
          Wait while we try to bring the datas ...
        </Text>
      ) : (
        <></>
      )}

      {leagues?.length ? (
        leagues[page]?.map(({ league, country, seasons }, index) => (
          <TouchableOpacity
            key={`leagues-${index}`}
            onPress={() => handleLeagueClick({ league, seasons })}
          >
            <View style={HomeStyle.leagues}>
              <View style={HomeStyle.infoLeague}>
                {/* <Image
                  style={HomeStyle.leagueImg}
                  source={require('../../../assets/defaultImages/bol.png')}
                /> */}

                <Image
                  style={HomeStyle.leagueImg}
                  source={{ uri: league?.logo }}
                />

                <View>
                  <Text style={HomeStyle.leagueName}>{league?.name}</Text>
                  <Text>League</Text>
                </View>
              </View>

              <View>
                <Text>Country: {country.name}</Text>

                <View style={HomeStyle.infoCountryItem}>
                  <Text>Flag:</Text>
                  {/* <Image
                    style={HomeStyle.infoCountryImg}
                    source={require('../../../assets/defaultImages/default.png')}
                  /> */}
                  <Image
                    style={HomeStyle.infoCountryImg}
                    source={{ uri: country?.flag }}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <></>
      )}

      {leagues?.length ? (
        <View style={HomeStyle.footer}>
          <View style={HomeStyle.footerPaginate}>
            <TouchableOpacity
              onPress={() => handlePaginatePress('back')}
              disabled={disabledBack}
            >
              <View style={HomeStyle.footerPaginateButton}>
                <Text style={HomeStyle.footerPaginateItem}>Back</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handlePaginatePress('next')}
              disabled={disabledNext}
            >
              <View style={HomeStyle.footerPaginateButton}>
                <Text style={HomeStyle.footerPaginateItem}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TextInput
              style={HomeStyle.footerPaginateInput}
              placeholder="Page"
              value={pageText}
              onBlur={() => handleBlurInputPage(pageText)}
              onChangeText={e => setPageText(e)}
            />
          </View>

          <View>
            <Text style={HomeStyle.footerPage}>
              Page: {page}/{leagues.length - 1}
            </Text>
          </View>
        </View>
      ) : (
        <></>
      )}

      {type === 'searched' && !leagues?.length ? (
        <Text style={HomeStyle.noData}>Sorry, no data was founded!</Text>
      ) : (
        <></>
      )}
    </ScrollView>
  );
};

export default Home;
