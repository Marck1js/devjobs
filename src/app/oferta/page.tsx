import ApplyNow from "@/components/applyNow/ApplyNow";
import CompanySite from "@/components/companySite/CompanySite";
import DescriptionJob from "@/components/descriptionJob/DescriptionJob";
import FormSearch from "@/components/formSearch/FormSearch";
import Header from "@/components/header/Header";
import React from "react";

const page = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <div>
        <Header>
          <CompanySite color="#E99210" />
        </Header>
      </div>

      <div style={{flex: 1}}>
      <DescriptionJob />
      </div>

      <ApplyNow />
    </div>
  );
};

export default page;
