import css from "../styles/styles.css";
import { useSelector} from "react-redux";
import { useEffect, useMemo, useState } from "react";
import MyResponsivePie from "../components/Grafic";

function Statistic() {
  const {
    BCGContainer,
    ContentContainer,
    ContentLine,
    ContentCell,
    ButtonsLine,
    Button,
    DataContainer,
  } = css;
  const data = useSelector((state) => state.baseData.data);
  const [currentType, setCurrentType] = useState("общее");
  const receviedData = useMemo(
    () => data.filter((item) => item.moneyType === "доход"),
    [data]
  );
  const expenseData = useMemo(
    () => data.filter((item) => item.moneyType === "расход"),
    [data]
  );

  const recievedDataSumm = receviedData.reduce((acc, item) => acc + +item.money, 0);
  const expenseDataSumm = expenseData.reduce((acc, item) => acc + +item.money, 0);

  const [products, setProducts] = useState(0);
  const [utilities, setUtilities] = useState(0);
  const [transport, setTransport] = useState(0);
  const [journeys, setJourneys] = useState(0);
  const [entertainments, setEntertainments] = useState(0);
  const [clothes, setClothes] = useState(0);
  const [education, setEducation] = useState(0);
  const [medicine, setMedicine] = useState(0);
  const [fuelling, setFuelling] = useState(0);
  const [transfer, setTransfer] = useState(0);
  const [electrogoods, setElectrogoods] = useState(0);
  const [tobacco, setTobacoo] = useState(0);
  const [sport, setSport] = useState(0);
  const [other, setOther] = useState(0);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  useMemo(() => {
    for (let i = 0; i < expenseData.length; i++) {
      if (expenseData[i].expense === 'продукты') setProducts((prev) => prev + +expenseData[i].money);
      if (expenseData[i].expense === "жкх и коммунальные услуги")
        setUtilities((prev) => prev + +expenseData[i].money);
      if (expenseData[i].expense === "транспорт")
        setTransport((prev) => prev + +expenseData[i].money);
      if (expenseData[i].expense === "путешествия")
        setJourneys((prev) => prev + +expenseData[i].money);
      if (expenseData[i].expense === "развлечения")
        setEntertainments((prev) => prev + +expenseData[i].money);
      if (expenseData[i].expense === "одежда")
        setClothes((prev) => prev + +expenseData[i].money);
      if (expenseData[i].expense === "оразование")
        setEducation((prev) => prev + +expenseData[i].money);
      if (expenseData[i].expense === "медицина")
        setMedicine((prev) => prev + +expenseData[i].money);
      if (expenseData[i].expense === "заправка")
        setFuelling((prev) => prev + +expenseData[i].money);
      if (expenseData[i].expense === "переводы")
        setTransfer((prev) => prev + +expenseData[i].money);
      if (expenseData[i].expense === "электротовары")
        setElectrogoods((prev) => prev + +expenseData[i].money);
      if (expenseData[i].expense === "табак")
        setTobacoo((prev) => prev + +expenseData[i].money);
      if (expenseData[i].expense === "спорт")
        setSport((prev) => prev + +expenseData[i].money);
      if (expenseData[i].expense === "другое")
        setOther((prev) => prev + +expenseData[i].money);
    }
  }, [expenseData])

  const graficData = [
    {
      id: "продукты",
      label: "продукты",
      value: products,
      color: "hsl(91, 70%, 50%)",
    },
    {
      id: "жкх и коммунальные услуги",
      label: "жкх и коммунальные услуги",
      value: utilities,
      color: "hsl(31, 70%, 50%)",
    },
    {
      id: "транспорт",
      label: "транспорт",
      value: transport,
      color: "hsl(113, 70%, 50%)",
    },
    {
      id: "путешествия",
      label: "путешествия",
      value: journeys,
      color: "hsl(196, 70%, 50%)",
    },
    {
      id: "развлечения",
      label: "развлечения",
      value: entertainments,
      color: "hsl(169, 70%, 50%)",
    },
    {
      id: "одежда",
      label: "одежда",
      value: clothes,
      color: "hsl(169, 70%, 50%)",
    },
    {
      id: "оразование",
      label: "оразование",
      value: education,
      color: "hsl(169, 70%, 50%)",
    },
    {
      id: "медицина",
      label: "медицина",
      value: medicine,
      color: "hsl(169, 70%, 50%)",
    },
    {
      id: "заправка",
      label: "заправка",
      value: fuelling,
      color: "hsl(169, 70%, 50%)",
    },
    {
      id: "переводы",
      label: "переводы",
      value: transfer,
      color: "hsl(169, 70%, 50%)",
    },
    {
      id: "электротовары",
      label: "электротовары",
      value: electrogoods,
      color: "hsl(169, 70%, 50%)",
    },
    {
      id: "табак",
      label: "табак",
      value: tobacco,
      color: "hsl(169, 70%, 50%)",
    },
    {
      id: "спорт",
      label: "спорт",
      value: sport,
      color: "hsl(169, 70%, 50%)",
    },
    {
      id: "другое",
      label: "другое",
      value: other,
      color: "hsl(169, 70%, 50%)",
    },
  ].filter(item => item.value > 0);

  return (
    <BCGContainer>
      <ContentContainer>
        <ContentLine
          style={{
            marginBottom: "10px",
            background: "#A663CC",
            color: "#B9FAF8",
          }}
        >
          <ContentCell width={"100%"}>Транзакции:</ContentCell>
        </ContentLine>
        <ButtonsLine>
          <Button onClick={() => setCurrentType("доход")}>ДОХОДЫ</Button>
          <Button onClick={() => setCurrentType("расход")}>РАСХОДЫ</Button>
          <Button onClick={() => setCurrentType("общее")}>ОБЩЕЕ</Button>
        </ButtonsLine>
        <DataContainer>
          {currentType === "общее" &&
            data.map((item, index) => {
              return (
                <ContentLine key={index} style={{ marginBottom: "10px" }}>
                  <ContentCell width={"15%"}>
                    {item.moneyType.toUpperCase()}
                  </ContentCell>
                  <ContentCell width={"25%"}>
                    {item.comment
                      ? item.comment.toUpperCase()
                      : item.expense.toUpperCase()}
                  </ContentCell>
                  <ContentCell style={{ textAlign: "right" }} width={"60%"}>
                    Сумма: {+item.money}
                  </ContentCell>
                </ContentLine>
              );
            })}
          {currentType === "расход" &&
            expenseData.map((item, index) => {
              return (
                <ContentLine key={index} style={{ marginBottom: "10px" }}>
                  <ContentCell width={"15%"}>
                    {item.moneyType.toUpperCase()}
                  </ContentCell>
                  <ContentCell width={"25%"}>
                    {item.comment
                      ? item.comment.toUpperCase()
                      : item.expense.toUpperCase()}
                  </ContentCell>
                  <ContentCell style={{ textAlign: "right" }} width={"60%"}>
                    Сумма: {+item.money}
                  </ContentCell>
                </ContentLine>
              );
            })}
          {currentType === "доход" &&
            receviedData.map((item, index) => {
              return (
                <ContentLine key={index} style={{ marginBottom: "10px" }}>
                  <ContentCell width={"15%"}>
                    {item.moneyType.toUpperCase()}
                  </ContentCell>
                  <ContentCell width={"25%"}>
                    {item.comment
                      ? item.comment.toUpperCase()
                      : item.expense.toUpperCase()}
                  </ContentCell>
                  <ContentCell style={{ textAlign: "right" }} width={"60%"}>
                    Сумма: {+item.money}
                  </ContentCell>
                </ContentLine>
              );
            })}
        </DataContainer>
        <DataContainer>
          {currentType === "расход" ? (
            <ContentLine>
              <ContentCell style={{ textAlign: "right" }} width={"100%"}>
                Итого: {expenseDataSumm}
              </ContentCell>
            </ContentLine>
          ) : currentType === "доход" ? (
            <ContentLine >
              <ContentCell style={{ textAlign: "right" }} width={"100%"}>
                Итого: {recievedDataSumm}
              </ContentCell>
            </ContentLine>
          ) : (
            <ContentLine >
              <ContentCell style={{ textAlign: "right" }} width={"100%"}>
                Итого: {recievedDataSumm - expenseDataSumm}
              </ContentCell>
            </ContentLine>
          )}
        </DataContainer>
        {currentType === "расход" && (
          <DataContainer
            style={{
              background: "whitesmoke",
              height: "800px",
              width: "980px",
            }}
          >
            <MyResponsivePie data={graficData} />
          </DataContainer>
        )}
      </ContentContainer>
    </BCGContainer>
  );
}

export default Statistic;
