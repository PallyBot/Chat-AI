import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ConversationTitle } from "../conversation/ConversationTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput
          source="conversation.id"
          reference="Conversation"
          label="conversation"
        >
          <SelectInput optionText={ConversationTitle} />
        </ReferenceInput>
        <TextInput label="role" source="role" />
      </SimpleForm>
    </Edit>
  );
};
