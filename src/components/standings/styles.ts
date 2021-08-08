import { StyleSheet } from 'react-native';

export const StandingsStyle = StyleSheet.create({
  imgTeam: {
    width: 35,
    height: 30,
    borderRadius: 5,
  },
  standings: {
    flexDirection: 'row',
    width: '95%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 7,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  standingsTeam: {
    width: '98%',
    height: 190,
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    marginRight: 20,
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemHeaderText: {
    marginLeft: 5,
    fontSize: 17,
    fontWeight: '500',
  },
  secondItem: {
    flexDirection: 'row',
    // margin: 'auto',
    alignSelf: 'flex-end',
  },
  secondItemTeam: {
    margin: 'auto',
  },
  imgTeamCountry: {
    width: '50px',
    height: '50px',
    borderRadius: 5,
  },
  win: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 15,
  },
  lose: {
    color: 'rgb(184, 48, 48)',
    fontWeight: 'bold',
    fontSize: 15,
  },
  rank: {
    color: 'orange',
    fontWeight: 'bold',
  },
  other: {
    fontWeight: '500',
  },
  requestError: {
    fontSize: 17,
    color: 'rgb(184, 48, 48)',
    fontWeight: '500',
    marginTop: 20,
    paddingLeft: 20,
  },
  headerCountry: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
  },
  headerCountryText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
  },
});
