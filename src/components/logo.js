/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import logo from "assets/logo.png";

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        maxWidth: ["250px", "250px", "300px", "300px", "300px", "300px"],
      }}
    >
      <Image src={logo} alt="southland merchants logo" />
    </Link>
  );
}
