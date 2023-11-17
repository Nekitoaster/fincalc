import css from "../styles/styles.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { purple } from "@mui/material/colors";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../stores/reducers/data";

function Main() {
  const radioColor = {
    color: purple[300],
    "&.Mui-checked": {
      color: purple[400],
    },
  };

  const dispatch = useDispatch();
  const data = useSelector((state) => state.baseData.data);

  const {
    BCGContainer,
    ContentContainer,
    FormContainer,
    Input,
    Button,
    DataContainer,
    ContentLine,
    ContentCell,
  } = css;

  const [money, setMoney] = useState("");
  const [moneyType, setMoneyType] = useState("доход");
  const [comment, setComment] = useState("");
  const [expense, setExpense] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const transaction = {
      money,
      moneyType,
      comment: moneyType === "доход" ? comment : "",
      expense: moneyType === "расход" ? expense : "",
    };
    {
      (money && moneyType && expense && dispatch(setData(transaction))) ||
        (money && moneyType && comment && dispatch(setData(transaction))) ||
        alert("Введите все данные!");
    }
    setMoney("");
    setMoneyType("доход");
    setComment("");
    setExpense("");
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <BCGContainer>
      <ContentContainer>
        <FormContainer>
          <Input
            style={{ boxShadow: "0px 3px 7px 0px rgba(0, 0, 0, 0.4)" }}
            onChange={(e) => setMoney(e.target.value)}
            value={money}
            placeholder="Введите сумму транзакции"
            type="number"
          />
          <FormLabel id="demo-controlled-radio-buttons-group">
            Тип транзакции
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={moneyType}
            onChange={(e) => setMoneyType(e.target.value)}
          >
            <FormControlLabel
              value="доход"
              control={<Radio sx={radioColor} />}
              label="Доход"
            />
            <FormControlLabel
              value="расход"
              control={<Radio sx={radioColor} />}
              label="Расход"
            />
          </RadioGroup>
          {moneyType === "доход" ? (
            <Input
              style={{ boxShadow: "0px 3px 7px 0px rgba(0, 0, 0, 0.4)" }}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Введите комментарий"
            />
          ) : (
            <FormControl sx={{ m: 1, minWidth: 320 }} size="small">
              <InputLabel
                sx={[
                  {
                    "&.Mui-focused": {
                      color: "#6F2DBD",
                    },
                  },
                  { backgroundColor: "whitesmoke" },
                ]}
                id="demo-select-small-label"
              >
                Категория расходов
              </InputLabel>
              <Select
                sx={[
                  {
                    borderRadius: "7px",
                  },
                  {
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#A663CC",
                        boxShadow: "0 0 0 0.2rem rgba(165, 99, 204, 0.35)",
                      },
                  },
                ]}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={expense}
                onChange={(e) => setExpense(e.target.value)}
              >
                <MenuItem value={"продукты"}>Продукты</MenuItem>
                <MenuItem value={"жкх и коммунальные услуги"}>
                  ЖКХ и коммунальные услуги
                </MenuItem>
                <MenuItem value={"транспорт"}>Транспорт</MenuItem>
                <MenuItem value={"путешествия"}>Путешествия</MenuItem>
                <MenuItem value={"развлечения"}>Развлечения</MenuItem>
                <MenuItem value={"одежда"}>Одежда</MenuItem>
                <MenuItem value={"оразование"}>Оразование</MenuItem>
                <MenuItem value={"медицина"}>Медицина</MenuItem>
                <MenuItem value={"заправка"}>Заправки</MenuItem>
                <MenuItem value={"переводы"}>Переводы</MenuItem>
                <MenuItem value={"электротовары"}>Электротовары</MenuItem>
                <MenuItem value={"табак"}>Табак</MenuItem>
                <MenuItem value={"спорт"}>Спорт</MenuItem>
                <MenuItem value={"другое"}>Другое</MenuItem>
              </Select>
            </FormControl>
          )}
          <Button
            onClick={handleChange}
            style={{
              marginTop: "15px",
              boxShadow: "0px 4px 7px 0px rgba(0, 0, 0, 0.3)",
            }}
          >
            СОХРАНИТЬ
          </Button>
        </FormContainer>

        <DataContainer
          style={{ marginTop: "20px", maxHeight: "230px", marginBottom: "5px" }}
        >
          <ContentLine
            style={{
              marginBottom: "10px",
              background: "#A663CC",
              color: "#B9FAF8",
            }}
          >
            <ContentCell width={"100%"}>Последние транзакции:</ContentCell>
          </ContentLine>
          {data.length === 1 ? (
            <ContentLine>
              <ContentCell width={"15%"}>
                {data[0].moneyType.toUpperCase()}
              </ContentCell>
              <ContentCell width={"25%"}>
                {data[0].comment
                  ? data[0].comment.toUpperCase()
                  : data[0].expense.toUpperCase()}
              </ContentCell>
              <ContentCell style={{ textAlign: "right" }} width={"60%"}>
                Сумма: {+data[0].money}
              </ContentCell>
            </ContentLine>
          ) : data.length === 2 ? (
            <>
              <ContentLine style={{ marginBottom: "10px" }}>
                <ContentCell width={"15%"}>
                  {data[data.length - 1].moneyType.toUpperCase()}
                </ContentCell>
                <ContentCell width={"25%"}>
                  {data[data.length - 1].comment
                    ? data[data.length - 1].comment.toUpperCase()
                    : data[data.length - 1].expense.toUpperCase()}
                </ContentCell>
                <ContentCell style={{ textAlign: "right" }} width={"60%"}>
                  Сумма: {+data[data.length - 1].money}
                </ContentCell>
              </ContentLine>
              <ContentLine>
                <ContentCell width={"15%"}>
                  {data[0].moneyType.toUpperCase()}
                </ContentCell>
                <ContentCell width={"25%"}>
                  {data[0].comment
                    ? data[0].comment.toUpperCase()
                    : data[0].expense.toUpperCase()}
                </ContentCell>
                <ContentCell style={{ textAlign: "right" }} width={"60%"}>
                  Сумма: {+data[0].money}
                </ContentCell>
              </ContentLine>
            </>
          ) : data.length >= 3 ? (
            <>
              <ContentLine style={{ marginBottom: "10px" }}>
                <ContentCell width={"15%"}>
                  {data[data.length - 1].moneyType.toUpperCase()}
                </ContentCell>
                <ContentCell width={"25%"}>
                  {data[data.length - 1].comment
                    ? data[data.length - 1].comment.toUpperCase()
                    : data[data.length - 1].expense.toUpperCase()}
                </ContentCell>
                <ContentCell style={{ textAlign: "right" }} width={"60%"}>
                  Сумма: {+data[data.length - 1].money}
                </ContentCell>
              </ContentLine>
              <ContentLine style={{ marginBottom: "10px" }}>
                <ContentCell width={"15%"}>
                  {data[data.length - 2].moneyType.toUpperCase()}
                </ContentCell>
                <ContentCell width={"25%"}>
                  {data[data.length - 2].comment
                    ? data[data.length - 2].comment.toUpperCase()
                    : data[data.length - 2].expense.toUpperCase()}
                </ContentCell>
                <ContentCell style={{ textAlign: "right" }} width={"60%"}>
                  Сумма: {+data[data.length - 2].money}
                </ContentCell>
              </ContentLine>
              <ContentLine>
                <ContentCell width={"15%"}>
                  {data[data.length - 3].moneyType.toUpperCase()}
                </ContentCell>
                <ContentCell width={"25%"}>
                  {data[data.length - 3].comment
                    ? data[data.length - 3].comment.toUpperCase()
                    : data[data.length - 3].expense.toUpperCase()}
                </ContentCell>
                <ContentCell style={{ textAlign: "right" }} width={"60%"}>
                  Сумма: {+data[data.length - 3].money}
                </ContentCell>
              </ContentLine>
            </>
          ) : (
            <ContentLine>
              <ContentCell width={"100%"}>Добавте транзакции</ContentCell>
            </ContentLine>
          )}
        </DataContainer>
      </ContentContainer>
    </BCGContainer>
  );
}

export default Main;
