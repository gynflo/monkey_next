import BreadCrumbs from "@/ui/components/breadcrumbs/Breadcrumbs";

const LayoutConnexion = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BreadCrumbs />
      {children}
    </>
  );
};

export default LayoutConnexion;
