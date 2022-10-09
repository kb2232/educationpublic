import { wsListerner } from "./features";
const wsUrl = "wss://scg.bdev.lumafintech.com/api/secondary-market-service/rfqStream/websocket"
const url = "ws://localhost:8080/websocketmessages"
interface Message {
//   id: number
//   channel: 'redux' | 'general'
//   userName: string
  messages: string
}
const bookApi = wsListerner.injectEndpoints({
    endpoints: (builder) => ({
        getMessages: builder.query<Message[], void>({
            query: () => "messages",
            async onCacheEntryAdded(arg, { cacheDataLoaded, cacheEntryRemoved, updateCachedData }) {
                const ws = new WebSocket(url);//websocket connection
                try {
                    const res = await cacheDataLoaded; //to determine when the first data has been fetched from /websocketmessages
                    console.log("=====res===", res);
                    ws.addEventListener("open", ()=>console.log("=====SERVER IS OPEN"));
                    const listener = async (event: MessageEvent) => {
                        const data = event.data
                        console.log("=======data:", data)
                        //apply streaming updates as messages are received
                        updateCachedData((draft) => {
                            console.log("=======draft:", draft)
                            draft.push(data)
                        });
                    }
                    ws.addEventListener("error",(error)=>console.log("=====SERVER ERROR", error))
                    ws.addEventListener("message", listener);
                } catch (error) {
                    console.log("-----ERROR---", error)
                }
               await cacheEntryRemoved;
               ws.close();
            }
        })
    })
});

export const {useGetMessagesQuery} = bookApi;