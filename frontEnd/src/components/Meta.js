import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}></meta>
      <meta name='keywords' content={keywords}></meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  Title: "Welcome to Proshop",
  keywords: "Electronics",
  description: "Get the latest electronic products!",
};

export default Meta;
