import UserProfile from "./Components/UserProfile";
import UserTopInfo from "./Components/UserTopInfo";

const UserHome = () => {
  return (
    <div className="my-container min-h-screen  my-8">
      <h2 className="md:text-3xl text-2xl font-semibold font-[Cinzel] whitespace-nowrap">
        HI, WELCOME BACK!
      </h2>
      {/* cart, ordered wishlist etc info */}
      <UserTopInfo />
      {/* user profile */}
      <UserProfile />
    </div>
  );
};

export default UserHome;
