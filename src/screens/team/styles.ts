import { StyleSheet } from 'react-native';

export const TeamStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  infoTeam: {
    flexDirection: 'column',
    width: '95%',
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  imgVenue: {
    width: '100%',
    height: '200px',
    borderRadius: 5,
  },
  secondItemTeamInfo: {
    flexDirection: 'row',
    marginTop: '20px',
    justifyContent: 'space-between',
  },
  imgTeam: {
    width: '30px',
    height: '25px',
    borderRadius: 5,
  },
  teamInfo: {
    flexDirection: 'row',
  },
  info: {
    fontWeight: '500',
    fontSize: 15,
  },
});
