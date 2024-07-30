import { Module } from "@nestjs/common";
import { SpeechService } from "./speech.service";
import { SpeechController } from "./speech.controller";
import { SpeechResolver } from "./speech.resolver";

@Module({
  controllers: [SpeechController],
  providers: [SpeechService, SpeechResolver],
  exports: [SpeechService],
})
export class SpeechModule {}
