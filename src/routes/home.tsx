import { Authenticated } from "@/auth";
import { AccessToken } from "@/features/access-token";
import LoginButton from "@/features/login-button";
import LogoutButton from "@/features/logout-button";
import Profile from "@/features/profile";

export const Home = () => {
  return (
    <div className="mx-auto max-w-screen-md space-y-2">
      <LoginButton />
      <Authenticated>
        <Profile />
        <AccessToken />
        <LogoutButton />
      </Authenticated>
    </div>
  );
};
