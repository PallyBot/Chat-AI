import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { MessageTitle } from "../message/MessageTitle";
import { SearchQueryTitle } from "../searchQuery/SearchQueryTitle";

export const ConversationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="messages"
          reference="Message"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="searchQueries"
          reference="SearchQuery"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SearchQueryTitle} />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
