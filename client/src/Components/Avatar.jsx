import { getAvatarLetter, getAvatarColor } from "../helper/avatarHelper";

const Avatar = ({ user }) => {
  const avatarLetter = getAvatarLetter(user);
  const avatarColor = getAvatarColor(user?.FullName || user?.username || "-");

  return user?.profile?.profilePic ? (
    <img
      src={user.profile.profilePic}
      alt="Profile"
      className="w-10 h-10 rounded-full object-cover border-2 border-purple-200 shadow-sm"
    />
  ) : (
    <div
      className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center text-lg font-bold text-white shadow-sm`}
    >
      {avatarLetter}
    </div>
  );
};

export default Avatar; 