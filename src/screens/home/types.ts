type AllType = {
  lose: number;
  win: number;
  draw: number;
  played: number;
};

type Team = {
  id: number;
  name: string;
  logo: string;
};

type StandingsType = {
  rank: number;
  points: number;
  group: string;
  all: AllType;
  team: Team;
};

export type LeagueType = {
  id: number;
  name: string;
  country: string;
  flag: string;
  logo: string;
  season: number;
  standings: Array<StandingsType[]>;
};

export type LeaguesSeasonsType = string[];

type TypeLeagueType = {
  id: number;
  name: string;
  type: string;
  logo: string;
};

type CountryType = {
  name: string;
  flag: string;
};

type SeasonsType = {
  year: number;
};

export type LeaguesType = {
  league: TypeLeagueType;
  country: CountryType;
  seasons: SeasonsType[];
};

export type SeasonInfoType = {
  league: TypeLeagueType;
  seasons: SeasonsType[];
};
