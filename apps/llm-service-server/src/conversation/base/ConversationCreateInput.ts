/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MessageCreateNestedManyWithoutConversationsInput } from "./MessageCreateNestedManyWithoutConversationsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { SearchQueryCreateNestedManyWithoutConversationsInput } from "./SearchQueryCreateNestedManyWithoutConversationsInput";

@InputType()
class ConversationCreateInput {
  @ApiProperty({
    required: false,
    type: () => MessageCreateNestedManyWithoutConversationsInput,
  })
  @ValidateNested()
  @Type(() => MessageCreateNestedManyWithoutConversationsInput)
  @IsOptional()
  @Field(() => MessageCreateNestedManyWithoutConversationsInput, {
    nullable: true,
  })
  messages?: MessageCreateNestedManyWithoutConversationsInput;

  @ApiProperty({
    required: false,
    type: () => SearchQueryCreateNestedManyWithoutConversationsInput,
  })
  @ValidateNested()
  @Type(() => SearchQueryCreateNestedManyWithoutConversationsInput)
  @IsOptional()
  @Field(() => SearchQueryCreateNestedManyWithoutConversationsInput, {
    nullable: true,
  })
  searchQueries?: SearchQueryCreateNestedManyWithoutConversationsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  userId?: string | null;
}

export { ConversationCreateInput as ConversationCreateInput };
