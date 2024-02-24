import { CouponType } from "@/config/enums";

export interface LeagueStats {
  leagueId: string;
  leagueImage: string;
  leagueName: string;
  stats: {
    season: string;
    stats: {
      APPEARANCES: number;
      MINUTES_PLAYED: number;
      LINEUPS: number;
      ASSISTS: number;
      GOALS_CONCEDED: number;
      YELLOWCARDS: number;
      REDCARDS: number;
    };
  }[];
}
export interface IEvent {
  code: string;
  player: string;
  related_player: string;
}

export interface IUserProfile {
  data: {
    phone: string;
    role: string;
    favorites: any;
  };
}

export interface IEventType {
  participant_id: string;
  minute: string;
  type: {
    name: string;
    code: string;
  };
  player_name: string;
  related_player_name: string;
}
export interface IFormattedEvent {
  participant_id: string;
  minute: string;
  name: string;
  code: string;
  player: string;
  related_player: string;
}

export interface ISingleStanding {
  teamName?: string;
  position?: string;
  teamId?: string | null; // Allow string as well
  teamImage?: string;
  GP?: number;
  W?: number;
  D?: number;
  L?: number;
  GF?: number;
  GA?: number;
  GD?: number;
  PTS?: number;
}

// Type Definitions for League Standings
export type Detail = {
  type_id: number;
  value: number;
};

export type ResultObject = {
  [type_id: number]: number;
};

export type LeagueStanding = {
  position: number;
  participant?: {
    id: string;
    name?: string;
    image_path: string;
  };
  group?: {
    name: string;
  };
  details?: Detail[] | undefined;
};

export type TransformedStandingDetails = {
  details?: [];
  participant?: {
    id?: string;
    name: string;
    image_path: string;
    // Add other properties related to participant if needed
  };
  position: number;
  teamName: string;
  teamImage: string;
  teamId: string;
  GP: any;
  W: any;
  D: any;
  L: any;
  GF: any;
  GA: any;
  GD: any;
  PTS: any;
};

export type GroupedStandings = {
  id?: string;
  name: string;
  standings: TransformedStandingDetails[];
};

export type TransformedGroupedStandings = {
  id?: string;
  groupName: string;
  standings: TransformedStandingDetails[];
};

export type TransformedStandingsArray = TransformedGroupedStandings[];

export type LeagueStandingsData = {
  status: boolean;
  data?: LeagueStanding[];
};

export interface IParams {
  player_id?: string;
  league_id: string;
  team_id: string;
}

export type TModalElementType = HTMLDialogElement | null;

export interface INestedObject {
  [key: string]: INestedObject | any;
}

export interface IFixtureSearchParams {
  fixture_id: string;
  match_title: string;
  t1_name: string;
  t1_img: string;
  t2_name: string;
  t2_img: string;
  time: string;
  sport_type: string;
}

export interface IFixtureGroup {
  id: number;
  name: string;
  image: string;
  fixtures: {
    id: number;
    name: string;
    league: {
      name: string;
    };
    starting_at: string;
    state: {
      state: string;
    };
    scores: {
      description: string;
    }[];
    participants: {
      name: string;
      image_path: string;
      meta: {
        location: string;
      };
    }[];
  }[];
}

export interface IFixture {
  id: number;
  name: string;
  league: {
    name: string;
  };
  starting_at: string;
  state: {
    state: string;
  };
  scores: {
    description: string;
  }[];
  participants: {
    name: string;
    image_path: string;
    meta: {
      location: string;
    };
  }[];
}

export interface ISeason {
  id: number;
  name: string;
}
export interface Team {
  meta?: {
    location?: string;
    id?: string;
  };
  location?: string;
  description?: string;

  score: { participant: string };
  // Add other properties as needed
}
export interface IIteam {
  type: {
    id?: number;
  };
  // Add other properties as needed
}
export interface IMatchData {
  participants?: Team[] | undefined;
  data: INestedObject;
  isLoading: boolean;
  isError?: any;
}

export interface IFixtureProps {
  status: string;
  fixtureId: string;
}

export interface ITabPanels {
  currentTab: number;
  index: number;
  content: JSX.Element;
}

export interface ITabItems {
  tab: string;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
  active: boolean;
  isWhite: boolean;
}

export interface ICountry {
  name: string;
  id: string;
}

interface CommonProperties {
  id?: string; // Make id optional here
  state: { state: string; short_name: string } | undefined;
  scores?: Score | null;
  starting_at_timestamp?: number;
  periods?: Array<{
    minutes?: string;
  }>;
  participants?: Array<{
    minutes?: string;
    meta?: { location: string };
    short_code?: string;
    image_path?: string;
    name?: string;
  }>;
}

export interface ILeague extends CommonProperties {
  id?: any;
  name: string;
  image_path: string;
  fixtures: Array<{
    league?: {
      country?: ICountry;
    };
    state?: {
      state: string;
    };
  }>;
  image: string;
}

export interface IMatch extends CommonProperties {
  season_id?: string;
}

export interface Score {
  description: string;
  score?: {
    participant: string;
    goals: number;
  };
}

export interface Coupon {
  id: string;
  name: string;
  type: CouponType;
  slug: string;
  amount?: string;
  code?: string;
}

export interface Address {
  customerName?: string;
  phoneNumber?: string;
  country?: string;
  state?: string;
  city?: string;
  zip?: string;
  street?: string;
}

export interface GoogleMapLocation {
  lat?: number;
  lng?: number;
  street_number?: string;
  route?: string;
  street_address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  formattedAddress?: string;
}

export type ProductColor = {
  name?: string;
  code?: string;
};

export interface CartItem {
  id: number;
  name: string;
  slug?: string;
  description?: string;
  image: string;
  color?: ProductColor | null;
  price: number;
  salePrice?: number;
  quantity: number;
  size: number;
  stock?: number;
  discount?: number;
}

export type Product = {
  id: number;
  slug?: string;
  title: string;
  description?: string;
  price: number;
  sale_price?: number;
  thumbnail: string;
  colors?: ProductColor[];
  sizes?: number[];
  base64?: string;
};

export type PosProduct = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  salePrice: number;
  quantity: number;
  size: number;
  discount?: number;
  base64?: string;
};

export interface CalendarEvent {
  id?: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  title: string;
  description?: string;
  location?: string;
}
