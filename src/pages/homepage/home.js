import React from "react";
import Card from "../../components/card/Card";
import StatCard from "../../components/statCard/statCard";
import PieChart from "../../components/pieChart/pieChart";
import LineChart from "../../components/lineChart/lineChart";
import BarChart from "../../components/barChart/barChart";
import styles from "./home.module.css";
const HomePage = () => {
  const channelsData = {
    labels: ["Direct", "Facebook", "Twitter", "Instagram", "Referral"],
    values: [60, 15, 10, 10, 5],
    colors: ["#36495d", "#1e88e5", "#ff4560", "#775dd0", "#2b908f"],
  };

  // Data for line chart
  const revenueData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Current Year",
        data: [65, 70, 90, 95, 100, 120, 130, 150, 140, 145, 155, 180],
        borderColor: "#1e88e5",
        tension: 0.4,
        pointRadius: 2,
        borderWidth: 3,
      },
      {
        label: "Previous Year",
        data: [50, 55, 65, 70, 75, 80, 85, 90, 95, 100, 110, 115],
        borderColor: "#757575",
        tension: 0.4,
        pointRadius: 2,
        borderWidth: 3,
      },
    ],
  };

  // Data for bar chart
  const barChartData = {
    labels: ["App 01", "App 02", "App 03", "App 04", "App 05", "App 06"],
    datasets: [
      {
        label: "Sales",
        data: [65, 85, 45, 75, 60, 90],
        backgroundColor: "#1e88e5",
        barThickness: 16,
        borderRadius: 4,
      },
    ],
  };

  const countriesData = [
    { country: "United States", code: "us", sales: 2500, revenue: "25.8%" },
    { country: "Germany", code: "de", sales: 1500, revenue: "15.7%" },
    { country: "Great Britain", code: "gb", sales: 690, revenue: "12.3%" },
    { country: "Brazil", code: "br", sales: 562, revenue: "9.8%" },
    { country: "Australia", code: "au", sales: 420, revenue: "5.6%" },
  ];

  const topProducts = [
    {
      id: "SKU-123",
      name: "Nike Air Deebreak",
      price: "$120.00",
      sold: 75,
      revenue: "$9,000",
    },
  ];

  return (
    <div className={styles.main__container}>
      <div className="container-fluid p-4">
        <div className="row mb-4">
          <div className="col-md-8">
            <h5 className="mb-4">Sales</h5>
          </div>
        </div>

        {/* Stats Row */}
        <div className="row mb-4">
          <div className="col-md-4">
            <StatCard
              title="Sales"
              value="$230,220"
              change="+55% since last month"
              timeframe="month"
            />
          </div>
          <div className="col-md-4">
            <StatCard
              title="Customers"
              value="3,200"
              change="+12% since last month"
              timeframe="month"
            />
          </div>
          <div className="col-md-4">
            <StatCard
              title="Avg. Revenue"
              value="$1,200"
              change="+$213 since last month"
              timeframe="month"
            />
          </div>
        </div>

        {/* Charts Row */}
        <div className="row mb-4">
          <div className="col-md-5">
            <Card title="Channels">
              <div className="row">
                <div className="col-md-6">
                  <div style={{ height: 220 }}>
                    <PieChart data={channelsData} />
                  </div>
                </div>
                <div className="col-md-6">
                  {channelsData.labels.map((label, index) => (
                    <div className="mb-2" key={label}>
                      <div className="d-flex align-items-center">
                        <div
                          className="me-2"
                          style={{
                            backgroundColor: channelsData.colors[index],
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                          }}
                        ></div>
                        <span>{label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-5">
                <div>
                  <div className="text-muted small">
                    More than <strong>1,200,000</strong> sales are made using
                    referral marketing, and <strong>700,000</strong> are from
                    social media.
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className={styles.btn__read__more}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Other info related to this chart"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-7">
            <Card
              title="Revenue"
              headerRight={
                <div className="d-flex align-items-center">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="revenue-type"
                      id="current-year"
                      checked
                    />
                    <label
                      className="form-check-label small"
                      htmlFor="current-year"
                    >
                      Current Year
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="revenue-type"
                      id="previous-year"
                    />
                    <label
                      className="form-check-label small"
                      htmlFor="previous-year"
                    >
                      Previous Year
                    </label>
                  </div>
                </div>
              }
            >
              <LineChart data={revenueData} />
            </Card>
          </div>
        </div>

        {/* Third Row */}
        <div className="row mb-4">
          <div className="col-md-8">
            <Card title="Sales by App">
              <BarChart data={barChartData} />
            </Card>
          </div>
          <div className="col-md-4">
            <Card title="Sales by Country">
              <div className="table-responsive">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Country</th>
                      <th>Sales</th>
                      <th>Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {countriesData.map((country, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={`https://flagcdn.com/w40/${country.code}.png`}
                              alt={country.country}
                              className="me-2"
                              style={{
                                width: 20,
                                height: 15,
                                objectFit: "cover",
                              }}
                            />
                            {country.country}
                          </div>
                        </td>
                        <td>{country.sales}</td>
                        <td>{country.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="row">
          <div className="col-12">
            <Card title="Top Selling Products">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="50%">Product</th>
                      <th>Price</th>
                      <th>Sold</th>
                      <th>Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topProducts.map((product, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center">
                            <div
                              className="product-icon me-3"
                              style={{
                                width: 40,
                                height: 40,
                                backgroundColor: "#e0e0e0",
                                borderRadius: "50%",
                              }}
                            >
                              <img
                                className={styles.avatar}
                                src="https://randomuser.me/api/portraits/men/75.jpg"
                                alt=""
                              />
                            </div>
                            <div>
                              <div>{product.name}</div>
                              <div className="text-muted small">
                                {product.id}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{product.price}</td>
                        <td>{product.sold}</td>
                        <td>{product.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
