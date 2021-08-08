import { StyleSheet } from 'react-native';

export const Seasontyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imgLeague: {
    width: '70px',
    height: '70px',
    borderRadius: 70,
    marginRight: '10px',
  },
  infoLeague: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leagueName: {
    fontSize: 17,
    fontWeight: '500',
  },
  seasonsStyle: {
    width: '95%',
    flexDirection: 'column',
    alignSelf: 'center',
    padding: 10,
  },
  seasonItem: {
    cursor: 'pointer',
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
  },
  seasonItemText: {
    fontSize: 25,
    padding: 10,
    fontWeight: 'bold',
  },
  backButtonContainer: {
    width: '95%',
    padding: 10,
    alignSelf: 'center',
  },
  backButton: {
    width: '80px',
    height: '34px',
    backgroundColor: 'rgb(29, 218, 29)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});
