import { useParams } from "react-router-dom";
import { getStoicJoint } from "../releases/StoicReleases";

export default function StoicJoint() {
  let params = useParams();
  let stoicJoint = getStoicJoint(parseInt(params.stoicJointId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {stoicJoint.amount}</h2>
      <p>
        {stoicJoint.name}: {stoicJoint.number}
      </p>
      <p>Due Date: {stoicJoint.due}</p>
    </main>
  );
}