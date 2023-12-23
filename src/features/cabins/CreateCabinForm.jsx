import { useMutation, useQueryClient } from "@tanstack/react-query";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { createEditCabin } from "../../services/apiCabins";
import FormRow from "../../ui/FormRow";

/* eslint react/prop-types: 0 */

function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const queryClient = useQueryClient();

  const createMutation = useMutation(createEditCabin, {
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries("cabins");
    },
  });

  const editMutation = useMutation(createEditCabin, {
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries("cabins");
    },
  });

  const isWorking = createMutation.isLoading || editMutation.isLoading;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEditSession) {
      editMutation.mutate({ newCabinData: { ...data, image }, id: editId });
    } else {
      createMutation.mutate({ ...data, image: image });
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Input
          id="name"
          type="text"
          label="Name"
          error={errors.name?.message}
          {...register("name", { required: "Required" })}
        />
      </FormRow>
      <FormRow>
        <Textarea
          id="description"
          label="Description"
          error={errors.description?.message}
          {...register("description", { required: "Required" })}
        />
      </FormRow>
      <FormRow>
        <FileInput
          id="image"
          label="Image"
          error={errors.image?.message}
          {...register("image", { required: "Required" })}
        />
      </FormRow>
      <FormRow>
        <Button type="submit" disabled={isWorking}>
          {isEditSession ? "Edit Cabin" : "Create Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
