import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "../components/MainNavbar";
import CollectionCard from "../components/CollectionCard";
import JoinCard from "../components/JoinCard";
import EndNav from "../components/EndNav";
import FooterNav from "../components/FooterNav";
import RecentPost from "../components/RecentPost";
import ShowCaseCards from "../components/ShowCaseCards";
import NewArrivals from "../components/NewArrivals";

function Homepage() {
  return (
    <div>
      <MainNavbar />
      <NewArrivals />
      <ShowCaseCards />
      <RecentPost />
      <CollectionCard />
      <JoinCard />
      <EndNav />
      <FooterNav />
    </div>
  );
}

export default Homepage;
