import { FormsType } from "@/types/form";
import Button from "@/ui/design-system/button/Button";
import InputForm from "@/ui/design-system/form/input";

interface RegisterFormProps {
  form: FormsType;
}

const RegisterForm = ({ form }: RegisterFormProps) => {
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

      <InputForm
        type="password"
        placeholder="Mot de passe"
        isLoading={isLoading}
        register={register}
        required
        id="password"
        errorMsg="Veuillez renseigner votre password"
        errors={errors}
      />

      <InputForm
        placeholder="Comment nous as-tu connus ?"
        isLoading={isLoading}
        register={register}
        required
        id="howYouKnewUs"
        errorMsg="Merci de nous indiquer comment tu nous as connu !"
        errors={errors}
      />

      <Button isLoading={isLoading} type="submit" fullwidth>
        S&apos;inscrire
      </Button>
    </form>
  );
};

export default RegisterForm;
