let stoicJoints = [
  {
    name: "Article 214",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "sentence",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "easta bunny",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "backitup",
    number: 1998,
    amount: "$4,600",
    due: "01/27/1998",
  },
];

export function getStoicJoints() {
  return stoicJoints;
}

export function getStoicJoint(number) {
  return stoicJoints.find(
    (stoicJoint) => stoicJoint.number === number
  );
}