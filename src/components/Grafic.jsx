import { ResponsivePie } from "@nivo/pie";

export default function MyResponsivePie({ data }) {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 20, bottom: 40, left: 200 }}
      sortByValue={true}
      innerRadius={0.35}
      padAngle={2}
      cornerRadius={5}
      activeOuterRadiusOffset={5}
      colors={{ scheme: "purple_red" }}
      borderWidth={4}
      borderColor="#ac69b5"
      arcLinkLabelsSkipAngle={12}
      arcLinkLabelsTextOffset={13}
      arcLinkLabelsTextColor="#773175"
      arcLinkLabelsOffset={4}
      arcLinkLabelsDiagonalLength={23}
      arcLinkLabelsStraightLength={26}
      arcLinkLabelsThickness={3}
      arcLinkLabelsColor="#773175"
      enableArcLabels={false}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="#000000"
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "left",
          direction: "column",
          justify: false,
          translateX: -200,
          translateY: 0,
          itemsSpacing: 19,
          itemWidth: 97,
          itemHeight: 13,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 13,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
}
