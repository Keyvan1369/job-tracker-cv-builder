import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function JobStatusChart({ jobs }) {
  const applied = jobs.filter(
    (job) => job.status === "Applied"
  ).length;

  const interview = jobs.filter(
    (job) => job.status === "Interview"
  ).length;

  const offer = jobs.filter(
    (job) => job.status === "Offer"
  ).length;

  const rejected = jobs.filter(
    (job) => job.status === "Rejected"
  ).length;

  const data = {
    labels: [
      "Applied",
      "Interview",
      "Offer",
      "Rejected",
    ],

    datasets: [
      {
        label: "Applications",

        data: [
          applied,
          interview,
          offer,
          rejected,
        ],

        backgroundColor: [
          "#3b82f6",
          "#f59e0b",
          "#10b981",
          "#ef4444",
        ],

        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "auto",
      }}
    >
      <Pie data={data} />
    </div>
  );
}