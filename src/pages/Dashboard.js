import React from "react";

const Dashboard = ({ accountData }) => {
  return (
    <div className="flex flex-1 justify-center items-center text-white text-3xl">
      Hi! {accountData.firstName}
      <br />
      Welcome to StudyNotion!
    </div>
  );
};

export default Dashboard;
