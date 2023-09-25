import type { Metadata } from "next";

import Button from "@/ui/design-system/button/Button";
import Logo from "@/ui/design-system/logo/Logo";
import Avatar from "@/ui/design-system/avatar/Avatar";
import RiUser6Fill from "@/ui/design-system/react-icons/RiUser6Fill";
import RiShoppingBagLine from "@/ui/design-system/react-icons/RiShoppingBagLine";
import Container from "../../ui/components/container/Container";

export const metadata: Metadata = {
  title: "Design System",
  description: "Mon design system pour visualisation",
};

const DesignSystemPage = () => {
  return (
    <Container>
      <div className="py-10 space-y-20">
        <div className="flex items-center gap-4 p-10 ">
          <Button size="small">Accent</Button>
          <Button size="small" variant="secondary">
            Secondary
          </Button>
          <Button size="small" variant="outline">
            Outline
          </Button>
          <Button size="small" variant="disabled" disabled>
            Disabled
          </Button>
          <Button
            size="small"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
          ></Button>
          <Button
            size="small"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            iconTheme="secondary"
          ></Button>
          <Button
            size="small"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            iconTheme="gray"
          ></Button>
          <Button
            size="small"
            icon={{ icon: RiShoppingBagLine }}
            iconPosition="left"
          >
            Left Icon
          </Button>
          <Button size="small" icon={{ icon: RiShoppingBagLine }}>
            Right Icon
          </Button>
        </div>

        {/* isLoading */}

        <div className="flex items-center gap-4 p-10 ">
          <Button size="small" isLoading>
            Accent
          </Button>
          <Button size="small" variant="secondary" isLoading>
            Secondary
          </Button>
          <Button size="small" variant="outline" isLoading>
            Outline
          </Button>
          <Button size="small" variant="disabled" disabled isLoading>
            Disabled
          </Button>
          <Button
            size="small"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            isLoading
          ></Button>
          <Button
            size="small"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            iconTheme="secondary"
            isLoading
          ></Button>
          <Button
            size="small"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            iconTheme="gray"
            isLoading
          ></Button>
          <Button
            size="small"
            icon={{ icon: RiShoppingBagLine }}
            iconPosition="left"
            isLoading
          >
            Left Icon
          </Button>
          <Button size="small" icon={{ icon: RiShoppingBagLine }} isLoading>
            Right Icon
          </Button>
        </div>

        <div className="flex items-center gap-4 p-10 ">
          <Button>Accent</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="disabled" disabled>
            Disabled
          </Button>
          <Button variant="ico" icon={{ icon: RiUser6Fill }}></Button>
          <Button
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            iconTheme="secondary"
          ></Button>
          <Button
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            iconTheme="gray"
          ></Button>
          <Button icon={{ icon: RiShoppingBagLine }} iconPosition="left">
            Left Icon
          </Button>
          <Button icon={{ icon: RiShoppingBagLine }}>Right Icon</Button>
        </div>

        {/* isLoading */}
        <div className="flex items-center gap-4 p-10 ">
          <Button isLoading>Accent</Button>
          <Button variant="secondary" isLoading>
            Secondary
          </Button>
          <Button variant="outline" isLoading>
            Outline
          </Button>
          <Button variant="disabled" disabled isLoading>
            Disabled
          </Button>
          <Button variant="ico" icon={{ icon: RiUser6Fill }} isLoading></Button>
          <Button
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            iconTheme="secondary"
            isLoading
          ></Button>
          <Button
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            iconTheme="gray"
            isLoading
          ></Button>
          <Button
            icon={{ icon: RiShoppingBagLine }}
            iconPosition="left"
            isLoading
          >
            Left Icon
          </Button>
          <Button icon={{ icon: RiShoppingBagLine }} isLoading>
            Left Icon
          </Button>
        </div>

        <div className="flex items-center gap-4 p-10 ">
          <Button size="large">Accent</Button>
          <Button size="large" variant="secondary">
            Secondary
          </Button>
          <Button size="large" variant="outline">
            Outline
          </Button>
          <Button size="large" variant="disabled" disabled>
            Disabled
          </Button>
          <Button
            size="large"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
          ></Button>
          <Button
            size="large"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            iconTheme="secondary"
          ></Button>
          <Button
            size="large"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            iconTheme="gray"
          ></Button>
          <Button
            size="large"
            icon={{ icon: RiShoppingBagLine }}
            iconPosition="left"
          >
            Left Icon
          </Button>
          <Button size="large" icon={{ icon: RiShoppingBagLine }}>
            Right Icon
          </Button>
        </div>

        {/* isLoading */}
        <div className="flex items-center gap-4 p-10 ">
          <Button size="large" isLoading>
            Accent
          </Button>
          <Button size="large" variant="secondary" isLoading>
            Secondary
          </Button>
          <Button size="large" variant="outline" isLoading>
            Outline
          </Button>
          <Button size="large" variant="disabled" disabled isLoading>
            Disabled
          </Button>
          <Button
            size="large"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            isLoading
          ></Button>
          <Button
            size="large"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            iconTheme="secondary"
            isLoading
          ></Button>
          <Button
            size="large"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            iconTheme="gray"
            isLoading
          ></Button>
          <Button size="large" icon={{ icon: RiShoppingBagLine }} isLoading>
            Right Icon
          </Button>
          <Button size="large" icon={{ icon: RiShoppingBagLine }} isLoading>
            Right Icon
          </Button>
        </div>

        <div className="flex items-center gap-4 p-10">
          <Logo size="very-small" />
          <Logo size="small" />
          <Logo />
          <Logo size="large" />
        </div>

        <div className="flex items-center gap-4 p-10">
          <Avatar
            size="small"
            alt="Avatar de l'utilisateur"
            src="/assets/images/Avatar.png"
          />
          <Avatar
            alt="Avatar de l'utilisateur"
            src="/assets/images/Avatar.png"
          />
          <Avatar
            size="large"
            alt="Avatar de l'utilisateur"
            src="/assets/images/Avatar.png"
          />
        </div>
      </div>
    </Container>
  );
};

export default DesignSystemPage;
