import { FormsType } from "@/types/form";
import Button from "@/ui/design-system/button/Button";
import InputForm from "@/ui/design-system/form/input";

interface ForgotPasswordFormProps {
  form: FormsType;
}

const ForgotPasswordForm = ({ form }: ForgotPasswordFormProps) => {
  const { isLoading, errors, register, handleSubmit, onSubmit } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <InputForm
        type="email"
        placeholder="johndoe@gmail.com"
        isLoading={isLoading}
        isAutoComplete="on"
        register={register}
        required
        id="email"
        errorMsg="Veuillez renseigner votre email"
        errors={errors}
      />

      <Button isLoading={isLoading} type="submit" fullwidth>
        Envoyer
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
