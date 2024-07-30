import { Injectable } from "@nestjs/common";
import { SearchResult } from "./SearchResult";

@Injectable()
export class SearchService {
  constructor() {}
  async CustomSearch(args: string): Promise<SearchResult> {
    throw new Error("Not implemented");
  }
}
