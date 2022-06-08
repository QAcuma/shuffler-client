import { AxiosResponse } from 'axios';
import { IPlayer } from 'api/ladder';
import disciplineStore from 'store/disciplines';
import RestAPI from '../restApiService';

export interface IGame {
  id: number;
  teams: ITeam[];
  date: number;
}

export interface ITeam {
  players: IPlayer[];
  winner: boolean;
}

export interface IHistoryData {
  games: IGame[] | [];
}

const HistoryApi = {
  getHistory(id?: string): Promise<AxiosResponse<IHistoryData>> {
    const { discipline } = disciplineStore;

    return RestAPI.get(`history${id && `/${id}`}?discipline=${discipline}`);
  }
};

export default HistoryApi;
