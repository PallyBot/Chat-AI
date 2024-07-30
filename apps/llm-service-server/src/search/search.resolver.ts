import * as graphql from "@nestjs/graphql";
import { SearchResult } from "./SearchResult";
import { SearchService } from "./search.service";

export class SearchResolver {
  constructor(protected readonly service: SearchService) {}

  @graphql.Query(() => SearchResult)
  async CustomSearch(
    @graphql.Args("args")
    args: string
  ): Promise<SearchResult> {
    return this.service.CustomSearch(args);
  }
}
