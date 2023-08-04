import axios from 'axios';
import { Position } from '../types';

const BASE_URL = 'https://myfailemtions.npkn.net/b944ff/';

export const fetchPositions = async () => {
  const response = await axios.get(BASE_URL);
  return response.data as Position[];
};

export const updatePositions = async (positions: Position[]) => {
  await axios.post(BASE_URL, positions);
};
