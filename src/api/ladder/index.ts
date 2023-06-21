import { AxiosResponse } from 'axios';
import { IResponse } from 'api/types';
import disciplineStore from 'store/disciplines';
import RestAPI from '../restApiService';

/**
 * @param id: number;
 * @param name: string;
 * @param score?: number
 */
export interface IPlayer {
  id: number;
  name: string;
  score?: number;
  avatar?: string;
}

export interface ILadderData {
  players: IPlayer[] | [];
}
const pathName = window.location.pathname;

const LadderApi = {
  getLadder(): Promise<AxiosResponse<IResponse<ILadderData>>> {
    const { discipline } = disciplineStore;

    return RestAPI.get(`chat${pathName}?discipline=${discipline}`);
  }
};

export default LadderApi;
