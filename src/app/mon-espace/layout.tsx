import BreadCrumbs from "@/ui/components/breadcrumbs/Breadcrumbs";
import Container from "@/ui/components/container/Container";
import UserAccountNavigation from "@/ui/components/navigation/userProfile/UserAccountNavigation";

const LayoutConnexion = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <BreadCrumbs />
      <Container className="mb-14">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-3 ">
            <UserAccountNavigation />
          </div>
          <div className="col-span-9 ">{children}</div>
        </div>
      </Container>
    </div>
  );
};

export default LayoutConnexion;
