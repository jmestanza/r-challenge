import api from "../config/api";
import { Character } from "../interfaces/character";
import { Details } from "../interfaces/details";
import { PaginatedResponse } from "../interfaces/pagination";

const BASE_PATH = "/character";

export const getCharacters = (page: number, name: string) =>
  api.get<PaginatedResponse<Character[]>>(
    `${BASE_PATH}/?page=${page}&name=${name}`
  );

export const getCharacter = (id: string) =>
  api.get<Details>(`${BASE_PATH}/${id}`);
