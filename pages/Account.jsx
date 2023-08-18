import Login from "../components/Login";
import EndNav from "../components/EndNav";
import FooterNav from "../components/FooterNav";
import JoinCard from "../components/JoinCard";
import MainNavbar from "../components/MainNavbar";

function Account() {
  return (
    <div>
      <MainNavbar />
      <Login />
      <JoinCard />
      <EndNav />
      <FooterNav />
    </div>
  );
}

export default Account;
