interface StatusProps {
  status: "Pending" | "Approved" | "Returned" | "Cancelled";
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
    case "Returned":
      styles = "text-completed";
      label = "Returned";
      break;
    case "Cancelled":
      styles = "text-rejected";
      label = "Cancelled";
      break;
    default:
      styles = "text-placeholder";
      label = status;
      break;
  }

  return <span className={`text-sm font-semibold ${styles}`}>{label}</span>;
}
