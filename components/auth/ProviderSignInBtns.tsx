import { useTranslations } from "next-intl";
import { ProviderSignInBtn } from "./ProviderSignInBtn";

export const ProviderSignInBtns = ({ signInCard }: { signInCard: boolean }) => {
  const t = useTranslations("AUTH");

  return (
    <div className="flex flex-col gap-2">
      <ProviderSignInBtn className="w-full rounded-[1.9rem] border">
        {signInCard
          ? t("SIGN_IN.PROVIDERS.GOOGLE")
          : t("SIGN_UP.PROVIDERS.GOOGLE")}
      </ProviderSignInBtn>
      <ProviderSignInBtn className="w-full rounded-[1.9rem] border">
        {signInCard
          ? t("SIGN_IN.PROVIDERS.GITHUB")
          : t("SIGN_UP.PROVIDERS.GITHUB")}
      </ProviderSignInBtn>
      <ProviderSignInBtn className="w-full rounded-[1.9rem] border">
        {signInCard
          ? t("SIGN_IN.PROVIDERS.APPLE")
          : t("SIGN_UP.PROVIDERS.APPLE")}
      </ProviderSignInBtn>
    </div>
  );
};
