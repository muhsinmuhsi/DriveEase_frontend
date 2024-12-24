import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BookingChart = () => {
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/booking-stats",
          { withCredentials: true }
        );
        const { data } = response.data;

        const labels = data.map((item) => item.month);
        const bookingsData = data.map((item) => item.totalBookings);
        const amountData = data.map((item) => item.totalAmount);

        setChartData({
          labels,
          datasets: [
            {
              label: "Total Bookings",
              data: bookingsData,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
              yAxisID: "yBookings", // Bind this dataset to the first y-axis
            },
            {
              label: "Total Amount",
              data: amountData,
              backgroundColor: "rgba(153, 102, 255, 0.2)",
              borderColor: "rgba(153, 102, 255, 1)",
              borderWidth: 1,
              yAxisID: "yAmount", // Bind this dataset to the second y-axis
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching booking stats:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-96 mt-20 mx-auto w-10/12">
      <Bar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yBookings: {
              type: "linear",
              position: "left",
              title: {
                display: true,
                text: "Total Bookings",
              },
              ticks: {
                beginAtZero: true,
              },
            },
            yAmount: {
              type: "linear",
              position: "right",
              title: {
                display: true,
                text: "Total Amount",
              },
              ticks: {
                beginAtZero: true,
              },
              grid: {
                drawOnChartArea: false, // Prevent grid lines from overlapping
              },
            },
            x: {
              title: {
                display: true,
                text: "Months",
              },
            },
          },
          plugins: {
            legend: {
              position: "top",
            },
          },
        }}
      />
    </div>
  );
};

export default BookingChart;
