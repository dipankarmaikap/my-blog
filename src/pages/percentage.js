import React, { useState } from "react"
import SEO from "../components/Seo"
import Layout from "./../components/Layout"

const PercentagePage = () => {
  const [value, setValue] = useState(0)
  return (
    <Layout>
      <SEO title="Percentage" />
      <div className="max-w-md">
        <h1>62.5% of tailwind REM</h1>
        <input
          onChange={e => setValue(e.target.value)}
          value={value}
          className="border"
          type="number"
          name="Value"
          id="Value"
        />
        <span>={(value * 62.5) / 100}</span>
      </div>
    </Layout>
  )
}

export default PercentagePage
