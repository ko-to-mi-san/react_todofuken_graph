import React from "react"
import PrefCheckBox from "./PrefCheckBox"
import Graph from "./Graph"

import axios from "axios"

const Main: React.FC = () => {
  return (
    <maincontents>
      <h2>ι½ιεΊη</h2>
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
