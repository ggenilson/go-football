import { StyleSheet } from 'react-native';

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgb(29, 218, 29)',
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
  imgHeader: {
    width: 25,
    height: 25,
    borderRadius: 25,
    marginLeft: 10,
  },
  titleHeader: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '500',
    marginLeft: 10,
  },
  imgTeam: {
    width: 25,
    height: 25,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  searchItem: {
    width: '95%',
    marginLeft: 8,
    height: 35,
    borderRadius: 5,
    borderColor: 'gray',
  },
  standings: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'rgb(255, 255, 255)',
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
    margin: 'auto',
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
  leagues: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 7,
    width: '95%',
    alignSelf: 'center',
  },
  infoLeague: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loader: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '500',
  },
  infoCountryItem: {
    flexDirection: 'row',
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  infoCountryImg: {
    width: 29,
    height: 20,
    borderRadius: 5,
    marginLeft: 10,
  },
  leagueImg: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginRight: 15,
  },
  leagueName: {
    fontSize: 17,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: '95%',
    alignSelf: 'center',
  },
  footerPaginate: {
    flexDirection: 'row',
  },
  footerPaginateButton: {
    width: 55,
    height: 29,
    backgroundColor: 'rgb(29, 218, 29)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,

    marginLeft: 10,
  },
  footerPaginateItem: {
    color: 'white',
    fontWeight: 'bold',
  
  },
  footerPage: {
    fontSize: 16,
    fontWeight: '500',
  },
  footerPaginateInput: {
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 1,
    width: 50,
    borderRadius: 5,
    padding: 5,
  },
  searchInputContainer: {
    width: '100%',
    padding: 10,
    alignSelf: 'center',
    marginBottom: 5,
  },
  searchInput: {
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    borderRadius: 5,
    padding: 10,
  },
  noData: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
  },
});
