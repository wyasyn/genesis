import { SocialLinks } from "./social-links";
import Pic from "./pic";

const Logo = () => (
  <div className="flex items-center gap-2">
    <Pic />
    <span className="text-xl font-bold">Yasin Walum</span>
  </div>
);

const links = [
  {
    group: "Services",
    items: [
      {
        title: "Web Development",
        href: "#web-development",
      },
      {
        title: "Mobile Apps",
        href: "#mobile-apps",
      },
      {
        title: "API Development",
        href: "#api-development",
      },
      {
        title: "UI/UX Design",
        href: "#ui-ux-design",
      },
      {
        title: "Consulting",
        href: "#consulting",
      },
    ],
  },
  {
    group: "Portfolio",
    items: [
      {
        title: "Projects",
        href: "#projects",
      },
      {
        title: "Skills",
        href: "#skills",
      },
      {
        title: "Experience",
        href: "#experience",
      },
      {
        title: "Testimonials",
        href: "#testimonials",
      },
      {
        title: "Blog",
        href: "#blog",
      },
    ],
  },
  {
    group: "About",
    items: [
      {
        title: "About Me",
        href: "#about",
      },
      {
        title: "Contact",
        href: "#contact",
      },
      {
        title: "Resume",
        href: "#resume",
      },
      {
        title: "Availability",
        href: "#availability",
      },
    ],
  },
  {
    group: "Connect",
    items: [
      {
        title: "Email",
        href: "mailto:yasinwalum@example.com",
      },
      {
        title: "Schedule Call",
        href: "#schedule",
      },
      {
        title: "Collaborate",
        href: "#collaborate",
      },
    ],
  },
];

export default async function FooterSection() {
  "use cache";
  return (
    <footer className="mt-14 md:mt-24">
      <div>
        <div className="container grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Logo />

            <p className="mt-4 text-sm ">
              Full Stack Developer based in Uganda.
              <br />
              Building innovative web and mobile solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3">
            {links.map((link, index) => (
              <div key={index} className="space-y-4 text-sm">
                <span className="block font-medium text-foreground">
                  {link.group}
                </span>
                {link.items.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary block duration-150"
                  >
                    <span>{item.title}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-px mb-3 mt-12 bg-border/20" />
        <div className="container flex flex-wrap items-end justify-between gap-6  py-6">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            © {new Date().getFullYear()} Yasin Walum. All rights reserved
          </span>
          <SocialLinks iconSize={24} />
        </div>
      </div>
    </footer>
  );
}
