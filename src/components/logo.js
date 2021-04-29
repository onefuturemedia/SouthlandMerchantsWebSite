/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";

export default function Logo({ logo, light }) {
  return (
    <Link
      path="/"
      id={light ? "logo-light" : "logo-dark"}
      sx={{
        variant: "links.logo",
        maxWidth: ["250px", "250px", "300px", "300px", "300px", "300px"],
      }}
    >
      <Image src={logo} alt="southland merchants logo" />
    </Link>
  );
}
