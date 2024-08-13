import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <h1>Error 404!</h1>
      <p>
        404! Page Not Found - <Link to="/">Go to Home Page</Link>
      </p>
    </div>
  );
}
