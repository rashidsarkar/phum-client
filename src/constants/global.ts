export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthOptions = monthNames.map((item) => ({
  value: item,
  label: item,
}));

export const genders = ["Male", "Female", "Other"];
export const genderOptions = genders.map((item) => ({
  value: item,
  label: item,
}));
const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O", "O-"];
export const bloodGroupOptions = bloodGroups.map((item) => ({
  value: item,
  label: item,
}));
