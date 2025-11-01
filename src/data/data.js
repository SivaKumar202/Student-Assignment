export let users = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "student",
    email: "aarav.mehta@college.edu",
  },
  {
    id: 2,
    name: "Diya Sharma",
    role: "student",
    email: "diya.sharma@college.edu",
  },
  {
    id: 3,
    name: "Kabir Patel",
    role: "student",
    email: "kabir.patel@college.edu",
  },
  {
    id: 4,
    name: "Prof. Rajesh Khanna",
    role: "admin",
    email: "rajesh.khanna@college.edu",
  },
];

// 📄 Assignments created by Admins
export let assignments = [
  {
    id: 101,
    title: "React Components & Props",
    description:
      "Build a small app demonstrating component hierarchy and prop drilling.",
    dueDate: "2025-11-02",
    status: "Overdue",
    driveLink: "https://drive.google.com/example1",
    createdBy: 4,
    actionLabel: "Submit Now",
    statusColor: "text-red-600",
    progressColor: "bg-orange-500",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
  },
  {
    id: 102,
    title: "Tailwind Responsive Design",
    description:
      "Design a landing page that adapts seamlessly across devices using Tailwind CSS.",
    dueDate: "2025-11-04",
    driveLink: "https://drive.google.com/example2",
    createdBy: 4,
  },
  {
    id: 103,
    title: "React State Management",
    description:
      "Implement state management using useState and useEffect in a todo list app.",
    dueDate: "2025-11-06",
    driveLink: "https://drive.google.com/example3",
    createdBy: 4,
  },
];

// ✅ Submissions (Student Activity)
export let submissions = [
  // Aarav
  {
    assignmentId: 101,
    studentId: 1,
    submitted: true,
    confirmation: true,
    submittedOn: "2025-10-30T09:15:00Z",
  },
  {
    assignmentId: 102,
    studentId: 1,
    submitted: false,
    confirmation: false,
    submittedOn: null,
  },
  {
    assignmentId: 103,
    studentId: 1,
    submitted: true,
    confirmation: true,
    submittedOn: "2025-10-31T13:40:00Z",
  },

  // Diya
  {
    assignmentId: 101,
    studentId: 2,
    submitted: false,
    confirmation: false,
    submittedOn: null,
  },
  {
    assignmentId: 102,
    studentId: 2,
    submitted: true,
    confirmation: true,
    submittedOn: "2025-10-30T16:10:00Z",
  },
  {
    assignmentId: 103,
    studentId: 2,
    submitted: false,
    confirmation: false,
    submittedOn: null,
  },

  // Kabir
  {
    assignmentId: 101,
    studentId: 3,
    submitted: true,
    confirmation: true,
    submittedOn: "2025-10-29T08:00:00Z",
  },
  {
    assignmentId: 102,
    studentId: 3,
    submitted: true,
    confirmation: true,
    submittedOn: "2025-10-30T17:45:00Z",
  },
  {
    assignmentId: 103,
    studentId: 3,
    submitted: false,
    confirmation: false,
    submittedOn: null,
  },
];
