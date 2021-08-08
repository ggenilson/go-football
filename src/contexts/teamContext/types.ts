export type ContextDefaultValuesType = {
  teamInfo: TeamInformationType;
  setTeamInfo: (val: TeamInformationType) => void;
};

type TeamType = {
  name: string;
  country: string;
  founded: number;
  logo: string;
};

type VenueType = {
  name: string;
  address: string;
  city: string;
  capacity: number;
  image: string;
};

export type TeamInformationType = {
  team: TeamType;
  venue: VenueType;
};
