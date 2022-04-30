import React from "react"

type Props = {
  prefectures:
  | {
    prefCode: number
    prefName: string
  }[]

  onChange: (name: string, prefName: number, check: boolean) => void
}

const PrefCheckBox: React.FC<Props> = ({prefectures, onChange}) => {
  return (
    <>
    <div>
      {prefectures.map((prefecture) => (
        <input type="checkbox"
          name="pref"
          onChange={(event) =>
            onChange(
              prefecture.prefName,
              prefecture.prefCode,
              event.target.checked
            )
          }
          id={"checkbox" + prefecture.prefCode}
        />
        <label
          htmlFor={"checkbox" + prefecture.prefCode}
        >
          {prefecture.prefName.length === 3
          ? "" + prefecture.prefName
          : prefecture.prefName}
        </label>
      ))}
      </div>
    </>
  )
}

export default PrefCheckBox
