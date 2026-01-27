interface StatusProps {
  status: "Pending" | "Approved" | "Rejected" | "Completed";
}

export default function StatusBadge({ status }: StatusProps) {
  let styles = "";
  let label = status;

  switch (status) {
    case "Pending":
      styles = "text-pending";
      label = "Pending";
      break;
    case "Approved":
      styles = "text-approved";
      label = "Approved";
      break;
    case "Rejected":
      styles = "text-rejected";
      label = "Rejected";
      break;
    case "Completed":
      styles = "text-completed";
      label = "Completed";
      break;
    default:
      styles = "text-placeholder";
      label = status;
      break;
  }

  return <span className={`text-sm font-semibold ${styles}`}> {label} </span>;
}
