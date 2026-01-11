export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments: (empList) => Object.keys(empList).length,
  };
}
