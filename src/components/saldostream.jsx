import { useEffect, useState } from "react";
import Pusher from "pusher-js";

const SaldoStream = ({ userId }) => {
    const [saldo, setSaldo] = useState(null);

    useEffect(() => {
        const pusher = new Pusher("ce49a905146524dcb6c9", {
            cluster: "mt1",
            wsHost: "127.0.0.1",
            wsPort: 6001,
            forceTLS: false,
            disableStats: true,
        });
        console.log(pusher);
        const channel = pusher.subscribe("saldo-channel");
        channel.bind("SaldoUpdated", (data) => {
            setSaldo(data.saldo);
            
        });
        
        return () => {
            pusher.unsubscribe("saldo-channel");
            pusher.disconnect();
        };
    }, []);

    return <h2>Saldo: {saldo}</h2>;
};

export default SaldoStream;
