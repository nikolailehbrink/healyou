import type { ReactNode } from "react";

type Props = {
  formAction: () => Promise<never>;
  icon: ReactNode;
};
export default function SocialLoginButton({
  formAction,
  icon,
  ...props
}: Props) {
  return (
    <button
      {...props}
      formAction={formAction}
      className="flex grow justify-center rounded-lg border-2 border-muted bg-neutral-950 p-2 text-muted-foreground hover:border-primary hover:bg-neutral-900 hover:text-foreground"
    >
      {icon}
    </button>
  );
}
