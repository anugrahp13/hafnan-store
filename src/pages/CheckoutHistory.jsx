import { Link } from "react-router-dom";
import useStore from "../stores/store";
import BelumBelanja from "./BelumBelanja";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";

export const CheckoutHistory = () => {
  const store = useStore();
  const history = store.history;
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 grid gap-2">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">Checkout History</h2>
          <Button
            onClick={store.clearHistory}
            style="text-base font-normal hover:bg-green-600 text-slate-800 hover:text-white"
          >
            Clear History
          </Button>
        </div>
        <div className="border rounded-xl p-4 h-[60vh] overflow-y-auto">
          {store.history.length === 0 ? (
            <div className="flex h-full items-center justify-center">
              <BelumBelanja />
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              {history.map((checkout) => (
                <Link to={`/history/${checkout.id}`} key={checkout.id}>
                  <div className="flex justify-between items-center border shadow-sm p-4 rounded-lg hover:shadow-green-200 transition-all duration-500">
                    <div className="flex flex-col gap-1">
                      <p className="text-xs text-slate-800">Tanggal Belanja</p>
                      <p className="text-sm">{checkout.date}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-xs text-gray-500">Total belanja</p>
                      <p className="text-sm font-semibold">$ {checkout.totalPrice}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <Button onClick={() => navigate("/")} style="text-base bg-green-600 text-white">
            Belanja Lagi!
        </Button>
      </div>
    </>
  );
};
