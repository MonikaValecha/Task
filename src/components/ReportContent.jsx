import React from "react";
import ReportRow from "./ReportRow";

const ReportContent = ({ issues, issueslink, StoreArray }) => {
  return (
    <tbody>
      {issues.map((issueData) => {
        return <ReportRow key={issueData.id}
        issueData={issueData}
        StoreArray={StoreArray} />;
      })}
    </tbody>
  );
};

export default ReportContent;
