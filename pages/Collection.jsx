import CollectionPageLayout from "../components/CollectionPageLayout";
import EndNav from "../components/EndNav";
import FooterNav from "../components/FooterNav";
import JoinCard from "../components/JoinCard";
import MainNavbar from "../components/MainNavbar";

function Collection() {
  return (
    <div>
      <MainNavbar />
      <CollectionPageLayout />
      <JoinCard />
      <EndNav />
      <FooterNav />
    </div>
  );
}

export default Collection;
