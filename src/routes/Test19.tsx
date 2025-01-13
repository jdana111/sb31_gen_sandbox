// Test19 (RHF's useFieldArray Hook)
// Source: ChatGPT

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const FieldArrayExample = () => {
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      users: [{ name: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "users",
  });

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>User List</h3>

      {fields.map((field, index) => (
        <div key={field.id} style={{ marginBottom: "10px" }}>
          <input {...register(`users.${index}.name`)} placeholder="Enter name" />
          <button type="button" onClick={() => remove(index)}>Remove</button>
        </div>
      ))}

      <button type="button" onClick={() => append({ name: "" })}>Add User</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FieldArrayExample;
