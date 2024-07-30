import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SpeechService } from "./speech.service";

@swagger.ApiTags("speeches")
@common.Controller("speeches")
export class SpeechController {
  constructor(protected readonly service: SpeechService) {}
}
