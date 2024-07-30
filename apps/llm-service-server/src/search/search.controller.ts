import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SearchService } from "./search.service";
import { SearchResult } from "./SearchResult";

@swagger.ApiTags("searches")
@common.Controller("searches")
export class SearchController {
  constructor(protected readonly service: SearchService) {}

  @common.Get("/search")
  @swagger.ApiOkResponse({
    type: SearchResult
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CustomSearch(
    @common.Body()
    body: string
  ): Promise<SearchResult> {
        return this.service.CustomSearch(body);
      }
}
