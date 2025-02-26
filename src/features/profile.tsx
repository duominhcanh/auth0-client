import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from "@mantine/core";

const Profile = () => {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <div>
      <Avatar src={user.picture} alt={user.name} />
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
