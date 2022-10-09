import { ThemeProvider } from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { useGetMessagesQuery } from "./redux/endpoints";
import { LightTheme} from "./utils";
import {AppContainer, CardContainer, InputContainer, BtnContainer, InputWrapper} from "./App.styles";
const wsURL = `${process.env.REACT_APP_WS_DOMAIN}/${process.env.REACT_APP_WS_PATH}`;

const ws = new WebSocket(wsURL,);
const App = () => {
  const {data=[], isError, error, isLoading, isSuccess}:any = useGetMessagesQuery()
  const [msgFromServer, setMsgFromServer] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const sendMsg = useCallback((msg: string) => {
    ws.send(`${msg}`)
  }, [])
  console.log({data, isError, error, isLoading, isSuccess})

  useEffect(()=>{
    let isRunning = true;
    if(isRunning) {
      ws.onopen = ()=> {
        console.log("server is open");
      }
      ws.onmessage = (event: any) => {
        const {data} = event;
        console.log("data from server - ", data)
        setMsgFromServer(el => [...el, data]);
      }
    }
    return () => {
      isRunning=false
    }
  }, []);
  return(
    <ThemeProvider theme={LightTheme}>
      <AppContainer>
        <h1>Hello World</h1>
        <InputWrapper>
          <InputContainer type={"text"} onChange={(event)=>setInputValue(event.target.value)} />
          <BtnContainer type="button" onClick={()=>sendMsg(inputValue)}>Subimt</BtnContainer>
        </InputWrapper>
        <hr />
        {
          msgFromServer.map((data, index) => <CardContainer key={`${data}_${index}`}>{data}</CardContainer>)
        }
      </AppContainer>
    </ThemeProvider>
  )
}

export default App;
