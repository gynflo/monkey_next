import HeroTopView from "./components/heroTop/HeroTop.view";
import FeaturedView from "./components/featured/Featured.view";
import CodersMonkeySlackView from "./components/codersMonkeySlack/CodersMonkeySlack.view";
import CurrentCourseView from "./components/currentCourse/CurrentCourse.view";
import HighLightListView from "./components/highLightList/HighLightList.view";
import CallToActionView from "@/ui/design-system/call-to-actions/CallToActionView";

const LandingPageView = () => {
  return (
    <>
      <HeroTopView />
      <FeaturedView />
      <CodersMonkeySlackView />
      <CurrentCourseView />
      <HighLightListView />
      <CallToActionView />
    </>
  );
};

export default LandingPageView;
