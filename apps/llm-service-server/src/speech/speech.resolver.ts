import * as graphql from "@nestjs/graphql";
import { SpeechService } from "./speech.service";

export class SpeechResolver {
  constructor(protected readonly service: SpeechService) {}
}
