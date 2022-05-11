import { Link, Outlet } from "react-router-dom";
import { getStoicJoints } from "../releases/StoicReleases";

export default function Stoic() {
  let stoicJoints = getStoicJoints();
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "solid 1px", padding: "1rem", }} >
        {stoicJoints.map((joint) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/stoic/${joint.number}`}
            key={joint.number}
          >
            {joint.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}