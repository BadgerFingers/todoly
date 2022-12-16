import Nav from "../components/Nav";
import ChartRecentCampaigns from "../components/ChartRecentCampaigns";
import StatsCampaignsOverview from "../components/StatsCampaignsOverview";
import StatsActiveCampaigns from "../components/StatsActiveCampaigns";

function App() {
  return (
    <div className="flex flex-col md:h-screen md:flex-row">
      <Nav />
      <div id="dash-container">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-5/12">
          <h1>Recent Campaigns</h1>
          <ChartRecentCampaigns />
          </div>

          <div className="w-full md:w-6/12 mt-10 md:mt-0">
          <h1>Campaigns Overview</h1>
          <StatsCampaignsOverview />
          </div>
        </div>

        <div className="mt-20">
          <h1>Active Campaigns Info</h1>
          <StatsActiveCampaigns />
        </div>

      </div>
    </div>
  );
}

export default App;
