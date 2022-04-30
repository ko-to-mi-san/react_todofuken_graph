import React from "react"
import PrefCheckBox from "./PrefCheckBox"
import Graph from "./Graph"

import axios from "axios"

const Main: React.FC = () => {
  return (
    <maincontents>
      <h2>都道府県</h2>
      {prefectures && (
        <CheckField
          prefectures={orefectures.result}
          onChange={handleClickCheck}
        />
      )}
    </maincontents>
  )
}

export default MainContents
